'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RectificationClient() {
  const faqs = [
    {
      question: "What is trademark rectification in India?",
      answer: "Trademark rectification is a legal proceeding to remove or correct entries in the Trademark Register. It can be filed to cancel a registered trademark, remove unlawful entries, correct errors, or challenge wrongful registrations. Applications are filed using Form TM-57 before the Intellectual Property Appellate Board (IPAB) or with the Registrar."
    },
    {
      question: "Who can file for trademark rectification?",
      answer: "Any person aggrieved by the existence of a trademark registration can file for rectification. This includes competitors whose marks conflict, prior users of similar marks, or anyone who believes the registration was obtained fraudulently or violates trademark law. The Registrar can also initiate rectification suo moto."
    },
    {
      question: "What are valid grounds for trademark rectification?",
      answer: "Valid grounds include: registration obtained fraudulently or by misrepresentation, violation of absolute or relative grounds under Sections 9 and 11, mark is identical or deceptively similar to prior marks, non-use for continuous 5 years, mark has become generic or deceptive, or incorrect entries in the register."
    },
    {
      question: "How long does trademark rectification take?",
      answer: "Trademark rectification proceedings typically take 2-4 years depending on case complexity, evidence volume, and whether the matter is contested. The process involves filing petition, respondent's counter-statement, evidence rounds, written submissions, and final hearing before IPAB or Registrar."
    },
    {
      question: "Can I remove a trademark for non-use?",
      answer: "Yes, you can file for removal/rectification of a trademark that has not been used for continuous 5 years or more. The non-use rectification application must be filed using Form TM-57, and the burden of proving use lies with the registered proprietor. If non-use is established, the mark will be removed from the register."
    },
    {
      question: "What is the difference between rectification and cancellation?",
      answer: "Rectification is a broad remedy to correct or remove entries in the Trademark Register for various legal grounds. Cancellation specifically refers to removing a trademark registration, which is one type of rectification. The term rectification also covers corrections of errors, address changes, and other amendments to register entries."
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
                Trademark Rectification & Removal Services in India
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
                Challenge wrongful trademark registrations and protect your brand rights through <span className="font-bold text-[#FFB703]">trademark rectification proceedings</span>. Whether a conflicting mark was registered despite your prior rights, obtained fraudulently, or has not been used for years, rectification provides legal remedy to remove or correct trademark register entries.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our experienced IP litigation attorneys provide comprehensive rectification services including legal research, evidence compilation, petition drafting, and aggressive representation before the Intellectual Property Appellate Board (IPAB) and Trademark Registry. We fight to protect your legitimate trademark rights.
              </p>
            </div>
          </section>

          {/* Understanding Rectification */}
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
                What is Trademark Rectification?
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
                Trademark rectification is a legal proceeding under Section 57 of the Trademarks Act, 1999, to remove, correct, or modify entries in the Trademark Register. It serves as a powerful remedy when trademark registrations are obtained improperly, violate existing rights, or when marks remain unused. Rectification proceedings can be filed before the Registrar or IPAB.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-times-circle text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Cancellation/Removal</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Complete removal of trademark registration from the register due to non-use, fraud, violation of law, or other valid legal grounds.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-edit text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Correction/Amendment</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Correction of errors, clerical mistakes, or inaccurate entries in the register such as wrong proprietor details, class descriptions, or dates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Grounds for Rectification */}
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
                Common Grounds for Trademark Rectification
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
              <div className="space-y-3">
                {[
                  {
                    ground: "Non-Use for 5+ Years",
                    section: "Section 47",
                    description: "Trademark has not been used for continuous period of 5 years or more without valid reasons.",
                    remedy: "Complete removal of the trademark from register, freeing the mark for others to use or register."
                  },
                  {
                    ground: "Fraudulent or Misrepresentation",
                    section: "Section 57(2)",
                    description: "Registration obtained through fraud, misrepresentation, or by concealing material facts.",
                    remedy: "Cancellation of registration ab initio (from the beginning) as if it never existed."
                  },
                  {
                    ground: "Violation of Absolute Grounds",
                    section: "Section 9 & 57",
                    description: "Mark is descriptive, generic, deceptive, or lacks distinctive character and should not have been registered.",
                    remedy: "Removal of registration and restoration of mark to public domain for general use."
                  },
                  {
                    ground: "Conflict with Prior Rights",
                    section: "Section 11 & 57",
                    description: "Mark is identical or deceptively similar to your earlier registered or pending trademark.",
                    remedy: "Cancellation of the conflicting later mark, protecting your prior trademark rights."
                  },
                  {
                    ground: "Mark Became Generic/Deceptive",
                    section: "Section 57(1)",
                    description: "After registration, mark has become the common name for goods/services or has become deceptive.",
                    remedy: "Removal from register as the mark no longer functions as a source identifier."
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
                        <i className="fas fa-gavel text-[#FFB703] text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h4 className="text-white font-nunito text-sm font-semibold">
                            {item.ground}
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
                        <i className="fas fa-check-circle text-[#FFB703] text-xs mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                        <div>
                          <p className="text-white/70 font-nunito text-[9px] font-semibold mb-0.5">REMEDY:</p>
                          <p className="text-white/90 font-nunito text-xs">
                            {item.remedy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rectification Process */}
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
                Trademark Rectification Process
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
                    step: "Legal Analysis & Evidence Gathering",
                    description: "Analyze grounds for rectification, research case law, collect evidence of non-use, prior use, or fraud to support the petition."
                  },
                  {
                    step: "File Rectification Petition (Form TM-57)",
                    description: "Draft and file comprehensive rectification petition before IPAB or Registrar stating legal grounds, facts, and relief sought."
                  },
                  {
                    step: "Respondent's Counter-Statement",
                    description: "Registered proprietor files counter-statement defending the registration and addressing each ground raised in the petition."
                  },
                  {
                    step: "Evidence Rounds",
                    description: "Both parties file affidavits with supporting documents. Petitioner's evidence followed by respondent's evidence within specified timelines."
                  },
                  {
                    step: "Written Submissions & Case Law",
                    description: "Legal submissions citing relevant trademark law provisions, precedents, and case law supporting respective positions."
                  },
                  {
                    step: "Hearing & Final Arguments",
                    description: "Oral hearing before IPAB or Registrar where both parties present arguments and respond to queries from the bench."
                  },
                  {
                    step: "Final Order",
                    description: "IPAB/Registrar issues reasoned order either allowing rectification petition or dismissing it. Appeal available to higher forums."
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
                  <i className="fas fa-balance-scale text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Protect Your Trademark Rights</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Challenge Wrongful Registrations with Expert Legal Support
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Our experienced IP litigation attorneys provide aggressive representation in trademark rectification proceedings to protect your legitimate rights and remove conflicting marks.
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
                  Consult Our Litigation Team
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

