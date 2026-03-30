'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const TRADEMARK_CLASSES = [
  { number: 1, name: 'Chemicals' },
  { number: 2, name: 'Paints' },
  { number: 3, name: 'Cosmetics & Cleaning Products' },
  { number: 4, name: 'Fuels & Industrial Oils' },
  { number: 5, name: 'Pharmaceuticals & Medical Supplies' },
  { number: 6, name: 'Metals & Metal Goods' },
  { number: 7, name: 'Machinery' },
  { number: 8, name: 'Hand Tools' },
  { number: 9, name: 'Electronics & Software' },
  { number: 10, name: 'Medical Instruments' },
  { number: 11, name: 'Appliances (Lighting, Heating, Plumbing)' },
  { number: 12, name: 'Vehicles' },
  { number: 13, name: 'Firearms & Explosives' },
  { number: 14, name: 'Jewelry & Precious Metals' },
  { number: 15, name: 'Musical Instruments' },
  { number: 16, name: 'Paper & Stationery' },
  { number: 17, name: 'Rubber & Plastics' },
  { number: 18, name: 'Leather Goods & Bags' },
  { number: 19, name: 'Building Materials (Non-Metallic)' },
  { number: 20, name: 'Furniture' },
  { number: 21, name: 'Household Utensils & Kitchenware' },
  { number: 22, name: 'Ropes, Nets & Sacks' },
  { number: 23, name: 'Yarns & Threads' },
  { number: 24, name: 'Fabrics & Textiles' },
  { number: 25, name: 'Clothing, Footwear & Headgear' },
  { number: 26, name: 'Lace, Embroidery & Accessories' },
  { number: 27, name: 'Carpets & Floor Coverings' },
  { number: 28, name: 'Toys, Games & Sporting Goods' },
  { number: 29, name: 'Foodstuffs (Meat, Fish, Dairy, Preserves)' },
  { number: 30, name: 'Foodstuffs (Staples: Coffee, Tea, Flour, Spices)' },
  { number: 31, name: 'Agricultural Products (Fresh Fruits, Vegetables, Grains)' },
  { number: 32, name: 'Beers & Non-Alcoholic Beverages' },
  { number: 33, name: 'Alcoholic Beverages (Except Beer)' },
  { number: 34, name: 'Tobacco, Smokers\' Articles & Matches' },
  { number: 35, name: 'Business & Management Services' },
  { number: 36, name: 'Financial & Insurance Services' },
  { number: 37, name: 'Construction & Repair Services' },
  { number: 38, name: 'Telecommunications Services' },
  { number: 39, name: 'Transport & Storage Services' },
  { number: 40, name: 'Treatment of Materials (Manufacturing, Processing)' },
  { number: 41, name: 'Education & Training Services' },
  { number: 42, name: 'Scientific & IT Services (Technology, Software, Research)' },
  { number: 43, name: 'Hospitality (Restaurants, Hotels, Catering)' },
  { number: 44, name: 'Medical & Veterinary Services' },
  { number: 45, name: 'Legal & Security Services' }
];

