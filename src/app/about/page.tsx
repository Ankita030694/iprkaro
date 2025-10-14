'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ClientLogoSlider from '@/components/ClientLogoSlider';
import AboutBento from '@/components/AboutBento';

export default function AboutPage() {
  // State for mobile card interactions
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  // Schema markup for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130), #ffffff)',
        backgroundSize: '100% 80%',
        backgroundPosition: '10% 20%',
        backgroundRepeat: 'no-repeat',
        marginTop: '-100px',
        paddingTop: '100px'
      }}
    >
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((logoNumber) => (
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
      <div className="w-full py-16 relative">
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
        <div className="hidden lg:block max-w-6xl mx-auto relative">

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
      <div className="w-full py-8" style={{ backgroundColor: '#0C002B' }}>
        <div className="text-center mb-8 px-6 sm:px-12 lg:px-24">
          <h2
            className="text-2xl sm:text-3xl lg:text-[36px] font-bold"
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

        {/* Cards Container - Full Width with Scaling */}
        <div className="w-full" style={{
          transform: 'scale(0.85)',
          transformOrigin: 'top center'
        }}>
          {/* Main Grid - Full width layout */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 px-6 sm:px-12 lg:px-24">
            {/* Mobile Layout - Desktop-like Cards in Single Column */}
            <div className="block lg:hidden space-y-4">
              {/* Card 1 - AI-Powered Trademark Search */}
              <div
                className="relative group cursor-pointer overflow-hidden h-56"
                style={{
                  borderRadius: '20px 0 0 0',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                  boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                }}
                onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              >
                {/* Centered text content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-semibold mb-4 text-white" style={{fontFamily: 'Nunito', fontWeight: 600}}>
                    AI-Powered Trademark Search
                  </h3>
                  <p className="text-sm max-w-[280px] mx-auto mb-4" style={{color: 'rgba(255, 255, 255, 0.90)', fontFamily: 'Nunito', lineHeight: '1.5'}}>
                    Instantly scan millions of records. Our AI-powered search report finds identical and confusingly similar marks so you can decide whether to register or tweak your brand.
                  </p>
                </div>
                {/* Search icon positioned at bottom center */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Image
                    src="/figmacomp/searchabout.svg"
                    alt="Search Icon"
                    width={300}
                    height={80}
                    className={`w-full max-w-[280px] h-auto object-contain opacity-80 transition-all duration-300 ${
                      activeCard === 1 ? 'opacity-100 filter-[url(#yellow-filter)]' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Card 2 - Expert-Led Guidance */}
              <div
                className="relative group cursor-pointer overflow-hidden h-56"
                style={{
                  borderRadius: '20px 0 0 0',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                  boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                }}
                onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
              >
                {/* Text positioned in top left */}
                <div className="absolute top-6 left-6 z-10">
                  <h3 className="text-lg font-semibold mb-3 text-white" style={{fontFamily: 'Nunito', fontWeight: 600}}>
                    Expert-Led Guidance
                  </h3>
                  <p className="text-sm max-w-[200px]" style={{color: 'rgba(255, 255, 255, 0.90)', fontFamily: 'Nunito', lineHeight: '1.5'}}>
                    Certified IP lawyers review your AI report, advise on registrability, and prepare filing documents. Clear legal answers with no jargon.
                  </p>
                </div>
                {/* SVG positioned in top right */}
                <div className="absolute top-0 right-0 z-10">
                  <Image
                    src="/figmacomp/expert-guidance.svg"
                    alt="Expert Guidance Icon"
                    width={80}
                    height={120}
                    className={`w-full h-full object-contain filter grayscale transition-all duration-300 ${
                      activeCard === 2 ? 'filter-[url(#yellow-filter)] grayscale-0' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Card 3 - Fast Processing */}
              <div
                className="relative group cursor-pointer overflow-hidden h-56"
                style={{
                  borderRadius: '20px 0 0 0',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                  boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                }}
                onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
              >
                {/* Text positioned in top left */}
                <div className="absolute top-6 left-6 z-10">
                  <h3 className="text-lg font-semibold mb-3 text-white" style={{fontFamily: 'Nunito', fontWeight: 600}}>
                    Fast Processing
                  </h3>
                  <p className="text-sm max-w-[200px]" style={{color: 'rgba(255, 255, 255, 0.90)', fontFamily: 'Nunito', lineHeight: '1.5'}}>
                    Optimised workflows cut filing time to get search results within minutes and an expert review within 24 to 48 hours.
                  </p>
                </div>
                {/* Icon positioned in top right */}
                <div className="absolute top-0 right-0 z-10">
                  <Image
                    src="/figmacomp/fast-processing.svg"
                    alt="Fast Processing Icon"
                    width={80}
                    height={160}
                    className={`w-full h-full object-contain transition-all duration-300 ${
                      activeCard === 3 ? 'filter-[url(#yellow-filter)]' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Card 4 - Affordable & Transparent Pricing */}
              <div
                className="relative group cursor-pointer overflow-hidden h-56"
                style={{
                  borderRadius: '20px 0 0 0',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                  boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                }}
                onClick={() => setActiveCard(activeCard === 4 ? null : 4)}
              >
                {/* Text positioned in top left */}
                <div className="absolute top-6 left-6 z-10">
                  <h3 className="text-lg font-semibold mb-3 text-white" style={{fontFamily: 'Nunito', fontWeight: 600}}>
                    Affordable & Transparent Pricing
                  </h3>
                  <p className="text-sm max-w-[200px]" style={{color: 'rgba(255, 255, 255, 0.90)', fontFamily: 'Nunito', lineHeight: '1.5'}}>
                    No hidden fees. Choose a plan that fits your needs (search report, filing, or full legal package) with one-page invoices that explain every cost.
                  </p>
                </div>
                {/* Icon positioned in bottom right */}
                <div className="absolute bottom-0 right-0 z-10">
                  <Image
                    src="/figmacomp/affordable-pricing.svg"
                    alt="Affordable Pricing Icon"
                    width={150}
                    height={100}
                    className={`w-full h-full object-contain transition-all duration-300 ${
                      activeCard === 4 ? 'filter-[url(#yellow-filter)]' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Card 5 - End-to-End Support */}
              <div
                className="relative group cursor-pointer overflow-hidden h-64"
                style={{
                  borderRadius: '20px 0 0 0',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                  boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                }}
                onClick={() => setActiveCard(activeCard === 5 ? null : 5)}
              >
                {/* Icon positioned inside the left edge */}
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                  <Image
                    src="/figmacomp/end-to-end-support.svg"
                    alt="End-to-End Support Icon"
                    width={40}
                    height={320}
                    className={`w-8 h-full object-contain transition-all duration-300 ${
                      activeCard === 5 ? 'filter-[url(#yellow-filter)]' : ''
                    }`}
                  />
                </div>

                {/* Main content - positioned at top */}
                <div className="relative z-20 p-6 pl-12 h-full flex flex-col justify-start">
                  <h3 className="text-xl font-semibold mb-4 text-white" style={{fontFamily: 'Nunito', fontWeight: 600}}>
                    End-to-End Support
                  </h3>
                  <p className="text-sm mb-4" style={{color: 'rgba(255, 255, 255, 0.90)', fontFamily: 'Nunito', lineHeight: '1.6'}}>
                    From search to filing to post-registration monitoring, we handle filings, replies, and renewals so your brand stays protected.
                  </p>
                </div>

                {/* Complete Process - shown on active as overlay at bottom */}
                <div className={`absolute right-4 bottom-4 bg-black/90 text-white p-3 rounded-lg transition-all duration-300 pointer-events-none z-30 max-w-[260px] ${
                  activeCard === 5 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-sm font-semibold mb-2 text-yellow-300">Complete Process:</div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                      <span>AI-powered trademark search & analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                      <span>Expert legal review & consultation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                      <span>Complete filing & documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                      <span>Post-registration monitoring & renewals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Desktop Layout - Original 2x2 Grid + Right Card */}
            <div className="hidden lg:flex flex-row gap-6">
              {/* Left Section - 2x2 Grid for Cards 1-4 */}
              <div className="flex-1 grid grid-cols-2 gap-6">
                {/* Card 1 - AI-Powered Trademark Search */}
                <div
                  className="p-6 text-center h-64 flex flex-col justify-center items-center relative group cursor-pointer"
                  style={{
                    borderRadius: '20px 0 0 0',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Centered text content */}
                  <div className="z-10 my-4">
                    <h3
                      className="text-[20px] font-semibold mb-3 mt-4"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '1.3'
                      }}
                    >
                      AI-Powered Trademark Search
                    </h3>
                    <p
                      className="text-[14px] max-w-[280px] mx-auto"
                      style={{
                        color: 'rgba(255, 255, 255, 0.90)',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '1.5'
                      }}
                    >
                      Instantly scan millions of records. Our AI-powered search report finds identical and confusingly similar marks so you can decide whether to register or tweak your brand.
                    </p>
                    <div className="mt-2 text-xs text-yellow-300 font-medium tracking-wide hidden">
                      trademark search, AI trademark report
                    </div>
                  </div>
                  {/* Search icon below the text */}
                  <div className="flex justify-center">
                    <Image
                      src="/figmacomp/searchabout.svg"
                      alt="Search Icon"
                      width={432}
                      height={112}
                      className="w-full max-w-[350px] h-auto object-contain group-hover:filter-[url(#yellow-filter)] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Card 2 - Expert-Led Guidance */}
                <div
                  className="p-6 h-64 relative group cursor-pointer"
                  style={{
                    borderRadius: '20px 0 0 0',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Text positioned in top left */}
                  <div className="absolute top-6 left-6">
                    <h3
                      className="text-[18px] font-semibold mb-2"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '1.3'
                      }}
                    >
                      Expert-Led Guidance
                    </h3>
                    <p
                      className="text-[13px] max-w-[180px]"
                      style={{
                        color: 'rgba(255, 255, 255, 0.90)',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '1.5'
                      }}
                    >
                      Certified IP lawyers review your AI report, advise on registrability, and prepare filing documents. Clear legal answers with no jargon.
                    </p>
                    <div className="mt-2 text-xs text-yellow-300 font-medium tracking-wide hidden">
                      trademark lawyer, how to register trademark
                    </div>
                  </div>
                  {/* SVG positioned in top right - attached to borders */}
                  <div className="absolute top-0 right-0">
                    <Image
                      src="/figmacomp/expert-guidance.svg"
                      alt="Expert Guidance Icon"
                      width={96}
                      height={158}
                      className="w-full h-full object-contain filter grayscale group-hover:filter-[url(#yellow-filter)] group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Card 3 - Fast Processing */}
                <div
                  className="p-6 h-64 relative group cursor-pointer"
                  style={{
                    borderRadius: '20px 0 0 0',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Text positioned in top left */}
                  <div className="absolute top-6 left-6">
                    <h3
                      className="text-[18px] font-semibold mb-2"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '1.3'
                      }}
                    >
                      Fast Processing
                    </h3>
                    <p
                      className="text-[13px] max-w-[180px]"
                      style={{
                        color: 'rgba(255, 255, 255, 0.90)',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '1.5'
                      }}
                    >
                      Optimised workflows cut filing time to get search results within minutes and an expert review within 24 to 48 hours.
                    </p>
                    <div className="mt-2 text-xs text-yellow-300 font-medium tracking-wide hidden">
                      fast trademark search, trademark registration timeline
                    </div>
                  </div>
                  {/* Icon positioned in top right - attached to borders */}
                  <div className="absolute top-0 right-0">
                    <Image
                      src="/figmacomp/fast-processing.svg"
                      alt="Fast Processing Icon"
                      width={99}
                      height={204}
                      className="w-full h-full object-contain group-hover:filter-[url(#yellow-filter)] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Card 4 - Affordable & Transparent Pricing */}
                <div
                  className="p-6 h-64 relative group cursor-pointer"
                  style={{
                    borderRadius: '20px 0 0 0',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Text positioned in top left */}
                  <div className="absolute top-6 left-6">
                    <h3
                      className="text-[17px] font-semibold mb-2"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '1.3'
                      }}
                    >
                      Affordable & Transparent Pricing
                    </h3>
                    <p
                      className="text-[13px] max-w-[180px]"
                      style={{
                        color: 'rgba(255, 255, 255, 0.90)',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '1.5'
                      }}
                    >
                      No hidden fees. Choose a plan that fits your needs (search report, filing, or full legal package) with one-page invoices that explain every cost.
                    </p>
                    <div className="mt-2 text-xs text-yellow-300 font-medium tracking-wide hidden">
                      trademark cost, trademark price
                    </div>
                  </div>
                  {/* Icon positioned in bottom right - attached to borders */}
                  <div className="absolute bottom-0 right-0">
                    <Image
                      src="/figmacomp/affordable-pricing.svg"
                      alt="Affordable Pricing Icon"
                      width={187}
                      height={136}
                      className="w-full h-full object-contain group-hover:filter-[url(#yellow-filter)] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section - Card 5 (End-to-End Support) */}
              <div className="w-80 flex-shrink-0">
                <div
                  className="relative h-[33rem] group cursor-pointer overflow-hidden"
                  style={{
                    borderRadius: '20px 0 0 0',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.40) inset, 4px 4px 25.2px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Icon positioned inside the left edge */}
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                    <Image
                      src="/figmacomp/end-to-end-support.svg"
                      alt="End-to-End Support Icon"
                      width={49}
                      height={445}
                      className="w-8 h-full object-contain group-hover:filter-[url(#yellow-filter)] transition-all duration-300"
                    />
                  </div>

                  {/* Main content - positioned at top */}
                  <div className="relative z-20">
                    <div className="p-6 pl-10 text-center">
                      <h3
                        className="text-[22px] font-semibold mb-4"
                        style={{
                          color: '#FFF',
                          fontFamily: 'Nunito',
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: '1.3'
                        }}
                      >
                        End-to-End Support
                      </h3>
                      <p
                        className="text-[15px] mb-4"
                        style={{
                          color: 'rgba(255, 255, 255, 0.90)',
                          textAlign: 'center',
                          fontFamily: 'Nunito',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: '1.6'
                        }}
                      >
                        From search to filing to post-registration monitoring, we handle filings, replies, and renewals so your brand stays protected.
                      </p>
                      <div className="mb-6 text-xs text-yellow-300 font-medium tracking-wide hidden">
                        register trademark, trademark filing services
                      </div>
                    </div>
                  </div>

                  {/* Complete Process - shown on hover as overlay at bottom */}
                  <div className="absolute right-15 bottom-50 bg-black/90 text-white p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 max-w-[260px]">
                    <div className="text-sm font-semibold mb-2 text-yellow-300">Complete Process:</div>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                        <span>AI-powered trademark search & analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                        <span>Expert legal review & consultation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                        <span>Complete filing & documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                        <span>Post-registration monitoring & renewals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Trust & Proof line */}
          <div className="w-full text-center mt-8">
            <span className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide">
              Trusted by entrepreneurs and startups with official filings, attorney review, and secure document handling.
            </span>
          </div>
        </div>
      </div>

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
              {aboutFaqs.map((faq, index) => (
                <div key={index} className="relative">
                  <div
                    className="p-[18px] cursor-pointer transition-all durat2ion-300 ease-in-out hover:scale-[1.02] transform"
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
    </div>
  );
}
