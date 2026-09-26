'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TrademarkTypeItem {
  id: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
  description: string;
  linkAriaLabel: string;
}

const trademarkTypes: TrademarkTypeItem[] = [
  {
    id: 'brand-name',
    logoSrc: '/logo/Adidas logo.jpg',
    logoAlt: 'Adidas Brand Name trademark illustration',
    logoWidth: 54,
    logoHeight: 44,
    title: 'Brand Name',
    description: 'Secure your business name and protect your brand identity',
    linkAriaLabel: 'Start filing your brand name trademark registration',
  },
  {
    id: 'brand-name-logo',
    logoSrc: '/logo/nike.webp',
    logoAlt: 'Nike Brand Name and Logo trademark illustration',
    logoWidth: 44,
    logoHeight: 44,
    title: 'Brand Name + Logo',
    description: 'Protect your brand name and logo for complete trademark coverage.',
    linkAriaLabel: 'Start filing your brand name and logo trademark registration',
  },
  {
    id: 'logo',
    logoSrc: '/logo/Apple_logo.jpg',
    logoAlt: 'Apple Logo graphical symbol trademark illustration',
    logoWidth: 44,
    logoHeight: 44,
    title: 'Logo',
    description: 'Secure the graphical symbol that represents your brand and builds visual recognition.',
    linkAriaLabel: 'Start filing your logo trademark registration',
  },
  {
    id: 'slogan',
    logoSrc: '/images/trademark-types/slogan.svg',
    logoAlt: 'Slogan and tagline trademark illustration',
    logoWidth: 100,
    logoHeight: 44,
    title: 'Slogan',
    description: 'Trademark your tagline to protect your brand message and marketing identity.',
    linkAriaLabel: 'Start filing your slogan trademark registration',
  },
];

export default function WhatCanYouTrademark() {
  return (
    <section
      aria-labelledby="what-can-you-trademark-heading"
      className="w-full bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading - H2 for proper SEO hierarchy under Hero H1 */}
        <h2
          id="what-can-you-trademark-heading"
          className="text-[#0C002B] font-nunito text-[32px] sm:text-[42px] md:text-[48px] font-semibold text-center leading-[1.18] tracking-tight mb-6 md:mb-8"
        >
          What Can You <span className="text-[#1952C7]">Trademark?</span>
        </h2>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {trademarkTypes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[22px] p-7 md:p-8 border border-slate-200/80 hover:border-[#1952C7]/30 shadow-[0_4px_24px_rgba(12,0,43,0.04)] hover:shadow-[0_16px_36px_rgba(25,82,199,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Logo Area */}
                <div className="h-12 flex items-center mb-8">
                  <Image
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    width={item.logoWidth}
                    height={item.logoHeight}
                    className="object-contain w-auto h-10 md:h-11 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Title - H3 for clean heading outline */}
                <h3 className="text-[#0C002B] group-hover:text-[#1952C7] font-nunito text-[21px] sm:text-[22px] font-bold mb-2.5 tracking-tight transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#334155] font-nunito text-[14.5px] sm:text-[15px] leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-2">
                <Link
                  href="/contact-us"
                  aria-label={item.linkAriaLabel}
                  className="w-full block bg-[#0C002B] hover:bg-[#1952C7] text-white py-3 px-4 rounded-[12px] font-nunito font-semibold text-[14.5px] text-center tracking-wide transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow"
                >
                  Start Filing
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer text at bottom right */}
        <div className="w-full mt-6 text-right">
          <p className="text-[#64748B] text-[13px] font-nunito font-medium tracking-tight">
            <span className="text-[#4338CA] font-semibold mr-1">*</span>
            Brand used for illustration only. No affiliation with respective owner.
          </p>
        </div>
      </div>
    </section>
  );
}