export default function SearchClient({ 
  variant = 'light',
  onDropdownToggle 
}: { 
  variant?: 'light' | 'dark',
  onDropdownToggle?: (isOpen: boolean) => void
}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [trademarkClass, setTrademarkClass] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    onDropdownToggle?.(isDropdownOpen);
  }, [isDropdownOpen, onDropdownToggle]);

  const handleSearch = async () => {
    const normalizedTrademark = searchTerm.trim();
    const normalizedClass = trademarkClass.trim();

    if (!normalizedTrademark) {
      setError('Enter a trademark name to analyze.');
      return;
    }

    if (!normalizedClass) {
      setError('Select a trademark class to continue.');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const params = new URLSearchParams({
        trademark: normalizedTrademark.toLowerCase(),
        class: normalizedClass
      });

      router.push(`/form?${params.toString()}`);
    } catch (err) {
      console.error('Error redirecting to form', err);
      setError('Something went wrong while redirecting. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      void handleSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClassSelect = (value: string) => {
    setTrademarkClass(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col items-center relative z-20">
      <div className="w-full rounded-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-white/10 relative">

        {/* ── MOBILE: input+select row ── DESKTOP: single flex row with button ── */}
        <div className={`rounded-t-[12px] ${variant === 'dark' ? 'bg-[#2D2D2D]' : 'bg-white'}`}>

          {/* Row 1 on mobile: Input + Select side by side | Row 1 on desktop: Input + Select + Button */}
          <div className="flex items-center p-2 gap-1.5">
            <div className="flex-1 flex items-center px-3">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter your brand name"
                className={`w-full bg-transparent border-none focus:outline-none text-[14px] md:text-[16px] lg:text-[17px] font-medium placeholder-[#9CA3AF] my-2 md:my-0 ${
                  variant === 'dark' ? 'text-white' : 'text-[#0C002B]'
                }`}
                disabled={isSubmitting}
              />
            </div>

            {/* Vertical Divider */}
            <div className={`h-6 w-px flex-shrink-0 ${variant === 'dark' ? 'bg-white/20' : 'bg-gray-200'}`}></div>

            <div className="relative flex-shrink-0 px-3 md:px-4" ref={dropdownRef}>
              {/* Native Select Overlay for Mobile */}
              <select
                className="md:hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                value={trademarkClass}
                onChange={(e) => handleClassSelect(e.target.value)}
                disabled={isSubmitting}
                aria-label="Select Trademark Class"
              >
                <option value="" disabled>Select Class</option>
                {TRADEMARK_CLASSES.map((tmClass) => (
                  <option key={tmClass.number} value={tmClass.number.toString()}>
                    Class {tmClass.number} - {tmClass.name}
                  </option>
                ))}
              </select>

              {/* Visual Trigger */}
              <div 
                onClick={() => !isSubmitting && setIsDropdownOpen(!isDropdownOpen)}
                className={`w-[110px] md:w-[130px] h-full flex items-center justify-between gap-1 text-[13px] font-medium cursor-pointer transition-all duration-200 py-2 ${
                  variant === 'dark' ? 'text-white' : 'text-[#0C002B]'
                }`}
              >
                <span className="truncate">
                  {trademarkClass ? `Class ${trademarkClass}` : 'Select Class'}
                </span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Custom Dropdown Menu (Desktop Only) */}
              {isDropdownOpen && (
                <div className="hidden md:block absolute bottom-[calc(100%+12px)] left-0 md:left-auto md:right-0 w-[280px] md:w-[320px] bg-white rounded-xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[60] animate-in fade-in slide-in-from-bottom-2 duration-200 text-left">
                  <div className="bg-[#1345C3] px-4 py-2.5">
                    <span className="text-white text-[10px] font-bold">Select Class</span>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                    {TRADEMARK_CLASSES.map((tmClass) => (
                      <div 
                        key={tmClass.number}
                        onClick={() => handleClassSelect(tmClass.number.toString())}
                        className={`px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors flex flex-col gap-0.5 border-b border-gray-50 last:border-0 ${
                          trademarkClass === tmClass.number.toString() ? 'bg-blue-50/50' : ''
                        }`}
                      >
                        <span className="text-[#1345C3] font-bold text-[14px]">
                          Class {tmClass.number} - {tmClass.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop-only inline button */}
            <button
              onClick={() => void handleSearch()}
              disabled={isSubmitting}
              className={`hidden md:block px-5 md:px-6 py-2.5 rounded-[10px] font-semibold text-[13px] transition-all duration-300 active:scale-[0.98] whitespace-nowrap ${
                variant === 'dark' 
                  ? 'bg-white text-[#0C002B] hover:bg-white/90 shadow-lg' 
                  : 'bg-[#0C002B] text-white hover:bg-[#1A0B42]'
              }`}
            >
              {isSubmitting ? 'Generating...' : 'Generate Free Report'}
            </button>
          </div>


        </div>

        {/* Bottom Row: Trust Badges */}
        <div className={`rounded-b-[12px] ${variant === 'dark' ? 'bg-[#191919]' : 'bg-white/20 backdrop-blur-[20px] saturate-150 shadow-inner'} px-5 md:px-8 py-0.5 md:py-2.5 flex flex-wrap items-center justify-center md:justify-between gap-3 border-t border-white/5 overflow-hidden`}>
          <div className="flex items-center gap-3">
            {/* Google Logo */}
            <div className="flex items-center text-[23px] font-bold tracking-tighter" style={{ fontFamily: 'Product Sans, sans-serif' }}>
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>

            {/* 5 Stars */}
            <div className="flex items-center gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-[15px] h-[15px] text-[#FBBF24] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className={`${variant === 'dark' ? 'text-white' : 'text-[#374151]'} font-medium text-[15px]`}>
            1,000+ founders trust us on <span className={variant === 'dark' ? 'text-[#FFB703]' : 'text-[#0C002B] font-bold'}>Google</span>
          </div>
        </div>
      </div>
      
      {/* Separate Mobile Button */}
      <div className="w-full md:hidden mt-4">
        <button
          onClick={() => void handleSearch()}
          disabled={isSubmitting}
          className={`w-full py-4 rounded-[12px] font-bold text-[16px] transition-all duration-300 active:scale-[0.98] shadow-lg ${
            variant === 'dark' 
              ? 'bg-white text-[#0C002B] hover:bg-white/90 shadow-white/10' 
              : 'bg-[#0C002B] text-white hover:bg-[#1A0B42] shadow-[#0C002B]/20'
          }`}
        >
          {isSubmitting ? 'Generating...' : 'Generate Free Report'}
        </button>
      </div>

      {error && (
        <div className="mt-4 bg-red-50 text-red-600 px-4 py-2 rounded-lg text-[14px] font-medium border border-red-100 flex items-center gap-2 max-w-md animate-bounce">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
