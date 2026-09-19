import { useCallback } from 'react'

export function useLenis() {
  const getLenis = () => {
    if (typeof window !== 'undefined') {
      return (window as any).lenisInstance || null
    }
    return null
  }

  const scrollTo = useCallback((target: string | number, options?: any) => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
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
    const lenis = getLenis()
    if (lenis) {
      lenis.start()
    }
  }, [])

  const stop = useCallback(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.stop()
    }
  }, [])

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
    start,
    stop,
    lenis: typeof window !== 'undefined' ? getLenis() : null,
  }
}
