'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ClientLogoSlider from '@/components/ClientLogoSlider';
import AboutBento from '@/components/AboutBento';

export default function AboutClient() {
  // State for mobile card interactions
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [aiQuestion, setAiQuestion] = useState('');
  const [searchResult, setSearchResult] = useState<{question: string, answer: string} | null>(null);
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
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130),rgb(91, 88, 88))',
        backgroundSize: '100% 100%',
        backgroundPosition: '10% 20%',
        backgroundRepeat: 'no-repeat',
        marginTop: '-100px',
        paddingTop: '100px'
      }}
    >
      {/* Global styles for yellow hover effect */}
      <style jsx global>{`
        .icon-hover-yellow {
          filter: grayscale(0%);
          transition: all 0.5s ease;
        }
        .group:hover .icon-hover-yellow {
          filter: brightness(0) saturate(100%) invert(64%) sepia(77%) saturate(458%) hue-rotate(1deg) brightness(98%) contrast(92%);
        }
      `}</style>
      
      {/* SVG Filter for yellow color transformation */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="yellow-filter">
            <feColorMatrix
              type="matrix"
              values="2.2 0.8 0 0 0
                      0.8 2.2 0 0 0
                      0 0 0.2 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
      {/* Heading Section - Just below navbar */}
      <div className="w-full px-6 sm:px-12 lg:px-24 pt-32 pb-4">
        <div className="text-center space-y-4">
          {/* Main Heading */}
          <h1
            className="font-bold text-center"
            style={{
              color: '#FFF',
              fontFamily: 'Nunito',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.2',
              fontSize: 'clamp(22px, 3vw, 67px)' /* Scaled down 30% from 32px, 48px, 72px, 96px */
            }}
          >
            About IPR Karo
          </h1>

          {/* Subtitle with special styling for AI */}
          <h2 className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-center">
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(90deg, #069A81 0%, #1345C3 10.1%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Nunito',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '1.2',
                fontSize: 'clamp(13px, 2vw, 24px)' /* Scaled down 30% from 18px, 24px, 32px, 35px */
              }}
            >
              AI
            </span>
            <span
              className="font-semibold"
              style={{
                color: '#FFF',
                fontFamily: 'Nunito',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '1.2',
                fontSize: 'clamp(13px, 2vw, 24px)' /* Scaled down 30% from 18px, 24px, 32px, 35px */
              }}
            >
              Driven Platform for Fast, Accurate Trademark
            </span>
            <span
              className="font-medium"
              style={{
                color: '#FFF',
                fontFamily: 'Nunito',
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: '1.2',
                fontSize: 'clamp(13px, 2vw, 24px)' /* Scaled down 30% from 18px, 24px, 32px, 35px */
              }}
            >
              Registration in India
            </span>
          </h2>
        </div>
      </div>


      {/* About Bento Section */}
      <div className="hidden md:block">
      <AboutBento />

      </div>

      {/* IPR KARO Section - Under Bento */}
      <div className="w-full px-6 sm:px-12 lg:px-24 -mt-20 mt-1 sm:mt-15">
        {/* Mobile Layout - IPR KARO vertical on left, content on right */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-center gap-4">
            {/* Vertical IPR Karo Text - Left Side for Mobile */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                style={{
                  writingMode: 'vertical-lr',
                  textOrientation: 'mixed',
                  color: '#FFB703',
                  fontFamily: 'Nunito',
                  fontSize: '24px',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  letterSpacing: '2px',
                  transform: 'rotate(180deg)'
                }}
              >
                IPR KARO
              </div>
            </div>

            {/* Right Content - Mobile */}
            <div className="flex-1 max-w-2xl space-y-4">
              <h3
                className="text-xl sm:text-2xl font-semibold"
                style={{
                  color: '#FFF',
                  fontFamily: 'Nunito',
                  fontWeight: 600,
                  lineHeight: '1.3'
                }}
              >
                Advanced AI-Powered Trademark Search
              </h3>

              <p
                className="text-base sm:text-lg"
                style={{
                  color: '#FFF',
                  fontFamily: 'Nunito',
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

        {/* Desktop Layout - Keep original */}
        <div className="hidden lg:flex items-center justify-center gap-4">
          {/* Vertical IPR Karo Text - Flipped */}
          <div className="flex flex-col items-center">
            <div 
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'mixed',
                color: '#FFB703',
                fontFamily: 'Nunito',
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
            <h3
              className="text-xl sm:text-2xl font-semibold"
              style={{
                color: '#FFF',
                fontFamily: 'Nunito',
                fontWeight: 600,
                lineHeight: '1.3'
              }}
            >
              Advanced AI-Powered Trademark Search
            </h3>
            
            <p
              className="text-base sm:text-lg"
              style={{
                color: '#FFF',
                fontFamily: 'Nunito',
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
      <div className="w-full py-16">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold"
            style={{
              color: '#FFF',
              fontFamily: 'Nunito',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            Our Clients
          </h2>
        </div>
        
        {/* Mobile: Client Logos Slider */}
        <div className="block lg:hidden">
          <ClientLogoSlider useWhiteLogos={true} />
        </div>

        {/* Desktop: Client Logos Grid - 2x5 */}
        <div className="hidden lg:block">
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-20 w-fit">
            {[1, 2, 3, 4, 5, 6, 7, 8, 13, 14].map((logoNumber) => (
            <div
              key={logoNumber}
              className="flex items-center justify-center rounded-lg"
              style={{
                display: 'flex',
                width: '200px',
                height: '200px',
                padding: '0 25px',
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: '1/1',
                borderRadius: '15px',
                background: 'linear-gradient(145deg, rgba(12, 0, 43, 0.20) 6.6%, rgba(255, 183, 3, 0.20) 120.24%), rgba(0, 0, 0, 0.20)',
                boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.10) inset'
              }}
            >
              <Image
                src={`/clientlogos/white${logoNumber}.png`}
                alt={`Client Logo ${logoNumber}`}
                width={100}
                height={100}
                className="max-w-full h-auto object-contain opacity-90"
              />
            </div>
          ))}
          </div>
        </div>
        </div>
      </div>

      {/* Our Story Timeline Section */}
      <div className="w-full md:py-8 relative -mt-10 md:mt-0">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold"
            style={{
              color: '#FFF',
              fontFamily: 'Nunito',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            Our Story
          </h2>
        </div>
        
        {/* Decorative "Our" Text - Left Side - Desktop Only */}
        <div
          className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 -rotate-90 -translate-x-25"
          style={{
            left: '0',
            fontSize: '200px',
            fontFamily: 'Nunito',
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1px #FFB703',
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
          className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 -rotate-90 translate-x-35"
          style={{
            right: '0',
            fontSize: '200px',
            fontFamily: 'Nunito',
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1px #FFB703',
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
        <div className="hidden lg:block max-w-6xl mx-auto relative" ref={timelineDesktopRef}>

          {/* Vertical Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-2"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3))',
              borderRadius: '2px'
            }}
          />

          {/* Purple Progress Line - Fills up on scroll */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-2"
            style={{
              height: `${timelineProgress}%`,
              background: 'linear-gradient(to bottom, #8A38F5, #a855f7)',
              borderRadius: '2px',
              boxShadow: '0 0 10px rgba(138, 56, 245, 0.6)',
              willChange: 'height'
            }}
          />

          {/* Timeline Items - Desktop Original Layout */}
          <div className="space-y-16">
            {/* Timeline Item 1 - Left Year, Right Heading & Description */}
            <div>
                <div className="relative flex items-start">
                  {/* Year (Left) */}
                  <div className="w-1/2 pr-8 text-right pt-2">
                    <h3
                      style={{
                        color: '#FFB703',
                        fontFamily: 'Nunito',
                        fontSize: '28px',
                        fontWeight: 700
                      }}
                    >
                      2019
                    </h3>
                  </div>

                  {/* White Dot */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 mt-2"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                    }}
                  />

                  {/* Heading & Description (Right) */}
                  <div className="w-1/2 pl-8">
                    <h4
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '20px',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      The Foundation
                    </h4>
                  <p
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                    IPR Karo began with a mission: to simplify and democratize trademark registration for businesses of all sizes in India. We focused on making it easy for anyone to understand how to register a trademark and get expert help online.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - Right Year, Left Heading & Description */}
            <div>
                <div className="relative flex items-start">
                  {/* Heading & Description (Left) */}
                  <div className="w-1/2 pr-8 text-right">
                    <h4
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '20px',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      AI Revolution
                    </h4>
                  <p
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                    We launched India's first AI-powered trademark search, instantly scanning millions of trademarks for similarity and conflicts. This breakthrough helped users quickly check if their brand name is available, receive an AI-powered risk report, and improve their chances to register a trademark successfully.
                  </p>
                  </div>

                  {/* White Dot */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 mt-2"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                    }}
                  />

                  {/* Year (Right) */}
                  <div className="w-1/2 pl-8 pt-2">
                    <h3
                      style={{
                        color: '#FFB703',
                        fontFamily: 'Nunito',
                        fontSize: '28px',
                        fontWeight: 700
                      }}
                    >
                      2020
                    </h3>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 - Left Year, Right Heading & Description */}
            <div>
                <div className="relative flex items-start">
                  {/* Year (Left) */}
                  <div className="w-1/2 pr-8 text-right pt-2">
                    <h3
                      style={{
                        color: '#FFB703',
                        fontFamily: 'Nunito',
                        fontSize: '28px',
                        fontWeight: 700
                      }}
                    >
                      2021
                    </h3>
                  </div>

                  {/* White Dot */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 mt-2"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                    }}
                  />

                  {/* Heading & Description (Right) */}
                  <div className="w-1/2 pl-8">
                    <h4
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '20px',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      Trust & Growth
                    </h4>
                  <p
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                    With over 5,000 trademark registrations, IPR Karo became known for reliable, AI-driven brand protection. Our platform delivered accurate legal results, faster registration, and ongoing trademark monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 - Right Year, Left Heading & Description */}
            <div>
                <div className="relative flex items-start">
                  {/* Heading & Description (Left) */}
                  <div className="w-1/2 pr-8 text-right">
                    <h4
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '20px',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      Service Expansion
                    </h4>
                  <p
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                    Today, IPR Karo is India's leading online partner for trademark registration. Startups and enterprises rely on our AI search reports, expert legal support, and full-service brand protection, making how to register a trademark in India easier than ever.
                  </p>
                  </div>

                  {/* White Dot */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 mt-2"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                    }}
                  />

                  {/* Year (Right) */}
                  <div className="w-1/2 pl-8 pt-2">
                    <h3
                      style={{
                        color: '#FFB703',
                        fontFamily: 'Nunito',
                        fontSize: '28px',
                        fontWeight: 700
                      }}
                    >
                      2021 to Present
                    </h3>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Timeline Section */}
        <div className="block lg:hidden">
          <div className="max-w-4xl mx-auto relative" ref={timelineMobileRef}>
            {/* Decorative "Our Story" Text - Right Side for Mobile */}
           

            {/* Vertical Line - Left Side for Mobile */}
            <div
              className="absolute left-7.5 top-0 bottom-0 w-2"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3))',
                borderRadius: '2px'
              }}
            />
            
            {/* Purple Progress Line - Fills up on scroll */}
            <div
              className="absolute left-7.5 top-0 w-2"
              style={{
                height: `${timelineProgress}%`,
                background: 'linear-gradient(to bottom, #8A38F5, #a855f7)',
                borderRadius: '2px',
                boxShadow: '0 0 10px rgba(138, 56, 245, 0.6)',
                willChange: 'height'
              }}
            />

            {/* Timeline Items - Mobile Layout */}
            <div className="space-y-16 relative">
              {/* Timeline Item 1 - Year and Content on Right for Mobile */}
              <div>
                  <div className="relative flex items-start">
                    {/* White Dot - Left for Mobile */}
                    <div
                      className="absolute left-5.5 w-6 h-6 rounded-full border-2 -mt-2"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                      }}
                    />

                    {/* Year - Right for Mobile */}
                    <div className="w-full pl-16">
                      <div className="flex items-center gap-4 mb-4">
                        <h3
                          className="text-xl sm:text-2xl font-bold"
                          style={{
                            color: '#FFB703',
                            fontFamily: 'Nunito',
                            fontWeight: 700
                          }}
                        >
                          2019
                        </h3>
                      </div>

                      {/* Heading & Description */}
                      <div>
                        <h4
                          className="text-lg sm:text-xl font-semibold mb-2"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 600
                          }}
                        >
                          The Foundation
                        </h4>
                      <p
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                        IPR Karo began with a mission: to simplify and democratize trademark registration for businesses of all sizes in India. We focused on making it easy for anyone to understand how to register a trademark and get expert help online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - Year and Content on Right for Mobile */}
              <div>
                  <div className="relative flex items-start">
                    {/* White Dot - Left for Mobile */}
                    <div
                      className="absolute left-5.5 w-6 h-6 rounded-full border-2 -mt-2"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                      }}
                    />

                    {/* Year - Right for Mobile */}
                    <div className="w-full pl-16">
                      <div className="flex items-center gap-4 mb-4">
                        <h3
                          className="text-xl sm:text-2xl font-bold"
                          style={{
                            color: '#FFB703',
                            fontFamily: 'Nunito',
                            fontWeight: 700
                          }}
                        >
                          2020
                        </h3>
                      </div>

                      {/* Heading & Description */}
                      <div>
                        <h4
                          className="text-lg sm:text-xl font-semibold mb-2"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 600
                          }}
                        >
                          AI Revolution
                        </h4>
                      <p
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                        We launched India's first AI-powered trademark search, instantly scanning millions of trademarks for similarity and conflicts. This breakthrough helped users quickly check if their brand name is available, receive an AI-powered risk report, and improve their chances to register a trademark successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 - Year and Content on Right for Mobile */}
              <div>
                  <div className="relative flex items-start">
                    {/* White Dot - Left for Mobile */}
                    <div
                      className="absolute left-5.5 w-6 h-6 rounded-full border-2 -mt-2"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                      }}
                    />

                    {/* Year - Right for Mobile */}
                    <div className="w-full pl-16">
                      <div className="flex items-center gap-4 mb-4">
                        <h3
                          className="text-xl sm:text-2xl font-bold"
                          style={{
                            color: '#FFB703',
                            fontFamily: 'Nunito',
                            fontWeight: 700
                          }}
                        >
                          2021
                        </h3>
                      </div>

                      {/* Heading & Description */}
                      <div>
                        <h4
                          className="text-lg sm:text-xl font-semibold mb-2"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 600
                          }}
                        >
                          Trust & Growth
                        </h4>
                      <p
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                        With over 5,000 trademark registrations, IPR Karo became known for reliable, AI-driven brand protection. Our platform delivered accurate legal results, faster registration, and ongoing trademark monitoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative "Our Story" Text - Vertically positioned at right end of screen */}
              <div
                className="absolute -right-95 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center"
                style={{
                  fontSize: '200px',
                  fontFamily: 'Nunito',
                  fontWeight: 700,
                  color: 'transparent',
                  WebkitTextStroke: '1px #FFB703',
                  letterSpacing: '1px',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                Our Story
              </div>

              {/* Timeline Item 4 - Year and Content on Right for Mobile */}
              <div>
                  <div className="relative flex items-start">
                    {/* White Dot - Left for Mobile */}
                    <div
                      className="absolute left-5.5 w-6 h-6 rounded-full border-2 -mt-2"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
                      }}
                    />

                    {/* Year - Right for Mobile */}
                    <div className="w-full pl-16">
                      <div className="flex items-center gap-4 mb-4">
                        <h3
                          className="text-xl sm:text-2xl font-bold"
                          style={{
                            color: '#FFB703',
                            fontFamily: 'Nunito',
                            fontWeight: 700
                          }}
                        >
                          2021 to Present
                        </h3>
                      </div>

                      {/* Heading & Description */}
                      <div>
                        <h4
                          className="text-lg sm:text-xl font-semibold mb-2"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 600
                          }}
                        >
                          Service Expansion
                        </h4>
                      <p
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                        Today, IPR Karo is India's leading online partner for trademark registration. Startups and enterprises rely on our AI search reports, expert legal support, and full-service brand protection, making how to register a trademark in India easier than ever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What makes IPR Karo Different Section */}
      <div className="w-full py-[60px] mt-[30px] px-20">
        <div className="text-center mb-[48px] px-[18px] sm:px-[36px] lg:px-[72px]">
          <h2
            className="text-[18px] sm:text-[30px] lg:text-[31.5px] font-bold mb-[12px]"
            style={{
              color: '#FFF',
              fontFamily: 'Nunito',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            What makes IPR Karo Different
          </h2>
          <p 
            className="text-[12px] sm:text-[13.5px] max-w-3xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'Nunito',
              fontWeight: 400,
              lineHeight: '1.6'
            }}
          >
            Experience the perfect blend of AI technology and expert guidance for comprehensive trademark protection
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full">
          {/* Main Grid - Full width layout */}
          <div className="flex flex-col gap-[18px] lg:gap-[24px] px-[18px] sm:px-[36px] lg:px-[72px]">
            {/* Mobile Layout - Professional Card Design */}
            <div className="block lg:hidden space-y-[18px]">
              {/* Card 1 - AI-Powered Trademark Search */}
              <div
                className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                  border: '1px solid rgba(255, 183, 3, 0.2)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3), inset 0 0 18px rgba(255, 255, 255, 0.05)'
                }}
                onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              >
                {/* Content */}
                <div className="relative z-10 p-[24px]">
                  <h3 className="text-[15px] font-bold mb-[9px] text-white" style={{fontFamily: 'Nunito', fontWeight: 700}}>
                    AI-Powered Trademark Search
                  </h3>
                  <p className="text-[10.5px] mb-[18px]" style={{color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'Nunito', lineHeight: '1.6'}}>
                    Instantly scan millions of records. Our AI-powered search report finds identical and confusingly similar marks so you can decide whether to register or tweak your brand.
                  </p>
                  
                  {/* Icon Container */}
                  <div className="flex justify-center mt-[12px]">
                    <Image
                      src="/figmacomp/searchabout.svg"
                      alt="Search Icon"
                      width={210}
                      height={60}
                      className={`w-full max-w-[210px] h-auto object-contain transition-all duration-500 ${
                        activeCard === 1 ? 'opacity-100 scale-110 brightness-[1.2] saturate-[1.5] hue-rotate-[-15deg]' : 'opacity-60'
                      }`}
                      style={{
                        filter: activeCard === 1 ? 'brightness(1.2) saturate(1.5) hue-rotate(-15deg)' : 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Card 2 - Expert-Led Guidance */}
              <div
                className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                  border: '1px solid rgba(255, 183, 3, 0.2)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3), inset 0 0 18px rgba(255, 255, 255, 0.05)'
                }}
                onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
              >
                {/* Icon - top right */}
                <div className="absolute top-0 right-0">
                  <Image
                    src="/figmacomp/expert-guidance.svg"
                    alt="Expert Guidance Icon"
                    width={75}
                    height={105}
                    className="w-auto h-24 object-contain icon-hover-yellow opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-[24px]">
                  <h3 className="text-[15px] font-bold mb-[9px] text-white" style={{fontFamily: 'Nunito', fontWeight: 700}}>
                    Expert-Led Guidance
                  </h3>
                  <p className="text-[10.5px] max-w-[180px]" style={{color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'Nunito', lineHeight: '1.6'}}>
                    Certified IP lawyers review your AI report, advise on registrability, and prepare filing documents. Clear legal answers with no jargon.
                  </p>
                </div>
              </div>

              {/* Card 3 - Fast Processing */}
              <div
                className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                  border: '1px solid rgba(255, 183, 3, 0.2)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3), inset 0 0 18px rgba(255, 255, 255, 0.05)'
                }}
                onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
              >
                {/* Icon - top right */}
                <div className="absolute top-0 right-0">
                  <Image
                    src="/figmacomp/fast-processing.svg"
                    alt="Fast Processing Icon"
                    width={75}
                    height={135}
                    className="w-auto h-30 object-contain icon-hover-yellow opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-[24px]">
                  <h3 className="text-[15px] font-bold mb-[9px] text-white" style={{fontFamily: 'Nunito', fontWeight: 700}}>
                    Fast Processing
                  </h3>
                  <p className="text-[10.5px] max-w-[180px]" style={{color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'Nunito', lineHeight: '1.6'}}>
                    Optimised workflows cut filing time to get search results within minutes and an expert review within 24 to 48 hours.
                  </p>
                </div>
              </div>

              {/* Card 4 - Affordable & Transparent Pricing */}
              <div
                className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                  border: '1px solid rgba(255, 183, 3, 0.2)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3), inset 0 0 18px rgba(255, 255, 255, 0.05)'
                }}
                onClick={() => setActiveCard(activeCard === 4 ? null : 4)}
              >
                {/* Icon - bottom right */}
                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/figmacomp/affordable-pricing.svg"
                    alt="Affordable Pricing Icon"
                    width={120}
                    height={90}
                    className="w-auto h-21 object-contain icon-hover-yellow opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-[24px]">
                  <h3 className="text-[15px] font-bold mb-[9px] text-white" style={{fontFamily: 'Nunito', fontWeight: 700}}>
                    Affordable & Transparent Pricing
                  </h3>
                  <p className="text-[10.5px] max-w-[180px]" style={{color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'Nunito', lineHeight: '1.6'}}>
                    No hidden fees. Choose a plan that fits your needs (search report, filing, or full legal package) with one-page invoices that explain every cost.
                  </p>
                </div>
              </div>

              {/* Card 5 - End-to-End Support */}
              <div
                className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                  border: '1px solid rgba(255, 183, 3, 0.2)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3), inset 0 0 18px rgba(255, 255, 255, 0.05)'
                }}
                onClick={() => setActiveCard(activeCard === 5 ? null : 5)}
              >
                {/* Content */}
                <div className="relative z-10 p-[24px]">
                  <h3 className="text-[15px] font-bold mb-[9px] text-white" style={{fontFamily: 'Nunito', fontWeight: 700}}>
                    End-to-End Support
                  </h3>
                  <p className="text-[10.5px] mb-[18px]" style={{color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'Nunito', lineHeight: '1.6'}}>
                    From search to filing to post-registration monitoring, we handle filings, replies, and renewals so your brand stays protected.
                  </p>

                  {/* Process List */}
                  <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-[12px] transition-all duration-500 ${
                    activeCard === 5 ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
                  }`}>
                    <div className="text-[9px] font-semibold mb-[9px] text-yellow-400" style={{fontFamily: 'Nunito'}}>Complete Process:</div>
                    <ul className="space-y-[6px] text-[9px]">
                      <li className="flex items-start">
                        <span className="w-[6px] h-[6px] bg-yellow-400 rounded-full mt-1 mr-[6px] flex-shrink-0"></span>
                        <span style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>AI-powered trademark search & analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-[6px] h-[6px] bg-yellow-400 rounded-full mt-1 mr-[6px] flex-shrink-0"></span>
                        <span style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>Expert legal review & consultation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-[6px] h-[6px] bg-yellow-400 rounded-full mt-1 mr-[6px] flex-shrink-0"></span>
                        <span style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>Complete filing & documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-[6px] h-[6px] bg-yellow-400 rounded-full mt-1 mr-[6px] flex-shrink-0"></span>
                        <span style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>Post-registration monitoring & renewals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Layout - Professional Grid Design */}
            <div className="hidden lg:flex flex-row gap-[24px]">
              {/* Left Section - 2x2 Grid for Cards 1-4 */}
              <div className="flex-1 grid grid-cols-2 gap-[24px]">
                {/* Card 1 - AI-Powered Trademark Search */}
                <div
                  className="relative text-center h-60 flex flex-col group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                    border: '1px solid rgba(255, 183, 3, 0.2)',
                    boxShadow: '0 9px 36px rgba(0, 0, 0, 0.4), inset 0 0 24px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Content */}
                  <div className="z-10 p-[24px] flex-1 flex flex-col">
                    <h3
                      className="text-[22px] font-bold mb-[12px]"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}
                    >
                      AI-Powered Trademark Search
                    </h3>
                    <p
                      className="text-[13px] px-[12px] mb-[18px]"
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontFamily: 'Nunito',
                        fontWeight: 400,
                        lineHeight: '1.6'
                      }}
                    >
                      Instantly scan millions of records. Our AI-powered search report finds identical and confusingly similar marks.
                    </p>
                    
                    {/* Icon Container */}
                    <div className="flex justify-center mt-auto">
                      <Image
                        src="/figmacomp/searchabout.svg"
                        alt="Search Icon"
                        width={262}
                        height={75}
                        className="w-full max-w-[225px] h-auto object-contain icon-hover-yellow group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 - Expert-Led Guidance */}
                <div
                  className="relative h-60 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                    border: '1px solid rgba(255, 183, 3, 0.2)',
                    boxShadow: '0 9px 36px rgba(0, 0, 0, 0.4), inset 0 0 24px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Icon - top right */}
                  <div className="absolute top-0 right-0 z-10">
                    <Image
                      src="/figmacomp/expert-guidance.svg"
                      alt="Expert Guidance Icon"
                      width={90}
                      height={135}
                      className="w-auto h-33 object-contain icon-hover-yellow opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-[24px]">
                    <h3
                      className="text-[22px] font-bold mb-[9px]"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}
                    >
                      Expert-Led Guidance
                    </h3>
                    <p
                      className="text-[13px] max-w-[150px]"
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontFamily: 'Nunito',
                        fontWeight: 400,
                        lineHeight: '1.6'
                      }}
                    >
                      Certified IP lawyers review your AI report, advise on registrability, and prepare filing documents. Clear legal answers with no jargon.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Fast Processing */}
                <div
                  className="relative h-60 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                    border: '1px solid rgba(255, 183, 3, 0.2)',
                    boxShadow: '0 9px 36px rgba(0, 0, 0, 0.4), inset 0 0 24px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Icon - top right */}
                  <div className="absolute top-0 right-0 z-10">
                    <Image
                      src="/figmacomp/fast-processing.svg"
                      alt="Fast Processing Icon"
                      width={90}
                      height={180}
                      className="w-auto h-36 object-contain icon-hover-yellow opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-[24px]">
                    <h3
                      className="text-[22px] font-bold mb-[9px]"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}
                    >
                      Fast Processing
                    </h3>
                    <p
                      className="text-[13px] max-w-[150px]"
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontFamily: 'Nunito',
                        fontWeight: 400,
                        lineHeight: '1.6'
                      }}
                    >
                      Optimised workflows cut filing time to get search results within minutes and an expert review within 24 to 48 hours.
                    </p>
                  </div>
                </div>

                {/* Card 4 - Affordable & Transparent Pricing */}
                <div
                  className="relative h-60 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(12, 0, 43, 0.4) 100%)',
                    border: '1px solid rgba(255, 183, 3, 0.2)',
                    boxShadow: '0 9px 36px rgba(0, 0, 0, 0.4), inset 0 0 24px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Icon - bottom right */}
                  <div className="absolute bottom-0 right-0 z-10">
                    <Image
                      src="/figmacomp/affordable-pricing.svg"
                      alt="Affordable Pricing Icon"
                      width={150}
                      height={112}
                      className="w-auto h-27 object-contain icon-hover-yellow opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-[24px]">
                    <h3
                      className="text-[22px] font-bold mb-[9px]"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}
                    >
                      Affordable & Transparent Pricing
                    </h3>
                    <p
                        className="text-[13px] max-w-[150px]"
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontFamily: 'Nunito',
                        fontWeight: 400,
                        lineHeight: '1.6'
                      }}
                    >
                      No hidden fees. Choose a plan that fits your needs (search report, filing, or full legal package) with one-page invoices that explain every cost.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Card 5 (End-to-End Support) */}
              <div className="w-72 flex-shrink-0">
                <div
                  className="relative h-[31.125rem] group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(12, 0, 43, 0.5) 100%)',
                    border: '1px solid rgba(255, 183, 3, 0.3)',
                    boxShadow: '0 9px 36px rgba(0, 0, 0, 0.4), inset 0 0 24px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Main content */}
                  <div className="relative z-20 p-[24px] h-full flex flex-col">
                    <h3
                      className="text-[22px] font-bold mb-[12px] text-center"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}
                    >
                      End-to-End Support
                    </h3>
                    <p
                      className="text-[13px] mb-[24px] text-center"
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontFamily: 'Nunito',
                        fontWeight: 400,
                        lineHeight: '1.6'
                      }}
                    >
                      From search to filing to post-registration monitoring, we handle filings, replies, and renewals so your brand stays protected.
                    </p>

                    {/* Process Steps - Always Visible */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-[18px] flex-1 flex flex-col justify-center">
                      <div className="text-[12px] font-bold mb-[18px] text-yellow-400 text-center" style={{fontFamily: 'Nunito'}}>Complete Process</div>
                      <ul className="space-y-[12px]">
                        <li className="flex items-start group/item">
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mt-0.5 mr-[9px] flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <span className="text-white font-bold text-[10.5px]" style={{fontFamily: 'Nunito'}}>1</span>
                          </div>
                          <span className="text-[10.5px] leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>AI-powered trademark search & analysis</span>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mt-0.5 mr-[9px] flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <span className="text-white font-bold text-[10.5px]" style={{fontFamily: 'Nunito'}}>2</span>
                          </div>
                          <span className="text-[10.5px] leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>Expert legal review & consultation</span>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mt-0.5 mr-[9px] flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <span className="text-white font-bold text-[10.5px]" style={{fontFamily: 'Nunito'}}>3</span>
                          </div>
                          <span className="text-[10.5px] leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>Complete filing & documentation</span>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mt-0.5 mr-[9px] flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <span className="text-white font-bold text-[10.5px]" style={{fontFamily: 'Nunito'}}>4</span>
                          </div>
                          <span className="text-[10.5px] leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>Post-registration monitoring & renewals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Trust & Proof line */}
          <div className="w-full text-center mt-[36px] px-[18px]">
            <div 
              className="inline-flex items-center gap-[9px] px-[24px] py-[12px] rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.1) 0%, rgba(12, 0, 43, 0.3) 100%)',
                border: '1px solid rgba(255, 183, 3, 0.2)',
                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              <span className="text-[10.5px] font-medium" style={{color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Nunito'}}>
                Trusted by 5,000+ entrepreneurs and startups with official filings, attorney review, and secure document handling.
              </span>
            </div>
          </div>
        </div>
      </div>

        {/* FAQ Section */}
        <div className="py-[57.6px] relative overflow-hidden w-full">
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
              <form onSubmit={handleAiSubmit} className="relative">
                <div className="relative bg-white/50 backdrop-blur-sm border border-purple-400/30 rounded-[10.8px] p-[14.4px] max-w-lg">
                  <input
                    type="text"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="Smart AI, Ask me Anything...."
                    className="bg-transparent text-white placeholder-white outline-none text-[14.4px] w-full"
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

              {/* Search Result Display */}
              {searchResult && (
                <div 
                  key={searchResult.question}
                  className="p-[18px] rounded-[10.8px] max-w-lg animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
                    boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
                    backdropFilter: 'blur(87.876px)'
                  }}
                >
                  <div className="flex justify-between items-start mb-[10.8px]">
                    <h4 className="text-white font-nunito text-[14.4px] md:text-[16.2px] font-semibold leading-snug" style={{ color: '#FFB703' }}>
                      {searchResult.question}
                    </h4>
                    <button
                      onClick={() => setSearchResult(null)}
                      className="text-white hover:text-gray-300 transition-colors ml-[10.8px] flex-shrink-0"
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="w-[14.4px] h-[14.4px] rotate-180" />
                    </button>
                  </div>
                  <p className="text-white font-nunito text-[12.6px] md:text-[13.5px] font-medium leading-relaxed">
                    {searchResult.answer}
                  </p>
                </div>
              )}

              {/* No Match Message */}
              {showNoMatch && (
                <div 
                  className="p-[18px] rounded-[10.8px] max-w-lg animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
                    boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
                    backdropFilter: 'blur(87.876px)'
                  }}
                >
                  <div className="flex justify-between items-start">
                    <p className="text-white font-nunito text-[13.5px] md:text-[14.4px] font-medium leading-relaxed">
                      We're experiencing high traffic at the moment. Please try your search again in a few moments, or browse our FAQ section for answers.
                    </p>
                    <button
                      onClick={() => setShowNoMatch(false)}
                      className="text-white hover:text-gray-300 transition-colors ml-[10.8px] flex-shrink-0"
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="w-[14.4px] h-[14.4px] rotate-180" />
                    </button>
                  </div>
                </div>
              )}
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
              {aboutFaqs.map((faq, index) => (
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
      </div>
    </div>
  );
}

