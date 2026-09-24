'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const SearchClient = dynamic(() => import('./SearchClient'));

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-[155px] md:pt-[140px] pb-8 md:pb-10 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#FFFFFF]">
      {/* Soft Ambient Radial Glow at Top Center matching the light theme */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-full h-[480px] pointer-events-none -z-0 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 15%, rgba(186, 230, 253, 0.45), rgba(209, 250, 229, 0.35) 50%, rgba(255, 255, 255, 0) 80%)'
        }}
      />

      {/* Floating 3D Cards Container for Desktop (lg and xl screens) */}
      <div className="hidden lg:block absolute inset-0 max-w-[1440px] mx-auto pointer-events-none z-10">
        
        {/* ── LEFT COLUMN (Card 1 + Card 2) Perfectly Aligned Vertically ── */}
        <div className="flex flex-col gap-4 xl:gap-5 absolute left-3 xl:left-8 2xl:left-12 top-[160px] pointer-events-auto z-10">
          
          {/* Card 1: Top-Left - Trademark Search & Class Availability */}
          <div className="w-[245px] xl:w-[270px] bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1952C7]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#0C002B] leading-tight">
                Trademark Search &amp; Class Availability
              </span>
            </div>
            
            <div className="bg-slate-50 border border-slate-200/80 rounded-lg px-3 py-2 text-[12px] text-slate-700 font-medium mb-2.5 flex items-center justify-between">
              <span>Brand: <strong className="text-[#0C002B]">NovaPulse</strong></span>
              <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">Class 42</span>
            </div>

            <div className="bg-emerald-50 border border-emerald-200/80 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
              <span className="text-[11px] font-semibold text-emerald-800">
                Available - 99% Unique
              </span>
            </div>
          </div>

          {/* Card 2: Bottom-Left - AI Conflict Scan */}
          <div className="w-[245px] xl:w-[270px] bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#0C002B] leading-tight">
                AI Conflict Scan
              </span>
            </div>

            {/* Tree Flow Representation */}
            <div className="flex flex-col items-center py-1 mb-2">
              <div className="px-2.5 py-0.5 bg-blue-50 border border-blue-200/80 rounded text-[10px] font-bold text-blue-700">
                Brand Mark
              </div>
              <div className="w-px h-2 bg-slate-300"></div>
              <div className="w-20 h-px bg-slate-300 relative">
                <div className="absolute left-0 top-0 w-px h-2 bg-slate-300"></div>
                <div className="absolute right-0 top-0 w-px h-2 bg-slate-300"></div>
              </div>
              <div className="w-24 flex justify-between mt-2">
                <div className="px-1.5 py-0.5 bg-slate-100 rounded text-[9px] font-medium text-slate-600">Phonetic</div>
                <div className="px-1.5 py-0.5 bg-slate-100 rounded text-[9px] font-medium text-slate-600">Logo</div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 flex items-center justify-between text-[11px]">
                <span className="text-slate-600">Phonetic Check</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.2 rounded">Passed</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 flex items-center justify-between text-[11px]">
                <span className="text-slate-600">Logo Similarity</span>
                <span className="font-semibold text-slate-800">0% Unique</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN (Card 3 + Card 4) Perfectly Aligned Vertically ── */}
        <div className="flex flex-col gap-4 xl:gap-5 absolute right-3 xl:right-8 2xl:left-auto 2xl:right-12 top-[160px] pointer-events-auto z-10">
          
          {/* Card 3: Top-Right - Automated Government E-Filing */}
          <div className="w-[245px] xl:w-[270px] bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#009B7C]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#0C002B] leading-tight">
                Automated Government E-Filing
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1.5 flex items-center gap-2 text-[11px]">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                <span className="font-medium text-slate-800">Form TM-48 Generated</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1.5 flex items-center gap-2 text-[11px]">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                <span className="font-medium text-slate-800">Direct IP India Portal</span>
              </div>
              <div className="bg-blue-50 border border-blue-200/80 rounded-lg px-2.5 py-1 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-blue-900">Application #Ready</span>
                <span className="text-[10px] bg-[#1952C7] text-white font-bold px-1.5 py-0.5 rounded">Fast-Track</span>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom-Right - 24/7 Trademark Watch & Monitoring */}
          <div className="w-[245px] xl:w-[270px] bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#0C002B] leading-tight">
                24/7 Trademark Watch &amp; Monitoring
              </span>
            </div>

            {/* Radar Polygon Visual */}
            <div className="relative w-full h-18 flex items-center justify-center my-1 bg-slate-50/80 rounded-xl border border-slate-100 overflow-hidden">
              <svg className="w-18 h-18" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <circle cx="50" cy="50" r="14" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <line x1="8" y1="50" x2="92" y2="50" stroke="#E2E8F0" strokeWidth="1" />
                <line x1="50" y1="8" x2="50" y2="92" stroke="#E2E8F0" strokeWidth="1" />
                <polygon points="50,14 78,38 68,76 32,72 22,38" fill="rgba(16, 185, 129, 0.18)" stroke="#10B981" strokeWidth="1.5" />
                <circle cx="50" cy="14" r="2.5" fill="#10B981" />
                <circle cx="78" cy="38" r="2.5" fill="#10B981" />
                <circle cx="68" cy="76" r="2.5" fill="#10B981" />
                <circle cx="32" cy="72" r="2.5" fill="#10B981" />
                <circle cx="22" cy="38" r="2.5" fill="#10B981" />
                <circle cx="50" cy="50" r="3" fill="#10B981" />
              </svg>
            </div>

            <div className="bg-emerald-50 border border-emerald-200/80 rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[11px]">
              <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Surveillance
              </span>
              <span className="text-[10px] text-emerald-700 font-bold bg-white/70 px-1.5 py-0.5 rounded">24/7 Live</span>
            </div>
          </div>

        </div>

      </div>

      {/* Main Center Content */}
      <div className={`relative ${isDropdownOpen ? 'z-[110]' : 'z-20'} container mx-auto px-4 flex flex-col items-center text-center transition-all duration-300`}>
        
        {/* Top Intelligence Pill Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-md mb-4 md:mb-5 transition-all duration-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] sm:text-[12px] font-bold text-[#1952C7] tracking-wide uppercase">
            AI Trademark Intelligence
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className={`max-w-[850px] text-[#0C002B] font-extrabold text-[34px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[1.08] tracking-tight uppercase mb-3 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          AI-Driven <br className="hidden sm:inline" />
          <span className="text-[#1952C7]">
            Trademark Protection
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`max-w-[580px] text-[#334155] text-[15px] sm:text-[16px] md:text-[17px] font-medium leading-relaxed mb-7 md:mb-9 transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Protect your brand with instant <span className="text-[#0C002B] font-semibold">AI trademark search</span>, similarity checks, and automated government filing.
        </p>

        {/* Fully Functional Search Bar Component */}
        <div 
          className={`w-full max-w-[700px] transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isDropdownOpen ? 'relative z-[110]' : ''}`}
        >
          <SearchClient onDropdownToggle={setIsDropdownOpen} />
        </div>

        {/* Mobile & Tablet Feature Preview Cards (Visible on screens < lg) */}
        <div className="lg:hidden w-full max-w-[700px] grid grid-cols-2 gap-2.5 mt-6 px-1">
          <div className="bg-white border border-slate-200 rounded-xl p-3 text-left shadow-sm flex flex-col justify-between">
            <div className="text-[11px] font-bold text-[#0C002B] mb-1">Class Availability</div>
            <div className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded w-max">
              99% Unique
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-3 text-left shadow-sm flex flex-col justify-between">
            <div className="text-[11px] font-bold text-[#0C002B] mb-1">AI Conflict Scan</div>
            <div className="text-[10px] text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded w-max">
              Phonetic + Logo
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-3 text-left shadow-sm flex flex-col justify-between">
            <div className="text-[11px] font-bold text-[#0C002B] mb-1">Government Filing</div>
            <div className="text-[10px] text-purple-700 font-semibold bg-purple-50 px-1.5 py-0.5 rounded w-max">
              Auto Form TM-48
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-3 text-left shadow-sm flex flex-col justify-between">
            <div className="text-[11px] font-bold text-[#0C002B] mb-1">Trademark Watch</div>
            <div className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded w-max">
              24/7 Monitoring
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}