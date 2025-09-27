import { useEffect, useRef } from 'react';

/**
 * Hook to manage will-change properties dynamically for better cross-browser performance
 * Chrome optimizes will-change well, but other browsers can suffer performance degradation
 * if will-change is left on elements that aren't actively animating
 */
export function useWillChangeOptimization() {
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  const addElement = (element: HTMLElement, property = 'transform') => {
    if (element) {
      element.style.willChange = property;
      elementsRef.current.add(element);
    }
  };

  const removeElement = (element: HTMLElement) => {
    if (element) {
      element.style.willChange = 'auto';
      elementsRef.current.delete(element);
    }
  };

  const clearAll = () => {
    elementsRef.current.forEach(element => {
      if (element) {
        element.style.willChange = 'auto';
      }
    });
    elementsRef.current.clear();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearAll();
    };
  }, []);

  return {
    addElement,
    removeElement,
    clearAll
  };
}

/**
 * Hook to detect if we're on a Chromium-based browser
 * Used to conditionally apply performance optimizations that work better on Chrome
 */
export function useIsChromium() {
  const isChromium = typeof window !== 'undefined' && 
    /Chrome|Chromium|Edge/.test(navigator.userAgent) && 
    !/Firefox|Safari/.test(navigator.userAgent);
  
  return isChromium;
}

/**
 * Hook for cross-browser animation optimization
 * Provides different animation settings based on browser capabilities
 */
export function useAnimationOptimization() {
  const isChromium = useIsChromium();
  
  const getOptimizedSettings = () => ({
    // Reduce animation complexity on non-Chromium browsers
    duration: isChromium ? 0.8 : 0.6,
    ease: isChromium 
      ? [0.25, 0.1, 0.25, 1] // Complex easing for Chrome
      : [0.25, 0.46, 0.45, 0.94], // Standard easing for others
    // Reduce blur effects on non-Chromium browsers
    backdropBlur: isChromium ? 20 : 8,
    // Less aggressive GPU acceleration on non-Chromium
    useWillChange: isChromium,
  });

  return getOptimizedSettings();
}
