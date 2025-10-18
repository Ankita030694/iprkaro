'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RenewalClient() {
  const faqs = [
    {
      question: "When should I renew my trademark in India?",
      answer: "Trademark renewal should be filed within 6 months before the expiry of the 10-year registration period. You can also file within 6 months after expiry with a late fee surcharge. It's recommended to start the renewal process at least 6 months before expiry to avoid penalties."
    },
    {
      question: "What happens if I miss the trademark renewal deadline?",
      answer: "If you miss the renewal deadline, you have a grace period of 6 months to file renewal with additional late fees. After this grace period expires, the trademark will be removed from the register. However, you can file for restoration within 1 year of removal by paying restoration fees and showing valid reasons."
    },
    {
      question: "What are the fees for trademark renewal in India?",
      answer: "The government fee for trademark renewal varies based on entity type: ₹9,000 for companies/other entities, ₹4,500 for individuals/startups/MSMEs per class. Late fees apply if filed after the expiry date. Professional service fees are additional."
    },
    {
      question: "Can a removed trademark be restored?",
      answer: "Yes, a removed trademark can be restored within 1 year from the date of removal. You need to file Form TM-13 along with the renewal application (Form TM-R), pay prescribed restoration fees, and provide a valid reason for the delay in renewal."
    },
    {
      question: "How long does trademark renewal take in India?",
      answer: "Trademark renewal typically takes 2-4 months if filed before expiry without any objections. The process includes filing Form TM-R, examination by the Trademark Registry, and issuance of the renewed registration certificate valid for another 10 years."
    },
    {
      question: "Do I need to submit any documents for trademark renewal?",
      answer: "For standard renewal, minimal documentation is required - mainly the trademark registration certificate and applicant details. For restoration cases, you need to submit an affidavit explaining the delay and any supporting documents as evidence for the reason of non-renewal."
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
                Trademark Renewal & Restoration Services in India
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
                Keep your trademark protection alive with timely renewal services. A registered trademark in India is valid for <span className="font-bold text-[#FFB703]">10 years from the date of application</span> and must be renewed to maintain exclusive rights. Missing renewal deadlines can result in loss of trademark rights, allowing competitors to register similar marks.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our expert team handles trademark renewal, restoration of removed trademarks, and ensures continuous protection of your brand identity across India. We send timely reminders before expiry and handle all compliance requirements seamlessly.
              </p>
            </div>
          </section>

          {/* What is Trademark Renewal */}
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
                What is Trademark Renewal?
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
                Trademark renewal is the legal process of extending the validity of your registered trademark for another 10 years. Under the Trademarks Act, 1999, trademark registrations must be renewed every 10 years to maintain protection. Renewal ensures continuous exclusive rights and prevents your trademark from being removed from the register.
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
                    <i className="fas fa-sync-alt text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Renewal Timeline</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    File renewal 6 months before expiry or within 6 months after expiry with late fees. Process takes 2-4 months for approval.
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
                    <i className="fas fa-redo text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Restoration</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Removed trademarks can be restored within 1 year by filing Form TM-13 along with renewal and providing valid reasons for delay.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Renewal Process */}
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
                Trademark Renewal Process
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
                    step: "Check Renewal Status",
                    description: "Verify trademark registration details, expiry date, and current status on the IP India portal to confirm renewal eligibility."
                  },
                  {
                    step: "File Form TM-R",
                    description: "Submit renewal application (Form TM-R) electronically through the IP India portal with accurate trademark registration details."
                  },
                  {
                    step: "Pay Renewal Fees",
                    description: "Pay prescribed government fees based on entity type and number of classes. Late fees apply if filed after expiry date."
                  },
                  {
                    step: "Registry Examination",
                    description: "Trademark Registry examines the renewal application to verify details and compliance with renewal requirements."
                  },
                  {
                    step: "Renewal Certificate Issued",
                    description: "Upon approval, renewed registration certificate is issued, extending trademark protection for another 10 years."
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

          {/* Benefits */}
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
                Benefits of Timely Trademark Renewal
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
                    title: "Continuous Brand Protection",
                    description: "Maintains your exclusive rights to use the trademark nationwide and prevents unauthorized use by competitors."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Enforcement Rights",
                    description: "Retains your ability to take legal action against infringers and counterfeiters protecting your brand reputation."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Asset Value Preservation",
                    description: "Keeps your trademark as a valuable intangible asset for licensing, franchising, or business valuation purposes."
                  },
                  {
                    icon: "fas fa-ban",
                    title: "Prevents Re-Registration Hassles",
                    description: "Avoids the complex and expensive process of re-filing if trademark is removed, and prevents others from registering similar marks."
                  }
                ].map((benefit, index) => (
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
                  <i className="fas fa-clock text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Don't Let Your Trademark Expire</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Renew Your Trademark with Expert Assistance
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Our trademark renewal service ensures your brand protection never lapses. We handle timely filing, documentation, and follow-up with the Trademark Registry so you can focus on building your business.
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
                  Contact Us for Renewal
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

