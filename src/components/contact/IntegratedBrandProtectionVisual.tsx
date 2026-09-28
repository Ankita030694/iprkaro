'use client';

import React from 'react';

export default function IntegratedBrandProtectionVisual() {
  return (
    <div className="relative w-full overflow-visible select-none py-1 sm:py-2">
      
      {/* ─────────────────────────────────────────────────────────────
          EMBEDDED CSS FOR FLOW ANIMATION & REDUCED MOTION SUPPORT
      ───────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes dashFlowAnimation {
          from {
            stroke-dashoffset: 40;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flow-dash-path {
          animation: dashFlowAnimation 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-dash-path {
            animation: none !important;
          }
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────
          1. BACKGROUND ATMOSPHERE (RADIAL BLEND - ZERO HARD EDGES)
      ───────────────────────────────────────────────────────────── */}
      {/* Central Soft Blue Atmospheric Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.14) 0%, rgba(56, 189, 248, 0.08) 40%, rgba(240, 245, 255, 0) 70%)',
          filter: 'blur(32px)'
        }}
        aria-hidden="true"
      />

      {/* Subtle Mint Glow near Protection Node */}
      <div 
        className="absolute bottom-4 right-2 sm:right-6 w-[180px] h-[180px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.03) 45%, transparent 70%)',
          filter: 'blur(24px)'
        }}
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. UNIFIED RESPONSIVE ORBITAL COMPOSITION (MOBILE & DESKTOP)
          Renders the 4 steps in a round circular orbit with flow paths
          and central TM shield consistently across all devices.
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-[580px] mx-auto h-[330px] xs:h-[355px] sm:h-[380px] lg:h-[400px]">
        
        {/* SVG Background Layer: Orbital Rings, Flow Paths, Dotted Arrows */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          viewBox="0 0 540 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Arrowhead Marker */}
            <marker
              id="flow-arrow-blue"
              markerWidth="7"
              markerHeight="7"
              refX="4"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 1, 6 3.5, 0 6" fill="#2563EB" opacity="0.8" />
            </marker>

            {/* Glowing Linear Gradients for Shield */}
            <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="40%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>

            <linearGradient id="shieldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="shieldEmblemCore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>

            <linearGradient id="pedestalGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <linearGradient id="greenShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Faint Concentric Orbit Guide Rings */}
          <circle cx="270" cy="185" r="145" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 8" strokeOpacity="0.12" />
          <circle cx="270" cy="185" r="195" stroke="#2563EB" strokeWidth="0.8" strokeDasharray="4 10" strokeOpacity="0.08" />

          {/* Little Decorative Sparkle Stars (✦) at Orbital Nodes */}
          <text x="145" y="105" fill="#38BDF8" opacity="0.6" fontSize="12" fontFamily="sans-serif">✦</text>
          <text x="390" y="105" fill="#38BDF8" opacity="0.6" fontSize="12" fontFamily="sans-serif">✦</text>
          <text x="145" y="275" fill="#38BDF8" opacity="0.4" fontSize="11" fontFamily="sans-serif">✦</text>
          <text x="390" y="275" fill="#10B981" opacity="0.6" fontSize="12" fontFamily="sans-serif">✦</text>

          {/* ─────────────────────────────────────────────────────────
              Curved Connection Paths (01 → 02 → 04 → 03 → 01)
          ───────────────────────────────────────────────────────── */}
          {/* Path 1: Node 01 (Top-Left) to Node 02 (Top-Right) */}
          <path
            d="M 175 68 C 225 32, 315 32, 365 68"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.5"
            markerEnd="url(#flow-arrow-blue)"
            className="flow-dash-path"
          />

          {/* Path 2: Node 02 (Top-Right) down to Node 04 (Bottom-Right) */}
          <path
            d="M 405 105 C 445 160, 445 220, 405 275"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.5"
            markerEnd="url(#flow-arrow-blue)"
            className="flow-dash-path"
          />

          {/* Path 3: Node 04 (Bottom-Right) to Node 03 (Bottom-Left) */}
          <path
            d="M 365 315 C 315 348, 225 348, 175 315"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.5"
            markerEnd="url(#flow-arrow-blue)"
            className="flow-dash-path"
          />

          {/* Path 4: Node 03 (Bottom-Left) up to Node 01 (Top-Left) */}
          <path
            d="M 135 275 C 95 220, 95 160, 135 105"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.5"
            markerEnd="url(#flow-arrow-blue)"
            className="flow-dash-path"
          />

          {/* Subtle Radial Inward Rays towards central shield */}
          <line x1="160" y1="95" x2="200" y2="135" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.22" />
          <line x1="380" y1="95" x2="340" y2="135" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.22" />
          <line x1="160" y1="285" x2="205" y2="245" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.22" />
          <line x1="380" y1="285" x2="335" y2="245" stroke="#10B981" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.26" />
        </svg>

        {/* ─────────────────────────────────────────────────────────
            CENTRAL TM SHIELD (FOCAL POINT - FLOATING ON BACKGROUND)
        ───────────────────────────────────────────────────────── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] xs:w-[185px] sm:w-[220px] md:w-[245px] lg:w-[260px] pointer-events-none z-10 flex flex-col items-center">
          <svg
            viewBox="0 0 260 270"
            className="w-full h-auto drop-shadow-[0_10px_25px_rgba(25,82,199,0.18)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground Ambient Reflection / Soft Shadow */}
            <ellipse cx="130" cy="245" rx="80" ry="10" fill="rgba(12, 0, 43, 0.08)" filter="blur(6px)" />
            <ellipse cx="130" cy="243" rx="55" ry="6" fill="rgba(25, 82, 199, 0.12)" filter="blur(3px)" />

            {/* Pedestal Cylinder Base */}
            <path
              d="M 50 205 C 50 195, 210 195, 210 205 L 210 228 C 210 240, 50 240, 50 228 Z"
              fill="url(#pedestalGloss)"
            />
            {/* Pedestal Top Glowing Rim */}
            <ellipse cx="130" cy="205" rx="80" ry="14" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="1.8" />
            <ellipse cx="130" cy="205" rx="74" ry="11" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />

            {/* Pedestal Typography Banner */}
            <g transform="translate(130, 222)">
              <rect x="-56" y="-7" width="112" height="15" rx="4" fill="rgba(255,255,255,0.92)" stroke="rgba(203, 213, 225, 0.8)" strokeWidth="0.8" />
              <text x="0" y="3.5" textAnchor="middle" fill="#0C002B" fontFamily="Nunito, sans-serif" fontWeight="900" fontSize="8" letterSpacing="1.2">
                YOUR BRAND
              </text>
            </g>
            <text x="130" y="235" textAnchor="middle" fill="#1952C7" fontFamily="Nunito, sans-serif" fontWeight="800" fontSize="7" letterSpacing="0.8">
              OUR PROTECTION
            </text>

            {/* 3D Trademark Shield */}
            {/* Outer Bevel Contour */}
            <path
              d="M 130 20 L 198 48 C 198 116, 182 168, 130 192 C 78 168, 62 116, 62 48 Z"
              fill="url(#shieldRim)"
              stroke="#60A5FA"
              strokeWidth="1.5"
            />
            
            {/* Inner Shield Plate */}
            <path
              d="M 130 27 L 191 52 C 191 113, 177 160, 130 183 C 83 160, 69 113, 69 52 Z"
              fill="url(#shieldPlate)"
            />

            {/* Tech Specular Grooves on Shield Body */}
            <path d="M 85 65 L 130 40 L 175 65" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" fill="none" />
            <path d="M 95 80 L 130 60 L 165 80" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="0.8" fill="none" />
            <path d="M 130 40 L 130 70" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />

            {/* Central Glowing TM Emblem Ring */}
            <circle cx="130" cy="110" r="38" fill="none" stroke="#38BDF8" strokeWidth="2.5" opacity="0.9" />
            <circle cx="130" cy="110" r="41" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="130" cy="110" r="33" fill="url(#shieldEmblemCore)" />

            {/* Bold White "TM" Monogram */}
            <text
              x="130"
              y="119"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Nunito, sans-serif"
              fontWeight="900"
              fontSize="24"
              letterSpacing="1"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.35))' }}
            >
              TM
            </text>

            {/* Floating Green Protection Badge (Checkmark Shield at bottom-right) */}
            <g transform="translate(174, 150)">
              <circle cx="14" cy="14" r="17" fill="rgba(16, 185, 129, 0.2)" filter="blur(3px)" />
              <path
                d="M 14 3 L 25 8 C 25 18, 20 23, 14 26 C 8 23, 3 18, 3 8 Z"
                fill="url(#greenShieldGrad)"
                stroke="#FFFFFF"
                strokeWidth="1.2"
              />
              <path
                d="M 9.5 14.5 L 12.5 17.5 L 18.5 10.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {/* ─────────────────────────────────────────────────────────
            3. FOUR FLOATING PICTOGRAPHIC LABELS IN CIRCULAR ORBIT
        ───────────────────────────────────────────────────────── */}
        
        {/* Node 01: Top-Left — Trademark Search */}
        <div className="absolute top-1 sm:top-2 left-0 sm:left-1 max-w-[145px] xs:max-w-[165px] sm:max-w-[185px] md:max-w-[205px] z-20">
          <div className="group flex items-center xs:items-start gap-1.5 xs:gap-2 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white/90 sm:bg-white/75 backdrop-blur-xs border border-blue-100/90 shadow-[0_2px_12px_rgba(25,82,199,0.06)] hover:bg-white hover:shadow-md transition-all duration-200">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1952C7] flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#1952C7] bg-blue-50 px-1 py-0.2 rounded border border-blue-200/60 leading-none">
                  01
                </span>
                <span className="font-nunito text-[11px] sm:text-xs md:text-[13px] font-extrabold text-[#0C002B] leading-tight truncate">
                  Trademark Search
                </span>
              </div>
              <p className="hidden xs:block text-[9.5px] sm:text-[10.5px] text-slate-500 font-medium leading-tight truncate">
                AI availability scan
              </p>
            </div>
          </div>
        </div>

        {/* Node 02: Top-Right — AI Conflict Check */}
        <div className="absolute top-1 sm:top-2 right-0 sm:right-1 max-w-[145px] xs:max-w-[165px] sm:max-w-[185px] md:max-w-[205px] z-20">
          <div className="group flex items-center xs:items-start gap-1.5 xs:gap-2 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white/90 sm:bg-white/75 backdrop-blur-xs border border-blue-100/90 shadow-[0_2px_12px_rgba(25,82,199,0.06)] hover:bg-white hover:shadow-md transition-all duration-200">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1952C7] flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#1952C7] bg-blue-50 px-1 py-0.2 rounded border border-blue-200/60 leading-none">
                  02
                </span>
                <span className="font-nunito text-[11px] sm:text-xs md:text-[13px] font-extrabold text-[#0C002B] leading-tight truncate">
                  AI Conflict Check
                </span>
              </div>
              <p className="hidden xs:block text-[9.5px] sm:text-[10.5px] text-slate-500 font-medium leading-tight truncate">
                Cross-database similarity
              </p>
            </div>
          </div>
        </div>

        {/* Node 03: Bottom-Left — Expert Review */}
        <div className="absolute bottom-1 sm:bottom-3 left-0 sm:left-1 max-w-[145px] xs:max-w-[165px] sm:max-w-[185px] md:max-w-[205px] z-20">
          <div className="group flex items-center xs:items-start gap-1.5 xs:gap-2 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white/90 sm:bg-white/75 backdrop-blur-xs border border-amber-100/90 shadow-[0_2px_12px_rgba(217,119,6,0.06)] hover:bg-white hover:shadow-md transition-all duration-200">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                <span className="text-[8.5px] sm:text-[9.5px] font-bold text-amber-700 bg-amber-50 px-1 py-0.2 rounded border border-amber-200/60 leading-none">
                  03
                </span>
                <span className="font-nunito text-[11px] sm:text-xs md:text-[13px] font-extrabold text-[#0C002B] leading-tight truncate">
                  Expert Review
                </span>
              </div>
              <p className="hidden xs:block text-[9.5px] sm:text-[10.5px] text-slate-500 font-medium leading-tight truncate">
                Senior attorney evaluation
              </p>
            </div>
          </div>
        </div>

        {/* Node 04: Bottom-Right — Legal Protection */}
        <div className="absolute bottom-1 sm:bottom-3 right-0 sm:right-1 max-w-[145px] xs:max-w-[165px] sm:max-w-[185px] md:max-w-[205px] z-20">
          <div className="group flex items-center xs:items-start gap-1.5 xs:gap-2 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white/90 sm:bg-white/75 backdrop-blur-xs border border-emerald-100/90 shadow-[0_2px_12px_rgba(16,185,129,0.06)] hover:bg-white hover:shadow-md transition-all duration-200">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                <span className="text-[8.5px] sm:text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200/60 leading-none">
                  04
                </span>
                <span className="font-nunito text-[11px] sm:text-xs md:text-[13px] font-extrabold text-[#0C002B] leading-tight truncate">
                  Legal Protection
                </span>
              </div>
              <p className="hidden xs:block text-[9.5px] sm:text-[10.5px] text-slate-500 font-medium leading-tight truncate">
                24h priority e-filing
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
