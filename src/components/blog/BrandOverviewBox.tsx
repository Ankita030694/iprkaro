'use client';

import React from 'react';
import Link from 'next/link';

export default function BrandOverviewBox() {
  // Real client and enterprise logos from our project codebase (/public/clientlogos/)
  const realClientLogos = [
    '/clientlogos/1.png',
    '/clientlogos/2.png',
    '/clientlogos/4.png',
    '/clientlogos/6.png',
    '/clientlogos/7.png',
    '/clientlogos/8.png',
    '/clientlogos/9.png',
    '/clientlogos/10.png',
    '/clientlogos/11.png',
    '/clientlogos/12.png',
    '/clientlogos/13.png',
    '/clientlogos/14.png',
    '/clientlogos/15.png',
    '/clientlogos/16.png',
    '/partner1.jpeg',
    '/partner2.jpeg',
  ];

  const solutions = [
    {
      title: 'Register Your Trademark (TM-A)',
      href: '/our-services/trademark-registration',
    },
    {
      title: 'Reply to Section 9 / 11 Objections',
      href: '/trademark-objected-what-to-do-next',
    },
    {
      title: 'Attend Trademark Hearings',
      href: '/trademark-hearing-notice-what-to-do',
    },
    {
      title: 'AI Public Trademark Search',
      href: '/trademark-search',
    },
    {
      title: 'Find Nice Classification (1-45)',
      href: '/trademark-class-finder',
    },
  ];

  return (
    <div className="my-14 rounded-3xl border-2 border-[#DECFFB] bg-white shadow-sm overflow-hidden">
      {/* TOP SECTION: BRAND BIO & CONTINUOUS LEFT-TO-RIGHT MARQUEE */}
      <div className="p-7 sm:p-9 bg-white">
        {/* Brand Logo with IPR KARO lockup */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src="/logo/iprlogoblack.svg"
            alt="IPR Karo Logo"
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </div>

        {/* Brand Description */}
        <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed mb-8">
          <strong className="text-slate-900 font-bold">IPR Karo</strong> is India's leading digital Intellectual Property Rights (IPR) legal platform. Founded by seasoned trademark attorneys and corporate advocates, IPR Karo has assisted 10,000+ startups, direct-to-consumer (D2C) brands, and enterprises across India with end-to-end Trademark Registration, Section 9 and Section 11 Examination Objection clearance, Trademark Opposition (TM-O), Nice Classification advisory (Classes 1-45), and international filings under the Madrid Protocol. IPR Karo offers 100% transparent statutory fee pricing, guaranteed same-day TM-A filing, and dedicated advocate support.
        </p>

        {/* Clients & Trust Header */}
        <h4 className="text-center font-black text-xs uppercase tracking-widest text-slate-800 mb-5">
          TRUSTED BY 10,000+ STARTUPS &amp; ENTERPRISES
        </h4>

        {/* CONTINUOUS LEFT-TO-RIGHT INFINITE CLIENT LOGO MARQUEE */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Left & Right Gradient Blur Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee Track (Moving Smoothly from Left to Right) */}
          <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused]">
            {/* Set 1 */}
            <div className="flex items-center gap-4 shrink-0 pr-4">
              {realClientLogos.map((logoPath, i) => (
                <div
                  key={`set1-${i}`}
                  className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center h-14 hover:border-slate-400 hover:shadow-xs transition-all min-w-[130px]"
                >
                  <img
                    src={logoPath}
                    alt={`Client Logo ${i + 1}`}
                    className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Set 2 (Seamless loop duplicate) */}
            <div className="flex items-center gap-4 shrink-0 pr-4" aria-hidden="true">
              {realClientLogos.map((logoPath, i) => (
                <div
                  key={`set2-${i}`}
                  className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center h-14 hover:border-slate-400 hover:shadow-xs transition-all min-w-[130px]"
                >
                  <img
                    src={logoPath}
                    alt={`Client Logo ${i + 1}`}
                    className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Set 3 (Buffer for ultra-wide displays) */}
            <div className="flex items-center gap-4 shrink-0 pr-4" aria-hidden="true">
              {realClientLogos.map((logoPath, i) => (
                <div
                  key={`set3-${i}`}
                  className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center h-14 hover:border-slate-400 hover:shadow-xs transition-all min-w-[130px]"
                >
                  <img
                    src={logoPath}
                    alt={`Client Logo ${i + 1}`}
                    className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: OUR SOLUTIONS (CLEAN TITLES WITHOUT LOGOS/SYMBOLS) */}
      <div className="p-7 sm:p-9 bg-[#F8FAFC] border-t border-slate-100">
        <h3 className="text-lg sm:text-xl font-black text-[#7C3AED] mb-5">
          Our Solutions:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {solutions.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`p-4 sm:py-5 sm:px-6 rounded-2xl border border-slate-200/90 bg-white hover:border-[#7C3AED] hover:bg-[#DECFFB]/20 hover:shadow-xs transition-all duration-200 flex items-center justify-between group ${
                idx === 3 ? 'sm:col-span-1 lg:col-span-1' : ''
              } ${idx === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Clean Title Only */}
              <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#7C3AED] transition-colors block leading-snug">
                {item.title}
              </span>
              <span className="text-[#7C3AED] font-bold text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-2 flex-shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Left-to-Right Continuous Marquee Keyframes */}
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
