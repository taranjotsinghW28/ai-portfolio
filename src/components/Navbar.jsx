import { useState, useEffect } from 'react'
import { Moon, Sun, Calendar, Bot, Check } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Other', href: '#more' },
]

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'projects', 'skills', 'more']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const scrollToSection = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openGmail = () => {
    const to = 'taranjot10934@gmail.com'
    const subject = encodeURIComponent('Portfolio Contact - Let\'s Connect')
    const body = encodeURIComponent('Hi Taranjot,\n\nI saw your portfolio and would like to connect with you regarding...\n\nBest regards,')
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'dark:bg-ai-dark/80 bg-white/80 backdrop-blur-xl border-b dark:border-white/5 border-gray-200' 
        : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <Bot className="w-6 h-6 text-ai-cyan" />
            <span className="font-display font-bold text-lg hidden sm:block dark:text-white text-gray-900">Taranjot</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1 backdrop-blur-xl rounded-full px-2 py-1.5 border dark:bg-white/5 dark:border-white/10 bg-gray-100 border-gray-200">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'dark:bg-white/10 dark:text-white bg-ai-accent/10 text-ai-accent'
                    : 'dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5 text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border transition-all dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700"
            >
              {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            
            {/* Book a Call - Opens Gmail Compose */}
            <button
              onClick={openGmail}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-ai text-white text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-ai-accent/25"
            >
              <Calendar className="w-4 h-4" />
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}