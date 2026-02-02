'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, orderBy, getDocs, Timestamp, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface SearchResult {
  id: string;
  trademarkName: string;
  classNumber: string;
  registrabilityScore: number;
  similarityScore: number;
  classFitScore: number;
  overallHealth: string;
  createdAt: Timestamp;
  userIds?: string[];
}

export default function PartnerSearchResultsPage() {
  const router = useRouter();
  
  // Mock user for indexing priority after Clerk removal
  const user = { id: 'partner_user' };
  const isLoaded = true;

  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterHealth, setFilterHealth] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLoaded && user) {
      fetchResults();
    }
  }, [isLoaded, user]);

  const fetchResults = async () => {
    if (!user) return;

    try {
      setLoading(true);

      const resultsCollection = collection(db, 'searchResults');

      // Primary query using userIds array
      const arrayQuery = query(
        resultsCollection,
        where('userIds', 'array-contains', user.id),
        orderBy('createdAt', 'desc')
      );

      const fetchedResultsMap = new Map<string, SearchResult>();
      const primarySnapshot = await getDocs(arrayQuery);

      primarySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        fetchedResultsMap.set(docSnap.id, {
          id: docSnap.id,
          trademarkName: data.trademarkName || '',
          classNumber: data.classNumber ? String(data.classNumber) : 'N/A',
          registrabilityScore: data.registrabilityScore || 0,
          similarityScore: data.similarityScore || 0,
          classFitScore: data.classFitScore || 0,
          overallHealth: data.overallHealth || 'Unknown',
          createdAt: data.createdAt as Timestamp,
          userIds: data.userIds
        });
      });

      // Legacy support: fetch documents that still rely on userId field
      const legacyQuery = query(
        resultsCollection,
        where('userId', '==', user.id),
        orderBy('createdAt', 'desc')
      );
      const legacySnapshot = await getDocs(legacyQuery);
      const legacyUpdates: Promise<void>[] = [];

      legacySnapshot.forEach((docSnap) => {
        const data = docSnap.data();

        if (!fetchedResultsMap.has(docSnap.id)) {
          fetchedResultsMap.set(docSnap.id, {
            id: docSnap.id,
            trademarkName: data.trademarkName || '',
            classNumber: data.classNumber ? String(data.classNumber) : 'N/A',
            registrabilityScore: data.registrabilityScore || 0,
            similarityScore: data.similarityScore || 0,
            classFitScore: data.classFitScore || 0,
            overallHealth: data.overallHealth || 'Unknown',
            createdAt: data.createdAt as Timestamp,
            userIds: data.userIds
          });
        }

        // Ensure the document is migrated to the new userIds array structure
        const userIdsArray: string[] = Array.isArray(data.userIds) ? data.userIds : [];
        if (!userIdsArray.includes(user.id)) {
          legacyUpdates.push(
            updateDoc(docSnap.ref, { userIds: arrayUnion(user.id) }).catch((error) => {
              console.error(`Error updating userIds for document ${docSnap.id}:`, error);
            })
          );
        }
      });

      if (legacyUpdates.length > 0) {
        await Promise.all(legacyUpdates);
      }

      setResults(Array.from(fetchedResultsMap.values()));
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResultClick = (trademarkName: string, classNumber: string) => {
    // Store trademark details in sessionStorage and navigate to dashboard
    sessionStorage.setItem('searchTrademarkName', trademarkName);
    sessionStorage.setItem('searchClassNumber', classNumber);

    const hasValidClass = classNumber && classNumber.toLowerCase() !== 'n/a';
    const dashboardUrl = hasValidClass
      ? `/dashboard?trademark=${encodeURIComponent(trademarkName)}&class=${encodeURIComponent(classNumber)}`
      : `/dashboard?trademark=${encodeURIComponent(trademarkName)}`;

    router.push(dashboardUrl);
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
    switch (health.toLowerCase()) {
      case 'excellent':
        return 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border-green-500/30 shadow-lg shadow-green-500/20';
      case 'good':
        return 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-500/30 shadow-lg shadow-blue-500/20';
      case 'fair':
        return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-300 border-yellow-500/30 shadow-lg shadow-yellow-500/20';
      case 'poor':
        return 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 border-orange-500/30 shadow-lg shadow-orange-500/20';
      case 'critical':
        return 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-300 border-red-500/30 shadow-lg shadow-red-500/20';
      default:
        return 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300 border-gray-500/30 shadow-lg shadow-gray-500/20';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400 font-semibold';
    if (score >= 60) return 'text-blue-400 font-semibold';
    if (score >= 40) return 'text-yellow-400 font-semibold';
    if (score >= 20) return 'text-orange-400 font-semibold';
    return 'text-red-400 font-semibold';
  };

  const getHealthIcon = (health: string) => {
    switch (health.toLowerCase()) {
      case 'excellent':
        return 'fa-circle-check';
      case 'good':
        return 'fa-thumbs-up';
      case 'fair':
        return 'fa-circle-info';
      case 'poor':
        return 'fa-triangle-exclamation';
      case 'critical':
        return 'fa-circle-xmark';
      default:
        return 'fa-circle-question';
    }
  };

  const getHealthStats = () => {
    return healthOptions.slice(1).map((health) => ({
      label: health,
      count: results.filter(r => r.overallHealth.toLowerCase() === health).length,
      icon: getHealthIcon(health),
      color: getHealthColor(health)
    }));
  };

  // Filter results based on search and health filter
  const filteredResults = results.filter(result => {
    const matchesSearch = result.trademarkName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.classNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterHealth === 'all' || result.overallHealth.toLowerCase() === filterHealth.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const healthOptions = ['all', 'excellent', 'good', 'fair', 'poor', 'critical'];

  if (!isLoaded || loading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom, #0C002B 0%, #160049 50%, #6E5E93 100%)'
        }}
      >
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#FFB703] rounded-full blur-xl opacity-30 animate-pulse"></div>
            <i className="fas fa-spinner fa-spin text-5xl text-[#FFB703] mb-4 relative"></i>
          </div>
          <p className="text-white font-nunito text-lg font-medium">Loading your searches...</p>
          <p className="text-white/60 font-nunito text-sm mt-2">Gathering insights from your trademark portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-8"
      style={{
        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 30%, #1a0a3e 70%, #0C002B 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto mt-30">
        {/* Header with Gradient */}
        <div className={`mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="relative inline-block mb-3">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB703] to-[#6E5E93] rounded-full blur-2xl opacity-20"></div>
            <h1 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 font-nunito bg-gradient-to-r from-[#FFB703] via-white to-[#6E5E93] bg-clip-text text-transparent">
              Your Trademark Portfolio
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1 w-20 bg-gradient-to-r from-[#FFB703] to-transparent rounded-full"></div>
            <p className="text-white/70 font-nunito text-base">
              Total Searches: <span className="text-[#FFB703] font-bold text-lg">{filteredResults.length}</span>
            </p>
          </div>
        </div>

      

        {/* Filters with Glassmorphism */}
        <div 
          className={`backdrop-blur-md rounded-2xl p-6 mb-8 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
            border: '2px solid rgba(110, 94, 147, 0.3)',
            boxShadow: '0 8px 32px rgba(110, 94, 147, 0.2)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="group">
              <label className="block text-white font-nunito text-sm mb-3 font-medium flex items-center gap-2">
                <i className="fas fa-search text-[#FFB703]"></i>
                Search Trademarks
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by trademark name or class..."
                  className="w-full px-4 py-3 text-sm rounded-xl border-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] font-nunito transition-all backdrop-blur-sm"
                  style={{
                    background: 'rgba(22, 0, 73, 0.5)',
                    borderColor: 'rgba(110, 94, 147, 0.4)'
                  }}
                />
                <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-white/40"></i>
              </div>
            </div>

            {/* Filter by Health */}
            <div className="group">
              <label className="block text-white font-nunito text-sm mb-3 font-medium flex items-center gap-2">
                <i className="fas fa-filter text-[#FFB703]"></i>
                Filter by Health
              </label>
              <div className="relative">
                <select
                  value={filterHealth}
                  onChange={(e) => setFilterHealth(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] font-nunito transition-all appearance-none cursor-pointer backdrop-blur-sm"
                  style={{
                    background: 'rgba(22, 0, 73, 0.5)',
                    borderColor: 'rgba(110, 94, 147, 0.4)'
                  }}
                >
                  {healthOptions.map((health) => (
                    <option key={health} value={health} className="bg-[#160049] text-white">
                      {health === 'all' ? 'All Results' : health.charAt(0).toUpperCase() + health.slice(1)}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {filteredResults.length === 0 ? (
          <div 
            className={`backdrop-blur-md rounded-2xl p-12 text-center transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
              border: '2px solid rgba(110, 94, 147, 0.3)',
              boxShadow: '0 8px 32px rgba(110, 94, 147, 0.2)'
            }}
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-[#FFB703] rounded-full blur-xl opacity-20"></div>
              <i className="fas fa-search text-6xl text-[#FFB703] relative"></i>
            </div>
            <p className="text-white font-nunito text-lg font-semibold mb-2">
              {results.length === 0 ? 'No trademark searches yet' : 'No results found'}
            </p>
            <p className="text-white/60 font-nunito text-sm">
              {results.length === 0 
                ? 'Start searching trademarks to see them here' 
                : 'Try adjusting your filters'}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block">
              <div 
                className={`backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
                  border: '2px solid rgba(110, 94, 147, 0.3)',
                  boxShadow: '0 8px 32px rgba(110, 94, 147, 0.2)'
                }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr 
                        className="border-b-2"
                        style={{ borderColor: 'rgba(110, 94, 147, 0.3)' }}
                      >
                        <th className="px-6 py-4 text-left text-white/90 font-nunito font-bold text-sm">
                          <i className="fas fa-trademark mr-2 text-[#FFB703]"></i>Trademark Name
                        </th>
                        <th className="px-6 py-4 text-left text-white/90 font-nunito font-bold text-sm">
                          <i className="fas fa-tag mr-2 text-[#FFB703]"></i>Class
                        </th>
                        <th className="px-6 py-4 text-left text-white/90 font-nunito font-bold text-sm">
                          <i className="fas fa-chart-line mr-2 text-[#FFB703]"></i>Scores
                        </th>
                        <th className="px-6 py-4 text-left text-white/90 font-nunito font-bold text-sm">
                          <i className="fas fa-heart-pulse mr-2 text-[#FFB703]"></i>Health
                        </th>
                        <th className="px-6 py-4 text-left text-white/90 font-nunito font-bold text-sm">
                          <i className="fas fa-calendar mr-2 text-[#FFB703]"></i>Searched On
                        </th>
                        <th className="px-6 py-4 text-left text-white/90 font-nunito font-bold text-sm">
                          <i className="fas fa-bolt mr-2 text-[#FFB703]"></i>Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredResults.map((result, index) => (
                        <tr 
                          key={result.id} 
                          className="border-b transition-all duration-300 hover:bg-white/5"
                          style={{ 
                            borderColor: 'rgba(110, 94, 147, 0.2)',
                            background: index % 2 === 0 ? 'rgba(110, 94, 147, 0.05)' : 'transparent'
                          }}
                        >
                          <td className="px-6 py-4 text-white font-nunito text-sm font-semibold">
                            {result.trademarkName}
                          </td>
                          <td className="px-6 py-4 text-white/80 font-nunito text-sm">
                            {result.classNumber}
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1 text-xs font-nunito">
                              <div className={`flex items-center gap-2 ${getScoreColor(result.registrabilityScore)}`}>
                                <span className="text-white/60">R:</span> {result.registrabilityScore}%
                              </div>
                              <div className={`flex items-center gap-2 ${getScoreColor(result.similarityScore)}`}>
                                <span className="text-white/60">S:</span> {result.similarityScore}%
                              </div>
                              <div className={`flex items-center gap-2 ${getScoreColor(result.classFitScore)}`}>
                                <span className="text-white/60">C:</span> {result.classFitScore}%
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-nunito font-semibold border-2 ${getHealthColor(result.overallHealth)}`}>
                              <i className={`fas ${getHealthIcon(result.overallHealth)}`}></i>
                              {result.overallHealth}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-white/70 font-nunito text-xs">
                            {formatDate(result.createdAt)}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleResultClick(result.trademarkName, result.classNumber)}
                              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-nunito font-semibold bg-gradient-to-r from-[#FFB703] to-[#FFC107] text-[#0C002B] rounded-xl hover:shadow-lg hover:shadow-[#FFB703]/50 transition-all duration-300 hover:scale-105"
                              title="View full report"
                            >
                              <i className="fas fa-eye group-hover:scale-110 transition-transform"></i>
                              View Report
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
              {filteredResults.map((result, index) => (
                <div 
                  key={result.id}
                  className={`backdrop-blur-md rounded-2xl p-5 transition-all duration-500 hover:scale-[1.02] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(110, 94, 147, 0.15) 0%, rgba(110, 94, 147, 0.25) 100%)',
                    border: '2px solid rgba(110, 94, 147, 0.3)',
                    boxShadow: '0 8px 32px rgba(110, 94, 147, 0.2)',
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Trademark Name */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-white/60 font-nunito text-xs mb-1 flex items-center gap-2">
                        <i className="fas fa-trademark text-[#FFB703]"></i>
                        Trademark Name
                      </p>
                      <p className="text-white font-nunito text-lg font-bold">{result.trademarkName}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-nunito font-semibold border-2 ${getHealthColor(result.overallHealth)}`}>
                      <i className={`fas ${getHealthIcon(result.overallHealth)}`}></i>
                      {result.overallHealth}
                    </span>
                  </div>

                  {/* Class Number */}
                  <div className="mb-4">
                    <p className="text-white/60 font-nunito text-xs mb-1 flex items-center gap-2">
                      <i className="fas fa-tag text-[#FFB703]"></i>
                      Class Number
                    </p>
                    <p className="text-white font-nunito text-sm font-semibold">{result.classNumber}</p>
                  </div>

                  {/* Scores */}
                  <div className="mb-4">
                    <p className="text-white/60 font-nunito text-xs mb-2 flex items-center gap-2">
                      <i className="fas fa-chart-line text-[#FFB703]"></i>
                      Performance Scores
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 rounded-lg" style={{ background: 'rgba(22, 0, 73, 0.3)' }}>
                        <p className="text-white/60 font-nunito text-xs mb-1">Registrability</p>
                        <p className={`font-nunito text-lg font-bold ${getScoreColor(result.registrabilityScore)}`}>
                          {result.registrabilityScore}%
                        </p>
                      </div>
                      <div className="text-center p-2 rounded-lg" style={{ background: 'rgba(22, 0, 73, 0.3)' }}>
                        <p className="text-white/60 font-nunito text-xs mb-1">Similarity</p>
                        <p className={`font-nunito text-lg font-bold ${getScoreColor(result.similarityScore)}`}>
                          {result.similarityScore}%
                        </p>
                      </div>
                      <div className="text-center p-2 rounded-lg" style={{ background: 'rgba(22, 0, 73, 0.3)' }}>
                        <p className="text-white/60 font-nunito text-xs mb-1">Class Fit</p>
                        <p className={`font-nunito text-lg font-bold ${getScoreColor(result.classFitScore)}`}>
                          {result.classFitScore}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date and Action */}
                  <div className="flex items-center justify-between pt-4 border-t-2" style={{ borderColor: 'rgba(110, 94, 147, 0.3)' }}>
                    <div>
                      <p className="text-white/60 font-nunito text-xs mb-1 flex items-center gap-2">
                        <i className="fas fa-calendar text-[#FFB703]"></i>
                        Searched On
                      </p>
                      <p className="text-white/80 font-nunito text-xs">{formatDate(result.createdAt)}</p>
                    </div>
                    <button
                      onClick={() => handleResultClick(result.trademarkName, result.classNumber)}
                      className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-nunito font-semibold bg-gradient-to-r from-[#FFB703] to-[#FFC107] text-[#0C002B] rounded-xl hover:shadow-lg hover:shadow-[#FFB703]/50 transition-all duration-300"
                      title="View full report"
                    >
                      <i className="fas fa-eye group-hover:scale-110 transition-transform"></i>
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}

