'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef } from 'react';
import { Faq } from '@/components';
import ClientLogoSlider from '@/components/ClientLogoSlider';

// Helper function to split text into word spans
const splitTextIntoWords = (text: string) => {
  return text.split(' ').map((word, index) => (
    <span key={index} className="reveal-word">
      {word}{' '}
    </span>
  ));
};

export default function AboutPage() {
  // Refs for scroll-driven animation
  const sectionsRef = useRef<HTMLDivElement>(null);
  const revealSectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    revealSectionsRef.current = Array.from(sections) as HTMLDivElement[];

    let ticking = false;

    const updateScrollProgress = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight;

        revealSectionsRef.current.forEach((section) => {
          const rect = section.getBoundingClientRect();
          
          // Simple approach: calculate progress based on how much the section has entered the viewport
          // Progress = 0 when section is completely below viewport
          // Progress = 1 when section top reaches the top of viewport
          
          const progress = Math.max(0, Math.min(1, 
            (viewportHeight - rect.top) / viewportHeight
          ));
          
          // Update word opacity based on progress
          const wordElements = section.querySelectorAll('.reveal-word');
          wordElements.forEach((wordEl, wordIndex) => {
            const element = wordEl as HTMLElement;
            const totalWords = wordElements.length;
            
            // Map the overall section progress to individual word progress.
            const wordProgressStart = wordIndex / totalWords;
            const wordProgressEnd = (wordIndex + 1) / totalWords;
            
            const wordProgress = Math.max(0, Math.min(1, 
              (progress - wordProgressStart) / (wordProgressEnd - wordProgressStart)
            ));
            
            const opacity = 0.2 + (wordProgress * 0.8);
            element.style.opacity = opacity.toString();
          });
        });

        ticking = false;
      });
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    // Initial call
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);
  return (
    <div
      className="min-h-[90vh] relative overflow-x-hidden"
      style={{
        background: '#0C002B'
      }}
    >
      {/* Heading Section - Just below navbar */}
      <div className="w-full px-6 sm:px-12 lg:px-24 pt-32 pb-8">
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
            style={{
              color: '#FFF',
              fontFamily: 'Nunito',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            About IPR Karo
          </h1>
          
          {/* Subtitle with special styling for AI */}
          <h2 className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-center">
            <span
              className="text-lg sm:text-xl md:text-2xl lg:text-[35px] font-semibold"
              style={{
                background: 'linear-gradient(90deg, #069A81 0%, #1345C3 10.1%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Nunito',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '1.2'
              }}
            >
              AI
            </span>
            <span
              className="text-lg sm:text-xl md:text-2xl lg:text-[35px] font-semibold"
              style={{
                color: '#FFF',
                fontFamily: 'Nunito',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '1.2'
              }}
            >
              Driven Platform for Fast, Accurate Trademark 
            </span>
            <span
              className="text-lg sm:text-xl md:text-2xl lg:text-[35px] font-medium"
              style={{
                color: '#FFF',
                fontFamily: 'Nunito',
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: '1.2'
              }}
            >
              Registration in India
            </span>
          </h2>
        </div>
      </div>


      {/* About Bento SVG Section */}
      <div className="w-full px-6 sm:px-12 lg:px-24 py-8 relative">
        <div className="flex justify-center">
          <Image
            src="/figmacomp/aboutbento.svg"
            alt="About IPR Karo Bento Grid"
            width={1320}
            height={828}
            className="w-full max-w-full h-auto"
          />
        </div>
        
        {/* Blur fade-out at the bottom of SVG */}
        <div 
          className="absolute bottom-8 left-0 right-0 h-16"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* IPR KARO Section - Under Bento */}
      <div className="w-full px-6 sm:px-12 lg:px-24 py-12">
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
                IPR Karo uses cutting-edge AI to scan millions of trademarks instantly, providing clear risk reports and similarity analyses. Our platform guides you step-by-step with smart filing recommendations—making online trademark registration fast, safe, and hassle-free.
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
              IPR Karo uses cutting-edge AI to scan millions of trademarks instantly, providing clear risk reports and similarity analyses. Our platform guides you step-by-step with smart filing recommendations—making online trademark registration fast, safe, and hassle-free.
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
          <ClientLogoSlider />
        </div>

        {/* Desktop: Client Logos Grid - 4x2 */}
        <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((logoNumber) => (
            <div 
              key={logoNumber}
              className="flex items-center justify-center p-4 rounded-lg"
              style={{
                backgroundColor: '#FFF',
                minHeight: '84px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Image
                src={`/clientlogos/${logoNumber}.svg`}
                alt={`Client ${logoNumber}`}
                width={70}
                height={70}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Our Story Timeline Section */}
      <div ref={sectionsRef} className="reveal-container w-full py-16">
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
        
        {/* Desktop Timeline Section */}
        <div className="hidden lg:block max-w-6xl mx-auto relative">
          {/* Decorative "Our" Text - Left Side */}
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90"
            style={{
              left: '-200px',
              fontSize: '200px',
              fontFamily: 'Nunito',
              fontWeight: 700,
              color: 'transparent',
              WebkitTextStroke: '1px #FFB703',
              letterSpacing: '2px',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            Our
          </div>

          {/* Decorative "Story" Text - Right Side */}
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-90"
            style={{
              right: '-250px',
              fontSize: '200px',
              fontFamily: 'Nunito',
              fontWeight: 700,
              color: 'transparent',
              WebkitTextStroke: '1px #FFB703',
              letterSpacing: '2px',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            Story
          </div>

          {/* Vertical Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-2"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3))',
              borderRadius: '2px'
            }}
          />

          {/* Timeline Items - Desktop Original Layout */}
          <div className="space-y-16">
            {/* Timeline Item 1 - Left Year, Right Heading & Description */}
            <div className="reveal-section">
              <div className="reveal-content">
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
                    <div
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                      {splitTextIntoWords('IPR Karo began with a mission: to simplify and democratize trademark registration for businesses of all sizes in India. We focused on making it easy for anyone to understand how to register a trademark and get expert help online.')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - Right Year, Left Heading & Description */}
            <div className="reveal-section">
              <div className="reveal-content">
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
                    <div
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                      {splitTextIntoWords('We launched India\'s first AI-powered trademark search—instantly scanning millions of trademarks for similarity and conflicts. This breakthrough helped users quickly check if their brand name is available, receive an AI-powered risk report, and improve their chances to register a trademark successfully.')}
                    </div>
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
            </div>

            {/* Timeline Item 3 - Left Year, Right Heading & Description */}
            <div className="reveal-section">
              <div className="reveal-content">
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
                    <div
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                      {splitTextIntoWords('With over 5,000 trademark registrations, IPR Karo became known for reliable, AI-driven brand protection. Our platform delivered accurate legal results, faster registration, and ongoing trademark monitoring.')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 - Right Year, Left Heading & Description */}
            <div className="reveal-section">
              <div className="reveal-content">
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
                    <div
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        opacity: 0.9
                      }}
                    >
                      {splitTextIntoWords('Today, IPR Karo is India\'s leading online partner for trademark registration. Startups and enterprises rely on our AI search reports, expert legal support, and full-service brand protection—making how to register a trademark in India easier than ever.')}
                    </div>
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
                      2021–Present
                    </h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Timeline Section */}
        <div className="block lg:hidden">
          <div className="max-w-4xl mx-auto relative">
            {/* Decorative "Our Story" Text - Right Side for Mobile */}
           

            {/* Vertical Line - Left Side for Mobile */}
            <div
              className="absolute left-7.5 top-0 bottom-0 w-2"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3))',
                borderRadius: '2px'
              }}
            />

            {/* Timeline Items - Mobile Layout */}
            <div className="space-y-16 relative">
              {/* Timeline Item 1 - Year and Content on Right for Mobile */}
              <div className="reveal-section">
                <div className="reveal-content">
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
                        <div
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                          {splitTextIntoWords('IPR Karo began with a mission: to simplify and democratize trademark registration for businesses of all sizes in India. We focused on making it easy for anyone to understand how to register a trademark and get expert help online.')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - Year and Content on Right for Mobile */}
              <div className="reveal-section">
                <div className="reveal-content">
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
                        <div
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                          {splitTextIntoWords('We launched India\'s first AI-powered trademark search—instantly scanning millions of trademarks for similarity and conflicts. This breakthrough helped users quickly check if their brand name is available, receive an AI-powered risk report, and improve their chances to register a trademark successfully.')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 - Year and Content on Right for Mobile */}
              <div className="reveal-section">
                <div className="reveal-content">
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
                        <div
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                          {splitTextIntoWords('With over 5,000 trademark registrations, IPR Karo became known for reliable, AI-driven brand protection. Our platform delivered accurate legal results, faster registration, and ongoing trademark monitoring.')}
                        </div>
                      </div>
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
              <div className="reveal-section">
                <div className="reveal-content">
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
                          2021–Present
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
                        <div
                          className="text-sm sm:text-base"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            opacity: 0.9
                          }}
                        >
                          {splitTextIntoWords('Today, IPR Karo is India\'s leading online partner for trademark registration. Startups and enterprises rely on our AI search reports, expert legal support, and full-service brand protection—making how to register a trademark in India easier than ever.')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What makes IPR Karo Different Section */}
      <div className="w-full py-16 px-6 sm:px-12 lg:px-24">
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
            What makes IPR Karo Different
          </h2>
        </div>
        
        {/* Cards Container */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div
              className="p-4 sm:p-6 lg:p-8 text-center h-auto sm:h-80 flex flex-col justify-center items-center space-y-4 sm:space-y-6"
              style={{
                borderRadius: '20px 0 0 0',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Icon with white background */}
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFF' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 27" fill="none">
                  <path d="M15.7233 15.2252C18.9724 11.9761 18.9724 6.69981 15.7233 3.43682C12.4742 0.187726 7.19792 0.187726 3.93494 3.43682C0.685844 6.68592 0.685844 11.9622 3.93494 15.2252C7.18404 18.4743 12.4604 18.4743 15.7233 15.2252Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.0823 15.5859L26.4961 25.9997" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3
                className="text-lg sm:text-xl lg:text-[30px] font-medium"
                style={{
                  color: '#FFF',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '1.2'
                }}
              >
                AI-Powered Speed
              </h3>
              <p
                className="text-sm sm:text-base lg:text-[20px]"
                style={{
                  color: 'rgba(255, 255, 255, 0.80)',
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.4'
                }}
              >
                Our advanced AI technology processes trademark searches in minutes, not days. Get instant conflict analysis and trademark availability reports with 99.7% accuracy.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-4 sm:p-6 lg:p-8 text-center h-auto sm:h-80 flex flex-col justify-center items-center space-y-4 sm:space-y-6"
              style={{
                borderRadius: '20px 0 0 0',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Icon with white background */}
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFF' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 27" fill="none">
                  <path d="M9.45455 12.3636C10.9615 12.3636 12.4066 11.765 13.4722 10.6995C14.5377 9.63392 15.1364 8.18873 15.1364 6.68182C15.1364 5.17491 14.5377 3.72971 13.4722 2.66417C12.4066 1.59862 10.9615 1 9.45455 1C7.94763 1 6.50244 1.59862 5.43689 2.66417C4.37135 3.72971 3.77273 5.17491 3.77273 6.68182C3.77273 8.18873 4.37135 9.63392 5.43689 10.6995C6.50244 11.765 7.94763 12.3636 9.45455 12.3636ZM9.45455 12.3636C11.742 12.3636 13.7409 13.2273 15.1625 14.6625C16.0053 15.517 16.6359 16.5574 17.0034 17.7M9.45455 12.3636C4.90909 12.3636 1.5 15.7727 1.5 20.3182V26H12.8636M14 21.2545L18.7614 24.8636L26.5 14.6364" stroke="black" strokeWidth="2"/>
                </svg>
              </div>

              <h3
                className="text-lg sm:text-xl lg:text-[30px] font-medium"
                style={{
                  color: '#FFF',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '1.2'
                }}
              >
                Transparent Pricing
              </h3>
              <p
                className="text-sm sm:text-base lg:text-[20px]"
                style={{
                  color: 'rgba(255, 255, 255, 0.80)',
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.4'
                }}
              >
                No hidden fees, no surprises. Get upfront pricing with clear breakdown of all costs. Pay only for what you need with our flexible service packages.
              </p>
            </div>

            {/* Card 3 */}
            <div 
              className="p-8 text-center h-80 flex flex-col justify-center items-center space-y-6"
              style={{
                borderRadius: '20px 0 0 0',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Icon with white background */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFF' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
                  <path d="M13.6172 20.3151L16.3763 23.0742C16.648 23.346 16.9707 23.5615 17.3257 23.7086C17.6808 23.8557 18.0613 23.9313 18.4456 23.9313C18.8299 23.9313 19.2105 23.8557 19.5655 23.7086C19.9206 23.5615 20.2432 23.346 20.5149 23.0742C20.7867 22.8025 21.0023 22.4798 21.1493 22.1248C21.2964 21.7697 21.3721 21.3892 21.3721 21.0049C21.3721 20.6206 21.2964 20.24 21.1493 19.885C21.0023 19.5299 20.7867 19.2073 20.5149 18.9355" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.7578 16.1758L21.2067 19.6246C21.7555 20.1735 22.4999 20.4818 23.276 20.4818C24.0522 20.4818 24.7965 20.1735 25.3454 19.6246C25.8942 19.0758 26.2025 18.3315 26.2025 17.5553C26.2025 16.7792 25.8942 16.0348 25.3454 15.486L19.9927 10.1333C19.2167 9.35829 18.1648 8.92297 17.068 8.92297C15.9713 8.92297 14.9194 9.35829 14.1434 10.1333L12.9294 11.3473C12.3806 11.8962 11.6362 12.2045 10.8601 12.2045C10.0839 12.2045 9.33956 11.8962 8.79074 11.3473C8.24192 10.7985 7.93359 10.0542 7.93359 9.27801C7.93359 8.50186 8.24192 7.7575 8.79074 7.20868L12.6673 3.33214C13.9258 2.07694 15.567 1.27737 17.3311 1.05998C19.0951 0.842589 20.8814 1.21981 22.4069 2.13193L23.0553 2.5182C23.6427 2.87273 24.3411 2.99569 25.0143 2.86309L27.4147 2.38025" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M27.4146 1L28.7942 16.1751H26.0351M2.58268 1L1.20312 16.1751L10.1702 25.1422C10.719 25.691 11.4634 25.9993 12.2395 25.9993C13.0157 25.9993 13.7601 25.691 14.3089 25.1422C14.8577 24.5933 15.166 23.849 15.166 23.0728C15.166 22.2967 14.8577 21.5523 14.3089 21.0035M2.58268 2.37955H13.6191" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 
                style={{
                  color: '#FFF',
                  fontFamily: 'Nunito',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '30px'
                }}
              >
                24/7 Support
              </h3>
              <p 
                style={{
                  color: 'rgba(255, 255, 255, 0.80)',
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                Round-the-clock support from our expert team. Get real-time updates, live tracking, and instant assistance whenever you need it.
              </p>
            </div>
          </div>

          {/* Second Row - 2 Cards (bento style - each spans 1.5 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 4 */}
            <div
              className="p-4 sm:p-6 lg:p-8 text-center h-auto sm:h-80 flex flex-col justify-center items-center space-y-4 sm:space-y-6"
              style={{
                borderRadius: '20px 0 0 0',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Icon with white background */}
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFF' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27" fill="none">
                  <path d="M1 13.5C1 15.1415 1.32332 16.767 1.95151 18.2835C2.57969 19.8001 3.50043 21.1781 4.66116 22.3388C5.8219 23.4996 7.19989 24.4203 8.71646 25.0485C10.233 25.6767 11.8585 26 13.5 26C15.1415 26 16.767 25.6767 18.2835 25.0485C19.8001 24.4203 21.1781 23.4996 22.3388 22.3388C23.4996 21.1781 24.4203 19.8001 25.0485 18.2835C25.6767 16.767 26 15.1415 26 13.5C26 10.1848 24.683 7.00537 22.3388 4.66117C19.9946 2.31696 16.8152 1 13.5 1C10.1848 1 7.00537 2.31696 4.66116 4.66117C2.31696 7.00537 1 10.1848 1 13.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.5 6.55469V13.4991L17.6667 17.6658" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3
                className="text-lg sm:text-xl lg:text-[30px] font-medium"
                style={{
                  color: '#FFF',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '1.2'
                }}
              >
                98% Success Rate
              </h3>
              <p
                className="text-sm sm:text-base lg:text-[20px]"
                style={{
                  color: 'rgba(255, 255, 255, 0.80)',
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.4'
                }}
              >
                Industry-leading success rate with over 50,000+ successful trademark registrations. Our expertise ensures your application gets approved.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="p-4 sm:p-6 lg:p-8 text-center h-auto sm:h-80 flex flex-col justify-center items-center space-y-4 sm:space-y-6"
              style={{
                borderRadius: '20px 0 0 0',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Icon with white background */}
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFF' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 27" fill="none">
                  <path d="M2.72443 19.1816L32.2699 19.1816C32.8975 19.1816 33.4062 18.6729 33.4062 18.0453V2.13619C33.4062 1.50859 32.8975 0.999823 32.2699 0.999823L2.72443 0.999823C2.09684 0.999823 1.58807 1.50859 1.58807 2.13619L1.58807 18.0453C1.58807 18.6729 2.09684 19.1816 2.72443 19.1816Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M3.86328 22.5918H31.136M6.13601 26.0009H28.8633" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.4982 15.7718C20.6362 15.7718 23.18 13.228 23.18 10.09C23.18 6.95204 20.6362 4.4082 17.4982 4.4082C14.3602 4.4082 11.8164 6.95204 11.8164 10.09C11.8164 13.228 14.3602 15.7718 17.4982 15.7718Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M33.408 6.68182C31.9011 6.68182 30.4559 6.0832 29.3904 5.01765C28.3248 3.9521 27.7262 2.50691 27.7262 1M1.58984 6.68182C2.33599 6.68182 3.07483 6.53485 3.76418 6.24932C4.45353 5.96378 5.07989 5.54526 5.6075 5.01765C6.1351 4.49005 6.55362 3.86369 6.83916 3.17434C7.1247 2.48499 7.27166 1.74615 7.27166 1M33.408 13.5C31.9011 13.5 30.4559 14.0986 29.3904 15.1642C28.3248 16.2297 27.7262 17.6749 27.7262 19.1818M1.58984 13.5C2.33599 13.5 3.07483 13.647 3.76418 13.9325C4.45353 14.218 5.07989 14.6366 5.6075 15.1642C6.1351 15.6918 6.55362 16.3181 6.83916 17.0075C7.1247 17.6968 7.27166 18.4357 7.27166 19.1818" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3
                className="text-lg sm:text-xl lg:text-[30px] font-medium"
                style={{
                  color: '#FFF',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '1.2'
                }}
              >
                End-to-End Service
              </h3>
              <p
                className="text-sm sm:text-base lg:text-[20px]"
                style={{
                  color: 'rgba(255, 255, 255, 0.80)',
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.4'
                }}
              >
                From initial search to final registration, we handle everything. Complete IP portfolio management with ongoing monitoring and protection services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}
