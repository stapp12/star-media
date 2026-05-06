import { useScroll, motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import { useLang } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import Home from './pages/Home'
import InstagramGuide from './pages/guides/InstagramGuide'
import PresentationGuide from './pages/guides/PresentationGuide'
import ClaudeDesignCourse from './pages/guides/ClaudeDesignCourse'
import SecretGuide from './pages/guides/SecretGuide'
import AiStudio from './pages/guides/AiStudio'
import ChatGPTGuide from './pages/guides/ChatGPTGuide'
import ContentGuide from './pages/guides/ContentGuide'
import TikTokGuide from './pages/guides/TikTokGuide'
import AiBusinessGuide from './pages/guides/AiBusinessGuide'
import AutomationsGuide from './pages/guides/AutomationsGuide'
import WebCourseGuide from './pages/guides/WebCourseGuide'

export default function App() {
  const { dir } = useLang()
  const { scrollYProgress } = useScroll()

  return (
    <div dir={dir} className="min-h-screen bg-[#060606] text-white">
      {/* Gold scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200,
          background: 'linear-gradient(90deg, #b8860b, #d4af37, #ffd700)',
          scaleX: scrollYProgress, transformOrigin: 'left',
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram-guide" element={<InstagramGuide />} />
        <Route path="/presentation-guide" element={<PresentationGuide />} />
        <Route path="/claude-design-course" element={<ClaudeDesignCourse />} />
        <Route path="/secret" element={<SecretGuide />} />
        <Route path="/ai-studio" element={<AiStudio />} />
        <Route path="/chatgpt-guide" element={<ChatGPTGuide />} />
        <Route path="/content-guide" element={<ContentGuide />} />
        <Route path="/tiktok-guide" element={<TikTokGuide />} />
        <Route path="/ai-business" element={<AiBusinessGuide />} />
        <Route path="/automations" element={<AutomationsGuide />} />
        <Route path="/web-course" element={<WebCourseGuide />} />
      </Routes>
      <Footer />
      <WhatsApp />
    </div>
  )
}
