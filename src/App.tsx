import { useState } from 'react'
import { useScroll, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLang } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import Home from './pages/Home'
import InstagramGuide from './pages/guides/InstagramGuide'
import PresentationGuide from './pages/guides/PresentationGuide'
import ChatGPTGuide from './pages/guides/ChatGPTGuide'
import ContentGuide from './pages/guides/ContentGuide'
import TikTokGuide from './pages/guides/TikTokGuide'
import AiBusinessGuide from './pages/guides/AiBusinessGuide'
import AutomationsGuide from './pages/guides/AutomationsGuide'
import WebCourseGuide from './pages/guides/WebCourseGuide'

const LANDING_ROUTES = ['/ai-studio', '/claude-design-course', '/secret', '/social-selling']

function LandingFrame({ src }: { src: string }) {
  const { lang } = useLang()
  const [height, setHeight] = useState('100vh')

  return (
    <div style={{ paddingTop: '60px', background: '#060606' }}>
      <iframe
        key={lang}
        src={`${src}?lang=${lang}`}
        style={{ width: '100%', height, minHeight: 'calc(100vh - 60px)', border: 'none', display: 'block' }}
        title="Landing page"
        onLoad={(e) => {
          try {
            const doc = (e.currentTarget as HTMLIFrameElement).contentWindow?.document
            const h = doc?.documentElement.scrollHeight ?? doc?.body.scrollHeight
            if (h && h > 0) setHeight(`${h + 20}px`)
          } catch {}
        }}
      />
    </div>
  )
}

function AppInner() {
  const { dir } = useLang()
  const { scrollYProgress } = useScroll()
  const location = useLocation()
  const isLanding = LANDING_ROUTES.includes(location.pathname)

  return (
    <div dir={dir} className="min-h-screen bg-[#060606] text-white">
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

        {/* Free guides */}
        <Route path="/instagram-guide"    element={<InstagramGuide />} />
        <Route path="/presentation-guide" element={<PresentationGuide />} />
        <Route path="/chatgpt-guide"      element={<ChatGPTGuide />} />
        <Route path="/content-guide"      element={<ContentGuide />} />
        <Route path="/tiktok-guide"       element={<TikTokGuide />} />
        <Route path="/ai-business"        element={<AiBusinessGuide />} />
        <Route path="/automations"        element={<AutomationsGuide />} />
        <Route path="/web-course"         element={<WebCourseGuide />} />

        {/* Paid courses - HTML landing pages inside iframe */}
        <Route path="/ai-studio"            element={<LandingFrame src="/ai-studio-landing.html" />} />
        <Route path="/claude-design-course" element={<LandingFrame src="/claude-design-landing.html" />} />
        <Route path="/secret"               element={<LandingFrame src="/secret-guide.html" />} />
        <Route path="/social-selling"       element={<LandingFrame src="/social-selling-landing.html" />} />
      </Routes>
      {!isLanding && <Footer />}
      <WhatsApp />
    </div>
  )
}

export default function App() {
  return <AppInner />
}
