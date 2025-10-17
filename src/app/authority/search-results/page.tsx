'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface SearchResult {
  id: string;
  trademarkName: string;
  classNumber: string;
  classFitScore: number;
  classFitReasoning: string;
  registrabilityScore: number;
  registrabilityReasoning: string;
  similarityScore: number;
  similarityReasoning: string;
  overallHealth: string;
  alternativeClasses: string[];
  genericnessAssessment: {
    classFit: string;
    registrability: string;
    similarity: string;
  };
  keyFactors: {
    brandStrength: string;
    legalRisk: string;
    marketPosition: string;
    protectionLevel: string;
    registrationSpeed: string;
  };
  overallRecommendation: {
    message: string;
    status: string;
  };
  createdAt: Timestamp;
  lastUpdated: Timestamp;
}

export default function SearchResultsPage() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [filterHealth, setFilterHealth] = useState('all');
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/nullify');
      } else {
        setUser(currentUser);
        fetchSearchResults();
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const resultsQuery = query(
        collection(db, 'searchResults'),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(resultsQuery);
      const resultsData: SearchResult[] = [];
      
      querySnapshot.forEach((doc) => {
        resultsData.push({
          id: doc.id,
          ...doc.data()
        } as SearchResult);
      });
      
      setSearchResults(resultsData);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: Timestamp) => {
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

  const getHealthColor = (health: string) => {
    switch (health?.toLowerCase()) {
      case 'good': return 'bg-green-100 text-green-800 border-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'poor': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get unique classes for filter
  const uniqueClasses = ['all', ...Array.from(new Set(searchResults.map(r => r.classNumber)))].sort();
  const healthOptions = ['all', 'Good', 'Medium', 'Poor'];

  // Filter results
  const filteredResults = searchResults.filter(result => {
    const matchesSearch = result.trademarkName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === 'all' || result.classNumber === filterClass;
    const matchesHealth = filterHealth === 'all' || result.overallHealth === filterHealth;

    let matchesDateRange = true;
    if (result.createdAt) {
      const resultDate = result.createdAt.toDate();
      const resultDateOnly = new Date(resultDate.getFullYear(), resultDate.getMonth(), resultDate.getDate());
      
      if (fromDate) {
        const from = new Date(fromDate);
        from.setHours(0, 0, 0, 0);
        if (resultDateOnly < from) matchesDateRange = false;
      }
      
      if (toDate) {
        const to = new Date(toDate);
        to.setHours(23, 59, 59, 999);
        if (resultDateOnly > to) matchesDateRange = false;
      }
    }

    return matchesSearch && matchesClass && matchesHealth && matchesDateRange;
  });

  // Group by trademark name
  const groupedResults = filteredResults.reduce((acc, result) => {
    if (!acc[result.trademarkName]) {
      acc[result.trademarkName] = [];
    }
    acc[result.trademarkName].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-3xl text-gray-900 mb-3"></i>
          <p className="text-gray-900 font-nunito text-sm">Loading search results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-3 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5 font-nunito">
            Trademark Search Results
          </h1>
          <p className="text-gray-600 font-nunito text-sm">
            Total Searches: <span className="text-gray-900 font-semibold">{filteredResults.length}</span>
            {' • '}
            Unique Trademarks: <span className="text-gray-900 font-semibold">{Object.keys(groupedResults).length}</span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="rounded-lg p-3 bg-white border border-gray-200 shadow-sm">
            <p className="text-gray-600 font-nunito text-xs mb-1">Good Health</p>
            <p className="text-lg font-bold text-green-600 font-nunito">
              {searchResults.filter(r => r.overallHealth === 'Good').length}
            </p>
          </div>
          <div className="rounded-lg p-3 bg-white border border-gray-200 shadow-sm">
            <p className="text-gray-600 font-nunito text-xs mb-1">Medium Health</p>
            <p className="text-lg font-bold text-yellow-600 font-nunito">
              {searchResults.filter(r => r.overallHealth === 'Medium').length}
            </p>
          </div>
          <div className="rounded-lg p-3 bg-white border border-gray-200 shadow-sm">
            <p className="text-gray-600 font-nunito text-xs mb-1">Poor Health</p>
            <p className="text-lg font-bold text-red-600 font-nunito">
              {searchResults.filter(r => r.overallHealth === 'Poor').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search */}
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fas fa-search mr-1.5 text-gray-600 text-xs"></i>
                Search Trademark
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by trademark name..."
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              />
            </div>

            {/* Filter by Class */}
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fas fa-filter mr-1.5 text-gray-600 text-xs"></i>
                Filter by Class
              </label>
              <select
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              >
                {uniqueClasses.map((cls) => (
                  <option key={cls} value={cls} className="bg-white">
                    {cls === 'all' ? 'All Classes' : `Class ${cls}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Health */}
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fas fa-heartbeat mr-1.5 text-gray-600 text-xs"></i>
                Filter by Health
              </label>
              <select
                value={filterHealth}
                onChange={(e) => setFilterHealth(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              >
                {healthOptions.map((health) => (
                  <option key={health} value={health} className="bg-white">
                    {health === 'all' ? 'All Health Levels' : health}
                  </option>
                ))}
              </select>
            </div>

            {/* From Date */}
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fas fa-calendar-alt mr-1.5 text-gray-600 text-xs"></i>
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              />
            </div>

            {/* To Date */}
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fas fa-calendar-alt mr-1.5 text-gray-600 text-xs"></i>
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {Object.keys(groupedResults).length === 0 ? (
          <div className="bg-white rounded-lg p-9 text-center shadow-sm border border-gray-200">
            <i className="fas fa-inbox text-4xl text-gray-300 mb-3"></i>
            <p className="text-gray-600 font-nunito text-sm">No search results found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(groupedResults).map(([trademarkName, results]) => (
              <div key={trademarkName} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Trademark Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 border-b border-gray-200">
                  <h2 className="text-base font-bold text-white font-nunito capitalize">
                    <i className="fas fa-trademark mr-2 text-sm"></i>
                    {trademarkName}
                  </h2>
                  <p className="text-xs text-gray-300 font-nunito mt-0.5">
                    {results.length} {results.length === 1 ? 'class' : 'classes'} analyzed
                  </p>
                </div>

                {/* Classes Grid */}
                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {results.map((result) => (
                      <div 
                        key={result.id}
                        className="border border-gray-200 rounded-lg p-3 hover:border-gray-400 transition-all cursor-pointer"
                        onClick={() => setSelectedResult(result)}
                      >
                        {/* Class Header */}
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-bold text-gray-900 font-nunito">
                            Class {result.classNumber}
                          </h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-nunito border ${getHealthColor(result.overallHealth)}`}>
                            {result.overallHealth}
                          </span>
                        </div>

                        {/* Scores */}
                        <div className="space-y-1.5 mb-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600 font-nunito">Class Fit:</span>
                            <span className={`text-xs font-bold font-nunito ${getScoreColor(result.classFitScore)}`}>
                              {result.classFitScore}/100
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600 font-nunito">Registrability:</span>
                            <span className={`text-xs font-bold font-nunito ${getScoreColor(result.registrabilityScore)}`}>
                              {result.registrabilityScore}/100
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600 font-nunito">Similarity:</span>
                            <span className={`text-xs font-bold font-nunito ${getScoreColor(result.similarityScore)}`}>
                              {result.similarityScore}/100
                            </span>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="text-xs text-gray-500 font-nunito pt-2 border-t border-gray-100">
                          <i className="fas fa-clock mr-1"></i>
                          {formatDate(result.createdAt)}
                        </div>

                        {/* View Details Hint */}
                        <div className="text-xs text-gray-400 font-nunito mt-2 text-center">
                          <i className="fas fa-eye mr-1"></i>
                          Click to view details
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedResult && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedResult(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white font-nunito capitalize">
                  {selectedResult.trademarkName}
                </h2>
                <p className="text-sm text-gray-300 font-nunito">Class {selectedResult.classNumber} - Detailed Analysis</p>
              </div>
              <button
                onClick={() => setSelectedResult(null)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Overall Health */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 font-nunito mb-2">
                  <i className="fas fa-heartbeat mr-2"></i>
                  Overall Health
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-nunito border ${getHealthColor(selectedResult.overallHealth)}`}>
                  {selectedResult.overallHealth}
                </span>
              </div>

              {/* Scores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Class Fit Score</h4>
                  <p className={`text-2xl font-bold font-nunito ${getScoreColor(selectedResult.classFitScore)}`}>
                    {selectedResult.classFitScore}/100
                  </p>
                  <p className="text-xs text-gray-600 font-nunito mt-2">{selectedResult.classFitReasoning}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Registrability Score</h4>
                  <p className={`text-2xl font-bold font-nunito ${getScoreColor(selectedResult.registrabilityScore)}`}>
                    {selectedResult.registrabilityScore}/100
                  </p>
                  <p className="text-xs text-gray-600 font-nunito mt-2">{selectedResult.registrabilityReasoning}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Similarity Score</h4>
                  <p className={`text-2xl font-bold font-nunito ${getScoreColor(selectedResult.similarityScore)}`}>
                    {selectedResult.similarityScore}/100
                  </p>
                  <p className="text-xs text-gray-600 font-nunito mt-2">{selectedResult.similarityReasoning}</p>
                </div>
              </div>

              {/* Overall Recommendation */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 font-nunito mb-2">
                  <i className="fas fa-lightbulb mr-2"></i>
                  Overall Recommendation
                </h3>
                <div className="mb-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-nunito border ${
                    selectedResult.overallRecommendation?.status === 'Good' ? 'bg-green-100 text-green-800 border-green-300' :
                    selectedResult.overallRecommendation?.status === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                    'bg-red-100 text-red-800 border-red-300'
                  }`}>
                    {selectedResult.overallRecommendation?.status || 'N/A'}
                  </span>
                </div>
                <p className="text-sm text-gray-700 font-nunito">{selectedResult.overallRecommendation?.message}</p>
              </div>

              {/* Genericness Assessment */}
              {selectedResult.genericnessAssessment && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-900 font-nunito mb-3">
                    <i className="fas fa-clipboard-check mr-2"></i>
                    Assessment Details
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Class Fit</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.genericnessAssessment.classFit}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Registrability</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.genericnessAssessment.registrability}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Similarity</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.genericnessAssessment.similarity}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Factors */}
              {selectedResult.keyFactors && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-900 font-nunito mb-3">
                    <i className="fas fa-key mr-2"></i>
                    Key Factors
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Brand Strength</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.keyFactors.brandStrength}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Legal Risk</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.keyFactors.legalRisk}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Market Position</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.keyFactors.marketPosition}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Protection Level</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.keyFactors.protectionLevel}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Registration Speed</h4>
                      <p className="text-xs text-gray-600 font-nunito">{selectedResult.keyFactors.registrationSpeed}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Alternative Classes */}
              {selectedResult.alternativeClasses && selectedResult.alternativeClasses.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-900 font-nunito mb-3">
                    <i className="fas fa-exchange-alt mr-2"></i>
                    Alternative Classes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedResult.alternativeClasses.map((altClass, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-nunito text-gray-700"
                      >
                        {altClass}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Timestamps */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 font-nunito mb-2">
                  <i className="fas fa-clock mr-2"></i>
                  Timeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Created</h4>
                    <p className="text-xs text-gray-600 font-nunito">{formatDate(selectedResult.createdAt)}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 font-nunito mb-1">Last Updated</h4>
                    <p className="text-xs text-gray-600 font-nunito">{formatDate(selectedResult.lastUpdated)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedResult(null)}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-nunito text-sm"
              >
                <i className="fas fa-times mr-2"></i>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}




