'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AssignmentClient() {
  const faqs = [
    {
      question: "What is trademark assignment in India?",
      answer: "Trademark assignment is the permanent transfer of trademark ownership from one party (assignor) to another (assignee). It includes transfer of all rights, title, and interest in the trademark. The assignment must be recorded with the Trademark Registry through Form TM-P to be legally valid and enforceable."
    },
    {
      question: "What is the difference between trademark assignment and licensing?",
      answer: "Assignment transfers complete ownership of the trademark permanently to another party, while licensing grants temporary permission to use the trademark while retaining ownership. Assignment is usually a one-time transaction, whereas licensing involves ongoing royalty payments and contractual terms."
    },
    {
      question: "How long does trademark assignment registration take?",
      answer: "Trademark assignment registration typically takes 6-12 months from filing the Form TM-P. The process includes submission of assignment deed, examination by the Registry, and updating records. Proper documentation and compliance can expedite the process."
    },
    {
      question: "Can a pending trademark application be assigned?",
      answer: "Yes, pending trademark applications can be assigned before registration is complete. The assignment deed should clearly state that the application is being transferred. Form TM-P must be filed with the Trademark Registry along with the original assignment agreement to record the transfer."
    },
    {
      question: "What is trademark licensing and how does it work?",
      answer: "Trademark licensing is a legal arrangement where the trademark owner (licensor) grants permission to another party (licensee) to use the trademark under specified terms and conditions. The license agreement defines usage scope, territory, duration, quality control standards, and royalty payments."
    },
    {
      question: "Is it mandatory to register a trademark license agreement?",
      answer: "While not legally mandatory, registering a trademark license agreement with the Trademark Registry using Form TM-U is highly recommended. Registration provides legal validity, protects licensee rights, prevents unauthorized use claims, and ensures enforceability. Registered licenses also protect against third-party assignments."
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
                Trademark Assignment & Licensing Services in India
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
                Maximize the commercial value of your trademarks through <span className="font-bold text-[#FFB703]">strategic assignment and licensing</span>. Whether you're transferring trademark ownership, franchising your brand, or monetizing intellectual property through licensing, proper legal documentation and Registry recordation are essential.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our expert IP attorneys provide comprehensive trademark assignment and licensing services including agreement drafting, due diligence, negotiation support, and filing with the Trademark Registry. We ensure your trademark transactions are legally sound, commercially viable, and protect your interests.
              </p>
            </div>
          </section>

          {/* Assignment vs Licensing */}
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
                Trademark Assignment vs Licensing
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
                    <i className="fas fa-exchange-alt text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-base font-semibold">Trademark Assignment</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Complete and permanent transfer of ownership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Assignee becomes the new registered proprietor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Usually involves one-time payment consideration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Can be with or without goodwill of business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Recorded using Form TM-P at Trademark Registry</span>
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
                    <i className="fas fa-handshake text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-base font-semibold">Trademark Licensing</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Temporary permission to use the trademark</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Licensor retains ownership and control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Ongoing royalty or licensing fee payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Specifies territory, duration, quality standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-xs">Registered using Form TM-U (optional but recommended)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Assignment Process */}
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
                Trademark Assignment Process
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
                    step: "Due Diligence & Valuation",
                    description: "Verify trademark status, search for encumbrances, assess validity, and determine fair market value of the trademark asset."
                  },
                  {
                    step: "Negotiate Assignment Terms",
                    description: "Agree on consideration amount, scope of assignment (with/without goodwill), effective date, warranties, and indemnities."
                  },
                  {
                    step: "Draft Assignment Deed",
                    description: "Prepare comprehensive trademark assignment agreement clearly defining transferred rights, consideration, warranties, and other terms."
                  },
                  {
                    step: "Execute Assignment Agreement",
                    description: "Both parties sign the assignment deed on stamp paper of appropriate value as per state stamp duty regulations."
                  },
                  {
                    step: "File Form TM-P with Registry",
                    description: "Submit Form TM-P along with assignment deed, affidavit, and prescribed fees to record the assignment with Trademark Registry."
                  },
                  {
                    step: "Registry Examination & Approval",
                    description: "Trademark Registry examines the assignment application for compliance and updates proprietorship records upon approval."
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

          {/* Licensing Benefits */}
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
                Benefits of Trademark Licensing
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
                    icon: "fas fa-dollar-sign",
                    title: "Revenue Generation Without Investment",
                    description: "Generate passive income through royalty payments without investing in new markets, manufacturing, or distribution infrastructure."
                  },
                  {
                    icon: "fas fa-globe-americas",
                    title: "Market Expansion",
                    description: "Enter new geographical markets or product categories through licensed partners who have local expertise and established networks."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Brand Value Enhancement",
                    description: "Increase brand visibility and market presence through licensee operations, enhancing overall brand equity and recognition."
                  },
                  {
                    icon: "fas fa-shield-alt",
                    title: "Retain Ownership & Control",
                    description: "Maintain trademark ownership while licensing use rights, with quality control provisions ensuring brand integrity and consistency."
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
                  <i className="fas fa-file-signature text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Expert Legal Documentation</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Professional Assignment & Licensing Services
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Whether you're buying, selling, or licensing trademarks, our expert attorneys ensure legally sound agreements and smooth Registry recordation.
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
                  Consult Our IP Attorneys
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

