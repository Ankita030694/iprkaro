'use client';

import { SimplePlans } from "@/components";
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SearchClient = dynamic(() => import('@/components/SearchClient'));

// Create a Services Hero Component similar to HeroSection
function ServicesHeroSection() {
  return (
    <section className="w-full min-h-[110vh] relative overflow-hidden flex flex-col justify-center items-center pt-16 md:pt-0 pb-16 md:pb-24 mt-15">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130), #ffffff)',
          backgroundSize: '120% 120%',
          backgroundPosition: '10% 0%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Unified Hero and Services Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 md:px-8 mt-6 md:mt-20 mb-8 md:mb-12">
        <div 
          className="p-6 md:p-12 lg:p-16"
          style={{
            borderRadius: '28px',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.45)',
            boxShadow: '0 0 24px 0 rgba(255, 255, 255, 0.28) inset, 0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {/* Our Services Heading */}
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4">
              Our Services
            </h1>
            <p className="text-[rgba(255,255,255,0.85)] font-nunito text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
              Comprehensive intellectual property solutions powered by AI and backed by expert legal guidance. From trademarks to patents, we protect what matters most to your business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full flex justify-center mb-10 md:mb-14">
            <div className="w-full max-w-2xl">
              <SearchClient />
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="relative w-full h-px mb-10 md:mb-14">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFB703] to-transparent opacity-20 blur-sm"></div>
          </div>

          {/* Stat Cards - Above Services */}
          <div className="w-full mb-8 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {/* Stat Card 1 */}
              <div 
                className="group cursor-default backdrop-blur-md rounded-xl p-3 md:p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
                  border: '2px solid rgba(110, 94, 147, 0.4)',
                  boxShadow: '0 8px 32px rgba(110, 94, 147, 0.3), 0 0 60px rgba(110, 94, 147, 0.15)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.4) 0%, rgba(110, 94, 147, 0.6) 100%)',
                      border: '2px solid rgba(110, 94, 147, 0.6)',
                      boxShadow: '0 6px 20px rgba(110, 94, 147, 0.5)'
                    }}
                  >
                    <i 
                      className="fa-solid fa-microchip text-[#6E5E93] text-lg md:text-xl"
                      style={{
                        textShadow: '0 0 20px rgba(110, 94, 147, 0.9)',
                        filter: 'brightness(1.5)'
                      }}
                    />
                  </div>
                  <p className="text-white font-nunito text-[12px] md:text-[13px] font-semibold leading-[16px] md:leading-[18px]">
                    AI-Powered Analysis in 60 Seconds
                  </p>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div 
                className="group cursor-default backdrop-blur-md rounded-xl p-3 md:p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
                  border: '2px solid rgba(110, 94, 147, 0.4)',
                  boxShadow: '0 8px 32px rgba(110, 94, 147, 0.3), 0 0 60px rgba(110, 94, 147, 0.15)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.4) 0%, rgba(110, 94, 147, 0.6) 100%)',
                      border: '2px solid rgba(110, 94, 147, 0.6)',
                      boxShadow: '0 6px 20px rgba(110, 94, 147, 0.5)'
                    }}
                  >
                    <i 
                      className="fa-solid fa-chart-line text-[#6E5E93] text-lg md:text-xl"
                      style={{
                        textShadow: '0 0 20px rgba(110, 94, 147, 0.9)',
                        filter: 'brightness(1.5)'
                      }}
                    />
                  </div>
                  <p className="text-white font-nunito text-[12px] md:text-[13px] font-semibold leading-[16px] md:leading-[18px]">
                    10,000+ Trademarks Checked This Month
                  </p>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div 
                className="group cursor-default backdrop-blur-md rounded-xl p-3 md:p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
                  border: '2px solid rgba(110, 94, 147, 0.4)',
                  boxShadow: '0 8px 32px rgba(110, 94, 147, 0.3), 0 0 60px rgba(110, 94, 147, 0.15)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.4) 0%, rgba(110, 94, 147, 0.6) 100%)',
                      border: '2px solid rgba(110, 94, 147, 0.6)',
                      boxShadow: '0 6px 20px rgba(110, 94, 147, 0.5)'
                    }}
                  >
                    <i 
                      className="fa-solid fa-circle-check text-[#6E5E93] text-lg md:text-xl"
                      style={{
                        textShadow: '0 0 20px rgba(110, 94, 147, 0.9)',
                        filter: 'brightness(1.5)'
                      }}
                    />
                  </div>
                  <p className="text-white font-nunito text-[12px] md:text-[13px] font-semibold leading-[16px] md:leading-[18px]">
                    95% Success Rate for AI-Approved Names
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Service Containers */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {/* Service 1 - Trademark Registration */}
              <Link href="/services/trademark-registration">
                <div
                  className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    borderRadius: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(23.16px)',
                    WebkitBackdropFilter: 'blur(23.16px)'
                  }}
                >
                  <div className="mb-3">
                    <h3 className="text-white font-nunito text-lg font-bold mb-2 text-center">
                      Trademark Registration
                    </h3>
                  </div>
                  <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '58px' }}></div>
                  <div className="pt-6 text-left space-y-3">
                    <p className="text-white font-nunito text-sm leading-relaxed mb-4 opacity-90">
                      Register your trademark online start with our AI trademark search, review your report, and file instantly.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">AI-powered trademark search for instant conflict detection and brand availability</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Register trademark online with a fast, step-by-step guided application</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">How to register a trademark in India: Complete filing and legal support</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Get your trademark search report with AI to maximize registerability</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Secure your brand identity with expert trademark protection</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                      Learn More →
                    </span>
                  </p>
                </div>
              </Link>

              {/* Service 2 - Copyright Protection */}
              <Link href="/services/copyright-protection">
                <div
                  className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    borderRadius: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(23.16px)',
                    WebkitBackdropFilter: 'blur(23.16px)'
                  }}
                >
                  <div className="mb-3">
                    <h3 className="text-white font-nunito text-lg font-bold mb-2 text-center">
                      Copyright Protection
                    </h3>
                  </div>
                  <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '58px' }}></div>
                  <div className="pt-6 text-left space-y-3">
                    <p className="text-white font-nunito text-sm leading-relaxed mb-4 opacity-90">
                      Secure creative works digitally AI copyright search and seamless online application keep your assets protected.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Online copyright registration for digital content and creative works</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">AI copyright search for originality and infringement checks</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">How to protect your copyright online: From application to monitoring</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Efficient copyright filing and expert guidance for complete protection</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Lifetime protection plus 60 years for your creative works</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                      Learn More →
                    </span>
                  </p>
                </div>
              </Link>

              {/* Service 3 - Patent Services */}
              <Link href="/services/patent-services">
                <div
                  className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    borderRadius: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(23.16px)',
                    WebkitBackdropFilter: 'blur(23.16px)'
                  }}
                >
                  <div className="mb-3">
                    <h3 className="text-white font-nunito text-lg font-bold mb-2 text-center">
                      Patent Services
                    </h3>
                  </div>
                  <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '58px' }}></div>
                  <div className="pt-6 text-left space-y-3">
                    <p className="text-white font-nunito text-sm leading-relaxed mb-4 opacity-90">
                      Protect inventions with AI-optimized patent search and application file quickly, stay ahead of the competition.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Patent registration for inventions with AI-powered search and risk analysis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">How to file a patent: Quick patent search, filing, and legal compliance in India</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">End-to-end patent application support for maximizing protection and market advantage</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">Expert patent drafting with strong defensible claims for your innovations</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                            <i className="fas fa-check text-white text-[8px]" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="text-white/80 font-nunito text-xs leading-relaxed">20-year exclusive rights protection with examination response support</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                      Learn More →
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesFaqs = [
    {
      question: "What IP services does IPR Karo provide?",
      answer: "IPR Karo offers comprehensive intellectual property services including trademark registration with AI-powered search, copyright protection for creative works, and patent services for inventions. All services include expert legal guidance and end-to-end support."
    },
    {
      question: "How does the AI-powered trademark search work?",
      answer: "Our AI instantly scans millions of trademark records across databases to find identical and confusingly similar marks. It provides a detailed risk report with similarity scores, conflict analysis, and recommendations to help you decide whether to proceed with registration or modify your brand."
    },
    {
      question: "Can I get all IP services in one place?",
      answer: "Yes! IPR Karo is your one-stop solution for all intellectual property needs. From trademark registration to copyright filing and patent applications, we handle everything online with expert legal support, making IP protection simple and accessible."
    },
    {
      question: "What is the typical timeline for each service?",
      answer: "Trademark registration typically takes 12-18 months, copyright registration takes 4-6 months, and patent registration takes 3-5 years. However, our AI-powered search and expert guidance help minimize delays by identifying potential issues early in the process."
    },
    {
      question: "Do you provide support after registration?",
      answer: "Absolutely! We offer comprehensive post-registration support including trademark renewals, opposition handling, infringement monitoring, licensing assistance, and legal defense. Our 24/7 AI-powered monitoring keeps your intellectual property protected continuously."
    }
  ];

  // Schema markup for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": servicesFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <ServicesHeroSection />
      <SimplePlans />
      
      {/* FAQ Section */}
      <section className="py-[57.6px] relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
          <div className="absolute bottom-0 right-0 w-[69.12px] h-[69.12px] rounded-full blur-[2.16rem]" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
        </div>

        <div className="mx-4 lg:mx-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left Section - Questions */}
            <div className="space-y-[28.8px] flex flex-col justify-start">
              <div className="space-y-[18px]">
                <h2 className="text-white text-left font-nunito text-[23.4px] md:text-[36px] font-medium leading-[28.8px] md:leading-[39.6px] w-full">
                  Have Question?
                  <br />
                  <span style={{ color: '#FFB703' }}>
                    We've Got Answers.
                  </span>
                </h2>

                <p className="text-white font-nunito text-[10.8px] md:text-[12.6px] lg:text-[13.5px] xl:text-[14.4px] font-medium">
                  Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
                </p>
              </div>

              {/* AI Input */}
              <form onSubmit={(e) => { e.preventDefault(); console.log('AI Question submitted'); }} className="relative">
                <div className="relative bg-white/50 backdrop-blur-sm border border-purple-400/30 rounded-[10.8px] p-[14.4px] max-w-lg">
                  <input
                    type="text"
                    placeholder="Smart AI, Ask me Anything...."
                    className="bg-transparent text-white placeholder-white outline-none text-[14.4px]"
                  />
                  <button
                    type="submit"
                    className="absolute right-[14.4px] top-1/2 transform -translate-y-1/2 transition-colors"
                    style={{ color: '#FFB703' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section - FAQ Items */}
            <div
              className="space-y-[14.4px] p-[21.6px]"
              style={{
                borderRadius: '14.4px',
                background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
                boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
                backdropFilter: 'blur(87.876px)'
              }}
            >
              {servicesFaqs.map((faq, index) => (
                <div key={index} className="relative">
                  <div
                    className="p-[18px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                    style={{
                      borderRadius: '10.8px',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      ...(openFaq === index ? { boxShadow: `0 0 0 1.44px #FFB70380` } : {})
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center mb-[10.8px]">
                      <h3 className="text-white font-nunito text-[13.5px] md:text-[16.2px] lg:text-[19.8px] font-semibold pr-[14.4px] leading-snug">
                        {faq.question}
                      </h3>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-[18px] h-[18px] transition-all duration-500 ease-in-out flex-shrink-0 ${
                          openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        }`}
                        style={{ color: '#000000' }}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? 'max-h-[345.6px] opacity-100 mt-0' : 'max-h-0 opacity-0 -mt-[14.4px]'
                      }`}
                    >
                      <div className="mt-[14.4px] pt-[14.4px] border-t border-black/20 transform transition-all duration-500 ease-in-out">
                        <p className="text-white font-nunito text-[10.8px] md:text-[11.7px] lg:text-[12.6px] xl:text-[13.5px] font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
