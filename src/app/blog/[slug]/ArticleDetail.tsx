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

// Add Review interface
interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
}

// Add this interface for props
interface BlogDetailProps {
  slug: string;
  initialReviews?: Review[];
  initialBlog?: Blog;
  initialFaqs?: FAQ[];
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
    description: "Anuj Anand Malik, Founder of IPR Karo, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.",
    image: "/anujbhiya.png",
    linkedInUrl: "https://www.linkedin.com/in/iamanujmalik/"
  },
  "Shrey Arora": {
    name: "Shrey Arora",
    description: "Legal professional specializing in corporate law and regulatory compliance. Brings a strategic approach to legal advisory with extensive experience in contract negotiation and business law.",
    image: "/shreychad.svg",
    linkedInUrl: "https://www.linkedin.com/in/shrey-arora-b0487b67/"
  },
  "Team IPRKaro": {
    name: "Team IPRKaro",
    description: "The dedicated legal and research team at IPR Karo, committed to providing the most accurate and up-to-date information on intellectual property rights, loan settlements, and legal compliance in India.",
    image: "/logo/iprlogo.svg",
    linkedInUrl: "#"
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

// Optimized function to fetch Reviews
const fetchReviews = async (blogId: string): Promise<Review[]> => {
  try {
    const reviewsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'reviews'));
    return reviewsSnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name || '',
      rating: doc.data().rating || 5,
      review: doc.data().review || '',
      date: doc.data().date || ''
    }));
  } catch (error) {
    console.error("Error fetching Reviews:", error);
    return [];
  }
};

