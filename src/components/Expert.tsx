'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function Expert() {
  const [selectedService, setSelectedService] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(0);
  const [previousService, setPreviousService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentDirection, setCurrentDirection] = useState<string>('');
  const [nextDirection, setNextDirection] = useState<string>('');
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());

  // Memoize directions object to prevent recreation
  const directions = useMemo(() => ({
    'north': 'south',
    'south': 'north',
    'east': 'west',
    'west': 'east',
    'northeast': 'southwest',
    'southwest': 'northeast',
    'northwest': 'southeast',
    'southeast': 'northwest'
  }), []);

  // Memoize direction keys for better performance
  const directionKeys = useMemo(() => Object.keys(directions), [directions]);

  // Get random direction from available directions - memoized callback
  const getRandomDirection = useCallback(() => {
    return directionKeys[Math.floor(Math.random() * directionKeys.length)];
  }, [directionKeys]);

  // Memoize animation mapping for better performance
  const exitAnimations = useMemo(() => ({
    'north': 'animate-slide-to-north',
    'south': 'animate-slide-to-south',
    'east': 'animate-slide-to-east',
    'west': 'animate-slide-to-west',
    'northeast': 'animate-slide-to-northeast',
    'northwest': 'animate-slide-to-northwest',
    'southeast': 'animate-slide-to-southeast',
    'southwest': 'animate-slide-to-southwest'
  }), []);

  const enterAnimations = useMemo(() => ({
    'north': 'animate-slide-from-north',
    'south': 'animate-slide-from-south',
    'east': 'animate-slide-from-east',
    'west': 'animate-slide-from-west',
    'northeast': 'animate-slide-from-northeast',
    'northwest': 'animate-slide-from-northwest',
    'southeast': 'animate-slide-from-southeast',
    'southwest': 'animate-slide-from-southwest'
  }), []);

  // Get animation class for exiting image (where it goes out)
  const getExitAnimation = useCallback((direction: string) => {
    return exitAnimations[direction as keyof typeof exitAnimations] || 'animate-slide-to-west';
  }, [exitAnimations]);

  // Get animation class for entering image (comes from opposite direction)
  const getEnterAnimation = useCallback((direction: string) => {
    return enterAnimations[direction as keyof typeof enterAnimations] || 'animate-slide-from-west';
  }, [enterAnimations]);

  // Memoize services data to prevent recreation
  const services = useMemo(() => [
    {
      title: "Copyright Protection",
      backgroundImage: "/rs1.svg",
      items: [
        "Safeguards creative works & content",
        "Prevents unauthorized duplication", 
        "Gives full ownership rights",
        "Strengthens your artistic recognition"
      ]
    },
    {
      title: "Trademark Registration",
      backgroundImage: "/rs2.svg",
      items: [
        "Safeguards creative works & content",
        "Prevents unauthorized duplication",
        "Gives full ownership rights", 
        "Strengthens your artistic recognition"
      ]
    },
    {
      title: "Patent Services",
      backgroundImage: "/rs3.svg",
      items: [
        "Safeguards creative works & content",
        "Prevents unauthorized duplication",
        "Gives full ownership rights",
        "Strengthens your artistic recognition"
      ]
    }
  ], []);

  // Optimized image preloading for smooth transitions
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = services.map((service, index) => {
        return new Promise<void>((resolve) => {
          const img = document.createElement('img');
          img.onload = () => {
            setImagesLoaded(prev => new Set(prev).add(service.backgroundImage));
            resolve();
          };
          img.onerror = () => resolve(); // Continue even if image fails to load
          img.src = service.backgroundImage;
          // Add decode for better performance
          if (img.decode) {
            img.decode().catch(() => resolve());
          }
        });
      });
      
      await Promise.all(imagePromises);
    };

    // Use requestIdleCallback for non-blocking preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 0);
    }
  }, [services]);

  // Optimize dropdown click handler with useCallback
  const handleDropdownClick = useCallback((index: number) => {
    // Always handle dropdown toggle first
    setOpenDropdown(openDropdown === index ? -1 : index);
    
    // Prevent multiple rapid clicks during transition for image switching
    if (isTransitioning) return;
    
    // Only switch images if it's a different service
    if (index !== selectedService) {
      setPreviousService(selectedService);
      setIsTransitioning(true);
      
      // For first transition, get a random direction. For subsequent transitions, use a new random direction
      const exitDirection = getRandomDirection();
      const enterDirection = directions[exitDirection as keyof typeof directions];
      
      // Update directions
      setCurrentDirection(exitDirection);
      setNextDirection(enterDirection);
      
      // Start transition immediately
      setSelectedService(index);
      
      // Optimized transition timing with reduced duration for snappier feel
      const animationId = requestAnimationFrame(() => {
        setTimeout(() => {
          setIsTransitioning(false);
          // Set the enter direction as the new current direction for next transition
          setCurrentDirection(enterDirection);
        }, 600); // Reduced from 800ms to 600ms for snappier transitions
      });
      
      // Cleanup function
      return () => cancelAnimationFrame(animationId);
    }
  }, [isTransitioning, selectedService, getRandomDirection, directions, openDropdown]);

  return (
    <section className="w-full min-h-screen relative bg-[#0C002B] flex items-center justify-center overflow-hidden">
      {/* Mobile: Simple background with solid color, Desktop: Background Image with Random Directional Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden transform-gpu bg-[#0C002B] md:bg-transparent">
        {/* Desktop only: Optimized preload strategy - only current and next */}
        <div className="hidden md:block">
          {services.map((service, index) => {
            // Only render preload for current and next service to save memory
            const shouldPreload = index === selectedService || index === (selectedService + 1) % services.length;
            if (!shouldPreload) return null;
            
            return (
              <div key={`preload-${index}`} className="absolute inset-0 opacity-0 pointer-events-none transform-gpu">
                <Image 
                  src={service.backgroundImage}
                  alt={`${service.title} background`}
                  className="w-full h-full object-cover object-center"
                  width={1920}
                  height={1080}
                  priority={index === selectedService}
                  quality={75}
                  sizes="100vw"
                  loading={index === selectedService ? "eager" : "lazy"}
                  placeholder="empty"
                />
              </div>
            );
          })}
          
          {/* Show current image when not transitioning - with fade-in */}
          {!isTransitioning && (
            <div className="absolute inset-0 transform-gpu opacity-100 transition-opacity duration-300">
              <Image 
                src={services[selectedService].backgroundImage}
                alt={`${services[selectedService].title} background`}
                className="w-full h-full object-cover object-center"
                width={1920}
                height={1080}
                priority
                quality={80}
                sizes="100vw"
                placeholder="empty"
                loading="eager"
              />
            </div>
          )}
          
          {/* During transition: Previous image slides out with hardware acceleration */}
          {isTransitioning && (
            <div 
              className={`absolute inset-0 transform-gpu ${getExitAnimation(currentDirection)}`}
              style={{ zIndex: 1 }}
            >
              <Image 
                src={services[previousService].backgroundImage}
                alt={`${services[previousService].title} background`}
                className="w-full h-full object-cover object-center"
                width={1920}
                height={1080}
                quality={80}
                sizes="100vw"
                placeholder="empty"
                loading="eager"
              />
            </div>
          )}
          
          {/* During transition: New image slides in with hardware acceleration */}
          {isTransitioning && (
            <div 
              className={`absolute inset-0 transform-gpu ${getEnterAnimation(nextDirection)}`}
              style={{ zIndex: 2 }}
            >
              <Image 
                src={services[selectedService].backgroundImage}
                alt={`${services[selectedService].title} background`}
                className="w-full h-full object-cover object-center"
                width={1920}
                height={1080}
                quality={80}
                sizes="100vw"
                placeholder="empty"
                loading="eager"
              />
            </div>
          )}
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-8 py-8 -mt-20">
        {/* Centered Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white font-nunito text-[28px] md:text-[48px] font-medium leading-[32px] md:leading-[52px]">
            Our Expert IPR SOLUTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Dropdown Section */}
          <div className="space-y-8">

            {/* Explore Services Section */}
            <div className="space-y-6">
              <h3 className="text-white font-nunito text-[16px] md:text-[32px] font-semibold leading-[20px] md:leading-[36px]">
                Explore our Services
              </h3>

              {/* Service Dropdowns */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="overflow-hidden">
                    {/* Dropdown Header */}
                    <button
                      onClick={() => handleDropdownClick(index)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300 md:bg-transparent md:border-0 md:shadow-none bg-gradient-to-br from-[rgba(12,0,43,0.60)] via-[rgba(255,183,3,0.60)] to-[rgba(12,0,43,0.60)] bg-[rgba(0,0,0,0.20)] border border-transparent rounded-lg shadow-[0_0_20px_1px_rgba(255,255,255,0.49)_inset]"
                      style={{
                        background: 'linear-gradient(145deg, rgba(12, 0, 43, 0.60) 6.6%, rgba(255, 183, 3, 0.60) 120.24%), rgba(0, 0, 0, 0.20)'
                      }}
                    >
                      <span className="text-white font-nunito text-[16px] md:text-[24px] font-medium">
                        {service.title}
                      </span>
                      {/* Arrow Icon */}
                      <div className={`transform transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>

                    {/* Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${openDropdown === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 space-y-4">
                        {service.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-3">
                            {/* Tick Icon */}
                            <div className="w-5 h-5 flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-white/90 font-nunito text-[10px] md:text-[18px] font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Additional Content Space */}
         
        </div>
      </div>
    </section>
  );
}
