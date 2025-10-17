'use client'
import { useEffect, useState, useCallback, memo } from 'react';
import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import Link from 'next/link';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';
import BlogSidebarForm from '@/components/blog/BlogSidebarForm';

// Define the Blog interface
interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string; 
  subtitle?: string;
  created?: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  faqs?: FAQ[];
  author?: string;
}

// Add FAQ interface
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Add this interface for props
interface BlogDetailProps {
  slug: string;
}

interface TOCSection {
  id: string;
  title: string;
}

// Enhanced cache with TTL for better performance
const blogCache = new Map<string, { data: Blog; timestamp: number }>();
const relatedBlogsCache = new Map<string, { data: Blog[]; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Helper function to check if cache entry is valid
const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_TTL;
};

// Helper function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array: Blog[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Define author bios
const authorBios = {
  "Anuj Anand Malik": {
    name: "Anuj Anand Malik",
    description: "Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.",
    image: "/anujbhiya.svg",
    linkedInUrl: "https://www.linkedin.com/in/iamanujmalik/"
  },
  "Shrey Arora": {
    name: "Shrey Arora",
    description: "Legal professional specializing in corporate law and regulatory compliance. Brings a strategic approach to legal advisory with extensive experience in contract negotiation and business law.",
    image: "/shreychad.svg",
    linkedInUrl: "https://www.linkedin.com/in/shrey-arora-b0487b67/"
  }
};

// Function to extract H2 headings from HTML content
const extractH2Headings = (htmlContent: string): TOCSection[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const h2Elements = doc.querySelectorAll('h2');
  
  const sections: TOCSection[] = [];
  h2Elements.forEach((h2, index) => {
    const title = h2.textContent?.trim() || '';
    if (title) {
      const id = `section-${index}`;
      h2.id = id; // Set ID on the element
      sections.push({ id, title });
    }
  });
  
  return sections;
};

