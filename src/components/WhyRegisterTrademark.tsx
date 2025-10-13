'use client';

import React, { useState } from 'react';

export default function WhyRegisterTrademark() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does trademark registration in India protect my business identity?",
      answer: "Trademark registration in India legally secures your business identity by protecting your brand name, logo, or slogan. It prevents competitors from using identical or confusingly similar marks, ensuring your uniqueness in the market. With proper intellectual property protection, you can confidently grow your business without fear of misuse."
    },
    {
      question: "Does registering a brand name online increase my business value?",
      answer: "Yes, registering a brand name online significantly increases your business value by establishing legal ownership and exclusivity. It enhances your brand's credibility, makes it easier to secure funding, and provides a competitive advantage in the market."
    },
    {
      question: "What rights do I get after online trademark filing in India?",
      answer: "After online trademark filing in India, you get exclusive rights to use your mark, the right to prevent others from using similar marks, the ability to license your trademark, and legal protection against infringement. You also gain the right to use the ® symbol."
    },
    {
      question: "Can I stop others from copying my brand without AI trademark search?",
      answer: "While you can take legal action without AI trademark search, using AI-powered search significantly improves your chances of success. AI search helps identify potential conflicts early, provides stronger evidence in court, and ensures comprehensive protection across all relevant classes and jurisdictions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#171717] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-white text-3xl font-bold text-center mb-4 font-nunito">
          Why Register a Trademark?
        </h2>
        <p className="text-white text-center mb-12 text-lg">
          Clear answers to the most common questions about protecting your brand.
        </p>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-[15px] border border-gray-700 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#000000] transition-colors duration-200"
              >
                <span className="text-white font-medium text-lg pr-4">
                  {faq.question}
                </span>
                <i 
                  className={`fas fa-chevron-down text-white text-lg transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              
              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 bg-[#000000]">
                  <p className="text-white text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <p className="text-white text-center text-sm leading-relaxed mt-20">
            Still have questions? Email us at <a href="mailto:info@iprkaro.com" className="text-white" style={{textDecoration: 'underline'}}>info@iprkaro.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
