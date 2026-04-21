import ScoreGauge from './ScoreGauge';
import { AnalysisData, getHealthColor } from '@/lib/dashboard-utils';

interface MetricsSectionProps {
  analysisData: AnalysisData;
}

export default function MetricsSection({ analysisData }: MetricsSectionProps) {
  return (
    <div className="mb-10">
      <div className="hidden md:block text-left mb-5">
        <h1 className="text-[#0C002B] font-nunito text-xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1.5">
          Your Trademark Health Score for "{analysisData.trademarkName}" - Class {analysisData.classNumber}
        </h1>
        <p className="font-nunito text-lg md:text-2xl lg:text-3xl font-semibold" style={{ color: getHealthColor(analysisData.overallHealth) }}>
          {analysisData.overallHealth}
        </p>
      </div>

      <div className="hidden md:block text-right">
        <span className="text-red-500 font-nunito text-2xl font-bold">*</span>
      </div>

      <div className="block md:hidden text-center mb-5">
        <h1 className="text-[#0C002B] font-nunito text-xl font-bold mb-1.5">
          Register Today and get your Trademark in <span style={{ color: '#1952C7' }}>9 months</span>
        </h1>
      </div>

      <div
        className="hidden md:block w-full px-5 md:px-6 lg:px-8 py-6 md:py-8 lg:py-5 relative bg-white rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/70"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch">
          <div className="lg:col-span-3 flex flex-col">
            <div
              className="flex items-center justify-between px-5 py-3 mb-3 rounded-t-2xl bg-slate-50 border border-slate-200"
            >
              <h3 className="text-[#0C002B] font-nunito text-lg md:text-xl font-semibold">
                Your Trademark Health Score
              </h3>
              <span className="font-nunito text-lg md:text-xl font-semibold" style={{ color: getHealthColor(analysisData.overallHealth) }}>
                {analysisData.overallHealth}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 mt-2">
              <MetricCard
                title="Trademark Registrability"
                score={analysisData.registrabilityScore}
                reasoning={analysisData.registrabilityReasoning}
                assessment={analysisData.genericnessAssessment.registrability}
                gradientId="gaugeGradient1"
                glowFilterId="glow1"
                isReversed={false}
              />
              <MetricCard
                title="Similarity Rate"
                score={analysisData.similarityScore}
                reasoning={analysisData.similarityReasoning}
                assessment={analysisData.genericnessAssessment.similarity}
                gradientId="gaugeGradient2"
                glowFilterId="glow2"
                isReversed={true}
              />
              <MetricCard
                title="Class Probability"
                score={analysisData.classFitScore}
                reasoning={analysisData.classFitReasoning}
                assessment={analysisData.genericnessAssessment.classFit}
                gradientId="gaugeGradient3"
                glowFilterId="glow3"
                isReversed={false}
              />
            </div>
          </div>

          <KeyFactorsColumn keyFactors={analysisData.keyFactors} />
        </div>
      </div>

      <MobileMetricsSection analysisData={analysisData} />
    </div>
  );
}

