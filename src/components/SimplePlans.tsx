'use client';

import React, { useState } from 'react';

export default function SimplePlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'standard',
      name: 'AI Trademark Filing Process – Standard',
      subtitle: 'Deeper search with risk insights',
      description: 'Best for small businesses/startups',
      content: 'Essential trademark protection',
      features: [
        'Complete online trademark filing included',
        'AI trademark search & conflict check',
        'Expert legal guidance throughout the process',
        'Essential trademark protection for your brand'
      ],
      price: '₹3,999',
      highlighted: true
    },
    {
      id: 'premium',
      name: 'Premium Trademark Registration – With AI Risk Checkup',
      subtitle: 'Complete filing included',
      description: 'Suited for growing brands',
      content: 'Enhanced trademark services',
      features: [
        'AI-powered trademark registration and risk report',
        'Advanced legal guidance and trademark filing',
        'Priority VIP support, fast application monitoring',
        'Enhanced trademark and brand safeguard'
      ],
      price: '₹6,999',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Brand Monitoring & Protection – AI Powered',
      subtitle: '24/7 brand monitoring',
      description: 'Enterprises, ongoing protection',
      content: 'Complete brand protection',
      features: [
        '24/7 AI-powered brand & trademark monitoring',
        'Instant alerts for conflicts and infringements',
        'Continuous protection against copycats',
        'Ongoing legal peace of mind for your brand'
      ],
      price: '₹4,999',
      highlighted: false
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        .mobile-scroll-container::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 1023px) {
          .mobile-scroll-container {
            padding-left: 5.76px;
            padding-right: 5.76px;
            gap: 11.52px;
          }
          /* Ensure cards maintain proper height on mobile */
          .mobile-scroll-container > div {
            min-height: 360px !important;
          }
        }
      `}</style>
      <section className="w-full relative overflow-hidden">
      {/* Solid Background */}
      <div className="absolute inset-0 bg-[#0C002B]"></div>

      {/* Main Content */}
      <div className="relative z-10 mt-6 md:mt-16 px-2 lg:px-3 mb-6 md:mb-16">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading with Gradient Text */}
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-white text-center font-nunito text-[23.4px] md:text-[36px] font-medium leading-[27px] md:leading-[39.6px] w-full mb-3">
            Trademark Registration Packages with AI-Powered Search Report
            </h2>
            <p className="text-white font-nunito text-[10.8px] md:text-[12.6px] lg:text-[13.5px] xl:text-[14.4px] font-medium text-center">
              Search, File, Secure.
            </p>
          </div>

          {/* Pricing Cards */}
          <div
            className="mobile-scroll-container flex flex-row overflow-x-auto overflow-y-hidden justify-start items-start lg:flex-row lg:items-center lg:justify-center lg:overflow-x-visible mb-6 md:mb-10 mt-6 md:mt-16 gap-3 lg:gap-6 pb-3 px-2 lg:px-0" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative cursor-pointer transition-all duration-300 ease-in-out flex flex-col items-center flex-shrink-0 ${
                  index === 1 ? '' : ''
                }`}
                onClick={() => setSelectedPlan(plan.id)}
                style={{
                  display: 'flex',
                  width: 'clamp(276.3px, 72vw, 387px)',
                  minHeight: 'clamp(360px, 60vh, 468px)',
                  padding: '10.8px 17.28px 17.28px 17.28px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0
                }}
              >
                {/* Container with conditional blue gradient */}
                <div
                  className="w-full relative transition-all duration-300"
                  style={{
                    borderRadius: '21.6px',
                    padding: '2.88px',
                    paddingTop: '43.2px'
                  }}
                >
                  {/* Blue Gradient Background - Only for middle card */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      index === 1 ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      borderRadius: '27px',
                      background: 'linear-gradient(180deg, #1345C3 0%, rgba(19, 69, 195, 0) 50%)',
                      pointerEvents: 'none'
                    }}
                  >
                    {/* Most Popular Badge - Only for middle card */}
                    {index === 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <span
                          className="font-nunito font-bold text-lg"
                          style={{
                            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 183, 3, 0.75) 50%, rgba(138, 56, 245, 0.75) 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Black Card Container - Glass effect by default, solid black for middle card only */}
                  <div
                    className="relative flex flex-col z-10 transition-all duration-300 min-h-0 flex-1"
                    style={{
                      borderRadius: index === 1 ? '18.72px' : '18px',
                      background: index === 1 ? '#000' : 'rgba(0, 0, 0, 0.05)',
                      boxShadow: index === 1 ? 'none' : '0 0 14.4px 0 rgba(255, 255, 255, 0.31) inset',
                      backdropFilter: 'blur(11.52px)',
                      width: '100%',
                      minHeight: 'clamp(324px, 48vh, 432px)'
                    }}
                  >

                    {/* Main Content Container */}
                    <div
                      className="relative flex flex-col h-full p-6"
                      style={{
                        borderRadius: '0 0 18.72px 18.72px'
                      }}
                    >
                      {/* Plan Name Header - Now inside the card */}
                      <div className="w-full text-center mb-4">
                        <h3 className="text-white font-nunito text-[13.5px] md:text-[16.2px] lg:text-[19.8px] font-semibold leading-snug">
                          {plan.name}
                        </h3>
                      </div>

                      {/* Content Layout */}
                      <div className="flex items-start justify-end mb-4">
                        {/* Right Side Price */}
                        <div
                          className="text-white font-nunito font-bold flex-shrink-0"
                          style={{
                            fontSize: '25.2px',
                            lineHeight: '25.2px',
                            fontWeight: 700
                          }}
                        >
                          {plan.price}
                        </div>
                      </div>

                      {/* Description Text */}
                      <p className="text-white font-nunito text-[9.9px] md:text-[10.8px] lg:text-[11.7px] xl:text-[12.6px] font-medium mb-4 leading-relaxed">
                        {plan.description}
                      </p>

                      {/* Content Text */}
                      <p className="text-white font-nunito text-[9.9px] md:text-[10.8px] lg:text-[11.7px] xl:text-[12.6px] font-medium mb-6 leading-relaxed">
                        {plan.content}
                      </p>

                      {/* Features List - Flexible height */}
                      <div className="space-y-3 flex-1 mb-4 overflow-y-auto">
                        {plan.features.map((feature, featIndex) => (
                          <div key={featIndex} className="flex items-start">
                            <i className="fas fa-check text-green-400 mr-3 mt-1 flex-shrink-0 text-sm"></i>
                            <span
                              className="text-white font-nunito leading-relaxed"
                              style={{
                                fontSize: '11.7px',
                                fontWeight: 500
                              }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Get Protected Button - Fixed at bottom */}
                      <div className="flex-shrink-0 mt-auto">
                        <button
                          className="w-full text-center py-3 px-5 transition-all duration-300 hover:scale-105"
                          style={{
                            borderRadius: '10.8px',
                            background: '#FFB703',
                            boxShadow: '0 0 14.4px 0 #000 inset'
                          }}
                        >
                          <span
                            className="font-nunito font-semibold text-[14.4px] md:text-[19.8px]"
                            style={{
                              color: '#0C002B',
                              lineHeight: '19.8px',
                              fontWeight: 600
                            }}
                          >
                            Get Protected
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>

      {/* Scroll to Top Icon */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6.4 right-6.4 w-11.2 h-11.2 bg-[#1345C3] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0f3aa3] transition-colors duration-300 z-50"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up text-white text-[12.96px]"></i>
      </button>
      </section>
    </>
  );
}
