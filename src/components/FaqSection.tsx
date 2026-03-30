'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is AI Trademark Search?',
    answer: 'AI Trademark Search helps you instantly check if your brand name is unique, reducing chances of rejection or legal issues.'
  },
  {
    question: 'How does AI Trademark Search work?',
    answer: 'Our advanced AI algorithms scan vast databases of existing trademarks, analyzing phonetic similarities, visual matches, and overlapping classes to predict the likelihood of approval.'
  },
  {
    question: 'Benefits of using AI in Trademark Search?',
    answer: 'AI significantly speeds up the research process, uncovers hidden conflicts that manual searches might miss, and provides data-driven insights to save you time and money.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-10 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <h2 className="text-[#0C002B] font-nunito text-[32px] md:text-[42px] font-semibold text-center mb-10 leading-[1.1] tracking-tight max-w-[300px] md:max-w-[500px]">
          Everything You <br className="md:hidden" /> Need to Know
        </h2>

        <div className="w-full flex flex-col gap-2 md:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className={`w-full bg-white rounded-[20px] transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'border-2 border-[#B3A1FF] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.12)]' 
                    : 'border border-gray-100 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.12)]'
                }`}
              >
                <div className="p-4 md:p-6 flex justify-between items-center bg-white z-10 relative min-h-[80px] md:min-h-0">
                  <h3 className="text-[#0C002B] font-nunito text-[15px] md:text-[20px] font-medium pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-[#0C002B]">
                    {isOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 md:px-6 pb-6 md:pb-6">
                        <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
                        <p className="text-[#0C002B]/60 font-nunito text-[16px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
