'use client';

import React, { useState } from 'react';

interface AssessmentSuccessProps {
  referenceId: string;
  onReset: () => void;
  onClose?: () => void;
}

export default function AssessmentSuccess({
  referenceId,
  onReset,
  onClose,
}: AssessmentSuccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard && referenceId) {
      navigator.clipboard.writeText(referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="text-center py-2 sm:py-3 space-y-4">
      {/* Checkmark Icon in Emerald Theme */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-sm">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Main Success Heading */}
      <div className="space-y-1">
        <div className="text-[11px] font-black tracking-widest text-emerald-600 uppercase font-nunito">
          ASSESSMENT REQUEST RECEIVED
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C002B] font-nunito leading-tight">
          Your Formal Case Assessment <br className="hidden sm:inline" />
          Has Been Registered
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 max-w-md mx-auto font-normal leading-relaxed pt-0.5">
          Our senior IP legal team will review your submitted details and contact you shortly to guide you on the next steps.
        </p>
      </div>

      {/* Confidentiality Card in Emerald/Green Theme */}
      <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-left flex items-start gap-3 max-w-lg mx-auto">
        <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700 mt-0.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h4 className="text-xs sm:text-[13px] font-bold text-emerald-900 font-nunito">
            Your information is kept confidential.
          </h4>
          <p className="text-[11px] sm:text-xs text-emerald-700 font-normal leading-relaxed mt-0.5">
            We use the details you provide only to review your inquiry and contact you regarding your IP matter.
          </p>
        </div>
      </div>

      {/* Assessment Reference Card */}
      <div className="p-3 sm:p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-left flex items-center justify-between max-w-lg mx-auto shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1952C7] flex-shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <div className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold">
              Assessment Reference
            </div>
            <div className="text-base sm:text-lg font-black text-[#0C002B] font-nunito tracking-wide">
              {referenceId || 'IPR-2026-78432'}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="p-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-white hover:text-[#1952C7] transition-colors border border-transparent hover:border-slate-200 cursor-pointer flex items-center gap-1"
          title="Copy Reference ID"
        >
          {copied ? (
            <span className="text-emerald-600 font-bold text-xs">Copied ✓</span>
          ) : (
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* CTA Action Buttons */}
      <div className="pt-1.5 space-y-2 max-w-lg mx-auto">
        <a
          href="tel:+919289707648"
          className="w-full py-3 sm:py-3.5 px-6 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-nunito font-bold text-sm sm:text-base active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>Call IPR Karo (+91 9289707648)</span>
        </a>

        <div className="flex items-center justify-center gap-4 text-xs pt-1">
          <button
            type="button"
            onClick={onReset}
            className="text-slate-500 hover:text-[#1952C7] font-medium underline underline-offset-4 cursor-pointer py-1"
          >
            Submit another inquiry
          </button>
          {onClose && (
            <>
              <span className="text-slate-300">•</span>
              <button
                type="button"
                onClick={onClose}
                className="text-slate-500 hover:text-[#0C002B] font-medium underline underline-offset-4 cursor-pointer py-1"
              >
                Close Window
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