// Optimized function to fetch blog by slug with enhanced caching
const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
  const cached = blogCache.get(slug);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(blogsCollection, where('slug', '==', slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const blogData = { id: doc.id, ...doc.data() } as Blog;
      blogCache.set(slug, { data: blogData, timestamp: Date.now() });
      return blogData;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
};

// Optimized function to fetch related blogs with enhanced caching
const fetchRelatedBlogs = async (excludeId: string): Promise<Blog[]> => {
  const cacheKey = `related_${excludeId}`;
  const cached = relatedBlogsCache.get(cacheKey);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(blogsCollection, orderBy('created', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    
    const allBlogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Blog[];
    
    const otherBlogs = allBlogs.filter(blog => blog.id !== excludeId);
    const randomBlogs = shuffleArray(otherBlogs).slice(0, 3);
    
    relatedBlogsCache.set(cacheKey, { data: randomBlogs, timestamp: Date.now() });
    return randomBlogs;
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};

// Optimized function to fetch FAQs
const fetchFAQs = async (blogId: string): Promise<FAQ[]> => {
  try {
    const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
    return faqsSnapshot.docs.map(doc => ({
      id: doc.id,
      question: doc.data().question || '',
      answer: doc.data().answer || ''
    }));
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

const ArticleDetail = memo(function ArticleDetail({ slug }: BlogDetailProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);
  const [sidebarsFixed, setSidebarsFixed] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [processedDescription, setProcessedDescription] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    const loadBlogData = async () => {
      try {
        setLoading(true);
        const blogData = await fetchBlogBySlug(slug);
        
        if (blogData) {
          setBlog(blogData);
          
          // Extract H2 headings and add IDs
          const sections = extractH2Headings(blogData.description);
          setTocSections(sections);
          
          // Add IDs to H2 elements in the description
          let modifiedDescription = blogData.description;
          const parser = new DOMParser();
          const doc = parser.parseFromString(blogData.description, 'text/html');
          const h2Elements = doc.querySelectorAll('h2');
          h2Elements.forEach((h2, index) => {
            const id = `section-${index}`;
            h2.id = id;
          });
          modifiedDescription = doc.body.innerHTML;
          setProcessedDescription(modifiedDescription);
          
          if (sections.length > 0) {
            setActiveSection(sections[0].id);
          }
          
          const [relatedBlogsData, faqsData] = await Promise.all([
            fetchRelatedBlogs(blogData.id),
            fetchFAQs(blogData.id)
          ]);
          
          setRelatedBlogs(relatedBlogsData);
          setFaqs(faqsData);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error loading blog data:", error);
        setLoading(false);
      }
    };
    
    if (slug) {
      loadBlogData();
    }
    
    return () => {
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [slug]);

  useEffect(() => {
    const updateSidebarPosition = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const scrollY = window.scrollY;
      const footerTop = footer.getBoundingClientRect().top + scrollY;
      const shouldApplyConstraint = footerTop < scrollY + 400;
      setSidebarsFixed(!shouldApplyConstraint);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSidebarPosition();

          // Section tracking
          const scrollPosition = window.scrollY + 250;
          for (const section of tocSections) {
            const element = document.getElementById(section.id);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section.id);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    updateSidebarPosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSidebarPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSidebarPosition);
    };
  }, [tocSections]);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId) ? prev.filter(id => id !== faqId) : [...prev, faqId]
    );
  };

  // Inject FAQ schema into document head for SEO
  useEffect(() => {
    if (faqs.length > 0 && typeof window !== 'undefined') {
      // Remove existing FAQ schema if any
      const existingSchema = document.getElementById('blog-faq-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      // Create and inject new FAQ schema
      const script = document.createElement('script');
      script.id = 'blog-faq-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
      document.head.appendChild(script);

      return () => {
        const schemaToRemove = document.getElementById('blog-faq-schema');
        if (schemaToRemove) {
          schemaToRemove.remove();
        }
      };
    }
  }, [faqs]);

  const handleShare = (platform: string) => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const title = blog?.title || 'Check out this blog post';
    let shareUrl = '';

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-x-hidden mt-20" style={{ 
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(19, 69, 195, 0.15), transparent), linear-gradient(180deg, #0C002B 0%, #1a0052 50%, #0C002B 100%)'
      }}>
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-white/10 rounded-lg w-3/4 mx-auto"></div>
            <div className="h-6 bg-white/10 rounded-lg w-1/2 mx-auto"></div>
            <div className="h-64 bg-white/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ 
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(19, 69, 195, 0.15), transparent), linear-gradient(180deg, #0C002B 0%, #1a0052 50%, #0C002B 100%)'
      }}>
        <div className="text-center">
          <i className="fas fa-book-open text-[#FFB703] text-6xl mb-6" aria-hidden="true"></i>
          <h1 className="text-3xl font-bold text-white mb-4 font-nunito">Article Not Found</h1>
          <p className="text-white/70 mb-8 font-nunito">We couldn't find the blog post you're looking for.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:scale-105" style={{
            background: 'linear-gradient(135deg, #FFB703 0%, #FFA000 100%)',
            color: '#0C002B'
          }}>
            <i className="fas fa-arrow-left text-xs" aria-hidden="true"></i>
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden mt-20" style={{ 
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(19, 69, 195, 0.15), transparent), linear-gradient(180deg, #0C002B 0%, #1a0052 50%, #0C002B 100%)'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout style paint' }}>
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFB703 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #1345C3 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #069A81 0%, transparent 70%)',
            animation: 'glow-pulse 6s ease-in-out infinite'
          }}
        />
      </div>

      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle={blog.title}
          sections={tocSections}
        />
      )}

      <div className="relative z-10 pt-8 pb-16 md:pb-8">
        <div className="container mx-auto px-3 sm:px-4 lg:px-5 xl:px-6 2xl:px-8 max-w-7xl">
          {/* Hero Section */}
          <div className={`text-center mb-8 lg:mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-1.5 mb-3 text-[10px] lg:text-xs">
              <span className="text-white/60 font-nunito">Home</span>
              <i className="fas fa-chevron-right text-white/40 text-[8px]" aria-hidden="true"></i>
              <span className="text-white/60 font-nunito">Blog</span>
              <i className="fas fa-chevron-right text-white/40 text-[8px]" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-nunito font-medium">Article</span>
            </div>

            {/* Main Heading */}
            <div className="relative inline-block mb-4">
              <h1 
                className="font-nunito font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-3"
      style={{
                  background: 'linear-gradient(135deg, #FFB703 0%, #FFC93D 50%, #FFB703 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(255, 183, 3, 0.3)'
                }}
              >
            {blog.title}
          </h1>
              <div 
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                style={{
                  width: '60%',
                  background: 'linear-gradient(90deg, transparent, #FFB703, transparent)',
                  boxShadow: '0 0 20px rgba(255, 183, 3, 0.5)'
                }}
              />
      </div>
      
            {/* Subtitle */}
            {blog.subtitle && (
              <p className="text-white/90 font-nunito text-xs md:text-sm lg:text-base leading-relaxed max-w-3xl mx-auto mb-5">
                {blog.subtitle}
                    </p>
                  )}

            {/* Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-calendar text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito">{blog.date}</span>
              </div>
              {blog.author && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <i className="fas fa-user text-[#FFB703] text-xs" aria-hidden="true"></i>
                  <span className="text-white text-[10px] lg:text-xs font-nunito">{blog.author}</span>
                </div>
              )}
              </div>
              
            {/* Featured Image */}
              {blog.image && (
              <div className="max-w-5xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              )}
          </div>

          {/* Content Layout with Right Sidebar */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Main Content Area */}
            <div 
              className={`lg:col-span-8 min-h-[500px] transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div 
                className="rounded-2xl p-6 md:p-8 backdrop-blur-xl border border-white/10 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(12, 0, 43, 0.8) 100%)'
                }}
              >
                <div 
                  className="prose prose-invert prose-lg max-w-none blog-content" 
                  dangerouslySetInnerHTML={{ __html: processedDescription }}
                />
              </div>
                
                {/* Share Section */}
              <div className="mt-6 rounded-xl p-5 backdrop-blur-xl border border-white/10" style={{
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.1) 0%, rgba(12, 0, 43, 0.8) 100%)'
              }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-share-alt text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <span className="text-white font-nunito font-semibold">Share this article</span>
                  </div>
                  <div className="flex gap-2">
                        <button 
                          onClick={() => handleShare('facebook')}
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 border border-white/20"
                      aria-label="Share on Facebook"
                        >
                      <i className="fab fa-facebook-f text-white text-sm" aria-hidden="true"></i>
                        </button>
                        <button 
                          onClick={() => handleShare('twitter')}
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-black flex items-center justify-center transition-all duration-300 border border-white/20"
                      aria-label="Share on Twitter"
                        >
                      <i className="fab fa-twitter text-white text-sm" aria-hidden="true"></i>
                        </button>
                        <button 
                          onClick={() => handleShare('linkedin')}
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 border border-white/20"
                      aria-label="Share on LinkedIn"
                    >
                      <i className="fab fa-linkedin-in text-white text-sm" aria-hidden="true"></i>
                        </button>
              </div>
            </div>
          </div>
          
              {/* Author Bio */}
            {blog.author && authorBios[blog.author as keyof typeof authorBios] && (
                <div className="mt-6 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-xl" style={{
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.1) 0%, rgba(12, 0, 43, 0.9) 100%)'
                }}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img 
                      src={authorBios[blog.author as keyof typeof authorBios].image}
                        alt={blog.author}
                      className="w-20 h-20 rounded-xl border-2 border-[#FFB703]/30 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-nunito font-bold text-lg mb-1">{blog.author}</h3>
                      <p className="text-white/70 font-nunito text-sm mb-3 leading-relaxed">
                        {authorBios[blog.author as keyof typeof authorBios].description.substring(0, 200) + "..."}
                      </p>
                      <a 
                        href={authorBios[blog.author as keyof typeof authorBios].linkedInUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-[#FFB703] hover:text-[#FFC93D] font-nunito font-medium text-sm transition-colors"
                    >
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            )}

              {/* FAQs */}
        {faqs.length > 0 && (
                  <div className="mt-6 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-xl" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(12, 0, 43, 0.8) 100%)'
                  }}>
                    <h2 className="text-white font-nunito font-bold text-2xl mb-6 flex items-center gap-2">
                      <i className="fas fa-question-circle text-[#FFB703]" aria-hidden="true"></i>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                  {faqs.map((faq) => (
                        <div 
                          key={faq.id} 
                          className="border border-white/10 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-all"
                        >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                            className="flex justify-between items-start w-full text-left p-4 font-medium text-white hover:text-[#FFB703] transition-colors"
                          >
                            <span className="pr-4 text-sm font-nunito">{faq.question}</span>
                            <i className={`fas fa-chevron-down text-[#FFB703] transition-transform ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`} aria-hidden="true"></i>
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                            <div className="px-4 pb-4 border-t border-white/10">
                              <p className="text-white/80 text-sm leading-relaxed mt-3 font-nunito">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              )}
          </div>

            {/* Right Sidebar */}
            <div 
              className={`lg:col-span-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className={`${sidebarsFixed ? 'lg:sticky lg:top-[200px]' : ''}`}>
                <BlogSidebarForm />

                {/* Related Articles */}
        {relatedBlogs.length > 0 && (
                  <div className="mt-6 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-xl" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(12, 0, 43, 0.8) 100%)'
                  }}>
                    <h3 className="text-white font-nunito font-bold text-lg mb-4 flex items-center gap-2">
                      <i className="fas fa-newspaper text-[#FFB703]" aria-hidden="true"></i>
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                  {relatedBlogs.map((article) => (
                    <Link key={article.id} href={`/blog/${article.slug}`} prefetch={true}>
                          <div className="group rounded-xl overflow-hidden border border-white/10 hover:border-[#FFB703]/50 transition-all bg-white/5 hover:bg-white/10">
                            {article.image && (
                              <div className="relative h-32 overflow-hidden">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          </div>
                            )}
                            <div className="p-3">
                              <h4 className="text-white font-nunito font-semibold text-sm mb-1 line-clamp-2 group-hover:text-[#FFB703] transition-colors">
                                {article.title}
                              </h4>
                              <span className="text-white/60 text-xs font-nunito">{article.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {isLoaded && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
            style={{
              background: 'linear-gradient(135deg, #FFB703, #FFA000)',
              boxShadow: '0 4px 20px rgba(255, 183, 3, 0.4)'
            }}
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up text-[#0C002B]" aria-hidden="true"></i>
          </button>
        )}
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        /* Blog Content Styling */
        .blog-content {
          color: #e5e7eb;
          line-height: 1.8;
        }
        
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          color: #FFB703;
          font-weight: 700;
          margin-top: 2em;
          margin-bottom: 1em;
          font-family: 'Nunito', sans-serif;
        }
        
        .blog-content h2 {
          font-size: 1.875em;
          border-bottom: 2px solid rgba(255, 183, 3, 0.2);
          padding-bottom: 0.5em;
        }
        
        .blog-content h3 {
          font-size: 1.5em;
        }
        
        .blog-content p {
          margin: 1.5em 0;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .blog-content a {
          color: #FFB703;
          text-decoration: underline;
          text-decoration-color: rgba(255, 183, 3, 0.3);
          transition: all 0.2s;
        }
        
        .blog-content a:hover {
          color: #FFC93D;
          text-decoration-color: #FFC93D;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #FFB703;
          margin: 2em 0;
          padding: 1em 1.5em;
          background: rgba(255, 183, 3, 0.1);
          border-radius: 0.5rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.85);
        }
        
        .blog-content code {
          background: rgba(255, 183, 3, 0.1);
          color: #FFB703;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-family: 'Monaco', 'Courier New', monospace;
        }
        
        .blog-content pre {
          background: rgba(0, 0, 0, 0.3);
          color: #e5e7eb;
          padding: 1.5em;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 2em 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .blog-content pre code {
          background: transparent;
          color: inherit;
          padding: 0;
        }
        
        .blog-content ul,
        .blog-content ol {
          margin: 1.5em 0;
          padding-left: 2em;
          list-style-position: outside;
        }
        
        .blog-content ul {
          list-style-type: disc;
        }
        
        .blog-content ol {
          list-style-type: decimal;
        }
        
        .blog-content li {
          margin: 0.75em 0;
          color: rgba(255, 255, 255, 0.9);
          padding-left: 0.5em;
        }
        
        .blog-content ul ul {
          list-style-type: circle;
          margin-top: 0.5em;
        }
        
        .blog-content ul ul ul {
          list-style-type: square;
        }
        
        .blog-content li::marker {
          color: #FFB703;
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 2em 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2em 0;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.75em 1em;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
        }
        
        .blog-content table th {
          background: rgba(255, 183, 3, 0.1);
          color: #FFB703;
          font-weight: 600;
        }
        
        .blog-content table tbody tr:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .blog-content strong {
          color: #FFB703;
          font-weight: 600;
        }
        
        .blog-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 183, 3, 0.3), transparent);
          margin: 3em 0;
        }
      `}</style>
    </div>
  );
});

export default ArticleDetail;
