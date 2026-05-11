import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, Trophy, Link2, ExternalLink, Mail, Phone, Github, Linkedin, X, Award, Users, Star, Code2, Brain, ChevronDown, ChevronUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    icon: Trophy,
    title: 'HackForge 1.0',
    desc: 'Participated in HackForge 1.0 hackathon',
    color: 'text-ai-orange',
    bgColor: 'bg-ai-orange/10'
  },
  {
    icon: Users,
    title: 'HackForge 2.0',
    desc: 'Team Leader at HackForge 2.0 hackathon',
    color: 'text-ai-accent',
    bgColor: 'bg-ai-accent/10'
  },
  {
    icon: Code2,
    title: 'Geeta University Hackathon',
    desc: 'Internal hackathon participant',
    color: 'text-ai-cyan',
    bgColor: 'bg-ai-cyan/10'
  },
  {
    icon: Award,
    title: 'NPTEL Design Thinking',
    desc: 'Elite grade certification',
    color: 'text-ai-green',
    bgColor: 'bg-ai-green/10'
  },
  {
    icon: Brain,
    title: 'Kaggle Intro to ML',
    desc: 'Completed certification course',
    color: 'text-ai-pink',
    bgColor: 'bg-ai-pink/10'
  },
  {
    icon: Star,
    title: '89.8% F1-Score',
    desc: 'Highest model performance on LoanRisk AI',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10'
  }
]

export default function More() {
  const sectionRef = useRef(null)
  const [activePanel, setActivePanel] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.explore-card').forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.6,
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel)
  }

  const openGmail = () => {
    const to = 'taranjot10934@gmail.com'
    const subject = encodeURIComponent('Portfolio Contact - Let\'s Connect')
    const body = encodeURIComponent('Hi Taranjot,\n\nI saw your portfolio and would like to connect with you regarding...\n\nBest regards,')
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  return (
    <section id="more" ref={sectionRef} className="relative py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ai-cyan text-sm font-medium uppercase tracking-widest mb-3">Discover</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="dark:text-white text-gray-900">More to </span>
            <span className="gradient-text">Explore</span>
          </h2>
          <p className="dark:text-gray-400 text-gray-500 max-w-xl mx-auto">
            Check out these additional resources and connect with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Resume Card */}
          <button
            onClick={openGmail}
            className="explore-card glass-card glass-card-hover p-8 text-center group border border-ai-accent/30 w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-ai-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-ai-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-ai-accent">
              Resume
            </h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-6">
              Download my full resume with detailed experience, projects, and certifications.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ai-accent group-hover:gap-3 transition-all">
              Email Me
              <ExternalLink className="w-4 h-4" />
            </span>
          </button>

          {/* Achievements Card */}
          <button
            onClick={() => togglePanel('achievements')}
            className="explore-card glass-card glass-card-hover p-8 text-center group border border-ai-orange/30 w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-ai-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-8 h-8 text-ai-orange" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-ai-orange">
              Achievements
            </h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-6">
              Hackathons, certifications, and milestones in my AI journey.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ai-orange group-hover:gap-3 transition-all">
              {activePanel === 'achievements' ? (
                <>Hide <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>View All <ChevronDown className="w-4 h-4" /></>
              )}
            </span>
          </button>

          {/* My Links Card */}
          <button
            onClick={() => togglePanel('links')}
            className="explore-card glass-card glass-card-hover p-8 text-center group border border-ai-cyan/30 w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-ai-cyan/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Link2 className="w-8 h-8 text-ai-cyan" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-ai-cyan">
              My Links
            </h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-6">
              Find me across the web — LinkedIn, GitHub, Email, and social platforms.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ai-cyan group-hover:gap-3 transition-all">
              {activePanel === 'links' ? (
                <>Hide <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Connect <ChevronDown className="w-4 h-4" /></>
              )}
            </span>
          </button>
        </div>

        {/* Achievements Panel */}
        {activePanel === 'achievements' && (
          <div className="glass-card p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-bold dark:text-white text-gray-900">
                🏆 <span className="gradient-text">Achievements & Milestones</span>
              </h3>
              <button
                onClick={() => setActivePanel(null)}
                className="p-2 rounded-lg dark:bg-white/5 bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 dark:text-gray-400 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 hover:border-ai-accent/30 transition-colors">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs dark:text-gray-400 text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Links Panel */}
        {activePanel === 'links' && (
          <div className="glass-card p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-bold dark:text-white text-gray-900">
                🔗 <span className="gradient-text">Connect With Me</span>
              </h3>
              <button
                onClick={() => setActivePanel(null)}
                className="p-2 rounded-lg dark:bg-white/5 bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 dark:text-gray-400 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="https://www.linkedin.com/in/taranjot-singh-aiml/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 hover:border-[#0A66C2]/50 hover:bg-gray-100 dark:hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/20 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-gray-900 text-sm group-hover:text-[#0A66C2] transition-colors">LinkedIn</h4>
                  <p className="text-xs dark:text-gray-400 text-gray-500">taranjot-singh-aiml</p>
                </div>
              </a>

              <a 
                href="https://github.com/taranjotsinghW28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl dark:bg-white/10 bg-gray-200 flex items-center justify-center">
                  <Github className="w-6 h-6 dark:text-white text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-gray-900 text-sm group-hover:text-gray-700 dark:group-hover:text-white transition-colors">GitHub</h4>
                  <p className="text-xs dark:text-gray-400 text-gray-500">taranjotsinghW28</p>
                </div>
              </a>

              <a 
                href="mailto:taranjot10934@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 hover:border-ai-cyan/50 hover:bg-gray-100 dark:hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-ai-cyan/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-ai-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-gray-900 text-sm group-hover:text-ai-cyan transition-colors">Email</h4>
                  <p className="text-xs dark:text-gray-400 text-gray-500">taranjot10934@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919315672843"
                className="flex items-center gap-4 p-4 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 hover:border-ai-green/50 hover:bg-gray-100 dark:hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-ai-green/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-ai-green" />
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-gray-900 text-sm group-hover:text-ai-green transition-colors">Phone</h4>
                  <p className="text-xs dark:text-gray-400 text-gray-500">+91 9315672843</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h3 className="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h3>
          <p className="dark:text-gray-400 text-gray-500 mb-8 max-w-xl mx-auto">
            Open for ML internships, freelance projects, and collaborations. 
            Let's discuss how AI can solve your real-world problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={openGmail}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-ai text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              taranjot10934@gmail.com
            </button>
            <a
              href="tel:+919315672843"
              className="flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-white/5 bg-gray-100 dark:text-white text-gray-700 font-medium border dark:border-white/10 border-gray-200 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 9315672843
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/taranjot-singh-aiml/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-500 hover:text-ai-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/taranjotsinghW28"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}