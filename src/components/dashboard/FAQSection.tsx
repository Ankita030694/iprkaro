'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faqs } from '@/lib/dashboard-data';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [aiQuestion, setAiQuestion] = useState('');
  const [searchResult, setSearchResult] = useState<{question: string, answer: string} | null>(null);
  const [showNoMatch, setShowNoMatch] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiQuestion.trim()) {
      setSearchResult(null);
      setShowNoMatch(false);
      const query = aiQuestion.toLowerCase().trim();
      const scoredFaqs = faqs.map(faq => {
        const questionLower = faq.question.toLowerCase();
        const answerLower = faq.answer.toLowerCase();
        let score = 0;
        const queryWords = query.split(' ').filter(word => word.length > 2);
        queryWords.forEach(word => {
          if (questionLower.includes(query)) score += 100;
          if (questionLower.includes(word)) score += 10;
          if (answerLower.includes(word)) score += 3;
        });
        return { faq, score };
      });
      const bestMatch = scoredFaqs.reduce((best, current) => current.score > best.score ? current : best);
      setTimeout(() => {
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
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full blur-xl" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <div className="space-y-6 flex flex-col justify-start">
            <div className="space-y-4">
              <h2 className="text-white text-left font-nunito text-xl md:text-3xl font-medium leading-tight w-full">
                Have Question?
                <br />
                <span style={{ color: '#FFB703' }}>
                  We've Got Answers.
                </span>
              </h2>

              <p className="text-white font-nunito text-sm md:text-base font-medium">
                Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
              </p>
            </div>

            <form onSubmit={handleAiSubmit} className="relative">
              <div className="relative bg-white/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-3 max-w-lg">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Smart AI, Ask me Anything...."
                  className="bg-transparent text-white placeholder-white outline-none text-base w-full"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors"
                  style={{ color: '#FFB703' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                </button>
              </div>
            </form>

            {searchResult && (
              <div key={searchResult.question} className="p-4 rounded-lg max-w-lg animate-fade-in-up" style={{background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',backdropFilter: 'blur(87.876px)'}}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-nunito text-base md:text-lg font-semibold leading-snug" style={{ color: '#FFB703' }}>{searchResult.question}</h4>
                  <button onClick={() => setSearchResult(null)} className="text-white hover:text-gray-300 transition-colors ml-2 flex-shrink-0"><FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 rotate-180" /></button>
                </div>
                <p className="text-white font-nunito text-sm md:text-base font-medium leading-relaxed">{searchResult.answer}</p>
              </div>
            )}
            {showNoMatch && (
              <div className="p-4 rounded-lg max-w-lg animate-fade-in-up" style={{background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',backdropFilter: 'blur(87.876px)'}}>
                <div className="flex justify-between items-start">
                  <p className="text-white font-nunito text-sm md:text-base font-medium leading-relaxed">We're experiencing high traffic at the moment. Please try your search again in a few moments, or browse our FAQ section for answers.</p>
                  <button onClick={() => setShowNoMatch(false)} className="text-white hover:text-gray-300 transition-colors ml-2 flex-shrink-0"><FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 rotate-180" /></button>
                </div>
              </div>
            )}
          </div>

          <div
            className="space-y-3 p-4"
            style={{
              borderRadius: '12px',
              background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
              boxShadow: '2px 2px 14px 0 rgba(0, 0, 0, 0.15), 0 0 12px 0.5px rgba(255, 255, 255, 0.10) inset',
              backdropFilter: 'blur(70px)'
            }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="relative">
                <div
                  className="p-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                  style={{
                    borderRadius: '9px',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    ...(openFaq === index ? { boxShadow: `0 0 0 1px #FFB70380` } : {})
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-nunito text-sm md:text-base lg:text-lg font-semibold pr-3 leading-snug">
                      {faq.question}
                    </h3>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`w-4 h-4 transition-all duration-500 ease-in-out flex-shrink-0 ${
                        openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                      }`}
                      style={{ color: '#000000' }}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'max-h-72 opacity-100 mt-0' : 'max-h-0 opacity-0 -mt-3'
                    }`}
                  >
                    <div className="mt-3 pt-3 border-t border-black/20 transform transition-all duration-500 ease-in-out">
                      <p className="text-white font-nunito text-xs md:text-sm font-medium leading-relaxed">
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
}




