import { useEffect, useRef, useState } from 'react'
import { Bot, Brain, Zap, Linkedin, Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const robotMessages = {
  hero: "👋 Hi! I'm Taranjot's AI assistant. Scroll down to explore!",
  about: "🧠 Did you know? Taranjot achieved 89.8% F1-score on his LoanRisk AI model!",
  projects: "🚀 Check out these 4 live ML projects - all deployed on Streamlit!",
  skills: "⚡ Python, scikit-learn, XGBoost, Flask... He's got the full AI stack!",
  more: "📧 Want to collaborate? Click below to connect on LinkedIn or email!"
}

export default function ScrollRobot() {
  const robotRef = useRef(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [currentMsg, setCurrentMsg] = useState(robotMessages.hero)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const sections = ['hero', 'about', 'projects', 'skills', 'more']
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentMsg(robotMessages[section]),
        onEnterBack: () => setCurrentMsg(robotMessages[section]),
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  useEffect(() => {
    if (robotRef.current && isVisible) {
      gsap.to(robotRef.current, {
        y: Math.sin(Date.now() * 0.002) * 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Bubble */}
      {chatOpen && (
        <div className="glass-card p-4 max-w-xs mb-2">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-ai flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-200 leading-relaxed">{currentMsg}</p>
              <div className="flex gap-2 mt-3">
                <a
                  href="https://www.linkedin.com/in/taranjot-singh-aiml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-ai-cyan hover:text-ai-accent transition-colors"
                >
                  <Linkedin className="w-3 h-3" />
                  LinkedIn →
                </a>
                <a
                  href="mailto:taranjot10934@gmail.com"
                  className="flex items-center gap-1 text-xs text-ai-cyan hover:text-ai-accent transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  Email →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Robot Button */}
      <button
        ref={robotRef}
        onClick={() => setChatOpen(!chatOpen)}
        className="group relative w-14 h-14 rounded-full bg-gradient-ai flex items-center justify-center shadow-lg hover:shadow-ai-accent/50 transition-all duration-300 hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-ai animate-pulse-slow opacity-50" />
        <Bot className="w-7 h-7 text-white relative z-10" />
        
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-ai-green rounded-full border-2 border-ai-dark flex items-center justify-center">
          <Zap className="w-2.5 h-2.5 text-ai-dark" />
        </div>

        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Ask my AI bot!
        </span>
      </button>
    </div>
  )
}