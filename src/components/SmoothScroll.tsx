'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      },
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.8,
      infinite: false,
      autoResize: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      autoRaf: false,
    })

    lenisRef.current = lenis

    let rafId: number
    let isDestroyed = false

    const raf = (time: number) => {
      if (isDestroyed) return
      try {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      } catch (error) {
        console.warn('Lenis RAF error:', error)
        if (!isDestroyed) {
          setTimeout(() => {
            rafId = requestAnimationFrame(raf)
          }, 16)
        }
      }
    }

    rafId = requestAnimationFrame(raf)

    if (typeof window !== 'undefined') {
      (window as any).lenisInstance = lenis
    }

    return () => {
      isDestroyed = true
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      lenisRef.current = null
      if (typeof window !== 'undefined') {
        delete (window as any).lenisInstance
      }
    }
  }, [])

  return null
}
