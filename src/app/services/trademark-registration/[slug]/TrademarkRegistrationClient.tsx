'use client';

import React, { useState, useEffect } from 'react';
import TableOfContents from '@/components/trademark-registration/TableOfContents';
import CompactContactForm from '@/components/trademark-registration/CompactContactForm';
import DynamicContent from '@/components/trademark-registration/DynamicContent';

interface TrademarkRegistrationClientProps {
  stateName: string;
}

export default function TrademarkRegistrationClient({ stateName }: TrademarkRegistrationClientProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarsFixed, setSidebarsFixed] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded for progressive enhancement
    setIsLoaded(true);

    // Stop sidebars at current position when footer approaches
    const updateSidebarPosition = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const scrollY = window.scrollY;
      const footerTop = footer.getBoundingClientRect().top + scrollY;

      // Switch to absolute positioning when footer is 300px from viewport top
      // This ensures sidebars stop at the position shown in screenshot
      const shouldApplyConstraint = footerTop < scrollY + 400; // 400px threshold
      setSidebarsFixed(!shouldApplyConstraint);
    };

    // Initial check
    updateSidebarPosition();

    // Update on scroll with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSidebarPosition();

          // Section tracking logic
          const sections = ['overview', 'criteria', 'documents', 'process', 'validity', 'support'];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSidebarPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSidebarPosition);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden mt-20" style={{ 
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(19, 69, 195, 0.15), transparent), linear-gradient(180deg, #0C002B 0%, #1a0052 50%, #0C002B 100%)'
    }}>
      {/* Animated Background Elements - Non-blocking */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout style paint' }}>
        {/* Top gradient orb */}
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFB703 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
            willChange: 'transform'
          }}
        />
        {/* Bottom gradient orb */}
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #1345C3 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse',
            animationDelay: '2s',
            willChange: 'transform'
          }}
        />
        {/* Center accent */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #069A81 0%, transparent 70%)',
            animation: 'glow-pulse 6s ease-in-out infinite'
          }}
        />
      </div>

      {/* Horizontal Table of Contents */}
      <TableOfContents activeSection={activeSection} stateName={stateName} />

      <div className="relative z-10 pt-[160px] pb-16 md:pb-8">
        <div className="container mx-auto px-3 sm:px-4 lg:px-5 xl:px-6 2xl:px-8 max-w-7xl">
          {/* Enhanced Hero Section with Animation */}
          <div className={`text-center mb-8 lg:mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-1.5 mb-3 text-[10px] lg:text-xs">
              <span className="text-white/60 font-nunito">Home</span>
              <i className="fas fa-chevron-right text-white/40 text-[8px]" aria-hidden="true"></i>
              <span className="text-white/60 font-nunito">Services</span>
              <i className="fas fa-chevron-right text-white/40 text-[8px]" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-nunito font-medium">Trademark Registration</span>
            </div>

            {/* Main Heading with Gradient Accent */}
            <div className="relative inline-block mb-4">
              <h1 className="font-nunito font-bold leading-tight mb-1.5">
                <span className="block text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  Trademark Registration in
                </span>
                <span 
                  className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703 0%, #FFC93D 50%, #FFB703 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 40px rgba(255, 183, 3, 0.3)'
                  }}
                >
                  {stateName}
                </span>
              </h1>
              {/* Decorative underline */}
              <div 
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                style={{
                  width: '60%',
                  background: 'linear-gradient(90deg, transparent, #FFB703, transparent)',
                  boxShadow: '0 0 20px rgba(255, 183, 3, 0.5)'
                }}
              />
            </div>

            {/* Enhanced Description */}
            <p className="text-white/90 font-nunito text-xs md:text-sm lg:text-sm xl:text-sm leading-relaxed max-w-3xl mx-auto mb-5">
              Complete guide to trademark registration services in <span className="text-[#FFB703] font-semibold">{stateName}</span> with AI-powered search and expert legal guidance
            </p>

            {/* Key Features Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-robot text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-bolt text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">Fast Processing</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-shield-alt text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">100% Secure</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-headset text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">24/7 Support</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-center gap-3">
              <button 
                className="group px-6 py-2 lg:px-8 lg:py-3 rounded-lg font-nunito font-bold text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FFB703 0%, #FFA000 100%)',
                  color: '#0C002B',
                  boxShadow: '0 10px 30px rgba(255, 183, 3, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Start Registration
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-[10px]" aria-hidden="true"></i>
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(135deg, #FFC93D 0%, #FFB703 100%)'
                  }}
                />
              </button>
              <button 
                className="px-5 py-2 lg:px-6 lg:py-3 rounded-lg font-nunito font-semibold text-xs lg:text-sm text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Content Layout with Right Sidebar */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Main Content Area */}
            <div 
              className={`lg:col-span-8 min-h-[500px] transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                contain: 'layout style',
                contentVisibility: 'auto'
              }}
            >
              <DynamicContent stateName={stateName} />
            </div>

            {/* Right Sidebar - Compact Contact Form with enhanced entrance */}
            <div 
              className={`lg:col-span-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                contain: 'layout style paint',
                contentVisibility: 'auto'
              }}
            >
              <div 
                className={`${sidebarsFixed ? 'lg:sticky lg:top-[180px]' : ''}`}
              >
                <CompactContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button - Progressive Enhancement */}
        {isLoaded && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 opacity-0 hover:opacity-100"
            style={{
              background: 'linear-gradient(135deg, #FFB703, #FFA000)',
              boxShadow: '0 4px 20px rgba(255, 183, 3, 0.4)'
            }}
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up text-[#0C002B]" aria-hidden="true"></i>
          </button>
        )}
      </div>
    </div>
  );
}


