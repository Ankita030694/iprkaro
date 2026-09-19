import React from 'react';

interface AILogoProps {
  className?: string;
  size?: number;
}

export default function AILogo({ className = '', size = 60 }: AILogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* AI Brain/Neural Network Icon */}
      <div className="relative">
        {/* Main brain shape */}
        <div 
          className="relative rounded-full border-2 flex items-center justify-center"
          style={{
            width: size,
            height: size,
            borderColor: 'var(--color-primary-green)',
            backgroundColor: 'rgba(6, 154, 129, 0.1)'
          }}
        >
          {/* Neural network nodes */}
          <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-[var(--color-primary-green)]"></div>
          <div className="absolute top-4 right-3 w-2 h-2 rounded-full bg-[var(--color-primary-yellow)]"></div>
          <div className="absolute bottom-3 left-2 w-2 h-2 rounded-full bg-[var(--color-light-green)]"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[var(--color-light-yellow)]"></div>
          
          {/* Center AI symbol */}
          <div className="text-[var(--color-primary-green)] font-bold text-lg">AI</div>
        </div>
        
        {/* Connection lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg 
            width={size} 
            height={size} 
            className="absolute top-0 left-0"
            style={{ opacity: 0.3 }}
          >
            <line 
              x1={size * 0.2} 
              y1={size * 0.2} 
              x2={size * 0.8} 
              y2={size * 0.3} 
              stroke="var(--color-primary-green)" 
              strokeWidth="1"
            />
            <line 
              x1={size * 0.3} 
              y1={size * 0.7} 
              x2={size * 0.7} 
              y2={size * 0.8} 
              stroke="var(--color-primary-yellow)" 
              strokeWidth="1"
            />
            <line 
              x1={size * 0.1} 
              y1={size * 0.5} 
              x2={size * 0.9} 
              y2={size * 0.5} 
              stroke="var(--color-light-green)" 
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
