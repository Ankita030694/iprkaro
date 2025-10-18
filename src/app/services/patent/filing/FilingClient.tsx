'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FilingClient() {
  const faqs = [
    {
      question: "What is the difference between provisional and complete patent applications?",
      answer: "A provisional patent application establishes an early filing date and gives 12 months to file a complete specification. It requires basic disclosure without claims. A complete patent application includes detailed description, claims, drawings, and abstract. Provisional applications are cheaper and faster to file, allowing refinement before committing to complete filing."
    },
    {
      question: "How long does patent registration take in India?",
      answer: "Patent registration typically takes 3-5 years from complete specification filing to grant. The process includes filing, publication (18 months), examination request, FER response, and final grant. Using expedited examination can reduce timeline to 1-2 years for eligible applicants like startups, small entities, and certain technology sectors."
    },
    {
      question: "What inventions can be patented in India?",
      answer: "Novel, non-obvious inventions with industrial applicability can be patented. This includes products, processes, machines, compositions, improvements, and new uses. However, software per se, business methods, mathematical formulas, scientific theories, and inventions contrary to public order/morality cannot be patented under Section 3 and 4 of the Patents Act."
    },
    {
      question: "What documents are required for patent filing in India?",
      answer: "Required documents include patent application Form 1, complete/provisional specification with description, claims, drawings, and abstract, applicant/inventor details, Form 3 (undertaking), priority documents (if claiming priority), power of attorney (if filing through agent), and proof of right to apply."
    },
    {
      question: "Can I file a patent application without a patent agent?",
      answer: "Yes, individuals and entities can file patent applications directly. However, patent drafting requires technical and legal expertise to ensure strong claims, proper disclosure, and compliance with patent law. Professional patent agents/attorneys significantly increase success rates and strengthen patent protection through expert claim drafting."
    },
    {
      question: "What are the patent filing fees in India?",
      answer: "Patent fees vary by entity type and filing stage. For individuals/startups/small entities, provisional filing is around ₹1,600, complete specification ₹4,000, examination request ₹4,000, and grant fee ₹2,400. Larger entities pay 4x these amounts. Professional drafting and attorney fees are additional to government fees."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Hero Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-3 h-3 rounded-full relative"
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
              <h1 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Provisional & Complete Patent Drafting and Filing Services India
              </h1>
            </div>
            
            <div 
              className="p-4 lg:p-5 rounded-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed mb-3">
                Protect your innovations with <span className="font-bold text-[#FFB703]">expert patent drafting and filing services</span>. Whether you have a groundbreaking invention, innovative product, or novel process, securing patent protection is crucial for commercial success and preventing competitors from copying your technology.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our experienced patent attorneys and technical experts provide comprehensive patent drafting, prior art search, claim strategy, and filing services for provisional and complete specifications. We ensure strong, enforceable patents that maximize your intellectual property protection across India and globally.
              </p>
            </div>
          </section>

          {/* Types of Patent Applications */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Provisional vs Complete Patent Applications
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-file-alt text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-base font-semibold">Provisional Patent Application</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Establishes early filing date for priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Gives 12 months to file complete specification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Lower cost and faster to prepare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Requires description but no formal claims</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Allows time for market testing and refinement</span>
                    </li>
                  </ul>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-file-contract text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-base font-semibold">Complete Patent Application</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Detailed description with technical drawings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Precise claims defining scope of protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Required for patent examination and grant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Abstract and background of invention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Can claim priority from provisional filing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Patent Filing Process */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Patent Filing Process in India
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="relative space-y-3">
                <div className="absolute left-4 top-0 bottom-0 w-0.5"
                  style={{
                    background: 'rgba(255, 183, 3, 0.3)',
                    opacity: 0.5
                  }}
                />
                
                {[
                  {
                    step: "Prior Art Search & Patentability Analysis",
                    description: "Conduct comprehensive prior art search in patent databases worldwide to assess novelty, non-obviousness, and patentability of invention."
                  },
                  {
                    step: "Patent Specification Drafting",
                    description: "Draft detailed patent specification including background, technical description, claims, drawings, and abstract. Strategic claim drafting maximizes protection scope."
                  },
                  {
                    step: "Filing Patent Application",
                    description: "File provisional or complete application with Indian Patent Office along with required forms (Form 1, 2, 3, 5) and fee payment."
                  },
                  {
                    step: "Publication (18 Months)",
                    description: "Patent application is published in Patent Office Journal after 18 months from priority date, making invention details public."
                  },
                  {
                    step: "Request for Examination",
                    description: "File Request for Examination (Form 18) within 48 months from priority date. Patent Office assigns examiner to review application."
                  },
                  {
                    step: "First Examination Report (FER)",
                    description: "Examiner issues FER raising objections on novelty, inventive step, or formal requirements. Applicant responds within 6 months."
                  },
                  {
                    step: "Hearing & Response",
                    description: "If objections persist, hearing is scheduled. Present arguments and amendments to overcome objections before Controller."
                  },
                  {
                    step: "Patent Grant",
                    description: "Upon satisfying all requirements, patent is granted. Certificate issued with 20-year protection from filing date (subject to annuity payments)."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-3">
                    <div 
                      className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm"
                      style={{ 
                        background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                        color: '#0C002B',
                        boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)'
                      }}
                    >
                      {index + 1}
                    </div>
                    
                    <div 
                      className="flex-1 p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <h4 className="text-white font-nunito text-sm font-semibold mb-1">
                        {item.step}
                      </h4>
                      <p className="text-white/90 font-nunito text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Elements */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Essential Elements of Strong Patent Drafting
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    icon: "fas fa-lightbulb",
                    title: "Detailed Technical Description",
                    description: "Comprehensive disclosure of invention enabling skilled person to practice it, including embodiments, variations, and best mode."
                  },
                  {
                    icon: "fas fa-list-ol",
                    title: "Strategic Claim Drafting",
                    description: "Broad independent claims for maximum protection, dependent claims for fallback positions, covering multiple embodiments."
                  },
                  {
                    icon: "fas fa-drafting-compass",
                    title: "Technical Drawings & Diagrams",
                    description: "Clear figures illustrating invention structure, process flow, components, and operational aspects with reference numerals."
                  },
                  {
                    icon: "fas fa-search",
                    title: "Prior Art Analysis",
                    description: "Thorough background section distinguishing invention from prior art, demonstrating novelty and inventive step clearly."
                  }
                ].map((element, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: index === 0 
                        ? '1px solid rgba(255, 183, 3, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(255, 183, 3, 0.15)',
                          border: '1px solid rgba(255, 183, 3, 0.3)'
                        }}
                      >
                        <i className={`${element.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">
                          {element.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-xs">
                          {element.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Patentability Criteria */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Three Essential Patentability Criteria
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-sm leading-relaxed mb-4">
                For an invention to be patentable in India under the Patents Act, 1970, it must satisfy three fundamental requirements:
              </p>
              
              <div className="space-y-3">
                {[
                  {
                    criteria: "Novelty (New Invention)",
                    section: "Section 2(1)(l)",
                    description: "The invention must be new and not disclosed anywhere in the world before the filing date. Even inventor's own prior disclosure can destroy novelty.",
                    requirements: "No prior publication, patent, public use, or oral disclosure anywhere globally. Confidential disclosures don't affect novelty."
                  },
                  {
                    criteria: "Inventive Step (Non-Obvious)",
                    section: "Section 2(1)(ja)",
                    description: "The invention must involve technical advancement or economic significance that is not obvious to a person skilled in the relevant field.",
                    requirements: "Must represent non-trivial technical progress beyond routine engineering. Not obvious combination of known elements."
                  },
                  {
                    criteria: "Industrial Applicability",
                    section: "Section 2(1)(ac)",
                    description: "The invention must be capable of being made or used in an industry, including agriculture and must have practical utility.",
                    requirements: "Must be useful and capable of industrial/commercial application. Theoretical concepts without utility don't qualify."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: index === 0 
                        ? '1px solid rgba(255, 183, 3, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div 
                        className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(255, 183, 3, 0.15)',
                          border: '1px solid rgba(255, 183, 3, 0.3)'
                        }}
                      >
                        <i className="fas fa-certificate text-[#FFB703] text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h4 className="text-white font-nunito text-sm font-semibold">
                            {item.criteria}
                          </h4>
                          <span 
                            className="px-2 py-0.5 rounded-full text-[9px] font-semibold"
                            style={{
                              background: 'rgba(255, 183, 3, 0.15)',
                              color: '#FFB703'
                            }}
                          >
                            {item.section}
                          </span>
                        </div>
                        <p className="text-white/80 font-nunito text-xs mb-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div 
                      className="pl-11 p-2 rounded-md"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <div className="flex items-start gap-2">
                        <i className="fas fa-info-circle text-[#FFB703] text-xs mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                        <div>
                          <p className="text-white/70 font-nunito text-[9px] font-semibold mb-0.5">KEY REQUIREMENTS:</p>
                          <p className="text-white/90 font-nunito text-xs">
                            {item.requirements}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Non-Patentable Inventions */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                What Cannot Be Patented in India
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-sm leading-relaxed mb-3">
                Sections 3 and 4 of the Patents Act exclude certain categories from patentability despite meeting novelty and inventive step criteria:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    category: "Software & Business Methods",
                    examples: "Computer programs per se, algorithms, business methods, mathematical methods, mental acts"
                  },
                  {
                    category: "Scientific Discoveries",
                    examples: "Scientific principles, abstract theories, discovery of living/non-living substances occurring in nature"
                  },
                  {
                    category: "Medical Methods",
                    examples: "Methods of treatment, surgery, diagnosis practiced on humans or animals (but medical devices are patentable)"
                  },
                  {
                    category: "Agriculture & Horticulture",
                    examples: "Essentially biological processes for plants/animals, plant varieties (protected under separate Plant Varieties Act)"
                  },
                  {
                    category: "Atomic Energy Inventions",
                    examples: "Inventions related to atomic energy falling under Atomic Energy Act, 1962"
                  },
                  {
                    category: "Frivolous or Immoral",
                    examples: "Inventions contrary to public order, morality, or harmful to human/animal/plant life, or environment"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-sm font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-ban text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.category}
                    </h4>
                    <p className="text-white/90 font-nunito text-xs pl-6">{item.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits of Patent Protection */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Benefits of Patent Protection
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    icon: "fas fa-shield-alt",
                    title: "Market Exclusivity (20 Years)",
                    description: "Exclusive rights to prevent others from making, using, selling, or importing your patented invention in India for 20 years from filing date."
                  },
                  {
                    icon: "fas fa-dollar-sign",
                    title: "Revenue Through Licensing",
                    description: "Monetize patents through licensing agreements, royalty income, technology transfer fees, or outright sale of patent rights."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Competitive Advantage",
                    description: "Create barriers to entry for competitors, establish market leadership, and protect R&D investments from being copied."
                  },
                  {
                    icon: "fas fa-briefcase",
                    title: "Attract Investment & Funding",
                    description: "Patents demonstrate innovation capability, secure funding from investors/VCs, increase business valuation, and provide collateral for loans."
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(255, 183, 3, 0.15)',
                          border: '1px solid rgba(255, 183, 3, 0.3)'
                        }}
                      >
                        <i className={`${benefit.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-xs">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8">
            <div 
              className="relative overflow-hidden p-5 lg:p-6 rounded-xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
                border: '2px solid rgba(255, 183, 3, 0.3)',
                boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                  style={{
                    background: 'rgba(255, 183, 3, 0.2)',
                    border: '1px solid rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-certificate text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Protect Your Innovation</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Expert Patent Drafting & Filing Services
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Secure strong patent protection with professional drafting by experienced patent attorneys and technical experts. Maximize your IP protection with strategic claims.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    color: '#0C002B',
                    boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                  Start Patent Application
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h3 className="text-white font-nunito text-sm font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-xs leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

