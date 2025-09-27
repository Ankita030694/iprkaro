'use client';

import React, { useState } from 'react';

export default function SimplePlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'standard',
      name: 'Standard',
      subtitle: 'Deeper search with risk insights',
      description: 'Perfect for small businesses',
      content: 'Essential trademark protection',
      features: [
        'Complete Filing included',
        'Expert Guidance assured',
        'AI Risk checkup',
        'Strong Safeguard for brand'
      ],
      price: '₹3,999',
      highlighted: true
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Complete filing included',
      description: 'Ideal for growing companies',
      content: 'Enhanced trademark services',
      features: [
        'Complete filing included',
        'Expert legal guidance',
        'AI risk checkup',
        'Strong brand safeguard',
        'Priority VIP support'
      ],
      price: '₹6,999',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Pro Monitoring',
      subtitle: '24/7 brand monitoring',
      description: 'For established enterprises',
      content: 'Complete brand protection',
      features: [
        '24/7 brand monitoring',
        'Instant conflict alerts',
        'Continuous brand protection',
        'Block copycat attempts',
        'Ongoing peace of mind'
      ],
      price: '₹4,999',
      highlighted: false
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full relative overflow-hidden">
      {/* Solid Background */}
      <div className="absolute inset-0 bg-[#0C002B]"></div>

      {/* Main Content */}
      <div className="relative z-10 mt-20 px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading with Gradient Text */}
          <div className="text-center mb-12">
            <h2 className="text-white text-center font-nunito text-[28px] md:text-[45px] font-medium leading-[32px] md:leading-[45px] w-full mb-4">
              Simple Plans, Maximum Protection
            </h2>
            <p className="text-white font-nunito text-[10px] md:text-xs lg:text-sm xl:text-base font-medium text-center">
              Search, File, Secure.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-12 mt-20 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.id} 
                className="relative cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center group"
                onClick={() => setSelectedPlan(plan.id)}
                style={{
                  display: 'flex',
                  width: '448px',
                  height: '502px',
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
                    paddingTop: '50px'
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
                  
                  {/* Plan Name Header Overlapping Container */}
                  <div 
                    className="absolute w-full text-center z-20"
                    style={{
                      top: '15px'
                    }}
                  >
                    <h3 className="text-white font-nunito text-[16px] md:text-[20px] lg:text-[25px] font-semibold">
                      {plan.name}
                    </h3>
                  </div>
                  
                  {/* Black Card Container - Glass effect by default, solid on hover/selection */}
                  <div 
                    className="relative flex flex-col z-10 transition-all duration-300"
                    style={{
                      borderRadius: selectedPlan === plan.id ? '26px' : '25px',
                      background: selectedPlan === plan.id ? '#000' : 'rgba(0, 0, 0, 0.05)',
                      boxShadow: selectedPlan === plan.id ? 'none' : '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
                      backdropFilter: 'blur(16px)',
                      width: '100%',
                      height: '430px'
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
                      className="relative flex-1 p-6"
                      style={{
                        borderRadius: '0 0 26px 26px'
                      }}
                    >
                  {/* Content Layout */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Left Side Heading */}
                    <h4 className="text-white font-nunito text-[16px] md:text-[20px] lg:text-[25px] font-semibold">
                      {plan.name}
                    </h4>
                    
                    {/* Right Side Price */}
                    <div 
                      className="text-white font-nunito font-bold"
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

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featIndex) => (
                      <div key={featIndex}>
                        <span 
                          className="text-white font-nunito"
                          style={{
                            fontSize: '16px',
                            fontWeight: 500
                          }}
                        >
                          <i className="fas fa-check text-green-400 mr-2"></i>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Get Protected Button */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <button 
                      className="w-full text-center py-3 px-6 transition-all duration-300 hover:scale-105"
                      style={{
                        borderRadius: '15px',
                        background: '#FFB703',
                        boxShadow: '0 0 20px 0 #000 inset'
                      }}
                    >
                      <span 
                        className="font-nunito font-semibold"
                        style={{
                          color: '#0C002B',
                          fontSize: '25px',
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
          <div className="text-center mb-20">
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
  );
}
