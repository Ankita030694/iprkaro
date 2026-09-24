'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const SparkIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill={color} />
    <path d="M12 5L13.5 10.5L19 12L13.5 13.5L12 19L10.5 13.5L5 12L10.5 10.5L12 5Z" fill={color} opacity="0.5" transform="rotate(45 12 12)" />
  </svg>
);

const services = [
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
    href: '/our-services/trademark-registration',
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
    href: '/our-services/copyright-registration',
  },
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
        text: 'From drafting to submission, our experts manage the entire process - helping you secure exclusive rights with confidence.',
      }
    ],
    buttonText: 'File My Patent',
    href: '/our-services/patent-registration',
  }
];

export default function WhatWeProtect() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: scrollRef
  });

  // Small initial width (0.2) to show it's a bar even at start
  const scaleX = useTransform(scrollXProgress, [0, 1], [0.2, 1]);

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h3 className="text-[#0C002B] font-nunito text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-center mb-6 md:mb-8 leading-[1.15] tracking-tight">
          What we protect,<br />we <span className="text-[#1952C7]">perfect</span>
        </h3>

        {/* 3 Static Service Cards */}
        <div 
          ref={scrollRef}
          className="w-full flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-6 lg:gap-8 pb-6 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 items-stretch"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[88vw] sm:w-[350px] md:w-auto snap-center rounded-[24px] overflow-hidden flex flex-col justify-between bg-white border border-gray-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 h-full group"
            >
              {/* Header Tab */}
              <div className="bg-[#F0F5FF] px-6 sm:px-7 py-4 flex items-center gap-3 border-b border-[#1952C7]/10 h-[62px]">
                <SparkIcon color={service.sparkColor} />
                <span className="text-[#1952C7] font-nunito text-[16px] sm:text-[17px] font-bold -mt-0.5 tracking-tight">
                  {service.tabTitle}
                </span>
              </div>

              {/* Content Body */}
              <div className="bg-[#F8F9FA] p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-[#0C002B] font-nunito text-[24px] lg:text-[26px] xl:text-[28px] font-bold leading-[1.2] mb-6 min-h-[58px] flex items-start tracking-tight">
                    {service.title}
                  </h4>

                  <div className="flex flex-col gap-6 w-full mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex flex-col">
                        <h5 className="text-[#0C002B] font-nunito text-[17px] lg:text-[18px] font-bold mb-2 text-[#0C002B]">
                          {feature.heading}
                        </h5>
                        <p className="text-[#334155] text-[14px] leading-relaxed font-normal">
                          {feature.text}
                        </p>
                        {i === 0 && <div className="w-full h-[1px] bg-gray-200/80 mt-6" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  <Link href={service.href} className="w-full block">
                    <button className="w-full border-2 border-[#0C002B] text-[#0C002B] font-bold py-3 px-6 rounded-[12px] hover:bg-[#1952C7] hover:border-[#1952C7] hover:text-white active:scale-[0.98] transition-all duration-200 text-center font-nunito text-[15px]">
                      {service.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Progress Indicator */}
        <div className="md:hidden w-full max-w-[120px] h-[4px] bg-[#0C002B]/5 rounded-full mx-auto mt-4 overflow-hidden">
          <motion.div 
            className="h-full bg-[#0C002B] origin-left"
            style={{ scaleX }}
          />
        </div>

        <Link href="/our-services">
          <button className="mt-6 md:mt-8 bg-[#0C002B] text-white px-8 py-3.5 rounded-[12px] font-medium text-[16px] transition-all duration-300 hover:bg-[#1952C7] active:scale-[0.98] shadow-md hover:shadow-lg">
            Explore Everything
          </button>
        </Link>
      </div>
    </section>
  );
}
