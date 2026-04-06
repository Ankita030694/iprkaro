'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaqSection } from '@/components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const resourceFaqs = [
  {
    question: "What is trademark registration and why is it important?",
    answer: "Trademark registration is the legal process of securing exclusive rights to your brand name, logo, or trademark registration symbol (®) in India. It protects your trademark registration mark from infringement, establishes ownership, and builds brand trust. IPR Karo simplifies the entire trademark registration process in India with AI-powered tools."
  },
  {
    question: "How to register a trademark in India with IPR Karo?",
    answer: "To register a trademark, start with our AI-powered trademark search to check trademark availability. Review the brand name availability search report for conflicts, prepare the trademark registration documents required, pay the trademark registration govt fees, and submit your application online. IPR Karo guides you through every step of the trademark registration process in India."
  },
  {
    question: "What is the trademark registration cost in India?",
    answer: "The trademark registration price varies by applicant type and class count. Trademark registration govt fees for individuals and startups start at ₹4,500 per class, while companies pay ₹9,000 per class. IPR Karo offers transparent trademark registration pricing with no hidden costs, making it affordable for all budgets."
  },
  {
    question: "What documents are required for trademark registration?",
    answer: "The trademark registration documents required include: your brand logo or word mark, identity proof (Aadhaar/PAN), address proof, business registration certificate, MSME/Udyam certificate (if applicable), and a signed Form TM-48 (authorization). IPR Karo provides a complete document checklist and helps prepare everything for seamless filing."
  },
  {
    question: "How does the AI trademark search work at IPR Karo?",
    answer: "Our AI-powered trademark search scans the trademark search public database instantly, performing a comprehensive trademark search by name, trademark search by class, and phonetic similarity analysis. It checks trademark availability, runs a brand name availability search, and generates a detailed report with a registerability score — helping you make informed decisions before filing."
  },
  {
    question: "How long does trademark registration take in India?",
    answer: "Trademark registration in India typically takes 12-18 months from application to final registration. The trademark registration process includes filing, examination, publication in the Trademark Journal, and registration stages. IPR Karo's AI-powered pre-filing trademark search reduces objections and helps expedite approval."
  },
  {
    question: "Can I get trademark registration in Delhi and other cities?",
    answer: "Yes! IPR Karo offers trademark registration Delhi, Noida, Gurgaon, Mumbai, Bangalore, and PAN India coverage. Our fully online trademark registration process means you can register your trademark from anywhere in India. We also support trademark search international and trademark search WIPO for global brand protection."
  },
  {
    question: "What happens if my trademark application faces an objection?",
    answer: "If your trademark application faces objections or opposition, IPR Karo's legal experts help you respond with proper documentation and arguments. Our AI-powered trademark search reduces rejection risks by identifying trademark availability conflicts before filing, and our attorneys provide expert guidance throughout the trademark registration process."
  },
  {
    question: "Can I register a trademark for multiple classes?",
    answer: "Yes, you can register your trademark registration mark across multiple classes under the Nice Classification system. Use our trademark search by class tool to identify the right categories. Each class requires separate trademark registration govt fees. IPR Karo helps you select the relevant classes and offers cost-effective multi-class trademark registration."
  }
];


interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  author: string;
}

