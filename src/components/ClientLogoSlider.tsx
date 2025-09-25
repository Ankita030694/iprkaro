'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

interface ClientLogoSliderProps {
  className?: string;
}

interface LogoSlot {
  id: number;
  currentLogo: string;
  nextFlipTime: number;
}

export default function ClientLogoSlider({ className = '' }: ClientLogoSliderProps) {
  const [allLogos, setAllLogos] = useState<string[]>([]);
  const [logoSlots, setLogoSlots] = useState<LogoSlot[]>([]);
  const [isFlipping, setIsFlipping] = useState<boolean[]>([]);

  // Initialize logos and slots
  useEffect(() => {
    const logoPaths = Array.from({ length: 8 }, (_, i) => `/clientlogos/${i + 1}.svg`);
    setAllLogos(logoPaths);
    
    // Initialize 6 slots with random logos and random flip times
    const initialSlots = Array.from({ length: 6 }, (_, index) => ({
      id: index,
      currentLogo: logoPaths[Math.floor(Math.random() * logoPaths.length)],
      nextFlipTime: Date.now() + Math.random() * 3000 + 2000 // Random delay between 2-5 seconds
    }));
    
    setLogoSlots(initialSlots);
    setIsFlipping(new Array(6).fill(false));
  }, []);

  // Random logo selection that ensures variety
  const getRandomLogo = useCallback((currentLogo: string, availableLogos: string[]) => {
    const otherLogos = availableLogos.filter(logo => logo !== currentLogo);
    return otherLogos[Math.floor(Math.random() * otherLogos.length)];
  }, []);

  // Animation interval for checking flip times
  useEffect(() => {
    if (allLogos.length === 0) return;

    const interval = setInterval(() => {
      const currentTime = Date.now();
      
      setLogoSlots(prevSlots => 
        prevSlots.map((slot, index) => {
          if (currentTime >= slot.nextFlipTime && !isFlipping[index]) {
            // Trigger flip animation
            setIsFlipping(prev => {
              const newFlipping = [...prev];
              newFlipping[index] = true;
              return newFlipping;
            });

            // Schedule logo change immediately to start the slide animation
            setTimeout(() => {
              setLogoSlots(currentSlots => 
                currentSlots.map((s, i) => 
                  i === index 
                    ? {
                        ...s,
                        currentLogo: getRandomLogo(s.currentLogo, allLogos),
                        nextFlipTime: currentTime + Math.random() * 4000 + 3000 // 3-7 seconds
                      }
                    : s
                )
              );
            }, 50); // Small delay to ensure smooth transition
            
            // End animation after slide completes
            setTimeout(() => {
              setIsFlipping(prev => {
                const newFlipping = [...prev];
                newFlipping[index] = false;
                return newFlipping;
              });
            }, 800); // Match slide duration
          }
          return slot;
        })
      );
    }, 100); // Check every 100ms for smooth timing

    return () => clearInterval(interval);
  }, [allLogos, isFlipping, getRandomLogo]);


  return (
    <div className={`w-full overflow-hidden pt-15 ${className}`}>
      <div className="relative">
        {/* Logo Grid Container */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 w-full px-4 sm:px-6 lg:px-8">
            {logoSlots.map((slot, index) => (
              <motion.div
                key={slot.id}
                className="w-full h-32 sm:h-36 lg:h-40 flex items-center justify-center p-4 sm:p-6 lg:p-8"
                
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: '0 15px 40px rgba(255, 180, 0, 0.25)',
                  borderColor: 'var(--color-yellow)',
                  y: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slot.currentLogo}
                      initial={{ y: 150, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ 
                        y: -150, 
                        opacity: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1] // more pronounced ease out
                        }
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.1, 0.9, 0.2, 1] // more pronounced ease in
                      }}
                      className="w-full h-full flex items-center justify-center absolute inset-0"
                    >
                      <Image
                        src={slot.currentLogo}
                        alt={`Client Logo ${index + 1}`}
                        width={200}
                        height={120}
                        className="object-contain filter-none w-auto h-auto max-w-full max-h-full"
                        style={{ 
                          filter: 'none',
                          backgroundColor: 'transparent'
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}