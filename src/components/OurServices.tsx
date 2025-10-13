'use client';

import React from 'react';
import Link from 'next/link';

export default function OurServices() {
  const services = [
    {
      id: 'trademark',
      title: 'Trademark Registration',
      subtitle: 'Register your trademark online start with our AI trademark search, review your report, and file instantly.',
      link: '/services/trademark-registration',
      items: [
        'AI-powered trademark search for instant conflict detection and brand availability',
        'Register trademark online with a fast, step-by-step guided application',
        'How to register a trademark in India: Complete filing and legal support',
        'Get your trademark search report with AI to maximize registerability',
        'Secure your brand identity with expert trademark protection'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M23.4375 41.25V33.125M23.4375 33.125V20.625H31.875C33.8625 20.625 37.5 20.625 37.5 27.5C37.5 34.375 33.8625 34.375 31.875 34.375M23.4375 33.125H31.875M31.875 34.375L37.5 41.25" stroke="url(#paint0_linear_trademark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 58.75C45.8883 58.75 58.75 45.8883 58.75 30C58.75 14.1117 45.8883 1.25 30 1.25C14.1117 1.25 1.25 14.1117 1.25 30C1.25 45.8883 14.1117 58.75 30 58.75Z" stroke="url(#paint1_linear_trademark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_trademark" x1="23.4375" y1="35" x2="37.5536" y2="35.3571" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.490385" stopColor="#8A38F5"/>
              <stop offset="0.88" stopColor="#FFB703"/>
            </linearGradient>
            <linearGradient id="paint1_linear_trademark" x1="1.25" y1="40" x2="58.9184" y2="40.8929" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.490385" stopColor="#8A38F5"/>
              <stop offset="0.88" stopColor="#FFB703"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'copyright',
      title: 'Copyright Protection',
      subtitle: 'Secure creative works digitally AI copyright search and seamless online application keep your assets protected.',
      link: '/services/copyright-protection',
      items: [
        'Online copyright registration for digital content and creative works',
        'AI copyright search for originality and infringement checks',
        'How to protect your copyright online: From application to monitoring',
        'Efficient copyright filing and expert guidance for complete protection',
        'Lifetime protection plus 60 years for your creative works'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 58.75C45.8883 58.75 58.75 45.8883 58.75 30C58.75 14.1117 45.8883 1.25 30 1.25C14.1117 1.25 1.25 14.1117 1.25 30C1.25 45.8883 14.1117 58.75 30 58.75Z" stroke="url(#paint0_linear_copyright)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M38.75 20C35.625 16.875 31.25 16.25 28.125 16.25C21.25 16.25 15.625 21.875 15.625 28.75C15.625 35.625 21.25 41.25 28.125 41.25C31.25 41.25 35.625 40.625 38.75 37.5" stroke="url(#paint1_linear_copyright)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_copyright" x1="1.25" y1="40" x2="58.9184" y2="40.8929" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.490385" stopColor="#8A38F5"/>
              <stop offset="0.88" stopColor="#FFB703"/>
            </linearGradient>
            <linearGradient id="paint1_linear_copyright" x1="15.625" y1="32.5" x2="38.8393" y2="32.7143" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.490385" stopColor="#8A38F5"/>
              <stop offset="0.88" stopColor="#FFB703"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'patent',
      title: 'Patent Services',
      subtitle: 'Protect inventions with AI-optimized patent search and application file quickly, stay ahead of the competition.',
      link: '/services/patent-services',
      items: [
        'Patent registration for inventions with AI-powered search and risk analysis',
        'How to file a patent: Quick patent search, filing, and legal compliance in India',
        'End-to-end patent application support for maximizing protection and market advantage',
        'Expert patent drafting with strong defensible claims for your innovations',
        '20-year exclusive rights protection with examination response support'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 11.25V3.75M30 56.25V48.75M11.25 30H3.75M56.25 30H48.75M46.25 13.75L41.25 18.75M46.25 46.25L41.25 41.25M13.75 13.75L18.75 18.75M13.75 46.25L18.75 41.25" stroke="url(#paint0_linear_patent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 43.75C37.5939 43.75 43.75 37.5939 43.75 30C43.75 22.4061 37.5939 16.25 30 16.25C22.4061 16.25 16.25 22.4061 16.25 30C16.25 37.5939 22.4061 43.75 30 43.75Z" stroke="url(#paint1_linear_patent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_patent" x1="3.75" y1="35" x2="56.4643" y2="35.8929" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.490385" stopColor="#8A38F5"/>
              <stop offset="0.88" stopColor="#FFB703"/>
            </linearGradient>
            <linearGradient id="paint1_linear_patent" x1="16.25" y1="35" x2="43.9286" y2="35.7143" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.490385" stopColor="#8A38F5"/>
              <stop offset="0.88" stopColor="#FFB703"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-white font-nunito text-[28px] md:text-[36px] lg:text-[38px] font-medium leading-[32px] md:leading-[39.6px] lg:leading-[42px] mb-3">
            Comprehensive <span className="font-nunito font-bold" style={{
              background: 'linear-gradient(90deg, white 0%, #8A38F5 50%, #FFB703 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>IPR Services</span>
          </h2>
          <p className="text-white font-nunito text-[10.8px] md:text-[12.6px] lg:text-[14px] font-medium opacity-90">
            AI-Powered Protection for Your Intellectual Property
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-[20px] lg:rounded-[25px] p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 h-full"
              style={{
                border: '6px solid rgba(255, 255, 255, 0.07)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 lg:mb-6 transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-nunito text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-tight mb-3">
                {service.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-white font-nunito text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-relaxed opacity-90 mb-5">
                {service.subtitle}
              </p>

              {/* Items List */}
              <div className="space-y-3 mb-6">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    {/* Check Icon */}
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                        <i className="fas fa-check text-white text-[10px]" aria-hidden="true"></i>
                      </div>
                    </div>
                    <span className="text-white/80 font-nunito text-[11px] md:text-[12px] lg:text-[13px] font-normal leading-relaxed flex-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <Link href={service.link}>
                <button 
                  className="w-full py-3 px-6 rounded-[12px] font-nunito font-semibold text-[14px] lg:text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                  style={{
                    background: '#FFB703',
                    color: '#0C002B',
                    boxShadow: '0 0 15.84px 0 #000 inset'
                  }}
                >
                  Learn More
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                </button>
              </Link>

              {/* Hover gradient overlay */}
              <div 
                className="absolute inset-0 rounded-[20px] lg:rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.05) 0%, rgba(138, 56, 245, 0.05) 100%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 lg:mt-14">
          <p className="text-white/80 font-nunito text-[12px] md:text-[14px] mb-4">
            Need help choosing the right service? Our experts are here to guide you.
          </p>
          <Link href="/contact">
            <button 
              className="px-6 py-3 rounded-[10px] font-nunito font-semibold text-[14px] lg:text-[15px] border-2 transition-all duration-300 hover:scale-105 hover:bg-[#FFB703]/10"
              style={{
                borderColor: '#FFB703',
                color: '#FFB703',
                background: 'transparent'
              }}
            >
              <i className="fas fa-headset mr-2" aria-hidden="true"></i>
              Talk to an Expert
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

