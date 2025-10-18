'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InfringementClient() {
  const faqs = [
    {
      question: "What constitutes copyright infringement in India?",
      answer: "Copyright infringement occurs when someone uses, reproduces, distributes, displays, or performs a copyrighted work without authorization from the copyright owner. This includes unauthorized copying, plagiarism, piracy, illegal downloading/streaming, and commercial exploitation of protected works under the Copyright Act, 1957."
    },
    {
      question: "What should I do if someone infringes my copyright?",
      answer: "First, gather evidence of infringement (screenshots, URLs, copies). Send a cease and desist notice demanding immediate stoppage. If ignored, file a copyright infringement suit in civil court for injunction and damages, or file criminal complaint under Section 63 of the Copyright Act for imprisonment and fines."
    },
    {
      question: "What is a cease and desist notice for copyright infringement?",
      answer: "A cease and desist notice is a formal legal letter sent to an infringer demanding immediate cessation of unauthorized use of copyrighted work. It outlines the infringement, demands removal/destruction of infringing content, and warns of legal consequences if compliance is not achieved within a specified timeframe."
    },
    {
      question: "Can I take legal action for online copyright infringement?",
      answer: "Yes, you can take action against online infringement through DMCA takedown notices to platforms, court injunctions for website blocking, civil suits for damages against infringers, and criminal complaints. Courts can order ISPs to block infringing websites and platforms to remove infringing content."
    },
    {
      question: "What damages can I claim in copyright infringement cases?",
      answer: "Under the Copyright Act, you can claim actual damages (lost profits, revenue), additional damages up to ₹2 lakh per work infringed, delivery/destruction of infringing copies, permanent injunction, cost of legal proceedings, and in criminal cases, imprisonment up to 3 years and fines up to ₹3 lakh."
    },
    {
      question: "How long does copyright infringement litigation take in India?",
      answer: "Copyright infringement cases typically take 2-5 years for final judgment, though interim injunctions can be obtained within weeks or months. Timeline depends on complexity, evidence volume, court backlog, and whether criminal or civil proceedings. Urgent interim relief can be sought to stop ongoing infringement immediately."
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
                Copyright Infringement Notice Drafting & Legal Action Services
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
                Protect your creative works from unauthorized use with <span className="font-bold text-[#FFB703]">aggressive copyright enforcement</span>. Whether facing plagiarism, piracy, or unauthorized commercial exploitation, swift legal action is essential to stop infringers and recover damages.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our expert IP litigation team provides comprehensive copyright infringement services including cease and desist notices, DMCA takedowns, injunction applications, civil litigation, criminal complaints, and damages recovery. We fight to protect your intellectual property rights with proven success.
              </p>
            </div>
          </section>

          {/* Types of Copyright Infringement */}
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
                Common Types of Copyright Infringement
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
                    icon: "fas fa-copy",
                    title: "Plagiarism & Unauthorized Copying",
                    description: "Copying literary works, articles, books, or content without permission or attribution, presenting others' work as one's own."
                  },
                  {
                    icon: "fas fa-cloud-download-alt",
                    title: "Digital Piracy & Illegal Downloading",
                    description: "Unauthorized distribution or downloading of music, films, software, e-books, or other digital content through torrent sites or file-sharing platforms."
                  },
                  {
                    icon: "fas fa-shopping-cart",
                    title: "Commercial Exploitation",
                    description: "Using copyrighted works commercially without license—selling prints of artwork, using music in advertisements, or reproducing content for profit."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Online Content Theft",
                    description: "Unauthorized republishing of blog posts, articles, images, or videos on websites, social media, or content platforms without permission."
                  },
                  {
                    icon: "fas fa-film",
                    title: "Streaming & Public Performance",
                    description: "Illegal streaming of movies, TV shows, sports events, or unauthorized public performance/screening of copyrighted audiovisual works."
                  },
                  {
                    icon: "fas fa-code",
                    title: "Software Copyright Infringement",
                    description: "Using unlicensed software, distributing pirated copies, reverse engineering protected code, or violating software license terms."
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

          {/* Legal Remedies */}
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
                Legal Remedies for Copyright Infringement
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
                    step: "Cease & Desist Notice",
                    description: "Send formal legal notice demanding immediate cessation of infringement, removal of infringing content, and warning of legal consequences if non-compliant."
                  },
                  {
                    step: "DMCA/Platform Takedown",
                    description: "File takedown notices with platforms (YouTube, Facebook, Amazon) to remove infringing content quickly. Effective for online infringement."
                  },
                  {
                    step: "Interim Injunction Application",
                    description: "File urgent injunction application in civil court to immediately stop ongoing infringement while the case proceeds to trial."
                  },
                  {
                    step: "Civil Infringement Suit",
                    description: "File civil suit for permanent injunction, damages (actual and additional up to ₹2 lakh), account of profits, and delivery/destruction of infringing copies."
                  },
                  {
                    step: "Criminal Complaint (Section 63)",
                    description: "File criminal complaint for willful infringement seeking imprisonment up to 3 years and fines up to ₹3 lakh, plus seizure of infringing materials."
                  },
                  {
                    step: "Website Blocking Orders",
                    description: "Seek court orders directing ISPs to block access to websites hosting infringing content, effective for piracy and streaming sites."
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
                  <span className="text-white font-nunito text-sm font-semibold">Stop Copyright Infringers</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Take Action Against Copyright Infringement
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Don't let infringers profit from your creative work. Our aggressive legal team will enforce your copyright through cease and desist notices, litigation, and damages recovery.
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
                  Contact Our Legal Team
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

