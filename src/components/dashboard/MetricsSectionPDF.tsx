import { AnalysisData } from '@/lib/dashboard-utils';

interface MetricsSectionPDFProps {
  analysisData: AnalysisData;
  generatedDate?: string;
}

export default function MetricsSectionPDF({ 
  analysisData,
  generatedDate = new Date().toLocaleDateString('en-GB')
}: MetricsSectionPDFProps) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-[#26B430]'; // Green
    if (score >= 40) return 'text-[#B3B41B]'; // Yellow
    return 'text-[#C92D2D]'; // Red
  };

  const getHealthStatus = (health: string) => {
    const lowerHealth = health.toLowerCase();
    if (lowerHealth.includes('excellent') || lowerHealth.includes('good')) {
      return { text: health, color: 'text-[#26B430]' };
    }
    if (lowerHealth.includes('moderate') || lowerHealth.includes('fair')) {
      return { text: health, color: 'text-[#B3B41B]' };
    }
    return { text: health, color: 'text-[#FF0000]' };
  };

  const healthStatus = getHealthStatus(analysisData.overallHealth);

  return (
    <div className="w-full font-[Poppins]" style={{ padding: '8px', boxSizing: 'border-box' }}>
      {/* Header Section - Trademark Report */}
      <div className="w-full" style={{
        borderRadius: '25px',
        padding: '12px',
        paddingBottom: '12px',
        marginBottom: '8px',
        backgroundColor: 'white',
        boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 6px rgba(0, 0, 0, 0.20) inset',
        boxSizing: 'border-box'
      }}>
        <div className="flex items-center justify-end relative" style={{ boxSizing: 'border-box', minHeight: '100px' }}>
          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '140px', height: '100px', boxSizing: 'border-box' }}>
            <img
              src="/logo/iprlogoblack.svg"
              alt="IPR Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
          
          {/* Report Details */}
          <div className="text-right relative z-10" style={{ boxSizing: 'border-box' }}>
            <h1 className="text-black text-2xl font-medium" style={{ marginBottom: '8px', paddingBottom: '0px', boxSizing: 'border-box' }}>Trademark Report</h1>
            <div className="flex flex-col" style={{ boxSizing: 'border-box' }}>
              <p className="text-black text-lg font-medium" style={{ marginTop: '0px', paddingTop: '0px', marginBottom: '0px', boxSizing: 'border-box' }}>Generated at: {generatedDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Health Score Header */}
      <div className="w-full" style={{
        borderRadius: '15px',
        padding: '12px',
        paddingBottom: '12px',
        marginBottom: '8px',
        marginTop: '0px',
        paddingTop: '12px',
        backgroundColor: 'white',
        boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 6px rgba(0, 0, 0, 0.20) inset',
        boxSizing: 'border-box'
      }}>
        <div className="flex items-center justify-between" style={{ boxSizing: 'border-box' }}>
          <h2 className="text-black text-xl font-medium" style={{ boxSizing: 'border-box' }}>Your Trademark Health Score</h2>
          <span className={`text-xl font-medium ${healthStatus.color}`} style={{ boxSizing: 'border-box' }}>{healthStatus.text}</span>
        </div>
      </div>

      {/* Metric Cards */}
      <MetricCard
        title="Trademark Registrability"
        score={analysisData.registrabilityScore}
        scoreColor={getScoreColor(analysisData.registrabilityScore)}
        remarks={[
          analysisData.registrabilityReasoning,
          analysisData.genericnessAssessment.registrability
        ]}
      />

      <MetricCard
        title="Similarity Analysis"
        score={analysisData.similarityScore}
        scoreColor={getScoreColor(100 - analysisData.similarityScore)}
        remarks={[
          analysisData.similarityReasoning,
          analysisData.genericnessAssessment.similarity
        ]}
      />

      <MetricCard
        title="Class Probability"
        score={analysisData.classFitScore}
        scoreColor={getScoreColor(analysisData.classFitScore)}
        remarks={[
          analysisData.classFitReasoning,
          analysisData.genericnessAssessment.classFit
        ]}
      />
    </div>
  );
}

function MetricCard({
  title,
  score,
  scoreColor,
  remarks
}: {
  title: string;
  score: number;
  scoreColor: string;
  remarks: string[];
}) {
  return (
    <div className="w-full" style={{
      borderRadius: '25px',
      padding: '14px',
      paddingBottom: '14px',
      marginBottom: '8px',
      marginTop: '0px',
      paddingTop: '14px',
      backgroundColor: 'white',
      boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 6px rgba(0, 0, 0, 0.20) inset',
      boxSizing: 'border-box'
    }}>
      <div className="flex items-center" style={{ boxSizing: 'border-box', minHeight: '120px' }}>
        {/* Left Section - Title and Score */}
        <div className="flex flex-col items-center justify-center" style={{ width: '200px', paddingRight: '15px', boxSizing: 'border-box' }}>
          <h3 className="text-black text-lg font-medium" style={{ marginBottom: '12px', paddingBottom: '0px', boxSizing: 'border-box', textAlign: 'center' }}>{title}</h3>
          <div className="text-center" style={{ boxSizing: 'border-box' }}>
            <span className={`text-6xl font-medium ${scoreColor}`} style={{ lineHeight: '60px', boxSizing: 'border-box' }}>{score}</span>
            <span className="text-black text-6xl font-medium" style={{ lineHeight: '60px', boxSizing: 'border-box' }}>/100</span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div style={{ 
          width: '3px', 
          height: '100%',
          minHeight: '120px',
          backgroundColor: 'rgba(0, 0, 0, 0.86)',
          margin: '0 15px',
          boxSizing: 'border-box',
          alignSelf: 'stretch'
        }}></div>

        {/* Right Section - Remarks */}
        <div className="flex-1" style={{ paddingLeft: '0px', boxSizing: 'border-box' }}>
          <h4 className="text-black text-lg font-medium" style={{ marginBottom: '6px', paddingBottom: '0px', boxSizing: 'border-box' }}>Remarks</h4>
          <div className="flex flex-col" style={{ boxSizing: 'border-box' }}>
            {remarks.map((remark, index) => (
              <p 
                key={index} 
                className="text-black text-sm font-normal" 
                style={{ 
                  lineHeight: '16px', 
                  marginBottom: index < remarks.length - 1 ? '6px' : '0px',
                  paddingBottom: index < remarks.length - 1 ? '0px' : '0px',
                  marginTop: '0px',
                  paddingTop: '0px',
                  boxSizing: 'border-box'
                }}
              >
                {remark}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
