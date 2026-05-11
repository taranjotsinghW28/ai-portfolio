import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SkillSphere from '../components/SkillSphere'
import { Code2, Database, Brain, GitBranch, Container, BarChart3, FlaskConical } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-ai-cyan',
    bgColor: 'bg-ai-cyan/10',
    skills: ['Python', 'SQL', 'C']
  },
  {
    title: 'ML/DL',
    icon: Brain,
    color: 'text-ai-pink',
    bgColor: 'bg-ai-pink/10',
    skills: ['scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'Fairlearn']
  },
  {
    title: 'Models',
    icon: BarChart3,
    color: 'text-ai-orange',
    bgColor: 'bg-ai-orange/10',
    skills: ['Regression', 'Random Forest', 'Decision Tree', 'KNN', 'SMOTE']
  },
  {
    title: 'Deployment',
    icon: FlaskConical,
    color: 'text-ai-green',
    bgColor: 'bg-ai-green/10',
    skills: ['Streamlit', 'Flask', 'MLflow', 'Docker']
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-ai-accent',
    bgColor: 'bg-ai-accent/10',
    skills: ['MySQL', 'SQLite', 'REST APIs']
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    skills: ['Git', 'GitHub', 'GridSearchCV', 'Feature Engineering']
  }
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-category').forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            opacity: 1, x: 0,
            duration: 0.6,
            delay: i * 0.1,
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

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ai-cyan text-sm font-medium uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="dark:text-white text-gray-900">My </span>
            <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SkillSphere />
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="skill-category glass-card glass-card-hover p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h4 className="font-semibold dark:text-white text-gray-900">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium dark:bg-white/5 bg-gray-100 dark:text-gray-300 text-gray-600 border dark:border-white/10 border-gray-200 hover:border-ai-accent/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}