'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  createdAt: number;
}

interface CreateUserForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

interface UserSearchResult {
  id: string;
  trademarkName: string;
  classNumber: string;
  overallHealth: string;
  createdAt: any;
  phoneNumber: string | null;
}

export default function UserManagementPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState<CreateUserForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userSearches, setUserSearches] = useState<UserSearchResult[]>([]);
  const [loadingSearches, setLoadingSearches] = useState(false);

  useEffect(() => {
    // Check Firebase authentication for admin
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/nullify');
      } else {
        setLoading(false);
        fetchUsers();
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/clerk/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users || []);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);

    console.log('Form data being submitted:', formData);

    try {
      const response = await fetch('/api/clerk/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setSuccess(`User ${formData.email} created successfully!`);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: ''
        });
        setShowForm(false);
        fetchUsers();
      } else {
        setError(data.error || 'Failed to create user');
      }
    } catch (error) {
      setError('An error occurred while creating the user');
      console.error('Error creating user:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const fetchUserSearches = async (userId: string) => {
    setLoadingSearches(true);
    try {
      const searchResultsRef = collection(db, 'searchResults');
      const q = query(searchResultsRef, where('userIds', 'array-contains', userId));
      const querySnapshot = await getDocs(q);
      
      const searches: UserSearchResult[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const phoneMap = (data.userPhoneNumbers && typeof data.userPhoneNumbers === 'object') ? data.userPhoneNumbers : {};
        searches.push({
          id: doc.id,
          trademarkName: data.trademarkName,
          classNumber: data.classNumber,
          overallHealth: data.overallHealth,
          createdAt: data.createdAt,
          phoneNumber: phoneMap[userId] || null
        });
      });
      
      setUserSearches(searches);
    } catch (error) {
      console.error('Error fetching user searches:', error);
    } finally {
      setLoadingSearches(false);
    }
  };

  const handleViewSearchResults = (user: User) => {
    setSelectedUser(user);
    fetchUserSearches(user.id);
  };

  const handleTrademarkClick = (searchId: string, trademarkName: string) => {
    // Store the trademark name and search ID in sessionStorage
    sessionStorage.setItem('searchTrademarkName', trademarkName);
    sessionStorage.setItem('selectedSearchId', searchId);
    
    // Open the search results page in a new tab
    window.open('/authority/search-results', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-3xl text-gray-900 mb-3"></i>
          <p className="text-gray-900 font-nunito text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-3 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5 font-nunito">
              User Management
            </h1>
            <p className="text-gray-600 font-nunito text-sm">
              Create and manage partner accounts
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-[#FFB703] text-[#0C002B] rounded-lg font-nunito font-semibold text-sm hover:bg-[#FFB703]/90 transition-colors flex items-center gap-2"
          >
            <i className={`fas ${showForm ? 'fa-times' : 'fa-plus'}`}></i>
            {showForm ? 'Cancel' : 'Create User'}
          </button>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-nunito text-sm flex items-center gap-2">
              <i className="fas fa-check-circle"></i>
              {success}
            </p>
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-nunito text-sm flex items-center gap-2">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </p>
          </div>
        )}

        {/* Create User Form */}
        {showForm && (
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-nunito">
              Create New Partner Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-900 font-nunito text-sm mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-transparent font-nunito"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-nunito text-sm mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-transparent font-nunito"
                    placeholder="Enter last name"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-nunito text-sm mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-transparent font-nunito"
                    placeholder="partner@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-nunito text-sm mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-transparent font-nunito"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-900 font-nunito text-sm mb-1.5">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={8}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-transparent font-nunito"
                    placeholder="Minimum 8 characters"
                  />
                  <p className="text-gray-500 text-xs mt-1 font-nunito">
                    Password must be at least 8 characters long
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-nunito font-semibold text-sm hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-[#FFB703] text-[#0C002B] rounded-lg font-nunito font-semibold text-sm hover:bg-[#FFB703]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Creating...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-user-plus"></i>
                      Create User
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Users List */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 font-nunito">
              Partner Accounts ({users.length})
            </h2>
          </div>
          
          {users.length === 0 ? (
            <div className="p-9 text-center">
              <i className="fas fa-users text-4xl text-gray-300 mb-3"></i>
              <p className="text-gray-600 font-nunito text-sm">No partner accounts yet</p>
              <p className="text-gray-500 font-nunito text-xs mt-1">
                Create your first partner account to get started
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-700 font-nunito font-semibold text-sm">
                      <i className="fas fa-user mr-2 text-xs"></i>Name
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 font-nunito font-semibold text-sm">
                      <i className="fas fa-envelope mr-2 text-xs"></i>Email
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 font-nunito font-semibold text-sm">
                      <i className="fas fa-phone mr-2 text-xs"></i>Phone
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 font-nunito font-semibold text-sm">
                      <i className="fas fa-calendar mr-2 text-xs"></i>Created
                    </th>
                    <th className="px-4 py-3 text-center text-gray-700 font-nunito font-semibold text-sm">
                      <i className="fas fa-search mr-2 text-xs"></i>Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr 
                      key={user.id} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-50/50' : ''
                      }`}
                    >
                      <td className="px-4 py-3 text-gray-900 font-nunito text-sm">
                        {user.firstName} {user.lastName}
                      </td>
                      <td className="px-4 py-3 text-gray-700 font-nunito text-sm">
                        {user.emailAddress}
                      </td>
                      <td className="px-4 py-3 text-gray-700 font-nunito text-sm">
                        {user.phoneNumber || '-'}
                      </td>
                      <td className="px-4 py-3 text-gray-600 font-nunito text-sm">
                        {new Date(user.createdAt).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleViewSearchResults(user)}
                          className="px-3 py-1.5 bg-[#FFB703] text-[#0C002B] rounded-lg font-nunito font-semibold text-xs hover:bg-[#FFB703]/90 transition-colors inline-flex items-center gap-1.5"
                        >
                          <i className="fas fa-search text-xs"></i>
                          Search Results
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

      {/* Search Results Popup */}
      {selectedUser && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedUser(null);
            setUserSearches([]);
          }}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white font-nunito">
                  Search History
                </h2>
                <p className="text-sm text-gray-300 font-nunito">
                  {selectedUser.firstName} {selectedUser.lastName} ({selectedUser.emailAddress})
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedUser(null);
                  setUserSearches([]);
                }}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              {loadingSearches ? (
                <div className="text-center py-12">
                  <i className="fas fa-spinner fa-spin text-3xl text-gray-900 mb-3"></i>
                  <p className="text-gray-900 font-nunito text-sm">Loading search results...</p>
                </div>
              ) : userSearches.length === 0 ? (
                <div className="text-center py-12">
                  <i className="fas fa-inbox text-4xl text-gray-300 mb-3"></i>
                  <p className="text-gray-600 font-nunito text-sm">No search history found</p>
                  <p className="text-gray-500 font-nunito text-xs mt-1">
                    This user hasn't performed any trademark searches yet
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Group searches by trademark name */}
                  {Object.entries(
                    userSearches.reduce((acc, search) => {
                      if (!acc[search.trademarkName]) {
                        acc[search.trademarkName] = [];
                      }
                      acc[search.trademarkName].push(search);
                      return acc;
                    }, {} as Record<string, UserSearchResult[]>)
                  ).map(([trademarkName, searches]) => (
                    <div 
                      key={trademarkName}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-gray-400 transition-all cursor-pointer"
                      onClick={() => handleTrademarkClick(searches[0].id, trademarkName)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-gray-900 font-nunito capitalize mb-1">
                            <i className="fas fa-trademark mr-2 text-sm text-[#FFB703]"></i>
                            {trademarkName}
                          </h3>
                          <p className="text-xs text-gray-600 font-nunito">
                            {searches.length} {searches.length === 1 ? 'class' : 'classes'} analyzed
                          </p>
                          <p className="text-xs text-gray-600 font-nunito mt-1 flex items-center gap-1.5">
                            <i className="fas fa-phone text-[#FFB703]"></i>
                            {searches[0].phoneNumber || selectedUser?.phoneNumber || 'Phone not captured'}
                          </p>
                        </div>
                        <div className="text-right">
                          <button className="px-3 py-1.5 bg-[#FFB703] text-[#0C002B] rounded-lg font-nunito font-semibold text-xs hover:bg-[#FFB703]/90 transition-colors inline-flex items-center gap-1.5">
                            <i className="fas fa-external-link-alt text-xs"></i>
                            View Details
                          </button>
                        </div>
                      </div>
                      
                      {/* Classes */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {searches.map((search) => (
                          <span 
                            key={search.id}
                            className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-nunito text-gray-700"
                          >
                            Class {search.classNumber}
                          </span>
                        ))}
                      </div>

                      {/* Health Status */}
                      <div className="flex flex-wrap gap-2">
                        {searches.map((search) => (
                          <span 
                            key={search.id}
                            className={`px-2 py-0.5 rounded-full text-xs font-nunito border ${
                              search.overallHealth?.toLowerCase() === 'good' 
                                ? 'bg-green-100 text-green-800 border-green-300'
                                : search.overallHealth?.toLowerCase() === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                                : 'bg-red-100 text-red-800 border-red-300'
                            }`}
                          >
                            Class {search.classNumber}: {search.overallHealth}
                          </span>
                        ))}
                      </div>

                      {/* Timestamp */}
                      {searches[0].createdAt && (
                        <div className="text-xs text-gray-500 font-nunito mt-3 pt-3 border-t border-gray-200">
                          <i className="fas fa-clock mr-1"></i>
                          {new Date(searches[0].createdAt.toDate()).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {userSearches.length > 0 && (
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 font-nunito text-center">
                  <i className="fas fa-info-circle mr-1"></i>
                  Click on any trademark to view detailed results in a new tab
                </p>
              </div>
            )}
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

