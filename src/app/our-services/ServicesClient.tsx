'use client';

import { SimplePricing, FaqSection } from "@/components";
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMicrochip, faChartLine, faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SearchClient = dynamic(() => import('@/components/SearchClient'));
import ServicesContentExpanded from './ServicesContentExpanded';
import { ReviewSnippets, BuiltToProtect, SmarterDecisions } from '@/components';

// Create a Services Hero Component similar to HeroSection
function ServicesHeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full relative overflow-hidden flex flex-col justify-center items-center pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
      
      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Our Services Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h1 
            className={`text-[#0C002B] font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Our <span className="text-[#1952C7]">Services</span>
          </h1>
          <p 
            className={`text-[#6B7280] font-sans text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Comprehensive intellectual property solutions powered by AI and backed by expert legal guidance. From trademarks to patents, we protect what matters most to your business.
          </p>
        </div>

        {/* Search Bar */}
        <div 
          className={`w-full flex justify-center mb-16 md:mb-20 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isDropdownOpen ? 'z-[110]' : ''}`}
        >
          <div className="w-full max-w-2xl">
            <SearchClient onDropdownToggle={setIsDropdownOpen} />
          </div>
        </div>

        {/* Stat Cards - Above Services */}
        <div className={`w-full mb-12 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Stat Card 1 */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center text-[#1952C7]">
                <FontAwesomeIcon icon={faMicrochip} className="text-xl" />
              </div>
              <p className="text-[#0C002B] font-sans text-sm font-semibold leading-snug">
                AI-Powered Analysis in 60 Seconds
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center text-[#009B7C]">
                <FontAwesomeIcon icon={faChartLine} className="text-xl" />
              </div>
              <p className="text-[#0C002B] font-sans text-sm font-semibold leading-snug">
                10,000+ Trademarks Checked
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-orange-50 flex items-center justify-center text-[#FFB703]">
                <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
              </div>
              <p className="text-[#0C002B] font-sans text-sm font-semibold leading-snug">
                95% Success Rate for AI-Names
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCardsSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Service 1 - Trademark Registration */}
          <Link href="/our-services/trademark-registration" className="h-full">
            <div
              className="h-full p-6 lg:p-8 flex flex-col rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className="text-[#0C002B] font-sans text-xl lg:text-2xl font-bold mb-2">
                  Trademark Registration
                </h3>
                <div className="w-12 h-1 bg-[#1952C7] rounded-full"></div>
              </div>
              
              <div className="flex-grow space-y-6">
                <p className="text-[#6B7280] font-sans text-sm leading-relaxed">
                  Register your trademark online starting with our AI trademark search. Review your report and file instantly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">AI-powered trademark search for instant conflict detection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">Step-by-step guided application and online filing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">Maximum registerability with AI-backed reports</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-[#1952C7] font-semibold group-hover:text-[#FFB703] transition-colors">
                <span>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-sm transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Service 2 - Copyright Protection */}
          <Link href="/our-services/copyright-registration" className="h-full">
            <div
              className="h-full p-6 lg:p-8 flex flex-col rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className="text-[#0C002B] font-sans text-xl lg:text-2xl font-bold mb-2">
                  Copyright Protection
                </h3>
                <div className="w-12 h-1 bg-[#8A38F5] rounded-full"></div>
              </div>
              
              <div className="flex-grow space-y-6">
                <p className="text-[#6B7280] font-sans text-sm leading-relaxed">
                  Secure your creative works digitally with AI copyright search and a seamless online application process.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">Registration for digital content and artistic works</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">AI search for originality and infringement checks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">Lifetime protection plus 60 years for your assets</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-[#1952C7] font-semibold group-hover:text-[#FFB703] transition-colors">
                <span>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-sm transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Service 3 - Patent Services */}
          <Link href="/our-services/patent-registration" className="h-full">
            <div
              className="h-full p-6 lg:p-8 flex flex-col rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className="text-[#0C002B] font-sans text-xl lg:text-2xl font-bold mb-2">
                  Patent Services
                </h3>
                <div className="w-12 h-1 bg-[#FFB703] rounded-full"></div>
              </div>
              
              <div className="flex-grow space-y-6">
                <p className="text-[#6B7280] font-sans text-sm leading-relaxed">
                  Protect your inventions with AI-optimized patent search and quick filing to stay ahead of the competition.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">AI-powered novelty search and risk analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">Expert patent drafting with defensible claims</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009B7C] mt-1 text-sm" />
                    <span className="text-[#0C002B]/80 font-sans text-sm leading-snug">20-year exclusive rights protection for inventions</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-[#1952C7] font-semibold group-hover:text-[#FFB703] transition-colors">
                <span>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-sm transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesClient() {
  const servicesFaqs = [
    {
      question: "What IP services does IPR Karo provide?",
      answer: "IPR Karo offers comprehensive intellectual property services including trademark registration with AI-powered search, copyright protection for creative works, and patent services for inventions. All services include expert legal guidance and end-to-end support."
    },
    {
      question: "How does the AI-powered trademark search work?",
      answer: "Our AI instantly scans millions of trademark records across databases to find identical and confusingly similar marks. It provides a detailed risk report with similarity scores, conflict analysis, and recommendations."
    },
    {
      question: "Can I get all IP services in one place?",
      answer: "Yes! IPR Karo is your one-stop solution for all intellectual property needs. From trademark registration to copyright filing and patent applications, we handle everything online with expert legal support."
    },
    {
      question: "What is the typical timeline for each service?",
      answer: "Trademark registration typically takes 12-18 months, copyright registration takes 4-6 months, and patent registration takes 3-5 years. However, our AI-powered search helps minimize delays by identifying issues early."
    },
    {
      question: "Do you provide support after registration?",
      answer: "Absolutely! We offer comprehensive post-registration support including trademark renewals, opposition handling, infringement monitoring, licensing assistance, and legal defense."
    }
  ];

  return (
    <div className="home-page-font bg-white">
      <ServicesHeroSection />
      <ServiceCardsSection />
      
      <div className="w-full bg-white flex flex-col pt-10">
        <ServicesContentExpanded />
        <SimplePricing />

        <SmarterDecisions />
        <BuiltToProtect />
        <ReviewSnippets />
        <FaqSection items={servicesFaqs} />
      </div>
    </div>
  );
}
