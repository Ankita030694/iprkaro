'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SparkIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill={color} />
    <path d="M12 5L13.5 10.5L19 12L13.5 13.5L12 19L10.5 13.5L5 12L10.5 10.5L12 5Z" fill={color} opacity="0.5" transform="rotate(45 12 12)" />
  </svg>
);

const ClickMeArrow = () => (
  <div className="absolute -top-[100px] md:-top-[120px] -right-8 md:-right-24 lg:-right-32 hidden sm:flex z-50 pointer-events-none w-[120px] md:w-[160px] h-[120px] md:h-[160px]">
    <Image 
      src="/protect/arrow.png" 
      alt="Click me!" 
      fill 
      className="object-contain"
    />
  </div>
);

const services = [
  {
    id: 'patent',
    tabTitle: 'Patent Service',
    sparkColor: '#FF8A65', // soft orange/red
    title: 'Turn ideas into protected assets',
    features: [
      {
        heading: 'Patent Search & Analysis',
        text: 'Validate your idea with in-depth research and AI insights. Ensure your invention is unique before filing.',
      },
      {
        heading: 'End-to-End Patent Filing',
        text: 'From drafting to submission, our experts manage the entire process — helping you secure exclusive rights with confidence.',
      }
    ],
    buttonText: 'File My Patent',
  },
  {
    id: 'copyright',
    tabTitle: 'Copyright Service',
    sparkColor: '#FFD54F', // soft yellow
    title: 'Protect what you create, effortlessly',
    features: [
      {
        heading: 'Secure Your Creative Work',
        text: 'Safeguard your designs, content, music, and more with legally valid copyright protection ensuring full ownership.',
      },
      {
        heading: 'Quick & Easy Filing',
        text: 'No complex paperwork. We simplify the process so you can register your work quickly and focus on creating more.',
      }
    ],
    buttonText: 'Start Copyright Filing',
  },
  {
    id: 'trademark',
    tabTitle: 'Trademark Service',
    sparkColor: '#CE93D8', // soft purple
    title: 'Own your brand before someone else does',
    features: [
      {
        heading: 'AI Trademark Search',
        text: 'Instantly check name availability with our AI-powered system. Avoid rejections and choose a brand that’s unique, strong, and legally safe.',
      },
      {
        heading: 'Hassle-Free Registration',
        text: 'From application to approval, we handle everything. Get expert support and fast filing so your brand is protected without delays.',
      }
    ],
    buttonText: 'Protect My Brand',
  }
];

export default function WhatWeProtect() {
  const [activeTab, setActiveTab] = useState(2); // trademark is front by default

  const getSlot = (index: number, active: number) => {
    if (index === active) return 2;
    if (active === 2) return index === 0 ? 0 : 1;
    if (active === 1) return index === 0 ? 0 : 1;
    if (active === 0) return index === 1 ? 0 : 1;
    return 0;
  };

  const slotStyles = {
    0: { width: '88%', y: 0, zIndex: 10 },
    1: { width: '94%', y: 35, zIndex: 20 },
    2: { width: '100%', y: 70, zIndex: 30 },
  };

  return (
    <section className="w-full bg-white py-18 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        <h2 className="text-[#0C002B] font-nunito text-[40px] md:text-[52px] font-semibold text-center mb-12 md:mb-24 leading-[1.1] tracking-tight">
          What we protect,<br />we perfect
        </h2>

        <div className="w-full relative h-auto md:h-[680px] lg:h-[650px]">
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 scrollbar-hide -mx-4 px-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-[90vw] snap-center rounded-xl overflow-hidden flex flex-col"
                style={{
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                {/* Header Tab */}
                <div className="bg-[#EAF8F9] px-6 py-4 flex items-center gap-3 border-b border-[rgba(0,0,0,0.03)] h-[60px]">
                  <SparkIcon color={service.sparkColor} />
                  <span className="text-[#0C002B] font-nunito text-[16px] -mt-0.5 font-semibold">{service.tabTitle}</span>
                </div>
                
                {/* Content Body */}
                <div className="bg-white px-6 py-10 flex flex-col items-start min-h-[450px]">
                  <h3 className="text-[#0C002B] font-nunito text-[28px] font-bold leading-[1.15] mb-8">
                    {service.title}
                  </h3>
                  <div className="flex flex-col gap-8 w-full">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex flex-col">
                        <h4 className="text-[#0C002B] font-nunito text-[18px] font-bold mb-2">
                          {feature.heading}
                        </h4>
                        <p className="text-[#0C002B]/70 text-[14px] leading-relaxed font-medium">
                          {feature.text}
                        </p>
                        {i === 0 && <div className="w-[100%] h-[1px] bg-gray-100 mt-8" />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <button className="border-2 border-[#0C002B] text-[#0C002B] font-bold px-8 py-3 rounded-[12px] active:bg-[#0C002B] active:text-white transition-all">
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <ClickMeArrow />
          </div>
          
          {services.map((service, index) => {
            const slot = getSlot(index, activeTab);
            const isActive = activeTab === index;
            
            return (
              <motion.div
                key={service.id}
                className="hidden md:flex absolute left-0 right-0 mx-auto rounded-xl overflow-hidden cursor-pointer flex-col"
                initial={false}
                animate={{
                  width: slotStyles[slot as keyof typeof slotStyles].width,
                  y: slotStyles[slot as keyof typeof slotStyles].y,
                  zIndex: slotStyles[slot as keyof typeof slotStyles].zIndex,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                style={{
                  boxShadow: isActive ? '0 20px 50px -10px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}
                onClick={() => setActiveTab(index)}
              >
                {/* Header Tab */}
                <div 
                  className="bg-[#EAF8F9] px-8 py-5 flex items-center gap-3 transition-colors duration-300 border-b border-[rgba(0,0,0,0.03)] h-[65px]"
                >
                  <SparkIcon color={service.sparkColor} />
                  <span className="text-[#0C002B] font-nunito text-[16px] xl:text-[17px] -mt-0.5">{service.tabTitle}</span>
                </div>
                
                {/* Content Body */}
                <div 
                  className="bg-[#F3F3F3] px-8 py-10 md:px-14 md:py-14 flex flex-col items-start min-h-[480px] w-full"
                >
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0, filter: isActive ? 'blur(0px)' : 'blur(4px)' }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-start"
                  >
                    <h3 className="text-[#0C002B] font-nunito text-[32px] md:text-[38px] font-medium leading-[1.1] mb-10 max-w-[450px]">
                      {service.title}
                    </h3>

                    <div className="flex flex-col gap-8 w-full max-w-[480px]">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex flex-col">
                          <h4 className="text-[#0C002B] font-nunito text-[19px] mb-2.5">
                            {feature.heading}
                          </h4>
                          <p className="text-[#0C002B]/60 text-[15px] leading-relaxed">
                            {feature.text}
                          </p>
                          {i === 0 && <div className="w-[100%] h-[1px] bg-gray-200 mt-8" />}
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 flex-1 flex items-start">
                      <button className="border border-[#0C002B] text-[#0C002B] font-medium px-6 py-2.5 rounded-[12px] hover:bg-[#0C002B] hover:text-white transition-colors duration-300">
                        {service.buttonText}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Link href="/our-services">
          <button className="mt-6 md:mt-24 bg-[#0C002B] text-white px-8 py-3.5 rounded-[12px] font-medium text-[16px] transition-all duration-300 hover:bg-[#1A0B42] active:scale-[0.98]">
            Explore Everything
          </button>
        </Link>
      </div>
    </section>
  );
}
