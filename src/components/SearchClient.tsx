'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchClient() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [trademarkClass, setTrademarkClass] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTrademarkClass(e.target.value);
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
              onKeyDown={handleKeyPress}
              placeholder="Enter trademark name"
              className="w-full px-4 lg:px-6 py-3 rounded-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] placeholder-[rgba(248,249,250,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-[14px] lg:text-[16px] font-nunito"
              disabled={isSubmitting}
            />
          </div>

          {/* Trademark Class Dropdown */}
          <div className="relative lg:w-48">
            <select
              value={trademarkClass}
              onChange={handleClassChange}
              className="w-full px-4 lg:px-6 py-3 rounded-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-[14px] lg:text-[16px] font-nunito appearance-none cursor-pointer"
              disabled={isSubmitting}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23F8F9FA' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 12px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px'
              }}
            >
              <option value="" className="bg-[#0C002B] text-white">Select Class</option>
              <option value="1" className="bg-[#0C002B] text-white">Class 1 - Chemicals</option>
              <option value="2" className="bg-[#0C002B] text-white">Class 2 - Paints</option>
              <option value="3" className="bg-[#0C002B] text-white">Class 3 - Cosmetics & Cleaning Products</option>
              <option value="4" className="bg-[#0C002B] text-white">Class 4 - Fuels & Industrial Oils</option>
              <option value="5" className="bg-[#0C002B] text-white">Class 5 - Pharmaceuticals & Medical Supplies</option>
              <option value="6" className="bg-[#0C002B] text-white">Class 6 - Metals & Metal Goods</option>
              <option value="7" className="bg-[#0C002B] text-white">Class 7 - Machinery</option>
              <option value="8" className="bg-[#0C002B] text-white">Class 8 - Hand Tools</option>
              <option value="9" className="bg-[#0C002B] text-white">Class 9 - Electronics & Software</option>
              <option value="10" className="bg-[#0C002B] text-white">Class 10 - Medical Instruments</option>
              <option value="11" className="bg-[#0C002B] text-white">Class 11 - Appliances (Lighting, Heating, Plumbing)</option>
              <option value="12" className="bg-[#0C002B] text-white">Class 12 - Vehicles</option>
              <option value="13" className="bg-[#0C002B] text-white">Class 13 - Firearms & Explosives</option>
              <option value="14" className="bg-[#0C002B] text-white">Class 14 - Jewelry & Precious Metals</option>
              <option value="15" className="bg-[#0C002B] text-white">Class 15 - Musical Instruments</option>
              <option value="16" className="bg-[#0C002B] text-white">Class 16 - Paper & Stationery</option>
              <option value="17" className="bg-[#0C002B] text-white">Class 17 - Rubber & Plastics</option>
              <option value="18" className="bg-[#0C002B] text-white">Class 18 - Leather Goods & Bags</option>
              <option value="19" className="bg-[#0C002B] text-white">Class 19 - Building Materials (Non-Metallic)</option>
              <option value="20" className="bg-[#0C002B] text-white">Class 20 - Furniture</option>
              <option value="21" className="bg-[#0C002B] text-white">Class 21 - Household Utensils & Kitchenware</option>
              <option value="22" className="bg-[#0C002B] text-white">Class 22 - Ropes, Nets & Sacks</option>
              <option value="23" className="bg-[#0C002B] text-white">Class 23 - Yarns & Threads</option>
              <option value="24" className="bg-[#0C002B] text-white">Class 24 - Fabrics & Textiles</option>
              <option value="25" className="bg-[#0C002B] text-white">Class 25 - Clothing, Footwear & Headgear</option>
              <option value="26" className="bg-[#0C002B] text-white">Class 26 - Lace, Embroidery & Accessories</option>
              <option value="27" className="bg-[#0C002B] text-white">Class 27 - Carpets & Floor Coverings</option>
              <option value="28" className="bg-[#0C002B] text-white">Class 28 - Toys, Games & Sporting Goods</option>
              <option value="29" className="bg-[#0C002B] text-white">Class 29 - Foodstuffs (Meat, Fish, Dairy, Preserves)</option>
              <option value="30" className="bg-[#0C002B] text-white">Class 30 - Foodstuffs (Staples: Coffee, Tea, Flour, Spices)</option>
              <option value="31" className="bg-[#0C002B] text-white">Class 31 - Agricultural Products (Fresh Fruits, Vegetables, Grains)</option>
              <option value="32" className="bg-[#0C002B] text-white">Class 32 - Beers & Non-Alcoholic Beverages</option>
              <option value="33" className="bg-[#0C002B] text-white">Class 33 - Alcoholic Beverages (Except Beer)</option>
              <option value="34" className="bg-[#0C002B] text-white">Class 34 - Tobacco, Smokers' Articles & Matches</option>
              <option value="35" className="bg-[#0C002B] text-white">Class 35 - Business & Management Services</option>
              <option value="36" className="bg-[#0C002B] text-white">Class 36 - Financial & Insurance Services</option>
              <option value="37" className="bg-[#0C002B] text-white">Class 37 - Construction & Repair Services</option>
              <option value="38" className="bg-[#0C002B] text-white">Class 38 - Telecommunications Services</option>
              <option value="39" className="bg-[#0C002B] text-white">Class 39 - Transport & Storage Services</option>
              <option value="40" className="bg-[#0C002B] text-white">Class 40 - Treatment of Materials (Manufacturing, Processing)</option>
              <option value="41" className="bg-[#0C002B] text-white">Class 41 - Education & Training Services</option>
              <option value="42" className="bg-[#0C002B] text-white">Class 42 - Scientific & IT Services (Technology, Software, Research)</option>
              <option value="43" className="bg-[#0C002B] text-white">Class 43 - Hospitality (Restaurants, Hotels, Catering)</option>
              <option value="44" className="bg-[#0C002B] text-white">Class 44 - Medical & Veterinary Services</option>
              <option value="45" className="bg-[#0C002B] text-white">Class 45 - Legal & Security Services</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={() => void handleSearch()}
            disabled={isSubmitting}
            className={`px-6 lg:px-10 py-3 rounded-[15px] transition-colors duration-300 text-[#170154] font-nunito font-semibold text-sm lg:text-base whitespace-nowrap ${
              isSubmitting
                ? 'bg-[#e6a602] opacity-70 cursor-not-allowed'
                : 'bg-[#FFB703] hover:bg-[#e6a602]'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-spinner fa-spin text-xs"></i>
                Generating...
              </span>
            ) : (
              'Search'
            )}
          </button>
        </div>

        {error && (
          <p className="mt-3 text-sm text-red-200 font-nunito" role="alert">
            {error}
          </p>
        )}
      </div>

      {/* Trademark Counter */}
      {/* <div className="w-full flex justify-start">
        <TrademarkCounter />
      </div> */}
    </>
  );
}
