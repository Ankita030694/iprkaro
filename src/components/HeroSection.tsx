'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const SearchClient = dynamic(() => import('./SearchClient'));
const ClientLogoSlider = dynamic(() => import('./ClientLogoSlider'));

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    registered: 0,
    applied: 0
  });

  const targets = {
    clients: 5000,
    registered: 7000,
    applied: 10000
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // Animation steps
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let completed = true;

        Object.keys(targets).forEach(k => {
          const key = k as keyof typeof targets;
          if (newCounters[key] < targets[key]) {
            const remaining = targets[key] - newCounters[key];
            const step = Math.max(1, Math.floor(remaining / (steps * 0.1)));
            newCounters[key] = Math.min(targets[key], newCounters[key] + step);
            completed = false;
          }
        });

        if (completed) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };
  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col rounded-b-[40px]">
      {/* Background using linear gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
        }}
      />
    
      {/* Main Content Section - Responsive Layout - Reserve space for logo slider */}
      <div className="flex flex-col lg:flex-row w-full z-[60] px-4 lg:px-0 pt-28 lg:pt-28 h-full lg:h-auto" style={{ height: 'calc(100vh - 100px)' }}>
        {/* Mobile Layout - Centered Content */}
        <div className="flex flex-col justify-start items-center w-full h-full lg:hidden pt-4">
          <div className="flex flex-col items-center gap-2 text-center max-w-sm">
            {/* Main Heading */}
            <h1 className="text-[#F8F9FA] font-nunito text-[20px] font-bold leading-[26px]">
            Trademark Registration Made Easy: Fast, Accurate, and Powered by AI <span className="animated-gradient text-[20px] font-bold">- Start in 60 Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[rgba(255,255,255,0.77)] font-nunito text-[11px] font-normal leading-[13px]">
              AI-powered search, risk check & filing all in one place. Protect your brand name
              in minutes with iprkaro.com.
            </p>

            {/* Search Bar */}
            <div className="w-full mt-2">
              <SearchClient />
            </div>

            {/* Underhero Image - Mobile Only */}
            <div className="w-full mt-6 flex justify-center">
              <img
                src="/underhero.png"
                alt="Underhero"
                className="w-full max-w-[500px] object-cover"
                loading="eager"
                decoding="sync"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'subpixel-antialiased',
                  perspective: 1000,
                  WebkitPerspective: 1000
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-3/5 flex-col justify-center items-start pl-20 max-w-3xl">
          <div className="flex flex-col items-start gap-3 text-left">
            {/* Main Heading */}
            <h1 className="w-full text-[#F8F9FA] font-nunito text-[32px] font-bold leading-[40px]">
            Trademark Registration Made Easy: Fast, Accurate, and Powered by AI <span className="animated-gradient text-[32px] font-bold">- Start in 60 Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="w-full text-[rgba(255,255,255,0.77)] font-nunito text-[13px] font-normal leading-[15.6px] max-w-lg">
            AI-powered reports ensure your trademark is unique and legally secure before you apply.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full mt-3">
            <SearchClient />
          </div>

          {/* Counters - Aligned with Search Bar */}
          <div 
            className={`flex flex-row gap-8 w-full mt-8 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Clients */}
            <div className="flex flex-col items-start text-left group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFB703] to-[#e6a602] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative text-2xl lg:text-3xl font-bold text-[#F8F9FA] font-nunito bg-gradient-to-b from-[#FFB703] to-[#F8F9FA] bg-clip-text text-transparent">
                  {formatNumber(counters.clients)}+
                </div>
              </div>
              <div className="text-sm lg:text-base text-[rgba(255,255,255,0.77)] font-nunito font-medium mt-2">
                Client With Us
              </div>
            </div>

            {/* Trademark Registered */}
            <div className="flex flex-col items-start text-left group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFB703] to-[#e6a602] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative text-2xl lg:text-3xl font-bold text-[#F8F9FA] font-nunito bg-gradient-to-b from-[#FFB703] to-[#F8F9FA] bg-clip-text text-transparent">
                  {formatNumber(counters.registered)}+
                </div>
              </div>
              <div className="text-sm lg:text-base text-[rgba(255,255,255,0.77)] font-nunito font-medium mt-2">
                Trademark Registered
              </div>
            </div>

            {/* Trademark Applied */}
            <div className="flex flex-col items-start text-left group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFB703] to-[#e6a602] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative text-2xl lg:text-3xl font-bold text-[#F8F9FA] font-nunito bg-gradient-to-b from-[#FFB703] to-[#F8F9FA] bg-clip-text text-transparent">
                  {formatNumber(counters.applied)}+
                </div>
              </div>
              <div className="text-sm lg:text-base text-[rgba(255,255,255,0.77)] font-nunito font-medium mt-2">
                Trademark Applied
              </div>
            </div>
          </div>
         
        </div>

        {/* Middle Container - Empty space (hidden on mobile) */}
        <div className="hidden lg:block w-1/12"></div>

        {/* Right Container - Diagonal Stat Cards (hidden on mobile) */}
        <div className="hidden lg:flex w-2/5 justify-start items-center pr-8">
          <div className="relative w-full h-[450px]">
            {/* First Card - Top Left */}
            <div 
              className={`absolute top-0 left-8 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <StatCard 
                icon="fa-microchip"
                text="AI-Powered Analysis in 60 Seconds"
              />
            </div>
            
            {/* Second Card - Below Right */}
            <div 
              className={`absolute top-32 right-0 transition-all duration-700 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <StatCard 
                icon="fa-chart-line"
                text="10,000+ Trademarks Checked This Month"
              />
            </div>
            
            {/* Third Card - Below Left */}
            <div 
              className={`absolute bottom-0 left-8 transition-all duration-700 delay-1100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <StatCard 
                icon="fa-circle-check"
                text="95% Success Rate for AI-Approved Names"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo Slider at the bottom - Fixed height */}
      <div className="w-full z-[60] h-[100px] flex items-center mt-10 hidden lg:block">
        <ClientLogoSlider />
      </div>
    </section>
  );
}

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

function StatCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div 
      className="group cursor-default backdrop-blur-md rounded-2xl p-4 sm:p-5 lg:p-6 w-[240px] sm:w-[260px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
        border: '2px solid rgba(110, 94, 147, 0.4)',
        boxShadow: '0 8px 32px rgba(110, 94, 147, 0.3), 0 0 60px rgba(110, 94, 147, 0.15)'
      }}
    >
      <div className="flex flex-col gap-3 sm:gap-3.5 lg:gap-4">
        <div 
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{
            background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.4) 0%, rgba(110, 94, 147, 0.6) 100%)',
            border: '2px solid rgba(110, 94, 147, 0.6)',
            boxShadow: '0 6px 20px rgba(110, 94, 147, 0.5)'
          }}
        >
          <i 
            className={`fa-solid ${icon} text-[#6E5E93] text-xl sm:text-2xl lg:text-2xl`}
            style={{
              textShadow: '0 0 20px rgba(110, 94, 147, 0.9)',
              filter: 'brightness(1.5)'
            }}
          />
        </div>
        <p className="text-white font-nunito text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] font-semibold leading-[20px] sm:leading-[21px] lg:leading-[22px] xl:leading-[23px]">
          {text}
        </p>
      </div>
    </div>
  );
}