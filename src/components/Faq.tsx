'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [aiQuestion, setAiQuestion] = useState('');
  const [searchResult, setSearchResult] = useState<{question: string, answer: string} | null>(null);
  const [showNoMatch, setShowNoMatch] = useState(false);

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
      answer: "IPR Karo offers AI-driven trademark search, instant conflict checks, risk assessment reports, and seamless online filings, delivering faster results and more accurate protection than manual, offline methods."
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
      // Reset previous results first
      setSearchResult(null);
      setShowNoMatch(false);
      
      const query = aiQuestion.toLowerCase().trim();
      
      // Score-based search for best matching FAQ
      const scoredFaqs = faqs.map(faq => {
        const questionLower = faq.question.toLowerCase();
        const answerLower = faq.answer.toLowerCase();
        let score = 0;
        
        // Split query into words (filter out short common words)
        const queryWords = query.split(' ').filter(word => word.length > 2);
        
        queryWords.forEach(word => {
          // Exact phrase match in question (highest score)
          if (questionLower.includes(query)) {
            score += 100;
          }
          
          // Word match in question (high score)
          if (questionLower.includes(word)) {
            score += 10;
          }
          
          // Word match in answer (medium score)
          if (answerLower.includes(word)) {
            score += 3;
          }
        });
        
        return { faq, score };
      });
      
      // Find the FAQ with the highest score
      const bestMatch = scoredFaqs.reduce((best, current) => 
        current.score > best.score ? current : best
      );
      
      // Use setTimeout to ensure state updates properly
      setTimeout(() => {
        // Only show result if score is above threshold
        if (bestMatch.score > 0) {
          setSearchResult(bestMatch.faq);
          setShowNoMatch(false);
        } else {
          setSearchResult(null);
          setShowNoMatch(true);
        }
      }, 50);
      
      setAiQuestion('');
    }
  };

  return (
    <section className="py-[57.6px] relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
        <div className="absolute bottom-0 right-0 w-[69.12px] h-[69.12px] rounded-full blur-[2.16rem]" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
      </div>

      <div className="mx-4 lg:mx-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Section - Questions */}
          <div className="space-y-[28.8px] flex flex-col justify-start">
            <div className="space-y-[18px]">
              <h2 className="text-white text-left font-nunito text-[23.4px] md:text-[36px] font-medium leading-[28.8px] md:leading-[39.6px] w-full">
                Have Question?
                <br />
                <span style={{ color: '#FFB703' }}>
                  We've Got Answers.
                </span>
              </h2>

              <p className="text-white font-nunito text-[10.8px] md:text-[12.6px] lg:text-[13.5px] xl:text-[14.4px] font-medium">
                Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
              </p>
            </div>

            {/* AI Input */}
            <form onSubmit={handleAiSubmit} className="relative">
              <div className="relative bg-white/50 backdrop-blur-sm border border-purple-400/30 rounded-[10.8px] p-[14.4px] max-w-lg">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Smart AI, Ask me Anything...."
                  className="bg-transparent text-white placeholder-white outline-none text-[14.4px] w-full"
                />
                <button
                  type="submit"
                  className="absolute right-[14.4px] top-1/2 transform -translate-y-1/2 transition-colors"
                  style={{ color: '#FFB703' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="w-[18px] h-[18px]" />
                </button>
              </div>
            </form>

            {/* Search Result Display */}
            {searchResult && (
              <div 
                key={searchResult.question}
                className="p-[18px] rounded-[10.8px] max-w-lg animate-fade-in-up"
                style={{
                  background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
                  boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
                  backdropFilter: 'blur(87.876px)'
                }}
              >
                <div className="flex justify-between items-start mb-[10.8px]">
                  <h4 className="text-white font-nunito text-[14.4px] md:text-[16.2px] font-semibold leading-snug" style={{ color: '#FFB703' }}>
                    {searchResult.question}
                  </h4>
                  <button
                    onClick={() => setSearchResult(null)}
                    className="text-white hover:text-gray-300 transition-colors ml-[10.8px] flex-shrink-0"
                  >
                    <FontAwesomeIcon icon={faChevronDown} className="w-[14.4px] h-[14.4px] rotate-180" />
                  </button>
                </div>
                <p className="text-white font-nunito text-[12.6px] md:text-[13.5px] font-medium leading-relaxed">
                  {searchResult.answer}
                </p>
              </div>
            )}

            {/* No Match Message */}
            {showNoMatch && (
              <div 
                className="p-[18px] rounded-[10.8px] max-w-lg animate-fade-in-up"
                style={{
                  background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
                  boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
                  backdropFilter: 'blur(87.876px)'
                }}
              >
                <div className="flex justify-between items-start">
                  <p className="text-white font-nunito text-[13.5px] md:text-[14.4px] font-medium leading-relaxed">
                    We're experiencing high traffic at the moment. Please try your search again in a few moments, or browse our FAQ section for answers.
                  </p>
                  <button
                    onClick={() => setShowNoMatch(false)}
                    className="text-white hover:text-gray-300 transition-colors ml-[10.8px] flex-shrink-0"
                  >
                    <FontAwesomeIcon icon={faChevronDown} className="w-[14.4px] h-[14.4px] rotate-180" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Section - FAQ Items */}
          <div
            className="space-y-[14.4px] p-[21.6px]"
            style={{
              borderRadius: '14.4px',
              background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
              boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
              backdropFilter: 'blur(87.876px)'
            }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="relative">
                <div
                  className="p-[18px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                  style={{
                    borderRadius: '10.8px',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    ...(openFaq === index ? { boxShadow: `0 0 0 1.44px #FFB70380` } : {})
                  }}
                  onClick={() => toggleFaq(index)}
                >

                  <div className="flex justify-between items-center mb-[10.8px]">
                    <h3 className="text-white font-nunito text-[13.5px] md:text-[16.2px] lg:text-[19.8px] font-semibold pr-[14.4px] leading-snug">
                      {faq.question}
                    </h3>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`w-[18px] h-[18px] transition-all duration-500 ease-in-out flex-shrink-0 ${
                        openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                      }`}
                      style={{ color: '#000000' }}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'max-h-[345.6px] opacity-100 mt-0' : 'max-h-0 opacity-0 -mt-[14.4px]'
                    }`}
                  >
                    <div className="mt-[14.4px] pt-[14.4px] border-t border-black/20 transform transition-all duration-500 ease-in-out">
                      <p className="text-white font-nunito text-[10.8px] md:text-[11.7px] lg:text-[12.6px] xl:text-[13.5px] font-medium leading-relaxed">
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
