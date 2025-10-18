'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OppositionClient() {
  const faqs = [
    {
      question: "What is trademark opposition in India?",
      answer: "Trademark opposition is a legal proceeding where any person can challenge a trademark application that has been accepted and published in the Trademark Journal. The opposition must be filed within 4 months of publication, stating grounds why the trademark should not be registered."
    },
    {
      question: "How long do I have to file a trademark opposition?",
      answer: "You have 4 months from the date of publication in the Trademark Journal to file a Notice of Opposition (Form TM-O). This deadline is strict and cannot be extended. After 4 months, the trademark proceeds to registration if no opposition is filed."
    },
    {
      question: "What are the grounds for filing trademark opposition?",
      answer: "Common grounds include: similarity with existing marks causing confusion, prior use or registration of the mark, descriptiveness or lack of distinctiveness, bad faith filing, violation of Section 9 (absolute grounds) or Section 11 (relative grounds) of the Trademarks Act."
    },
    {
      question: "What is a counter-statement in trademark proceedings?",
      answer: "A counter-statement is the applicant's response to the Notice of Opposition filed in Form TM-6. It must be filed within 2 months of receiving the opposition notice. The counter-statement defends the trademark application and addresses each ground of opposition raised."
    },
    {
      question: "How long does trademark opposition proceeding take?",
      answer: "Trademark opposition proceedings typically take 18-36 months from filing to final decision. The timeline includes filing opposition, counter-statement, evidence rounds (2 months each for both parties), written submissions, and hearing before the Registrar."
    },
    {
      question: "Can I withdraw my trademark opposition?",
      answer: "Yes, you can withdraw your opposition at any time during the proceedings by filing a withdrawal notice. However, you may need to bear the costs incurred by the applicant. Once withdrawn, you cannot file opposition again on the same grounds for the same trademark."
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
                Trademark Opposition & Counter-Statement Services
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
                Trademark opposition allows you to <span className="font-bold text-[#FFB703]">challenge conflicting trademark applications</span> before they become registered. Whether you need to oppose a trademark that infringes on your rights or defend your application against opposition, expert legal assistance is crucial for success.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our experienced trademark attorneys provide comprehensive opposition and counter-statement services, including legal research, evidence compilation, strategic drafting, and representation at hearings before the Trademark Registry. We protect your brand rights with aggressive yet professional advocacy.
              </p>
            </div>
          </section>

          {/* Understanding Opposition */}
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
                Understanding Trademark Opposition
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
                Trademark opposition is a formal legal proceeding under Section 21 of the Trademarks Act, 1999, where any interested party can challenge a trademark application after it has been examined and published in the Trademark Journal. The opposition must be filed within a strict 4-month window from the date of publication.
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
                    <i className="fas fa-file-alt text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Filing Opposition</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    File Notice of Opposition (Form TM-O) within 4 months of trademark publication in the Journal, stating detailed grounds with supporting evidence.
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
                    <i className="fas fa-reply text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Counter-Statement</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Applicant responds with counter-statement (Form TM-6) within 2 months, defending the application and addressing opposition grounds.
                  </p>
                </div>
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
                Trademark Opposition Procedure
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
                    step: "Monitor Trademark Journal",
                    description: "Track weekly Trademark Journal publications to identify conflicting trademark applications that may harm your brand interests."
                  },
                  {
                    step: "File Notice of Opposition (TM-O)",
                    description: "Submit detailed opposition within 4 months of publication, citing legal grounds under Sections 9, 11, or other provisions of Trademarks Act."
                  },
                  {
                    step: "Applicant Files Counter-Statement (TM-6)",
                    description: "Trademark applicant responds with counter-statement defending their application and addressing each ground of opposition raised."
                  },
                  {
                    step: "Evidence Filing Rounds",
                    description: "Both parties file evidence supporting their claims - opponent's evidence followed by applicant's evidence within specified timelines."
                  },
                  {
                    step: "Written Submissions",
                    description: "Parties submit written legal arguments and case law citations supporting their respective positions before the hearing."
                  },
                  {
                    step: "Hearing Before Registrar",
                    description: "Oral hearing where both parties present arguments, and the Registrar examines evidence and legal positions."
                  },
                  {
                    step: "Final Decision",
                    description: "Registrar issues a reasoned order either rejecting the opposed application or allowing it to proceed to registration."
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

          {/* Common Opposition Grounds */}
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
                Common Grounds for Opposition
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
                    icon: "fas fa-clone",
                    title: "Similarity & Confusion (Section 11)",
                    description: "Trademark is identical or deceptively similar to your existing registered or pending mark, likely to cause consumer confusion."
                  },
                  {
                    icon: "fas fa-calendar-check",
                    title: "Prior Use & Proprietorship",
                    description: "You have been using the mark earlier than the applicant and have established prior rights through continuous commercial use."
                  },
                  {
                    icon: "fas fa-text-height",
                    title: "Descriptive or Generic (Section 9)",
                    description: "The mark is purely descriptive, generic, or lacks distinctive character making it ineligible for trademark registration."
                  },
                  {
                    icon: "fas fa-times-circle",
                    title: "Bad Faith Application",
                    description: "Trademark application was filed dishonestly with intention to take unfair advantage or imitate a well-known mark."
                  },
                  {
                    icon: "fas fa-ban",
                    title: "Prohibited Under Law",
                    description: "Mark contains prohibited matter, is scandalous, deceptive, or violates public policy under Section 9 of the Trademarks Act."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Well-Known Trademark",
                    description: "Applicant's mark conflicts with your well-known trademark protected under Section 11(6)-(9) even in different classes."
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
                  <span className="text-white font-nunito text-sm font-semibold">Protect Your Trademark Rights</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Expert Opposition & Counter-Statement Services
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Whether you need to oppose a conflicting trademark or defend your application, our experienced attorneys provide strategic legal representation with a proven track record of success.
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
                  Consult Our Experts
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

