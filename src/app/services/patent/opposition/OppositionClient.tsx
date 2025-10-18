'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OppositionClient() {
  const faqs = [
    {
      question: "What is patent opposition in India?",
      answer: "Patent opposition is a legal proceeding to challenge a patent application before or after grant. Pre-grant opposition can be filed by any person within specified time after publication, while post-grant opposition can be filed within 1 year of patent grant by interested parties. Opposition prevents invalid patents from being granted or revokes already granted patents."
    },
    {
      question: "What are the grounds for patent opposition?",
      answer: "Common grounds include lack of novelty (prior art exists), lack of inventive step (obvious to skilled person), non-patentable subject matter under Sections 3 & 4, insufficient disclosure, wrongful obtainment from true inventor, prior public use or publication, and anticipation by prior claiming in earlier patent application."
    },
    {
      question: "What is the difference between pre-grant and post-grant opposition?",
      answer: "Pre-grant opposition can be filed by anyone after publication but before grant, focusing on preventing grant of invalid patents. Post-grant opposition can only be filed by 'interested persons' within 1 year of grant, seeking revocation of already granted patent. Post-grant has stricter standing requirements."
    },
    {
      question: "How long does patent opposition proceeding take?",
      answer: "Patent opposition proceedings typically take 2-4 years from filing to final decision. Timeline includes filing representation/petition, patent holder's reply, evidence rounds, written submissions, oral hearings, and Controller/IPAB decision. Complexity and evidence volume impact duration."
    },
    {
      question: "What is patent revocation in India?",
      answer: "Patent revocation is the process of invalidating a granted patent through legal proceedings before the IPAB (Intellectual Property Appellate Board) or through counterclaim in infringement suit. Revocation can be sought on grounds similar to opposition, plus grounds like non-working of patent or frivolous/vexatious infringement proceedings."
    },
    {
      question: "Can I oppose a patent if I have a similar patent application?",
      answer: "Yes, if you have a conflicting patent application or believe the patent being opposed is not novel given your technology, you can file opposition. As an interested person with competing interests, you have standing to oppose, especially in post-grant opposition where business interests create standing."
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
                Patent Opposition & Revocation Services India
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
                Challenge invalid patents through <span className="font-bold text-[#FFB703]">expert patent opposition and revocation services</span>. Whether facing a conflicting patent application or seeking to invalidate a granted patent that blocks your technology, strategic legal action is essential to protect your freedom to operate.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our experienced patent attorneys provide comprehensive opposition and revocation services including prior art research, legal strategy, representation drafting, evidence compilation, and advocacy before the Patent Office and IPAB. We fight to invalidate weak patents and clear technology landscapes.
              </p>
            </div>
          </section>

          {/* Types of Opposition */}
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
                Pre-Grant vs Post-Grant Opposition
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
                    <i className="fas fa-stop-circle text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-base font-semibold">Pre-Grant Opposition</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Filed after publication but before patent grant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Any person can file - no standing requirement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Prevents invalid patents from being granted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Lower cost than post-grant proceedings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Controller considers during examination</span>
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
                    <i className="fas fa-ban text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-base font-semibold">Post-Grant Opposition</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Filed within 1 year of patent grant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Only 'interested persons' have standing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Seeks revocation of granted patent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Formal proceedings before IPAB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Evidence rounds and oral hearings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Grounds */}
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
                Common Grounds for Patent Opposition
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
                    icon: "fas fa-newspaper",
                    title: "Lack of Novelty - Prior Art",
                    description: "Invention disclosed in prior publications, patents, public use, or other prior art references predating the patent application filing."
                  },
                  {
                    icon: "fas fa-brain",
                    title: "Lack of Inventive Step",
                    description: "Invention obvious to person skilled in the art given existing prior art, lacking non-obvious technical advancement or innovation."
                  },
                  {
                    icon: "fas fa-times-circle",
                    title: "Non-Patentable Subject Matter",
                    description: "Invention falls under excluded categories like software per se, business methods, mathematical formulas under Sections 3 & 4 of Patents Act."
                  },
                  {
                    icon: "fas fa-file-invoice",
                    title: "Insufficient Disclosure",
                    description: "Patent specification doesn't adequately disclose invention enabling skilled person to practice it, or conceals best mode of performing invention."
                  },
                  {
                    icon: "fas fa-user-slash",
                    title: "Wrongful Obtainment",
                    description: "Patent obtained wrongfully from true inventor without authorization, or applicant not entitled to apply for patent."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Prior Public Use",
                    description: "Invention publicly used or known in India or elsewhere before priority date, destroying novelty and patentability."
                  }
                ].map((ground, index) => (
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
                        <i className={`${ground.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">
                          {ground.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-xs">
                          {ground.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Opposition Process */}
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
                Patent Opposition Procedure
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
                    step: "Prior Art Research",
                    description: "Comprehensive search for prior art including patents, publications, products, and public disclosures that invalidate claimed invention."
                  },
                  {
                    step: "File Opposition/Revocation Petition",
                    description: "Draft and file detailed representation citing grounds, prior art evidence, legal arguments, and supporting documents."
                  },
                  {
                    step: "Patent Holder's Reply",
                    description: "Applicant/patentee responds defending patentability, distinguishing prior art, and addressing opposition grounds raised."
                  },
                  {
                    step: "Evidence & Counter-Evidence",
                    description: "Both parties file evidence through affidavits, expert opinions, technical documents, and exhibits supporting respective positions."
                  },
                  {
                    step: "Oral Hearing",
                    description: "Parties present arguments before Controller/IPAB, cross-examine evidence, and respond to bench queries."
                  },
                  {
                    step: "Final Decision",
                    description: "Controller/IPAB issues reasoned order either rejecting application/revoking patent or maintaining patent with/without amendments."
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
                  <i className="fas fa-gavel text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Challenge Invalid Patents</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Expert Patent Opposition & Revocation Services
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Protect your freedom to operate with strategic patent opposition. Our attorneys provide aggressive representation to invalidate weak patents blocking your technology.
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
                  Consult Patent Attorneys
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

