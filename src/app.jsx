import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Starfield from './components/Starfield'
import ScrollRobot from './components/ScrollRobot'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import More from './sections/More'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden dark:bg-ai-dark bg-slate-50">
      {/* Background Starfield - behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>
      
      {/* Navigation - above starfield */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      {/* Floating Robot - above everything */}
      <ScrollRobot />
      
      {/* Main Content - MUST be above starfield */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <More />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App