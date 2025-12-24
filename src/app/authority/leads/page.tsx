'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, getDocs, Timestamp, deleteDoc, doc, updateDoc, arrayUnion, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface Remark {
  text: string;
  createdAt: Timestamp;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  interest: string;
  message: string;
  createdAt: Timestamp;
  history?: Remark[];
  meta?: {
    fbp?: string;
    fbc?: string;
    userAgent?: string;
    ip?: string;
    pageUrl?: string;
  };
}

export default function LeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterInterest, setFilterInterest] = useState('all');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [deletingLeadId, setDeletingLeadId] = useState<string | null>(null);
  const [banningLeadId, setBanningLeadId] = useState<string | null>(null);
  const [viewingRemarksId, setViewingRemarksId] = useState<string | null>(null);
  const [viewingHistoryId, setViewingHistoryId] = useState<string | null>(null);
  const [remarksInput, setRemarksInput] = useState<{[key: string]: string}>({});
  const [savingRemarkId, setSavingRemarkId] = useState<string | null>(null);
  const [bannedPhones, setBannedPhones] = useState<Set<string>>(new Set());
  const [markingSoldId, setMarkingSoldId] = useState<string | null>(null);
  const [saleAmountInput, setSaleAmountInput] = useState('0');
  const [testEventCodeInput, setTestEventCodeInput] = useState('');

  useEffect(() => {
    // Check authentication
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/nullify');
      } else {
        setUser(currentUser);
        fetchLeads();
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      
      // Fetch leads
      const leadsQuery = query(
        collection(db, 'leads'),
        orderBy('createdAt', 'desc')
      );
      
      // Fetch banned users
      const bannedQuery = query(collection(db, 'banned_users'));
      
      const [leadsSnapshot, bannedSnapshot] = await Promise.all([
        getDocs(leadsQuery),
        getDocs(bannedQuery)
      ]);
      
      // Process leads
      const leadsData: Lead[] = [];
      const initialRemarks: {[key: string]: string} = {};
      
      leadsSnapshot.forEach((doc) => {
        const data = doc.data();
        const lead = {
          id: doc.id,
          ...data
        } as Lead;
        
        leadsData.push(lead);
        
        if (lead.history && lead.history.length > 0) {
          const sortedHistory = [...lead.history].sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
          initialRemarks[lead.id] = sortedHistory[0].text;
        }
      });
      
      // Process banned users
      const bannedSet = new Set<string>();
      bannedSnapshot.forEach((doc) => {
        bannedSet.add(doc.id);
      });
      
      setLeads(leadsData);
      setRemarksInput(initialRemarks);
      setBannedPhones(bannedSet);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead? This action cannot be undone.')) {
      return;
    }

    try {
      setDeletingLeadId(leadId);
      await deleteDoc(doc(db, 'leads', leadId));
      
      // Update the leads state by removing the deleted lead
      setLeads(prevLeads => prevLeads.filter(lead => lead.id !== leadId));
      
      console.log('Lead deleted successfully');
    } catch (error) {
      console.error('Error deleting lead:', error);
      alert('Failed to delete lead. Please try again.');
    } finally {
      setDeletingLeadId(null);
    }
  };

  const banLead = async (lead: Lead) => {
    if (!lead.phone) {
      alert('Cannot ban lead without a phone number.');
      return;
    }

    if (!confirm(`Are you sure you want to BAN this lead (${lead.phone})? They will be blocked from performing trademark searches.`)) {
      return;
    }

    try {
      setBanningLeadId(lead.id);
      
      // Normalize phone
      const phoneId = lead.phone.replace(/\s+/g, '').trim();
      console.log('Banning phone:', phoneId);
      
      await setDoc(doc(db, 'banned_users', phoneId), {
        bannedAt: Timestamp.now(),
        reason: 'Banned by admin from Leads Dashboard',
        leadId: lead.id,
        leadName: lead.name,
        bannedBy: user?.email || 'admin'
      });
      
      // Update local state
      setBannedPhones(prev => new Set(prev).add(phoneId));
      
      alert(`Lead ${lead.name} (${lead.phone}) has been BANNED successfully.`);
      
    } catch (error) {
      console.error('Error banning lead:', error);
      alert('Failed to ban lead. Please try again.');
    } finally {
      setBanningLeadId(null);
    }
  };

  const unbanLead = async (lead: Lead) => {
    if (!lead.phone) {
      alert('Cannot unban lead without a phone number.');
      return;
    }

    if (!confirm(`Are you sure you want to UNBAN this lead (${lead.phone})?`)) {
      return;
    }

    try {
      setBanningLeadId(lead.id);
      
      // Normalize phone
      const phoneId = lead.phone.replace(/\s+/g, '').trim();
      console.log('Unbanning phone:', phoneId);
      
      await deleteDoc(doc(db, 'banned_users', phoneId));
      
      // Update local state
      setBannedPhones(prev => {
        const newSet = new Set(prev);
        newSet.delete(phoneId);
        return newSet;
      });
      
      alert(`Lead ${lead.name} (${lead.phone}) has been UNBANNED successfully.`);
      
    } catch (error) {
      console.error('Error unbanning lead:', error);
      alert('Failed to unban lead. Please try again.');
    } finally {
      setBanningLeadId(null);
    }
  };

  const handleRemarkChange = (leadId: string, value: string) => {
    setRemarksInput(prev => ({ ...prev, [leadId]: value }));
  };

  const saveRemark = async (leadId: string) => {
    const remarkText = remarksInput[leadId]?.trim();
    if (!remarkText) return;

    try {
      setSavingRemarkId(leadId);
      const newRemark = {
        text: remarkText,
        createdAt: Timestamp.now()
      };

      const leadRef = doc(db, 'leads', leadId);
      await updateDoc(leadRef, {
        history: arrayUnion(newRemark)
      });

      // Update local state
      setLeads(prevLeads => prevLeads.map(lead => {
        if (lead.id === leadId) {
          return {
            ...lead,
            history: [...(lead.history || []), newRemark]
          };
        }
        return lead;
      }));

      // Keep the input text as is (don't clear it) so it shows the latest remark
      // setRemarksInput(prev => ({ ...prev, [leadId]: '' }));
      
    } catch (error) {
      console.error('Error saving remark:', error);
      alert('Failed to save remark. Please try again.');
    } finally {
      setSavingRemarkId(null);
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return { date: 'N/A', time: '' };
    const date = timestamp.toDate();
    
    // Format as DD/MM/YY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const dateStr = `${day}/${month}/${year}`;
    
    const timeStr = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    }).format(date);
    return { date: dateStr, time: timeStr };
  };

  // Normalize interest to handle variations like "Trademark Registration - Class 14"
  const normalizeInterest = (interest: string) => {
    if (interest.startsWith('Trademark Registration')) {
      return 'Trademark Registration';
    }
    return interest;
  };

  // Extract trademark name from message
  const extractTrademarkName = (message: string) => {
    if (!message) return null;
    const match = message.match(/Trademark Search:\s*(.+?)(?:\n|$)/i);
    return match ? match[1].trim() : null;
  };

  // Handle trademark name click to redirect to search results
  const handleTrademarkClick = (trademarkName: string) => {
    // Store the trademark name in sessionStorage for the search results page
    sessionStorage.setItem('searchTrademarkName', trademarkName);
    router.push('/authority/search-results');
  };

  // Filter leads based on search, interest filter, and date range
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      (lead.state && lead.state.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filterInterest === 'all' || normalizeInterest(lead.interest) === filterInterest;
    
    // Date range filter
    let matchesDateRange = true;
    if (lead.createdAt) {
      const leadDate = lead.createdAt.toDate();
      const leadDateOnly = new Date(leadDate.getFullYear(), leadDate.getMonth(), leadDate.getDate());
      
      if (fromDate) {
        const from = new Date(fromDate);
        from.setHours(0, 0, 0, 0);
        if (leadDateOnly < from) matchesDateRange = false;
      }
      
      if (toDate) {
        const to = new Date(toDate);
        to.setHours(23, 59, 59, 999);
        if (leadDateOnly > to) matchesDateRange = false;
      }
    }
    
    return matchesSearch && matchesFilter && matchesDateRange;
  });

  const interests = ['all', 'Trademark Registration', 'Copyright Protection', 'Patent Services'];
  
  // Get abbreviation for interest type with class number if applicable
  const getInterestAbbr = (interest: string) => {
    const normalized = normalizeInterest(interest);
    
    // Extract class number for Trademark Registration
    if (normalized === 'Trademark Registration') {
      const classMatch = interest.match(/Class\s+(\d+)/i);
      if (classMatch) {
        return `TM-${classMatch[1]}`;
      }
      return 'TM';
    }
    
    switch (normalized) {
      case 'Copyright Protection':
        return 'CR';
      case 'Patent Services':
        return 'PT';
      default:
        return interest;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-3xl text-gray-900 mb-3"></i>
          <p className="text-gray-900 font-nunito text-sm">Loading leads...</p>
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
            Leads Dashboard
          </h1>
          <p className="text-gray-600 font-nunito text-sm">
            Total Leads: <span className="text-gray-900 font-semibold">{filteredLeads.length}</span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {interests.slice(1).map((interest) => {
            const count = leads.filter(lead => normalizeInterest(lead.interest) === interest).length;
            const abbr = getInterestAbbr(interest);
            return (
              <div
                key={interest}
                className="rounded-lg p-3 bg-white border border-gray-200 shadow-sm"
              >
                <p className="text-gray-600 font-nunito text-xs mb-1">{abbr}</p>
                <p className="text-lg font-bold text-gray-900 font-nunito">{count}</p>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search */}
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fas fa-search mr-1.5 text-gray-600 text-xs"></i>
                Search Leads
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email, phone, or state..."
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              />
            </div>

            {/* Filter by Interest */}
            <div>
              <label className="block text-gray-900 font-nunito text-xs mb-1.5">
                <i className="fas fa-filter mr-1.5 text-gray-600 text-xs"></i>
                Filter by Interest
              </label>
              <select
                value={filterInterest}
                onChange={(e) => setFilterInterest(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-nunito transition-all"
              >
                {interests.map((interest) => (
                  <option key={interest} value={interest} className="bg-white">
                    {interest === 'all' ? 'All Interests' : interest}
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

        {/* Leads Table */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
          {filteredLeads.length === 0 ? (
            <div className="p-9 text-center">
              <i className="fas fa-inbox text-4xl text-gray-300 mb-3"></i>
              <p className="text-gray-600 font-nunito text-sm">No leads found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-2 text-left text-gray-700 font-nunito font-semibold text-xs w-32">
                      <i className="fas fa-calendar mr-1 text-xs"></i>Date
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-user mr-1 text-xs"></i>Name
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-phone mr-1 text-xs"></i>Phone
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs w-40">
                      <i className="fas fa-envelope mr-1 text-xs"></i>Email
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-map-marker-alt mr-1 text-xs"></i>State
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-tag mr-1 text-xs"></i>Type
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-trademark mr-1 text-xs"></i>TM Name
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-comment mr-1 text-xs"></i>Message
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs w-64">
                      <i className="fas fa-sticky-note mr-1 text-xs"></i>Remarks
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-cog mr-1 text-xs"></i>Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, index) => (
                    <tr 
                      key={lead.id} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-50/50' : ''
                      }`}
                    >
                      <td className="px-3 py-2 text-gray-600 font-nunito text-xs w-32">
                        <div className="leading-tight">
                          <div className="font-medium">{formatDate(lead.createdAt).date}</div>
                          <div className="text-gray-500 text-[11px]">{formatDate(lead.createdAt).time}</div>
                        </div>
                      </td>
                      <td className="px-2 py-2 text-gray-900 font-nunito text-xs">
                        {lead.name}
                      </td>
                      <td className="px-2 py-2 text-gray-700 font-nunito text-xs whitespace-nowrap">
                        {lead.phone}
                      </td>
                      <td className="px-2 py-2 text-gray-700 font-nunito text-xs w-40">
                        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                          <div className="whitespace-nowrap">
                            {lead.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-2 text-gray-700 font-nunito text-xs">
                        {lead.state || '-'}
                      </td>
                      <td className="px-2 py-2">
                        <span className="inline-block px-2 py-1 rounded text-[11px] font-nunito font-semibold bg-gray-100 text-gray-900 border border-gray-300">
                          {getInterestAbbr(lead.interest)}
                        </span>
                      </td>
                      <td className="px-2 py-2">
                        {extractTrademarkName(lead.message) ? (
                          <button
                            onClick={() => handleTrademarkClick(extractTrademarkName(lead.message)!)}
                            className="inline-block px-2 py-1 rounded text-[11px] font-nunito font-medium bg-blue-100 text-blue-900 border border-blue-300 hover:bg-blue-200 transition-colors cursor-pointer whitespace-nowrap"
                            title={extractTrademarkName(lead.message) || undefined}
                          >
                            <i className="fas fa-trademark mr-1"></i>
                            {extractTrademarkName(lead.message)}
                          </button>
                        ) : (
                          <span className="text-gray-400 font-nunito text-xs">-</span>
                        )}
                      </td>
                      <td className="px-2 py-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-gray-600 font-nunito text-xs max-w-[120px] truncate" title={lead.message}>
                            {lead.message || '-'}
                          </span>
                          {lead.message && (
                            <button
                              onClick={() => setViewingRemarksId(lead.id)}
                              className="inline-flex items-center px-1.5 py-0.5 text-[11px] font-nunito bg-blue-50 text-blue-700 border border-blue-200 rounded hover:bg-blue-100 transition-colors whitespace-nowrap"
                              title="View full message"
                            >
                              <i className="fas fa-eye text-[10px]"></i>
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="px-2 py-2 w-64">
                        <div className="space-y-1.5">
                          <textarea
                            value={remarksInput[lead.id] || ''}
                            onChange={(e) => handleRemarkChange(lead.id, e.target.value)}
                            placeholder="Add remarks..."
                            className="w-full px-2 py-1.5 text-xs rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-nunito resize-none"
                            rows={2}
                          />
                          <div className="flex gap-1.5">
                            <button
                              onClick={() => saveRemark(lead.id)}
                              disabled={savingRemarkId === lead.id || !remarksInput[lead.id]?.trim()}
                              className="flex-1 inline-flex items-center justify-center px-2 py-1 text-[11px] font-nunito font-medium bg-green-100 text-green-700 border border-green-300 rounded hover:bg-green-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              title="Save remarks"
                            >
                              {savingRemarkId === lead.id ? (
                                <i className="fas fa-spinner fa-spin text-[10px]"></i>
                              ) : (
                                <>
                                  <i className="fas fa-save mr-1 text-[10px]"></i>
                                  Save
                                </>
                              )}
                            </button>
                            <button
                              onClick={() => setViewingHistoryId(lead.id)}
                              className="flex-1 inline-flex items-center justify-center px-2 py-1 text-[11px] font-nunito font-medium bg-purple-100 text-purple-700 border border-purple-300 rounded hover:bg-purple-200 transition-colors"
                              title="View history"
                            >
                              <i className="fas fa-history mr-1 text-[10px]"></i>
                              History
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-2">
                        <div className="flex gap-1.5">
                          {(() => {
                            const isBanned = lead.phone && bannedPhones.has(lead.phone.replace(/\s+/g, '').trim());
                            return (
                              <button
                                onClick={() => isBanned ? unbanLead(lead) : banLead(lead)}
                                disabled={banningLeadId === lead.id}
                                className={`inline-flex items-center px-2 py-1 text-[11px] font-nunito font-medium border rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${
                                  isBanned 
                                    ? 'bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-200' 
                                    : 'bg-gray-800 text-white border-gray-900 hover:bg-gray-700'
                                }`}
                                title={isBanned ? "Unban lead" : "Ban lead from searching"}
                              >
                                {banningLeadId === lead.id ? (
                                  <>
                                    <i className="fas fa-spinner fa-spin mr-1 text-[10px]"></i>
                                    <span className="hidden sm:inline">{isBanned ? 'Unbanning...' : 'Banning...'}</span>
                                  </>
                                ) : (
                                  <>
                                    <i className={`fas ${isBanned ? 'fa-unlock' : 'fa-ban'} mr-1 text-[10px]`}></i>
                                    <span className="hidden sm:inline">{isBanned ? 'Unban' : 'Ban'}</span>
                                  </>
                                )}
                              </button>
                            );
                          })()}
                          <button
                            onClick={() => deleteLead(lead.id)}
                            disabled={deletingLeadId === lead.id}
                            className="inline-flex items-center px-2 py-1 text-[11px] font-nunito font-medium bg-red-100 text-red-700 border border-red-300 rounded hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                            title="Delete lead"
                          >
                            {deletingLeadId === lead.id ? (
                              <>
                                <i className="fas fa-spinner fa-spin mr-1 text-[10px]"></i>
                                <span className="hidden sm:inline">Deleting...</span>
                              </>
                            ) : (
                              <>
                                <i className="fas fa-trash mr-1 text-[10px]"></i>
                                <span className="hidden sm:inline">Delete</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => {
                              setMarkingSoldId(lead.id);
                              setSaleAmountInput('0');
                            }}
                            className="inline-flex items-center px-2 py-1 text-[11px] font-nunito font-medium bg-green-100 text-green-700 border border-green-300 rounded hover:bg-green-200 transition-colors whitespace-nowrap"
                            title="Mark as Sold"
                          >
                            <i className="fas fa-check-circle mr-1 text-[10px]"></i>
                            <span className="hidden sm:inline">Sold</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Remarks View Modal */}
      {viewingRemarksId && (() => {
        const lead = leads.find(l => l.id === viewingRemarksId);
        if (!lead) return null;
        
        return (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setViewingRemarksId(null)}
          >
            <div 
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 font-nunito">
                  <i className="fas fa-comment mr-2 text-blue-600"></i>
                  Full Remarks
                </h2>
                <button
                  onClick={() => setViewingRemarksId(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="Close"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 font-nunito mb-1">Lead Information:</p>
                    <p className="text-sm text-gray-900 font-nunito"><strong>Name:</strong> {lead.name}</p>
                    <p className="text-sm text-gray-900 font-nunito"><strong>Email:</strong> {lead.email}</p>
                    <p className="text-sm text-gray-900 font-nunito"><strong>Phone:</strong> {lead.phone}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-sm font-semibold text-gray-700 font-nunito mb-2">Remarks:</p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <p className="text-sm text-gray-900 font-nunito whitespace-pre-wrap">
                        {lead.message || 'No remarks available'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-4 border-t border-gray-200">
                <button
                  onClick={() => setViewingRemarksId(null)}
                  className="px-4 py-2 text-sm font-nunito bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* History View Modal */}
      {viewingHistoryId && (() => {
        const lead = leads.find(l => l.id === viewingHistoryId);
        if (!lead) return null;
        
        const sortedHistory = [...(lead.history || [])].sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
        
        return (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setViewingHistoryId(null)}
          >
            <div 
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 font-nunito">
                  <i className="fas fa-history mr-2 text-purple-600"></i>
                  Remarks History
                </h2>
                <button
                  onClick={() => setViewingHistoryId(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="Close"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 font-nunito mb-1">Lead:</p>
                  <p className="text-sm text-gray-900 font-nunito">{lead.name} ({lead.email})</p>
                </div>
                
                <div className="space-y-3">
                  {sortedHistory.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 font-nunito">
                      No remarks history available.
                    </div>
                  ) : (
                    sortedHistory.map((remark, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-semibold text-gray-500 font-nunito">
                            {formatDate(remark.createdAt).date} at {formatDate(remark.createdAt).time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 font-nunito whitespace-pre-wrap">
                          {remark.text}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="flex justify-end p-4 border-t border-gray-200">
                <button
                  onClick={() => setViewingHistoryId(null)}
                  className="px-4 py-2 text-sm font-nunito bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Sale Confirmation Modal */}
      {markingSoldId && (() => {
        const lead = leads.find(l => l.id === markingSoldId);
        if (!lead) return null;

        return (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setMarkingSoldId(null)}
          >
            <div 
              className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-green-50">
                <h2 className="text-lg font-bold text-green-800 font-nunito">
                  <i className="fas fa-check-circle mr-2"></i>
                  Mark as Sold
                </h2>
                <button
                  onClick={() => setMarkingSoldId(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="Close"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 font-nunito mb-4">
                  You are marking <strong>{lead.name}</strong> as sold. This will update the status and trigger a conversion event to Facebook.
                </p>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-nunito text-sm font-bold mb-2">
                    Sale Amount (INR)
                  </label>
                  <input
                    type="number"
                    value={saleAmountInput}
                    onChange={(e) => setSaleAmountInput(e.target.value)}
                    className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-nunito"
                    placeholder="Enter amount"
                    min="0"
                  />
                </div>

              

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setMarkingSoldId(null)}
                    className="px-4 py-2 text-sm font-nunito bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={async () => {
                      const amount = parseFloat(saleAmountInput);
                      if (isNaN(amount) || amount < 0) {
                        alert('Please enter a valid amount');
                        return;
                      }

                      try {
                        // 1. Update Firestore (Client Side)
                        const leadRef = doc(db, 'leads', lead.id);
                        await updateDoc(leadRef, {
                          status: 'sold',
                          saleAmount: amount,
                          soldAt: Timestamp.now()
                        });

                        // 2. Send CAPI Event (Server Side)
                        const { sendPurchaseEvent } = await import('@/app/actions/leads');
                        const result = await sendPurchaseEvent({
                          email: lead.email,
                          phone: lead.phone,
                          userAgent: lead.meta?.userAgent || navigator.userAgent,
                          ip: lead.meta?.ip || '0.0.0.0',
                          url: lead.meta?.pageUrl || window.location.href,
                          fbp: lead.meta?.fbp,
                          fbc: lead.meta?.fbc,
                          amount: amount,
                          leadId: lead.id,
                          testEventCode: testEventCodeInput
                        });

                        if (result.success) {
                          alert('Lead marked as SOLD and event sent to Facebook!');
                          setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: 'sold' } : l));
                          setMarkingSoldId(null);
                        } else {
                          alert('Saved to DB, but failed to send to Facebook: ' + result.error);
                          setMarkingSoldId(null);
                        }
                      } catch (err) {
                        console.error(err);
                        alert('Failed to update lead: ' + (err as Error).message);
                      }
                    }}
                    className="px-4 py-2 text-sm font-nunito font-bold bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                  >
                    Confirm Sale
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}

