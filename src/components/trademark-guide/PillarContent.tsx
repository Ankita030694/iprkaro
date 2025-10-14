'use client';

import React from 'react';
import Link from 'next/link';

export default function PillarContent() {
  const trademarkClasses = [
    { class: 1, description: "Chemicals, adhesives, fertilizers" },
    { class: 2, description: "Paints, varnishes, lacquers" },
    { class: 3, description: "Cosmetics, cleaning preparations" },
    { class: 4, description: "Industrial oils, lubricants, fuels" },
    { class: 5, description: "Pharmaceuticals, medical supplies" },
    { class: 9, description: "Software, electronics, computers" },
    { class: 16, description: "Paper goods, stationery, publications" },
    { class: 25, description: "Clothing, footwear, headgear" },
    { class: 29, description: "Meat, dairy, processed foods" },
    { class: 30, description: "Coffee, tea, flour, bakery products" },
    { class: 35, description: "Advertising, business management" },
    { class: 41, description: "Education, entertainment services" },
    { class: 42, description: "IT services, scientific research" },
    { class: 43, description: "Restaurant, hotel services" },
    { class: 44, description: "Medical, beauty, agriculture services" },
    { class: 45, description: "Legal, security services" }
  ];

  const documents = [
    "Applicant's name, address, and nationality details",
    "Business incorporation certificate (for companies) or PAN card (for individuals)",
    "Trademark logo or wordmark (JPG format, minimum 300x300px)",
    "List of goods/services with class selection",
    "Priority claim documents (if claiming priority from another country)",
    "Power of Attorney (if filing through a representative)",
    "User affidavit (for proposed-to-be-used marks)",
    "Proprietorship certificate (if applicable)",
    "Digital signature (for online filing)"
  ];

  const processSteps = [
    {
      step: "Trademark Search",
      timeline: "1-2 days",
      description: "Comprehensive search in the Indian Trademark Registry database to check for identical or similar existing marks. This includes phonetic, visual, and conceptual similarity analysis."
    },
    {
      step: "Application Preparation",
      timeline: "2-3 days",
      description: "Drafting TM-A form with accurate classification of goods/services under Nice Classification, preparing trademark representation, and compiling required documents."
    },
    {
      step: "Filing with IP India",
      timeline: "1 day",
      description: "Electronic filing of application through the IP India portal. Upon successful submission, an application number is generated immediately."
    },
    {
      step: "Formality Check by Registry",
      timeline: "1-2 months",
      description: "The Trademark Registry conducts an initial formality check to ensure all documents are in order and fees are paid correctly."
    },
    {
      step: "Examination Report",
      timeline: "12-18 months",
      description: "Trademark examiner reviews the application for registrability, checking for conflicts with existing marks, descriptiveness, and compliance with Trademarks Act, 1999."
    },
    {
      step: "Respond to Objections (if any)",
      timeline: "1 month",
      description: "If objections are raised, applicant has 30 days to file a reply. May include written submissions and/or hearing before the Trademark Officer."
    },
    {
      step: "Publication in Trademark Journal",
      timeline: "1-2 months post-acceptance",
      description: "After examination clearance, mark is published in the weekly Trademark Journal for public opposition period of 4 months."
    },
    {
      step: "Opposition Period",
      timeline: "4 months",
      description: "Public can file opposition within 4 months of publication. If opposed, counter-statement and evidence rounds follow."
    },
    {
      step: "Registration Certificate",
      timeline: "2-3 months post-journal",
      description: "If no opposition is filed or opposition is decided in favor, registration certificate is issued with 10-year validity from application date."
    }
  ];

  const commonObjections = [
    {
      objection: "Descriptive Mark",
      description: "Mark directly describes the goods/services without distinctive character",
      response: "Argue acquired distinctiveness through extensive use, submit sales figures, advertising expenses, market surveys, and evidence of consumer recognition"
    },
    {
      objection: "Similar to Existing Mark",
      description: "Phonetic, visual, or conceptual similarity with earlier registered/pending marks",
      response: "Distinguish your mark on grounds of different trade channels, consumer base, co-existence in market, differences in goods/services classification"
    },
    {
      objection: "Generic or Common Term",
      description: "Mark consists of words commonly used in the trade or generic terms",
      response: "Demonstrate that the mark has acquired secondary meaning, evidence of exclusive use, brand recognition surveys, media coverage"
    },
    {
      objection: "Prohibited Under Section 9",
      description: "Mark contains elements that are deceptive, scandalous, or against public morality",
      response: "Clarify the meaning and context, provide evidence that mark is not misleading, reference precedents where similar marks were allowed"
    },
    {
      objection: "Incorrect Classification",
      description: "Goods/services not properly classified under Nice Classification",
      response: "Amend the specification with correct class and description, cite class headings and explanatory notes from Nice Classification"
    },
    {
      objection: "Prior User/Proprietor",
      description: "Someone claims prior use or proprietorship of the mark",
      response: "Submit earliest use evidence, invoices, advertisements, dated samples, registration certificates from other jurisdictions showing seniority"
    }
  ];

  const feesStructure = [
    {
      package: "AI Trademark Filing: Standard",
      price: "₹1,999",
      features: [
        "Complete online trademark filing included",
        "AI trademark search & conflict check",
        "Expert legal guidance throughout the process",
        "Essential trademark protection for your brand"
      ],
      popular: false
    },
    {
      package: "Premium Registration: With AI Risk Checkup",
      price: "₹2,999",
      features: [
        "AI-powered trademark registration and risk report",
        "Advanced legal guidance and trademark filing",
        "Priority VIP support, fast application monitoring",
        "Enhanced trademark and brand safeguard"
      ],
      popular: true
    },
    {
      package: "Brand Monitoring & Protection: AI Powered",
      price: "₹3,999",
      features: [
        "24/7 AI-powered brand & trademark monitoring",
        "Instant alerts for conflicts and infringements",
        "Continuous protection against copycats",
        "Ongoing legal peace of mind for your brand"
      ],
      popular: false
    }
  ];

  return (
    <div className="space-y-3 lg:space-y-4 xl:space-y-5">
      {/* Introduction Section */}
      <section id="introduction" className="scroll-mt-14">
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <div 
              className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full relative"
              style={{
                background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h1 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Complete Trademark Registration Guide India 2025
            </h1>
          </div>

          <div 
            className="group relative p-3 lg:p-3.5 xl:p-4 rounded-lg backdrop-blur-sm transition-all duration-500"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-2">
              Trademark registration is the cornerstone of brand protection in India's competitive marketplace. Whether you're a startup founder, established business owner, or individual entrepreneur, securing your trademark rights is crucial for long-term success. This comprehensive guide walks you through every aspect of trademark registration in India—from understanding what trademarks are to navigating the complete registration process in 2025.
            </p>
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed">
              With over <span className="font-bold text-[#FFB703]">5 lakh+ trademark applications</span> filed annually in India, the importance of proper trademark protection cannot be overstated. This guide provides you with expert insights on processes, fees, documentation, class selection, objection handling, and timelines—everything you need to successfully register your trademark.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Trademark */}
      <section id="what-is-trademark" className="scroll-mt-14">
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <div 
              className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              What is a Trademark?
            </h2>
          </div>

          <div 
            className="p-3 lg:p-3.5 rounded-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-2">
              A trademark is any distinctive sign, symbol, word, phrase, logo, design, or combination thereof that identifies and distinguishes the source of goods or services of one party from those of others. Under the <span className="font-semibold text-[#FFB703]">Trademarks Act, 1999</span>, a trademark serves as a badge of origin that helps consumers identify products or services from a particular source.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
              <div 
                className="p-2 rounded-md"
                style={{ 
                  background: 'rgba(255, 183, 3, 0.08)',
                  border: '1px solid rgba(255, 183, 3, 0.2)'
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <i className="fas fa-trademark text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold">Word Marks</h4>
                </div>
                <p className="text-white/90 font-nunito text-[10px] lg:text-xs">
                  Text-based trademarks like "Google", "Tata", or "Infosys" that use distinctive words or phrases.
                </p>
              </div>

              <div 
                className="p-2 rounded-md"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <i className="fas fa-image text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold">Logo Marks</h4>
                </div>
                <p className="text-white/90 font-nunito text-[10px] lg:text-xs">
                  Design-based trademarks featuring unique visual elements, symbols, or stylized logos.
                </p>
              </div>

              <div 
                className="p-2 rounded-md"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <i className="fas fa-layer-group text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold">Composite Marks</h4>
                </div>
                <p className="text-white/90 font-nunito text-[10px] lg:text-xs">
                  Combination of words and designs creating a unified brand identity.
                </p>
              </div>

              <div 
                className="p-2 rounded-md"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <i className="fas fa-shapes text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold">Non-Traditional Marks</h4>
                </div>
                <p className="text-white/90 font-nunito text-[10px] lg:text-xs">
                  Sounds, colors, 3D shapes, or other distinctive non-conventional identifiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Register - Legal Benefits */}
      <section id="why-register" className="scroll-mt-14">
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <div 
              className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              Why Register Your Trademark? Legal Benefits
            </h2>
          </div>

          <div 
            className="p-3 lg:p-3.5 rounded-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-3">
              While using a trademark provides common law rights, <span className="font-semibold text-[#FFB703]">registration offers substantial legal advantages</span> that are crucial for business growth and brand protection. Here's why registration matters:
            </p>

            <div className="space-y-2">
              <div 
                className="p-2 lg:p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)',
                  border: '1px solid rgba(255, 183, 3, 0.2)'
                }}
              >
                <div className="flex items-start gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                      boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)'
                    }}
                  >
                    <i className="fas fa-shield-alt text-[#0C002B] text-xs" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1">
                      Exclusive Legal Rights & Nationwide Protection
                    </h4>
                    <p className="text-white/90 font-nunito text-[10px] lg:text-xs leading-relaxed">
                      Registration grants you <strong>exclusive rights</strong> to use the trademark throughout India for the registered goods/services. You can prevent others from using identical or deceptively similar marks, giving you a competitive edge and market monopoly.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="p-2 lg:p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-start gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255, 183, 3, 0.15)',
                      border: '1px solid rgba(255, 183, 3, 0.3)'
                    }}
                  >
                    <i className="fas fa-gavel text-[#FFB703] text-xs" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1">
                      Legal Presumption of Ownership & Validity
                    </h4>
                    <p className="text-white/90 font-nunito text-[10px] lg:text-xs leading-relaxed">
                      A registered trademark serves as <strong>prima facie evidence</strong> of ownership. In infringement cases, the burden of proof shifts to the defendant, making litigation easier and more cost-effective for you.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="p-2 lg:p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-start gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255, 183, 3, 0.15)',
                      border: '1px solid rgba(255, 183, 3, 0.3)'
                    }}
                  >
                    <i className="fas fa-globe-asia text-[#FFB703] text-xs" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1">
                      Enables International Expansion
                    </h4>
                    <p className="text-white/90 font-nunito text-[10px] lg:text-xs leading-relaxed">
                      Indian trademark registration allows you to claim <strong>priority under the Paris Convention</strong> when filing in other countries. It's also essential for protection under the Madrid Protocol for international trademark registration.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="p-2 lg:p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-start gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255, 183, 3, 0.15)',
                      border: '1px solid rgba(255, 183, 3, 0.3)'
                    }}
                  >
                    <i className="fas fa-chart-line text-[#FFB703] text-xs" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1">
                      Valuable Business Asset & Monetization
                    </h4>
                    <p className="text-white/90 font-nunito text-[10px] lg:text-xs leading-relaxed">
                      Registered trademarks are <strong>intangible assets</strong> that can be licensed, franchised, sold, or used as collateral for loans. They increase your business valuation and attract investors.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="p-2 lg:p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-start gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255, 183, 3, 0.15)',
                      border: '1px solid rgba(255, 183, 3, 0.3)'
                    }}
                  >
                    <i className="fas fa-ban text-[#FFB703] text-xs" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1">
                      Protection Against Domain Squatting & Online Infringement
                    </h4>
                    <p className="text-white/90 font-nunito text-[10px] lg:text-xs leading-relaxed">
                      Registered trademarks help you reclaim infringing domain names through <strong>UDRP proceedings</strong> and take down counterfeit listings on e-commerce platforms quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="p-2 lg:p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-start gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255, 183, 3, 0.15)',
                      border: '1px solid rgba(255, 183, 3, 0.3)'
                    }}
                  >
                    <i className="fas fa-trophy text-[#FFB703] text-xs" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1">
                      Brand Credibility & Consumer Trust
                    </h4>
                    <p className="text-white/90 font-nunito text-[10px] lg:text-xs leading-relaxed">
                      The ® symbol signals authenticity and quality to consumers, building <strong>brand trust and market reputation</strong>. It differentiates you from competitors and establishes market authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section id="process" className="scroll-mt-14">
        <div className="space-y-3 lg:space-y-3.5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Step-by-Step Trademark Registration Process in India
            </h2>
          </div>

          <div 
            className="p-3 lg:p-4 rounded-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-3">
              The trademark registration process in India typically takes <span className="font-bold text-[#FFB703]">18-24 months</span> from application to registration. Here's a detailed breakdown of each stage:
            </p>

            <div className="relative space-y-3">
              {/* Connecting line */}
              <div 
                className="absolute left-3 top-0 bottom-0 w-0.5"
                style={{
                  background: 'rgba(255, 183, 3, 0.3)',
                  opacity: 0.5
                }}
              />
              
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex gap-3">
                  {/* Step Number Badge */}
                  <div 
                    className="relative z-10 flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center font-nunito font-bold text-xs"
                    style={{ 
                      background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                      color: '#0C002B',
                      boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)'
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Step Content */}
                  <div 
                    className="flex-1 p-2 lg:p-3 rounded-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-1.5 mb-1.5">
                      <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold">
                        {step.step}
                      </h4>
                      <span 
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{
                          background: 'rgba(255, 183, 3, 0.15)',
                          border: '1px solid rgba(255, 183, 3, 0.3)',
                          color: '#FFB703'
                        }}
                      >
                        <i className="fas fa-clock mr-1" aria-hidden="true"></i>
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-white/90 font-nunito text-[10px] lg:text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="mt-4 p-3 rounded-md"
              style={{
                background: 'rgba(255, 183, 3, 0.08)',
                border: '1px solid rgba(255, 183, 3, 0.2)'
              }}
            >
              <div className="flex items-start gap-2">
                <i className="fas fa-info-circle text-[#FFB703] text-sm mt-0.5" aria-hidden="true"></i>
                <div>
                  <h5 className="text-white font-nunito text-xs font-semibold mb-1">Forms Used in Trademark Registration</h5>
                  <p className="text-white/90 font-nunito text-[10px]">
                    <strong>TM-A:</strong> Main application form for trademark registration<br/>
                    <strong>TM-9:</strong> Form for entering appearance in opposition<br/>
                    <strong>TM-O:</strong> Notice of opposition<br/>
                    <strong>TM-R:</strong> Request for renewal of trademark
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Packages */}
      <section id="fees" className="scroll-mt-14">
        <div className="space-y-3 lg:space-y-3.5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Trademark Registration Fees & Transparent Pricing
            </h2>
          </div>

          <div 
            className="p-3 lg:p-4 rounded-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-3">
              Trademark registration fees in India consist of <strong>government fees</strong> and <strong>professional service fees</strong>. Here's a transparent breakdown:
            </p>

            {/* Government Fees Table */}
            <div 
              className="p-3 lg:p-3.5 rounded-md mb-4"
              style={{
                background: 'rgba(255, 183, 3, 0.08)',
                border: '1px solid rgba(255, 183, 3, 0.2)'
              }}
            >
              <h4 className="text-white font-nunito text-sm font-semibold mb-2 flex items-center gap-1.5">
                <i className="fas fa-landmark text-[#FFB703] text-xs" aria-hidden="true"></i>
                Official Government Fees (Per Class)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-white/70 font-nunito text-[10px] mb-0.5">Individual / Startup / Small Entity</p>
                  <p className="text-white font-nunito text-lg font-bold">₹4,500</p>
                </div>
                <div>
                  <p className="text-white/70 font-nunito text-[10px] mb-0.5">Other Entities (Companies)</p>
                  <p className="text-white font-nunito text-lg font-bold">₹9,000</p>
                </div>
                <div>
                  <p className="text-white/70 font-nunito text-[10px] mb-0.5">Fast Track Filing (Priority)</p>
                  <p className="text-white font-nunito text-lg font-bold">₹20,000</p>
                </div>
              </div>
            </div>

            {/* Service Packages */}
            <h4 className="text-white font-nunito text-sm font-semibold mb-3">Our Service Packages</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {feesStructure.map((pkg, index) => (
                <div 
                  key={index}
                  className={`relative p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                    pkg.popular ? 'scale-105' : ''
                  }`}
                  style={
                    pkg.popular
                      ? {
                          background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
                          border: '2px solid rgba(255, 183, 3, 0.4)',
                          boxShadow: '0 6px 22px rgba(255, 183, 3, 0.3)'
                        }
                      : {
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                        }
                  }
                >
                  {pkg.popular && (
                    <div 
                      className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                        color: '#0C002B'
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-3">
                    <h5 className="text-white font-nunito text-sm font-semibold mb-1.5">
                      {pkg.package}
                    </h5>
                    <div className="text-white font-nunito text-2xl font-bold">
                      {pkg.price}
                    </div>
                    <p className="text-white/70 font-nunito text-[10px] mt-0.5">+ Government fees</p>
                  </div>

                  <ul className="space-y-1.5 mb-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <i className="fas fa-check-circle text-[#FFB703] text-xs mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                        <span className="text-white/90 font-nunito text-[10px]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className="w-full py-2 rounded-md font-nunito font-bold text-xs transition-all duration-300 hover:scale-105"
                    style={
                      pkg.popular
                        ? {
                            background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                            color: '#0C002B',
                            boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)'
                          }
                        : {
                            background: 'rgba(255, 183, 3, 0.15)',
                            border: '1px solid rgba(255, 183, 3, 0.3)',
                            color: '#FFB703'
                          }
                    }
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section id="documents" className="scroll-mt-14">
        <div className="space-y-3 lg:space-y-3.5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Documents Required for Trademark Registration
            </h2>
          </div>

          <div 
            className="p-3 lg:p-4 rounded-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-3">
              Proper documentation is crucial for a smooth trademark registration process. Here's a comprehensive checklist:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {documents.map((document, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-2 p-2 rounded-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{
                      background: '#FFB703',
                      boxShadow: '0 0 7px rgba(255, 183, 3, 0.5)'
                    }}
                  />
                  <span className="text-white/95 font-nunito text-xs lg:text-sm">
                    {document}
                  </span>
                </div>
              ))}
            </div>

            <div 
              className="mt-3 p-3 rounded-md"
              style={{
                background: 'rgba(255, 183, 3, 0.08)',
                border: '1px solid rgba(255, 183, 3, 0.2)'
              }}
            >
              <div className="flex items-start gap-2">
                <i className="fas fa-lightbulb text-[#FFB703] text-sm mt-0.5" aria-hidden="true"></i>
                <div>
                  <h5 className="text-white font-nunito text-xs font-semibold mb-0.5">Pro Tip</h5>
                  <p className="text-white/90 font-nunito text-[10px]">
                    Ensure your trademark logo is in <strong>JPG format</strong> with minimum dimensions of <strong>300x300 pixels</strong>. For best results, use a high-resolution vector format that can be converted to JPG without quality loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark Classes */}
      <section id="classes" className="scroll-mt-14">
        <div className="space-y-3 lg:space-y-3.5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Trademark Classes Explained: How to Choose
            </h2>
          </div>

          <div 
            className="p-3 lg:p-4 rounded-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-3">
              India follows the <span className="font-bold text-[#FFB703]">Nice Classification</span> system, which divides all goods and services into <strong>45 classes</strong> (Classes 1-34 for goods, Classes 35-45 for services). Choosing the correct class is critical for proper protection.
            </p>

            <div 
              className="p-3 rounded-md mb-3"
              style={{
                background: 'rgba(255, 183, 3, 0.08)',
                border: '1px solid rgba(255, 183, 3, 0.2)'
              }}
            >
              <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1.5 flex items-center gap-1.5">
                <i className="fas fa-exclamation-triangle text-[#FFB703] text-xs" aria-hidden="true"></i>
                Important: Class Selection Strategy
              </h4>
              <p className="text-white/90 font-nunito text-[10px] lg:text-xs">
                Your trademark protection is <strong>limited to the classes</strong> you register in. If you register in Class 25 (clothing) but not Class 9 (mobile apps), someone else can register the same mark for software. Consider your current business and <strong>future expansion plans</strong> when selecting classes.
              </p>
            </div>

            <h4 className="text-white font-nunito text-sm font-semibold mb-2">Popular Trademark Classes:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {trademarkClasses.map((item, index) => (
                <div 
                  key={index}
                  className="p-2 rounded-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div 
                      className="w-7 h-7 rounded-md flex items-center justify-center font-nunito font-bold text-xs"
                      style={{
                        background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                        color: '#0C002B'
                      }}
                    >
                      {item.class}
                    </div>
                    <span className="text-white/90 font-nunito text-xs lg:text-sm">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="mt-3 p-3 rounded-md"
              style={{
                background: 'rgba(255, 183, 3, 0.08)',
                border: '1px solid rgba(255, 183, 3, 0.2)'
              }}
            >
              <div className="flex items-start gap-2">
                <i className="fas fa-search text-[#FFB703] text-sm mt-0.5" aria-hidden="true"></i>
                <div>
                  <h5 className="text-white font-nunito text-xs font-semibold mb-1.5">Need Help Selecting Classes?</h5>
                  <p className="text-white/90 font-nunito text-[10px] mb-2">
                    Class selection is complex and requires expertise. Our AI-powered trademark search tool analyzes your business and recommends appropriate classes automatically.
                  </p>
                  <Link 
                    href="/services/trademark-registration"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-nunito font-semibold text-[10px] transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                      color: '#0C002B',
                      boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)'
                    }}
                  >
                    Use AI Trademark Search
                    <i className="fas fa-arrow-right text-[8px]" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections */}
      <section id="objections" className="scroll-mt-14">
        <div className="space-y-3 lg:space-y-3.5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Common Trademark Objections & How to Respond
            </h2>
          </div>

          <div 
            className="p-3 lg:p-4 rounded-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-white/95 font-nunito text-xs lg:text-sm leading-relaxed mb-3">
              Approximately <span className="font-bold text-[#FFB703]">60-70% of trademark applications</span> receive examination objections. Understanding common objections and response strategies is crucial for successful registration.
            </p>

            <div className="space-y-3">
              {commonObjections.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ 
                    background: index === 0 
                      ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: index === 0 
                      ? '1px solid rgba(255, 183, 3, 0.2)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div 
                      className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(255, 183, 3, 0.15)',
                        border: '1px solid rgba(255, 183, 3, 0.3)'
                      }}
                    >
                      <i className="fas fa-exclamation-circle text-[#FFB703] text-xs" aria-hidden="true"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-0.5">
                        {item.objection}
                      </h4>
                      <p className="text-white/80 font-nunito text-[10px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div 
                    className="pl-8 p-2 rounded-md"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div className="flex items-start gap-1.5">
                      <i className="fas fa-reply text-[#FFB703] text-xs mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                      <div>
                        <p className="text-white/70 font-nunito text-[9px] font-semibold mb-0.5">RESPONSE STRATEGY:</p>
                        <p className="text-white/90 font-nunito text-[10px]">
                          {item.response}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="mt-3 p-3 rounded-md"
              style={{
                background: 'rgba(255, 183, 3, 0.08)',
                border: '1px solid rgba(255, 183, 3, 0.2)'
              }}
            >
              <div className="flex items-start gap-2">
                <i className="fas fa-shield-alt text-[#FFB703] text-sm mt-0.5" aria-hidden="true"></i>
                <div>
                  <h5 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1.5">
                    Expert Objection Handling by IPRKaro
                  </h5>
                  <p className="text-white/90 font-nunito text-[10px] lg:text-xs mb-2">
                    Our experienced trademark attorneys have successfully handled <strong>1000+ objection cases</strong> with a high success rate. We draft comprehensive replies, gather supporting evidence, and represent you at hearings before the Trademark Registry.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span 
                      className="px-2 py-0.5 rounded-full text-[9px] font-semibold"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#FFB703'
                      }}
                    >
                      <i className="fas fa-check mr-0.5" aria-hidden="true"></i>
                      90% Success Rate
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded-full text-[9px] font-semibold"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#FFB703'
                      }}
                    >
                      <i className="fas fa-clock mr-0.5" aria-hidden="true"></i>
                      Fast Response
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded-full text-[9px] font-semibold"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#FFB703'
                      }}
                    >
                      <i className="fas fa-gavel mr-0.5" aria-hidden="true"></i>
                      Expert Advocacy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="scroll-mt-14">
        <div 
          className="relative overflow-hidden p-4 lg:p-5 xl:p-6 rounded-xl"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
            border: '2px solid rgba(255, 183, 3, 0.3)',
            boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
          
          <div className="relative text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-3"
              style={{
                background: 'rgba(255, 183, 3, 0.2)',
                border: '1px solid rgba(255, 183, 3, 0.4)'
              }}
            >
              <i className="fas fa-bolt text-[#FFB703] text-xs" aria-hidden="true"></i>
              <span className="text-white font-nunito text-xs font-semibold">Start Your Trademark Journey Today</span>
            </div>

            <h3 className="text-white font-nunito text-lg lg:text-xl xl:text-2xl font-bold mb-3">
              Protect Your Brand with AI-Powered Trademark Search
            </h3>
            <p className="text-white/90 font-nunito text-xs lg:text-sm max-w-2xl mx-auto mb-4">
              Use our advanced AI trademark search tool to check availability, get instant reports, and start your registration process in minutes. Our intelligent system analyzes phonetic similarities, visual conflicts, and recommends the right classes for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/services/trademark-registration"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-nunito font-bold text-xs transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                  color: '#0C002B',
                  boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                }}
              >
                <i className="fas fa-search text-xs" aria-hidden="true"></i>
                Search Trademark Now
                <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-nunito font-bold text-xs transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                <i className="fas fa-phone text-xs" aria-hidden="true"></i>
                Talk to Expert
              </Link>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center">
                  <div className="text-white font-nunito text-lg lg:text-xl font-bold mb-0.5">10K+</div>
                  <div className="text-white/70 font-nunito text-[9px] lg:text-[10px]">Trademarks Filed</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-nunito text-lg lg:text-xl font-bold mb-0.5">95%</div>
                  <div className="text-white/70 font-nunito text-[9px] lg:text-[10px]">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-nunito text-lg lg:text-xl font-bold mb-0.5">24/7</div>
                  <div className="text-white/70 font-nunito text-[9px] lg:text-[10px]">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-nunito text-lg lg:text-xl font-bold mb-0.5">₹1,999</div>
                  <div className="text-white/70 font-nunito text-[9px] lg:text-[10px]">Starting Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links - Blog Cluster */}
      <section id="related-resources" className="scroll-mt-14">
        <div className="space-y-3 lg:space-y-3.5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Related Resources & Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: "How to Choose the Right Trademark Class",
                description: "Complete guide to Nice Classification and class selection strategy",
                icon: "fas fa-layer-group",
                link: "/blog/trademark-class-selection"
              },
              {
                title: "Trademark vs Copyright: Key Differences",
                description: "Understand which intellectual property protection you need",
                icon: "fas fa-balance-scale",
                link: "/blog/trademark-vs-copyright"
              },
              {
                title: "Top 10 Trademark Rejection Reasons",
                description: "Common mistakes to avoid in your trademark application",
                icon: "fas fa-exclamation-triangle",
                link: "/blog/trademark-rejection-reasons"
              },
              {
                title: "Trademark Objection Reply Guide",
                description: "Step-by-step guide to responding to examination reports",
                icon: "fas fa-reply-all",
                link: "/blog/trademark-objection-reply"
              },
              {
                title: "International Trademark Registration",
                description: "Madrid Protocol and multi-country trademark protection",
                icon: "fas fa-globe",
                link: "/blog/international-trademark"
              },
              {
                title: "Trademark Renewal Process",
                description: "Keep your trademark alive with timely renewals",
                icon: "fas fa-sync-alt",
                link: "/blog/trademark-renewal"
              }
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div 
                  className="w-8 h-8 rounded-md flex items-center justify-center mb-2"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className={`${resource.icon} text-[#FFB703] text-sm`} aria-hidden="true"></i>
                </div>
                <h4 className="text-white font-nunito text-xs lg:text-sm font-semibold mb-1.5 group-hover:text-[#FFB703] transition-colors">
                  {resource.title}
                </h4>
                <p className="text-white/80 font-nunito text-[10px] mb-2">
                  {resource.description}
                </p>
                <span className="text-[#FFB703] font-nunito text-[10px] font-semibold inline-flex items-center gap-1.5">
                  Read More
                  <i className="fas fa-arrow-right text-[8px] group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                </span>
              </Link>
            ))}
          </div>

          {/* Service Pages Links */}
          <div 
            className="mt-4 p-3 rounded-lg"
            style={{
              background: 'rgba(255, 183, 3, 0.08)',
              border: '1px solid rgba(255, 183, 3, 0.2)'
            }}
          >
            <h4 className="text-white font-nunito text-sm font-semibold mb-2">
              Explore Our IP Services
            </h4>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/services/trademark-registration"
                className="px-3 py-1.5 rounded-md font-nunito text-xs font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                Trademark Registration
              </Link>
              <Link
                href="/services/patent-services"
                className="px-3 py-1.5 rounded-md font-nunito text-xs font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                Patent Services
              </Link>
              <Link
                href="/services/copyright-protection"
                className="px-3 py-1.5 rounded-md font-nunito text-xs font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                Copyright Protection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

