import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="font-body bg-ivory text-navy min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-accent text-ivory px-4 py-2 rounded"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
