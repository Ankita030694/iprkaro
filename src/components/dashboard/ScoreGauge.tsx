import { calculateDashOffset } from '@/lib/dashboard-utils';

interface ScoreGaugeProps {
  score: number;
  gradientId: string;
  glowFilterId: string;
  isReversed?: boolean;
  size?: 'desktop' | 'mobile';
}

export default function ScoreGauge({ 
  score, 
  gradientId, 
  glowFilterId, 
  isReversed = false,
  size = 'desktop'
}: ScoreGaugeProps) {
  const textSize = size === 'mobile' ? 'text-[24px]' : 'text-[32px] xl:text-[26px]';
  const containerStyle = size === 'mobile' 
    ? { width: '112px', height: '56px' }
    : { width: '160px', height: '80px' };

  return (
    <div className="relative" style={containerStyle}>
      <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
        <circle cx="100" cy="90" r={size === 'mobile' ? 85 : 90} fill="none" stroke="rgba(255, 183, 3, 0.1)" strokeWidth="2" />
        <path
          d="M 20 90 A 80 80 0 0 1 180 90"
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {isReversed ? (
              <>
                <stop offset="10%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </>
            )}
          </linearGradient>
          <filter id={glowFilterId}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 20 90 A 80 80 0 0 1 180 90"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="251.2"
          strokeDashoffset={calculateDashOffset(score)}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out', filter: `url(#${glowFilterId})` }}
        />
        <text 
          x="100" 
          y="78" 
          textAnchor="middle" 
          fill="white" 
          className={textSize}
          fontWeight="bold" 
          style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
        >
          {score}
        </text>
      </svg>
    </div>
  );
}

