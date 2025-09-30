'use client';

import React, { useState } from 'react';

export default function SimplePlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'standard',
      name: 'AI Trademark Filing – Standard',
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
            padding-left: 8px;
            padding-right: 8px;
            gap: 16px;
          }
          /* Ensure cards maintain proper height on mobile */
          .mobile-scroll-container > div {
            min-height: 500px !important;
          }
        }
      `}</style>
      <section className="w-full relative overflow-hidden">
      {/* Solid Background */}
      <div className="absolute inset-0 bg-[#0C002B]"></div>

      {/* Main Content */}
      <div className="relative z-10 mt-8 md:mt-20 px-2 lg:px-4 mb-8 md:mb-20">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading with Gradient Text */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-center font-nunito text-[28px] md:text-[45px] font-medium leading-[32px] md:leading-[45px] w-full mb-4">
            Trademark Registration Packages with AI-Powered Search Report
            </h2>
            <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium text-center">
              Search, File, Secure.
            </p>
          </div>

          {/* Pricing Cards */}
          <div 
            className="mobile-scroll-container flex flex-row overflow-x-auto overflow-y-hidden justify-start items-start lg:flex-row lg:items-center lg:justify-center lg:overflow-x-visible mb-8 md:mb-12 mt-8 md:mt-20 gap-4 lg:gap-8 pb-4 px-2 lg:px-0" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="relative cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center group flex-shrink-0"
                onClick={() => setSelectedPlan(plan.id)}
                style={{
                  display: 'flex',
                  width: 'clamp(320px, 75vw, 448px)', // Reduced mobile width to 320px (75% of original) to show part of second card
                  minHeight: 'clamp(500px, 75vh, 650px)', // Increased minimum height to accommodate all content
                  padding: '15px 24px 24px 24px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0
                }}
              >
                {/* Container with conditional blue gradient */}
                <div
                  className="w-full relative transition-all duration-300"
                  style={{
                    borderRadius: '30px',
                    padding: '4px',
                    paddingTop: '60px'
                  }}
                >
                  {/* Blue Gradient Background - Only visible on hover/selection */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      selectedPlan === plan.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    style={{
                      borderRadius: '30px',
                      background: 'linear-gradient(180deg, #1345C3 0%, rgba(19, 69, 195, 0) 50%)',
                      pointerEvents: 'none'
                    }}
                  ></div>
                  
                  {/* Black Card Container - Glass effect by default, solid on hover/selection */}
                  <div
                    className="relative flex flex-col z-10 transition-all duration-300 min-h-0 flex-1"
                    style={{
                      borderRadius: selectedPlan === plan.id ? '26px' : '25px',
                      background: selectedPlan === plan.id ? '#000' : 'rgba(0, 0, 0, 0.05)',
                      boxShadow: selectedPlan === plan.id ? 'none' : '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
                      backdropFilter: 'blur(16px)',
                      width: '100%',
                      minHeight: 'clamp(450px, 60vh, 600px)' // Increased to accommodate all content properly
                    }}
                    onMouseEnter={(e) => {
                      if (selectedPlan !== plan.id) {
                        e.currentTarget.style.background = '#000';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderRadius = '26px';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedPlan !== plan.id) {
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                        e.currentTarget.style.boxShadow = '0 0 20px 0 rgba(255, 255, 255, 0.31) inset';
                        e.currentTarget.style.borderRadius = '25px';
                      }
                    }}
                  >

                    {/* Main Content Container */}
                    <div
                      className="relative flex flex-col h-full p-6"
                      style={{
                        borderRadius: '0 0 26px 26px'
                      }}
                    >
                      {/* Plan Name Header - Now inside the card */}
                      <div className="w-full text-center mb-4">
                        <h3 className="text-white font-nunito text-[16px] md:text-[20px] lg:text-[25px] font-semibold">
                          {plan.name}
                        </h3>
                      </div>

                      {/* Content Layout */}
                      <div className="flex items-start justify-end mb-4">
                        {/* Right Side Price */}
                        <div
                          className="text-white font-nunito font-bold flex-shrink-0"
                          style={{
                            fontSize: '30px',
                            lineHeight: '30px',
                            fontWeight: 700
                          }}
                        >
                          {plan.price}
                        </div>
                      </div>

                      {/* Description Text */}
                      <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium mb-4">
                        {plan.description}
                      </p>

                      {/* Content Text */}
                      <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium mb-6">
                        {plan.content}
                      </p>

                      {/* Features List - Flexible height */}
                      <div className="space-y-2 flex-1 mb-4 overflow-y-auto">
                        {plan.features.map((feature, featIndex) => (
                          <div key={featIndex} className="flex items-start">
                            <i className="fas fa-check text-green-400 mr-3 mt-1 flex-shrink-0"></i>
                            <span
                              className="text-white font-nunito leading-relaxed"
                              style={{
                                fontSize: '14px',
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
                          className="w-full text-center py-3 px-6 transition-all duration-300 hover:scale-105"
                          style={{
                            borderRadius: '15px',
                            background: '#FFB703',
                            boxShadow: '0 0 20px 0 #000 inset'
                          }}
                        >
                          <span
                            className="font-nunito font-semibold text-[18px] md:text-[25px]"
                            style={{
                              color: '#0C002B',
                              lineHeight: '25px',
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

          {/* Footer Text */}
          <div className="text-center mb-8 md:mb-20">
            <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium">
              This product and all trademark services are legally ensured by AMA Legal Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Icon */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#1345C3] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0f3aa3] transition-colors duration-300 z-50"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up text-white text-lg"></i>
      </button>
      </section>
    </>
  );
}
