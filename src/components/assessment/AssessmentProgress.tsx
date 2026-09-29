import React from 'react';

interface AssessmentProgressProps {
  currentStep: number; // 1, 2, 3
  totalSteps?: number;
}

const STEP_LABELS: { [key: number]: string } = {
  1: '01. MATTER TYPE',
  2: '02. CASE DETAILS',
  3: '03. CONTACT DETAILS',
};

export default function AssessmentProgress({ currentStep, totalSteps = 3 }: AssessmentProgressProps) {
  const stepLabel = STEP_LABELS[currentStep] || `0${currentStep}. STEP`;
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full space-y-2 mb-5">
      <div className="flex items-center justify-between text-xs font-bold tracking-wider">
        <span className="text-[#1952C7] uppercase tracking-wide flex items-center gap-1.5 font-nunito font-extrabold">
          <span className="w-2 h-2 rounded-full bg-[#1952C7] inline-block" />
          {stepLabel}
        </span>
        <span className="text-slate-400 uppercase text-[11px] font-semibold tracking-wider">
          STEP {currentStep} OF {totalSteps}
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#10B981] via-[#0066FF] to-[#1952C7] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
