'use client';

import React, { useState } from 'react';

export default function SimplePlans() {
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const plans = [
    {
      id: 'standard',
      name: 'Standard Plan',
      features: [
        'AI-powered smart search',
        'Approval chances revealed',
        'Spot risks before filing',
        'Perfect for new brands',
        'AI risk checkup',

      ],
      price: '₹2,999/month',
      highlighted: true
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      features: [
        'Complete filing included',
        'Expert legal guidance',
        'AI risk checkup',
        'Strong brand safeguard',
        'Priority VIP support'
      ],
      price: '₹6,999/month',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Pro Monitoring Plan',
      features: [
        '24/7 brand monitoring',
        'Instant conflict alerts',
        'Continuous brand protection',
        'Block copycat attempts',
        'Ongoing peace of mind',
      ],
      price: '₹4,999/month',
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
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-white font-nunito text-[48px] font-bold leading-[52px]">
              Simple Plans, Maximum Protection
            </h2>
            <p className="text-white text-lg">
              Search, File, Secure.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-20">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className="bg-transparent rounded-[15px] border border-gray-700 relative hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:[box-shadow:0_0_20px_0_rgba(255,255,255,0.31)_inset,0_0_82.5px_0_rgba(255,183,3,0.25)]"
              >
                {/* Plan Name - Full Width Header with background */}
                <div className="bg-[#292929] px-6 py-4 rounded-t-[15px]">
                  <h3 className="text-white text-xl font-bold font-nunito">
                    {plan.name}
                  </h3>
                </div>

                {/* Content Area with transparent background */}
                <div className="bg-transparent px-6 py-6">
                  {/* What's Included */}
                  <h4 className="text-white text-lg font-semibold mb-4">
                    What's included
                  </h4>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check text-[#fbbf24] text-sm mt-1 mr-3 flex-shrink-0"></i>
                        <span className="text-white text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price Button */}
                  <button className="w-full yellow-button text-sm py-3 mt-50">
                    Lock in at {plan.price}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center mb-20">
            <p className="text-white text-sm">
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
