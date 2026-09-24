'use client';

import Image from 'next/image';

interface StepItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const steps: StepItem[] = [
  {
    id: 'brand',
    title: 'Brand',
    description: 'A clear digital copy of the name, logo, or tagline to register.',
    iconSrc: '/images/get-started/brand-asset.svg',
    iconAlt: 'Brand name, logo, or tagline digital copy required for trademark filing',
  },
  {
    id: 'id-proof',
    title: 'ID Proof',
    description: 'Aadhaar Card, PAN Card, Passport, Voter ID, or Driving License.',
    iconSrc: '/images/get-started/id-proof.svg',
    iconAlt: 'Applicant identity proof document such as Aadhaar, PAN card, or passport',
  },
  {
    id: 'power-of-attorney',
    title: 'Power of Attorney',
    description: 'Signed authorization allowing us to file the trademark on your behalf.',
    iconSrc: '/images/get-started/power-of-attorney.svg',
    iconAlt: 'Signed Power of Attorney legal authorization document for trademark filing',
  },
];

const filingDeliverables = [
  {
    id: 'official-acknowledgement',
    title: 'Official Acknowledgement',
    description: 'Confirmation receipt with your trademark application number.',
    iconSrc: '/images/get-started/official-acknowledgement.svg',
    iconAlt: 'Official government trademark filing acknowledgement receipt',
    iconWidth: 84,
    iconHeight: 92,
  },
  {
    id: 'trademark-tma-form',
    title: 'Trademark TM-A Form',
    description: 'Stamped TM-A application copy submitted to the registry.',
    iconSrc: '/images/get-started/trademark-tma-form.svg',
    iconAlt: 'Stamped Trademark Form TM-A official application copy submitted to registry',
    iconWidth: 84,
    iconHeight: 84,
  },
];

export default function WhatYouNeedToGetStarted() {
  return (
    <section
      id="what-you-need-to-get-started"
      aria-labelledby="get-started-heading"
      className="w-full bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100/80"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Heading */}
        <h2
          id="get-started-heading"
          className="text-[#0C002B] font-nunito text-[32px] sm:text-[42px] md:text-[48px] font-semibold text-center leading-[1.18] tracking-tight mb-7 md:mb-9"
        >
          What You’ll Need to
          <br />
          <span className="text-[#1952C7]">Get Started</span>
        </h2>

        {/* 3 Step Items with connecting dashed line */}
        <div className="relative w-full max-w-5xl">
          {/* Connecting Dashed Line for Desktop */}
          <div
            className="hidden md:block absolute top-[45px] left-[16%] right-[16%] border-t-2 border-dashed border-[#1952C7]/50 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Card */}
                <div className="relative z-10 w-[90px] h-[90px] sm:w-[96px] sm:h-[96px] bg-white rounded-[22px] border border-[#CBD5E1]/80 shadow-[0_4px_20px_rgba(12,0,43,0.04)] group-hover:shadow-[0_10px_28px_rgba(12,0,43,0.08)] group-hover:border-[#1952C7]/40 group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-3 mb-5">
                  <Image
                    src={step.iconSrc}
                    alt={step.iconAlt}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Step Title */}
                <h3 className="text-[#0C002B] group-hover:text-[#1952C7] font-nunito text-[20px] sm:text-[21px] font-bold mb-2 tracking-tight transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#334155] font-nunito text-[14px] sm:text-[14.5px] leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: What You Get After Filing */}
        <div className="w-full max-w-6xl mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, description, bullet points */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2
              id="what-you-get-heading"
              className="text-[#0C002B] font-nunito text-[34px] sm:text-[42px] md:text-[46px] font-extrabold leading-[1.15] tracking-tight mb-5"
            >
              What You Get <br />
              <span className="text-[#1952C7]">After Filing</span>
            </h2>

            <p className="text-[#334155] font-nunito text-[16px] sm:text-[17px] leading-relaxed mb-8 max-w-lg">
              Once your trademark is filed, you receive official documents
              confirming your application and enabling status tracking.
            </p>

            <ul className="space-y-4 w-full" role="list">
              <li className="flex items-start gap-3.5">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#1952C7] mt-2 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[#1E293B] font-nunito text-[15px] sm:text-[16px] font-medium leading-relaxed">
                  Track your trademark status anytime using your application
                  number.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#1952C7] mt-2 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[#1E293B] font-nunito text-[15px] sm:text-[16px] font-medium leading-relaxed">
                  Receive official documents as proof of successful filing.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: 2 Stacked Deliverable Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-7">
            {filingDeliverables.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] border border-slate-200/90 hover:border-[#1952C7]/50 p-6 sm:p-7 md:p-8 flex items-center justify-between gap-6 shadow-[0_4px_24px_rgba(12,0,43,0.03)] hover:shadow-[0_12px_32px_rgba(25,82,199,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Text Content */}
                <div className="flex-1 pr-2">
                  <h3 className="text-[#0C002B] group-hover:text-[#1952C7] font-nunito text-[21px] sm:text-[23px] font-bold mb-2 tracking-tight transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[#334155] font-nunito text-[14px] sm:text-[15px] leading-relaxed max-w-[280px]">
                    {item.description}
                  </p>
                </div>

                {/* Illustration on Right */}
                <div className="w-18 h-18 sm:w-22 sm:h-22 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className="w-full h-auto max-h-[88px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
