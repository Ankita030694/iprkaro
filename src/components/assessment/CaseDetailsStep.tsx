'use client';

import React from 'react';

export interface StageOption {
  id: string;
  label: string;
}

const MATTER_STAGES: { [key: string]: { prompt: string; options: StageOption[] } } = {
  'trademark-registration': {
    prompt: 'Select current status of your brand / mark:',
    options: [
      { id: 'fresh-filing', label: 'New Brand / Ready to Apply (Fresh Filing)' },
      { id: 'prior-use', label: 'Already in Market / Using Brand (Prior Use)' },
      { id: 'multi-class', label: 'Multiple Classes / Expanding Product Line' },
      { id: 'urgent-filing', label: 'Urgent / Need Priority 24-Hour E-Filing' },
    ],
  },
  'trademark-objection': {
    prompt: 'Select examination report / objection status:',
    options: [
      { id: 'sec-9-11', label: 'Received Examination Report (Section 9 / 11)' },
      { id: 'deadline-close', label: 'Objection Deadline Approaching (< 30 Days)' },
      { id: 'hearing-rep', label: 'Need Formal Hearing Representation' },
      { id: 'second-opinion', label: 'Previous Attorney Inactive / Want Expert Review' },
    ],
  },
  'trademark-opposition': {
    prompt: 'Select opposition stage / requirement:',
    options: [
      { id: 'defend-tm-o', label: 'Received Notice of Opposition (Defend Form TM-O)' },
      { id: 'file-opposition', label: 'Want to Oppose a Conflicting Trademark' },
      { id: 'hearing-stage', label: 'Hearing Scheduled before Trademark Registrar' },
      { id: 'evidence-drafting', label: 'Need Evidence & Counter-Statement Drafting' },
    ],
  },
  'trademark-infringement': {
    prompt: 'Select nature of infringement / dispute:',
    options: [
      { id: 'competitor-copying', label: 'Competitor Copying My Brand Name / Logo' },
      { id: 'marketplace-takedown', label: 'Amazon / Flipkart / Online Marketplace Takedown' },
      { id: 'legal-notice', label: 'Received / Want to Send Cease & Desist Notice' },
      { id: 'court-injunction', label: 'Need Urgent High Court Injunction & Legal Action' },
    ],
  },
  'trademark-renewal': {
    prompt: 'Select trademark renewal timeline:',
    options: [
      { id: 'regular-renewal', label: 'Renewal Due (Within 10-Year Validity Window)' },
      { id: 'grace-period', label: 'Expired Recently (Within 6-Month Grace Period)' },
      { id: 'restoration-tm-r', label: 'Expired > 6 Months (Need Restoration Form TM-R)' },
      { id: 'change-details', label: 'Change of Address / Ownership (Form TM-P)' },
    ],
  },
  'trademark-search': {
    prompt: 'Select trademark clearance search requirement:',
    options: [
      { id: 'ai-conflict-check', label: 'Pre-Filing AI Conflict & Phonetic Search' },
      { id: 'multi-class-clearance', label: 'Multi-Class Brand Clearance Report' },
      { id: 'global-search', label: 'Global / International Trademark Clearance' },
      { id: 'company-domain-check', label: 'Company Name & Domain Availability Check' },
    ],
  },
};

export interface CaseDetailsData {
  stageId?: string;
  stageLabel?: string;
  brandName?: string;
  companyName?: string;
  applicationNumber?: string;
  hasSearchedBefore?: string;
  proposedClass?: string;
  examinationReportReceived?: string;
  objectionStatus?: string;
  oppositionStage?: string;
  opposingParty?: string;
  isRegistered?: string;
  workCategory?: string;
  isWorkPublished?: string;
  developmentStage?: string;
  issueDescription?: string;
}

interface CaseDetailsStepProps {
  selectedMatter: string;
  caseDetails: CaseDetailsData;
  onUpdateCaseDetails: (details: Partial<CaseDetailsData>) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function CaseDetailsStep({
  selectedMatter,
  caseDetails,
  onUpdateCaseDetails,
  onBack,
  onNext,
}: CaseDetailsStepProps) {
  const stageConfig =
    MATTER_STAGES[selectedMatter] || MATTER_STAGES['trademark-registration'];

  const handleOptionClick = (option: StageOption) => {
    onUpdateCaseDetails({
      stageId: option.id,
      stageLabel: option.label,
    });
    // Auto-advance to Step 3 (Contact Details) immediately
    setTimeout(() => {
      onNext();
    }, 150);
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Header Row: Prompt on Left, Back button on Right */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#0C002B] font-nunito">
            {stageConfig.prompt}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5">
            Select the option that best matches your situation to continue.
          </p>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1952C7] hover:text-[#0C002B] bg-[#EAF2FC] hover:bg-[#DCEBFE] py-1.5 px-3 rounded-lg transition-colors cursor-pointer flex-shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back</span>
        </button>
      </div>

      {/* 4 Selectable Options Grid (2x2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {stageConfig.options.map((opt) => {
          const isSelected = caseDetails.stageId === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleOptionClick(opt)}
              className={`w-full text-left py-4 sm:py-4.5 px-4 sm:px-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                isSelected
                  ? 'bg-[#0C002B] text-white border-[#0C002B] shadow-md ring-2 ring-[#1952C7]/30'
                  : 'bg-white text-[#0C002B] border-slate-200 hover:border-[#1952C7] hover:bg-[#F0F5FF]/60 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                    isSelected ? 'bg-[#1952C7]' : 'bg-[#1952C7]/60 group-hover:bg-[#1952C7]'
                  }`}
                />
                <div
                  className={`font-nunito text-xs sm:text-[13.5px] font-bold leading-snug ${
                    isSelected ? 'text-white' : 'text-[#0C002B] group-hover:text-[#1952C7]'
                  }`}
                >
                  {opt.label}
                </div>
              </div>

              {/* Indicator Circle with Blue Check when selected */}
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
