import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, GraduationCap, Trophy, Brain, Code2, Users, GitBranch, Database } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.bento-card').forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ai-cyan text-sm font-medium uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            <span className="dark:text-white text-gray-900">The </span>
            <span className="gradient-text">Mindset & Craft</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Name Card */}
          <div className="bento-card glass-card glass-card-hover md:col-span-2 p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl lg:text-5xl font-display font-bold dark:text-white text-gray-900 mb-2">TARANJOT</h3>
            <h3 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">SINGH</h3>
            <div className="w-16 h-0.5 bg-gradient-ai rounded-full mb-4" />
            <p className="text-sm dark:text-gray-400 text-gray-500 uppercase tracking-widest">ML Engineer & AI Developer</p>
          </div>

          {/* Experience */}
          <div className="bento-card glass-card glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ai-orange/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-ai-orange" />
              </div>
              <span className="text-xs font-medium dark:text-gray-400 text-gray-500 uppercase">Experience</span>
            </div>
            <h4 className="font-semibold dark:text-white text-gray-900 mb-2">Python Intern</h4>
            <p className="text-sm dark:text-gray-400 text-gray-500 mb-3">Geeta Technical Hub, Panipat</p>
            <p className="text-xs dark:text-gray-500 text-gray-400">Jun - Jul 2025</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs dark:text-gray-400 text-gray-500">
                <Database className="w-3 h-3 text-ai-cyan" />
                <span>SQLite/MySQL backends</span>
              </div>
              <div className="flex items-center gap-2 text-xs dark:text-gray-400 text-gray-500">
                <GitBranch className="w-3 h-3 text-ai-green" />
                <span>Git collaboration lead</span>
              </div>
              <div className="flex items-center gap-2 text-xs dark:text-gray-400 text-gray-500">
                <Users className="w-3 h-3 text-ai-pink" />
                <span>4-member team</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bento-card glass-card glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ai-accent/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-ai-accent" />
              </div>
              <span className="text-xs font-medium dark:text-gray-400 text-gray-500 uppercase">Education</span>
            </div>
            <h4 className="font-semibold dark:text-white text-gray-900 mb-2">BCA (AI & ML)</h4>
            <p className="text-sm dark:text-gray-400 text-gray-500 mb-1">Geeta University, Panipat</p>
            <p className="text-xs dark:text-gray-500 text-gray-400 mb-3">2024 - 2027</p>
            <div className="px-3 py-2 rounded-lg bg-ai-accent/10 border border-ai-accent/20">
              <span className="text-lg font-bold text-ai-accent">8.24</span>
              <span className="text-xs dark:text-gray-400 text-gray-500 ml-2">GPA</span>
            </div>
          </div>

          {/* Mindset */}
          <div className="bento-card glass-card glass-card-hover p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-ai-cyan" />
              <h3 className="text-xl font-display font-bold dark:text-white text-gray-900">Mindset</h3>
            </div>
            <p className="dark:text-gray-300 text-gray-600 leading-relaxed mb-4">
              Building more than models. My passion for AI provides the discipline and focus I need to grow. 
              I believe in end-to-end ML pipelines — from data preprocessing to production deployment.
            </p>
            <div className="flex items-center gap-2 text-sm text-ai-cyan">
              <Trophy className="w-4 h-4" />
              <span>89.8% F1-score achieved</span>
            </div>
          </div>

          {/* Photo */}
          <div className="bento-card glass-card glass-card-hover p-2 md:col-span-1 overflow-hidden">
            <div className="w-full h-full min-h-[200px] rounded-xl overflow-hidden">
              <img 
                src="/photo.jpg" 
                alt="Taranjot Singh" 
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Craft */}
          <div className="bento-card glass-card glass-card-hover p-6 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-ai-pink" />
              <h3 className="text-xl font-display font-bold dark:text-white text-gray-900">Craft</h3>
            </div>
            <p className="dark:text-gray-300 text-gray-600 leading-relaxed mb-4">
              Building scalable ML apps, predictive models, and AI automations. I understand what advantages modern ML can provide.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'scikit-learn', 'XGBoost', 'Flask', 'Streamlit'].map((tech) => (
                <span key={tech} className="px-2 py-1 rounded-md dark:bg-white/5 bg-gray-100 text-xs dark:text-gray-300 text-gray-600 border dark:border-white/10 border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bento-card glass-card glass-card-hover p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-ai-green" />
              <span className="text-sm font-medium dark:text-gray-400 text-gray-500">Location</span>
            </div>
            <h4 className="text-2xl font-display font-bold dark:text-white text-gray-900 mb-1">PANIPAT, HARYANA</h4>
            <p className="text-sm dark:text-gray-400 text-gray-500">India</p>
            <p className="text-xs text-ai-cyan mt-2">+91 9315672843</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ai-green animate-pulse" />
              <span className="text-xs text-ai-green">Open to internships & collaboration</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="bento-card glass-card glass-card-hover p-6">
            <h4 className="font-semibold dark:text-white text-gray-900 mb-3">Certifications</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-ai-orange mt-0.5" />
                <div>
                  <p className="text-sm dark:text-gray-300 text-gray-600">NPTEL Design Thinking</p>
                  <p className="text-xs text-ai-orange">Elite Grade</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-ai-accent mt-0.5" />
                <div>
                  <p className="text-sm dark:text-gray-300 text-gray-600">Kaggle Intro to ML</p>
                  <p className="text-xs text-ai-accent">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}