import { useRef, useEffect } from 'react'
import { ExternalLink, Star, Github } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, [index])

  return (
    <div ref={cardRef} className="group glass-card glass-card-hover overflow-hidden">
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono dark:text-gray-500 text-gray-400">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-xs font-medium dark:text-gray-400 text-gray-500 uppercase tracking-wider">{project.category}</span>
          </div>
          <button className="p-2 rounded-lg dark:bg-white/5 bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
            <Star className="w-4 h-4 text-ai-orange" />
          </button>
        </div>
        
        <h3 className="text-2xl font-display font-bold dark:text-white text-gray-900 mb-2 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      <div className="mx-6 mb-6 rounded-xl overflow-hidden relative group-hover:shadow-2xl transition-all duration-500"
        style={{ background: project.gradient }}>
        <div className="aspect-video flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{project.icon}</div>
            <div className="text-white/80 text-sm font-medium">{project.preview}</div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex gap-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-white">{m.value}</div>
                <div className="text-xs text-white/70">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-medium dark:bg-white/5 bg-gray-100 dark:text-gray-300 text-gray-600 border dark:border-white/10 border-gray-200">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-ai text-white text-sm font-medium hover:opacity-90 transition-opacity">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl dark:bg-white/5 bg-gray-100 dark:text-white text-gray-700 text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border dark:border-white/10 border-gray-200">
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}