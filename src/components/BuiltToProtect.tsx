'use client';

import { useState } from 'react';
import Image from 'next/image';
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
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        <h2 className="text-[#0C002B] font-nunito text-[32px] md:text-[50px] font-bold text-center mb-12 md:mb-16 leading-[1.1] tracking-tight max-w-[500px]">
          Built to protect what you&apos;re building
        </h2>

        {/* MOBILE VIEW: Accordion/Expanded Cards */}
        <div className="md:hidden w-full flex flex-col gap-4">
          {tabs.map((tab) => {
            const isExpanded = expandedId === tab.id;
            return (
              <div 
                key={tab.id}
                className="w-full bg-[#F7F7F7] rounded-[20px] overflow-hidden transition-all duration-300 border border-gray-100"
              >
                <div 
                  className="p-6 flex flex-col items-start relative cursor-pointer"
                  onClick={() => !isExpanded && setExpandedId(tab.id)}
                >
                  <div className="flex justify-between items-center w-full mb-3">
                    <span className="text-[#6B7280] font-nunito text-[16px]">{tab.category}</span>
                    <button 
                      onClick={(e) => {
                        if (isExpanded) {
                          e.stopPropagation();
                          setExpandedId(null);
                        }
                      }} 
                      className="text-[#0C002B]"
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </motion.div>
                    </button>
                  </div>
                  
                  <h3 className="text-[#0C002B] font-nunito text-[24px] font-bold leading-[1.2] mb-4 max-w-[280px]">
                    {tab.title}
                  </h3>
                  
                  <motion.button 
                    animate={{ marginBottom: isExpanded ? '20px' : '0px' }}
                    className="border border-[#0C002B] text-[#0C002B] font-bold px-6 py-2.5 rounded-[12px] text-[14px]"
                  >
                    {tab.buttonText}
                  </motion.button>

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                      marginTop: isExpanded ? 20 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden w-full"
                  >
                    <div className="w-full flex flex-col gap-6">
                      {tab.features.map((feature, i) => (
                        <div key={i} className="flex flex-col">
                          <h4 className="text-[#0C002B] font-nunito text-[18px] font-bold mb-1.5">
                            {feature.heading}
                          </h4>
                          <p className="text-[#0C002B]/60 text-[14px] leading-relaxed">
                            {feature.desc}
                          </p>
                          {i === 0 && <div className="w-full h-[1px] bg-gray-200 mt-6" />}
                        </div>
                      ))}
                    </div>

                    <div className="w-full flex justify-center mt-8 pb-4">
                      <div className="relative w-32 h-32">
                        <Image 
                          src={tab.icon} 
                          alt="Illustration" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
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
                    fill 
                    className="object-cover rounded-lg"
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
                  <h3 className="text-[#0C002B] font-nunito text-[40px] font-medium leading-[1.15] mb-8">
                    {tabs[activeTab].title}
                  </h3>
                  <button className="border border-[#0C002B] text-[#0C002B] font-medium px-6 py-2.5 rounded-[10px] hover:bg-[#0C002B] hover:text-white transition-colors duration-300">
                    {tabs[activeTab].buttonText}
                  </button>
                </div>

                <div className="flex-1 flex flex-col gap-8 max-w-[420px] mr-4 mb-6 pt-4">
                  {tabs[activeTab].features.map((feature, i) => (
                    <div key={i} className="flex flex-col">
                      <h4 className="text-[#0C002B] font-nunito text-[19px] mb-2.5 font-semibold">
                        {feature.heading}
                      </h4>
                      <p className="text-[#0C002B]/60 text-[15px] leading-relaxed">
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
