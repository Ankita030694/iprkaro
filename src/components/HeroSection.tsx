'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const SearchClient = dynamic(() => import('./SearchClient'));

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[72vh] flex flex-col items-center justify-center pt-[175px] md:pt-[140px] pb-10 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero/bg.mp4" type="video/mp4" />
        </video>
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
        {/* Bottom fade out gradient */}
        <div className="absolute inset-x-0 bottom-[-1px] h-48 bg-gradient-to-t from-white via-white/80 to-white/0"></div>
      </div>

      <div className={`relative ${isDropdownOpen ? 'z-[110]' : 'z-10'} container mx-auto px-4 flex flex-col items-center text-center transition-all duration-300`}>
        {/* Main Heading */}
        <h1 
          className={`max-w-[800px] text-[#0C002B] font-nunito text-[32px] md:text-[42px] lg:text-[54px] font-bold leading-[1.1] mb-3 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          Step into the future of brand protection:<br className="md:hidden"/> <span className="text-[#1952C7]">Fast</span> <span className="text-[#0C002B] font-normal">+</span> <span className="text-[#009B7C]">Secure</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`max-w-[500px] text-[#6B7280] py-4 md:py-0 font-nunito text-[16px] md:text-[16px] font-medium leading-[1.4] mb-8 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Protect your ideas, secure your brand, and stay ahead <br className="hidden md:block" />
          with a simple, all-in-one IP platform.
        </p>

        {/* Search Bar Component */}
        <div 
          className={`w-full max-w-[700px] transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isDropdownOpen ? 'relative z-[110]' : ''}`}
        >
          <SearchClient onDropdownToggle={setIsDropdownOpen} />
        </div>

        {/* Secondary Headline (Bottom) */}
        <div 
          className={`mt-12 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          
        </div>
      </div>
    </section>
  );
}