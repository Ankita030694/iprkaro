'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SoftwareClient() {
  const faqs = [
    {
      question: "Is software copyright protected in India?",
      answer: "Yes, software and computer programs are protected under copyright law in India as 'literary works' under the Copyright Act, 1957. Both source code and object code are protected, including mobile apps, web applications, SaaS platforms, APIs, databases, and software documentation."
    },
    {
      question: "How do I register software copyright in India?",
      answer: "File copyright application with the Copyright Office using Form XIV along with source code extracts, flowcharts, technical documentation, and developer details. Registration typically takes 6-12 months. While registration is not mandatory, it provides legal evidence of ownership and is crucial for enforcement."
    },
    {
      question: "What parts of software are protected by copyright?",
      answer: "Copyright protects source code, object code, architecture, algorithms (if expressed in code), user interfaces, documentation, database structures, API designs, and software architecture. However, ideas, concepts, functionality, and methods are not protected—only the specific expression/implementation."
    },
    {
      question: "Can I protect open source software with copyright?",
      answer: "Yes, open source software is also copyrighted. The copyright owner retains ownership but licenses the software under open source terms (GPL, MIT, Apache, etc.). These licenses grant users specific rights while retaining copyright protection and requiring attribution and license compliance."
    },
    {
      question: "What is the difference between software copyright and patent?",
      answer: "Copyright protects the expression/code of software automatically without registration, while patents protect novel inventions and require extensive application process. Copyright prevents copying, while patents prevent others from implementing the same functionality. Software can have both copyright and patent protection."
    },
    {
      question: "How long does software copyright protection last in India?",
      answer: "Software copyright lasts for 60 years from the year of publication in India. For unpublished works, protection lasts for the lifetime of the author plus 60 years. This applies to all types of software including mobile apps, web applications, and enterprise software systems."
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
                Software Code Copyright Registration & Protection Services India
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
                Protect your software innovations with <span className="font-bold text-[#FFB703]">comprehensive copyright registration</span>. Whether you've developed a mobile app, web platform, enterprise software, or SaaS solution, securing copyright protection is essential to prevent unauthorized copying, reverse engineering, and code theft.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our expert IP attorneys specialize in software copyright registration, source code protection, licensing agreements, and enforcement against infringement. We help developers, startups, and software companies protect their valuable code assets with proven legal strategies.
              </p>
            </div>
          </section>

          {/* What is Protected */}
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
                What Software Elements Are Protected?
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
                    icon: "fas fa-code",
                    title: "Source Code & Object Code",
                    description: "All programming languages, scripts, algorithms expressed in code, libraries, modules, and compiled executables are protected."
                  },
                  {
                    icon: "fas fa-mobile-alt",
                    title: "Mobile & Web Applications",
                    description: "iOS/Android apps, web applications, Progressive Web Apps (PWAs), browser extensions, and responsive interfaces."
                  },
                  {
                    icon: "fas fa-database",
                    title: "Database Structures & Schema",
                    description: "Database architecture, table structures, relationships, stored procedures, and data organization methods."
                  },
                  {
                    icon: "fas fa-cogs",
                    title: "APIs & Microservices",
                    description: "API endpoints, microservice architecture, integration protocols, and software communication interfaces."
                  },
                  {
                    icon: "fas fa-file-code",
                    title: "Documentation & Comments",
                    description: "Technical documentation, code comments, user manuals, API documentation, and software specifications."
                  },
                  {
                    icon: "fas fa-desktop",
                    title: "User Interface Design",
                    description: "UI/UX designs, screen layouts, graphical elements, and visual presentation of software interfaces."
                  }
                ].map((item, index) => (
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
                        <i className={`${item.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Registration Process */}
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
                Software Copyright Registration Process
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
                    step: "Documentation Preparation",
                    description: "Prepare source code extracts (first 10 and last 10 pages), flowcharts, software architecture diagrams, and technical specifications."
                  },
                  {
                    step: "Application Filing (Form XIV)",
                    description: "File copyright application with Copyright Office including developer details, publication information, and nature of work description."
                  },
                  {
                    step: "Deposit of Code Samples",
                    description: "Submit representative code samples demonstrating original authorship, algorithms, and unique implementation approaches."
                  },
                  {
                    step: "Examination by Copyright Office",
                    description: "Copyright Office examines application for completeness, originality criteria, and compliance with copyright law requirements."
                  },
                  {
                    step: "Registration Certificate",
                    description: "Upon approval, receive copyright registration certificate establishing legal ownership and protection of your software."
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
                Benefits of Software Copyright Protection
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
                    title: "Legal Ownership Proof",
                    description: "Registration certificate provides prima facie evidence of ownership in disputes, litigation, or licensing negotiations."
                  },
                  {
                    title: "Protection Against Code Theft",
                    description: "Legal recourse against unauthorized copying, reverse engineering, or theft of your source code and algorithms."
                  },
                  {
                    title: "Commercial Licensing Opportunities",
                    description: "Monetize your software through licensing agreements, franchising, or selling usage rights to businesses."
                  },
                  {
                    title: "Investor & Funding Confidence",
                    description: "Registered copyright demonstrates IP ownership, crucial for attracting investors, venture capital, and business partnerships."
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-sm font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-shield-alt text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {benefit.title}
                    </h4>
                    <p className="text-white/90 font-nunito text-xs pl-6">
                      {benefit.description}
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
                  <i className="fas fa-lock text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Protect Your Code</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Register Your Software Copyright Today
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Secure legal protection for your software with expert copyright registration assistance. Protect your code from theft and unauthorized use.
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
                  Get Expert Assistance
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