const ArticleDetail = memo(function ArticleDetail({ slug, initialReviews = [], initialBlog, initialFaqs = [] }: BlogDetailProps) {
  const [blog, setBlog] = useState<Blog | null>(initialBlog || null);
  const [loading, setLoading] = useState(!initialBlog);
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [processedDescription, setProcessedDescription] = useState(initialBlog?.description || '');

  useEffect(() => {
    setIsLoaded(true);
    
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    const loadBlogData = async () => {
      try {
        const blogData = initialBlog || await fetchBlogBySlug(slug);
        
        if (blogData) {
          if (!initialBlog) {
            setBlog(blogData);
          }
          
          const sections = extractH2Headings(blogData.description);
          setTocSections(sections);
          
          const parser = new DOMParser();
          const doc = parser.parseFromString(blogData.description, 'text/html');
          const h2Elements = doc.querySelectorAll('h2');
          h2Elements.forEach((h2, index) => {
            const id = `section-${index}`;
            h2.id = id;
          });
          const modifiedDescription = doc.body.innerHTML;
          setProcessedDescription(modifiedDescription);
          
          if (sections.length > 0) {
            setActiveSection(sections[0].id);
          }
          
          const [relatedBlogsData, faqsData, reviewsData] = await Promise.all([
            fetchRelatedBlogs(blogData.id),
            initialFaqs.length > 0 ? Promise.resolve(initialFaqs) : fetchFAQs(blogData.id),
            initialReviews.length > 0 ? Promise.resolve(initialReviews) : fetchReviews(blogData.id)
          ]);
          
          setRelatedBlogs(relatedBlogsData);
          setFaqs(faqsData);
          setReviews(reviewsData);
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
  }, [slug, initialBlog, initialFaqs, initialReviews]);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocSections]);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId) ? prev.filter(id => id !== faqId) : [...prev, faqId]
    );
  };

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
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-100 rounded-lg w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-100 rounded-lg w-1/2 mx-auto"></div>
            <div className="aspect-video bg-gray-100 rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-book-open text-[#B3A1FF] text-6xl mb-6" aria-hidden="true"></i>
          <h1 className="text-3xl font-bold text-[#0C002B] mb-4 font-nunito">Article Not Found</h1>
          <p className="text-[#0C002B]/60 mb-8 font-nunito">We couldn't find the blog post you're looking for.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:scale-105 bg-[#B3A1FF] text-white">
            <i className="fas fa-arrow-left text-xs" aria-hidden="true"></i>
            Return to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative pt-20">
      {/* Top Hero Image Section */}
      <div className="w-full mb-12">
        <div className="max-w-[1920px] mx-auto px-4 md:px-0">
          <div className="aspect-video md:aspect-[21/9] w-full overflow-hidden md:rounded-none rounded-2xl shadow-xl">
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 lg:px-8 max-w-8xl">
        {/* Meta Info Section */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs lg:text-sm px-20">
            <Link href="/" className="text-[#0C002B]/40 hover:text-[#B3A1FF] font-nunito">Home</Link>
            <i className="fas fa-chevron-right text-[#0C002B]/20 text-[10px]" aria-hidden="true"></i>
            <Link href="/blog" className="text-[#0C002B]/40 hover:text-[#B3A1FF] font-nunito">Resources</Link>
            <i className="fas fa-chevron-right text-[#0C002B]/20 text-[10px]" aria-hidden="true"></i>
            <span className="text-[#B3A1FF] font-nunito font-medium">Article</span>
          </div>

          <h1 className="font-nunito font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#0C002B] leading-tight mb-6 px-20 text-center">
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="text-[#0C002B]/60 font-nunito text-lg md:text-xl leading-relaxed mb-8 px-20 text-center">
              {blog.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B3A1FF]/10 flex items-center justify-center">
                <i className="fas fa-calendar text-[#B3A1FF]" aria-hidden="true"></i>
              </div>
              <div>
                <p className="text-[10px] text-[#0C002B]/40 uppercase font-semibold tracking-wider">Published</p>
                <p className="text-sm font-nunito font-bold text-[#0C002B]">{blog.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B3A1FF]/10 flex items-center justify-center">
                <i className="fas fa-user text-[#B3A1FF]" aria-hidden="true"></i>
              </div>
              <div>
                <p className="text-[10px] text-[#0C002B]/40 uppercase font-semibold tracking-wider">Author</p>
                <p className="text-sm font-nunito font-bold text-[#0C002B]">Team IPRKaro</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <div className="hidden lg:block lg:col-span-2 sticky top-28 self-start">
            <BlogTableOfContents 
              activeSection={activeSection} 
              blogTitle={blog.title}
              sections={tocSections}
              variant="vertical"
            />
          </div>

          {/* Middle Column: Main Article Content */}
          <div className="col-span-1 lg:col-span-8">
            <div className="prose prose-lg max-w-none blog-content-light">
              <div dangerouslySetInnerHTML={{ __html: processedDescription }} />
            </div>

            {/* Share Section */}
            <div className="mt-12 py-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-[#0C002B] font-nunito font-bold">Share this article:</span>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="w-11 h-11 rounded-full bg-gray-50 text-[#0C002B] hover:bg-[#B3A1FF] hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <i className="fab fa-facebook-f text-sm" aria-hidden="true"></i>
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-11 h-11 rounded-full bg-gray-50 text-[#0C002B] hover:bg-[#B3A1FF] hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <i className="fab fa-twitter text-sm" aria-hidden="true"></i>
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="w-11 h-11 rounded-full bg-gray-50 text-[#0C002B] hover:bg-[#B3A1FF] hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <i className="fab fa-linkedin-in text-sm" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            {/* FAQs */}
            {faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-[#0C002B] font-nunito font-bold text-2xl mb-8 flex items-center gap-3">
                  <i className="fas fa-question-circle text-[#B3A1FF]" aria-hidden="true"></i>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div 
                      key={faq.id} 
                      className="border border-gray-100 rounded-xl overflow-hidden bg-white hover:border-[#B3A1FF]/30 transition-all shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full text-left p-5 font-bold text-[#0C002B] hover:text-[#B3A1FF] transition-colors"
                      >
                        <span className="pr-4 text-base font-nunito">{faq.question}</span>
                        <i className={`fas fa-chevron-down text-xs transition-transform ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`} aria-hidden="true"></i>
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                        <div className="px-5 pb-5 border-t border-gray-50 pt-4">
                          <p className="text-[#0C002B]/60 text-sm leading-relaxed font-nunito">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-20 h-20 rounded-2xl bg-[#B3A1FF]/10 flex items-center justify-center overflow-hidden p-2 flex-shrink-0">
                  <img src={authorBios["Team IPRKaro"].image} alt="Team IPRKaro" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-[#0C002B] font-nunito font-bold text-xl mb-2">Team IPRKaro</h3>
                  <p className="text-[#0C002B]/60 font-nunito text-sm leading-relaxed">
                    {authorBios["Team IPRKaro"].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky CTA Sidebar */}
          <div className="col-span-1 lg:col-span-2 sticky top-28 self-start">
            <BlogSidebarForm />
            
            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="mt-8 rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
                <h3 className="text-[#0C002B] font-nunito font-bold text-lg mb-6 flex items-center gap-2">
                  <i className="fas fa-newspaper text-[#B3A1FF]" aria-hidden="true"></i>
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedBlogs.map((article) => (
                    <Link key={article.id} href={`/blog/${article.slug}`} className="group block">
                      <div className="flex gap-4">
                        {article.image && (
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-[#0C002B] font-nunito font-bold text-sm mb-1 line-clamp-2 group-hover:text-[#B3A1FF] transition-colors leading-tight">
                            {article.title}
                          </h4>
                          <span className="text-[#0C002B]/40 text-[10px] font-nunito">{article.date}</span>
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

      {/* Styled Footer for Article Page */}
      <div className="mt-20 py-20 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-[#0C002B] font-nunito font-bold text-2xl md:text-3xl mb-4">Was this article helpful?</h2>
          <p className="text-[#0C002B]/60 mb-8">Share your feedback with us or get legal advice from our experts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 rounded-full bg-[#0C002B] text-white font-nunito font-bold hover:bg-[#B3A1FF] transition-all">
              Talk to an Expert
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3 rounded-full border border-[#0C002B] text-[#0C002B] font-nunito font-bold hover:bg-[#0C002B] hover:text-white transition-all"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .blog-content-light {
          color: #0C002B;
        }
        .blog-content-light h1,
        .blog-content-light h2,
        .blog-content-light h3,
        .blog-content-light h4 {
          color: #0C002B;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          margin-top: 2em;
          margin-bottom: 1em;
          line-height: 1.2;
        }
        .blog-content-light h2 { font-size: 2rem; border-bottom: 2px solid #f3f4f6; padding-bottom: 0.5rem; }
        .blog-content-light h3 { font-size: 1.5rem; }
        .blog-content-light p { margin: 1.5rem 0; line-height: 1.8; color: rgba(12, 0, 43, 0.7); }
        .blog-content-light ul, .blog-content-light ol { margin: 1.5rem 0; padding-left: 1.5rem; }
        .blog-content-light li { margin: 0.5rem 0; color: rgba(12, 0, 43, 0.7); }
        .blog-content-light a { color: #B3A1FF; font-weight: 600; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }
        .blog-content-light a:hover { color: #0C002B; }
        .blog-content-light blockquote { border-left: 4px solid #B3A1FF; padding: 1.5rem; background: #f9fafb; border-radius: 0 1rem 1rem 0; font-style: italic; margin: 2rem 0; }
        .blog-content-light img { border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.05); margin: 2rem 0; }
      `}</style>
    </div>
  );
});

export default ArticleDetail;
