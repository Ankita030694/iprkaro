'use client';

import React, { useState } from 'react';

export default function BlogSidebarForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Trademark Registration',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Alphabets only';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = '10 digits mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Consultation Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    if (name === 'phone') {
      if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP CONSULTATION CARD */}
      <div className="rounded-[28px] p-6 sm:p-7 bg-[#241344] text-white text-center border border-[#B8A1E3]/35 shadow-sm relative overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-[#3B1F70] text-[#B8A1E3] flex items-center justify-center mx-auto mb-4 text-xl shadow-inner border border-[#B8A1E3]/40">
          🎙️
        </div>

        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-2">
          Talk to a Legal Expert Free !
        </h3>

        <p className="text-xs text-[#DDD3F5] font-normal leading-relaxed mb-6 px-2">
          Get a personal legal assessment. One call. No pressure. Clear answers.
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-98"
        >
          <span>📞</span>
          <span>Book My Free Call</span>
        </button>
      </div>

      {/* 2. BOTTOM TRUST CARD */}
      <div className="rounded-[28px] p-6 sm:p-7 bg-white border border-stone-200/70 shadow-xs">
        <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest text-center mb-6">
          WHY PEOPLE TRUST IPR KARO
        </h4>

        <div className="space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#DECFFB]/40 text-[#7C3AED] flex items-center justify-center text-sm flex-shrink-0 border border-[#DECFFB]">
              👥
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800">
              10,000+ Clients Helped
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#DECFFB]/40 text-[#7C3AED] flex items-center justify-center text-sm flex-shrink-0 border border-[#DECFFB]">
              ⚖️
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800">
              Verified Expert Advocates
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#DECFFB]/40 text-[#7C3AED] flex items-center justify-center text-sm flex-shrink-0 border border-[#DECFFB]">
              🚫
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800">
              No Hidden Fees
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#DECFFB]/40 text-[#7C3AED] flex items-center justify-center text-sm flex-shrink-0 border border-[#DECFFB]">
              🛡️
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800">
              100% Confidential
            </span>
          </div>
        </div>
      </div>

      {/* CONSULTATION POPUP MODAL */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white rounded-3xl p-7 border border-slate-200 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#DECFFB] text-[#5B21B6] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Request Confirmed</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Our senior IP counsel will connect with you in under 15 minutes for your free trademark assessment.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="text-center mb-5">
                  <span className="text-2xl mb-2 block">⚖️</span>
                  <h3 className="text-xl font-black text-slate-900">Book Free IP Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct callback from an Indian Trademark Advocate
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-slate-700 font-bold text-xs mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#7C3AED]"
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold text-xs mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="10-digit phone number"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#7C3AED]"
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold text-xs mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ananya@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#7C3AED]"
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold text-xs mb-1">Legal Requirement</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#7C3AED]"
                    >
                      <option value="Trademark Registration">Trademark Registration (TM-A)</option>
                      <option value="Objection Reply">Section 9 / 11 Objection Reply</option>
                      <option value="Trademark Opposition">TM-O Opposition / Hearing</option>
                      <option value="Copyright Filing">Copyright Registration</option>
                      <option value="Patent Protection">Patent Filing</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors shadow-sm cursor-pointer mt-3"
                  >
                    Request Instant Callback ↗
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
