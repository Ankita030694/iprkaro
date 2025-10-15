'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
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

  // Filter leads based on search and interest filter
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    
    const matchesFilter = filterInterest === 'all' || lead.interest === filterInterest;
    
    return matchesSearch && matchesFilter;
  });

  const interests = ['all', 'Trademark Registration', 'Copyright Protection', 'Patent Services'];

  if (loading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130),rgb(91, 88, 88))',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-[#FFB703] mb-4"></i>
          <p className="text-white font-nunito">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen px-4 py-8"
      style={{
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130),rgb(91, 88, 88))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-nunito">
            Leads Dashboard
          </h1>
          <p className="text-white/70 font-nunito">
            Total Leads: <span className="text-[#FFB703] font-semibold">{filteredLeads.length}</span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {interests.slice(1).map((interest) => {
            const count = leads.filter(lead => lead.interest === interest).length;
            return (
              <div
                key={interest}
                className="rounded-lg p-4"
                style={{
                  background: 'rgba(255, 183, 3, 0.1)',
                  border: '1px solid rgba(255, 183, 3, 0.2)'
                }}
              >
                <p className="text-white/70 font-nunito text-sm mb-1">{interest}</p>
                <p className="text-2xl font-bold text-[#FFB703] font-nunito">{count}</p>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div 
          className="rounded-xl p-6 mb-6"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
            boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
            backdropFilter: 'blur(31.7px)',
            WebkitBackdropFilter: 'blur(31.7px)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div>
              <label className="block text-white font-nunito text-sm mb-2">
                <i className="fas fa-search mr-2 text-[#FFB703]"></i>
                Search Leads
              </label>
              <div style={{ background: 'rgba(255, 255, 255, 0.15)' }} className="rounded-lg">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, email, or phone..."
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-white/60 border-0 outline-0 font-nunito"
                />
              </div>
            </div>

            {/* Filter by Interest */}
            <div>
              <label className="block text-white font-nunito text-sm mb-2">
                <i className="fas fa-filter mr-2 text-[#FFB703]"></i>
                Filter by Interest
              </label>
              <div style={{ background: 'rgba(255, 255, 255, 0.15)' }} className="rounded-lg">
                <select
                  value={filterInterest}
                  onChange={(e) => setFilterInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-white border-0 outline-0 font-nunito"
                >
                  {interests.map((interest) => (
                    <option key={interest} value={interest} className="bg-[#0c002b]">
                      {interest === 'all' ? 'All Interests' : interest}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div 
          className="rounded-xl overflow-hidden"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
            boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
            backdropFilter: 'blur(31.7px)',
            WebkitBackdropFilter: 'blur(31.7px)'
          }}
        >
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center">
              <i className="fas fa-inbox text-5xl text-white/30 mb-4"></i>
              <p className="text-white/70 font-nunito text-lg">No leads found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-[#FFB703] font-nunito font-semibold">
                      <i className="fas fa-user mr-2"></i>Name
                    </th>
                    <th className="px-6 py-4 text-left text-[#FFB703] font-nunito font-semibold">
                      <i className="fas fa-envelope mr-2"></i>Email
                    </th>
                    <th className="px-6 py-4 text-left text-[#FFB703] font-nunito font-semibold">
                      <i className="fas fa-phone mr-2"></i>Phone
                    </th>
                    <th className="px-6 py-4 text-left text-[#FFB703] font-nunito font-semibold">
                      <i className="fas fa-tag mr-2"></i>Interest
                    </th>
                    <th className="px-6 py-4 text-left text-[#FFB703] font-nunito font-semibold">
                      <i className="fas fa-comment mr-2"></i>Message
                    </th>
                    <th className="px-6 py-4 text-left text-[#FFB703] font-nunito font-semibold">
                      <i className="fas fa-calendar mr-2"></i>Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, index) => (
                    <tr 
                      key={lead.id} 
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                        index % 2 === 0 ? 'bg-white/[0.02]' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-white font-nunito">
                        {lead.name}
                      </td>
                      <td className="px-6 py-4 text-white/80 font-nunito text-sm">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 text-white/80 font-nunito">
                        {lead.phone}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-nunito bg-[#FFB703]/20 text-[#FFB703] border border-[#FFB703]/30">
                          {lead.interest}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/70 font-nunito text-sm max-w-xs truncate">
                        {lead.message || 'No message'}
                      </td>
                      <td className="px-6 py-4 text-white/70 font-nunito text-sm whitespace-nowrap">
                        {formatDate(lead.createdAt)}
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

