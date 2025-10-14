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
      ? Array.from({ length: 10 }, (_, i) => `/clientlogos/white${i + 1}.png`)
      : Array.from({ length: 10 }, (_, i) => `/clientlogos/${i + 1}.png`);
    // Create duplicates for seamless infinite scroll
    setLogos([...logoPaths, ...logoPaths]);
  }, [useWhiteLogos]);


  const logoCount = useWhiteLogos ? 10 : 8;
  const logoWidth = 128;
  const gapSize = 32; // Consistent gap size
  const totalDistance = logoCount * (logoWidth + gapSize);

  return (
    <div className={`w-full overflow-visible h-full ${className}`}>
      <div className="relative h-full flex items-center">
        {/* Horizontal Logo Slider */}
        <div className="w-full">
          <motion.div 
            className="flex items-center gap-8"
            animate={{
              x: [0, -totalDistance] // Dynamic based on logo count
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: useWhiteLogos ? 30 : 25, // Slower for more logos
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
            {logos.map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                className="flex-shrink-0 h-70 sm:h-18 md:h-20 lg:h-20 w-32 sm:w-36 md:w-40 lg:w-40 flex items-center justify-center -mt-13 md:-mt-0 lg:-mt-0"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                transition={{ duration: 0.3 }}
                style={{
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
                  alt={`Client Logo ${(index % logoCount) + 1}`}
                  className="object-contain filter-none w-auto h-auto max-w-full max-h-full"
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
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}