'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getUTMParameters } from '@/lib/utils';

interface ContactFormProps {
  isPopup?: boolean;
  onSuccess?: () => void;
  onClose?: () => void;
}

export default function ContactForm({ isPopup = false, onSuccess, onClose }: ContactFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    interest: 'Trademark Registration',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const interestOptions = [
    {
      id: 'Trademark Registration',
      label: 'Trademark Registration',
      desc: 'Name, Logo & Slogan',
      icon: (
        <svg className="w-5 h-5 text-[#1952C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'Copyright Protection',
      label: 'Copyright Protection',
      desc: 'Art, Software & Media',
      icon: (
        <div className="w-5 h-5 rounded-full border-[1.5px] border-purple-500 flex items-center justify-center text-[11px] font-bold text-purple-600 leading-none">
          ©
        </div>
      )
    },
    {
      id: 'Patent Services',
      label: 'Patent Services',
      desc: 'Inventions & Technology',
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'Trademark Objection / Hearing',
      label: 'Objection & Hearing',
      desc: 'Legal Notice & Defense',
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Clear error for current field
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }

    // Name restriction: Alphabets and spaces only
    if (name === 'name') {
      if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    // Phone restriction: Numbers only, max 10 digits
    if (name === 'phone') {
      if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestSelect = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
    if (errors.interest) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated.interest;
        return updated;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain alphabets';
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select a service you are interested in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Helper to get cookie by name
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    try {
      const fbp = getCookie('_fbp');
      const fbc = getCookie('_fbc');

      // Add the lead to Firestore
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        meta: {
          fbp: fbp || null,
          fbc: fbc || null,
          userAgent: navigator.userAgent,
          pageUrl: window.location.href,
          utm: getUTMParameters()
        }
      });

      if (onSuccess) {
        onSuccess();
      }

      // Redirect to thank you page
      router.push('/thank-you');

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please call us directly at +91-9289707648 or email info@iprkaro.com'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full ${isPopup ? 'max-w-md mx-auto' : 'max-w-[580px] mx-auto lg:mx-0'}`}>
      <div
        className={`relative overflow-hidden transition-all duration-300 ${
          isPopup 
            ? 'p-4 sm:p-6 rounded-2xl bg-white shadow-2xl border border-blue-100' 
            : 'p-5 sm:p-7 md:p-8 rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 shadow-[0_15px_45px_rgba(25,82,199,0.08)] hover:shadow-[0_20px_50px_rgba(25,82,199,0.12)]'
        }`}
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#10B981] via-[#0066FF] to-[#1952C7]" />

        {/* Form Header */}
        <div className="mb-4 sm:mb-5">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Free 1-on-1 Legal Consultation</span>
            </div>
            {!isPopup && (
              <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600">
                <span className="text-amber-500">⚡</span>
                <span>Response in &lt; 15 mins</span>
              </div>
            )}
          </div>
          <h2 className="font-nunito text-[22px] sm:text-[26px] font-extrabold text-[#0C002B] leading-tight tracking-tight">
            {isPopup ? (
              <>Get <span className="text-[#1952C7]">Free Expert</span> Advice</>
            ) : (
              <>Get Your <span className="text-[#1952C7]">Brand Protected</span></>
            )}
          </h2>
          <p className="text-[#64748B] font-nunito text-xs sm:text-[13px] mt-1 leading-normal">
            {isPopup 
              ? 'Fill in your details below to speak with a Senior Trademark & IP Attorney.'
              : 'Tell us what you need. An IP specialist will review your requirement and guide you on the next step.'}
          </p>
        </div>

        {/* 3-Step Indicator Bar */}
        {!isPopup && (
          <div className="flex items-center justify-between pt-1 pb-3">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[#1952C7] text-white font-nunito font-bold text-xs flex items-center justify-center shadow-xs">
                1
              </div>
              <span className="text-[11px] font-bold text-[#1952C7] mt-1">Service</span>
            </div>
            
            {/* Line 1 */}
            <div className="h-[1.5px] bg-slate-200 flex-1 mx-3 -mt-4" />

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full border border-slate-300 bg-white text-slate-500 font-nunito font-medium text-xs flex items-center justify-center">
                2
              </div>
              <span className="text-[11px] font-medium text-slate-500 mt-1">Details</span>
            </div>

            {/* Line 2 */}
            <div className="h-[1.5px] bg-slate-200 flex-1 mx-3 -mt-4" />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full border border-slate-300 bg-white text-slate-500 font-nunito font-medium text-xs flex items-center justify-center">
                3
              </div>
              <span className="text-[11px] font-medium text-slate-500 mt-1">Consultation</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          
          {/* Service Interest Cards */}
          <div className="space-y-1.5">
            <label className="block font-nunito text-xs sm:text-[13px] font-bold text-[#0C002B]">
              Select Service Required <span className="text-red-500">*</span>
            </label>
            <div className={`grid ${isPopup ? 'grid-cols-2 gap-2' : 'grid-cols-2 gap-2 sm:gap-2.5'}`}>
              {interestOptions.map((opt) => {
                const isSelected = formData.interest === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleInterestSelect(opt.id)}
                    className={`relative flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#F0F6FF] border-[#1952C7] shadow-xs ring-1 ring-[#1952C7]/30'
                        : 'bg-white border-slate-200/90 hover:bg-slate-50/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div className="mt-0.5 flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div className="min-w-0">
                        <div className={`font-nunito text-xs sm:text-[13px] font-bold leading-tight truncate ${
                          isSelected ? 'text-[#1952C7]' : 'text-[#0C002B]'
                        }`}>
                          {opt.label}
                        </div>
                        {!isPopup && (
                          <div className="text-[10.5px] text-slate-500 font-normal mt-0.5 leading-tight truncate">
                            {opt.desc}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ml-1.5 ${
                      isSelected ? 'border-[#1952C7] bg-[#F0F6FF]' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#1952C7]" />}
                    </div>
                  </button>
                );
              })}
            </div>
            {errors.interest && (
              <p className="text-xs text-red-500 font-nunito mt-1 flex items-center gap-1">
                <span>⚠️</span> {errors.interest}
              </p>
            )}
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {/* Name Field */}
            <div className="space-y-1">
              <label className="block font-nunito text-xs sm:text-[13px] font-bold text-[#0C002B]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${
                errors.name 
                  ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300' 
                  : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
              }`}>
                <div className="pl-3 pr-2 text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full py-2.5 pr-3 bg-transparent border-0 outline-none font-nunito text-xs sm:text-sm text-[#0C002B] placeholder:text-slate-400"
                />
              </div>
              {errors.name && <p className="text-xs text-red-500 font-nunito">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="block font-nunito text-xs sm:text-[13px] font-bold text-[#0C002B]">
                Work / Personal Email <span className="text-red-500">*</span>
              </label>
              <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${
                errors.email 
                  ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300' 
                  : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
              }`}>
                <div className="pl-3 pr-2 text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="rahul@company.com"
                  className="w-full py-2.5 pr-3 bg-transparent border-0 outline-none font-nunito text-xs sm:text-sm text-[#0C002B] placeholder:text-slate-400"
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 font-nunito">{errors.email}</p>}
            </div>
          </div>

          {/* Phone & State Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {/* Phone Field */}
            <div className="space-y-1">
              <label className="block font-nunito text-xs sm:text-[13px] font-bold text-[#0C002B]">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${
                errors.phone 
                  ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300' 
                  : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
              }`}>
                <div className="pl-3 pr-1 text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="pl-1 pr-2 text-slate-600 font-semibold text-xs sm:text-sm select-none">
                  +91
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className="w-full py-2.5 pr-3 bg-transparent border-0 outline-none font-nunito text-xs sm:text-sm text-[#0C002B] placeholder:text-slate-400 tracking-wide"
                />
              </div>
              {errors.phone && <p className="text-xs text-red-500 font-nunito">{errors.phone}</p>}
            </div>

            {/* State Field */}
            <div className="space-y-1">
              <label className="block font-nunito text-xs sm:text-[13px] font-bold text-[#0C002B]">
                State / Location
              </label>
              <div className="relative flex items-center rounded-xl border border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15 transition-all duration-200">
                <div className="pl-3 pr-2 text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full py-2.5 pr-8 bg-transparent border-0 outline-none font-nunito text-xs sm:text-sm text-[#0C002B] appearance-none cursor-pointer"
                >
                  <option value="" className="bg-white text-slate-500">Select State</option>
                  <option value="Delhi" className="bg-white text-[#0C002B]">Delhi NCR</option>
                  <option value="Maharashtra" className="bg-white text-[#0C002B]">Maharashtra (Mumbai/Pune)</option>
                  <option value="Karnataka" className="bg-white text-[#0C002B]">Karnataka (Bengaluru)</option>
                  <option value="Telangana" className="bg-white text-[#0C002B]">Telangana (Hyderabad)</option>
                  <option value="Tamil Nadu" className="bg-white text-[#0C002B]">Tamil Nadu (Chennai)</option>
                  <option value="Gujarat" className="bg-white text-[#0C002B]">Gujarat (Ahmedabad/Surat)</option>
                  <option value="Uttar Pradesh" className="bg-white text-[#0C002B]">Uttar Pradesh (Noida/Lucknow)</option>
                  <option value="Haryana" className="bg-white text-[#0C002B]">Haryana (Gurugram)</option>
                  <option value="West Bengal" className="bg-white text-[#0C002B]">West Bengal (Kolkata)</option>
                  <option value="Rajasthan" className="bg-white text-[#0C002B]">Rajasthan (Jaipur)</option>
                  <option value="Punjab" className="bg-white text-[#0C002B]">Punjab &amp; Chandigarh</option>
                  <option value="Andhra Pradesh" className="bg-white text-[#0C002B]">Andhra Pradesh</option>
                  <option value="Kerala" className="bg-white text-[#0C002B]">Kerala</option>
                  <option value="Madhya Pradesh" className="bg-white text-[#0C002B]">Madhya Pradesh</option>
                  <option value="Bihar" className="bg-white text-[#0C002B]">Bihar</option>
                  <option value="Odisha" className="bg-white text-[#0C002B]">Odisha</option>
                  <option value="Assam" className="bg-white text-[#0C002B]">Assam &amp; North East</option>
                  <option value="Goa" className="bg-white text-[#0C002B]">Goa</option>
                  <option value="Uttarakhand" className="bg-white text-[#0C002B]">Uttarakhand</option>
                  <option value="Himachal Pradesh" className="bg-white text-[#0C002B]">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir" className="bg-white text-[#0C002B]">Jammu &amp; Kashmir</option>
                  <option value="Other" className="bg-white text-[#0C002B]">Other State / UT</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message / Requirement Field */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block font-nunito text-xs sm:text-[13px] font-bold text-[#0C002B]">
                Brand Name or Specific Query
              </label>
              <span className="text-[11px] text-slate-400 font-medium">Optional</span>
            </div>
            <div className="relative rounded-xl border border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15 transition-all duration-200">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                placeholder="e.g. Looking to trademark 'NovaPulse' in Class 42 for my SaaS startup..."
                className="w-full p-2.5 sm:p-3 bg-transparent border-0 outline-none resize-none font-nunito text-xs sm:text-sm text-[#0C002B] placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Submit Status Alerts */}
          {submitStatus && (
            <div
              className={`p-3 rounded-xl text-xs sm:text-sm font-nunito ${
                submitStatus.type === 'success'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl font-nunito font-bold text-white transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ${
              isSubmitting
                ? 'bg-slate-400 cursor-not-allowed opacity-80'
                : 'bg-[#0066FF] hover:bg-[#0052cc] active:scale-[0.99]'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Connecting with Attorney...</span>
              </div>
            ) : (
              <>
                <span className="text-sm sm:text-base tracking-wide">
                  {isPopup ? 'Get Free Advice Now' : 'Get My Free Consultation'}
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          {/* Footer Security, Confidentiality & Response Notes */}
          <div className="pt-2 text-center space-y-1.5">
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Free consultation
              </span>
              <span className="text-slate-300">|</span>
              <span>No obligation</span>
              <span className="text-slate-300">|</span>
              <span>Your information stays private</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-slate-400">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Usually responds within 15 minutes during business hours.</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
