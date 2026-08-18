'use client';

import { useEffect, useState, memo, useRef } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import Link from 'next/link';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';
import BlogSidebarForm from '@/components/blog/BlogSidebarForm';
import BrandOverviewBox from '@/components/blog/BrandOverviewBox';

// Interfaces
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
}

interface Blog {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  image?: string;
  infographicImage?: string;
  created?: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  author?: string;
  category?: string;
  statutoryFramework?: string;
  keyTakeaways?: string[];
  popularSearches?: string[];
  faqs?: FAQ[];
  reviews?: Review[];
}

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

// Author Bios
const authorBios: Record<
  string,
  { name: string; title: string; description: string; image: string; linkedInUrl: string }
> = {
  'Adv. Anuj Anand Malik': {
    name: 'Adv. Anuj Anand Malik',
    title: 'Founder & Lead IP Advocate',
    description:
      'Adv. Anuj Anand Malik is the Founder of IPR Karo and an esteemed Intellectual Property Attorney. With extensive experience across Trademark Prosecution, Section 9/11 Objection clearance, TM-O Opposition hearings, and commercial IP litigation before the Trade Marks Registry and Delhi High Court, he has successfully steered thousands of brand registrations for startups and conglomerates.',
    image: '/anujbhiya.png',
    linkedInUrl: 'https://www.linkedin.com/in/iamanujmalik/',
  },
  'Shrey Arora': {
    name: 'Shrey Arora',
    title: 'Senior IP Strategist & Trademark Analyst',
    description:
      'Senior IP Strategist specializing in Nice Classification (Classes 1-45), cross-border Madrid Protocol filings, and digital brand protection. Advised 500+ tech startups, D2C brands, and SaaS innovators on global trademark clearance strategies.',
    image: '/shreychad.svg',
    linkedInUrl: 'https://www.linkedin.com/in/shrey-arora-b0487b67/',
  },
  'Team IPRKaro': {
    name: 'Team IPRKaro',
    title: 'IP Research & Regulatory Desk',
    description:
      'The specialized research and regulatory affairs wing of IPR Karo comprising registered patent agents, trademark attorneys, and IP legal analysts dedicated to tracking Indian Trade Marks Registry precedents and legislative developments.',
    image: '/logo/iprlogo.svg',
    linkedInUrl: 'https://www.iprkaro.com/about-us',
  },
};

// Animated Counter Hook with Deceleration
const useCountUp = (endValue: number, duration: number = 2000, trigger: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => --t * t * t + 1;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      setCount(Math.floor(easedProgress * endValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, trigger]);

  return count;
};

// Function to extract H2 headings from HTML content
const extractH2Headings = (htmlContent: string): TOCSection[] => {
  if (typeof window === 'undefined') return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const h2Elements = doc.querySelectorAll('h2');

  const sections: TOCSection[] = [];
  h2Elements.forEach((h2, index) => {
    const title = h2.textContent?.trim() || '';
    if (title) {
      const id = `section-${index}`;
      sections.push({ id, title });
    }
  });

  return sections;
};

