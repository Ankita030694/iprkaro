import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchForm {
  trademarkName: string;
  classNumber: string;
  phoneNumber: string;
}

export default function PartnerTrademarkSearchPage() {
  const router = useRouter();

  // Mock user for indexing priority after Clerk removal
  const user = { id: 'partner_user' };
  const isLoaded = true;
  const [searchForm, setSearchForm] = useState<SearchForm>({
    trademarkName: '',
    classNumber: '',
    phoneNumber: ''
  });
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchForm.trademarkName.trim()) {
      setError('Please enter a trademark name');
      return;
    }

    if (!searchForm.classNumber) {
      setError('Please select a class number');
      return;
    }

    const normalizedPhone = searchForm.phoneNumber.trim();
    if (!normalizedPhone) {
      setError('Please enter a mobile number');
      return;
    }

    const phonePattern = /^\+?[1-9]\d{9,14}$/;
    if (!phonePattern.test(normalizedPhone)) {
      setError('Please enter a valid mobile number with country code if applicable');
      return;
    }

    setError(null);
    setIsSearching(true);

    try {
      console.log('Initiating trademark search for:', searchForm);

      // Call the analyze-trademark API
      const response = await fetch('/api/analyze-trademark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trademarkName: searchForm.trademarkName.trim(),
          classNumber: searchForm.classNumber,
          phoneNumber: normalizedPhone,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze trademark');
      }

      const result = await response.json();
      console.log('Search completed successfully:', result);

      // Redirect to dashboard with encoded trademark data
      const trademarkParam = encodeURIComponent(searchForm.trademarkName.trim());
      const classParam = encodeURIComponent(searchForm.classNumber);

      router.push(`/dashboard?trademark=${trademarkParam}&class=${classParam}`);
    } catch (err: any) {
      console.error('Search failed:', err);
      setError(err.message || 'Failed to analyze trademark. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const trademarkClasses = [
    { value: '1', label: 'Class 1 - Chemicals' },
    { value: '2', label: 'Class 2 - Paints' },
    { value: '3', label: 'Class 3 - Cosmetics and cleaning' },
    { value: '4', label: 'Class 4 - Industrial oils' },
    { value: '5', label: 'Class 5 - Pharmaceuticals' },
    { value: '6', label: 'Class 6 - Common metals' },
    { value: '7', label: 'Class 7 - Machines' },
    { value: '8', label: 'Class 8 - Hand tools' },
    { value: '9', label: 'Class 9 - Electronics' },
    { value: '10', label: 'Class 10 - Medical apparatus' },
    { value: '11', label: 'Class 11 - Lighting apparatus' },
    { value: '12', label: 'Class 12 - Vehicles' },
    { value: '13', label: 'Class 13 - Firearms' },
    { value: '14', label: 'Class 14 - Jewelry' },
    { value: '15', label: 'Class 15 - Musical instruments' },
    { value: '16', label: 'Class 16 - Paper goods' },
    { value: '17', label: 'Class 17 - Rubber goods' },
    { value: '18', label: 'Class 18 - Leather goods' },
    { value: '19', label: 'Class 19 - Building materials' },
    { value: '20', label: 'Class 20 - Furniture' },
    { value: '21', label: 'Class 21 - Household utensils' },
    { value: '22', label: 'Class 22 - Ropes and textiles' },
    { value: '23', label: 'Class 23 - Yarns and threads' },
    { value: '24', label: 'Class 24 - Textiles' },
    { value: '25', label: 'Class 25 - Clothing' },
    { value: '26', label: 'Class 26 - Lace and embroidery' },
    { value: '27', label: 'Class 27 - Carpets' },
    { value: '28', label: 'Class 28 - Games and toys' },
    { value: '29', label: 'Class 29 - Meat and processed foods' },
    { value: '30', label: 'Class 30 - Coffee, tea, and baked goods' },
    { value: '31', label: 'Class 31 - Agricultural products' },
    { value: '32', label: 'Class 32 - Beverages' },
    { value: '33', label: 'Class 33 - Alcoholic beverages' },
    { value: '34', label: 'Class 34 - Tobacco products' },
    { value: '35', label: 'Class 35 - Advertising and business' },
    { value: '36', label: 'Class 36 - Financial services' },
    { value: '37', label: 'Class 37 - Construction services' },
    { value: '38', label: 'Class 38 - Telecommunications' },
    { value: '39', label: 'Class 39 - Transportation services' },
    { value: '40', label: 'Class 40 - Treatment of materials' },
    { value: '41', label: 'Class 41 - Education and entertainment' },
    { value: '42', label: 'Class 42 - Scientific and IT services' },
    { value: '43', label: 'Class 43 - Food and accommodation' },
    { value: '44', label: 'Class 44 - Medical services' },
    { value: '45', label: 'Class 45 - Legal and security' },
  ];

  const infoHighlights = [
    {
      icon: 'fa-bolt',
      title: 'AI Analysis in 60 Seconds',
      description: 'Instant registrability scoring with conflict detection before you file.'
    },
    {
      icon: 'fa-layer-group',
      title: '45 Trademark Classes Covered',
      description: 'Comprehensive coverage across every NICE classification in India.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Legal-Ready Reports',
      description: 'Expert-ready reports that streamline attorney review and filings.'
    }
  ];

  const supportBadges = [
    { icon: 'fa-headset', label: 'Partner Success Desk', description: 'Dedicated support for every search', accent: '#00E5CC' },
    { icon: 'fa-file-signature', label: 'Attorney Verified', description: 'Reviews by senior IP attorneys', accent: '#FFB703' },
    { icon: 'fa-lock', label: 'Secure Workspace', description: 'Encrypted and privacy-first data', accent: '#6E5E93' }
  ];

  if (!isLoaded) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom, #0C002B 0%, #160049 50%, #6E5E93 100%)'
        }}
      >
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#FFB703] rounded-full blur-xl opacity-30 animate-pulse" />
            <i className="fas fa-spinner fa-spin text-5xl text-[#FFB703] mb-4 relative" />
          </div>
          <p className="text-white font-nunito text-lg font-medium">Preparing your search workspace...</p>
          <p className="text-white/60 font-nunito text-sm mt-2">Hold on while we get everything ready for you</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-10 py-10"
      style={{
        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 35%, #1a0a3e 75%, #0C002B 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto mt-30">
        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB703] to-[#6E5E93] rounded-full blur-3xl opacity-20" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em] text-white/70 font-nunito"
              style={{ background: 'rgba(110, 94, 147, 0.25)', border: '1px solid rgba(110, 94, 147, 0.4)' }}>
              <i className="fas fa-compass text-[#FFB703]" />
              Partner Search Suite
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-nunito bg-gradient-to-r from-[#FFB703] via-white to-[#6E5E93] bg-clip-text text-transparent mb-4">
            AI Trademark Intelligence
          </h1>
          <p className="text-white/70 font-nunito text-base max-w-2xl">
            Execute industry-grade trademark searches with AI-backed insights, legal-aligned scoring, and a secure workspace built for partner teams.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          {/* Search Form */}
          <div
            className={`backdrop-blur-2xl rounded-3xl p-8 transition-all duration-700 delay-250 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(22, 0, 73, 0.65) 0%, rgba(20, 0, 60, 0.85) 100%)',
              border: '2px solid rgba(110, 94, 147, 0.35)',
              boxShadow: '0 18px 50px rgba(12, 0, 43, 0.45)'
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/60 font-nunito text-xs uppercase tracking-[0.3em]">Launch Search</p>
                <h2 className="text-white font-nunito text-2xl font-bold mt-2">Trademark Search Workspace</h2>
              </div>
              <div
                className="hidden sm:flex flex-col items-end text-right px-4 py-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.25) 100%)',
                  border: '1px solid rgba(255, 183, 3, 0.3)'
                }}
              >
                <span className="text-[#FFB703] font-nunito text-xs uppercase tracking-[0.3em]">Live Status</span>
                <span className="text-white font-nunito text-sm font-semibold mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5CC] animate-pulse" />
                  Ready to analyze
                </span>
              </div>
            </div>

            <form onSubmit={handleSearch} className="space-y-7">
              {/* Trademark Name */}
              <div className="group">
                <label className="block text-white font-nunito text-sm font-semibold mb-3 flex items-center gap-2">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-[#FFB703]"
                    style={{
                      background: 'rgba(255, 183, 3, 0.1)',
                      border: '1px solid rgba(255, 183, 3, 0.25)'
                    }}
                  >
                    <i className="fas fa-trademark" />
                  </span>
                  Trademark Name<span className="text-[#FFB703]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="trademarkName"
                    value={searchForm.trademarkName}
                    onChange={handleInputChange}
                    placeholder="e.g. StellarBloom"
                    required
                    disabled={isSearching}
                    className="w-full px-4 py-3.5 text-sm rounded-2xl border-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] font-nunito transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'rgba(22, 0, 73, 0.55)',
                      borderColor: 'rgba(110, 94, 147, 0.35)'
                    }}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                    <i className="fas fa-pen" />
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-2 font-nunito">
                  Use the exact brand name you intend to register. Avoid special characters unless they are part of the mark.
                </p>
              </div>

              {/* Class Number */}
              <div className="group">
                <label className="block text-white font-nunito text-sm font-semibold mb-3 flex items-center gap-2">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-[#00E5CC]"
                    style={{
                      background: 'rgba(0, 229, 204, 0.12)',
                      border: '1px solid rgba(0, 229, 204, 0.25)'
                    }}
                  >
                    <i className="fas fa-layer-group" />
                  </span>
                  Trademark Class<span className="text-[#FFB703]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="classNumber"
                    value={searchForm.classNumber}
                    onChange={handleInputChange}
                    required
                    disabled={isSearching}
                    className="w-full px-4 py-3.5 text-sm rounded-2xl border-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] font-nunito transition-all appearance-none cursor-pointer"
                    style={{
                      background: 'rgba(22, 0, 73, 0.55)',
                      borderColor: 'rgba(110, 94, 147, 0.35)'
                    }}
                  >
                    <option value="" className="bg-[#160049] text-white">Select a class</option>
                    {trademarkClasses.map((cls) => (
                      <option key={cls.value} value={cls.value} className="bg-[#160049] text-white">
                        {cls.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none flex flex-col items-center gap-1">
                    <i className="fas fa-chevron-up text-xs" />
                    <i className="fas fa-chevron-down text-xs -mt-1" />
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-2 font-nunito">
                  Unsure about classes? Choose the closest match—our AI will suggest adjacent classes to review during analysis.
                </p>
              </div>

              {/* Mobile Number */}
              <div className="group">
                <label className="block text-white font-nunito text-sm font-semibold mb-3 flex items-center gap-2">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[#00E5CC]"
                    style={{
                      background: 'rgba(0, 229, 204, 0.12)',
                      border: '1px solid rgba(0, 229, 204, 0.25)'
                    }}
                  >
                    <i className="fas fa-phone" />
                  </span>
                  Mobile Number<span className="text-[#FFB703]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={searchForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                    disabled={isSearching}
                    className="w-full px-4 py-3.5 text-sm rounded-2xl border-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] font-nunito transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'rgba(22, 0, 73, 0.55)',
                      borderColor: 'rgba(110, 94, 147, 0.35)'
                    }}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                    <i className="fas fa-mobile-screen-button" />
                  </div>
                </div>
                <p className="text-red-500 text-xs mt-2 font-nunito">
                  Enter the phone number of the person for which you are searching the trademark. Use the full international format for uniqueness.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div
                  className="rounded-2xl p-4 border-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(209, 67, 67, 0.1) 0%, rgba(209, 67, 67, 0.18) 100%)',
                    borderColor: 'rgba(209, 67, 67, 0.35)'
                  }}
                >
                  <p className="text-red-200 font-nunito text-sm flex items-center gap-2">
                    <i className="fas fa-triangle-exclamation" />
                    {error}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => router.push('/partners/searchResults')}
                  disabled={isSearching}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-nunito font-semibold text-white rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'rgba(110, 94, 147, 0.25)',
                    border: '1px solid rgba(110, 94, 147, 0.35)'
                  }}
                >
                  <i className="fas fa-history group-hover:scale-110 transition-transform" />
                  View History
                </button>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-nunito font-semibold text-[#0C002B] rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#FFB703]/40"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703 0%, #FFC107 100%)',
                    border: '1px solid rgba(255, 183, 3, 0.5)'
                  }}
                >
                  {isSearching ? (
                    <>
                      <i className="fas fa-spinner fa-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-search" />
                      Search Trademark
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Support Column */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div
              className="backdrop-blur-2xl rounded-3xl p-7"
              style={{
                background: 'linear-gradient(160deg, rgba(110, 94, 147, 0.2) 0%, rgba(12, 0, 43, 0.8) 100%)',
                border: '2px solid rgba(110, 94, 147, 0.35)',
                boxShadow: '0 12px 40px rgba(110, 94, 147, 0.3)'
              }}
            >
              <h3 className="text-white font-nunito text-lg font-semibold mb-4">Search Confidence Stack</h3>
              <p className="text-white/65 font-nunito text-sm leading-relaxed mb-6">
                Your workspace automatically stores every search run, connects with detailed dashboards, and aligns with partner review workflows.
              </p>
              <div className="space-y-4">
                {supportBadges.map((badge, index) => (
                  <div
                    key={badge.label}
                    className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
                    style={{
                      border: '1px solid rgba(110, 94, 147, 0.25)',
                      animationDelay: `${index * 120}ms`
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${badge.accent}33 0%, ${badge.accent}55 100%)`,
                        border: `1px solid ${badge.accent}55`
                      }}
                    >
                      <i className={`fas ${badge.icon} text-white text-base`} />
                    </div>
                    <div>
                      <p className="text-white font-nunito text-sm font-semibold">{badge.label}</p>
                      <p className="text-white/60 font-nunito text-xs mt-1">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}

