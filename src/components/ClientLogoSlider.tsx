'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ClientLogoSliderProps {
  className?: string;
}

export default function ClientLogoSlider({ className = '' }: ClientLogoSliderProps) {
  const [logos, setLogos] = useState<string[]>([]);

  // Initialize logos
  useEffect(() => {
    const logoPaths = Array.from({ length: 8 }, (_, i) => `/clientlogos/${i + 1}.svg`);
    // Create duplicates for seamless infinite scroll
    setLogos([...logoPaths, ...logoPaths]);
  }, []);


  return (
    <div className={`w-full overflow-hidden pt-15 ${className}`}>
      <div className="relative">
        {/* Horizontal Logo Slider */}
        <div className="w-full">
          <motion.div 
            className="flex items-center gap-8 sm:gap-12 lg:gap-16"
            animate={{
              x: [0, -1664] // 8 logos * (160px + 48px gap) = 1664px
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ width: 'max-content' }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                className="flex-shrink-0 h-20 sm:h-24 lg:h-28 w-32 sm:w-40 lg:w-48 flex items-center justify-center p-2 sm:p-3 lg:p-4"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${(index % 8) + 1}`}
                  width={200}
                  height={120}
                  className="object-contain filter-none w-auto h-auto max-w-full max-h-full"
                  style={{ 
                    filter: 'none',
                    backgroundColor: 'transparent'
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