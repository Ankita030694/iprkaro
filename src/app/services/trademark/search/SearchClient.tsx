'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SearchClient() {
  const faqs = [
    {
      question: "What is trademark search and why is it important?",
      answer: "Trademark search is a comprehensive analysis of existing trademarks to determine if your proposed mark is available for registration. It's crucial because it helps avoid conflicts, reduces rejection risks, and saves time and money by identifying potential issues before filing your application."
    },
    {
      question: "What types of trademark searches are available?",
      answer: "We offer three types of searches: 1) Identical Search - exact matches, 2) Similarity Search - phonetically, visually, or conceptually similar marks, and 3) Comprehensive Search - includes all variations, translations, and related marks across multiple classes and databases."
    },
    {
      question: "How long does a trademark search take?",
      answer: "Our trademark search services typically take 3-5 business days for a comprehensive analysis. This includes database searches, conflict analysis, and preparation of detailed search reports with recommendations."
    },
    {
      question: "What information do I need to provide for trademark search?",
      answer: "You need to provide: the proposed trademark name/logo, description of goods/services, preferred Nice Classification classes, and any specific variations or stylizations you plan to use. Additional context about your business and target market helps in comprehensive analysis."
    },
    {
      question: "What happens if conflicts are found in the search?",
      answer: "If conflicts are found, we provide detailed analysis of the conflicting marks, assess the risk level, and suggest alternatives or modifications. We also advise on the likelihood of successful registration and potential strategies to overcome objections."
    },
    {
      question: "Is trademark search mandatory before filing?",
      answer: "While not legally mandatory, trademark search is highly recommended and considered best practice. It significantly reduces the risk of application rejection, saves costs on unsuccessful applications, and helps in strategic brand planning."
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
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Search & Availability Check Services in India
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
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                Before investing in trademark registration, ensure your brand is <span className="font-bold text-[#FFB703]">legally available and conflict-free</span>. Our comprehensive trademark search services analyze existing registrations, pending applications, and potential conflicts to give you confidence in your brand choice.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Our expert trademark attorneys conduct thorough searches across multiple databases, providing detailed analysis and risk assessment. We help you make informed decisions about your trademark strategy and avoid costly registration rejections or legal disputes.
              </p>
            </div>
          </section>

          {/* Types of Trademark Search */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Types of Trademark Search Services
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-search text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-lg font-semibold">Identical Search</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Exact word-for-word matches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Same spelling and pronunciation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Identical logo designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Quick preliminary check</span>
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
                    <i className="fas fa-eye text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-lg font-semibold">Similarity Search</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Phonetically similar marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Visually similar designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Conceptually related marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Risk assessment included</span>
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
                    <i className="fas fa-globe text-[#FFB703] text-xl" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-lg font-semibold">Comprehensive Search</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">All variations and translations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Multiple database coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Detailed legal analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span className="text-white/90 font-nunito text-sm">Registration recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Search Process */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Our Trademark Search Process
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
                    step: "Information Gathering",
                    description: "Collect your proposed trademark details, goods/services description, preferred classes, and any specific requirements or concerns you have about the mark."
                  },
                  {
                    step: "Database Search",
                    description: "Search across Trademark Registry database, pending applications, international databases, and domain name registrations for comprehensive coverage."
                  },
                  {
                    step: "Conflict Analysis",
                    description: "Analyze found marks for similarity, assess risk levels, evaluate goods/services overlap, and determine potential conflicts or objections."
                  },
                  {
                    step: "Legal Assessment",
                    description: "Apply trademark law principles, consider case precedents, assess distinctiveness, and evaluate registration likelihood based on current legal standards."
                  },
                  {
                    step: "Report Preparation",
                    description: "Compile detailed search report with findings, risk assessment, recommendations, and strategic advice for trademark registration."
                  },
                  {
                    step: "Consultation & Strategy",
                    description: "Discuss results with you, explain findings, suggest modifications if needed, and provide strategic recommendations for successful registration."
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
                      <h4 className="text-white font-nunito text-base font-semibold mb-1">
                        {item.step}
                      </h4>
                      <p className="text-white/90 font-nunito text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits of Trademark Search */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Benefits of Professional Trademark Search
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
                    title: "Avoid Registration Rejections",
                    description: "Identify potential conflicts before filing, reducing the risk of application rejection and saving time and money on unsuccessful applications."
                  },
                  {
                    icon: "fas fa-dollar-sign",
                    title: "Cost Savings",
                    description: "Prevent costly legal disputes and opposition proceedings by ensuring your trademark is available and doesn't infringe on existing rights."
                  },
                  {
                    icon: "fas fa-clock",
                    title: "Time Efficiency",
                    description: "Avoid delays in the registration process by addressing potential issues upfront and making informed decisions about your trademark strategy."
                  },
                  {
                    icon: "fas fa-lightbulb",
                    title: "Strategic Planning",
                    description: "Get expert insights and recommendations for trademark modifications, alternative options, and optimal registration strategies."
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
                        <h4 className="text-white font-nunito text-base font-semibold mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-sm">
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
                  <i className="fas fa-search text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-base font-semibold">Secure Your Brand Before Registration</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Get Professional Trademark Search & Analysis
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't risk your trademark application. Our comprehensive search services provide detailed analysis and expert recommendations to ensure your brand is available and ready for successful registration.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    color: '#0C002B',
                    boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                  Start Your Trademark Search
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
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
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
                  <h3 className="text-white font-nunito text-base font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed pl-6">
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