export default function BlogListingClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const filterOptions = ['All', 'AI Agents', 'AI Trends & News', 'Tutorials'];
  const sortOptions = ['Newest', 'Oldest'];

  // Fetch blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const data = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          return {
            id: doc.id,
            title: docData.title || '',
            subtitle: docData.subtitle || '',
            description: docData.description || '',
            date: docData.date || '',
            image: docData.image || '',
            created: docData.created || Date.now(),
            metaTitle: docData.metaTitle || '',
            metaDescription: docData.metaDescription || '',
            slug: docData.slug || '',
            author: docData.author || 'Anuj Anand Malik'
          };
        }) as Blog[];
        
        // Sort blogs by date in descending order (newest first)
        const sortedData = data.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
        
        setBlogs(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Get featured blog (most recent)
  const featuredBlog = blogs.length > 0 ? {
    id: blogs[0].id,
    title: blogs[0].title,
    excerpt: blogs[0].subtitle || blogs[0].metaDescription || '',
    date: new Date(blogs[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    tags: ['Resource', 'Article'],
    image: blogs[0].image,
    slug: blogs[0].slug
  } : null;

  // Get remaining blog posts (exclude featured)
  let blogPosts = blogs.slice(1).map(blog => ({
    id: blog.id,
    title: blog.title,
    date: new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    category: blog.subtitle || 'Article',
    type: 'Article',
    image: blog.image,
    slug: blog.slug
  }));

  // Apply sorting
  if (sortBy === 'Oldest') {
    blogPosts = [...blogPosts].reverse();
  }

  return (
    <div className="min-h-screen relative bg-white">
      {/* Decorative background elements - subtle for white background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #0C002B 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #B3A1FF 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-16 lg:pt-28 px-4 md:px-10 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header & Featured Section */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 mb-12 md:mb-20 lg:mb-24 items-start">
            {/* Left Column: Hero Text */}
            <div className="w-full md:w-[50%] flex flex-col pt-4">
              <span className="text-[#0C002B]/60 font-nunito text-[12px] md:text-[14px] font-semibold tracking-[0.1em] uppercase mb-6">
                IPRKARO BLOG
              </span>
              <h1 className="text-[#0C002B] font-nunito text-[42px] md:text-[68px] lg:text-[62px] font-bold leading-[1.05] mb-8">
                The IPR Edge:<br />
                all things brand protection
              </h1>
              <p className="text-[#0C002B]/50 font-nunito text-[15px] md:text-[20px] lg:text-[18px] font-normal leading-relaxed max-w-[550px]">
                Anything and everything you&apos;re looking for to protect your brand, trademarks, and intellectual property rights.
              </p>
            </div>

            {/* Right Column: Featured Blog Post */}
            <div className="w-full md:w-[40%] relative">
              {loading ? (
                <div className="animate-pulse">
                  <div className="aspect-[16/9] bg-gray-100 rounded-[30px] mb-6"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              ) : featuredBlog ? (
                <Link href={`/resources/${featuredBlog.slug}`}>
                  <div className="group cursor-pointer">
                    {/* Featured Image */}
                    <div className="aspect-[4/3] rounded-[30px] overflow-hidden mb-6 shadow-[0_8px_40px_rgb(0,0,0,0.06)] group-hover:shadow-[0_8px_50px_rgb(179,161,255,0.15)] transition-all duration-500">
                      <img
                        src={featuredBlog.image}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                    {/* Featured Title */}
                    <h2 className="text-[#0C002B] font-nunito text-[22px] md:text-[28px] lg:text-[24px] font-bold leading-tight mb-3 group-hover:text-[#B3A1FF] transition-colors duration-300">
                      {featuredBlog.title}
                    </h2>
                    {/* Featured Date */}
                    <p className="text-[#0C002B]/40 font-nunito text-[14px] md:text-[16px]">
                      {featuredBlog.date}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="text-center text-[#0C002B] py-12">
                  <p className="text-[#0C002B]/80 font-nunito text-[13px]">No resources available at the moment.</p>
                </div>
              )}
            </div>
          </div>

          {/* Filter and Sort Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-nunito text-[11px] md:text-[12px] lg:text-[12px] font-medium transition-all duration-300 border ${
                    activeFilter === filter
                      ? 'bg-[#0C002B] text-white border-[#0C002B]'
                      : 'bg-transparent text-[#0C002B] border-gray-200 hover:border-[#0C002B]/30 hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-3">
              <span className="text-[#0C002B] font-nunito text-[11px] md:text-[12px] lg:text-[12px]">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white text-[#0C002B] border border-gray-200 rounded-lg px-3 md:px-4 py-1.5 md:py-2 font-nunito text-[11px] md:text-[12px] lg:text-[12px] focus:outline-none focus:ring-2 focus:ring-[#B3A1FF] focus:border-[#B3A1FF]"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-8 md:pb-16 lg:pb-12">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-video bg-gray-100 border border-gray-200 rounded-lg md:rounded-[15px] mb-3 md:mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                </div>
              ))
            ) : blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <Link href={`/resources/${post.slug}`} key={post.id}>
                  <div className="group cursor-pointer">
                    {/* Blog Image */}
                    <div className="relative mb-3 md:mb-4 overflow-hidden rounded-lg md:rounded-[15px] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:border-[#B3A1FF]/40 transition-all duration-300">
                      <div className="aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Blog Meta */}
                    <div className="mb-2">
                      <div className="flex items-center gap-2 text-[#0C002B]/60 text-[10px] md:text-[11px] lg:text-[11px] font-nunito mb-1">
                        <span>{post.type}</span>
                        <span className="text-gray-300">|</span>
                        <span>{post.date}</span>
                        <span className="text-gray-300">|</span>
                        <span className="truncate max-w-[150px]">{post.category}</span>
                      </div>
                    </div>

                    {/* Blog Title */}
                    <h3 className="text-[#0C002B] font-nunito text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-[18px] md:leading-[20px] lg:leading-tight group-hover:text-[#B3A1FF] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-[#0C002B] py-12">
                <p className="text-[#0C002B]/80 font-nunito text-[13px]">No resources available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <FaqSection 
        items={resourceFaqs} 
        title={
          <>
            Have Question? <br />
            <span style={{ color: '#B3A1FF' }}>We've Got Answers.</span>
          </>
        }
      />
    </div>
  );
}
