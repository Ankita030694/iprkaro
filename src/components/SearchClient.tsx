'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchClient() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [trademarkClass, setTrademarkClass] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Redirect to form page with URL parameters
      const params = new URLSearchParams({
        trademark: searchTerm.trim(),
        class: trademarkClass.trim()
      });
      router.push(`/form?${params.toString()}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty string for deletion
    if (value === '') {
      setTrademarkClass('');
      return;
    }
    
    // Only allow numbers
    if (!/^\d+$/.test(value)) {
      return;
    }
    
    // Convert to number and check range
    const numValue = parseInt(value, 10);
    
    // Allow values between 1-45
    if (numValue >= 1 && numValue <= 45) {
      setTrademarkClass(value);
    } else if (numValue > 45) {
      // If trying to enter more than 45, cap at 45
      setTrademarkClass('45');
    }
    // If less than 1, allow the input to continue (user might be typing 1, 2, etc.)
    else if (value.length <= 2) {
      setTrademarkClass(value);
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div className="w-full max-w-2xl lg:max-w-2xl relative mt-4 lg:mt-7 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          {/* Trademark Name Input */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter trademark name"
              className="w-full px-4 lg:px-6 py-3 rounded-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] placeholder-[rgba(248,249,250,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-[14px] lg:text-[16px] font-nunito"
            />
          </div>

          {/* Trademark Class Input */}
          <div className="relative lg:w-48">
            <input
              type="text"
              value={trademarkClass}
              onChange={handleClassChange}
              onKeyPress={handleKeyPress}
              placeholder="Class (1-45)"
              className="w-full px-4 lg:px-6 py-3 rounded-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] placeholder-[rgba(248,249,250,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-[14px] lg:text-[16px] font-nunito"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="px-6 lg:px-10 py-3 rounded-[15px] bg-[#FFB703] hover:bg-[#e6a602] transition-colors duration-300 text-[#170154] font-nunito font-semibold text-sm lg:text-base whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>

      {/* Trademark Counter */}
      {/* <div className="w-full flex justify-start">
        <TrademarkCounter />
      </div> */}
    </>
  );
}
