'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import {
  Timestamp,
  collection,
  getDocs,
  orderBy,
  query as buildQuery
} from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface TrademarkSearchResult {
  id: string;
  trademarkName: string;
  classNumber: string;
  registrabilityScore: number;
  registrabilityReasoning?: string;
  similarityScore: number;
  similarityReasoning?: string;
  classFitScore: number;
  classFitReasoning?: string;
  overallHealth: string;
  createdAt?: Timestamp;
  lastUpdated?: Timestamp;
}

interface NewSearchForm {
  trademarkName: string;
  classNumber: string;
}

const SCORE_COLORS = {
  success: 'text-emerald-500',
  warning: 'text-amber-500',
  danger: 'text-red-500'
};

const pickScoreColor = (score: number, reverse = false) => {
  if (reverse) {
    if (score >= 80) return SCORE_COLORS.danger;
    if (score >= 60) return SCORE_COLORS.warning;
    return SCORE_COLORS.success;
  }
  if (score >= 80) return SCORE_COLORS.success;
  if (score >= 60) return SCORE_COLORS.warning;
  return SCORE_COLORS.danger;
};

const formatTimestamp = (timestamp?: Timestamp) => {
  if (!timestamp) return 'N/A';
  const date = timestamp.toDate();
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata'
  }).format(date);
};

