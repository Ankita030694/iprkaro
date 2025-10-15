'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Faq } from '@/components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

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

export default function BlogPage() {
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
    tags: ['Blog', 'Article'],
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
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130),rgb(91, 88, 88))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #16a34a 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #FFB400 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Navbar */}

      {/* Main Content */}
      <div className="relative z-10 pt-16 lg:pt-28 px-4 md:px-10 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8 md:mb-20 lg:mb-16">
            {/* Blogs Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#FFB400]"></div>
              <span className="text-[rgba(255,255,255,0.8)] font-nunito text-[11px] md:text-[13px] lg:text-[13px] font-normal tracking-wider uppercase">
                Blogs
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-white font-nunito text-[28px] md:text-[45px] lg:text-[38px] font-medium leading-[32px] md:leading-[45px] lg:leading-[42px] mb-8 md:mb-12 lg:mb-10">
              Insights & Trends: The<br />
              Future of Intellectual Property
            </h1>

            {/* Featured Blog Post */}
            {loading ? (
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16 lg:mb-12">
                <div className="relative">
                  <div className="relative rounded-[20px] md:rounded-[25px] overflow-hidden bg-[#1f1310]/30 border border-[#16a34a]/20 p-4 md:p-8 animate-pulse">
                    <div className="w-full h-48 md:h-64 bg-[#3b2412]/50 rounded-lg"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="h-6 bg-[#3b2412]/50 rounded mb-4 animate-pulse"></div>
                  <div className="h-12 bg-[#3b2412]/50 rounded mb-4 animate-pulse"></div>
                  <div className="h-16 bg-[#3b2412]/50 rounded animate-pulse"></div>
                </div>
              </div>
            ) : featuredBlog ? (
              <Link href={`/blog/${featuredBlog.slug}`}>
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16 lg:mb-12 cursor-pointer group">
                  {/* Featured Image */}
                  <div className="relative">
                    <div className="relative rounded-[20px] md:rounded-[25px] overflow-hidden glass-card border border-[#16a34a]/20 p-4 md:p-8 hover:border-[#FFB400]/40 transition-all duration-300">
                      {/* Blog image */}
                      <div className="w-full h-48 md:h-64 bg-[#1f1310] rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={featuredBlog.image}
                          alt={featuredBlog.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="flex flex-col justify-center">
                    {/* Tags */}
                    <div className="flex gap-2 mb-3 md:mb-4">
                      {featuredBlog.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full text-[10px] md:text-[11px] lg:text-[11px] font-medium border transition-colors duration-300"
                          style={{ 
                            background: index === 0 ? 'rgba(22, 163, 74, 0.2)' : 'rgba(255, 180, 0, 0.2)',
                            borderColor: index === 0 ? 'rgba(22, 163, 74, 0.4)' : 'rgba(255, 180, 0, 0.4)',
                            color: index === 0 ? '#86efac' : '#FFB400'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-white font-nunito text-[20px] md:text-[28px] lg:text-[24px] font-semibold leading-[24px] md:leading-[32px] lg:leading-[28px] mb-3 md:mb-4 group-hover:text-[#FFB400] transition-colors duration-300">
                      {featuredBlog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[rgba(255,255,255,0.8)] font-nunito text-[11px] md:text-[13px] lg:text-[13px] font-normal leading-[13px] md:leading-[15.6px] lg:leading-[15.6px] mb-4 md:mb-6">
                      {featuredBlog.excerpt}
                    </p>

                    {/* Date */}
                    <p className="text-[rgba(255,255,255,0.6)] font-nunito text-[10px] md:text-[12px] lg:text-[12px]">
                      {featuredBlog.date}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="text-center text-white py-12">
                <p className="text-[rgba(255,255,255,0.8)] font-nunito text-[13px]">No blogs available at the moment.</p>
              </div>
            )}
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
                      ? 'bg-[#FFB400] text-black border-[#FFB400]'
                      : 'bg-transparent text-white border-[#16a34a]/30 hover:border-[#FFB400]/50 hover:bg-[#FFB400]/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-3">
              <span className="text-white font-nunito text-[11px] md:text-[12px] lg:text-[12px]">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#1f1310]/50 text-white border border-[#16a34a]/30 rounded-lg px-3 md:px-4 py-1.5 md:py-2 font-nunito text-[11px] md:text-[12px] lg:text-[12px] focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400]"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option} className="bg-black text-white">
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
                  <div className="aspect-video bg-[#1f1310]/30 border border-[#16a34a]/20 rounded-lg md:rounded-[15px] mb-3 md:mb-4"></div>
                  <div className="h-4 bg-[#3b2412]/50 rounded mb-2"></div>
                  <div className="h-6 bg-[#3b2412]/50 rounded"></div>
                </div>
              ))
            ) : blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <div className="group cursor-pointer">
                    {/* Blog Image */}
                    <div className="relative mb-3 md:mb-4 overflow-hidden rounded-lg md:rounded-[15px] border border-[#16a34a]/20 hover:border-[#FFB400]/40 transition-all duration-300">
                      <div className="aspect-video bg-[#1f1310] flex items-center justify-center overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Blog Meta */}
                    <div className="mb-2">
                      <div className="flex items-center gap-2 text-[#86efac]/80 text-[10px] md:text-[11px] lg:text-[11px] font-nunito mb-1">
                        <span>{post.type}</span>
                        <span className="text-[#FFB400]">|</span>
                        <span>{post.date}</span>
                        <span className="text-[#FFB400]">|</span>
                        <span className="truncate max-w-[150px]">{post.category}</span>
                      </div>
                    </div>

                    {/* Blog Title */}
                    <h3 className="text-white font-nunito text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-[18px] md:leading-[20px] lg:leading-tight group-hover:text-[#FFB400] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-white py-12">
                <p className="text-[rgba(255,255,255,0.8)] font-nunito text-[13px]">No blog posts available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}