// Function to split HTML into two parts around the middle H2 for embedding the Infographic
const splitHtmlAtMidpoint = (
  htmlContent: string
): { part1: string; part2: string; totalH2: number } => {
  if (typeof window === 'undefined') {
    return { part1: htmlContent, part2: '', totalH2: 0 };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const h2Elements = Array.from(doc.querySelectorAll('h2'));

  if (h2Elements.length <= 2) {
    h2Elements.forEach((h2, index) => {
      h2.id = `section-${index}`;
    });
    return { part1: doc.body.innerHTML, part2: '', totalH2: h2Elements.length };
  }

  h2Elements.forEach((h2, index) => {
    h2.id = `section-${index}`;
  });

  const splitIndex = Math.ceil(h2Elements.length / 2);
  const targetH2 = h2Elements[splitIndex];

  let part1Html = '';
  let part2Html = '';
  let reachedSplit = false;

  Array.from(doc.body.children).forEach((child) => {
    if (child === targetH2) {
      reachedSplit = true;
    }
    if (!reachedSplit) {
      part1Html += child.outerHTML + '\n';
    } else {
      part2Html += child.outerHTML + '\n';
    }
  });

  return { part1: part1Html, part2: part2Html, totalH2: h2Elements.length };
};

const ArticleDetail = memo(function ArticleDetail({
  slug,
  initialBlog,
  initialFaqs = [],
  initialReviews = [],
}: BlogDetailProps) {
  const [blog] = useState<Blog | null>(initialBlog || null);
  const [faqs] = useState<FAQ[]>(initialFaqs);
  const [reviews] = useState<Review[]>(initialReviews);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);
  const [contentParts, setContentParts] = useState<{ part1: string; part2: string }>({
    part1: initialBlog?.description || '',
    part2: '',
  });

  // Modal state for Infographic high-res preview
  const [isInfographicModalOpen, setIsInfographicModalOpen] = useState(false);

  // Counter stats animation trigger on scroll
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const ratingCount = useCountUp(49, 1500, statsInView);
  const searchCount = useCountUp(50, 1800, statsInView);
  const appCount = useCountUp(10, 1800, statsInView);
  const onlineCount = useCountUp(100, 1500, statsInView);

  useEffect(() => {
    if (blog?.description) {
      const sections = extractH2Headings(blog.description);
      setTocSections(sections);
      if (sections.length > 0) {
        setActiveSection(sections[0].id);
      }
      const split = splitHtmlAtMidpoint(blog.description);
      setContentParts({ part1: split.part1, part2: split.part2 });
    }

    const loadRelated = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const q = query(blogsCollection, orderBy('created', 'desc'), limit(5));
        const querySnapshot = await getDocs(q);
        const list = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() } as Blog))
          .filter((b) => b.slug !== slug)
          .slice(0, 3);
        setRelatedBlogs(list);
      } catch (err) {
        console.error('Error loading related blogs:', err);
      }
    };
    loadRelated();
  }, [blog, slug]);

  // Observer for Stats Strip
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Scroll spy for TOC
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
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = (platform: string) => {
    if (!blog) return;

    // Construct canonical public URL so social platforms (FB, Twitter, LinkedIn, WhatsApp) can preview and share even during local dev
    const isLocal =
      typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    const canonicalUrl = `https://www.iprkaro.com/blog/${blog.slug}`;
    const liveUrl = isLocal ? canonicalUrl : (typeof window !== 'undefined' ? window.location.href : canonicalUrl);
    const title = blog.title || 'Check out this legal guide on IPR Karo';
    const message = `Check out this expert Trademark & IP legal guide on IPR Karo: "${title}"\n${liveUrl}`;

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(liveUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Essential Trademark & IP insights: "${title}" via @iprkaro`
        )}&url=${encodeURIComponent(liveUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(liveUrl)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        break;
      case 'copy':
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          navigator.clipboard.writeText(liveUrl);
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        }
        return;
      default:
        return;
    }

    if (shareUrl && typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=650,height=550');
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center pt-24 pb-16 px-4">
        <div className="text-center max-w-md bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
          <div className="w-16 h-16 bg-[#DECFFB]/40 text-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
            ⚖️
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-3">Article Not Found</h1>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            The requested legal article could not be located. Browse our comprehensive IP resource
            center for trademark and patent guides.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-all shadow-sm"
          >
            ← Return to Resources
          </Link>
        </div>
      </div>
    );
  }

  const advocateRoster = [
    'Adv. Priya Sharma',
    'Adv. Rohan Verma',
    'Adv. Siddharth Mehra',
    'Adv. Neha Kapoor',
    'Adv. Vikram Malhotra',
    'Adv. Ananya Iyer',
    'Adv. Pooja Deshmukh',
    'Adv. Arjun Nambiar',
  ];

  // Dynamic / random advocate name per article
  const rawAuthor = (blog.author || '').trim();
  let authorName = rawAuthor;
  if (!authorName || authorName === 'Admin' || authorName === 'Team IPRKaro' || authorName === 'Adv. Anuj Anand Malik') {
    const seed = (blog.slug || blog.title || 'ipr')
      .split('')
      .reduce((acc, c) => acc + c.charCodeAt(0), 0);
    authorName = advocateRoster[seed % advocateRoster.length];
  }

  // Dynamic Initials from authorName (e.g. "Adv. Priya Sharma" -> "PS", "Adv. Rohan Verma" -> "RV")
  const cleanedName = authorName.replace(/^Adv\.?\s*/i, '').trim();
  const nameParts = cleanedName.split(/\s+/).filter(Boolean);
  const initials =
    nameParts.length >= 2
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : cleanedName.substring(0, 2).toUpperCase() || 'IP';

  const wordCount = (blog.description || '').replace(/<[^>]*>?/gm, '').split(/\s+/).length;
  const readingTimeMinutes = Math.max(Math.ceil(wordCount / 220), 4);

  // Key takeaways: user's custom takeaways or smart fallback
  const takeaways =
    blog.keyTakeaways && blog.keyTakeaways.length > 0
      ? blog.keyTakeaways
      : [
          'Verify exact trademark availability across phonetic and visual indexes prior to filing.',
          'Respond to Section 9 (Absolute) or Section 11 (Relative) examination objections within the 30-day statutory deadline.',
          'Ensure strict compliance with the 12th Edition of Nice Classification (Classes 1 to 45).',
          'Maintain documented evidence of prior commercial use (invoices, domain registration, tax records).',
          'Avail 50% government fee concessions for registered MSME and DPIIT-recognized startups.',
        ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 pt-24 pb-20 selection:bg-[#DECFFB] selection:text-[#3B1F75] font-sans">
      {/* 1. HERO & METADATA SECTION (2-Column Side-by-Side Layout) */}
      <section className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title, Excerpt, Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4 flex-wrap"
            >
              <Link href="/" className="hover:text-[#7C3AED] transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/blog" className="hover:text-[#7C3AED] transition-colors">
                Blog
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#6D28D9] font-semibold truncate max-w-xs sm:max-w-md">
                {blog.title}
              </span>
            </nav>

            {/* Category & Statutory Framework Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DECFFB]/40 text-[#5B21B6] border border-[#DECFFB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse"></span>
                {blog.category || 'Procedural IP & Office Actions'}
              </span>
              {blog.statutoryFramework && (
                <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#F4EFFE] text-[#2B165C] border border-[#B8A1E3]">
                  ⚖️ {blog.statutoryFramework}
                </span>
              )}
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.18] mb-5">
              {blog.title}
            </h1>

            {/* Subtitle / Excerpt */}
            {blog.subtitle && (
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-6">
                {blog.subtitle}
              </p>
            )}

            {/* Author & Meta Pills Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-sm tracking-wider overflow-hidden flex-shrink-0 shadow-sm border border-slate-200">
                  {initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-slate-900">{authorName}</span>
                    <span className="inline-block w-4 h-4 text-[#7C3AED]">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Reviewed by Team IPR Karo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                  <span>📅</span>
                  <span>{blog.date}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                  <span>⏱️</span>
                  <span>{readingTimeMinutes} Min Read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Cover / Artwork Frame */}
          <div className="lg:col-span-5">
            <div className="p-3 sm:p-4 rounded-[28px] bg-slate-50 border border-slate-200 shadow-sm">
              <div className="aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 relative shadow-inner">
                <img
                  src={
                    blog.image ||
                    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=630&q=80'
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP BELOW HERO (Soft Refined Purple Theme with Dividers) */}
      <section
        ref={statsRef}
        className="w-full bg-[#241344] border-y border-[#B8A1E3]/35 py-6 sm:py-7 mb-12 shadow-sm"
      >
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#B8A1E3]/25 text-center">
            {/* Metric 1: Google Reviews */}
            <div className="flex flex-col items-center justify-center px-4">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight">
                  {(ratingCount / 10).toFixed(1)}/5
                </span>
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#DDD3F5]">
                Google Reviews
              </span>
            </div>

            {/* Metric 2: Trademarks Searched */}
            <div className="flex flex-col items-center justify-center px-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#DECFFB] text-base">🔍</span>
                <span className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight">
                  {searchCount.toLocaleString()},000+
                </span>
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#DDD3F5]">
                Trademarks Searched
              </span>
            </div>

            {/* Metric 3: Filings Handled */}
            <div className="flex flex-col items-center justify-center px-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#B8A1E3] text-base">⚖️</span>
                <span className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight">
                  {appCount.toLocaleString()},000+
                </span>
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#DDD3F5]">
                Filings Handled
              </span>
            </div>

            {/* Metric 4: Avg Response Time */}
            <div className="flex flex-col items-center justify-center px-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#DECFFB] text-base">⏱️</span>
                <span className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight">
                  &lt; 15 Min
                </span>
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#DDD3F5]">
                Avg. Response Time
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN 3-COLUMN EDITORIAL LAYOUT (Shifted left/right sidebars, widened center) */}
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
          {/* Left Column: Sticky Table of Contents (Shifted all the way left) */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-28 self-start">
            <BlogTableOfContents
              activeSection={activeSection}
              blogTitle={blog.title}
              sections={tocSections}
              variant="vertical"
            />
          </div>

          {/* Center Column: Core Article Body Card (WIDENED to col-span-6 on lg, col-span-7 on xl) */}
          <main className="col-span-1 lg:col-span-6 xl:col-span-7 bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xs">
            {/* SOCIAL SHARING SECTION (Above Key Takeaways) */}
            <div className="mb-8 p-6 sm:px-8 sm:py-6 rounded-[26px] bg-[#F1F6FA] border border-[#E2ECF3] flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-center sm:text-left">
                <h3 className="text-[#0A3254] font-black text-xl sm:text-2xl tracking-tight leading-tight mb-1">
                  Share this insight
                </h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm">
                  Help someone else protect their intellectual property &amp; brand.
                </p>
              </div>

              {/* Circular Floating Social Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => handleShare('facebook')}
                  aria-label="Share on Facebook"
                  className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#1877F2] hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* X / Twitter */}
                <button
                  type="button"
                  onClick={() => handleShare('twitter')}
                  aria-label="Share on X"
                  className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  onClick={() => handleShare('linkedin')}
                  aria-label="Share on LinkedIn"
                  className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#0A66C2] hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => handleShare('whatsapp')}
                  aria-label="Share on WhatsApp"
                  className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#25D366] hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </button>

                {/* Copy Link */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => handleShare('copy')}
                    aria-label="Copy link to clipboard"
                    className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#7C3AED] hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                  >
                    {copiedLink ? (
                      <span className="text-[#7C3AED] font-black text-xs">✓</span>
                    ) : (
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    )}
                  </button>
                  {copiedLink && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold whitespace-nowrap shadow-md">
                      Link copied!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* EXECUTIVE KEY TAKEAWAYS BOX */}
            <div className="mb-10 p-7 sm:p-9 rounded-[28px] bg-[#F8F5FE] border border-[#DECFFB] shadow-xs">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#DECFFB] text-[#5B21B6] flex items-center justify-center font-black text-sm shadow-2xs">
                  <svg className="w-4 h-4 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight">
                  Key Takeaways
                </h2>
              </div>
              <ul className="space-y-4 sm:space-y-5">
                {takeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#DECFFB] text-[#5B21B6] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      <svg className="w-3.5 h-3.5 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-800 text-sm sm:text-[15.5px] leading-[1.65] font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Part 1 of HTML Article Content */}
            <div className="prose prose-lg max-w-none blog-content-light">
              <div dangerouslySetInnerHTML={{ __html: contentParts.part1 }} />
            </div>

            {/* EMBEDDED MASTER INFOGRAPHIC POSTER FRAME */}
            <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#171717] text-white shadow-xl border border-slate-700/80 overflow-hidden relative">
              <div className="flex items-center justify-between mb-4 border-b border-slate-700/80 pb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-[#DECFFB]/20 text-[#DECFFB] flex items-center justify-center text-sm font-black border border-[#DECFFB]/40">
                    📊
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-[#DECFFB]">
                      Visual Procedure & Infographic Roadmap
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      Statutory procedure & timeline under Trade Marks Rules, 2017
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsInfographicModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-black transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>🔍 Zoom Full Poster</span>
                </button>
              </div>

              {/* Infographic Visual Card */}
              <div
                onClick={() => setIsInfographicModalOpen(true)}
                className="w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/60 cursor-pointer group relative shadow-inner"
              >
                <img
                  src={
                    blog.infographicImage ||
                    blog.image ||
                    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&h=630&q=80'
                  }
                  alt={`Infographic workflow: ${blog.title}`}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-bold shadow-lg">
                    Click to view full-resolution master infographic ↗
                  </span>
                </div>
              </div>

              {/* 4 Step Workflow Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-4 border-t border-slate-800 text-center">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] font-extrabold uppercase text-[#DECFFB] block mb-1">Step 1</span>
                  <p className="text-xs font-bold text-slate-100">Public TM Search</p>
                  <span className="text-[10px] text-slate-400">Class 1-45 Clear</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] font-extrabold uppercase text-[#DECFFB] block mb-1">Step 2</span>
                  <p className="text-xs font-bold text-slate-100">Form TM-A Filing</p>
                  <span className="text-[10px] text-slate-400">Official Fees Paid</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] font-extrabold uppercase text-[#DECFFB] block mb-1">Step 3</span>
                  <p className="text-xs font-bold text-slate-100">Exam Clearance</p>
                  <span className="text-[10px] text-slate-400">Sec 9 & 11 Reply</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] font-extrabold uppercase text-[#DECFFB] block mb-1">Step 4</span>
                  <p className="text-xs font-bold text-slate-100">Certificate ®</p>
                  <span className="text-[10px] text-slate-400">Journal Publication</span>
                </div>
              </div>
            </div>

            {/* Part 2 of HTML Article Content */}
            {contentParts.part2 && (
              <div className="prose prose-lg max-w-none blog-content-light">
                <div dangerouslySetInnerHTML={{ __html: contentParts.part2 }} />
              </div>
            )}

            {/* BRAND OVERVIEW & SOLUTIONS BOX */}
            <BrandOverviewBox />

            {/* FAQ Accordion Section */}
            {faqs.length > 0 && (
              <section className="my-14" aria-labelledby="faq-heading">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-8 h-8 rounded-xl bg-[#DECFFB]/40 text-[#5B21B6] flex items-center justify-center text-base font-bold border border-[#DECFFB]">
                    ❓
                  </span>
                  <div>
                    <h2 id="faq-heading" className="text-2xl font-black text-slate-900">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      Authoritative legal answers based on the Trade Marks Act, 1999
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => {
                    const isOpen = expandedFaqs.includes(faq.id || `faq-${idx}`);
                    const faqKey = faq.id || `faq-${idx}`;
                    return (
                      <div
                        key={faqKey}
                        className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(faqKey)}
                          className="flex justify-between items-center w-full text-left p-5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors gap-4 cursor-pointer"
                        >
                          <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                          <span
                            className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-bold transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? 'rotate-180 bg-[#DECFFB] text-[#5B21B6]' : ''
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Client Reviews Section */}
            {reviews.length > 0 && (
              <section className="my-14" aria-labelledby="reviews-heading">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-base font-bold border border-amber-200">
                      ★
                    </span>
                    <div>
                      <h2 id="reviews-heading" className="text-2xl font-black text-slate-900">
                        Client Testimonials &amp; Case Reviews
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        Verified founder and enterprise feedback on IPR Karo services
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 bg-amber-100/60 text-amber-900 rounded-full border border-amber-200">
                    4.9 / 5.0 Rating
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {reviews.map((r, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50/60 border border-slate-200/80 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center">
                            {r.name.charAt(0)}
                          </div>
                          <div>
                            <span className="font-extrabold text-sm text-slate-900 block">{r.name}</span>
                            <span className="text-[10px] text-[#7C3AED] font-semibold flex items-center gap-1">
                              ✓ Verified Client
                            </span>
                          </div>
                        </div>
                        <div className="flex text-amber-500 text-xs">
                          {Array.from({ length: r.rating || 5 }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                        "{r.review}"
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Right Column: Sticky Consultation Sidebar */}
          <aside className="col-span-1 lg:col-span-3 sticky top-28 self-start space-y-6">
            <BlogSidebarForm />

            {/* Related Articles Card */}
            {relatedBlogs.length > 0 && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <h3 className="font-extrabold text-sm text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-1.5">
                  <span>📰</span>
                  <span>Related Guides</span>
                </h3>
                <div className="space-y-4">
                  {relatedBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blog/${item.slug}`}
                      className="group block border-b border-slate-100 pb-3 last:border-none last:pb-0"
                    >
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#7C3AED] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium block mt-1">
                        {item.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Infographic Modal Preview */}
      {isInfographicModalOpen && (
        <div
          onClick={() => setIsInfographicModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3 text-white">
              <div>
                <h3 className="text-base font-black text-[#DECFFB]">
                  {blog.title} - Master Legal Infographic
                </h3>
                <p className="text-xs text-slate-400">High-Resolution Workflow Schematic</p>
              </div>
              <button
                type="button"
                onClick={() => setIsInfographicModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <img
              src={
                blog.infographicImage ||
                blog.image ||
                'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&h=630&q=80'
              }
              alt="High-resolution schematic"
              className="w-full h-auto rounded-xl border border-slate-800"
            />
          </div>
        </div>
      )}

      {/* Global CSS for 4-Sided Table Borders, Typography & Links */}
      <style jsx global>{`
        .blog-content-light {
          color: #1e293b;
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .blog-content-light h2 {
          font-size: 1.85rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin-top: 2.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f1f5f9;
        }
        .blog-content-light h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .blog-content-light p {
          margin: 1.25rem 0;
          color: #334155;
          line-height: 1.85;
        }
        .blog-content-light ul,
        .blog-content-light ol {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
        }
        .blog-content-light li {
          margin: 0.5rem 0;
          color: #334155;
        }
        .blog-content-light strong {
          color: #0f172a;
          font-weight: 700;
        }
        .blog-content-light a {
          color: #7C3AED;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        .blog-content-light a:hover {
          color: #6D28D9;
        }
        .blog-content-light blockquote {
          border-left: 4px solid #7C3AED;
          padding: 1rem 1.5rem;
          background-color: #f8fafc;
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
          color: #475569;
          margin: 2rem 0;
        }

        /* 4-Sided Table Border CSS */
        .blog-content-light table,
        .tiptap-content table {
          width: 100%;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin: 2rem 0 !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .blog-content-light table th,
        .tiptap-content table th {
          background-color: #f8fafc !important;
          color: #0f172a !important;
          font-weight: 800 !important;
          font-size: 0.85rem !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          padding: 14px 16px !important;
          border-bottom: 2px solid #e2e8f0 !important;
          border-right: 1px solid #e2e8f0 !important;
          text-align: left !important;
        }
        .blog-content-light table th:last-child,
        .tiptap-content table th:last-child {
          border-right: none !important;
        }
        .blog-content-light table td,
        .tiptap-content table td {
          padding: 12px 16px !important;
          border-bottom: 1px solid #f1f5f9 !important;
          border-right: 1px solid #f1f5f9 !important;
          color: #334155 !important;
          font-size: 0.925rem !important;
        }
        .blog-content-light table td:last-child,
        .tiptap-content table td:last-child {
          border-right: none !important;
        }
        .blog-content-light table tr:last-child td,
        .tiptap-content table tr:last-child td {
          border-bottom: none !important;
        }
        .blog-content-light table tr:hover td,
        .tiptap-content table tr:hover td {
          background-color: #f8fafc !important;
        }

        /* Official References List Styling */
        .official-references-list {
          list-style: none !important;
          padding-left: 0 !important;
        }
        .official-references-list li {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 10px;
          transition: all 0.2s;
        }
        .official-references-list li:hover {
          border-color: #86efac;
          background: #f0fdf4;
        }
      `}</style>
    </div>
  );
});

export default ArticleDetail;
