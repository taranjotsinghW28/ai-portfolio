import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Brain, Sparkles } from 'lucide-react'
import ChatInterface from '../components/ChatInterface'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title', { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 })
      gsap.fromTo('.hero-chat', { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.9 })
      gsap.fromTo('.hero-scroll', { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.5 })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center section-padding pt-20">
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-ai-accent/10 blur-2xl animate-float" />
      <div className="absolute top-48 right-20 w-32 h-32 rounded-full bg-ai-pink/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-ai-cyan/10 blur-2xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="text-center mb-8">
        <div className="hero-subtitle inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-gray-100 dark:border-white/10 border-gray-200 border mb-6">
          <Brain className="w-4 h-4 text-ai-cyan" />
          <span className="text-sm dark:text-gray-300 text-gray-600">Aspiring ML Engineer</span>
          <Sparkles className="w-4 h-4 text-ai-pink" />
        </div>

        <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4">
          <span className="dark:text-white text-gray-900">Hi, I'm </span>
          <span className="gradient-text">Taranjot Singh</span>
        </h1>

        <div className="hero-subtitle text-lg sm:text-xl dark:text-gray-400 text-gray-500 mb-2 h-8">
          <TypeAnimation
            sequence={[
              'I build AI/ML models with 89.8% F1-score', 2000,
              'I deploy ML apps with Streamlit & Flask', 2000,
              'I optimize systems by 30% with Python', 2000,
              'I create real-world AI solutions', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-ai-cyan"
          />
        </div>
      </div>

      <div className="hero-chat w-full max-w-3xl">
        <ChatInterface />
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 dark:text-gray-500 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  )
}