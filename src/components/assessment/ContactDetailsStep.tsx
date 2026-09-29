'use client';

import React, { useState } from 'react';

export interface ContactDetailsData {
  fullName: string;
  mobileNumber: string;
  email: string;
  preferredContactMethod: 'Phone' | 'WhatsApp' | 'Email';
}

interface ContactDetailsStepProps {
  contactData: ContactDetailsData;
  onUpdateContactData: (data: Partial<ContactDetailsData>) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  submissionError?: string | null;
}

export default function ContactDetailsStep({
  contactData,
  onUpdateContactData,
  onBack,
  onSubmit,
  isSubmitting,
  submissionError,
}: ContactDetailsStepProps) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^[A-Za-z\s.'-]+$/.test(val)) {
      if (errors.fullName) {
        setErrors((prev) => ({ ...prev, fullName: '' }));
      }
      onUpdateContactData({ fullName: val });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 10) {
      if (errors.mobileNumber) {
        setErrors((prev) => ({ ...prev, mobileNumber: '' }));
      }
      onUpdateContactData({ mobileNumber: val });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
    onUpdateContactData({ email: val });
  };

  const handleContactMethodSelect = (method: 'Phone' | 'WhatsApp' | 'Email') => {
    onUpdateContactData({ preferredContactMethod: method });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!contactData.fullName || contactData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!contactData.mobileNumber || !/^\d{10}$/.test(contactData.mobileNumber)) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (
      !contactData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email.trim())
    ) {
      errs.email = 'Please enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Step Heading */}
      <div className="space-y-0.5">
        <h2 className="text-lg sm:text-xl font-extrabold text-[#0C002B] font-nunito tracking-tight">
          Your Contact Information
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 font-normal">
          Provide your contact details so our IP experts can reach out to you for a personalized consultation.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-3.5">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="block text-xs sm:text-[13px] font-bold text-[#0C002B] font-nunito">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div
            className={`relative flex items-center rounded-xl border transition-all ${
              errors.fullName
                ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300'
                : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
            }`}
          >
            <div className="pl-3.5 pr-2 text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              name="fullName"
              value={contactData.fullName}
              onChange={handleNameChange}
              placeholder="Enter your full name"
              className="w-full py-2.5 sm:py-3 pr-3.5 bg-transparent border-0 outline-none font-nunito text-xs sm:text-[13px] text-[#0C002B] placeholder:text-slate-400"
            />
          </div>
          {errors.fullName && (
            <p className="text-xs text-red-500 font-nunito">{errors.fullName}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="space-y-1">
          <label className="block text-xs sm:text-[13px] font-bold text-[#0C002B] font-nunito">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div
            className={`relative flex items-center rounded-xl border transition-all ${
              errors.mobileNumber
                ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300'
                : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
            }`}
          >
            <div className="pl-3.5 pr-2 flex items-center gap-1.5 text-xs font-bold text-[#0C002B] select-none border-r border-slate-200 mr-2 py-1">
              <span className="text-sm">🇮🇳</span>
              <span>+91</span>
            </div>
            <input
              type="tel"
              name="mobileNumber"
              value={contactData.mobileNumber}
              onChange={handlePhoneChange}
              placeholder="Enter your 10-digit mobile number"
              maxLength={10}
              className="w-full py-2.5 sm:py-3 pr-3.5 bg-transparent border-0 outline-none font-nunito text-xs sm:text-[13px] text-[#0C002B] placeholder:text-slate-400 tracking-wider"
            />
          </div>
          {errors.mobileNumber && (
            <p className="text-xs text-red-500 font-nunito">{errors.mobileNumber}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1">
          <label className="block text-xs sm:text-[13px] font-bold text-[#0C002B] font-nunito">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div
            className={`relative flex items-center rounded-xl border transition-all ${
              errors.email
                ? 'border-red-400 bg-red-50/20 ring-1 ring-red-300'
                : 'border-slate-200/90 bg-slate-50/50 focus-within:border-[#1952C7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1952C7]/15'
            }`}
          >
            <div className="pl-3.5 pr-2 text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className="w-full py-2.5 sm:py-3 pr-3.5 bg-transparent border-0 outline-none font-nunito text-xs sm:text-[13px] text-[#0C002B] placeholder:text-slate-400"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 font-nunito">{errors.email}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-[13px] font-bold text-[#0C002B] font-nunito">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                { id: 'Phone', label: 'Phone', icon: '📞' },
                { id: 'WhatsApp', label: 'WhatsApp', icon: '💬' },
                { id: 'Email', label: 'Email', icon: '✉️' },
              ] as const
            ).map((method) => {
              const isSelected = contactData.preferredContactMethod === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => handleContactMethodSelect(method.id)}
                  className={`py-2 px-3 rounded-xl border font-nunito text-xs sm:text-[13px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#F0F6FF] text-[#1952C7] border-[#1952C7] ring-1 ring-[#1952C7]/30 shadow-xs'
                      : 'bg-white text-[#0C002B] border-slate-200/90 hover:bg-slate-50'
                  }`}
                >
                  <span>{method.icon}</span>
                  <span>{method.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {submissionError && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {submissionError}
        </div>
      )}

      {/* Navigation Buttons: Back & Submit */}
      <div className="pt-2 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="py-2.5 sm:py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-nunito font-bold text-xs sm:text-sm hover:bg-slate-50 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back</span>
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-2.5 sm:py-3 px-4 rounded-xl font-nunito font-bold text-xs sm:text-sm text-white transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer ${
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
              <span className="text-xs">Submitting...</span>
            </div>
          ) : (
            <>
              <span className="truncate">Request Assessment</span>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
