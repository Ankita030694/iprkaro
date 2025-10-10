'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Faq } from '@/components';

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const filterOptions = ['All', 'AI Agents', 'AI Trends & News', 'Tutorials'];
  const sortOptions = ['Newest', 'Oldest'];

  // Sample blog data
  const featuredBlog = {
    id: 1,
    title: 'Bits & Pexels Founders Festival 2025',
    excerpt: 'While every Nova-3 release improves overall accuracy, these three languages are especially impactful because of their global scale. Enterprises can now deploy voice AI across:',
    date: 'Aug 29, 2025',
    tags: ['Network', 'AI'],
    image: '/figmacomp/heroart.svg'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Why the Deepgram + Cloudflare tie-up actually solves real problems',
      date: 'Sep 28, 2025',
      category: 'AI Engineering & Research',
      type: 'Article',
      image: '/figmacomp/heroart.svg'
    },
    {
      id: 3,
      title: 'Why the Deepgram + Cloudflare tie-up actually solves real problems',
      date: 'Sep 28, 2025',
      category: 'AI Engineering & Research',
      type: 'Article',
      image: '/figmacomp/heroart.svg'
    },
    {
      id: 4,
      title: 'Why the Deepgram + Cloudflare tie-up actually solves real problems',
      date: 'Sep 28, 2025',
      category: 'AI Engineering & Research',
      type: 'Article',
      image: '/figmacomp/heroart.svg'
    },
    {
      id: 5,
      title: 'Why the Deepgram + Cloudflare tie-up actually solves real problems',
      date: 'Sep 28, 2025',
      category: 'AI Engineering & Research',
      type: 'Article',
      image: '/figmacomp/heroart.svg'
    },
    {
      id: 6,
      title: 'Why the Deepgram + Cloudflare tie-up actually solves real problems',
      date: 'Sep 28, 2025',
      category: 'AI Engineering & Research',
      type: 'Article',
      image: '/figmacomp/heroart.svg'
    },
    {
      id: 7,
      title: 'Why the Deepgram + Cloudflare tie-up actually solves real problems',
      date: 'Sep 28, 2025',
      category: 'AI Engineering & Research',
      type: 'Article',
      image: '/figmacomp/heroart.svg'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background using same gradient as hero - Optimized */}
      <div className="absolute inset-0 will-change-transform">
        <Image 
          src="/figmacomp/iprhero.svg" 
          alt="Background" 
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
          quality={85}
          sizes="100vw"
          placeholder="empty"
          loading="eager"
        />
      </div>

      {/* Navbar */}

      {/* Main Content */}
      <div className="relative z-10 pt-32 px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            {/* Blogs Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#FFB703]"></div>
              <span className="text-[rgba(255,255,255,0.8)] font-nunito text-sm font-normal tracking-wider uppercase">
                Blogs
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-white font-nunito text-4xl lg:text-5xl font-normal leading-tight mb-8">
              Insights & Trends: The<br />
              Future of Communications
            </h1>

            {/* Featured Blog Post */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Featured Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-white p-8">
                  {/* Conflict image */}
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <Image
                      src="/locations/city1.svg"
                      alt="Featured Blog Image"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                
                </div>
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-center">
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {featuredBlog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        background: index === 0 ? 'rgba(139, 69, 19, 0.8)' : 'rgba(128, 128, 128, 0.8)',
                        color: 'white'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-white font-nunito text-2xl lg:text-3xl font-semibold mb-4">
                  {featuredBlog.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[rgba(255,255,255,0.8)] font-nunito text-base leading-relaxed mb-6">
                  {featuredBlog.excerpt}
                </p>

                {/* Date */}
                <p className="text-[rgba(255,255,255,0.6)] font-nunito text-sm">
                  {featuredBlog.date}
                </p>
              </div>
            </div>
          </div>

          {/* Filter and Sort Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-nunito text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-[#FFB703] text-[#0C002B]'
                      : 'bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.2)]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-3">
              <span className="text-white font-nunito text-sm">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)] rounded-lg px-4 py-2 font-nunito text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0C002B] text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                {/* Blog Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="aspect-video bg-gray-300 flex items-center justify-center">
                    <Image
                      src="/locations/city1.svg"
                      alt={`Blog post ${post.id} image`}
                      width={300}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Blog Meta */}
                <div className="mb-2">
                  <div className="flex items-center gap-2 text-[rgba(255,255,255,0.6)] text-xs font-nunito mb-1">
                    <span>{post.type}</span>
                    <span>|</span>
                    <span>{post.date}</span>
                    <span>|</span>
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="text-white font-nunito text-lg font-semibold leading-tight group-hover:text-[#FFB703] transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}
