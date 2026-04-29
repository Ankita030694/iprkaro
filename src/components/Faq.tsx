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
      question: "What is trademark registration and why is it important?",
      answer: "Trademark registration is the legal process of securing exclusive rights to your brand name, logo, or trademark registration symbol (®) in India. It protects your trademark registration mark from infringement, establishes ownership, and builds brand trust. IPR Karo simplifies the entire trademark registration process in India with AI-powered tools."
    },
    {
      question: "How to register a trademark in India with IPR Karo?",
      answer: "To register a trademark, start with our AI-powered trademark search to check trademark availability. Review the brand name availability search report for conflicts, prepare the trademark registration documents required, pay the trademark registration govt fees, and submit your application online. IPR Karo guides you through every step of the trademark registration process in India."
    },
    {
      question: "What is the trademark registration cost in India?",
      answer: "The trademark registration price varies by applicant type and class count. Trademark registration govt fees for individuals and startups start at ₹4,500 per class, while companies pay ₹9,000 per class. IPR Karo offers transparent trademark registration pricing with no hidden costs, making it affordable for all budgets."
    },
    {
      question: "What documents are required for trademark registration?",
      answer: "The trademark registration documents required include: your brand logo or word mark, identity proof (Aadhaar/PAN), address proof, business registration certificate, MSME/Udyam certificate (if applicable), and a signed Form TM-48 (authorization). IPR Karo provides a complete document checklist and helps prepare everything for seamless filing."
    },
    {
      question: "How does the AI trademark search work at IPR Karo?",
      answer: "Our AI-powered trademark search scans the trademark search public database instantly, performing a comprehensive trademark search by name, trademark search by class, and phonetic similarity analysis. It checks trademark availability, runs a brand name availability search, and generates a detailed report with a registerability score - helping you make informed decisions before filing."
    },
    {
      question: "How long does trademark registration take in India?",
      answer: "Trademark registration in India typically takes 12-18 months from application to final registration. The trademark registration process includes filing, examination, publication in the Trademark Journal, and registration stages. IPR Karo's AI-powered pre-filing trademark search reduces objections and helps expedite approval."
    },
    {
      question: "Can I get trademark registration in Delhi and other cities?",
      answer: "Yes! IPR Karo offers trademark registration Delhi, Noida, Gurgaon, Mumbai, Bangalore, and PAN India coverage. Our fully online trademark registration process means you can register your trademark from anywhere in India. We also support trademark search international and trademark search WIPO for global brand protection."
    },
    {
      question: "What happens if my trademark application faces an objection?",
      answer: "If your trademark application faces objections or opposition, IPR Karo's legal experts help you respond with proper documentation and arguments. Our AI-powered trademark search reduces rejection risks by identifying trademark availability conflicts before filing, and our attorneys provide expert guidance throughout the trademark registration process."
    },
    {
      question: "Can I register a trademark for multiple classes?",
      answer: "Yes, you can register your trademark registration mark across multiple classes under the Nice Classification system. Use our trademark search by class tool to identify the right categories. Each class requires separate trademark registration govt fees. IPR Karo helps you select the relevant classes and offers cost-effective multi-class trademark registration."
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
