'use client';
import { validateAndNormalizeDescription } from '@/lib/seo-utils';


import { useState } from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Instant Trademark Search",
    description: validateAndNormalizeDescription("Check availability in seconds before you invest in branding.", "components/SmarterDecisions.tsx "),
    icon: "/smart/trademark.png"
  },
  {
    title: "AI Similarity Check",
    description: validateAndNormalizeDescription("Detect confusingly similar names that may cause rejection.", "components/SmarterDecisions.tsx "),
    icon: "/smart/ai.png"
  },
  {
    title: "Class Finder Made Easy",
    description: validateAndNormalizeDescription("Identify the right trademark class without legal confusion.", "components/SmarterDecisions.tsx "),
    icon: "/smart/classfinder.png"
  },
  {
    title: "Real-Time Risk Score",
    description: validateAndNormalizeDescription("Know your chances of approval before filing.", "components/SmarterDecisions.tsx "),
    icon: "/smart/real-time-risk-score.png"
  },
  {
    title: "Avoid Legal Conflicts",
    description: validateAndNormalizeDescription("Stay protected from future objections and disputes.", "components/SmarterDecisions.tsx "),
    icon: "/smart/avoid-legal.png"
  },
  {
    title: "Name Availability Alerts",
    description: validateAndNormalizeDescription("Get notified if similar trademarks are filed.", "components/SmarterDecisions.tsx "),
    icon: "/smart/name-availability.png"
  },
  {
    title: "Multi-Industry Coverage",
    description: validateAndNormalizeDescription("Search across all trademark classes in one place.", "components/SmarterDecisions.tsx "),
    icon: "/smart/multi-industry.png"
  },
  {
    title: "Expert Filing Support",
    description: validateAndNormalizeDescription("From search to registration, we handle everything.", "components/SmarterDecisions.tsx "),
    icon: "/smart/expert-fillin.png"
  },
  {
    title: "Infringement Monitoring",
    description: validateAndNormalizeDescription("Track copycats and protect your brand identity.", "components/SmarterDecisions.tsx "),
    icon: "/smart/infringement.png"
  },
  {
    title: "Fast & Paperless Process",
    description: validateAndNormalizeDescription("No complex paperwork, everything online.", "components/SmarterDecisions.tsx "),
    icon: "/smart/fast-and-paperless.png"
  },
  {
    title: "Built for Startups",
    description: validateAndNormalizeDescription("Simple, fast, and made for non-legal users.", "components/SmarterDecisions.tsx "),
    icon: "/smart/startup.png"
  },
  {
    title: "Secure & Confidential",
    description: validateAndNormalizeDescription("Your brand ideas stay 100% protected.", "components/SmarterDecisions.tsx "),
    icon: "/smart/secure.png"
  }
];

export default function SmarterDecisions({ title, headingTag: HeadingTag = 'h2' }: { title?: React.ReactNode, headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <HeadingTag className="text-[#0C002B] font-nunito text-[36px] md:text-[46px] font-semibold text-center mb-8 md:mb-10 leading-[1.2] tracking-tight">
          {title || (
            <>
              Smarter Trademark <br className="hidden md:block" /> Decisions with <span className="text-[#1952C7]">AI</span>
            </>
          )}
        </HeadingTag>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-7 md:gap-y-9">
          {features.slice(0, showAll ? features.length : undefined).map((feature, index) => {
            const isHiddenOnMobile = !showAll && index >= 6;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center transition-all duration-300 ${isHiddenOnMobile ? 'hidden md:flex' : 'flex'}`}
              >
                <div className="h-14 w-14 mb-5 relative flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-[#0C002B] font-nunito text-[16px] md:text-[18px] font-bold mb-2">
                  {feature.title}
                </h4>
                <p className="text-[#334155] text-[14px] leading-relaxed max-w-[240px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="md:hidden mt-8 bg-[#0C002B] text-white px-8 py-3.5 rounded-[12px] font-semibold text-[15px] transition-all duration-300 hover:bg-[#1952C7] active:scale-[0.98]"
          >
            View more
          </button>
        )}
      </div>
    </section>
  );
}
