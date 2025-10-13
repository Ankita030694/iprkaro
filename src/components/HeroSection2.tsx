'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const SearchClient = dynamic(() => import('./SearchClient'));
const ClientLogoSlider = dynamic(() => import('./ClientLogoSlider'));

export default function HeroSection2() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full min-h-screen relative overflow-hidden flex flex-col rounded-b-[40px]">
      {/* Modern AI-Legal Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0C002B 0%, #160049 50%, #6E5E93 100%)'
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Floating Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(124, 111, 255, 0.4) 0%, transparent 70%)',
            animationDelay: '0s',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(0, 229, 204, 0.3) 0%, transparent 70%)',
            animationDelay: '2s',
            animationDuration: '10s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(124, 111, 255, 0.25) 0%, transparent 70%)',
            animationDelay: '4s',
            animationDuration: '12s'
          }}
        />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row w-full z-[60] px-4 lg:px-0 pt-20 lg:pt-32 pb-8" style={{ minHeight: 'calc(100vh - 120px)' }}>
        
        {/* Mobile Layout */}
        <div className="flex flex-col justify-start items-center w-full h-full lg:hidden pt-12">
          <div className="flex flex-col items-center gap-4 text-center max-w-md">
            
            {/* Micro Label */}
            <div 
              className={`micro-label text-[#00E5CC] tracking-widest mb-1 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
              style={{
                textShadow: '0 0 20px rgba(0, 229, 204, 0.5)'
              }}
            >
              INDIA'S FIRST AI-POWERED PLATFORM
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-white font-nunito text-[24px] font-bold leading-[32px] transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Check Your Trademark in{' '}
              <span 
                className="text-[#7C6FFF]"
                style={{
                  textShadow: '0 0 30px rgba(124, 111, 255, 0.6)'
                }}
              >
                60 Seconds
              </span>
              {' '}— Powered by AI
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-[#C4BFFF] font-nunito text-[13px] font-normal leading-[18px] max-w-sm transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              India's first AI-powered platform that predicts trademark approval chances, 
              finds the right class, and flags legal risks — all before you file.
            </p>

            {/* Search Bar */}
            <div 
              className={`w-full mt-2 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <SearchClient />
            </div>

            {/* Secondary CTA */}
            <div 
              className={`text-[#00E5CC] font-nunito text-[11px] font-medium mt-2 transition-all duration-700 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            >
              100% Free Search • No Credit Card • Instant Results
            </div>

            {/* Trust Badges - Mobile */}
            <div 
              className={`grid grid-cols-1 gap-3 w-full max-w-xs mt-6 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <TrustBadge 
                icon="fa-microchip"
                text="AI-Powered Analysis in 60 Seconds"
                delay="0s"
              />
              <TrustBadge 
                icon="fa-chart-line"
                text="10,000+ Trademarks Checked This Month"
                delay="0.1s"
              />
              <TrustBadge 
                icon="fa-circle-check"
                text="95% Success Rate for AI-Approved Names"
                delay="0.2s"
              />
            </div>

            {/* Hero Image - Mobile */}
            <div className="w-full mt-6 flex justify-center">
              <img
                src="/figmacomp/herodash.svg"
                alt="AI Trademark Dashboard"
                className="w-full max-w-[400px] object-contain opacity-90"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-3/5 flex-col justify-center items-start pl-20">
          <div className="flex flex-col items-start gap-4 text-left max-w-2xl">
            
            {/* Micro Label */}
            <div 
              className={`micro-label text-[#00E5CC] tracking-widest mb-1 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
              style={{
                textShadow: '0 0 20px rgba(0, 229, 204, 0.5)'
              }}
            >
              INDIA'S FIRST AI-POWERED PLATFORM
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-white font-nunito text-[42px] font-bold leading-[52px] transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Check Your Trademark in{' '}
              <span 
                className="text-[#7C6FFF]"
                style={{
                  textShadow: '0 0 30px rgba(124, 111, 255, 0.6)'
                }}
              >
                60 Seconds
              </span>
              <br />
              — Powered by AI
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-[#C4BFFF] font-nunito text-[16px] font-normal leading-[24px] max-w-xl transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              India's first AI-powered platform that predicts trademark approval chances, 
              finds the right class, and flags legal risks — all before you file.
            </p>

            {/* Search Bar */}
            <div 
              className={`w-full mt-2 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <SearchClient />
            </div>

            {/* Secondary CTA */}
            <div 
              className={`text-[#00E5CC] font-nunito text-[14px] font-medium mt-1 transition-all duration-700 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            >
              100% Free Search • No Credit Card • Instant Results
            </div>

            {/* Trust Badges - Desktop */}
            <div 
              className={`grid grid-cols-3 gap-6 w-full mt-8 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <TrustBadge 
                icon="fa-microchip"
                text="AI-Powered Analysis in 60 Seconds"
                delay="0s"
              />
              <TrustBadge 
                icon="fa-chart-line"
                text="10,000+ Trademarks Checked This Month"
                delay="0.1s"
              />
              <TrustBadge 
                icon="fa-circle-check"
                text="95% Success Rate for AI-Approved Names"
                delay="0.2s"
              />
            </div>
          </div>
        </div>

        {/* Right Container - Hero Dashboard Image (Desktop Only) */}
        <div className="hidden lg:flex w-2/5 justify-center items-center pr-20">
          <div 
            className={`relative transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <img
              src="/figmacomp/herodash.svg"
              alt="AI Trademark Dashboard"
              className="h-[450px] w-auto object-contain"
              loading="eager"
              decoding="sync"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(124, 111, 255, 0.4))',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            />
            {/* Glow effect behind dashboard */}
            <div 
              className="absolute inset-0 blur-3xl opacity-50 animate-glow-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(124, 111, 255, 0.6) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Logo Slider at the bottom */}
      <div 
        className={`w-full z-[60] h-[120px] flex items-center transition-opacity duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <ClientLogoSlider />
      </div>
    </section>
  );
}

// Trust Badge Component
function TrustBadge({ icon, text, delay }: { icon: string; text: string; delay: string }) {
  return (
    <div 
      className="flex items-start gap-3 group cursor-default"
      style={{
        animationDelay: delay
      }}
    >
      <div 
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, rgba(124, 111, 255, 0.2) 0%, rgba(0, 229, 204, 0.2) 100%)',
          border: '1px solid rgba(124, 111, 255, 0.3)',
          boxShadow: '0 4px 12px rgba(124, 111, 255, 0.2)'
        }}
      >
        <i 
          className={`fa-solid ${icon} text-[#00E5CC] text-lg`}
          style={{
            textShadow: '0 0 10px rgba(0, 229, 204, 0.5)'
          }}
        />
      </div>
      <div className="flex-1">
        <p className="text-white font-nunito text-[13px] lg:text-[14px] font-medium leading-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
}

