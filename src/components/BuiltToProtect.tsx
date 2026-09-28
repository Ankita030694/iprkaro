'use client';


import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 1,
    category: 'Founders',
    icon: '/abovepricing/Startups.png',
    title: 'Turning ideas into protected brands',
    buttonText: 'Check Trademark Availability',
    features: [
      {
        heading: 'Secure your brand early',
        desc: 'Protect your idea early to avoid expensive disputes, copycats, or having to completely rebrand after you\'ve already launched.'
      },
      {
        heading: 'File your trademark easily',
        desc: 'Skip complex legal steps and get guided support so you can focus on building your product instead of paperwork.'
      }
    ]
  },
  {
    id: 2,
    category: 'Startups',
    icon: '/abovepricing/Founder.png',
    title: 'Build fast. Stay protected.',
    buttonText: 'Start Your Trademark',
    features: [
      {
        heading: 'Launch with a legally secure identity',
        desc: 'Build investor confidence by protecting your brand name early and avoiding risks that can slow down your growth later.'
      },
      {
        heading: 'Go from idea to filing in days',
        desc: 'Speed up your trademark process with a streamlined system designed to eliminate delays and unnecessary complications.'
      }
    ]
  },
  {
    id: 3,
    category: 'Personal Brands',
    icon: '/abovepricing/Agencies.png',
    title: 'Own your name. Build your legacy.',
    buttonText: 'Protect My Brand',
    features: [
      {
        heading: 'Stop copycats before they start',
        desc: 'Secure your name and identity so others cannot misuse, replicate, or take advantage of your growing personal brand.'
      },
      {
        heading: 'Turn your name into an asset',
        desc: 'A registered trademark transforms your identity into something valuable that you fully own and can monetize long-term.'
      }
    ]
  },
  {
    id: 4,
    category: 'Agencies',
    icon: '/abovepricing/Creators.png',
    title: 'Manage brands. We handle protection.',
    buttonText: 'Explore Agency Solutions',
    features: [
      {
        heading: 'Protect multiple clients effortlessly',
        desc: 'Manage trademark filings for all your clients without juggling legal complexities or slowing down your internal operations.'
      },
      {
        heading: 'Focus on growth, not legal work',
        desc: 'Let us handle compliance and protection while you concentrate on scaling campaigns and delivering better results.'
      }
    ]
  },
  {
    id: 5,
    category: 'Online Sellers',
    icon: '/abovepricing/Ecommerce.png',
    title: 'Sell freely. Stay protected.',
    buttonText: 'Secure My Brand',
    features: [
      {
        heading: 'Avoid takedowns and legal risks',
        desc: 'Protect your listings from infringement, copycats, and disputes that can suddenly disrupt your sales and brand reputation online.'
      },
      {
        heading: 'Build a brand that lasts',
        desc: 'Secure your store name with a trademark so you can scale confidently without fear of losing your brand identity.'
      }
    ]
  }
];

