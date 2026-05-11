import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const scrollProgress = scrollTop / totalHeight
      setProgress(scrollProgress)

      const sections = ['hero', 'about', 'projects', 'skills', 'more']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && scrollTop >= el.offsetTop - 300) {
          setCurrentSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { progress, currentSection }
}