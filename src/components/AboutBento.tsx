'use client';

import React from 'react';

const AboutBento = () => {
  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 183, 3, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 183, 3, 0.8);
        }
      `}</style>
      <div className="w-full min-h-screen px-4 relative" style={{scale: '0.90',marginTop: '-50px' }}>
      <div className="max-w-7xl mx-auto h-full">
        {/* Desktop Version - 4 Column Grid */}
        <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 h-screen py-6">
          
          {/* Column 1 - Dashboard Preview Snippet */}
          <div className="col-span-1">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl p-3 border border-zinc-800 h-full max-h-[600px] flex flex-col overflow-y-auto custom-scrollbar">
              {/* Header */}
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-chart-line text-white text-[10px]"></i>
                  </div>
                  <h3 className="text-white font-semibold text-xs">Your Dashboard</h3>
                </div>
              </div>

              {/* Health Score Banner */}
              <div className="mb-2">
                <h2 className="text-xl font-bold text-white mb-1">Excellent</h2>
                <div className="w-full bg-zinc-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-1.5 mb-2">
                <div className="bg-zinc-800/50 rounded-lg p-1.5 border border-zinc-700">
                  <p className="text-zinc-400 text-[9px]">Apps</p>
                  <p className="text-sm font-bold text-white">1,247</p>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-1.5 border border-zinc-700">
                  <p className="text-zinc-400 text-[9px]">Success</p>
                  <p className="text-sm font-bold text-white">94.5%</p>
                </div>
              </div>

              {/* Circular Progress */}
              <div className="mb-2">
                <h4 className="text-white font-medium text-[10px] mb-1">Registrability</h4>
                <div className="flex justify-center">
                  <div className="relative w-14 h-14">
                    <svg className="transform -rotate-90 w-14 h-14">
                        <circle
                        cx="28"
                        cy="28"
                        r="20"
                          stroke="currentColor"
                        strokeWidth="5"
                          fill="transparent"
                          className="text-zinc-700"
                        />
                        <circle
                        cx="28"
                        cy="28"
                        r="20"
                          stroke="currentColor"
                        strokeWidth="5"
                          fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 20 * 0.75} ${2 * Math.PI * 20}`}
                        className="text-blue-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-500">75%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Info */}
              <div className="bg-yellow-500/10 rounded-lg p-1.5 border border-yellow-500/30 mb-2">
                <p className="text-zinc-300 text-[9px]">Est. Completion</p>
                <p className="text-white font-bold text-[10px]">25 Dec 2025</p>
              </div>

              {/* Status Timeline */}
              <div className="mb-2">
                <h4 className="text-white font-medium text-[10px] mb-1.5">Application Status</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[9px] truncate">Filed Successfully</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 animate-pulse"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[9px] truncate">Under Examination</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zinc-600 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-zinc-500 text-[9px] truncate">Publication Pending</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-1 mb-2">
                <div className="bg-zinc-800/50 rounded p-1 text-center">
                  <i className="fas fa-file text-yellow-500 text-[8px]"></i>
                  <p className="text-white text-[9px] font-bold">12</p>
                  <p className="text-zinc-400 text-[7px]">Docs</p>
                </div>
                <div className="bg-zinc-800/50 rounded p-1 text-center">
                  <i className="fas fa-clock text-cyan-400 text-[8px]"></i>
                  <p className="text-white text-[9px] font-bold">45d</p>
                  <p className="text-zinc-400 text-[7px]">Days</p>
                </div>
                <div className="bg-zinc-800/50 rounded p-1 text-center">
                  <i className="fas fa-check text-green-400 text-[8px]"></i>
                  <p className="text-white text-[9px] font-bold">3/5</p>
                  <p className="text-zinc-400 text-[7px]">Steps</p>
                    </div>
                  </div>
                  
              {/* SEO Keywords Section */}
              <div className="mb-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-1.5">
                <h4 className="text-white font-medium text-[9px] mb-1">Protected Services</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[7px] bg-zinc-800/50 text-zinc-300 px-1.5 py-0.5 rounded">Trademark Registration India</span>
                  <span className="text-[7px] bg-zinc-800/50 text-zinc-300 px-1.5 py-0.5 rounded">Patent Filing</span>
                  <span className="text-[7px] bg-zinc-800/50 text-zinc-300 px-1.5 py-0.5 rounded">Brand Protection</span>
                  <span className="text-[7px] bg-zinc-800/50 text-zinc-300 px-1.5 py-0.5 rounded">IP Rights</span>
                    </div>
                  </div>

              {/* Quick Access Links */}
              <div className="mb-2">
                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-zinc-400 flex items-center gap-1">
                    <i className="fas fa-certificate text-green-400"></i>
                    Trademark Status
                  </span>
                  <span className="text-yellow-500 font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between text-[8px] mt-1">
                  <span className="text-zinc-400 flex items-center gap-1">
                    <i className="fas fa-shield-alt text-blue-400"></i>
                    Copyright Protection
                  </span>
                  <span className="text-green-500 font-medium">Verified</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-auto">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1.5 px-2 rounded-lg transition-colors duration-200 text-[10px]">
                  <i className="fas fa-rocket mr-1"></i>
                  View Dashboard
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 - 2 rows: 1st row 200px, 2nd row 400px */}
          <div className="col-span-1 space-y-4">
            {/* Row 1 - 200px - Our Services */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl p-3 border border-zinc-800 h-[200px] flex flex-col justify-center overflow-hidden">
              <h4 className="text-white font-medium text-xs mb-2">Our Services</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 p-1.5 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors cursor-pointer">
                  <i className="fas fa-trademark text-yellow-500 text-[10px] flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-white text-[10px] font-medium truncate">Trademark Registration</p>
                    <p className="text-zinc-500 text-[9px] truncate">Fast Brand Protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors cursor-pointer">
                  <i className="fas fa-lightbulb text-cyan-400 text-[10px] flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-white text-[10px] font-medium truncate">Patent Services</p>
                    <p className="text-zinc-500 text-[9px] truncate">Protect Innovation</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors cursor-pointer">
                  <i className="fas fa-copyright text-green-400 text-[10px] flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-white text-[10px] font-medium truncate">Copyright Protection</p>
                    <p className="text-zinc-500 text-[9px] truncate">Secure Creative Work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - 400px - SEO Optimized Blogs Section */}
            <div className="bg-gradient-to-br from-purple-950/50 via-indigo-950/50 to-purple-950/50 rounded-xl p-3 border border-purple-900/50 h-[400px] flex flex-col overflow-hidden">
              <div className="mb-2 flex-shrink-0">
                <span className="text-purple-300 text-[10px]">IPR Resources</span>
                <h3 className="text-white font-semibold text-xs mt-0.5">Knowledge Hub</h3>
              </div>

              {/* Featured Article - SEO Optimized */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-2 flex-shrink-0">
                <h4 className="text-white font-medium text-[10px] mb-1 line-clamp-2">Trademark Registration Guide</h4>
                <p className="text-zinc-300 text-[9px] mb-1 line-clamp-2">Register trademarks in India with AI-powered search and expert guidance...</p>
                <div className="flex gap-1">
                  <span className="text-yellow-500 text-[8px] bg-yellow-500/10 px-1.5 py-0.5 rounded">Trademark</span>
                  <span className="text-cyan-400 text-[8px] bg-cyan-400/10 px-1.5 py-0.5 rounded">AI Tools</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-1.5 mb-2 flex-wrap flex-shrink-0">
                <button className="px-2 py-0.5 bg-purple-600 text-white text-[9px] rounded-full">All</button>
                <button className="px-2 py-0.5 bg-white/10 text-white text-[9px] rounded-full hover:bg-white/20 transition-colors">Trademark</button>
                <button className="px-2 py-0.5 bg-white/10 text-white text-[9px] rounded-full hover:bg-white/20 transition-colors">Patent</button>
              </div>

              {/* Quick Topics - SEO Keywords */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <h4 className="text-white font-medium text-[10px] mb-1.5">Popular Topics</h4>
                <div className="space-y-1">
                  <div className="bg-purple-900/30 rounded p-1.5 text-zinc-300 text-[9px] cursor-pointer hover:bg-purple-900/50 transition-colors">
                    <i className="fas fa-search mr-1 text-yellow-500 text-[8px]"></i>
                    AI Trademark Search
                  </div>
                  <div className="bg-purple-900/30 rounded p-1.5 text-zinc-300 text-[9px] cursor-pointer hover:bg-purple-900/50 transition-colors">
                    <i className="fas fa-shield-alt mr-1 text-cyan-400 text-[8px]"></i>
                    IP Protection India
                  </div>
                  <div className="bg-purple-900/30 rounded p-1.5 text-zinc-300 text-[9px] cursor-pointer hover:bg-purple-900/50 transition-colors">
                    <i className="fas fa-certificate mr-1 text-green-400 text-[8px]"></i>
                    Brand Registration
                  </div>
                  <div className="bg-yellow-600 rounded p-1.5 text-white text-[9px] font-medium cursor-pointer hover:bg-yellow-700 transition-colors">
                    <i className="fas fa-file-contract mr-1 text-[8px]"></i>
                    Filing Process 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - 1 row, 600px max height */}
          <div className="col-span-1">
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-xl p-3 border border-zinc-800 h-full max-h-[600px] flex flex-col overflow-hidden">
              {/* Yellow AI Icon */}
              <div className="mb-2 relative flex justify-center">
                <div className="relative">
                  {/* Main yellow icon shape */}
                  <svg width="40" height="40" viewBox="0 0 100 100" className="text-yellow-500">
                    <path
                      d="M20 50 L35 20 L50 35 L40 50 L50 65 L35 80 Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Small decorative elements */}
                  <div className="absolute -right-2 top-2 w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="absolute -right-1 top-0 w-1.5 h-1.5 bg-yellow-500 rounded-sm transform rotate-45"></div>
                </div>
              </div>

              {/* AI Text */}
              <h2 className="text-3xl font-bold text-cyan-400 mb-2 text-center">AI</h2>

              {/* Main Description */}
              <p className="text-zinc-300 text-[9px] leading-relaxed text-center mb-3 px-2">
                Our AI-powered tools analyze millions of trademarks to give you accurate insights, reducing risks and accelerating brand protection.
              </p>

              {/* AI Features */}
              <div className="space-y-1.5 mb-3">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-2">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fas fa-brain text-cyan-400 text-[10px]"></i>
                    <h4 className="text-white font-medium text-[10px]">Smart Analysis</h4>
                  </div>
                  <p className="text-zinc-400 text-[8px] leading-relaxed">
                    Intelligent pattern recognition across trademark databases
                  </p>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-2">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fas fa-search-plus text-yellow-500 text-[10px]"></i>
                    <h4 className="text-white font-medium text-[10px]">Deep Search</h4>
                  </div>
                  <p className="text-zinc-400 text-[8px] leading-relaxed">
                    Phonetic and visual similarity detection in real-time
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fas fa-chart-bar text-green-400 text-[10px]"></i>
                    <h4 className="text-white font-medium text-[10px]">Risk Scoring</h4>
                  </div>
                  <p className="text-zinc-400 text-[8px] leading-relaxed">
                    Automated conflict assessment and success predictions
                  </p>
                </div>
              </div>

              {/* AI Stats */}
              <div className="bg-zinc-800/50 rounded-lg p-2 mb-2">
                <h4 className="text-white font-medium text-[10px] mb-2 text-center">AI Performance</h4>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="text-center">
                    <p className="text-cyan-400 font-bold text-sm">10M+</p>
                    <p className="text-zinc-400 text-[7px]">Records Scanned</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-500 font-bold text-sm">98%</p>
                    <p className="text-zinc-400 text-[7px]">Accuracy Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green-400 font-bold text-sm">&lt;3s</p>
                    <p className="text-zinc-400 text-[7px]">Search Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-400 font-bold text-sm">24/7</p>
                    <p className="text-zinc-400 text-[7px]">Available</p>
                  </div>
                </div>
              </div>

              {/* AI Technology Keywords */}
              <div className="mb-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-1.5">
                <h4 className="text-white font-medium text-[9px] mb-1">AI Capabilities</h4>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[8px]">
                    <span className="text-zinc-300 flex items-center gap-1">
                      <i className="fas fa-robot text-cyan-400 text-[7px]"></i>
                      Machine Learning
                    </span>
                    <span className="text-cyan-400 font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-[8px]">
                    <span className="text-zinc-300 flex items-center gap-1">
                      <i className="fas fa-database text-purple-400 text-[7px]"></i>
                      NLP Processing
                    </span>
                    <span className="text-purple-400 font-medium">Live</span>
                  </div>
                </div>
              </div>

              {/* SEO Keywords Tags */}
              <div className="mb-2">
                <h4 className="text-white font-medium text-[9px] mb-1">Search Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[7px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30">AI Trademark Search</span>
                  <span className="text-[7px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30">Smart Detection</span>
                  <span className="text-[7px] bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded border border-green-500/30">Auto Analysis</span>
                  <span className="text-[7px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">IP Intelligence</span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mb-2 space-y-1">
                <div className="flex items-start gap-1.5">
                  <i className="fas fa-check-circle text-green-400 text-[7px] mt-0.5 flex-shrink-0"></i>
                  <p className="text-zinc-300 text-[7px] leading-tight">Instant trademark availability check India</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <i className="fas fa-check-circle text-green-400 text-[7px] mt-0.5 flex-shrink-0"></i>
                  <p className="text-zinc-300 text-[7px] leading-tight">Real-time IP conflict detection system</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <i className="fas fa-check-circle text-green-400 text-[7px] mt-0.5 flex-shrink-0"></i>
                  <p className="text-zinc-300 text-[7px] leading-tight">Automated brand protection monitoring</p>
                </div>
              </div>

              {/* AI Badge */}
             
            </div>
          </div>

          {/* Column 4 - 2 rows: 1st row 400px, 2nd row 200px */}
          <div className="col-span-1 space-y-4">
            {/* Row 1 - 400px - Why Choose Us */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl p-3 border border-zinc-800 h-[400px] flex flex-col overflow-y-auto custom-scrollbar">
              <div className="mb-2 flex-shrink-0">
                <h4 className="text-white font-medium text-xs mb-2 flex items-center gap-1.5">
                  <i className="fas fa-star text-yellow-500 text-[10px]"></i>
                  Why Choose IPR Karo
                </h4>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-1.5 bg-zinc-800/30 p-1.5 rounded-lg">
                    <i className="fas fa-bolt text-yellow-500 text-[9px] mt-0.5 flex-shrink-0"></i>
                    <div className="min-w-0">
                      <p className="text-white text-[10px] font-medium">Fast Processing</p>
                      <p className="text-zinc-400 text-[8px] line-clamp-2">Quick trademark registration with AI tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-1.5 bg-zinc-800/30 p-1.5 rounded-lg">
                    <i className="fas fa-users text-cyan-400 text-[9px] mt-0.5 flex-shrink-0"></i>
                    <div className="min-w-0">
                      <p className="text-white text-[10px] font-medium">Expert Guidance</p>
                      <p className="text-zinc-400 text-[8px] line-clamp-2">Legal support from trademark attorneys</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-1.5 bg-zinc-800/30 p-1.5 rounded-lg">
                    <i className="fas fa-tag text-green-400 text-[9px] mt-0.5 flex-shrink-0"></i>
                    <div className="min-w-0">
                      <p className="text-white text-[10px] font-medium">Affordable Pricing</p>
                      <p className="text-zinc-400 text-[8px] line-clamp-2">Transparent costs, no hidden fees</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="flex-1 mt-2">
                <h4 className="text-white font-medium text-xs mb-2">Our Track Record</h4>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-1.5 text-center">
                    <p className="text-green-400 font-bold text-sm">94.5%</p>
                    <p className="text-zinc-400 text-[8px]">Success Rate</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded p-1.5 text-center">
                    <p className="text-blue-400 font-bold text-sm">1.25L+</p>
                    <p className="text-zinc-400 text-[8px]">Happy Clients</p>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-1.5 text-center">
                    <p className="text-yellow-400 font-bold text-sm">18 Days</p>
                    <p className="text-zinc-400 text-[8px]">Avg. Time</p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded p-1.5 text-center">
                    <p className="text-purple-400 font-bold text-sm">24/7</p>
                    <p className="text-zinc-400 text-[8px]">Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - 200px - Testimonial */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl p-3 border border-zinc-800 h-[200px] flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-[8px]"></i>
                    ))}
                  </div>
                </div>
                
                <p className="text-zinc-300 text-[9px] leading-relaxed mb-2 line-clamp-3">
                  "Exceptional service! AI-powered search saved time and provided accurate results. Expert team guided us through every step."
                </p>
                
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-yellow-500 font-bold text-[10px]">Verified User</p>
                    <p className="text-zinc-400 text-[8px]">Business Owner</p>
                  </div>
                  
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                      <path
                        d="M12 24 L18 12 L24 18 L20 24 L24 30 L18 36 Z"
                        fill="currentColor"
                      />
                      <circle cx="34" cy="20" r="3" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-around pt-2 border-t border-zinc-800">
                <div className="text-center">
                  <i className="fas fa-shield-alt text-green-400 text-[10px] mb-0.5"></i>
                  <p className="text-zinc-400 text-[7px]">Govt. Reg.</p>
                  </div>
                <div className="text-center">
                  <i className="fas fa-certificate text-blue-400 text-[10px] mb-0.5"></i>
                  <p className="text-zinc-400 text-[7px]">ISO</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-lock text-yellow-400 text-[10px] mb-0.5"></i>
                  <p className="text-zinc-400 text-[7px]">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version - Compact Bento Grid */}
        <div className="md:hidden h-screen py-4 overflow-hidden">
          <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
          
            {/* Cell 1 - Dashboard Stats (Row 1, Col 1) */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg p-3 border border-zinc-800 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-chart-line text-black text-[10px]"></i>
                </div>
                <h3 className="text-white font-semibold text-xs">Dashboard</h3>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Excellent</h2>
              <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-2">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-zinc-800/50 rounded p-1 text-center">
                  <p className="text-white text-sm font-bold">94.5%</p>
                  <p className="text-zinc-400 text-[8px]">Success</p>
                </div>
                <div className="bg-zinc-800/50 rounded p-1 text-center">
                  <p className="text-white text-sm font-bold">1.2L+</p>
                  <p className="text-zinc-400 text-[8px]">Clients</p>
                </div>
              </div>
            </div>

            {/* Cell 2 - AI Section (Row 1, Col 2 - Spans 2 rows) */}
            <div className="row-span-2 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-lg p-3 border border-zinc-800 flex flex-col justify-center items-center">
              <div className="relative mb-2">
                <svg width="35" height="35" viewBox="0 0 100 100" className="text-yellow-500">
                  <path d="M20 50 L35 20 L50 35 L40 50 L50 65 L35 80 Z" fill="currentColor" />
                </svg>
                <div className="absolute -right-1.5 top-1.5 w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-2">AI</h2>
              <p className="text-zinc-300 text-[9px] text-center mb-3 leading-tight">
                AI-powered trademark analysis with 98% accuracy for instant brand protection
              </p>
              <div className="grid grid-cols-2 gap-1.5 w-full">
                <div className="bg-cyan-500/10 rounded p-1.5 text-center border border-cyan-500/30">
                  <p className="text-cyan-400 font-bold text-sm">10M+</p>
                  <p className="text-zinc-400 text-[7px]">Records</p>
                </div>
                <div className="bg-yellow-500/10 rounded p-1.5 text-center border border-yellow-500/30">
                  <p className="text-yellow-500 font-bold text-sm">98%</p>
                  <p className="text-zinc-400 text-[7px]">Accuracy</p>
                </div>
              </div>
              <div className="flex gap-1 mt-2 flex-wrap justify-center">
                <span className="text-[7px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">AI Search</span>
                <span className="text-[7px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded">Smart Detect</span>
              </div>
            </div>

            {/* Cell 3 - Services (Row 2, Col 1) */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg p-3 border border-zinc-800 flex flex-col justify-center">
              <h4 className="text-white font-semibold text-xs mb-2">Our Services</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 bg-zinc-800/50 rounded p-1.5">
                  <i className="fas fa-trademark text-yellow-500 text-xs"></i>
                  <p className="text-white text-[9px] font-medium">Trademark Registration</p>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800/50 rounded p-1.5">
                  <i className="fas fa-lightbulb text-cyan-400 text-xs"></i>
                  <p className="text-white text-[9px] font-medium">Patent Services</p>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800/50 rounded p-1.5">
                  <i className="fas fa-copyright text-green-400 text-xs"></i>
                  <p className="text-white text-[9px] font-medium">Copyright Protection</p>
                </div>
              </div>
            </div>

            {/* Cell 4 - Knowledge Hub (Row 3, Col 1) */}
            <div className="bg-gradient-to-br from-purple-950/50 via-indigo-950/50 to-purple-950/50 rounded-lg p-3 border border-purple-900/50 flex flex-col">
              <div className="mb-2">
                <span className="text-purple-300 text-[8px]">IPR Resources</span>
                <h3 className="text-white font-semibold text-xs">Knowledge Hub</h3>
              </div>
              <div className="bg-white/10 rounded p-2 mb-2">
                <h4 className="text-white font-medium text-[9px] mb-1">Trademark Guide 2025</h4>
                <div className="flex gap-1">
                  <span className="text-[7px] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded">Trademark</span>
                  <span className="text-[7px] bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded">AI Tools</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="bg-purple-900/30 rounded p-1.5 text-zinc-300 text-[8px]">
                  <i className="fas fa-search mr-1 text-yellow-500 text-[7px]"></i>
                  AI Trademark Search
                </div>
                <div className="bg-yellow-600 rounded p-1.5 text-white text-[8px] font-medium">
                  <i className="fas fa-file-contract mr-1 text-[7px]"></i>
                  Filing Process
                </div>
              </div>
            </div>

            {/* Cell 5 - Why Choose Us (Row 3, Col 2) */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg p-3 border border-zinc-800 flex flex-col">
              <h4 className="text-white font-semibold text-xs mb-2 flex items-center gap-1">
                <i className="fas fa-star text-yellow-500 text-[10px]"></i>
                Why IPR Karo
              </h4>
              <div className="space-y-1.5 mb-2">
                <div className="flex items-center gap-1.5 bg-zinc-800/30 rounded p-1.5">
                  <i className="fas fa-bolt text-yellow-500 text-[9px]"></i>
                  <p className="text-white text-[9px]">Fast Processing</p>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-800/30 rounded p-1.5">
                  <i className="fas fa-users text-cyan-400 text-[9px]"></i>
                  <p className="text-white text-[9px]">Expert Guidance</p>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-800/30 rounded p-1.5">
                  <i className="fas fa-tag text-green-400 text-[9px]"></i>
                  <p className="text-white text-[9px]">Affordable Price</p>
                </div>
              </div>
              <div className="flex gap-1 justify-around pt-2 border-t border-zinc-800">
                <div className="text-center">
                  <i className="fas fa-shield-alt text-green-400 text-xs"></i>
                  <p className="text-zinc-400 text-[7px]">Govt.</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-certificate text-blue-400 text-xs"></i>
                  <p className="text-zinc-400 text-[7px]">ISO</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-lock text-yellow-400 text-xs"></i>
                  <p className="text-zinc-400 text-[7px]">Secure</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Blur Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
        style={{
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
          
        }}
      ></div>
    </div>
    </>
  );
};

export default AboutBento;

