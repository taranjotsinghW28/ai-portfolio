import { Bot, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 section-padding border-t dark:border-white/5 border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-ai flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold dark:text-white text-gray-900">Taranjot Singh</p>
              <p className="text-xs dark:text-gray-500 text-gray-400">Aspiring ML Engineer</p>
            </div>
          </div>

          <p className="text-sm dark:text-gray-500 text-gray-400 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-ai-pink fill-ai-pink" /> using React, Three.js & Tailwind
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 text-sm dark:text-gray-400 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>

        <div className="mt-8 pt-8 border-t dark:border-white/5 border-gray-200 text-center">
          <p className="text-xs dark:text-gray-600 text-gray-400">
            © 2026 Taranjot Singh. All rights reserved. | Panipat, Haryana, India
          </p>
        </div>
      </div>
    </footer>
  )
}