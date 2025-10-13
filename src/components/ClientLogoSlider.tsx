'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
      : Array.from({ length: 8 }, (_, i) => `/clientlogos/${i + 1}.svg`);
    // Create duplicates for seamless infinite scroll
    setLogos([...logoPaths, ...logoPaths]);
  }, [useWhiteLogos]);


  const logoCount = useWhiteLogos ? 10 : 8;
  const logoWidth = 128;
  const gapSize = 24;
  const totalDistance = logoCount * (logoWidth + gapSize);

  return (
    <div className={`w-full overflow-hidden h-full ${className}`}>
      <div className="relative h-full flex items-center">
        {/* Horizontal Logo Slider */}
        <div className="w-full">
          <motion.div 
            className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
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
            style={{ width: 'max-content' }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                className="flex-shrink-0 h-12 sm:h-14 md:h-15 lg:h-16 w-24 sm:w-28 md:w-30 lg:w-32 flex items-center justify-center p-1.5"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                transition={{ duration: 0.3 }}
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                } as React.CSSProperties}
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${(index % logoCount) + 1}`}
                  width={256}
                  height={160}
                  quality={100}
                  className="object-contain filter-none w-auto h-auto max-w-full max-h-full"
                  style={{ 
                    filter: 'none',
                    backgroundColor: 'transparent',
                    imageRendering: 'auto',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased'
                  } as React.CSSProperties}
                  unoptimized={logo.endsWith('.svg')}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}