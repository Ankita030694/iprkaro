export interface AnalysisData {
  trademarkName: string;
  classNumber: string;
  overallHealth: string;
  registrabilityScore: number;
  registrabilityReasoning: string;
  similarityScore: number;
  similarityReasoning: string;
  classFitScore: number;
  classFitReasoning: string;
  genericnessAssessment: {
    registrability: string;
    similarity: string;
    classFit: string;
  };
  keyFactors: {
    brandStrength: string;
    legalRisk: string;
    marketPosition: string;
    registrationSpeed: string;
    protectionLevel: string;
  };
  alternativeClasses: string[];
  overallRecommendation: {
    status: string;
    message: string;
  };
}

export function getFilingDate(): string {
  const today = new Date();
  return today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function getEstimatedDate(): string {
  const today = new Date();
  const estimatedDate = new Date(today);
  estimatedDate.setMonth(estimatedDate.getMonth() + 9);
  return estimatedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function calculateDashOffset(score: number): number {
  return 251.2 * (1 - score / 100);
}

export function getHealthColor(health: string): string {
  switch (health.toLowerCase()) {
    case 'excellent': return '#4ADE80';
    case 'good': return '#10B981';
    case 'fair': return '#F59E0B';
    case 'poor': return '#EF4444';
    default: return '#4ADE80';
  }
}




