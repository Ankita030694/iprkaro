'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

// Extend Window interface for Lenis
declare global {
  interface Window {
    lenis?: Lenis
  }
}

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Enhanced smooth scroll configuration - Cross-browser optimized
    const lenis = new Lenis({
      duration: 1.0, // Reduced duration for better non-Chrome performance
      easing: (t: number) => {
        // Simpler easing function for better cross-browser performance
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      },
      smoothWheel: true, // Enable smooth wheel scrolling
      syncTouch: false, // Disable for better mobile performance
      touchMultiplier: 1.5, // Reduced for better cross-browser performance
      wheelMultiplier: 0.8, // Reduced sensitivity for better non-Chrome experience
      infinite: false,
      autoResize: true,
      orientation: 'vertical', // Correct property name for scroll direction
      gestureOrientation: 'vertical', // Handle gesture direction
      autoRaf: false, // We'll handle RAF manually for better control
    })

    lenisRef.current = lenis

    // Performance-optimized RAF loop with error handling
    let rafId: number
    let isDestroyed = false
    
    function raf(time: number) {
      if (isDestroyed) return
      
      try {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      } catch (error) {
        console.warn('Lenis RAF error:', error)
        // Try to recover by restarting the RAF loop
        if (!isDestroyed) {
          setTimeout(() => {
            rafId = requestAnimationFrame(raf)
          }, 16) // ~60fps fallback
        }
      }
    }

    rafId = requestAnimationFrame(raf)

    // Listen for Lenis events for debugging (optional)
    if (process.env.NODE_ENV === 'development') {
      lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        // Optional: Log scroll events in development
        // console.log({ scroll, limit, velocity, direction, progress })
      })
    }

    // Optimized resize handler with throttling
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!isDestroyed && lenisRef.current) {
          lenisRef.current.resize()
        }
      }, 200) // Increased throttle for better performance on slower browsers
    }

    // Use passive listeners for better performance
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize, { passive: true })
    }

    // Cleanup function
    return () => {
      isDestroyed = true
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      lenisRef.current = null
    }
  }, [])

  // Expose lenis instance globally for potential use in other components
  useEffect(() => {
    if (lenisRef.current && typeof window !== 'undefined') {
      window.lenis = lenisRef.current
    }
    return () => {
      if (typeof window !== 'undefined' && window.lenis) {
        delete window.lenis
      }
    }
  }, [])

  return null
}
