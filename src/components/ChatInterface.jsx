import { useState } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'

const suggestions = [
  { label: 'Work', query: 'Tell me about your work experience' },
  { label: 'About me', query: 'Tell me about yourself' },
  { label: 'Skills', query: 'What are your technical skills?' },
  { label: 'Contact', query: 'How can I contact you?' },
]

const responses = {
  'work': `🚀 **Python Intern at Geeta Technical Hub** (Jun-Jul 2025)\n\n• Engineered scalable OOP backends with SQLite/MySQL — slashed query response time by 30%\n• Designed DB schemas & REST APIs handling 1,000+ daily requests\n• Led Git-based collaboration (4-member team); minimized merge conflicts by 25%`,
  
  'about': `👋 Hi! I'm **Taranjot Singh**, an aspiring ML Engineer from Panipat, Haryana.\n\n🎓 BCA (AI & ML) at Geeta University | GPA: 8.24\n\n💡 I build end-to-end ML projects with up to **89.8% F1-score**. Passionate about real-world AI solutions, model deployment via Streamlit/Flask, and tools like MLflow & Fairlearn.`,
  
  'skills': `⚡ **Technical Skills:**\n\n**Languages:** Python, SQL, C\n**ML/DL:** scikit-learn, Pandas, NumPy, XGBoost, Fairlearn, MLflow\n**Models:** Regression, Random Forest, Decision Tree, KNN\n**Deployment:** Streamlit, Flask, Docker\n**Tools:** Git, MySQL, SQLite`,
  
  'contact': `📧 **Let's Connect!**\n\n• Email: taranjot10934@gmail.com\n• Phone: +91 9315672843\n• LinkedIn: linkedin.com/in/taranjot-singh-aiml\n• GitHub: github.com/taranjotsinghW28\n• Location: Panipat, Haryana`,
}

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Hi there! Ask me anything about Taranjot...' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = (query) => {
    if (!query.trim()) return

    const userMsg = { type: 'user', text: query }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const lower = query.toLowerCase()
      let response = responses.about
      
      if (lower.includes('work') || lower.includes('experience') || lower.includes('intern')) {
        response = responses.work
      } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) {
        response = responses.skills
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) {
        response = responses.contact
      } else if (lower.includes('project') || lower.includes('loan') || lower.includes('heart') || lower.includes('addiction') || lower.includes('checkout')) {
        response = `🎯 **Featured Projects:**\n\n**1. LoanRisk AI** — FinTech Loan System (F1: 89.8%)\n🔗 loan-risk-assessment.streamlit.app\n\n**2. Heart Disease Prediction** — Medical AI (Recall: 78.67%)\n🔗 heartdiseaseprediction-phqsrwfzttfghakvjy3e3q.streamlit.app\n\n**3. Addiction Risk Prediction** — Behavioral Health ML\n🔗 addictionpredictionscore-75ec5vu2tpgwhuq3hrhtbt.streamlit.app\n\n**4. SmartCheckout AI** — E-commerce Purchase Prediction\n🔗 smartcheckout-ai.streamlit.app`
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="glass-card w-full max-w-2xl mx-auto overflow-hidden ai-glow">
      <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-ai flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white">AI Assistant</h3>
          <p className="text-xs text-ai-green flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-ai-green animate-pulse" />
            Online — Ask about Taranjot
          </p>
        </div>
      </div>

      <div className="h-64 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.type === 'bot' ? 'bg-gradient-ai' : 'bg-white/10'
            }`}>
              {msg.type === 'bot' ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
            </div>
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
              msg.type === 'bot' 
                ? 'bg-white/5 text-gray-200 rounded-tl-none' 
                : 'bg-gradient-ai text-white rounded-tr-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-ai flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-ai-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-ai-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-ai-accent animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 py-3 flex gap-2 flex-wrap border-t border-white/10">
        {suggestions.map((s) => (
          <button
            key={s.label}
            onClick={() => handleSend(s.query)}
            className="chip"
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="px-6 py-4 border-t border-white/10">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder="Ask anything about Taranjot..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ai-accent/50 transition-colors"
          />
          <button
            onClick={() => handleSend(input)}
            className="p-3 rounded-xl bg-gradient-ai text-white hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}