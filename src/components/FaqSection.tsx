'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FaqCategory {
  name: string;
  items: FaqItem[];
}

export const defaultFaqCategories: FaqCategory[] = [
  {
    name: 'General',
    items: [
      {
        question: 'What is trademark registration and why is it important?',
        answer: 'Trademark registration secures exclusive legal ownership over your brand name, logo, slogan, and visual identity (allowing you to use the ® symbol in India). It protects your business against copycats, prevents customer confusion, and turns your brand into a valuable, defensible commercial asset.'
      },
      {
        question: 'How does AI Trademark Search work at IPR Karo?',
        answer: 'Our proprietary AI engine scans public trademark databases in real-time. It analyzes phonetic similarities, visual marks, transliterations, and Nice classification overlaps to generate a comprehensive registerability report and conflict score before you file.'
      },
      {
        question: 'Do you work with startups or established brands?',
        answer: 'Both! We love helping early-stage founders secure their identity from day one with startup-friendly packages and MSME fee benefits, while also partnering with fast-growing companies and established enterprises to manage multi-class portfolios and enforce brand rights.'
      },
      {
        question: 'Why work with you instead of a traditional agency?',
        answer: 'Traditional law firms and agencies are often slow, opaque, and charge unpredictable hourly rates. IPR Karo combines AI-accelerated search, transparent fixed pricing, dedicated legal experts, and proactive 24/7 trademark monitoring for a seamless experience.'
      }
    ]
  },
  {
    name: 'Pricing',
    items: [
      {
        question: 'What is the trademark registration cost in India?',
        answer: 'Government filing fees are ₹4,500 per class for individuals, startups, and MSMEs (or ₹9,000 per class for companies). IPR Karo offers transparent flat-fee pricing with zero hidden costs, covering pre-filing search, drafting, and complete filing submission.'
      },
      {
        question: 'Are there any hidden fees or recurring charges?',
        answer: 'No. All our core registration packages are one-time flat fees. We provide 100% upfront clarity so you always know the exact cost before filing, with no unexpected retainers or surprise invoices.'
      }
    ]
  },
  {
    name: 'Process',
    items: [
      {
        question: 'How long does the trademark registration process take?',
        answer: 'Your application is prepared and filed within 24 to 48 hours, immediately securing your filing priority and allowing you to start using the ™ symbol. Complete government examination and final certificate issuance typically take 6 to 12 months depending on registry speed.'
      },
      {
        question: 'What documents are required for trademark registration?',
        answer: 'You only need: (1) your brand name or logo, (2) identity & address proof (PAN/Aadhaar or Certificate of Incorporation), (3) MSME/Udyam certificate if applicable (to claim 50% govt fee waiver), and (4) a signed Form TM-48 (power of attorney).'
      }
    ]
  },
  {
    name: 'Results',
    items: [
      {
        question: 'What happens if my trademark application faces an objection?',
        answer: 'If the trademark examiner raises an objection under Section 9 or 11, don\'t worry. Our legal experts evaluate the examination report and draft a strong, customized legal response citing relevant case law and evidence to get your mark accepted.'
      },
      {
        question: 'Can I register a trademark for multiple classes and PAN-India?',
        answer: 'Yes! You can file multi-class applications under the international Nice Classification system to protect your brand across various goods and services. A single Indian trademark registration grants exclusive legal protection across all states and union territories in India.'
      }
    ]
  }
];

// Flat list of all FAQs for components that expect a default flat list
const allDefaultFaqs: FaqItem[] = defaultFaqCategories.flatMap(c => c.items);

interface FaqSectionProps {
  items?: FaqItem[];
  title?: React.ReactNode;
  badge?: string;
  categories?: FaqCategory[];
}

export default function FaqSection({ items, title, badge, categories }: FaqSectionProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqCategories = categories || (items ? null : defaultFaqCategories);
  const currentFaqs = faqCategories 
    ? faqCategories[activeCategoryIndex]?.items || []
    : (items || allDefaultFaqs);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategoryIndex(index);
    setOpenIndex(0); // Open first item in selected category
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-[860px] mx-auto flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#1952C7]/30 bg-blue-50 text-[#1952C7] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3">
          {badge || 'GOT QUESTIONS?'}
        </div>

        {/* Heading */}
        <h2 className="text-center font-nunito mb-6 md:mb-8 font-bold tracking-tight text-[32px] sm:text-[40px] md:text-[46px] leading-[1.15]">
          {title ? (
            title
          ) : (
            <>
              <span className="block text-[#475569] font-semibold">You ask.</span>
              <span className="block text-[#0C002B] font-extrabold">
                We make it <span className="text-[#1952C7]">simple.</span>
              </span>
            </>
          )}
        </h2>

        {/* Card Container */}
        <div className="w-full bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-4 sm:p-6 md:p-8 lg:p-10 border border-slate-200/90 shadow-[0_8px_30px_rgba(12,0,43,0.05)]">
          {/* Category Tabs */}
          {faqCategories && faqCategories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 md:mb-8 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 w-fit mx-auto">
              {faqCategories.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => handleCategoryChange(idx)}
                    className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#1952C7] text-white shadow-sm'
                        : 'text-[#0C002B] hover:text-[#1952C7] hover:bg-white/70'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Accordion Items */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {currentFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${activeCategoryIndex}-${index}`}
                  onClick={() => toggleFaq(index)}
                  className={`group w-full rounded-[18px] sm:rounded-[22px] p-4 sm:p-5 md:px-6 md:py-5 cursor-pointer select-none transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#F0F5FF] border border-[#1952C7]/30 shadow-sm'
                      : 'bg-[#F8FAFC] hover:bg-[#F1F5FD]/60 border border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`font-nunito font-bold text-[15.5px] sm:text-[17px] md:text-[17.5px] leading-snug tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-[#1952C7]' : 'text-[#0C002B]'
                    }`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#1952C7] text-white shadow-sm'
                        : 'bg-slate-200/80 text-[#0C002B] group-hover:bg-slate-300'
                    }`}>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                        {!isOpen && <line x1="12" y1="4" x2="12" y2="20" />}
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-nunito text-[#334155] text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-[1.65] font-normal pt-3 sm:pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
