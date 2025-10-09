'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [aiQuestion, setAiQuestion] = useState('');

  const faqs = [
    {
      question: "What is IPR Karo?",
      answer: "IPR Karo is a platform to search, register, and protect trademarks online using AI-powered search reports and expert legal support, making trademark registration fast and secure."
    },
    {
      question: "Who can use IPR Karo?",
      answer: "Startups, businesses, creative professionals, and entrepreneurs seeking hassle-free trademark registration, copyright filing, or patent protection online in India can use IPR Karo."
    },
    {
      question: "Is IPR Karo backed by legal experts?",
      answer: "Yes, all trademark and IP services with IPR Karo are reviewed by experienced attorneys to ensure complete legal compliance and robust intellectual property protection."
    },
    {
      question: "Why choose IPR Karo over traditional methods?",
      answer: "IPR Karo offers AI-driven trademark search, instant conflict checks, risk assessment reports, and seamless online filings—delivering faster results and more accurate protection than manual, offline methods."
    },
    {
      question: "How does AI help in trademark protection?",
      answer: "AI instantly scans trademark databases, detects similarities and conflicts, generates registerability scores, and guides users through every step to maximize the success of trademark registration."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiQuestion.trim()) {
      // Handle AI question submission
      console.log('AI Question:', aiQuestion);
      setAiQuestion('');
    }
  };

  // Schema markup for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
        <div className="absolute bottom-0 right-0 w-76.8 h-76.8 rounded-full blur-2.4xl" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-9.6 items-start">
          
          {/* Left Section - Questions */}
          <div className="space-y-8 flex flex-col justify-start">
            <div className="space-y-5">
              <h2 className="text-white text-left font-nunito text-[26px] md:text-[40px] font-medium leading-[32px] md:leading-[44px] w-full">
                Have Question?
                <br />
                <span style={{ color: '#FFB703' }}>
                  We've Got Answers.
                </span>
              </h2>

              <p className="text-white font-nunito text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium">
                Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
              </p>
            </div>

            {/* AI Input */}
            <form onSubmit={handleAiSubmit} className="relative">
              <div className="relative bg-white/50 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 max-w-lg">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Smart AI, Ask me Anything...."
                  className="bg-transparent text-white placeholder-white outline-none text-[16px]"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors"
                  style={{ color: '#FFB703' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - FAQ Items */}
          <div
            className="space-y-4 p-6"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
              boxShadow: '3.2px 3.2px 20.16px 0 rgba(0, 0, 0, 0.15), 0 0 16px 0.8px rgba(255, 255, 255, 0.10) inset',
              backdropFilter: 'blur(97.64px)'
            }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="relative">
                <div
                  className="p-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                  style={{
                    borderRadius: '12px',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    ...(openFaq === index ? { boxShadow: `0 0 0 1.6px #FFB70380` } : {})
                  }}
                  onClick={() => toggleFaq(index)}
                >

                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-nunito text-[15px] md:text-[18px] lg:text-[22px] font-semibold pr-4 leading-snug">
                      {faq.question}
                    </h3>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`w-5 h-5 transition-all duration-500 ease-in-out flex-shrink-0 ${
                        openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                      }`}
                      style={{ color: '#000000' }}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100 mt-0' : 'max-h-0 opacity-0 -mt-4'
                    }`}
                  >
                    <div className="mt-4 pt-4 border-t border-black/20 transform transition-all duration-500 ease-in-out">
                      <p className="text-white font-nunito text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Faq;
