'use client';


import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane, faCheck, faTimes, faBolt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import ClientLogoSlider from '@/components/ClientLogoSlider';
import AboutHeroHealthScoreVisual from '@/components/about/AboutHeroHealthScoreVisual';
import AboutContentExpanded from './AboutContentExpanded';
import { motion } from 'framer-motion';
import { imageDimensions } from '@/utils/imageDimensions';

export default function AboutClient() {
  // State for mobile card interactions
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [aiQuestion, setAiQuestion] = useState('');
  const [searchResult, setSearchResult] = useState<{ question: string, answer: string } | null>(null);
  const [showNoMatch, setShowNoMatch] = useState(false);
  const timelineDesktopRef = useRef<HTMLDivElement>(null);
  const timelineMobileRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Handle scroll progress for timeline - smooth pixel by pixel
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return; // Throttle using requestAnimationFrame

      rafId = requestAnimationFrame(() => {
        // Determine which timeline is visible (desktop or mobile)
        const timelineRef = window.innerWidth >= 1024 ? timelineDesktopRef : timelineMobileRef;

        if (!timelineRef.current) {
          rafId = null;
          return;
        }

        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineTop = rect.top + window.scrollY;
        const timelineHeight = rect.height;

        // Start filling when the timeline section enters the viewport (top of timeline hits bottom of viewport)
        // End filling when the timeline section is about to leave the viewport
        const fillStart = timelineTop - windowHeight + 200; // Start when timeline is just visible
        const fillEnd = timelineTop + timelineHeight - 200; // End near the bottom of timeline

        const currentScroll = window.scrollY;

        let progress = 0;

        if (currentScroll >= fillStart && currentScroll <= fillEnd) {
          // Calculate smooth pixel-by-pixel progress
          const scrolledIntoSection = currentScroll - fillStart;
          const totalScrollDistance = fillEnd - fillStart;
          progress = (scrolledIntoSection / totalScrollDistance) * 100;
        } else if (currentScroll > fillEnd) {
          progress = 100;
        } else {
          progress = 0; // Before the timeline section
        }

        // Clamp between 0 and 100
        progress = Math.min(Math.max(progress, 0), 100);

        setTimelineProgress(progress);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true }); // Handle screen resize
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const aboutFaqs = [
    {
      question: "What is IPR Karo and how did it start?",
      answer: "IPR Karo was founded in 2019 with a mission to simplify and democratize trademark registration for businesses of all sizes in India. We launched India's first AI-powered trademark search in 2020, making it easy for anyone to understand how to register a trademark and get expert help online."
    },
    {
      question: "What makes IPR Karo different from traditional IP firms?",
      answer: "IPR Karo combines cutting-edge AI technology with expert legal guidance. Our AI instantly scans millions of trademarks, provides clear risk reports, and delivers results within minutes. We offer transparent pricing, 24/7 accessibility, and end-to-end support from search to registration to monitoring."
    },
    {
      question: "How many trademark registrations has IPR Karo completed?",
      answer: "IPR Karo has successfully completed over 5,000 trademark registrations since our inception. We've become India's leading online partner for trademark registration, trusted by startups and enterprises alike for AI-driven brand protection."
    },
    {
      question: "Is IPR Karo available across all of India?",
      answer: "Yes, IPR Karo provides 100% online trademark registration services across all states and union territories in India. You can access our AI-powered search, expert legal support, and filing services from anywhere in the country."
    },
    {
      question: "What services does IPR Karo offer?",
      answer: "IPR Karo offers comprehensive IP protection services including AI-powered trademark search and registration, copyright protection for creative works, patent services for inventions, ongoing brand monitoring, and legal support for objections and renewals."
    }
  ];

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiQuestion.trim()) {
      setSearchResult(null);
      setShowNoMatch(false);

      const query = aiQuestion.toLowerCase().trim();

      const scoredFaqs = aboutFaqs.map(faq => {
        const questionLower = faq.question.toLowerCase();
        const answerLower = faq.answer.toLowerCase();
        let score = 0;

        const queryWords = query.split(' ').filter(word => word.length > 2);

        queryWords.forEach(word => {
          if (questionLower.includes(query)) {
            score += 100;
          }
          if (questionLower.includes(word)) {
            score += 10;
          }
          if (answerLower.includes(word)) {
            score += 3;
          }
        });

        return { faq, score };
      });

      const bestMatch = scoredFaqs.reduce((best, current) =>
        current.score > best.score ? current : best
      );

      setTimeout(() => {
        if (bestMatch.score > 0) {
          setSearchResult(bestMatch.faq);
          setShowNoMatch(false);
        } else {
          setSearchResult(null);
          setShowNoMatch(true);
        }
      }, 50);

      setAiQuestion('');
    }
  };

  return (
    <div className="home-page-font min-h-screen relative overflow-x-hidden bg-white">
      {/* Soft Ambient Radial Glow at Top Center matching the light theme */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] max-w-full h-[450px] pointer-events-none -z-0 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 10%, rgba(186, 230, 253, 0.45), rgba(219, 234, 254, 0.35) 40%, rgba(255, 255, 255, 0) 80%)'
        }}
      />

      {/* Heading Section - Just below navbar */}
      <div className="w-full px-6 sm:px-12 lg:px-24 pt-32 pb-4 relative z-10">
        <div className="text-center space-y-4">
          {/* Main Heading */}
          <h1
            className="font-bold text-center"
            style={{
              color: '#0C002B',
              fontFamily: 'Aileron',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.2',
              fontSize: 'clamp(28px, 4vw, 56px)'
            }}
          >
            About IPR Karo
          </h1>

          {/* Subtitle with special styling for AI */}
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-center">
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(90deg, #069A81 0%, #1345C3 10.1%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Aileron',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '1.2',
                fontSize: 'clamp(14px, 2vw, 22px)'
              }}
            >
              AI
            </span>
            <span
              className="font-semibold"
              style={{
                color: '#0C002B',
                fontFamily: 'Aileron',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '1.2',
                fontSize: 'clamp(14px, 2vw, 22px)'
              }}
            >
              Driven Platform for Fast, Accurate Trademark
            </span>
            <span
              className="font-medium"
              style={{
                color: '#0C002B',
                fontFamily: 'Aileron',
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: '1.2',
                fontSize: 'clamp(14px, 2vw, 22px)'
              }}
            >
              Registration in India
            </span>
          </div>
        </div>
      </div>


      {/* Hero Visual Section: Trademark Health Score with Bottom Gradient Fade (Desktop Only) */}
      <div className="hidden md:block w-full relative z-10 my-4 sm:my-8">
        <AboutHeroHealthScoreVisual />
      </div>

      {/* IPR KARO Section - Under Hero Visual */}
      <div className="w-full px-6 sm:px-12 lg:px-24 py-7 sm:py-12">
        {/* Mobile Layout - Content only (IPR KARO vertical text hidden on mobile) */}
        <div className="block lg:hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div
              className="text-xl sm:text-2xl font-semibold"
              style={{
                color: '#0C002B',
                fontFamily: 'Aileron',
                fontWeight: 600,
                lineHeight: '1.3'
              }}
            >
              Advanced AI-Powered Trademark Search
            </div>

            <p
              className="text-base sm:text-lg"
              style={{
                color: '#0C002B',
                fontFamily: 'Aileron',
                fontWeight: 400,
                lineHeight: '1.6',
                opacity: 0.9
              }}
            >
              IPR Karo uses cutting-edge AI to scan millions of trademarks instantly, providing clear risk reports and similarity analyses. Our platform guides you step-by-step with smart filing recommendations, making online trademark registration fast, safe, and hassle-free.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Keep original */}
        <div className="hidden lg:flex items-center justify-center gap-4 mt-0">
          {/* Vertical IPR Karo Text - Flipped */}
          <div className="flex flex-col items-center">
            <div
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'mixed',
                color: '#1952C7',
                fontFamily: 'Aileron',
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '1.2',
                letterSpacing: '2px',
                transform: 'rotate(180deg)'
              }}
            >
              IPR KARO
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-3xl space-y-6">
            <div
              className="text-xl sm:text-2xl font-semibold"
              style={{
                color: '#0C002B',
                fontFamily: 'Aileron',
                fontWeight: 600,
                lineHeight: '1.3'
              }}
            >
              Advanced AI-Powered Trademark Search
            </div>

            <p
              className="text-base sm:text-lg"
              style={{
                color: '#0C002B',
                fontFamily: 'Aileron',
                fontWeight: 400,
                lineHeight: '1.6',
                opacity: 0.9
              }}
            >
              IPR Karo uses cutting-edge AI to scan millions of trademarks instantly, providing clear risk reports and similarity analyses. Our platform guides you step-by-step with smart filing recommendations, making online trademark registration fast, safe, and hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="w-full py-7 sm:py-12 bg-white">
        <div className="text-center mb-6 sm:mb-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold"
            style={{
              color: '#0C002B',
              fontFamily: 'Aileron',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            Our Clients
          </h2>
        </div>

        {/* Mobile: Client Logos Slider */}
        <div className="block lg:hidden">
          <ClientLogoSlider useWhiteLogos={false} />
        </div>

        {/* Desktop: Client Logos Carousel */}
        <div className="hidden lg:block w-full overflow-hidden">
          <div className="flex relative overflow-hidden">
            {/* Gradient Masks for smooth fade effect */}
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            <motion.div
              className="flex gap-12 py-4"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{
                width: "fit-content",
              }}
            >
              {[
                ...[1, 2, 4, 5, 6, 7, 8, 13, 14].map(n => `/clientlogos/${n}.png`),
                '/partner1.jpeg',
                '/partner2.jpeg',
                // Duplicate for infinite loop
                ...[1, 2, 4, 5, 6, 7, 8, 13, 14].map(n => `/clientlogos/${n}.png`),
                '/partner1.jpeg',
                '/partner2.jpeg'
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{
                    display: 'flex',
                    width: '140px',
                    height: '140px',
                    padding: '0 20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    aspectRatio: '1/1',
                    borderRadius: '15px',
                    background: '#FFFFFF',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index}`}
                    width={imageDimensions[logo]?.width || 100}
                    height={imageDimensions[logo]?.height || 100}
                    className="max-w-full h-auto object-contain opacity-90"
                    style={{
                      imageRendering: 'crisp-edges',
                      WebkitFontSmoothing: 'antialiased',
                      width: '70px',
                      height: '70px'
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Timeline Section */}
      <div className="w-full py-7 sm:py-12 relative bg-white">
        <div className="text-center mb-6 sm:mb-10 px-4">
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold"
            style={{
              color: '#0C002B',
              fontFamily: 'Aileron',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            Our Story: From Inception to Ecosystem
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            How a commitment to democratizing Indian intellectual property transformed into a national LegalTech engine.
          </p>
        </div>

        {/* Decorative "Our" Text - Left Side - Desktop Only */}
        <div
          className="hidden xl:block absolute top-1/2 transform -translate-y-1/2 -rotate-90 -translate-x-28"
          style={{
            left: '0',
            fontSize: '180px',
            fontFamily: 'Aileron',
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(12, 0, 43, 0.08)',
            letterSpacing: '2px',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 1,
            margin: 0,
            padding: 0
          }}
        >
          Our
        </div>

        {/* Decorative "Story" Text - Right Side - Desktop Only */}
        <div
          className="hidden xl:block absolute top-1/2 transform -translate-y-1/2 -rotate-90 translate-x-32"
          style={{
            right: '0',
            fontSize: '180px',
            fontFamily: 'Aileron',
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(12, 0, 43, 0.08)',
            letterSpacing: '2px',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 1,
            margin: 0,
            padding: 0
          }}
        >
          Story
        </div>

        {/* Desktop Timeline Section */}
        <div className="hidden lg:block max-w-5xl mx-auto relative px-6" ref={timelineDesktopRef}>

          {/* Vertical Track Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5"
            style={{
              background: 'linear-gradient(to bottom, rgba(12, 0, 43, 0.05), rgba(12, 0, 43, 0.1), rgba(12, 0, 43, 0.05))',
              borderRadius: '2px'
            }}
          />

          {/* Blue Dynamic Progress Line - Fills up on scroll */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1.5"
            style={{
              height: `${timelineProgress}%`,
              background: 'linear-gradient(to bottom, #1345C3, #1952C7)',
              borderRadius: '2px',
              boxShadow: '0 0 12px rgba(25, 82, 199, 0.45)',
              willChange: 'height'
            }}
          />

          {/* Timeline Items - Desktop Pictographic Cards */}
          <div className="space-y-20">

            {/* Timeline Item 1 - 2019 */}
            <div className="relative flex items-center">
              {/* Year (Left) */}
              <div className="w-1/2 pr-12 text-right">
                <span className="text-xs font-bold text-[#1952C7] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                  PHASE 01 • INCEPTION
                </span>
                <h3 className="text-3xl font-extrabold text-[#0C002B] mt-1" style={{ fontFamily: 'Aileron' }}>
                  2019
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Foundation & LegalTech Blueprint</p>
              </div>

              {/* Pulsing Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full border-4 border-white bg-[#1952C7] shadow-[0_0_12px_rgba(25,82,199,0.35)] z-10" />

              {/* Card (Right) */}
              <div className="w-1/2 pl-12">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <h4 className="text-xl font-bold text-[#0C002B] mb-2" style={{ fontFamily: 'Aileron' }}>
                    The Foundation: Democratizing IP
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    IPR Karo began with an urgent mission: to eliminate traditional legal opacity and simplify trademark registration for India's growing startup generation.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[11px] font-semibold bg-slate-50 text-[#1952C7] px-2.5 py-1 rounded-lg border border-gray-100">🛡️ 100% Online Vision</span>
                    <span className="text-[11px] font-semibold bg-slate-50 text-gray-700 px-2.5 py-1 rounded-lg border border-gray-100">⚡ Zero Hidden Jargon</span>
                    <span className="text-[11px] font-semibold bg-slate-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-gray-100">🇮🇳 PAN-India Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - 2020 */}
            <div className="relative flex items-center">
              {/* Card (Left) */}
              <div className="w-1/2 pr-12 text-right">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 text-left">
                  <h4 className="text-xl font-bold text-[#0C002B] mb-2" style={{ fontFamily: 'Aileron' }}>
                    The AI Revolution: India's 1st Engine
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    We developed and launched India's first proprietary AI-powered trademark search, scanning millions of registered and pending records to detect phonetic, visual, and semantic conflicts in seconds.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[11px] font-semibold bg-blue-50 text-[#1952C7] px-2.5 py-1 rounded-lg border border-blue-100">🧠 10M+ Database</span>
                    <span className="text-[11px] font-semibold bg-slate-50 text-gray-700 px-2.5 py-1 rounded-lg border border-gray-100">⏱️ &lt; 3s Scan Speed</span>
                    <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100">🔍 Phonetic AI Matching</span>
                  </div>
                </div>
              </div>

              {/* Pulsing Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full border-4 border-white bg-[#1952C7] shadow-[0_0_12px_rgba(25,82,199,0.35)] z-10" />

              {/* Year (Right) */}
              <div className="w-1/2 pl-12">
                <span className="text-xs font-bold text-[#1952C7] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                  PHASE 02 • TECH BREAKTHROUGH
                </span>
                <h3 className="text-3xl font-extrabold text-[#0C002B] mt-1" style={{ fontFamily: 'Aileron' }}>
                  2020
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Proprietary NLP & Similarity Algorithms</p>
              </div>
            </div>

            {/* Timeline Item 3 - 2021 */}
            <div className="relative flex items-center">
              {/* Year (Left) */}
              <div className="w-1/2 pr-12 text-right">
                <span className="text-xs font-bold text-[#1952C7] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                  PHASE 03 • NATIONAL SCALE
                </span>
                <h3 className="text-3xl font-extrabold text-[#0C002B] mt-1" style={{ fontFamily: 'Aileron' }}>
                  2021
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Trust Milestone & Enterprise Adoption</p>
              </div>

              {/* Pulsing Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full border-4 border-white bg-[#1952C7] shadow-[0_0_12px_rgba(25,82,199,0.35)] z-10" />

              {/* Card (Right) */}
              <div className="w-1/2 pl-12">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <h4 className="text-xl font-bold text-[#0C002B] mb-2" style={{ fontFamily: 'Aileron' }}>
                    Scale & Trust: 5,000+ Filings Secured
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Crossing 5,000 successful registrations, IPR Karo became a household brand for Indian startups, MSMEs, and digital creators seeking guaranteed, attorney-backed defense.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100">🏆 5,000+ Filings</span>
                    <span className="text-[11px] font-semibold bg-slate-50 text-[#1952C7] px-2.5 py-1 rounded-lg border border-gray-100">📈 94.5% Approval Rate</span>
                    <span className="text-[11px] font-semibold bg-slate-50 text-gray-700 px-2.5 py-1 rounded-lg border border-gray-100">🏛️ 28 States & 8 UTs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 - 2025 to Present */}
            <div className="relative flex items-center">
              {/* Card (Left) */}
              <div className="w-1/2 pr-12 text-right">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 text-left">
                  <h4 className="text-xl font-bold text-[#0C002B] mb-2" style={{ fontFamily: 'Aileron' }}>
                    360° Brand Protection Ecosystem
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Today, IPR Karo offers end-to-end protection: instant CGPDTM e-filing within 24 hours, Madrid Protocol cross-border filings across 130+ nations, and 24/7 automated Trademark Journal Watchdogs.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[11px] font-semibold bg-blue-50 text-[#1952C7] px-2.5 py-1 rounded-lg border border-blue-100">🌐 Madrid Protocol (130+ Countries)</span>
                    <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100">🤖 24/7 Journal Watchdog</span>
                    <span className="text-[11px] font-semibold bg-slate-50 text-gray-700 px-2.5 py-1 rounded-lg border border-gray-100">⚡ 24h E-Filing Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Pulsing Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full border-4 border-white bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.45)] z-10" />

              {/* Year (Right) */}
              <div className="w-1/2 pl-12">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  PHASE 04 • ENTERPRISE ECOSYSTEM
                </span>
                <h3 className="text-3xl font-extrabold text-[#0C002B] mt-1" style={{ fontFamily: 'Aileron' }}>
                  2025 to Present
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Full-Lifecycle Global Brand Defense</p>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Timeline Section */}
        <div className="block lg:hidden px-4">
          <div className="max-w-2xl mx-auto relative pl-8" ref={timelineMobileRef}>
            {/* Vertical Track Line */}
            <div
              className="absolute left-3 top-0 bottom-0 w-1"
              style={{
                background: 'linear-gradient(to bottom, rgba(12, 0, 43, 0.05), rgba(12, 0, 43, 0.1), rgba(12, 0, 43, 0.05))'
              }}
            />

            {/* Blue Progress Line */}
            <div
              className="absolute left-3 top-0 w-1"
              style={{
                height: `${timelineProgress}%`,
                background: 'linear-gradient(to bottom, #1345C3, #1952C7)',
                willChange: 'height'
              }}
            />

            <div className="space-y-10 relative">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute -left-[27px] top-1.5 w-5 h-5 rounded-full border-3 border-white bg-[#1952C7] shadow-sm z-10" />
                <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xl font-bold text-[#1952C7]">2019</span>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">INCEPTION</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0C002B] mb-2">The Foundation: Democratizing IP</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    IPR Karo began with a mission: to eliminate traditional legal opacity and make online trademark registration fast and accessible for all.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    <span className="px-2 py-0.5 bg-slate-50 text-[#1952C7] rounded border border-gray-100">100% Online</span>
                    <span className="px-2 py-0.5 bg-slate-50 text-gray-600 rounded border border-gray-100">Zero Jargon</span>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-[27px] top-1.5 w-5 h-5 rounded-full border-3 border-white bg-[#1952C7] shadow-sm z-10" />
                <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xl font-bold text-[#1952C7]">2020</span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">AI LAUNCH</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0C002B] mb-2">The AI Revolution</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    We launched India's first AI-powered trademark search, scanning millions of marks in seconds for phonetic and semantic similarity.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    <span className="px-2 py-0.5 bg-blue-50 text-[#1952C7] rounded border border-blue-100">10M+ Database</span>
                    <span className="px-2 py-0.5 bg-slate-50 text-gray-600 rounded border border-gray-100">&lt;3s Scan</span>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute -left-[27px] top-1.5 w-5 h-5 rounded-full border-3 border-white bg-[#1952C7] shadow-sm z-10" />
                <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xl font-bold text-[#1952C7]">2021</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">5,000+ MARKS</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0C002B] mb-2">National Scale & Trust</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Trusted across 28 states and union territories, achieving a 94.5% success rate for startups and enterprises alike.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100">94.5% Success</span>
                    <span className="px-2 py-0.5 bg-slate-50 text-gray-600 rounded border border-gray-100">PAN-India</span>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <div className="absolute -left-[27px] top-1.5 w-5 h-5 rounded-full border-3 border-white bg-emerald-500 shadow-sm z-10" />
                <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xl font-bold text-emerald-600">Present</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">ECOSYSTEM</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0C002B] mb-2">360° Brand Protection</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    From 24h e-filing to Madrid Protocol international filings and 24/7 Trademark Journal Watchdogs.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    <span className="px-2 py-0.5 bg-blue-50 text-[#1952C7] rounded border border-blue-100">130+ Countries</span>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100">Journal Watchdog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What makes IPR Karo Different Section */}
      <div className="w-full py-7 sm:py-12 px-4 sm:px-8 lg:px-20 bg-slate-50/50">
        <div className="text-center mb-6 sm:mb-10 max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold mb-3"
            style={{
              color: '#0C002B',
              fontFamily: 'Aileron',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            What Makes IPR Karo Different
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            See how our AI-powered legal infrastructure outclasses traditional, manual trademark processing across every critical metric.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PICTOGRAPHIC COMPARISON MATRIX: TRADITIONAL VS IPR KARO                    */}
        {/* ========================================================================= */}
        <div className="max-w-5xl mx-auto mb-0">
          <div className="w-full overflow-x-auto rounded-2xl border border-gray-200/80 bg-white shadow-sm">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-12 bg-slate-100/80 py-4 px-6 border-b border-gray-200 text-xs sm:text-sm font-bold text-[#0C002B]">
                <div className="col-span-4">Evaluation Metric</div>
                <div className="col-span-4 text-gray-500">Traditional Law Firm 🏛️</div>
                <div className="col-span-4 text-[#1952C7] font-extrabold flex items-center gap-1.5">
                  <span>IPR Karo AI Platform</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                {[
                  {
                    metric: "Clearance Search Speed",
                    traditional: "3 to 7 Days (Manual Query)",
                    iprkaro: "Instant < 3 Seconds (10M+ Database Scan)",
                    positive: true
                  },
                  {
                    metric: "Conflict Detection Depth",
                    traditional: "Exact Word Match Only",
                    iprkaro: "Phonetic + Visual + Semantic AI Algorithm",
                    positive: true
                  },
                  {
                    metric: "Attorney Verification",
                    traditional: "Expensive hourly billing (₹15,000+)",
                    iprkaro: "Senior Certified IP Attorney Included in Fee",
                    positive: true
                  },
                  {
                    metric: "Government E-Filing Turnaround",
                    traditional: "2 to 3 Weeks Delay",
                    iprkaro: "Guaranteed Form TM-A Filed in 24 Hours",
                    positive: true
                  },
                  {
                    metric: "Post-Filing Watchdog Defense",
                    traditional: "None (You only find out when sued)",
                    iprkaro: "Automated 24/7 Trademark Journal Watchdog",
                    positive: true
                  },
                  {
                    metric: "Pricing & Invoicing Transparency",
                    traditional: "Hidden surcharges & unexpected legal bills",
                    iprkaro: "100% Flat Transparent Pricing with No Hidden Fees",
                    positive: true
                  }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 py-4 px-6 items-center hover:bg-blue-50/30 transition-colors">
                    <div className="col-span-4 font-bold text-[#0C002B] pr-2">
                      {row.metric}
                    </div>
                    <div className="col-span-4 text-gray-500 flex items-center gap-1.5 pr-2">
                      <FontAwesomeIcon icon={faTimes} className="text-red-400 text-xs flex-shrink-0" />
                      <span>{row.traditional}</span>
                    </div>
                    <div className="col-span-4 font-bold text-[#1952C7] flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faCheck} className="text-emerald-500 text-xs flex-shrink-0" />
                      <span>{row.iprkaro}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutContentExpanded />

      {/* FAQ Section */}
      <div className="pt-7 sm:pt-12 pb-12 sm:pb-20 relative overflow-hidden w-full bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #0C002B05, transparent)' }}></div>
        </div>

        <div className="mx-4 lg:mx-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

            {/* Left Section - Questions */}
            <div className="space-y-[20px] sm:space-y-[28.8px] flex flex-col justify-start">
              <div className="space-y-[12px] sm:space-y-[18px]">
                <h2 className="text-[#0C002B] text-center lg:text-left font-sans text-[23.4px] md:text-[36px] font-bold leading-[28.8px] md:leading-[39.6px] w-full">
                  Have Question?
                  <br />
                  <span className="text-[#1952C7]">
                    We've Got Answers.
                  </span>
                </h2>

                <p className="text-gray-500 text-center lg:text-left font-sans text-[11px] md:text-[12.6px] lg:text-[13.5px] xl:text-[14.4px] font-medium">
                  Still have questions? <span className="text-[#1952C7] font-bold">Contact us</span> anytime.
                </p>
              </div>

              {/* AI Input */}
              <form onSubmit={handleAiSubmit} className="relative max-w-lg mx-auto lg:mx-0 w-full">
                <div className="relative bg-slate-50 border border-gray-100 rounded-[10.8px] p-[14.4px] max-w-lg shadow-sm">
                  <input
                    type="text"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="Ask our AI anything about IPR..."
                    className="bg-transparent text-[#0C002B] placeholder-gray-400 outline-none text-[14.4px] w-full font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-[14.4px] top-1/2 transform -translate-y-1/2 transition-colors text-[#1952C7] hover:text-[#1345C3]"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </form>

              {/* Search Result Display */}
              {searchResult && (
                <div
                  key={searchResult.question}
                  className="p-[18px] rounded-[10.8px] max-w-lg animate-fade-in-up bg-white border border-gray-100 shadow-lg"
                >
                  <div className="flex justify-between items-start mb-[10.8px]">
                    <h3 className="text-[#1952C7] font-sans text-[14.4px] md:text-[16.2px] font-bold leading-snug">
                      {searchResult.question}
                    </h3>
                    <button
                      onClick={() => setSearchResult(null)}
                      className="text-gray-400 hover:text-[#0C002B] transition-colors ml-[10.8px] flex-shrink-0"
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="w-[14.4px] h-[14.4px] rotate-180" />
                    </button>
                  </div>
                  <p className="text-[#0C002B] font-sans text-[12.6px] md:text-[13.5px] font-medium leading-relaxed opacity-90">
                    {searchResult.answer}
                  </p>
                </div>
              )}

              {/* No Match Message */}
              {showNoMatch && (
                <div
                  className="p-[18px] rounded-[10.8px] max-w-lg animate-fade-in-up bg-slate-50 border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <p className="text-[#0C002B] font-sans text-[13.5px] md:text-[14.4px] font-medium leading-relaxed opacity-70">
                      We're experiencing high traffic at the moment. Please try your search again shortly, or browse our FAQ section below.
                    </p>
                    <button
                      onClick={() => setShowNoMatch(false)}
                      className="text-gray-400 hover:text-[#0C002B] transition-colors ml-[10.8px] flex-shrink-0"
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="w-[14.4px] h-[14.4px] rotate-180" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section - FAQ Items */}
            <div
              className="space-y-[14.4px] p-[21.6px] bg-slate-50 border border-gray-100 shadow-sm"
              style={{
                borderRadius: '14.4px',
              }}
            >
              {aboutFaqs.map((faq, index) => (
                <div key={index} className="relative">
                  <div
                    className="p-[18px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md transform border border-transparent"
                    style={{
                      borderRadius: '10.8px',
                      background: openFaq === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                      borderColor: openFaq === index ? '#1952C740' : 'transparent',
                      ...(openFaq === index ? { boxShadow: `0 4px 15px rgba(0, 0, 0, 0.05)` } : {})
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center mb-[10.8px]">
                      <h3 className={`font-sans text-[13.5px] md:text-[16.2px] lg:text-[18px] font-bold pr-[14.4px] leading-snug transition-colors duration-300 ${openFaq === index ? 'text-[#1952C7]' : 'text-[#0C002B]'}`}>
                        {faq.question}
                      </h3>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-[14px] h-[14px] transition-all duration-500 ease-in-out flex-shrink-0 ${openFaq === index ? 'rotate-180 text-[#1952C7]' : 'rotate-0 text-[#0C002B] opacity-50'
                          }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[345.6px] opacity-100 mt-0' : 'max-h-0 opacity-0 -mt-[14.4px]'
                        }`}
                    >
                      <div className="mt-[14.4px] pt-[14.4px] border-t border-gray-100 transform transition-all duration-500 ease-in-out">
                        <p className="text-[#0C002B] font-sans text-[11.7px] md:text-[12.6px] lg:text-[13.5px] font-medium leading-relaxed opacity-80">
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
      </div>
    </div>
  );
}

