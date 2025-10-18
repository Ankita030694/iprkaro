'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ObjectionClient() {
  const faqs = [
    {
      question: "What is a trademark objection in India?",
      answer: "A trademark objection is a formal notice issued by the Trademark Examiner when your application doesn't meet registration requirements. The Examination Report lists specific grounds for objection under Sections 9 or 11 of the Trademarks Act. You have 30 days from receipt to file a comprehensive reply addressing each objection."
    },
    {
      question: "How long do I have to respond to a trademark objection?",
      answer: "You have 30 days from the date of receiving the Examination Report to file your objection reply. This deadline can be extended for an additional 30 days by filing an extension request before the initial deadline expires. It's crucial to respond within the deadline to avoid application abandonment."
    },
    {
      question: "What are common reasons for trademark objections?",
      answer: "Common objection grounds include: descriptiveness or lack of distinctiveness (Section 9), similarity with existing marks (Section 11), incorrect class selection, improper specimen submission, inadequate use evidence, generic terms, geographical names, or common surnames without acquired distinctiveness."
    },
    {
      question: "Can a trademark objection be overcome?",
      answer: "Yes, most trademark objections can be overcome with a well-drafted reply supported by proper evidence. The success rate depends on the strength of your legal arguments, evidence of use, distinctiveness proof, and how well you distinguish your mark from cited prior marks. Expert legal assistance significantly improves success rates."
    },
    {
      question: "What happens if I don't reply to a trademark objection?",
      answer: "If you fail to respond to an objection within the stipulated time (30 days + extension if requested), your trademark application will be considered abandoned and removed from the register. You will lose your application date priority and will need to re-file the application, which may face additional conflicts."
    },
    {
      question: "Do I need to attend a hearing after filing objection reply?",
      answer: "Not always. If the Examiner is satisfied with your written reply and evidence, the objection may be withdrawn without a hearing. However, if the Examiner remains unconvinced, a hearing notice will be issued where you or your attorney can present oral arguments to support your case."
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
                Trademark Objection Reply Drafting Services India
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
                Receiving a trademark objection is common—approximately <span className="font-bold text-[#FFB703]">60-70% of trademark applications</span> receive examination objections in India. A well-crafted objection reply can overcome most objections and secure your trademark registration successfully.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our experienced trademark attorneys specialize in drafting comprehensive objection replies with strong legal arguments, persuasive evidence, and relevant case law citations. We have successfully overcome thousands of objections with a high success rate, helping brands secure their trademark rights.
              </p>
            </div>
          </section>

          {/* Understanding Objections */}
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
                Understanding Trademark Objections
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
                When your trademark application is examined, the Examiner reviews it for compliance with the Trademarks Act, 1999. If any issues are found, an Examination Report is issued detailing specific objections. These objections must be addressed comprehensively to proceed toward registration.
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
                    <i className="fas fa-exclamation-triangle text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Absolute Grounds (Section 9)</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Objections based on lack of distinctiveness, descriptiveness, generic nature, geographical names, or prohibited matter.
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
                    <i className="fas fa-clone text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Relative Grounds (Section 11)</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Objections due to similarity or identity with existing registered or pending trademarks causing likelihood of confusion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Objection Types */}
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
                Common Types of Trademark Objections
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
                    type: "Descriptiveness Objection",
                    ground: "Section 9(1)(a), 9(1)(b)",
                    description: "Mark directly describes the goods/services without distinctive character.",
                    strategy: "Argue acquired distinctiveness through extensive use, submit sales data, advertising expenses, market surveys, consumer recognition evidence, and media coverage."
                  },
                  {
                    type: "Similarity with Prior Mark",
                    ground: "Section 11(1)",
                    description: "Phonetic, visual, or conceptual similarity with existing registered/pending marks.",
                    strategy: "Distinguish on grounds of different trade channels, consumer base, co-existence in market, differences in goods/services, and visual/phonetic dissimilarity."
                  },
                  {
                    type: "Generic or Common Term",
                    ground: "Section 9(1)(c)",
                    description: "Mark uses words commonly used in trade or generic industry terms.",
                    strategy: "Demonstrate secondary meaning acquisition, evidence of exclusive use, brand recognition surveys, and unique stylization or combination elements."
                  },
                  {
                    type: "Geographical Name",
                    ground: "Section 9(2)(a)",
                    description: "Mark contains geographical indications or place names.",
                    strategy: "Show acquired distinctiveness in relation to goods/services, evidence that the mark has become distinctive through long use and is not merely geographical."
                  },
                  {
                    type: "Incorrect Classification",
                    ground: "Rule 25, Nice Classification",
                    description: "Goods/services not properly classified under correct Nice Classification class.",
                    strategy: "Amend specification with correct class and description, cite class headings and explanatory notes, provide clarity on intended goods/services."
                  }
                ].map((objection, index) => (
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
                        <i className="fas fa-file-alt text-[#FFB703] text-sm" aria-hidden="true"></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h4 className="text-white font-nunito text-sm font-semibold">
                            {objection.type}
                          </h4>
                          <span 
                            className="px-2 py-0.5 rounded-full text-[9px] font-semibold"
                            style={{
                              background: 'rgba(255, 183, 3, 0.15)',
                              color: '#FFB703'
                            }}
                          >
                            {objection.ground}
                          </span>
                        </div>
                        <p className="text-white/80 font-nunito text-xs mb-2">
                          {objection.description}
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
                        <i className="fas fa-lightbulb text-[#FFB703] text-xs mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                        <div>
                          <p className="text-white/70 font-nunito text-[9px] font-semibold mb-0.5">RESPONSE STRATEGY:</p>
                          <p className="text-white/90 font-nunito text-xs">
                            {objection.strategy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Objection Reply Process */}
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
                Our Objection Reply Process
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
                    step: "Examination Report Analysis",
                    description: "Thorough analysis of each objection ground, examiner's reasoning, and cited prior marks to develop a targeted response strategy."
                  },
                  {
                    step: "Legal Research & Precedents",
                    description: "Research relevant case law, trademark tribunal decisions, and legal precedents supporting your position to strengthen arguments."
                  },
                  {
                    step: "Evidence Compilation",
                    description: "Gather supporting evidence including use proofs, sales data, advertising materials, market surveys, consumer recognition, and distinctiveness evidence."
                  },
                  {
                    step: "Reply Drafting",
                    description: "Draft comprehensive written submission addressing each objection with strong legal arguments, evidence references, and case law citations."
                  },
                  {
                    step: "Client Review & Filing",
                    description: "Share draft reply for your review and approval, then file the reply electronically through IP India portal within the deadline."
                  },
                  {
                    step: "Hearing Representation (if needed)",
                    description: "If hearing is scheduled, prepare and present oral arguments before the Trademark Examiner to support your application."
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
                  <i className="fas fa-clock text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Don't Let Your Application Be Abandoned</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Overcome Trademark Objections with Expert Replies
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Our trademark attorneys have successfully handled thousands of objection cases with a high success rate. Get professional legal assistance to draft a winning objection reply.
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
                  Get Expert Help Now
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

