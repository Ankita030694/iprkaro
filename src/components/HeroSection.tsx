'use client';
import AILogo from './AILogo';
import TrademarkSearchPopup from './TrademarkSearchPopup';
import { useState } from 'react';
import Image from 'next/image';
import ClientLogoSlider from './ClientLogoSlider';

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setIsPopupOpen(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col justify-center items-center rounded-b-[40px]">
        {/* Background using iprhero.svg */}
        <div className="absolute inset-0">
          <Image 
            src="/figmacomp/iprhero.svg" 
            alt="Background" 
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      
      {/* Main Content Section - Three Column Layout */}
      <div className="flex w-full h-full z-10">
        {/* Left Container - Content */}
        <div className="w-3/5 flex flex-col justify-center items-start pl-20">
          <div className="flex flex-col items-start gap-5">
          {/* Main Heading */}
            <h1 className="w-full text-[#F8F9FA] text-left font-nunito text-[45px] font-bold leading-[50px]">
            AI-Powered Trademark Search &<br />
            Registration – <span className="animated-gradient text-[40px] font-bold">Start in 60 Seconds</span>
          </h1>

          {/* Subtitle */}
            <p className="w-full text-[rgba(255,255,255,0.77)] text-left font-nunito text-[13px] font-normal leading-[15.6px] max-w-lg">
            AI-powered search, risk check & filing – all in one place. Protect your brand name<br />
            in minutes with iprkaro.com.
          </p>
        </div>

        {/* Search Bar */}
          <div className="w-full max-w-2xl relative mt-7">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search your trademark availability here"
              className="w-full px-6 py-3 pr-14 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] placeholder-[rgba(248,249,250,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-[16px] font-nunito"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 px-8 py-2 rounded-[20px] bg-[#FFB703] hover:bg-[#e6a602] transition-colors duration-300 text-[#170154] font-nunito font-semibold text-sm"
            >
              Search
            </button>
          </div>
        </div>
      </div>

        {/* Middle Container - Empty space */}
        <div className="w-1/4"></div>

        {/* Right Container - Hero Dashboard Image */}
        <div className="w-1/3 flex justify-end items-center pr-0">
          <div className="relative">
            <Image 
              src="/figmacomp/herodash.svg"
              alt="Hero Dashboard"
              width={2140}
              height={2280}
              className="h-[570px] w-auto object-contain"
              priority
              quality={100}
              unoptimized={false}
            />
          </div>
        </div>

      </div>
      <ClientLogoSlider />


      {/* Original Image Section - Keeping for reference */}
      {/* <div className="flex flex-col items-center gap-8">
        <Image src="/figmacomp/heroart.svg" alt="Hero Image" width={1000} height={1000} className='w-300 h-80 object-contain' />
      </div> */}


      {/* Trademark Search Popup */}
      <TrademarkSearchPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        searchTerm={searchTerm}
      />
     
    </section>
  );
}
