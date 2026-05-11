/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ADD THIS LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-dark': '#050510',
        'ai-navy': '#0a0a1a',
        'ai-purple': '#1a1a3e',
        'ai-accent': '#6366f1',
        'ai-cyan': '#06b6d4',
        'ai-pink': '#ec4899',
        'ai-green': '#10b981',
        'ai-orange': '#f59e0b',
        'glass': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-ai': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
        'gradient-dark': 'linear-gradient(180deg, #050510 0%, #0a0a1a 50%, #1a1a3e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}