function MetricCard({ 
  title, 
  score, 
  reasoning, 
  assessment, 
  gradientId, 
  glowFilterId, 
  isReversed 
}: {
  title: string;
  score: number;
  reasoning: string;
  assessment: string;
  gradientId: string;
  glowFilterId: string;
  isReversed: boolean;
}) {
  return (
    <div className="flex flex-col items-center h-full">
      <h4 className="text-[#0C002B] font-nunito text-base md:text-lg font-semibold mb-3">
        {title}
      </h4>
      
      <div className="relative mb-4" style={{ width: '160px', height: '80px' }}>
        <ScoreGauge 
          score={score} 
          gradientId={gradientId} 
          glowFilterId={glowFilterId}
          isReversed={isReversed}
        />
      </div>

      <div
        className="w-full p-3 flex-1 flex flex-col rounded-xl border border-slate-200 bg-white"
      >
        <div className="flex items-center justify-between mb-2">
          <h5 className="text-[#0C002B] font-nunito text-md font-semibold">
            Remarks
          </h5>
          <div className="transition-all duration-300">
            {(title === 'Similarity Rate' ? score > 50 : score < 50) ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 xl:w-4 xl:h-4">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            )}
          </div>
        </div>
        
        <div className="mb-2 flex items-start">
          <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-lg xl:text-lg">•</span>
          <p className="font-nunito text-sm leading-relaxed text-[#4B5563]">
            {reasoning}
          </p>
        </div>

        <div className="flex items-start">
          <span className="text-[#00D9FF] mr-2 mt-0.5 flex-shrink-0 text-lg xl:text-base">•</span>
          <p className="font-nunito text-sm leading-relaxed text-[#4B5563]">
            {assessment}
          </p>
        </div>
      </div>
    </div>
  );
}

function KeyFactorsColumn({ keyFactors }: { keyFactors: AnalysisData['keyFactors'] }) {
  const factors = [
    { label: 'Brand Strength', value: keyFactors.brandStrength, icon: 'brand' },
    { label: 'Legal Risk', value: keyFactors.legalRisk, icon: 'legal' },
    { label: 'Market Position', value: keyFactors.marketPosition, icon: 'market' },
    { label: 'Registration Speed', value: keyFactors.registrationSpeed, icon: 'speed' },
    { label: 'Protection Level', value: keyFactors.protectionLevel, icon: 'protection' },
  ];

  return (
    <div className="lg:col-span-1 flex flex-col">
      <div
        className="flex items-center justify-center px-5 py-3 mb-3 rounded-2xl bg-slate-50 border border-slate-200"
      >
        <h3 className="text-[#0C002B] font-nunito text-lg md:text-xl xl:text-lg font-semibold">
          Key Factors
        </h3>
      </div>
      
      <div className="flex flex-col flex-1 space-y-2.5">
        {factors.map((factor, index) => (
          <div
            key={index}
            className="p-2.5 flex items-center gap-2.5 flex-1 rounded-xl border border-slate-200 bg-white"
          >
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black xl:w-3 xl:h-3">
                {factor.icon === 'brand' && <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"></path>}
                {factor.icon === 'legal' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>}
                {factor.icon === 'market' && <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>}
                {factor.icon === 'speed' && (
                  <>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </>
                )}
                {factor.icon === 'protection' && (
                  <>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </>
                )}
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-[#0C002B] font-nunito text-sm font-semibold mb-0.5">
                {factor.label}
              </h4>
              <p className="font-nunito text-[12px] leading-snug text-[#4B5563]">
                {factor.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMetricsSection({ analysisData }: { analysisData: AnalysisData }) {
  return (
    <div className="block md:hidden space-y-6">
      <div className="space-y-3">
        <h4 className="text-[#0C002B] font-nunito text-base font-semibold text-center">
          Trademark Registrability
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: '112px', height: '56px' }}>
              <ScoreGauge 
                score={analysisData.registrabilityScore} 
                gradientId="mobileGaugeGradient1" 
                glowFilterId="mobileGlow1"
                size="mobile"
              />
            </div>
          </div>
          <AssessmentBox 
            reasoning={analysisData.registrabilityReasoning}
            assessment={analysisData.genericnessAssessment.registrability}
            score={analysisData.registrabilityScore}
            isReversed={false}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-[#0C002B] font-nunito text-base font-semibold text-center">
          Similarity Rate
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: '112px', height: '56px' }}>
              <ScoreGauge 
                score={analysisData.similarityScore} 
                gradientId="mobileGaugeGradient2" 
                glowFilterId="mobileGlow2"
                isReversed={true}
                size="mobile"
              />
            </div>
          </div>
          <AssessmentBox 
            reasoning={analysisData.similarityReasoning}
            assessment={analysisData.genericnessAssessment.similarity}
            score={analysisData.similarityScore}
            isReversed={true}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-[#0C002B] font-nunito text-base font-semibold text-center">
          Class Probability
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: '112px', height: '56px' }}>
              <ScoreGauge 
                score={analysisData.classFitScore} 
                gradientId="mobileGaugeGradient3" 
                glowFilterId="mobileGlow3"
                size="mobile"
              />
            </div>
          </div>
          <AssessmentBox 
            reasoning={analysisData.classFitReasoning}
            assessment={analysisData.genericnessAssessment.classFit}
            score={analysisData.classFitScore}
            isReversed={false}
          />
        </div>
      </div>

      <MobileKeyFactors keyFactors={analysisData.keyFactors} />
    </div>
  );
}

function AssessmentBox({ 
  reasoning, 
  assessment, 
  score, 
  isReversed 
}: { 
  reasoning: string; 
  assessment: string; 
  score: number;
  isReversed: boolean;
}) {
  const isGood = isReversed ? score <= 50 : score >= 50;
  
  return (
    <div className="p-2" style={{ borderRadius: '8px', border: '1.5px solid #e2e8f0', background: '#ffffff' }}>
      <div className="flex items-center justify-between mb-1.5">
        <h5 className="text-[#0C002B] font-nunito text-[10px] font-semibold">Assessment</h5>
        <div>
          {!isGood ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          )}
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-start">
          <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
          <p className="font-nunito text-[9px] leading-tight text-[#4B5563]">
            {reasoning}
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-[#00D9FF] mr-1 mt-0.5 flex-shrink-0 text-[10px]">•</span>
          <p className="font-nunito text-[9px] leading-tight text-[#4B5563]">
            {assessment}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileKeyFactors({ keyFactors }: { keyFactors: AnalysisData['keyFactors'] }) {
  const factors = [
    { label: 'Brand Strength', value: keyFactors.brandStrength },
    { label: 'Legal Risk', value: keyFactors.legalRisk },
    { label: 'Market Position', value: keyFactors.marketPosition },
    { label: 'Registration Speed', value: keyFactors.registrationSpeed },
    { label: 'Protection Level', value: keyFactors.protectionLevel },
  ];

  return (
    <div className="mb-10">
      <div
        className="w-full px-4 py-2.5 mb-3 rounded-lg border border-slate-200 bg-slate-50"
      >
        <h3 className="text-[#0C002B] font-nunito text-base font-semibold text-left">
          Key Factors
        </h3>
      </div>

      <div
        className="w-full px-4 py-5 relative bg-white rounded-[24px] border border-slate-200 shadow-lg shadow-slate-200/50"
      >
        <span className="absolute top-3 right-4 text-red-500 font-nunito text-lg font-bold">*</span>
        
        <div className="space-y-2">
          {factors.map((factor, index) => (
            <div key={index} className="flex items-start gap-2 p-2 rounded-lg border border-slate-100 bg-white shadow-sm">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="text-[#0C002B] font-nunito text-[10px] font-semibold mb-0.5">{factor.label}</h5>
                <p className="font-nunito text-[9px] leading-tight text-[#4B5563]">
                  {factor.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

