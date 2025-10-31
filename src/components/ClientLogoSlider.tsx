'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ClientLogoSliderProps {
  className?: string;
  useWhiteLogos?: boolean; // New prop to use white PNG logos
}

export default function ClientLogoSlider({ className = '', useWhiteLogos = false }: ClientLogoSliderProps) {
  const [logos, setLogos] = useState<string[]>([]);

  // Initialize logos
  useEffect(() => {
    const logoPaths = useWhiteLogos 
      ? [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => `/clientlogos/white${i}.png`)
      : [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => `/clientlogos/${i}.png`);
    // Create multiple duplicates for seamless infinite scroll - enough to fill screen and beyond
    setLogos([...logoPaths, ...logoPaths, ...logoPaths, ...logoPaths]);
  }, [useWhiteLogos]);


  const logoCount = useWhiteLogos ? 12 : 14;
  const logoWidth = 80; // Reduced from 128 to 80
  const gapSize = 30; // Gap between logos
  // Calculate the exact distance to move one complete set of logos
  // Subtract one gap to account for seamless looping (last logo's margin connects to first logo)
  const totalDistance = logoCount * (logoWidth + gapSize) - gapSize;

  return (
    <div className={`w-full overflow-hidden h-full ${className}`}>
      <div className="relative h-full flex items-center">
        {/* Horizontal Logo Slider */}
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex items-center"
            animate={{
              x: [0, -totalDistance]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: useWhiteLogos ? 50 : 40,
                ease: "linear",
              },
            }}
            style={{ 
              width: 'max-content',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              perspective: 1000,
              WebkitPerspective: 1000
            } as React.CSSProperties}
          >
            {logos.map((logo, index) => {
              // Calculate the actual logo number for alt text
              const logoNumbers = useWhiteLogos 
                ? [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                : [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
              const logoIndex = logoNumbers[index % logoCount];
              
              return (
                <motion.div
                  key={`${logo}-${index}`}
                  className="flex-shrink-0 h-10 w-20 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    marginRight: `${gapSize}px`,
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    perspective: 1000,
                    WebkitPerspective: 1000
                  } as React.CSSProperties}
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${logoIndex}`}
                    className="w-full h-full object-contain filter-none"
                    loading="eager"
                    decoding="sync"
                    style={{ 
                      filter: 'none',
                      backgroundColor: 'transparent',
                      imageRendering: 'crisp-edges',
                      transform: 'translate3d(0, 0, 0)',
                      WebkitTransform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                      perspective: 1000,
                      WebkitPerspective: 1000
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}