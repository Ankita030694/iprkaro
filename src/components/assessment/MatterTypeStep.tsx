'use client';

import React from 'react';

export interface MatterOption {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const MATTER_OPTIONS: MatterOption[] = [
  {
    id: 'trademark-registration',
    title: 'Trademark Registration',
    subtitle: 'Brand name, logo, or slogan protection',
    icon: '®',
  },
  {
    id: 'trademark-objection',
    title: 'Trademark Objection (Exam Reply)',
    subtitle: 'Examination report & reply drafting',
  },
  {
    id: 'trademark-opposition',
    title: 'Trademark Opposition & Hearings',
    subtitle: 'Form TM-O notices, hearings & defense',
  },
  {
    id: 'trademark-infringement',
    title: 'Trademark Infringement & Defense',
    subtitle: 'Cease & desist, counterfeit & protection',
  },
  {
    id: 'trademark-renewal',
    title: 'Trademark Renewal & Restoration',
    subtitle: '10-year validity renewal & restoration',
  },
  {
    id: 'trademark-search',
    title: 'Comprehensive Trademark Search',
    subtitle: 'AI conflict check & class report',
  },
];

interface MatterTypeStepProps {
  selectedMatter: string;
  onSelectMatter: (matterId: string) => void;
  onNext: () => void;
}

export default function MatterTypeStep({ selectedMatter, onSelectMatter, onNext }: MatterTypeStepProps) {
  const handleCardClick = (id: string) => {
    onSelectMatter(id);
    // Auto-advance to Step 2 immediately with smooth transition
    setTimeout(() => {
      onNext();
    }, 150);
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Step Prompt */}
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-bold text-[#0C002B] font-nunito">
          Select nature of IP matter:
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-500 font-normal">
          Click the option that best describes your requirement to proceed.
        </p>
      </div>

      {/* 2-Column Card Grid (3 rows x 2 columns = 6 clean cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {MATTER_OPTIONS.map((item) => {
          const isSelected = selectedMatter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleCardClick(item.id)}
              className={`w-full text-left py-3.5 sm:py-4 px-4 sm:px-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                isSelected
                  ? 'bg-[#0C002B] text-white border-[#0C002B] shadow-md ring-2 ring-[#1952C7]/30'
                  : 'bg-white text-[#0C002B] border-slate-200 hover:border-[#1952C7] hover:bg-[#F0F5FF]/60 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                {item.icon ? (
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#1952C7] text-white'
                        : 'bg-slate-100 text-[#1952C7] group-hover:bg-[#1952C7] group-hover:text-white'
                    }`}
                  >
                    {item.icon}
                  </div>
                ) : (
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-[#1952C7]' : 'bg-[#1952C7]/60 group-hover:bg-[#1952C7]'
                    }`}
                  />
                )}
                <div className="min-w-0">
                  <div
                    className={`font-nunito text-xs sm:text-[13.5px] font-bold leading-snug ${
                      isSelected ? 'text-white' : 'text-[#0C002B] group-hover:text-[#1952C7]'
                    }`}
                  >
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div
                      className={`text-[11px] font-normal mt-0.5 leading-tight line-clamp-1 ${
                        isSelected ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-500'
                      }`}
                    >
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Indicator Circle with IPR Karo Blue Check */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ml-2 transition-all ${
                  isSelected
                    ? 'border-[#1952C7] bg-[#1952C7] text-white'
                    : 'border-slate-300 bg-white group-hover:border-[#1952C7]'
                }`}
              >
                {isSelected ? (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#1952C7]/40" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
