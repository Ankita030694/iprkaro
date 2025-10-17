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
      ? [1, 2, 3, 4, 6, 7, 8, 9].map(i => `/clientlogos/white${i}.png`) // Exclude white5 and white10
      : [1, 2, 7, 8, 9].map(i => `/clientlogos/${i}.png`); // Exclude 5.png and 10.png
    // Create multiple duplicates for seamless infinite scroll - enough to fill screen and beyond
    setLogos([...logoPaths, ...logoPaths, ...logoPaths, ...logoPaths]);
  }, [useWhiteLogos]);


  const logoCount = useWhiteLogos ? 8 : 4;
  const logoWidth = 128;
  const gapSize = 16; // Gap between logos
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
                duration: useWhiteLogos ? 30 : 20,
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
                ? [1, 2, 3, 4, 6, 7, 8, 9] 
                : [6, 7, 8, 9];
              const logoIndex = logoNumbers[index % logoCount];
              
              return (
                <motion.div
                  key={`${logo}-${index}`}
                  className="flex-shrink-0 h-16 w-32 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    marginRight: `${gapSize}px`, // Consistent gap between all logos
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
                    className="object-contain filter-none w-full h-full"
                    loading="eager"
                    decoding="sync"
                    style={{ 
                      filter: 'none',
                      backgroundColor: 'transparent',
                      imageRendering: '-webkit-optimize-contrast',
                      transform: 'translate3d(0, 0, 0)',
                      WebkitTransform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'subpixel-antialiased',
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