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

          {/* Three Service Containers */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {/* Service 1 - Trademark Registration */}
              <div
                className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105"
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
                <div className="pt-6 text-left">
                  <p className="text-white font-nunito text-sm leading-relaxed">
                    <span className="font-semibold">How can I register a trademark online with AI?</span><br />
                    Use our AI-powered trademark search to instantly check name availability, assess risks, and get fast filing support. Easily register your trademark online and safeguard your brand’s identity with expert guidance every step of the way.
                  </p>
                </div>
                <Link href="/services/trademark-registration">
                <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                    Learn More →
                  </span>
                </p>
                </Link>
              </div>

              {/* Service 2 - Copyright Protection */}
              <div
                className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105"
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
                <div className="pt-6 text-left">
                  <p className="text-white font-nunito text-sm leading-relaxed">
                    <span className="font-semibold">How does copyright protection work at IPR Karo?</span><br />
                    Secure your art, music, software, and content through fast online copyright registration. Our platform and legal experts ensure full control and ownership rights, using AI to detect infringement and keep your creations protected.
                  </p>
                </div>
                <Link href="/services/copyright-protection">
                <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                    Learn More →
                  </span>
                </p>
                </Link>
              </div>

              {/* Service 3 - Patent Services */}
              <div
                className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105"
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
                <div className="pt-6 text-left">
                  <p className="text-white font-nunito text-sm leading-relaxed">
                    <span className="font-semibold">How do I get patent protection for my invention?</span><br />
                    From filing to legal action, our patent services leverage AI for prior art search and efficient patent drafting. Get step-by-step support to defend your unique ideas, technologies, and maintain your competitive edge.
                  </p>
                </div>
                <Link href="/services/patent-services">
                <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                    Learn More →
                  </span>
                </p>
                </Link>
              </div>
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
      <section className="py-20 relative overflow-hidden -mt-3" style={{ backgroundColor: '#0C002B' }}>
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
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Section - Questions */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-white text-left font-nunito text-lg md:text-xl lg:text-2xl font-medium leading-tight w-full">
                  Frequently Asked Questions
                  <br />
                  <span style={{ color: '#FFB703' }}>
                    About Our Services
                  </span>
                </h2>

                <p className="text-white font-nunito text-xs md:text-xs lg:text-sm font-medium">
                  Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
                </p>
              </div>

              {/* AI Input */}
              <form onSubmit={(e) => { e.preventDefault(); console.log('AI Question submitted'); }}>
                <div className="relative bg-black/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
                  <input
                    type="text"
                    placeholder="Ask about our services...."
                    className="w-full bg-transparent text-white placeholder-purple-300 outline-none text-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors"
                    style={{ color: '#FFB703' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section - FAQ Items */}
            <div className="space-y-4">
              {servicesFaqs.map((faq, index) => (
                <div key={index} className="relative">
                  <div
                    className="p-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                    style={{
                      borderRadius: '15px',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      ...(openFaq === index ? { boxShadow: `0 0 0 2px #FFB70380` } : {})
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-nunito text-sm md:text-base lg:text-lg font-semibold pr-4">
                        Q{index + 1}. {faq.question}
                      </h3>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-5 h-5 transition-all duration-500 ease-in-out flex-shrink-0 ${
                          openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        }`}
                        style={{ color: '#000000' }}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 -mt-4'
                      }`}
                    >
                      <div className="pt-4 border-t border-black/20 transform transition-all duration-500 ease-in-out">
                        <p className="text-white font-nunito text-xs md:text-xs lg:text-sm font-medium leading-relaxed">
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
