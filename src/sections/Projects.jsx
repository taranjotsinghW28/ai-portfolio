import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const projectsData = [
  {
    title: 'LoanRisk AI',
    category: 'FINTECH ML',
    description: 'Dual-model classifier for loan risk assessment using Random Forest & Decision Tree with Fairlearn bias mitigation. Features MLflow tracking, 5-fold CV, SMOTE handling, and Docker deployment.',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    icon: '🏦',
    preview: 'Live Risk Assessment Dashboard',
    metrics: [
      { value: '89.8%', label: 'F1-Score' },
      { value: '500+', label: 'Daily Predictions' },
      { value: '-20%', label: 'Bias Reduced' }
    ],
    tech: ['Python', 'scikit-learn', 'XGBoost', 'MLflow', 'Fairlearn', 'Streamlit', 'Docker'],
    liveUrl: 'https://loan-risk-assessment.streamlit.app/',
    githubUrl: 'https://github.com/taranjotsinghW28'
  },
  {
    title: 'Heart Disease Prediction',
    category: 'MEDICAL AI',
    description: 'Optimized Random Forest model for heart disease prediction outperforming LR/DT/GB/KNN by 12% average. Features hyperparameter tuning via GridSearchCV and interactive Streamlit diagnostics.',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    icon: '❤️',
    preview: 'Real-time Health Diagnostics',
    metrics: [
      { value: '78.67%', label: 'Recall' },
      { value: '87.69%', label: 'ROC-AUC' },
      { value: '+12%', label: 'vs Baseline' }
    ],
    tech: ['Python', 'Random Forest', 'GridSearchCV', 'Pandas', 'SMOTE', 'Streamlit'],
    liveUrl: 'https://heartdiseaseprediction-phqsrwfzttfghakvjy3e3q.streamlit.app/',
    githubUrl: 'https://github.com/taranjotsinghW28'
  },
  {
    title: 'Addiction Risk Prediction',
    category: 'BEHAVIORAL HEALTH',
    description: 'ML-powered web app predicting addiction risk scores based on behavioral and personal inputs. End-to-end pipeline with data preprocessing, feature scaling, and real-time Streamlit deployment.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    icon: '🧠',
    preview: 'Risk Score Predictor',
    metrics: [
      { value: 'LR', label: 'Model' },
      { value: 'Real-time', label: 'Predictions' },
      { value: '100%', label: 'Interactive' }
    ],
    tech: ['Python', 'Linear Regression', 'Pandas', 'NumPy', 'Streamlit'],
    liveUrl: 'https://addictionpredictionscore-75ec5vu2tpgwhuq3hrhtbt.streamlit.app/',
    githubUrl: 'https://github.com/taranjotsinghW28'
  },
  {
    title: 'SmartCheckout AI',
    category: 'E-COMMERCE ML',
    description: 'AI-powered purchase prediction system analyzing e-commerce visitor behavior. Features real-time predictions, interactive dashboard with feature importance, and actionable user insights.',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    icon: '🛒',
    preview: 'Purchase Intent Analyzer',
    metrics: [
      { value: '75%', label: 'Accuracy' },
      { value: '0.41', label: 'F1-Score' },
      { value: '0.62', label: 'Recall' }
    ],
    tech: ['Python', 'scikit-learn', 'Pandas', 'Feature Engineering', 'Streamlit'],
    liveUrl: 'https://smartcheckout-ai.streamlit.app/',
    githubUrl: 'https://github.com/taranjotsinghW28'
  }
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-header', { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 85%'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="projects-header text-center mb-16">
          <p className="text-ai-cyan text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="dark:text-white text-gray-900">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="dark:text-gray-400 text-gray-500 max-w-2xl mx-auto">
            A curated selection of ML projects that made me confident in building AI solutions. 
            All projects are live and deployed on Streamlit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}