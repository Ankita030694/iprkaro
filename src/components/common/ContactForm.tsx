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
      shortLabel: 'Trademark',
      label: 'Trademark Registration',
      desc: 'Name, Logo & Slogan',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1952C7] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'Copyright Protection',
      shortLabel: 'Copyright',
      label: 'Copyright Protection',
      desc: 'Art, Software & Media',
      icon: (
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[1.5px] border-purple-500 flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-purple-600 leading-none flex-shrink-0">
          ©
        </div>
      )
    },
    {
      id: 'Patent Services',
      shortLabel: 'Patent',
      label: 'Patent Services',
      desc: 'Inventions & Technology',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'Trademark Objection / Hearing',
      shortLabel: 'Objection',
      label: 'Objection & Hearing',
      desc: 'Legal Notice & Defense',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            ? 'p-3.5 sm:p-6 rounded-2xl bg-white shadow-2xl border border-blue-100' 
            : 'p-3.5 sm:p-6 md:p-7 rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/90 shadow-[0_12px_40px_rgba(25,82,199,0.08)]'
        }`}
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#10B981] via-[#0066FF] to-[#1952C7]" />

        {/* Form Header */}
        <div className="mb-2.5 sm:mb-4">
          <h2 className="font-nunito text-lg sm:text-[24px] md:text-[26px] font-extrabold text-[#0C002B] leading-tight tracking-tight">
            {isPopup ? (
              <>Get <span className="text-[#1952C7]">Free Expert</span> Advice</>
            ) : (
              <>Get Your <span className="text-[#1952C7]">Brand Protected</span></>
            )}
          </h2>
          <p className="text-[#64748B] font-nunito text-[11.5px] sm:text-[13px] mt-0.5 leading-snug">
            {isPopup 
              ? 'Fill in your details below to speak with a Senior Trademark & IP Attorney.'
              : 'Tell us what you need. An IP specialist will review and guide you on the next step.'}
          </p>
        </div>

        {/* 3-Step Indicator Bar (Hidden on mobile for compact viewport fit) */}
        {!isPopup && (
          <div className="hidden sm:flex items-center justify-between pt-1 pb-3">
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

        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
          
          {/* Service Interest Cards (Grid 2x2 with clean text that never truncates) */}
          <div className="space-y-1">
            <label className="block font-nunito text-[11.5px] sm:text-[13px] font-bold text-[#0C002B]">
              Select Service Required <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
              {interestOptions.map((opt) => {
                const isSelected = formData.interest === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleInterestSelect(opt.id)}
                    className={`relative flex items-center justify-between p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#F0F6FF] border-[#1952C7] shadow-xs ring-1 ring-[#1952C7]/30'
                        : 'bg-white border-slate-200/90 hover:bg-slate-50/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <div className="flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div className="min-w-0">
                        <div className={`font-nunito text-[11px] sm:text-[13px] font-bold leading-tight truncate ${
                          isSelected ? 'text-[#1952C7]' : 'text-[#0C002B]'
                        }`}>
                          <span className="sm:hidden">{opt.shortLabel}</span>
                          <span className="hidden sm:inline">{opt.label}</span>
                        </div>
                        {!isPopup && (
                          <div className="hidden sm:block text-[10px] text-slate-500 font-normal mt-0.5 leading-tight truncate">
                            {opt.desc}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border flex items-center justify-center flex-shrink-0 ml-1 ${
                      isSelected ? 'border-[#1952C7] bg-[#F0F6FF]' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1952C7]" />}
                    </div>
                  </button>
                );
              })}
            </div>
            {errors.interest && (
              <p className="text-[11px] text-red-500 font-nunito mt-0.5 flex items-center gap-1">
                <span>⚠️</span> {errors.interest}
              </p>
            )}
          </div>

          {/* Name & Email Row (Side by side on mobile for compact viewport efficiency) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {/* Name Field */}
            <div className="space-y-0.5 sm:space-y-1">
              <label className="block font-nunito text-[11px] sm:text-[13px] font-bold text-[#0C002B] truncate">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className={`relative flex items-center rounded-lg sm:rounded-xl border transition-all duration-200 ${
                errors.name 
                  ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300' 
                  : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
              }`}>
                <div className="pl-2 sm:pl-3 pr-1 text-slate-400">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Rahul Sharma"
                  className="w-full py-2 sm:py-2.5 pr-2 bg-transparent border-0 outline-none font-nunito text-xs sm:text-[13px] text-[#0C002B] placeholder:text-[11px] sm:placeholder:text-xs placeholder:font-normal placeholder:text-slate-400"
                />
              </div>
              {errors.name && <p className="text-[10.5px] text-red-500 font-nunito leading-tight">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-0.5 sm:space-y-1">
              <label className="block font-nunito text-[11px] sm:text-[13px] font-bold text-[#0C002B] truncate">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className={`relative flex items-center rounded-lg sm:rounded-xl border transition-all duration-200 ${
                errors.email 
                  ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300' 
                  : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
              }`}>
                <div className="pl-2 sm:pl-3 pr-1 text-slate-400">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="rahul@company.com"
                  className="w-full py-2 sm:py-2.5 pr-2 bg-transparent border-0 outline-none font-nunito text-xs sm:text-[13px] text-[#0C002B] placeholder:text-[11px] sm:placeholder:text-xs placeholder:font-normal placeholder:text-slate-400"
                />
              </div>
              {errors.email && <p className="text-[10.5px] text-red-500 font-nunito leading-tight">{errors.email}</p>}
            </div>
          </div>

          {/* Phone & State Row */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {/* Phone Field */}
            <div className="space-y-0.5 sm:space-y-1">
              <label className="block font-nunito text-[11px] sm:text-[13px] font-bold text-[#0C002B] truncate">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className={`relative flex items-center rounded-lg sm:rounded-xl border transition-all duration-200 ${
                errors.phone 
                  ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300' 
                  : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
              }`}>
                <div className="pl-2 sm:pl-2.5 pr-1 text-slate-500 font-bold text-[11px] sm:text-xs select-none">
                  +91
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className="w-full py-2 sm:py-2.5 pr-2 bg-transparent border-0 outline-none font-nunito text-xs sm:text-[13px] text-[#0C002B] placeholder:text-[11px] sm:placeholder:text-xs placeholder:font-normal placeholder:text-slate-400 tracking-wide"
                />
              </div>
              {errors.phone && <p className="text-[10.5px] text-red-500 font-nunito leading-tight">{errors.phone}</p>}
            </div>

            {/* State Field */}
            <div className="space-y-0.5 sm:space-y-1">
              <label className="block font-nunito text-[11px] sm:text-[13px] font-bold text-[#0C002B] truncate">
                State / Location
              </label>
              <div className="relative flex items-center rounded-lg sm:rounded-xl border border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15 transition-all duration-200">
                <div className="pl-2 sm:pl-3 pr-1 text-slate-400 pointer-events-none">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full py-2 sm:py-2.5 pr-6 bg-transparent border-0 outline-none font-nunito text-xs sm:text-[13px] text-[#0C002B] appearance-none cursor-pointer"
                >
                  <option value="" className="bg-white text-slate-400 text-xs">Select State</option>
                  <option value="Delhi" className="bg-white text-[#0C002B]">Delhi NCR</option>
                  <option value="Maharashtra" className="bg-white text-[#0C002B]">Maharashtra (Mumbai/Pune)</option>
                  <option value="Karnataka" className="bg-white text-[#0C002B]">Karnataka (Bengaluru)</option>
                  <option value="Telangana" className="bg-white text-[#0C002B]">Telangana (Hyderabad)</option>
                  <option value="Tamil Nadu" className="bg-white text-[#0C002B]">Tamil Nadu (Chennai)</option>
                  <option value="Gujarat" className="bg-white text-[#0C002B]">Gujarat (Ahmedabad)</option>
                  <option value="Uttar Pradesh" className="bg-white text-[#0C002B]">Uttar Pradesh (Noida/Lucknow)</option>
                  <option value="Haryana" className="bg-white text-[#0C002B]">Haryana (Gurugram)</option>
                  <option value="West Bengal" className="bg-white text-[#0C002B]">West Bengal (Kolkata)</option>
                  <option value="Rajasthan" className="bg-white text-[#0C002B]">Rajasthan (Jaipur)</option>
                  <option value="Punjab" className="bg-white text-[#0C002B]">Punjab &amp; Chandigarh</option>
                  <option value="Kerala" className="bg-white text-[#0C002B]">Kerala</option>
                  <option value="Andhra Pradesh" className="bg-white text-[#0C002B]">Andhra Pradesh</option>
                  <option value="Madhya Pradesh" className="bg-white text-[#0C002B]">Madhya Pradesh</option>
                  <option value="Bihar" className="bg-white text-[#0C002B]">Bihar</option>
                  <option value="Odisha" className="bg-white text-[#0C002B]">Odisha</option>
                  <option value="Assam" className="bg-white text-[#0C002B]">Assam &amp; North East</option>
                  <option value="Goa" className="bg-white text-[#0C002B]">Goa</option>
                  <option value="Uttarakhand" className="bg-white text-[#0C002B]">Uttarakhand</option>
                  <option value="Himachal Pradesh" className="bg-white text-[#0C002B]">Himachal Pradesh</option>
                  <option value="Other" className="bg-white text-[#0C002B]">Other State / UT</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message / Requirement Field (Compact single line / 1 row textarea) */}
          <div className="space-y-0.5 sm:space-y-1">
            <div className="flex items-center justify-between">
              <label className="block font-nunito text-[11px] sm:text-[13px] font-bold text-[#0C002B]">
                Brand Name or Query
              </label>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Optional</span>
            </div>
            <div className="relative rounded-lg sm:rounded-xl border border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15 transition-all duration-200">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={1}
                placeholder="e.g. Trademark for 'NovaPulse' in Class 42..."
                className="w-full py-1.5 sm:py-2 px-2.5 sm:px-3 bg-transparent border-0 outline-none resize-none font-nunito text-xs sm:text-[13px] text-[#0C002B] placeholder:text-[11px] sm:placeholder:text-xs placeholder:font-normal placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Submit Status Alerts */}
          {submitStatus && (
            <div
              className={`p-2.5 rounded-lg sm:rounded-xl text-xs font-nunito ${
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
            className={`group relative w-full flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-xl font-nunito font-bold text-white transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ${
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
                <span className="text-xs sm:text-sm">Connecting with Attorney...</span>
              </div>
            ) : (
              <>
                <span className="text-xs sm:text-base font-extrabold tracking-wide">
                  {isPopup ? 'Get Free Advice Now' : 'Get Consultation'}
                </span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          {/* Trust Badges: Google & Trustpilot Reviews */}
          <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-center gap-2 sm:gap-3">
            {/* Google Reviews */}
            <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200/80 justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div className="flex items-center gap-1">
                <span className="text-[11px] sm:text-xs font-extrabold text-[#0C002B]">4.9</span>
                <div className="flex text-amber-400 text-[10px] sm:text-xs">★★★★★</div>
                <span className="hidden sm:inline text-[10px] text-slate-500 font-medium">(1,250+)</span>
              </div>
            </div>

            {/* Trustpilot Reviews */}
            <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200/80 justify-center">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded bg-[#00B67A] flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold flex-shrink-0">
                ★
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[11px] sm:text-xs font-bold text-[#0C002B]">Trustpilot</span>
                <div className="flex text-[#00B67A] text-[10px] sm:text-xs">★★★★★</div>
                <span className="text-[10px] sm:text-[10.5px] font-extrabold text-[#00B67A]">4.8</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
