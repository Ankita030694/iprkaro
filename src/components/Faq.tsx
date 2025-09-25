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
      answer: "IPR Karo is a comprehensive intellectual property rights platform that helps businesses and individuals protect their trademarks, copyrights, patents, and other IP assets with AI-powered assistance and expert legal support."
    },
    {
      question: "Who can use IPR Karo?",
      answer: "IPR Karo is designed for entrepreneurs, startups, small and medium businesses, inventors, creators, and anyone looking to protect their intellectual property rights efficiently and affordably."
    },
    {
      question: "Is IPR Karo backed by legal experts?",
      answer: "Yes, IPR Karo is backed by a team of qualified legal experts and IP attorneys who review all applications and provide guidance throughout the registration process to ensure compliance and success."
    },
    {
      question: "Why choose IPR Karo over traditional methods?",
      answer: "IPR Karo offers faster processing, AI-powered search and analysis, transparent pricing, expert legal support, and a user-friendly digital platform that makes IP protection accessible and affordable compared to traditional law firms."
    },
    {
      question: "How does AI help in trademark protection?",
      answer: "Our AI technology performs comprehensive trademark searches, analyzes similarity risks, suggests improvements, automates documentation, and provides instant feedback to increase your chances of successful registration while reducing time and costs."
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

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Questions */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Have Question?
                <br />
                <span style={{ color: '#FFB703' }}>
                  We've Got Answers.
                </span>
              </h2>
              
              <p className="text-purple-200 text-lg">
                Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
              </p>
            </div>

            {/* AI Input */}
            <form onSubmit={handleAiSubmit} className="relative">
              <div className="relative bg-black/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Smart AI, Ask me Anything...."
                  className="w-full bg-transparent text-white placeholder-purple-300 outline-none text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors"
                  style={{ color: '#FFB703' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="relative">
                <div 
                  className="p-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                  style={{
                    borderRadius: '15px',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    ...(openFaq === index ? { boxShadow: `0 0 0 2px #FFB70380` } : {})
                  }}
                  onClick={() => toggleFaq(index)}
                >
                 
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-semibold text-lg pr-4">
                      {faq.question}
                    </h3>
                    <FontAwesomeIcon 
                      icon={faChevronDown}
                      className={`w-6 h-6 transition-all duration-500 ease-in-out flex-shrink-0 ${
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
                      <p className="text-white leading-relaxed">
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
  );
};

export default Faq;