export default function BuiltToProtect() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeMobileTab, setActiveMobileTab] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const { scrollLeft } = mobileScrollRef.current;
      const card = mobileScrollRef.current.firstElementChild as HTMLElement | null;
      const cardWidth = card ? card.offsetWidth + 16 : 300;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveMobileTab(Math.min(Math.max(index, 0), tabs.length - 1));
    }
  };

  const scrollToMobileTab = (index: number) => {
    if (mobileScrollRef.current) {
      const card = mobileScrollRef.current.firstElementChild as HTMLElement | null;
      const cardWidth = card ? card.offsetWidth + 16 : 300;
      mobileScrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveMobileTab(index);
    }
  };

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        <h3 className="text-[#0C002B] font-nunito text-[32px] md:text-[50px] font-semibold text-center mb-6 md:mb-8 leading-[1.1] tracking-tight max-w-[500px]">
          Built to protect what <span className="text-[#1952C7]">you&apos;re building</span>
        </h3>

        {/* MOBILE VIEW: Horizontal Swipeable Cards */}
        <div className="md:hidden w-full">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 items-stretch scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="flex-shrink-0 w-[88vw] sm:w-[350px] snap-center bg-[#F7F7F7] rounded-[24px] p-6 border border-gray-100 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-center w-full mb-3">
                    <span className="text-[#1952C7] bg-[#EAF2FC] font-nunito font-bold text-[13px] px-3 py-1 rounded-full">
                      {tab.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm">
                      <Image
                        src={tab.icon}
                        alt={tab.category}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-[#0C002B] font-nunito text-[22px] font-bold leading-[1.22] mb-4">
                    {tab.title}
                  </h4>

                  {/* Features */}
                  <div className="flex flex-col gap-4 mb-6">
                    {tab.features.map((feature, i) => (
                      <div key={i} className="flex flex-col">
                        <h5 className="text-[#0C002B] font-nunito text-[15px] font-bold mb-1">
                          {feature.heading}
                        </h5>
                        <p className="text-[#334155] text-[13.5px] leading-relaxed font-normal">
                          {feature.desc}
                        </p>
                        {i === 0 && <div className="w-full h-[1px] bg-gray-200/80 mt-4" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="w-full block border-2 border-[#0C002B] text-[#0C002B] font-bold py-2.5 px-4 rounded-[12px] text-[14px] hover:bg-[#1952C7] hover:border-[#1952C7] hover:text-white active:scale-[0.98] transition-colors duration-200 text-center"
                  >
                    {tab.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Controls: Arrows & Dot Indicators */}
          <div className="flex items-center justify-between w-full max-w-[340px] mx-auto mt-4 px-2">
            <button
              type="button"
              onClick={() => scrollToMobileTab((activeMobileTab - 1 + tabs.length) % tabs.length)}
              aria-label="Previous card"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1952C7] hover:bg-blue-50 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5">
              {tabs.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToMobileTab(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeMobileTab === idx ? 'w-6 bg-[#1952C7]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to category ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToMobileTab((activeMobileTab + 1) % tabs.length)}
              aria-label="Next card"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1952C7] hover:bg-blue-50 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW: Original Tabs */}
        <div className="hidden md:block w-full bg-[#F6F6F6] rounded-[32px] p-4 overflow-hidden">
          <div className="flex overflow-x-auto pb-4 mb-10 gap-4 snap-x hide-scrollbar w-full">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative cursor-pointer transition-all duration-300 bg-white rounded-[24px] flex-shrink-0 md:flex-1 aspect-[4/5] flex items-center justify-center snap-center}`}
                >
                  <Image
                    src={tab.icon}
                    alt={tab.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              );
            })}
          </div>

          <div className="min-h-[250px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-row justify-between gap-8 w-full p-4"
              >
                <div className="flex-1 flex flex-col items-start max-w-[400px] ml-10 pt-4">
                  <h4 className="text-[#0C002B] font-nunito text-[40px] font-medium leading-[1.15] mb-8">
                    {tabs[activeTab].title}
                  </h4>
                  <Link
                    href="/contact-us"
                    className="inline-block border-2 border-[#0C002B] text-[#0C002B] font-bold px-6 py-2.5 rounded-[10px] hover:bg-[#1952C7] hover:border-[#1952C7] hover:text-white transition-colors duration-300"
                  >
                    {tabs[activeTab].buttonText}
                  </Link>
                </div>

                <div className="flex-1 flex flex-col gap-8 max-w-[420px] mr-4 mb-6 pt-4">
                  {tabs[activeTab].features.map((feature, i) => (
                    <div key={i} className="flex flex-col">
                      <h5 className="text-[#0C002B] font-nunito text-[19px] mb-2.5 font-semibold">
                        {feature.heading}
                      </h5>
                      <p className="text-[#334155] text-[15px] leading-relaxed font-normal">
                        {feature.desc}
                      </p>
                      {i === 0 && <div className="w-full h-[1px] bg-gray-200 mt-8" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
