'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WatchClient() {
  const faqs = [
    {
      question: "What is trademark watch service in India?",
      answer: "Trademark watch service is a proactive monitoring system that tracks new trademark applications filed in India. It alerts you when someone files a trademark similar to yours, allowing you to take timely action such as filing opposition before the conflicting mark gets registered and causes marketplace confusion."
    },
    {
      question: "Why do I need trademark monitoring services?",
      answer: "Trademark monitoring helps protect your brand by identifying potential infringers early. Without active monitoring, you may miss conflicting applications during the 4-month opposition window. Once a similar mark is registered, it becomes much harder and expensive to remove it through rectification or cancellation proceedings."
    },
    {
      question: "How often are trademark watch reports provided?",
      answer: "Trademark watch reports are typically provided weekly, bi-weekly, or monthly depending on your service package. Weekly monitoring is recommended for high-value brands or industries with frequent trademark filings. Reports include details of potentially conflicting applications with analysis and recommended actions."
    },
    {
      question: "What happens when a conflicting trademark is detected?",
      answer: "When our AI-powered system detects a potentially conflicting trademark, we immediately alert you with a detailed report. Our experts analyze the similarity level, assess the infringement risk, and recommend appropriate actions such as filing opposition, sending cease and desist notice, or monitoring for further developments."
    },
    {
      question: "Can trademark watch service detect domain name squatting?",
      answer: "Yes, advanced trademark watch services include domain name monitoring to detect cybersquatting. We monitor new domain registrations that incorporate your trademark, alerting you to potential domain squatting, phishing attempts, or brand impersonation so you can take swift action through UDRP or legal proceedings."
    },
    {
      question: "How much does trademark watch service cost in India?",
      answer: "Trademark watch service costs vary based on monitoring scope, frequency, and number of marks monitored. Basic monitoring for a single trademark starts affordably, while comprehensive monitoring including domain watch, social media monitoring, and marketplace surveillance is available at premium tiers. Custom packages are available for brand portfolios."
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
                AI-Powered Trademark Watch & Monitoring Services India
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
                Protect your trademark rights with <span className="font-bold text-[#FFB703]">24/7 AI-powered monitoring</span> that detects conflicting trademark applications, domain registrations, and brand infringements across India. Early detection is crucial—you only have 4 months from publication to file opposition against conflicting marks.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our advanced trademark watch service uses artificial intelligence and machine learning to monitor the Trademark Journal, domain registrations, e-commerce platforms, and social media for potential brand conflicts. Receive instant alerts with expert analysis and recommended actions to safeguard your brand.
              </p>
            </div>
          </section>

          {/* What is Trademark Watch */}
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
                What is Trademark Watch Service?
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
                Trademark watch is a proactive monitoring service that continuously scans new trademark applications, registrations, and online brand usage to identify potential conflicts with your registered or pending trademarks. It acts as an early warning system, giving you time to take preventive legal action before unauthorized use damages your brand.
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
                    <i className="fas fa-search text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Trademark Journal Monitoring</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Weekly scanning of official Trademark Journal publications to identify similar trademark applications filed across all classes in India.
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
                    <i className="fas fa-globe text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Domain & Online Monitoring</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Track domain registrations, social media accounts, e-commerce listings, and online marketplaces for unauthorized use of your brand.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Monitoring Scope */}
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
                Comprehensive Monitoring Coverage
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
                    icon: "fas fa-file-alt",
                    title: "Trademark Journal Watch",
                    description: "Monitor weekly Trademark Journal publications for phonetically, visually, or conceptually similar trademark applications across relevant classes."
                  },
                  {
                    icon: "fas fa-server",
                    title: "Domain Name Monitoring",
                    description: "Track new domain registrations (.com, .in, .co.in, etc.) containing your trademark to detect cybersquatting and brand impersonation attempts."
                  },
                  {
                    icon: "fas fa-shopping-cart",
                    title: "E-Commerce Platform Watch",
                    description: "Monitor Amazon, Flipkart, and other marketplaces for counterfeit products, unauthorized sellers, and trademark infringement listings."
                  },
                  {
                    icon: "fas fa-hashtag",
                    title: "Social Media Monitoring",
                    description: "Track social media platforms for fake accounts, brand impersonation, unauthorized use of your logos, and trademark violations."
                  },
                  {
                    icon: "fas fa-copyright",
                    title: "Common Law Use Detection",
                    description: "Identify unauthorized commercial use of your trademark in business names, signage, advertising, and promotional materials."
                  },
                  {
                    icon: "fas fa-bell",
                    title: "Instant Alerts & Reports",
                    description: "Receive real-time alerts when potential conflicts are detected, with detailed analysis reports and recommended enforcement actions."
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

          {/* Why You Need It */}
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
                Why Trademark Monitoring is Critical
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
                    title: "Limited Opposition Window (4 Months)",
                    description: "You have only 4 months from trademark publication to file opposition. Without monitoring, you'll miss this critical window, and the conflicting mark will get registered, making removal extremely difficult and expensive."
                  },
                  {
                    title: "Prevent Brand Dilution & Confusion",
                    description: "Early detection of similar trademarks prevents consumer confusion, brand dilution, and loss of market share. Taking action before conflicting marks are registered maintains your exclusive rights."
                  },
                  {
                    title: "Protect Your Investment",
                    description: "Your trademark represents significant investment in brand building and marketing. Monitoring ensures competitors can't free-ride on your brand reputation and goodwill."
                  },
                  {
                    title: "Detect Counterfeit & Infringement",
                    description: "Online counterfeiting is growing rapidly. Monitoring e-commerce platforms and marketplaces helps identify and remove counterfeit products that damage your brand reputation and revenue."
                  }
                ].map((reason, index) => (
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
                      {reason.title}
                    </h4>
                    <p className="text-white/90 font-nunito text-xs pl-6">
                      {reason.description}
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
                  <i className="fas fa-robot text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">AI-Powered 24/7 Brand Protection</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Start Monitoring Your Trademark Today
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Don't let competitors steal your brand identity. Our AI-powered trademark watch service provides continuous protection with instant alerts and expert legal guidance.
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
                  Start Trademark Watch Service
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

