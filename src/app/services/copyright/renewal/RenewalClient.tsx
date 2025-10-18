'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RenewalClient() {
  const faqs = [
    {
      question: "Do I need to renew copyright registration in India?",
      answer: "No, copyright protection in India does not require renewal. Once a work is created and/or registered, copyright lasts for the lifetime of the author plus 60 years (for literary, dramatic, musical, and artistic works) or 60 years from publication (for cinematograph films, sound recordings, and photographs). No renewal fees or procedures are required."
    },
    {
      question: "What is copyright renewal service then?",
      answer: "Copyright 'renewal' services typically refer to updating copyright records with the Copyright Office when there are changes in ownership, author details, title modifications, or corrections to registration particulars. It also includes filing updated information, change of address, or rectification of errors in the copyright register."
    },
    {
      question: "How do I update copyright ownership details?",
      answer: "File an application with the Copyright Office requesting updates to proprietorship details along with supporting documents like assignment deeds, succession certificates, or court orders. The Copyright Office will examine and update the register upon verification of legal transfer or change."
    },
    {
      question: "Can I correct errors in my copyright registration?",
      answer: "Yes, you can file a rectification application to correct clerical errors, typographical mistakes, or inaccurate information in your copyright registration. This includes corrections to author names, work titles, publication dates, or ownership details. Supporting evidence must be provided for substantive corrections."
    },
    {
      question: "What happens when copyright term expires?",
      answer: "When copyright protection expires, the work enters the public domain and can be freely used, reproduced, distributed, or adapted by anyone without permission or payment. In India, this occurs 60 years after the author's death for most works, or 60 years from publication for certain categories like films and photographs."
    },
    {
      question: "How do I maintain copyright protection for my work?",
      answer: "Copyright protection is automatic and doesn't require renewal or maintenance fees. To maintain enforceability, keep registration certificates safe, maintain evidence of creation dates, track any assignments or licenses granted, and monitor for infringement. Update Copyright Office records if ownership or details change."
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
                Copyright Renewal & Update Services India
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
                Keep your copyright records accurate and up-to-date with <span className="font-bold text-[#FFB703]">professional copyright update services</span>. While copyright doesn't require renewal in India, updating registration details for ownership changes, corrections, or modifications is essential for maintaining enforceable protection.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our expert copyright attorneys assist with updating Copyright Office records, rectifying errors, recording ownership transfers, and ensuring your copyright registration remains current and legally valid. We handle all documentation and filing procedures efficiently.
              </p>
            </div>
          </section>

          {/* Understanding Copyright Duration */}
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
                Copyright Protection Duration in India
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
                Unlike trademarks which require periodic renewal, copyright protection in India is automatic and lasts for a fixed statutory period without any renewal requirements. The duration varies based on the type of work under the Copyright Act, 1957.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    icon: "fas fa-book",
                    title: "Literary, Dramatic, Musical Works",
                    duration: "Lifetime + 60 years",
                    description: "Protection lasts for the lifetime of the author plus 60 years after death."
                  },
                  {
                    icon: "fas fa-palette",
                    title: "Artistic Works",
                    duration: "Lifetime + 60 years",
                    description: "Paintings, sculptures, drawings protected for author's life plus 60 years."
                  },
                  {
                    icon: "fas fa-film",
                    title: "Cinematograph Films",
                    duration: "60 years from publication",
                    description: "Movies and audiovisual works protected for 60 years from publication date."
                  },
                  {
                    icon: "fas fa-microphone",
                    title: "Sound Recordings",
                    duration: "60 years from publication",
                    description: "Audio recordings protected for 60 years from year of publication."
                  },
                  {
                    icon: "fas fa-camera",
                    title: "Photographs",
                    duration: "60 years from publication",
                    description: "Photographic works receive 60-year protection from publication."
                  },
                  {
                    icon: "fas fa-tv",
                    title: "Broadcasts & Performances",
                    duration: "Special terms",
                    description: "Broadcasting rights last 25 years, performer rights last 50 years."
                  }
                ].map((type, index) => (
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
                        <i className={`${type.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">
                          {type.title}
                        </h4>
                        <div className="flex items-center gap-2 mb-1">
                          <span 
                            className="px-2 py-0.5 rounded-full text-[9px] font-semibold"
                            style={{
                              background: 'rgba(255, 183, 3, 0.15)',
                              color: '#FFB703'
                            }}
                          >
                            {type.duration}
                          </span>
                        </div>
                        <p className="text-white/90 font-nunito text-xs">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Update Services */}
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
                Copyright Record Update Services
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
                    service: "Ownership Transfer Recording",
                    description: "Update Copyright Office records following assignment, inheritance, or legal transfer of copyright ownership with proper documentation."
                  },
                  {
                    service: "Rectification of Errors",
                    description: "Correct typographical errors, wrong author names, incorrect publication dates, or other clerical mistakes in copyright registration."
                  },
                  {
                    service: "Change of Address/Contact",
                    description: "Update proprietor's address, contact details, or corporate information in Copyright Office records for proper correspondence."
                  },
                  {
                    service: "Title or Work Modifications",
                    description: "Record changes to work titles, revised editions, or updated versions while maintaining original copyright registration."
                  },
                  {
                    service: "License Agreement Recording",
                    description: "File copies of licensing agreements with Copyright Office to establish legal record of usage rights granted to third parties."
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
                      <i className="fas fa-sync-alt text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.service}
                    </h4>
                    <p className="text-white/90 font-nunito text-xs pl-6">
                      {item.description}
                    </p>
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
                  <i className="fas fa-edit text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Keep Records Current</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Update Your Copyright Records
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Ensure your copyright registration stays accurate with professional update services for ownership changes, corrections, and record maintenance.
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
                  Contact Our Experts
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

