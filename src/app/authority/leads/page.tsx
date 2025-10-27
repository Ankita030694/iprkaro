'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, getDocs, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  interest: string;
  message: string;
  createdAt: Timestamp;
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
      const leadsQuery = query(
        collection(db, 'leads'),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(leadsQuery);
      const leadsData: Lead[] = [];
      
      querySnapshot.forEach((doc) => {
        leadsData.push({
          id: doc.id,
          ...doc.data()
        } as Lead);
      });
      
      setLeads(leadsData);
    } catch (error) {
      console.error('Error fetching leads:', error);
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

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return { date: 'N/A', time: '' };
    const date = timestamp.toDate();
    const dateStr = new Intl.DateTimeFormat('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    }).format(date);
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
            return (
              <div
                key={interest}
                className="rounded-lg p-3 bg-white border border-gray-200 shadow-sm"
              >
                <p className="text-gray-600 font-nunito text-xs mb-1">{interest}</p>
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
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-calendar mr-1 text-xs"></i>Date
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-user mr-1 text-xs"></i>Name
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-phone mr-1 text-xs"></i>Phone
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-envelope mr-1 text-xs"></i>Email
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-map-marker-alt mr-1 text-xs"></i>State
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-tag mr-1 text-xs"></i>Interest
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-trademark mr-1 text-xs"></i>Trademark Name
                    </th>
                    <th className="px-2 py-2 text-left text-gray-700 font-nunito font-semibold text-xs">
                      <i className="fas fa-comment mr-1 text-xs"></i>Message
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
                      <td className="px-2 py-2 text-gray-600 font-nunito text-xs">
                        <div className="leading-tight">
                          <div>{formatDate(lead.createdAt).date}</div>
                          <div className="text-gray-500">{formatDate(lead.createdAt).time}</div>
                        </div>
                      </td>
                      <td className="px-2 py-2 text-gray-900 font-nunito text-xs">
                        {lead.name}
                      </td>
                      <td className="px-2 py-2 text-gray-700 font-nunito text-xs">
                        {lead.phone}
                      </td>
                      <td className="px-2 py-2 text-gray-700 font-nunito text-xs">
                        {lead.email}
                      </td>
                      <td className="px-2 py-2 text-gray-700 font-nunito text-xs">
                        {lead.state || '-'}
                      </td>
                      <td className="px-2 py-2">
                        <span className="inline-block px-1.5 py-0.5 rounded-full text-xs font-nunito bg-gray-100 text-gray-900 border border-gray-300">
                          {lead.interest}
                        </span>
                      </td>
                      <td className="px-2 py-2">
                        {extractTrademarkName(lead.message) ? (
                          <button
                            onClick={() => handleTrademarkClick(extractTrademarkName(lead.message)!)}
                            className="inline-block px-1.5 py-0.5 rounded-full text-xs font-nunito bg-blue-100 text-blue-900 border border-blue-300 hover:bg-blue-200 transition-colors cursor-pointer whitespace-nowrap"
                            title={extractTrademarkName(lead.message) || undefined}
                          >
                            <i className="fas fa-trademark mr-1"></i>
                            {extractTrademarkName(lead.message)}
                          </button>
                        ) : (
                          <span className="text-gray-400 font-nunito text-xs">-</span>
                        )}
                      </td>
                      <td className="px-2 py-2 text-gray-600 font-nunito text-xs max-w-xs truncate">
                        {lead.message || 'No message'}
                      </td>
                      <td className="px-2 py-2">
                        <button
                          onClick={() => deleteLead(lead.id)}
                          disabled={deletingLeadId === lead.id}
                          className="inline-flex items-center px-1.5 py-0.5 text-xs font-nunito bg-red-100 text-red-700 border border-red-300 rounded-lg hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Delete lead"
                        >
                          {deletingLeadId === lead.id ? (
                            <>
                              <i className="fas fa-spinner fa-spin mr-1"></i>
                              Deleting...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-trash mr-1"></i>
                              Delete
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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