const getHealthBadgeClasses = (health?: string) => {
  const normalized = (health || '').toLowerCase();
  switch (normalized) {
    case 'good':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'medium':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'poor':
      return 'bg-red-50 text-red-700 border-red-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

export default function AuthorityTrademarkSearchPage() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<TrademarkSearchResult[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [filterHealth, setFilterHealth] = useState('all');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [authLoading, setAuthLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // New search form state
  const [newSearch, setNewSearch] = useState<NewSearchForm>({
    trademarkName: '',
    classNumber: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState<string | null>(null);

  const fetchResults = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const resultsQuery = buildQuery(
        collection(db, 'searchResults'),
        orderBy('createdAt', 'desc')
      );

      const snapshot = await getDocs(resultsQuery);
      const fetched: TrademarkSearchResult[] = [];

      snapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data();
        fetched.push({
          id: docSnapshot.id,
          trademarkName: typeof data.trademarkName === 'string' ? data.trademarkName : '',
          classNumber: data.classNumber !== undefined ? String(data.classNumber) : 'N/A',
          registrabilityScore: typeof data.registrabilityScore === 'number' ? data.registrabilityScore : 0,
          registrabilityReasoning: typeof data.registrabilityReasoning === 'string' ? data.registrabilityReasoning : undefined,
          similarityScore: typeof data.similarityScore === 'number' ? data.similarityScore : 0,
          similarityReasoning: typeof data.similarityReasoning === 'string' ? data.similarityReasoning : undefined,
          classFitScore: typeof data.classFitScore === 'number' ? data.classFitScore : 0,
          classFitReasoning: typeof data.classFitReasoning === 'string' ? data.classFitReasoning : undefined,
          overallHealth: typeof data.overallHealth === 'string' ? data.overallHealth : 'N/A',
          createdAt: data.createdAt as Timestamp | undefined,
          lastUpdated: data.lastUpdated as Timestamp | undefined
        });
      });

      setSearchResults(fetched);
    } catch (err) {
      console.error('Failed to fetch trademark search results', err);
      setError('Unable to load trademark history. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleGenerateReport = async () => {
    const normalizedTrademark = newSearch.trademarkName.trim();
    const normalizedClass = newSearch.classNumber.trim();

    if (!normalizedTrademark) {
      setGenerateError('Enter a trademark name to analyze.');
      return;
    }

    if (!normalizedClass) {
      setGenerateError('Select a trademark class to continue.');
      return;
    }

    try {
      setIsGenerating(true);
      setGenerateError(null);

      const response = await fetch('/api/analyze-trademark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trademarkName: normalizedTrademark,
          classNumber: normalizedClass
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const message =
          errorData?.details ||
          errorData?.error ||
          'Unable to generate the trademark report. Please try again.';
        setGenerateError(message);
        setIsGenerating(false);
        return;
      }

      // Redirect to dashboard with the new report
      router.push(
        `/dashboard?trademark=${encodeURIComponent(
          normalizedTrademark.toLowerCase()
        )}&class=${encodeURIComponent(normalizedClass)}`
      );
    } catch (err) {
      console.error('Error generating trademark report', err);
      setGenerateError('Something went wrong while generating the report. Please try again.');
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/nullify');
      } else {
        setAuthLoading(false);
        fetchResults();
      }
    });

    return () => unsubscribe();
  }, [fetchResults, router]);

  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);

  const uniqueClasses = useMemo(() => {
    const classes = new Set<string>();
    searchResults.forEach((result) => {
      if (result.classNumber) {
        classes.add(result.classNumber);
      }
    });
    return ['all', ...Array.from(classes).sort((a, b) => Number(a) - Number(b))];
  }, [searchResults]);

  const healthOptions = ['all', 'Good', 'Medium', 'Poor'];

  const filteredResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return searchResults.filter((result) => {
      const matchesSearch = term ? result.trademarkName.toLowerCase().includes(term) : true;
      const matchesClass = filterClass === 'all' || result.classNumber === filterClass;
      const matchesHealth =
        filterHealth === 'all' ||
        (result.overallHealth || '').toLowerCase() === filterHealth.toLowerCase();

      let matchesDateRange = true;
      if (result.createdAt) {
        const resultDate = result.createdAt.toDate();
        const normalizedDate = new Date(
          resultDate.getFullYear(),
          resultDate.getMonth(),
          resultDate.getDate()
        );

        if (fromDate) {
          const from = new Date(fromDate);
          from.setHours(0, 0, 0, 0);
          if (normalizedDate < from) matchesDateRange = false;
        }

        if (toDate) {
          const to = new Date(toDate);
          to.setHours(23, 59, 59, 999);
          if (normalizedDate > to) matchesDateRange = false;
        }
      }

      return matchesSearch && matchesClass && matchesHealth && matchesDateRange;
    });
  }, [filterClass, filterHealth, fromDate, searchResults, searchTerm, toDate]);

  const groupedResults = useMemo(() => {
    return filteredResults.reduce((acc, result) => {
      const key = result.trademarkName || 'Untitled Trademark';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(result);
      return acc;
    }, {} as Record<string, TrademarkSearchResult[]>);
  }, [filteredResults]);

  const totalGood = searchResults.filter((result) => result.overallHealth === 'Good').length;
  const totalMedium = searchResults.filter((result) => result.overallHealth === 'Medium').length;
  const totalPoor = searchResults.filter((result) => result.overallHealth === 'Poor').length;

  const handleViewReport = (result: TrademarkSearchResult) => {
    const trademark = result.trademarkName.trim().toLowerCase();
    if (!trademark || !result.classNumber) return;

    router.push(
      `/dashboard?trademark=${encodeURIComponent(trademark)}&class=${encodeURIComponent(result.classNumber)}`
    );
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin text-3xl text-gray-900 mb-3"></i>
          <p className="text-gray-900 font-nunito text-sm">Checking authorization...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen px-3 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* New Search Section - Generate Reports */}
        <div
          className="relative overflow-hidden rounded-3xl border border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(12, 0, 43, 0.95), rgba(25, 10, 60, 0.92))',
            boxShadow: '0 20px 60px rgba(12, 0, 43, 0.4)'
          }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(circle at top right, rgba(255, 183, 3, 0.35), transparent 55%)'
            }}
          ></div>

          <div className="relative z-10 px-6 py-10 sm:px-10">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFB703] flex items-center justify-center">
                  <i className="fa-solid fa-wand-magic-sparkles text-[#170154] text-lg"></i>
                </div>
                <h1 className="text-white font-nunito text-2xl sm:text-3xl font-bold leading-tight">
                  Generate New Trademark Report
                </h1>
              </div>
              <p className="mt-2 text-white/70 font-nunito text-sm sm:text-base">
                AI-powered trademark analysis in 60 seconds. Enter a trademark name and class to generate a comprehensive report with registrability scores, similarity checks, and expert recommendations.
              </p>
            </div>

            {/* New Search Form */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 max-w-4xl">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={newSearch.trademarkName}
                  onChange={(e) => setNewSearch({ ...newSearch, trademarkName: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      void handleGenerateReport();
                    }
                  }}
                  placeholder="Enter trademark name"
                  disabled={isGenerating}
                  className="w-full px-6 py-3 rounded-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] placeholder-[rgba(248,249,250,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-sm sm:text-base font-nunito disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div className="relative lg:w-64">
                <select
                  value={newSearch.classNumber}
                  onChange={(e) => setNewSearch({ ...newSearch, classNumber: e.target.value })}
                  disabled={isGenerating}
                  className="w-full px-6 py-3 rounded-[15px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all duration-300 text-sm sm:text-base font-nunito appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
                  <option value="3" className="bg-[#0C002B] text-white">Class 3 - Cosmetics & Cleaning</option>
                  <option value="4" className="bg-[#0C002B] text-white">Class 4 - Fuels & Industrial Oils</option>
                  <option value="5" className="bg-[#0C002B] text-white">Class 5 - Pharmaceuticals</option>
                  <option value="6" className="bg-[#0C002B] text-white">Class 6 - Metals & Metal Goods</option>
                  <option value="7" className="bg-[#0C002B] text-white">Class 7 - Machinery</option>
                  <option value="8" className="bg-[#0C002B] text-white">Class 8 - Hand Tools</option>
                  <option value="9" className="bg-[#0C002B] text-white">Class 9 - Electronics & Software</option>
                  <option value="10" className="bg-[#0C002B] text-white">Class 10 - Medical Instruments</option>
                  <option value="11" className="bg-[#0C002B] text-white">Class 11 - Appliances</option>
                  <option value="12" className="bg-[#0C002B] text-white">Class 12 - Vehicles</option>
                  <option value="13" className="bg-[#0C002B] text-white">Class 13 - Firearms</option>
                  <option value="14" className="bg-[#0C002B] text-white">Class 14 - Jewelry</option>
                  <option value="15" className="bg-[#0C002B] text-white">Class 15 - Musical Instruments</option>
                  <option value="16" className="bg-[#0C002B] text-white">Class 16 - Paper & Stationery</option>
                  <option value="17" className="bg-[#0C002B] text-white">Class 17 - Rubber & Plastics</option>
                  <option value="18" className="bg-[#0C002B] text-white">Class 18 - Leather Goods</option>
                  <option value="19" className="bg-[#0C002B] text-white">Class 19 - Building Materials</option>
                  <option value="20" className="bg-[#0C002B] text-white">Class 20 - Furniture</option>
                  <option value="21" className="bg-[#0C002B] text-white">Class 21 - Household Utensils</option>
                  <option value="22" className="bg-[#0C002B] text-white">Class 22 - Ropes, Nets & Sacks</option>
                  <option value="23" className="bg-[#0C002B] text-white">Class 23 - Yarns & Threads</option>
                  <option value="24" className="bg-[#0C002B] text-white">Class 24 - Fabrics & Textiles</option>
                  <option value="25" className="bg-[#0C002B] text-white">Class 25 - Clothing & Footwear</option>
                  <option value="26" className="bg-[#0C002B] text-white">Class 26 - Lace & Embroidery</option>
                  <option value="27" className="bg-[#0C002B] text-white">Class 27 - Carpets</option>
                  <option value="28" className="bg-[#0C002B] text-white">Class 28 - Toys & Games</option>
                  <option value="29" className="bg-[#0C002B] text-white">Class 29 - Foodstuffs (Meat, Fish)</option>
                  <option value="30" className="bg-[#0C002B] text-white">Class 30 - Foodstuffs (Staples)</option>
                  <option value="31" className="bg-[#0C002B] text-white">Class 31 - Agricultural Products</option>
                  <option value="32" className="bg-[#0C002B] text-white">Class 32 - Beers & Non-Alcoholic</option>
                  <option value="33" className="bg-[#0C002B] text-white">Class 33 - Alcoholic Beverages</option>
                  <option value="34" className="bg-[#0C002B] text-white">Class 34 - Tobacco</option>
                  <option value="35" className="bg-[#0C002B] text-white">Class 35 - Business Services</option>
                  <option value="36" className="bg-[#0C002B] text-white">Class 36 - Financial Services</option>
                  <option value="37" className="bg-[#0C002B] text-white">Class 37 - Construction & Repair</option>
                  <option value="38" className="bg-[#0C002B] text-white">Class 38 - Telecommunications</option>
                  <option value="39" className="bg-[#0C002B] text-white">Class 39 - Transport & Storage</option>
                  <option value="40" className="bg-[#0C002B] text-white">Class 40 - Treatment of Materials</option>
                  <option value="41" className="bg-[#0C002B] text-white">Class 41 - Education & Training</option>
                  <option value="42" className="bg-[#0C002B] text-white">Class 42 - Scientific & IT Services</option>
                  <option value="43" className="bg-[#0C002B] text-white">Class 43 - Hospitality</option>
                  <option value="44" className="bg-[#0C002B] text-white">Class 44 - Medical Services</option>
                  <option value="45" className="bg-[#0C002B] text-white">Class 45 - Legal & Security</option>
                </select>
              </div>

              <button
                onClick={() => void handleGenerateReport()}
                disabled={isGenerating}
                className={`px-8 lg:px-12 py-3 rounded-[15px] transition-colors duration-300 text-[#170154] font-nunito font-semibold text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2 ${
                  isGenerating
                    ? 'bg-[#e6a602] opacity-70 cursor-not-allowed'
                    : 'bg-[#FFB703] hover:bg-[#e6a602]'
                }`}
              >
                {isGenerating ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin text-xs"></i>
                    Generating...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles text-xs"></i>
                    Generate Report
                  </>
                )}
              </button>
            </div>

            {generateError && (
              <p className="mt-3 text-sm text-red-200 font-nunito max-w-4xl" role="alert">
                <i className="fa-solid fa-circle-exclamation mr-2"></i>
                {generateError}
              </p>
            )}
          </div>
        </div>

       

    

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fa-solid fa-font mr-1.5 text-gray-600 text-xs"></i>
                Trademark
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => {
                  const value = event.target.value;
                  setSearchTerm(value);
                  setSearchInput(value);
                }}
                placeholder="Search by name"
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fa-solid fa-layer-group mr-1.5 text-gray-600 text-xs"></i>
                Filter by Class
              </label>
              <select
                value={filterClass}
                onChange={(event) => setFilterClass(event.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              >
                {uniqueClasses.map((cls) => (
                  <option key={cls} value={cls} className="bg-white">
                    {cls === 'all' ? 'All Classes' : `Class ${cls}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fa-solid fa-heart-pulse mr-1.5 text-gray-600 text-xs"></i>
                Health Status
              </label>
              <select
                value={filterHealth}
                onChange={(event) => setFilterHealth(event.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              >
                {healthOptions.map((option) => (
                  <option key={option} value={option} className="bg-white">
                    {option === 'all' ? 'All Health Levels' : option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fa-solid fa-calendar-day mr-1.5 text-gray-600 text-xs"></i>
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(event) => setFromDate(event.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fa-solid fa-calendar-check mr-1.5 text-gray-600 text-xs"></i>
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(event) => setToDate(event.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-2 px-5 sm:px-6 py-4 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 font-nunito">Search Results History</h2>
              <p className="text-sm text-gray-600 font-nunito">
                {loading
                  ? 'Loading reports...'
                  : `${filteredResults.length} class-level report${filteredResults.length === 1 ? '' : 's'} across ${Object.keys(groupedResults).length} trademark${Object.keys(groupedResults).length === 1 ? '' : 's'}.`}
              </p>
            </div>
            <button
              onClick={fetchResults}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300 text-white font-nunito text-sm disabled:opacity-60"
            >
              <i className="fa-solid fa-rotate"></i>
              Refresh
            </button>
          </div>

          {error && (
            <div className="px-5 sm:px-6 py-4 border-b border-red-100 bg-red-50 text-red-600 text-sm font-nunito">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>
              {error}
            </div>
          )}

          {loading ? (
            <div className="py-16 flex flex-col items-center justify-center text-gray-500 font-nunito">
              <i className="fa-solid fa-spinner fa-spin text-3xl mb-3 text-gray-400"></i>
              <p className="text-sm">Retrieving trademark reports…</p>
            </div>
          ) : Object.keys(groupedResults).length === 0 ? (
            <div className="py-16 flex flex-col items-center justify-center text-gray-500 font-nunito">
              <i className="fa-regular fa-circle-xmark text-3xl mb-3 text-gray-400"></i>
              <p className="text-sm text-center max-w-sm">
                No trademark reports match these filters yet. Adjust the filters to view historical results.
              </p>
            </div>
          ) : (
            <div className="space-y-5 px-5 sm:px-6 py-5">
              {Object.entries(groupedResults).map(([trademarkName, results]) => (
                <div key={trademarkName} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 sm:px-6 py-4 border-b border-gray-200">
                    <h3 className="text-base sm:text-lg font-bold text-white font-nunito capitalize flex items-center gap-2">
                      <i className="fa-solid fa-trademark text-sm text-white/80"></i>
                      {trademarkName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-nunito mt-1">
                      {results.length} {results.length === 1 ? 'class' : 'classes'} analyzed
                    </p>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {results.map((result) => (
                        <div
                          key={result.id}
                          className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-all bg-white/80 flex flex-col gap-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 font-nunito">
                                Class {result.classNumber}
                              </h4>
                              <p className="text-xs text-gray-500 font-nunito mt-0.5">
                                Created {formatTimestamp(result.createdAt)}
                              </p>
                            </div>
                            <span
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-medium font-nunito ${getHealthBadgeClasses(result.overallHealth)}`}
                            >
                              <i className="fa-solid fa-heart-pulse text-xs"></i>
                              {result.overallHealth ?? 'N/A'}
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-lg bg-gray-50 p-3 text-center">
                              <p className="text-[11px] uppercase font-semibold text-gray-500 font-nunito">
                                Registrability
                              </p>
                              <p className={`mt-1 text-lg font-bold font-nunito ${pickScoreColor(result.registrabilityScore)}`}>
                                {Math.round(result.registrabilityScore)}
                              </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-3 text-center">
                              <p className="text-[11px] uppercase font-semibold text-gray-500 font-nunito">
                                Similarity
                              </p>
                              <p className={`mt-1 text-lg font-bold font-nunito ${pickScoreColor(result.similarityScore, true)}`}>
                                {Math.round(result.similarityScore)}
                              </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-3 text-center">
                              <p className="text-[11px] uppercase font-semibold text-gray-500 font-nunito">
                                Class Fit
                              </p>
                              <p className={`mt-1 text-lg font-bold font-nunito ${pickScoreColor(result.classFitScore)}`}>
                                {Math.round(result.classFitScore)}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2 text-xs text-gray-600 font-nunito border-t border-gray-100 pt-3">
                            {result.registrabilityReasoning && (
                              <p>
                                <span className="font-semibold text-gray-500">Registrability:</span>{' '}
                                {result.registrabilityReasoning}
                              </p>
                            )}
                            {result.similarityReasoning && (
                              <p>
                                <span className="font-semibold text-gray-500">Similarity:</span>{' '}
                                {result.similarityReasoning}
                              </p>
                            )}
                            {result.classFitReasoning && (
                              <p>
                                <span className="font-semibold text-gray-500">Class Fit:</span>{' '}
                                {result.classFitReasoning}
                              </p>
                            )}
                          </div>

                          <div className="text-xs text-gray-500 font-nunito flex flex-wrap gap-2 justify-between border-t border-gray-100 pt-3">
                            <span>
                              <i className="fa-solid fa-rotate mr-1"></i>
                              Updated {formatTimestamp(result.lastUpdated ?? result.createdAt)}
                            </span>
                          </div>

                          <button
                            onClick={() => handleViewReport(result)}
                            className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#170154] hover:bg-[#0C002B] transition-colors duration-300 text-white font-nunito font-semibold text-sm"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                            View Full Report
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )}    
