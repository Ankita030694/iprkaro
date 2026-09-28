'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScale, faRobot, faHandHoldingHeart, faGlobe,
  faShieldAlt, faLightbulb, faChartLine, faGavel,
  faFingerprint, faVrCardboard, faBolt, faChevronDown,
  faChevronLeft, faChevronRight,
  faCheck, faFileContract, faSearch, faClock, faStar, faShieldHalved
} from '@fortawesome/free-solid-svg-icons';

// Reusable Glass Card Component - Light Mode with smooth hover
const GlassCard = ({
  children,
  className = "",
  hoverEffect = true
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) => (
  <div
    className={`relative overflow-hidden p-6 sm:p-8 rounded-[20px] border border-gray-100 bg-slate-50/70 backdrop-blur-sm shadow-sm ${hoverEffect ? 'transition-all duration-300 hover:scale-[1.015] hover:shadow-lg hover:border-blue-200 hover:bg-white' : ''
      } ${className}`}
  >
    {children}
  </div>
);

// Section Title Component
const SectionTitle = ({
  title,
  subtitle
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-8 sm:mb-12">
    <h3
      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
      style={{ color: '#0C002B', fontFamily: 'Aileron', lineHeight: '1.2' }}
    >
      {title}
    </h3>
    {subtitle && (
      <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto font-sans leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const caseStudiesData = [
  {
    title: "D2C Beverage Brand",
    sector: "FMCG / Retail",
    before: "AI flagged 94% phonetic conflict with a multinational mark in Class 32. Direct risk of ₹15L rebranding loss.",
    strategy: "Attorneys devised an 'Honest Concurrent Use' affidavit establishing territorial non-overlap.",
    result: "Trademark granted registration in 8 months with zero opposition filings.",
    metric: "₹15 Lakhs Saved"
  },
  {
    title: "Fintech SaaS Scale-Up",
    sector: "Cloud & Banking",
    before: "Urgent enterprise fundraising round stalled due to unfiled proprietary algorithms and cross-border risks.",
    strategy: "Expedited Form TM-A e-filing combined with copyright registration for core software code.",
    result: "Secured formal investor sign-off with clear IP valuation moat within 72 hours.",
    metric: "Closed $2M Seed"
  },
  {
    title: "Jaipur Textile Artisans",
    sector: "Apparel & Handicrafts",
    before: "50+ counterfeit digital sellers scraping authentic hand-block prints across leading marketplaces.",
    strategy: "Secured Copyright & Industrial Design registration followed by legal automated takedown notices.",
    result: "100% of counterfeit listings removed within 24 hours of notice delivery.",
    metric: "50+ Takedowns in 24h"
  }
];

export default function AboutContentExpanded() {
  const [activeMyth, setActiveMyth] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeIpAsset, setActiveIpAsset] = useState<'trademark' | 'copyright' | 'patent' | 'design'>('trademark');
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const toggleMyth = (index: number) => {
    setActiveMyth(activeMyth === index ? null : index);
  };

  const handleCaseStudyTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleCaseStudyTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        setActiveCaseStudy((prev) => (prev + 1) % caseStudiesData.length);
      } else {
        setActiveCaseStudy((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length);
      }
    } else if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        setActiveCaseStudy((prev) => (prev + 1) % caseStudiesData.length);
      } else {
        setActiveCaseStudy((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length);
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  const pipelineStages = [
    {
      num: "01",
      title: "AI Trademark Scan",
      subtitle: "Instant Clearance",
      desc: "Our neural search engine queries 10M+ registered, pending, and abandoned trademark records in under 3 seconds.",
      bullets: [
        "Phonetic sound-alike matching (e.g., 'Nike' vs 'Nyke')",
        "Semantic similarity & Vienna Code image logo recognition",
        "Clearance probability score generated before you pay government fees"
      ],
      tag: "Time: < 3 Seconds",
      color: "from-blue-600 to-cyan-500"
    },
    {
      num: "02",
      title: "IP Attorney Audit",
      subtitle: "Pre-Filing Defense",
      desc: "Senior trademark lawyers verify your Nice Classification (Classes 1–45) and craft customized user affidavits to resist Section 9 & 11 objections.",
      bullets: [
        "Defensive class scoping to prevent competitor infringement",
        "Prior-use date verification with sworn legal documentary proofs",
        "1-on-1 strategy call with a certified Bar Council advocate"
      ],
      tag: "Review: 24–48 Hours",
      color: "from-indigo-600 to-blue-600"
    },
    {
      num: "03",
      title: "Govt E-Filing Form TM-A",
      subtitle: "Instant ™ Authorization",
      desc: "We file directly onto the Controller General of Patents, Designs and Trademarks (CGPDTM) portal, providing instant official receipt numbers.",
      bullets: [
        "Official Government Acknowledgment slip with timestamp",
        "Immediate legal entitlement to display the ™ symbol",
        "Direct API sync into your client dashboard"
      ],
      tag: "Filing: Within 24 Hours",
      color: "from-blue-700 to-indigo-700"
    },
    {
      num: "04",
      title: "24/7 Journal Watchdog",
      subtitle: "Lifetime Trademark Guard",
      desc: "Protection continues long after filing. Our automated bots scan weekly Trademark Journals to catch copycats before their 4-month opposition window closes.",
      bullets: [
        "Automated alerts if an infringer files a similar name or logo",
        "Official examination report and objection response drafting",
        "Ten-year validity tracking with automated renewal alerts"
      ],
      tag: "Active: 24/7/365",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const ipAssetsData = {
    trademark: {
      badge: "Brand Identity",
      symbol: "™ / ®",
      title: "Trademark Protection",
      whatItProtects: "Brand names, logos, slogans, acoustic sound marks, and visual product identities.",
      realExample: "e.g., Apple's name, the bitten apple logo, and 'Think Different' tagline.",
      validity: "10 Years (Renewable indefinitely)",
      roi: "Prevents counterfeiting and establishes customer trust, serving as a primary valuation driver during venture funding."
    },
    copyright: {
      badge: "Creative Assets",
      symbol: "©",
      title: "Copyright Protection",
      whatItProtects: "Software source code, algorithms, UI/UX illustrations, marketing videos, brochures, and training manuals.",
      realExample: "e.g., Proprietary frontend codebase, database schemas, and creative brand video campaigns.",
      validity: "Lifetime of Author + 60 Years",
      roi: "Empowers immediate legal DMCA/takedown notices across GitHub, Google Play, App Store, and e-commerce portals."
    },
    patent: {
      badge: "Novel Inventions",
      symbol: "Pat. Pend.",
      title: "Patent Protection",
      whatItProtects: "New, non-obvious technological inventions, hardware systems, pharmaceutical formulas, and novel industrial processes.",
      realExample: "e.g., A proprietary low-latency battery management system or AI indexing architecture.",
      validity: "20 Years from Date of Filing",
      roi: "Creates an unassailable commercial monopoly, allowing lucrative licensing agreements and market defensibility."
    },
    design: {
      badge: "Visual Ergonomics",
      symbol: "Design Reg.",
      title: "Industrial Design",
      whatItProtects: "The ornamental, aesthetic, and visual 3D shape or packaging configuration of a physical item.",
      realExample: "e.g., The distinct ergonomic curvature of a smartphone or signature bottle packaging.",
      validity: "10 Years (+ 5 Year Extension)",
      roi: "Prevents rivals from replicating your product's exterior look and feel even if the underlying mechanics differ."
    }
  };

  return (
    <div className="w-full px-6 sm:px-12 lg:px-24 pt-8 sm:pt-12 pb-0 text-[#0C002B] font-sans relative bg-white overflow-hidden">

      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[8%] left-[-8%] w-[45%] h-[45%] bg-blue-50/40 rounded-full blur-[120px]" />
        <div className="absolute top-[45%] right-[-10%] w-[40%] h-[40%] bg-indigo-50/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] bg-emerald-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-24 relative z-10">



        {/* ========================================================================= */}
        {/* SECTION 2: THE 3 CORE PILLARS                                             */}
        {/* ========================================================================= */}
        <section>
          <SectionTitle
            badge="Our Foundation"
            title="The Three Pillars of IPR Karo"
            subtitle="Built from the ground up to defy the traditional stiffness and opacity of the legal industry."
          />

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: faBalanceScale,
                badge: "Accessible Justice",
                title: "Democratization of IP",
                desc: "Legal protection is not a luxury for Fortune 500 giants—it is an existential necessity for startups and creators. We offer transparent flat pricing with zero hidden surcharges.",
                color: "text-[#1952C7]",
                bg: "bg-blue-50"
              },
              {
                icon: faRobot,
                badge: "Algorithmic Precision",
                title: "Precision through Tech",
                desc: "Human error is the nemesis of trademark clearance. Our AI scans phonetic similarities, visual motifs, and classification conflicts across 10M+ records with unmatched accuracy.",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              },
              {
                icon: faHandHoldingHeart,
                badge: "Glass-House Transparency",
                title: "Client-Centric Care",
                desc: "No black boxes. You receive real-time status updates via WhatsApp and client dashboards, with direct access to senior Bar Council registered attorneys whenever needed.",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              }
            ].map((pillar, idx) => (
              <GlassCard key={idx} className="flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pillar.bg} border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <FontAwesomeIcon icon={pillar.icon} className={`${pillar.color} text-2xl`} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-gray-600">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#0C002B] mb-3" style={{ fontFamily: 'Aileron' }}>{pillar.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#1952C7]">
                  <span>Pillar {idx + 1} of 3</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 font-normal">Guaranteed Standard</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE 4-STAGE BRAND PROTECTION PIPELINE (PICTOGRAPHIC INFOGRAPHIC) */}
        {/* ========================================================================= */}
        <section className="bg-slate-50/80 rounded-[32px] p-6 sm:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
          <SectionTitle
            badge="Proprietary Technology"
            title="The 4-Stage Brand Protection Engine"
            subtitle="How our intelligent system moves your brand safely from an initial idea to an official registered trademark."
          />

          {/* High-Resolution Pipeline Infographic Asset Display */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-white mb-10 group">
            <Image
              src="/about/brand_pipeline.jpg"
              alt="4-Stage Brand Protection Pipeline Infographic"
              width={1600}
              height={900}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              priority
            />
            <div className="hidden sm:flex absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-[#1952C7] shadow-sm items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full-Lifecycle End-to-End Architecture</span>
            </div>
          </div>

          {/* Interactive Stage-by-Stage Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {pipelineStages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border ${activeStage === idx
                    ? 'bg-white border-[#1952C7] shadow-md scale-[1.02]'
                    : 'bg-white/60 border-gray-200/70 hover:bg-white hover:border-blue-200'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${activeStage === idx ? 'bg-blue-50 text-[#1952C7]' : 'bg-gray-100 text-gray-500'}`}>
                    STAGE {stage.num}
                  </span>
                  {activeStage === idx && <span className="w-2 h-2 rounded-full bg-[#1952C7]" />}
                </div>
                <div className="text-sm sm:text-base font-bold text-[#0C002B] truncate">{stage.title}</div>
                <div className="text-[11px] text-gray-500 font-medium truncate mt-0.5">{stage.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Breakdown */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-[#1952C7]">{pipelineStages[activeStage].num}</span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#0C002B]">{pipelineStages[activeStage].title}</h4>
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{pipelineStages[activeStage].tag}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {pipelineStages[activeStage].desc}
                </p>
                <ul className="space-y-2 pt-2">
                  {pipelineStages[activeStage].bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 p-5 rounded-xl bg-slate-50 border border-gray-100 space-y-3 text-center">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Product Deliverable</div>
                <div className="text-lg font-bold text-[#0C002B]">
                  {activeStage === 0 && "3-Page Risk Clearance PDF"}
                  {activeStage === 1 && "Signed Legal Filing Affidavit"}
                  {activeStage === 2 && "Official Form TM-A Receipt & ™ Badge"}
                  {activeStage === 3 && "Weekly Journal Watchdog Dashboard"}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {activeStage === 0 && "Scores direct, phonetic, and class conflicts with algorithmic accuracy."}
                  {activeStage === 1 && "Drafted by high-court registered attorneys to preempt Section 9 objections."}
                  {activeStage === 2 && "Official acknowledgment number stamped by the Trademark Registry."}
                  {activeStage === 3 && "Continuous AI scanning against counterfeit filings for 10 full years."}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: INTERACTIVE IP ASSET BLUEPRINT (WHY IP MATTERS)                 */}
        {/* ========================================================================= */}
        <section>
          <SectionTitle
            badge="Strategic Value"
            title="The IP Asset Blueprint: Building Your Moat"
            subtitle="In the 21st-century knowledge economy, intellectual property is your primary valuation multiplier. Here is how we protect every facet of your business."
          />

          {/* Interactive Asset Switcher */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {(['trademark', 'copyright', 'patent', 'design'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveIpAsset(type)}
                className={`py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 border flex items-center justify-center gap-2 ${activeIpAsset === type
                    ? 'bg-[#1952C7] text-white border-[#1952C7] shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-200'
                  }`}
              >
                <span>{ipAssetsData[type].title.split(' ')[0]}</span>
                <span className="text-xs opacity-80">({ipAssetsData[type].symbol})</span>
              </button>
            ))}
          </div>

          {/* Active IP Blueprint Card */}
          <GlassCard className="p-8 sm:p-10 border border-blue-100 bg-white">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1952C7] text-xs font-bold uppercase tracking-wider">
                    {ipAssetsData[activeIpAsset].badge}
                  </span>
                  <span className="text-sm font-semibold text-emerald-600">
                    Validity: {ipAssetsData[activeIpAsset].validity}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold text-[#0C002B]">
                  {ipAssetsData[activeIpAsset].title}
                </h4>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">What It Protects:</span>
                    <p className="text-gray-700 text-base leading-relaxed mt-0.5">
                      {ipAssetsData[activeIpAsset].whatItProtects}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Industry Example:</span>
                    <p className="text-gray-600 text-sm italic mt-0.5">
                      {ipAssetsData[activeIpAsset].realExample}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Commercial Impact & ROI:</span>
                    <p className="text-[#1952C7] font-semibold text-sm leading-relaxed mt-0.5">
                      {ipAssetsData[activeIpAsset].roi}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-gray-100 text-center space-y-4">
                <div className="text-5xl font-extrabold text-[#1952C7]">
                  {ipAssetsData[activeIpAsset].symbol}
                </div>
                <div className="text-xs font-bold text-[#0C002B] uppercase tracking-wider">
                  Official Legal Symbol
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Authorized under the Indian Trademarks Act 1999 & international treaties for immediate brand defense.
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1.5">
                    <FontAwesomeIcon icon={faBolt} /> Fast-track online filing available
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: REAL CASE STUDIES (BEFORE VS AFTER BADGES)                     */}
        {/* ========================================================================= */}
        <section>
          <SectionTitle
            badge="Proven Track Record"
            title="Real Brands, Real Legal Defense"
            subtitle="How our AI conflict detection and veteran attorneys saved enterprises from catastrophic rebranding battles."
          />

          {/* Mobile Swipeable Card Carousel with Navigation Arrows */}
          <div className="block md:hidden">
            <div
              className="relative touch-pan-y"
              onTouchStart={handleCaseStudyTouchStart}
              onTouchEnd={handleCaseStudyTouchEnd}
            >
              <GlassCard className="flex flex-col justify-between bg-white border border-gray-200/90 shadow-md min-h-[380px] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#1952C7] uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      Case Study 0{activeCaseStudy + 1} of 0{caseStudiesData.length}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      {caseStudiesData[activeCaseStudy].sector}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#0C002B] mb-3" style={{ fontFamily: 'Aileron' }}>
                    {caseStudiesData[activeCaseStudy].title}
                  </h4>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3 bg-red-50/70 rounded-xl border border-red-100/80">
                      <span className="font-bold text-red-700 block mb-0.5">THE RISK (BEFORE):</span>
                      <p className="text-gray-700">{caseStudiesData[activeCaseStudy].before}</p>
                    </div>

                    <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100/80">
                      <span className="font-bold text-[#1952C7] block mb-0.5">IPR KARO STRATEGY:</span>
                      <p className="text-gray-700">{caseStudiesData[activeCaseStudy].strategy}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="text-emerald-700 text-xs font-bold flex items-center gap-1.5 flex-1 pr-1">
                    <FontAwesomeIcon icon={faCheck} className="text-emerald-600 flex-shrink-0" />
                    <span>{caseStudiesData[activeCaseStudy].result}</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#1952C7] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 flex-shrink-0">
                    {caseStudiesData[activeCaseStudy].metric}
                  </span>
                </div>
              </GlassCard>
            </div>

            {/* Mobile Navigation Controls: Arrows & Dot Indicators */}
            <div className="flex items-center justify-between mt-4 px-2">
              <button
                type="button"
                onClick={() => setActiveCaseStudy((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length)}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1952C7] hover:bg-blue-50 active:scale-95 transition-all"
                aria-label="Previous Case Study"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
              </button>

              <div className="flex items-center gap-1.5">
                {caseStudiesData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveCaseStudy(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeCaseStudy === idx ? 'w-6 bg-[#1952C7]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to Case Study ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveCaseStudy((prev) => (prev + 1) % caseStudiesData.length)}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1952C7] hover:bg-blue-50 active:scale-95 transition-all"
                aria-label="Next Case Study"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </button>
            </div>
          </div>

          {/* Desktop 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {caseStudiesData.map((study, idx) => (
              <GlassCard key={idx} className="flex flex-col justify-between bg-white border border-gray-100 shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#1952C7] uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded">
                      Case Study 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">{study.sector}</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#0C002B] mb-4" style={{ fontFamily: 'Aileron' }}>{study.title}</h4>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3 bg-red-50/60 rounded-xl border border-red-100">
                      <span className="font-bold text-red-700 block mb-0.5">THE RISK (BEFORE):</span>
                      <p className="text-gray-700">{study.before}</p>
                    </div>

                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                      <span className="font-bold text-[#1952C7] block mb-0.5">IPR KARO STRATEGY:</span>
                      <p className="text-gray-700">{study.strategy}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCheck} className="text-emerald-600" />
                    <span>{study.result}</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#1952C7] bg-blue-50 px-2 py-1 rounded">
                    {study.metric}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: GLOBAL REACH & MADRID PROTOCOL (MAP INFOGRAPHIC)              */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 rounded-[32px] p-6 sm:p-12 border border-blue-100 shadow-sm relative overflow-hidden">
          <SectionTitle
            badge="Global Expansion"
            title="From India to 130+ Countries: The Madrid Protocol"
            subtitle="Never let national borders cap your commercial ambition. Protect your brand in the world's most lucrative markets through one streamlined application."
          />

          {/* High-Resolution Madrid Protocol Global Map Asset */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-white mb-10 group">
            <Image
              src="/about/madrid_protocol.jpg"
              alt="Madrid Protocol 130+ Countries Global Map Infographic"
              width={1600}
              height={900}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              priority
            />
            <div className="hidden sm:flex absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-[#1952C7] shadow-sm items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1952C7]" />
              <span>WIPO Madrid System Authorized Coordinator</span>
            </div>
          </div>

          {/* Global Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#1952C7]">130+</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Countries Accessible</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600">1 Single</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Master Application</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#0C002B]">1 Currency</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Unified Billing (CHF/INR)</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">10 Years</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Centralized Renewal</div>
            </div>
          </div>

          {/* Madrid Protocol Country Chips */}
          <div className="w-full overflow-x-auto py-1 -mx-2 px-2 sm:mx-0 sm:px-0">
            <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 text-xs font-semibold text-gray-700 whitespace-nowrap min-w-max mx-auto">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition-colors">🇺🇸 United States (USPTO)</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition-colors">🇪🇺 European Union (EUIPO)</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition-colors">🇬🇧 United Kingdom (UKIPO)</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition-colors">🇦🇪 United Arab Emirates</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition-colors">🇸🇬 Singapore (IPOS)</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition-colors">🇯🇵 Japan (JPO)</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs hover:border-blue-300 transition-colors">🇦🇺 Australia (IP Australia)</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: BUSTING COMMON IP MYTHS                                        */}
        {/* ========================================================================= */}
        <section>
          <SectionTitle
            badge="Legal Reality Check"
            title="Busting Dangerous IP Myths"
            subtitle="Common misconceptions that cost Indian business owners millions in legal disputes."
          />

          <div className="space-y-2.5 sm:space-y-4 max-w-4xl mx-auto">
            {[
              {
                myth: "I registered my company name with MCA / Registrar of Companies, so my trademark is automatically protected.",
                fact: "False. Company name registration (MCA) only registers a corporate entity. Only a trademark under the Trademarks Act 1999 gives you the exclusive commercial right to stop competitors from using your brand name."
              },
              {
                myth: "I can tweak the spelling slightly to avoid infringing an existing brand.",
                fact: "False. Section 11 of the Trademarks Act strictly enforces the 'Phonetic Similarity' doctrine. 'Nike' and 'Nyke' or 'Zomato' and 'Zomaatoo' are legally judged as confusingly similar."
              },
              {
                myth: "I should wait until my business becomes large before registering my trademark.",
                fact: "Dangerous mistake. India is a 'First to File' priority jurisdiction. Trademark squatters regularly monitor rising brands and file ahead of you, holding your hard-earned reputation hostage."
              },
              {
                myth: "Trademark registration takes too long to offer any immediate protection.",
                fact: "False. The moment your Form TM-A is submitted electronically, you gain immediate legal rights to display the ™ symbol, putting counterfeiters and copycats on formal notice."
              },
              {
                myth: "A trademark covers every kind of business activity automatically.",
                fact: "False. Trademarks are strictly classified into 45 NICE Classes (Classes 1–34 for Goods, Classes 35–45 for Services). You must correctly designate classes to prevent competitor encroachment."
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                    activeMyth === idx
                      ? 'bg-white border-blue-300 shadow-md scale-[1.01]'
                      : 'bg-slate-50/70 border-gray-100 hover:bg-white hover:border-gray-200'
                  }`}
                  onClick={() => toggleMyth(idx)}
                >
                  <div className="flex justify-between items-center cursor-pointer gap-2 sm:gap-4">
                    <h4 className={`text-[13px] sm:text-base font-bold flex items-center gap-2 sm:gap-3 transition-colors leading-snug ${
                      activeMyth === idx ? 'text-[#1952C7]' : 'text-[#0C002B]'
                    }`}>
                      <span className="text-red-600 font-bold text-[10px] sm:text-xs uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-red-50 border border-red-100 flex-shrink-0">
                        Myth
                      </span>
                      <span>{item.myth}</span>
                    </h4>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`text-gray-400 text-xs transition-transform duration-300 flex-shrink-0 ${
                        activeMyth === idx ? 'rotate-180 text-[#1952C7]' : ''
                      }`}
                    />
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ${activeMyth === idx ? 'max-h-64 opacity-100 mt-2.5 sm:mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex items-start gap-2.5 sm:gap-3 pl-3 sm:pl-4 border-l-3 sm:border-l-4 border-emerald-500 bg-emerald-50/40 p-2.5 sm:p-3.5 rounded-r-xl">
                      <span className="text-emerald-700 font-bold text-[10px] sm:text-xs uppercase mt-0.5 px-1.5 py-0.5 bg-emerald-100 rounded flex-shrink-0">
                        Fact
                      </span>
                      <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">{item.fact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CLOSING MANIFESTO                                              */}
        {/* ========================================================================= */}
        <section className="pb-0">
          <div className="p-5 sm:p-12 rounded-2xl sm:rounded-[32px] bg-gradient-to-r from-[#0C002B] via-[#1345C3] to-[#1952C7] shadow-xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_70%)] opacity-40 pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto space-y-3.5 sm:space-y-6">
              <span className="text-[10px] sm:text-xs font-bold text-cyan-300 uppercase tracking-widest bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 inline-block">
                The IPR Karo Promise
              </span>
              <p className="text-white text-base sm:text-2xl lg:text-3xl font-extrabold italic leading-snug sm:leading-tight drop-shadow-sm px-1 sm:px-4" style={{ fontFamily: 'Aileron' }}>
                "Intellectual property is not just a defensive shield—it is your offensive sword in the marketplace. We arm you for the battle of ideas."
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 pt-1 sm:pt-2 text-white/90 text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheck} className="text-emerald-400 text-xs" /> 100% Online Process</span>
                <span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheck} className="text-emerald-400 text-xs" /> Dedicated IP Attorney</span>
                <span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faCheck} className="text-emerald-400 text-xs" /> Transparent Pricing</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
