'use client';

import { useState } from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Instant Trademark Search",
    description: "Check availability in seconds before you invest in branding.",
    icon: "/smart/trademark.png"
  },
  {
    title: "AI Similarity Check",
    description: "Detect confusingly similar names that may cause rejection.",
    icon: "/smart/ai.png"
  },
  {
    title: "Class Finder Made Easy",
    description: "Identify the right trademark class without legal confusion.",
    icon: "/smart/classfinder.png"
  },
  {
    title: "Real-Time Risk Score",
    description: "Know your chances of approval before filing.",
    icon: "/smart/real-time-risk-score.png"
  },
  {
    title: "Avoid Legal Conflicts",
    description: "Stay protected from future objections and disputes.",
    icon: "/smart/avoid-legal.png"
  },
  {
    title: "Name Availability Alerts",
    description: "Get notified if similar trademarks are filed.",
    icon: "/smart/name-availability.png"
  },
  {
    title: "Multi-Industry Coverage",
    description: "Search across all trademark classes in one place.",
    icon: "/smart/multi-industry.png"
  },
  {
    title: "Expert Filing Support",
    description: "From search to registration, we handle everything.",
    icon: "/smart/expert-fillin.png"
  },
  {
    title: "Infringement Monitoring",
    description: "Track copycats and protect your brand identity.",
    icon: "/smart/infringement.png"
  },
  {
    title: "Fast & Paperless Process",
    description: "No complex paperwork, everything online.",
    icon: "/smart/fast-and-paperless.png"
  },
  {
    title: "Built for Startups",
    description: "Simple, fast, and made for non-legal users.",
    icon: "/smart/startup.png"
  },
  {
    title: "Secure & Confidential",
    description: "Your brand ideas stay 100% protected.",
    icon: "/smart/secure.png"
  }
];

export default function SmarterDecisions() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full bg-white py-15 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-[#0C002B] font-nunito text-[36px] md:text-[46px] font-semibold text-center mb-16 leading-[1.2] tracking-tight">
          Smarter Trademark <br className="hidden md:block" /> Decisions with AI
        </h2>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
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
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[#0C002B] font-nunito text-[16px] md:text-[18px] font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#0C002B]/60 text-[14px] leading-relaxed max-w-[240px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="md:hidden mt-12 mb-[-28px] bg-[#0C002B] text-white px-8 py-3.5 rounded-[12px] font-semibold text-[15px] transition-all duration-300 hover:bg-[#1A0B42] active:scale-[0.98]"
          >
            View more
          </button>
        )}
      </div>
    </section>
  );
}
