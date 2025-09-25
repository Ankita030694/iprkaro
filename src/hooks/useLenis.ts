import { useEffect, useCallback } from 'react'
import Lenis from 'lenis'

declare global {
  interface Window {
    lenis?: Lenis
  }
}

export function useLenis() {
  const scrollTo = useCallback((target: string | number, options?: any) => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.scrollTo(target, {
        offset: 0,
        duration: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      })
    }
  }, [])

  const scrollToTop = useCallback((options?: any) => {
    scrollTo(0, options)
  }, [scrollTo])

  const scrollToElement = useCallback((element: string, options?: any) => {
    scrollTo(element, options)
  }, [scrollTo])

  const start = useCallback(() => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.start()
    }
  }, [])

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.stop()
    }
  }, [])

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
    start,
    stop,
    lenis: typeof window !== 'undefined' ? window.lenis : null
  }
}
