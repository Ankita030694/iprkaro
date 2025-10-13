'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const TrademarkSearchPopup = dynamic(() => import('./TrademarkSearchPopup'), { ssr: false });
const TrademarkCounter = dynamic(() => import('./TrademarkCounter'), { ssr: false });

export default function SearchClient() {
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
    <>
      {/* Search Bar */}
      <div className="w-full max-w-2xl lg:max-w-2xl relative mt-4 lg:mt-7 px-4 lg:px-0">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search your trademark registration availability instantly"
            className="w-full px-4 lg:px-6 py-3 pr-20 lg:pr-14 rounded-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] placeholder-[rgba(248,249,250,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-[14px] lg:text-[16px] font-nunito"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 px-4 lg:px-8 py-2 rounded-[15px] bg-[#FFB703] hover:bg-[#e6a602] transition-colors duration-300 text-[#170154] font-nunito font-semibold text-xs lg:text-sm"
          >
            Search
          </button>
        </div>
      </div>

      {/* Trademark Counter */}
      {/* <div className="w-full flex justify-start">
        <TrademarkCounter />
      </div> */}

      {/* Trademark Search Popup */}
      <TrademarkSearchPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        searchTerm={searchTerm}
      />
    </>
  );
}
