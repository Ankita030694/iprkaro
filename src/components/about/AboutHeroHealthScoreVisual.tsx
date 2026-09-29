'use client';

import React from 'react';
import ScoreGauge from '@/components/dashboard/ScoreGauge';

export default function AboutHeroHealthScoreVisual() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-0 relative">
      
      {/* Main Visual Container matching Screenshot 1 with the bottom gradient fade of Screenshot 2 */}
      <div className="relative rounded-[28px] sm:rounded-[36px] border border-slate-200/90 bg-white shadow-2xl shadow-blue-900/5 overflow-hidden">
        
        {/* Soft Ambient Radial Glow behind the dashboard */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none -z-0 opacity-60"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(186, 230, 253, 0.5), rgba(224, 242, 254, 0.25) 50%, transparent 80%)'
          }}
          aria-hidden="true"
        />

        {/* Inner Content Wrapper with CSS Mask for smooth fade at the bottom */}
        <div 
          className="relative z-10 p-4 sm:p-6 lg:p-8"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0) 100%)'
          }}
        >
          {/* Main Grid: Left 3 Columns (Health Score & Gauges) + Right 1 Column (Key Factors) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch">
            
            {/* Left 3 Columns */}
            <div className="lg:col-span-3 flex flex-col">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-3 mb-4 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <p className="text-[#0C002B] font-nunito text-base sm:text-lg lg:text-xl font-bold">
                    Your Trademark Health Score
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-medium hidden sm:inline">Overall Status:</span>
                  <span className="font-nunito text-base sm:text-lg font-bold text-[#10B981] px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                    Good
                  </span>
                </div>
              </div>

              {/* 3 Metric Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 flex-1">
                
                {/* Metric 1: Trademark Registrability */}
                <div className="flex flex-col items-center h-full">
                  <p className="text-[#0C002B] font-nunito text-sm sm:text-base font-bold mb-3 text-center">
                    Trademark Registrability
                  </p>
                  
                  <div className="relative mb-4" style={{ width: '160px', height: '80px' }}>
                    <ScoreGauge 
                      score={85} 
                      gradientId="heroGauge1" 
                      glowFilterId="heroGlow1" 
                      isReversed={false}
                    />
                  </div>

                  {/* Remarks Card */}
                  <div className="w-full p-3.5 flex-1 flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[#0C002B] font-nunito text-xs sm:text-sm font-bold">
                        Remarks
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed text-[#4B5563]">
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-1.5 mt-0.5 flex-shrink-0 text-base leading-none">•</span>
                        <p>
                          The proposed trademark <strong className="text-[#0C002B] font-semibold">'appmotivly'</strong> shows uniqueness and creativity, making it likely to be successfully registered as it does not have any conflicts in the existing trademarks database.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-1.5 mt-0.5 flex-shrink-0 text-base leading-none">•</span>
                        <p>
                          The trademark <strong className="text-[#0C002B] font-semibold">'appmotivly'</strong> is distinctive and not generic, enhancing its registrability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metric 2: Similarity Rate */}
                <div className="flex flex-col items-center h-full">
                  <p className="text-[#0C002B] font-nunito text-sm sm:text-base font-bold mb-3 text-center">
                    Similarity Rate
                  </p>
                  
                  <div className="relative mb-4" style={{ width: '160px', height: '80px' }}>
                    <ScoreGauge 
                      score={10} 
                      gradientId="heroGauge2" 
                      glowFilterId="heroGlow2" 
                      isReversed={true}
                    />
                  </div>

                  {/* Remarks Card */}
                  <div className="w-full p-3.5 flex-1 flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[#0C002B] font-nunito text-xs sm:text-sm font-bold">
                        Remarks
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed text-[#4B5563]">
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-1.5 mt-0.5 flex-shrink-0 text-base leading-none">•</span>
                        <p>
                          There are no conflicts found in the existing trademarks database for the trademark <strong className="text-[#0C002B] font-semibold">'appmotivly,'</strong> indicating a low likelihood of similarity issues with other trademarks.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-1.5 mt-0.5 flex-shrink-0 text-base leading-none">•</span>
                        <p>
                          No similar trademarks found, reducing the risk of confusion in the market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metric 3: Class Probability */}
                <div className="flex flex-col items-center h-full">
                  <p className="text-[#0C002B] font-nunito text-sm sm:text-base font-bold mb-3 text-center">
                    Class Probability
                  </p>
                  
                  <div className="relative mb-4" style={{ width: '160px', height: '80px' }}>
                    <ScoreGauge 
                      score={80} 
                      gradientId="heroGauge3" 
                      glowFilterId="heroGlow3" 
                      isReversed={false}
                    />
                  </div>

                  {/* Remarks Card */}
                  <div className="w-full p-3.5 flex-1 flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[#0C002B] font-nunito text-xs sm:text-sm font-bold">
                        Remarks
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed text-[#4B5563]">
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-1.5 mt-0.5 flex-shrink-0 text-base leading-none">•</span>
                        <p>
                          The proposed class 42 for <strong className="text-[#0C002B] font-semibold">'appmotivly'</strong> aligns well with services related to software development, making it a good fit for the class.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#00D9FF] mr-1.5 mt-0.5 flex-shrink-0 text-base leading-none">•</span>
                        <p>
                          Class 42 is suitable for services related to software development, aligning with the nature of <strong className="text-[#0C002B] font-semibold">'appmotivly.'</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right 1 Column: Key Factors */}
            <div className="lg:col-span-1 flex flex-col mt-4 lg:mt-0">
              <div className="flex items-center justify-center px-4 py-3 mb-4 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                <p className="text-[#0C002B] font-nunito text-base font-bold">
                  Key Factors
                </p>
              </div>

              <div className="flex flex-col flex-1 space-y-2.5">
                {/* Brand Strength */}
                <div className="p-3 rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1952C7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="text-xs font-bold text-[#0C002B]">Brand Strength</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#4B5563]">
                    The brand <strong className="text-[#0C002B]">'appmotivly'</strong> appears to be unique and memorable, potentially standing out in the market.
                  </p>
                </div>

                {/* Legal Risk */}
                <div className="p-3 rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span className="text-xs font-bold text-[#0C002B]">Legal Risk</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#4B5563]">
                    Low legal risk due to the lack of conflicts in the existing trademarks database.
                  </p>
                </div>

                {/* Market Position */}
                <div className="p-3 rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <span className="text-xs font-bold text-[#0C002B]">Market Position</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#4B5563]">
                    The trademark <strong className="text-[#0C002B]">'appmotivly'</strong> could position itself well in the software development services sector.
                  </p>
                </div>

                {/* Registration Speed */}
                <div className="p-3 rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    <span className="text-xs font-bold text-[#0C002B]">Registration Speed</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#4B5563]">
                    Given the lack of conflicts, the registration process for <strong className="text-[#0C002B]">'appmotivly'</strong> may proceed smoothly.
                  </p>
                </div>

                {/* Protection Level */}
                <div className="p-3 rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#069A81" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span className="text-xs font-bold text-[#0C002B]">Protection Level</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#4B5563]">
                    The trademark <strong className="text-[#0C002B]">'appmotivly'</strong> could receive strong protection in Class 42 for software development services.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM GRADIENT FADE-OUT OVERLAY (EXACTLY AS IN FIGMA SCREENSHOT 2)
            Seamlessly merges the bottom of the card into the page background
        ───────────────────────────────────────────────────────────── */}
        <div 
          className="absolute inset-x-0 bottom-0 h-44 sm:h-56 lg:h-64 pointer-events-none z-30"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.85) 75%, rgba(255, 255, 255, 1) 100%)'
          }}
          aria-hidden="true"
        />
      </div>

    </div>
  );
}
