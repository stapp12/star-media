import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Check, Send, ChevronDown } from 'lucide-react'
import { useLang } from '../context/LangContext'
import SEOHead from '../components/SEOHead'

/* ── Gold Particle Canvas (50 dots) ─────────────────── */
function Stars() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    let raf: number
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2, speed: 0.012 + Math.random() * 0.018,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      stars.forEach(s => {
        s.x += s.vx; s.y += s.vy; s.phase += s.speed
        if (s.x < 0 || s.x > c.width) s.vx *= -1
        if (s.y < 0 || s.y > c.height) s.vy *= -1
        const a = 0.08 + 0.65 * ((Math.sin(s.phase) + 1) / 2)
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,175,55,${a})`; ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
}


/* ── Fade wrapper ────────────────────────────────────── */
const Fade = ({ children, delay = 0, y = 30, className = '', style }: {
  children: React.ReactNode; delay?: number; y?: number; className?: string; style?: React.CSSProperties
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    style={style}
  >{children}</motion.div>
)

/* ══ HOME ═══════════════════════════════════════════════ */
export default function Home() {
  const { lang, dir } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, -80])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotX = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const spotY = useSpring(mouseY, { damping: 30, stiffness: 200 })
  const spotOffsetX = useTransform(spotX, (v: number) => v - 250)
  const spotOffsetY = useTransform(spotY, (v: number) => v - 250)

  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'err'>('idle')
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending')
    try {
      const token = import.meta.env.VITE_TG_BOT_TOKEN
      const chat = import.meta.env.VITE_TG_CHAT_ID
      if (token && chat) {
        const text = `🌟 New inquiry - Star Media\n👤 ${form.name}\n📞 ${form.phone}\n📧 ${form.email}\n🎯 ${form.service}\n💬 ${form.message}`
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chat, text })
        })
      }
      setStatus('done'); setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch { setStatus('err') }
  }

  const marqueeItems = lang === 'he'
    ? ['AI Video', 'סוכני AI', 'אוטומציות', 'בניית אתרים', 'קורסים', 'שיווק דיגיטלי', 'עיצוב ממשקים', 'תוכן AI']
    : ['AI Video', 'AI Agents', 'Automations', 'Web Development', 'Courses', 'Digital Marketing', 'UI Design', 'AI Content']
  const marqueeDouble = [...marqueeItems, ...marqueeItems]

  const services = [
    { emoji: '🎬', title: L('AI Video', 'AI Video'),           desc: L('יצירת וידאו מקצועי עם בינה מלאכותית לכל פלטפורמה', 'Professional video creation with AI for every platform') },
    { emoji: '🤖', title: L('סוכני AI', 'AI Agents'),          desc: L('בניית סוכנים חכמים שעובדים בשבילך 24/7 ללא הפסקה', 'Build smart agents that work for you 24/7 without stopping') },
    { emoji: '⚡', title: L('אוטומציות', 'Automations'),        desc: L('תהליכים אוטומטיים שחוסכים שעות עבודה בכל שבוע', 'Automated processes that save hours of work every week') },
    { emoji: '🌐', title: L('בניית אתרים', 'Web Development'),  desc: L('אתרים מהירים, מודרניים ומותאמים לכל מסך', 'Fast, modern websites optimized for every screen') },
  ]

  const whyUs = [
    { n: '01', title: L('ניסיון מוכח', 'Proven Experience'),   desc: L('5+ שנות ניסיון בשיווק דיגיטלי ו-AI עם מאות לקוחות מכל הענפים', '5+ years of experience in digital marketing and AI with hundreds of clients') },
    { n: '02', title: L('מהירות ביצוע', 'Fast Execution'),     desc: L('מהקונספט ועד תוצאות בתוך שבועות, לא חודשים - אנחנו מהירים', 'From concept to results in weeks, not months - we move fast') },
    { n: '03', title: L('תוצאות מדידות', 'Measurable Results'), desc: L('עובדים על פי מדדים ברורים - רואים מה עובד ומה לשפר', 'We work by clear metrics - see what works and what to improve') },
    { n: '04', title: L('שירות אישי', 'Personal Service'),     desc: L('כל לקוח מקבל ליווי אישי לאורך כל הדרך, ללא חריגים', 'Every client gets personal guidance all the way through, no exceptions') },
  ]

  const packages = [
    {
      name: 'Basic', price: '₪2,499',
      features: [L('אתר עד 5 עמודים', 'Up to 5 pages'), L('עיצוב מותאם אישית', 'Custom design'), L('ריספונסיב לכל מסך', 'Fully responsive'), L('טופס יצירת קשר', 'Contact form')],
      popular: false
    },
    {
      name: 'Pro', price: '₪3,999',
      features: [L('אתר עד 10 עמודים', 'Up to 10 pages'), L('SEO מלא ומתקדם', 'Full advanced SEO'), L('אינטגרציות CRM', 'CRM integrations'), L('עיצוב Premium', 'Premium design'), L('דומיין + אחסון שנה', 'Domain + 1 year hosting')],
      popular: true
    },
    {
      name: 'Business', price: '₪6,999+',
      features: [L('פרויקט ללא הגבלה', 'Unlimited project'), L('חנות אונליין', 'Online store'), L('אינטגרציות מתקדמות', 'Advanced integrations'), L('תחזוקה חודשית', 'Monthly maintenance'), L('ליווי שוטף', 'Ongoing support')],
      popular: false
    },
  ]

  const courses = [
    { emoji: '🤖', title: L('AI לעסקים - מ-0 ליחידים', 'AI for Business - Zero to Expert'), desc: L('המדריך המקיף לשימוש ב-AI לצמיחת עסק', 'The complete guide to using AI for business growth'), price: '₪497', free: false, href: '/ai-business' },
    { emoji: '🎬', title: L('קורס AI Studio', 'AI Studio Course'),                           desc: L('צור סרטוני שיווק ואווטאר AI ברמה סטודיו', 'Create marketing videos and AI avatar at studio level'), price: '89₪', free: false, href: '/ai-studio' },
    { emoji: '🎨', title: L('קורס Claude Design', 'Claude Design Course'),                   desc: L('עיצוב ממשקים, לוגואים ואתרים עם AI מתקדם', 'Design interfaces, logos and websites with advanced AI'), price: '49₪', free: false, href: '/claude-design-course' },
    { emoji: '💰', title: L('Social Selling', 'Social Selling'),                              desc: L('מכירות אותנטיות דרך רשתות חברתיות שעובדות', 'Authentic social media sales that actually work'), price: '₪297', free: false, href: '/social-selling' },
    { emoji: '⚡', title: L('אוטומציות לעסקים', 'Business Automations'),                     desc: L('תהליכים אוטומטיים שחוסכים שעות עבודה בשבוע', 'Automated processes that save hours of work per week'), price: '₪597', free: false, href: '/automations' },
    { emoji: '🌐', title: L('בניית אתרים עם AI', 'Build Websites with AI'),                 desc: L('בנה אתר מקצועי תוך יום עם כלי AI מתקדמים', 'Build a professional website in a day with advanced AI tools'), price: '₪297', free: false, href: '/web-course' },
    { emoji: '📱', title: L('מדריך אינסטגרם', 'Instagram Guide'),                           desc: L('מ-0 ל-10K עוקבים - מדריך שלב אחר שלב', 'From 0 to 10K followers - step by step guide'), price: L('חינם', 'Free'), free: true, href: '/instagram-guide' },
    { emoji: '💬', title: L('ChatGPT לעסקים', 'ChatGPT for Business'),                      desc: L('100+ פרומפטים שישנו את אופן העבודה שלך', '100+ prompts that will change the way you work'), price: L('חינם', 'Free'), free: true, href: '/chatgpt-guide' },
  ]

  return (
    <div dir={dir} style={{ background: '#060606', minHeight: '100vh' }}>
      <SEOHead
        title={L('Star Media | AI לעסקים', 'Star Media | AI for Business')}
        description={L('Star Media - AI לעסקים שרוצים לצמוח. AI Video, סוכני AI, אוטומציות, אתרים, קורסים.', 'Star Media - AI for businesses that want to grow. AI Video, AI Agents, Automations, Websites, Courses.')}
      />

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect()
          mouseX.set(e.clientX - rect.left)
          mouseY.set(e.clientY - rect.top)
        }}
      >
        <Stars />
        <div className="orb orb-gold-1" />
        <div className="orb orb-gold-2" />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
        {/* Mouse spotlight */}
        <motion.div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1, x: spotOffsetX, y: spotOffsetY }} />

        <motion.div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto', padding: '8rem 1.5rem 5rem', textAlign: 'center', y: heroY }}>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display"
            style={{ fontSize: 'clamp(2.8rem,7vw,5.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}
          >
            <span style={{ color: '#fff', display: 'block' }}>{L('הבינה המלאכותית', 'The Artificial Intelligence')}</span>
            <span className="gold-text" style={{ display: 'block' }}>{L('שמשנה עסקים', 'That Changes Business')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 2.5rem' }}
          >
            {L('אנחנו עוזרים לעסקים לצמוח עם AI - וידאו מקצועי, סוכנים חכמים, אוטומציות, אתרים ועוד', 'We help businesses grow with AI - professional video, smart agents, automations, websites and more')}
          </motion.p>

          {/* 5 pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}
          >
            {[
              'AI Video',
              L('סוכני AI', 'AI Agents'),
              L('אוטומציות', 'Automations'),
              L('אתרים', 'Websites'),
              L('קורסים', 'Courses'),
            ].map(p => (
              <span key={p} style={{ padding: '0.4rem 1rem', borderRadius: '999px', border: '1px solid rgba(212,175,55,0.2)', color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', background: 'rgba(212,175,55,0.04)' }}>
                {p}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}
          >
            <a href="/#contact" className="btn-gold" style={{ padding: '0.9rem 2.4rem', borderRadius: '999px', fontSize: '0.95rem' }}>
              {L('בואו נדבר', "Let's Talk")}
            </a>
            <a href="/#courses" className="btn-ghost-gold" style={{ padding: '0.9rem 2.4rem', borderRadius: '999px', fontSize: '0.95rem' }}>
              {L('צפו בקורסים', 'View Courses')}
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="/#services"
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(212,175,55,0.4)', zIndex: 1 }}
        >
          <ChevronDown size={28} />
        </motion.a>
      </section>

      {/* ══ INTRO VIDEO ══════════════════════════════════════ */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <Fade style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900 }}>
            {L('מי אנחנו ב ', 'Who We Are at ')}<span className="gold-text">Star Media</span>
          </h2>
        </Fade>
        <Fade delay={0.1}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.15)', boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.06)' }}>
            <video
              src="/starmedia-hero.mp4"
              autoPlay
              muted
              playsInline
              controls
              style={{ width: '100%', display: 'block', background: '#000' }}
            />
          </div>
        </Fade>
      </section>

      {/* ══ STATS BAR ════════════════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(212,175,55,0.25)', borderBottom: '1px solid rgba(212,175,55,0.25)', padding: '1.75rem 1.5rem', background: 'rgba(212,175,55,0.02)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', textAlign: 'center', gap: '1rem' }}>
          {[
            { n: '150+', l: L('לקוחות מרוצים', 'Happy Clients') },
            { n: '500+', l: L('פרויקטים הושלמו', 'Projects Completed') },
            { n: '98%',  l: L('שביעות רצון', 'Satisfaction') },
            { n: '24/7', l: L('זמינות ותמיכה', 'Support') },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="font-display gold-text-static" style={{ fontSize: '1.8rem', fontWeight: 900 }}>{n}</div>
              <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.75rem', marginTop: '0.2rem' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MARQUEE ══════════════════════════════════════════ */}
      <div style={{ overflow: 'hidden', background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(212,175,55,0.06)', padding: '0.9rem 0' }} dir="ltr">
        <div className="marquee-track">
          {marqueeDouble.map((item, i) => (
            <span key={i} style={{ padding: '0 2rem', color: 'rgba(212,175,55,0.55)', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {item}
              <span style={{ color: 'rgba(212,175,55,0.2)', margin: '0 0.75rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ ADVANCED SERVICES ════════════════════════════════ */}
      <section id="services" style={{ padding: '7rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Fade style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{L('מה אנחנו עושים', 'What We Do')}</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
            {L('שירותים', 'Advanced')} <span className="gold-text">{L('מתקדמים', 'Services')}</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            {L('כל הכלים שעסק מודרני צריך כדי לצמוח, תחת קורת גג אחת', 'All the tools a modern business needs to grow, under one roof')}
          </p>
        </Fade>

        <div className="grid-services" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {/* Left: 2×2 service cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {services.map((s, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div className="card-glass" style={{ borderRadius: '20px', padding: '1.5rem', height: '100%', minHeight: '160px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.9rem', lineHeight: 1 }}>{s.emoji}</div>
                  <h3 className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.45rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </Fade>
            ))}
          </div>

          {/* Right: dashboard card */}
          <Fade delay={0.2}>
            <div className="card-glass" style={{ borderRadius: '20px', padding: '2rem', background: 'rgba(212,175,55,0.02)', height: '100%' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="section-label">{L('סוכן AI בפעולה', 'AI Agent Live')}</span>
                <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                  {L('Dashboard בזמן אמת', 'Real-time Dashboard')}
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {[
                  { label: L('לידים החודש', 'Monthly Leads'), value: '147', change: '+23%' },
                  { label: L('זמן תגובה', 'Response Time'),   value: '1.2s', change: '-40%' },
                  { label: L('שיחות', 'Conversations'),        value: '2,341', change: '+18%' },
                  { label: L('חסכון', 'Time Saved'),           value: '84h',  change: L('שעות', 'hours') },
                ].map(m => (
                  <div key={m.label} style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(212,175,55,0.08)', borderRadius: '12px', padding: '0.9rem' }}>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', marginBottom: '0.35rem' }}>{m.label}</div>
                    <div className="font-display gold-text-static" style={{ fontSize: '1.35rem', fontWeight: 800 }}>{m.value}</div>
                    <div style={{ color: '#4ade80', fontSize: '0.68rem', marginTop: '0.2rem' }}>{m.change}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem' }}>{L('פעילות שבועית', 'Weekly Activity')}</span>
                  <span style={{ color: '#4ade80', fontSize: '0.68rem' }}>● {L('פעיל', 'Active')}</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', height: '52px' }}>
                  {[38, 62, 45, 78, 52, 92, 68].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0', background: i === 5 ? 'rgba(212,175,55,0.85)' : 'rgba(212,175,55,0.22)' }} />
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ WHY US ═══════════════════════════════════════════ */}
      <section style={{ padding: '7rem 1.5rem', background: 'rgba(212,175,55,0.018)', borderTop: '1px solid rgba(212,175,55,0.06)', borderBottom: '1px solid rgba(212,175,55,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Fade style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">{L('למה אנחנו', 'Why Us')}</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span className="gold-text">{L('היתרון', 'Our')}</span> {L('שלנו', 'Advantage')}
            </h2>
          </Fade>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: '1rem' }}>
            {whyUs.map(({ n, title, desc }, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="card-glass" style={{ borderRadius: '20px', padding: '1.75rem' }}>
                  <div className="font-display gold-text-static" style={{ fontSize: '2.2rem', fontWeight: 900, opacity: 0.6, marginBottom: '1rem', lineHeight: 1 }}>{n}</div>
                  <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WEBSITE PACKAGES ════════════════════════════════= */}
      <section id="websites" style={{ padding: '7rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Fade style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{L('אתרים', 'Websites')}</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
            {L('חבילות', 'Website')} <span className="gold-text">{L('אתרים', 'Packages')}</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            {L('עיצוב מדויק, ביצועים מעולים, ומותאם לכל מסך', 'Precise design, excellent performance, optimized for every screen')}
          </p>
        </Fade>

        <div className="grid-pricing" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {packages.map(({ name, price, features, popular }, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div style={{
                position: 'relative', borderRadius: '20px', padding: '2rem',
                border: popular ? '1px solid rgba(212,175,55,0.5)' : '1px solid rgba(255,255,255,0.07)',
                background: popular ? 'rgba(212,175,55,0.04)' : 'rgba(255,255,255,0.02)',
                display: 'flex', flexDirection: 'column', height: '100%',
              }}>
                {popular && (
                  <div style={{ position: 'absolute', top: -12, right: '50%', transform: 'translateX(50%)', background: 'linear-gradient(135deg,#b8860b,#d4af37)', color: '#000', fontSize: '0.62rem', fontWeight: 700, padding: '3px 14px', borderRadius: '999px', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                    {L('הכי פופולרי', 'Most Popular')}
                  </div>
                )}
                <div className="font-display" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', marginBottom: '0.4rem' }}>{name}</div>
                <div className="font-display gold-text-static" style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>{price}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1, marginBottom: '1.75rem' }}>
                  {features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.83rem' }}>
                      <Check size={13} style={{ color: '#d4af37', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="/#contact" className={popular ? 'btn-gold' : 'btn-ghost-gold'} style={{ padding: '0.8rem', borderRadius: '12px', textAlign: 'center', fontSize: '0.88rem' }}>
                  {L('בחרו חבילה', 'Choose Plan')}
                </a>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ══ COURSES ══════════════════════════════════════════ */}
      <section id="courses" style={{ padding: '7rem 1.5rem', background: 'rgba(212,175,55,0.015)', borderTop: '1px solid rgba(212,175,55,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Fade style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">{L('למד וצמח', 'Learn & Grow')}</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              <span className="gold-text">{L('קורסים', 'Courses')}</span> {L('ומדריכים', '& Guides')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {L('תוכן מעשי שמניב תוצאות אמיתיות - ממומחים שעושים את זה כל יום', 'Practical content that delivers real results - from experts who do it every day')}
            </p>
          </Fade>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem' }}>
            {courses.map(({ emoji, title, desc, price, free, href }, i) => (
              <Fade key={i} delay={i * 0.06}>
                <a href={href} className="card-course" style={{ borderRadius: '20px', padding: '1.75rem', textDecoration: 'none' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1 }}>{emoji}</div>
                  <div style={{ marginBottom: '0.9rem' }}>
                    <span className={free ? 'badge-free' : 'badge-paid'}>
                      {free ? L('חינם', 'Free') : L('פרימיום', 'Premium')}
                    </span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.8rem', lineHeight: 1.6, flex: 1 }}>{desc}</p>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="font-display gold-text-static" style={{ fontSize: '1.15rem', fontWeight: 800 }}>{price}</span>
                    <span style={{ color: 'rgba(212,175,55,0.5)', fontSize: '0.75rem' }}>{L('לפרטים', 'Details')}</span>
                  </div>
                </a>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═══════════════════════════════════════ */}
      <section style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(212,175,55,0.13) 0%, transparent 70%)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <Fade>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
              {L('מוכנים', 'Ready to')} <span className="gold-text">{L('לצמוח?', 'Grow?')}</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              {L('צרו קשר היום ונבנה יחד את האסטרטגיה הנכונה לעסק שלכם', "Contact us today and we'll build the right strategy for your business together")}
            </p>
            <a href="/#contact" className="btn-gold" style={{ padding: '1rem 3rem', borderRadius: '999px', fontSize: '1rem' }}>
              {L('בואו נדבר', "Let's Talk")}
            </a>
          </Fade>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════ */}
      <section id="contact" style={{ padding: '6rem 1.5rem 8rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <Fade style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">{L('צור קשר', 'Contact')}</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
              <span className="gold-text">{L('נשמח לשמוע', "We'd Love to Hear")}</span> {L('ממכם', 'From You')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
              {L('מלאו את הטופס ונחזור אליכם תוך 24 שעות', "Fill out the form and we'll get back to you within 24 hours")}
            </p>
          </Fade>

          <div className="grid-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Info column */}
            <Fade delay={0}>
              <div>
                <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
                  {L('יצירת קשר ישיר', 'Direct Contact')}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    { icon: '📞', label: L('טלפון', 'Phone'),    value: '055-727-5195',           href: 'tel:+972557275195' },
                    { icon: '✉️', label: L('אימייל', 'Email'),   value: 'starmedia994@gmail.com', href: 'mailto:starmedia994@gmail.com' },
                    { icon: '💬', label: 'WhatsApp',              value: L('שלחו הודעה', 'Send a message'), href: 'https://wa.me/972557275195' },
                    { icon: '📍', label: L('מיקום', 'Location'), value: L('ישראל', 'Israel'),     href: undefined },
                  ].map(({ icon, label, value, href }) => (
                    <a key={label} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.08)', borderRadius: '14px', textDecoration: 'none', cursor: href ? 'pointer' : 'default' }}>
                      <span style={{ fontSize: '1.3rem', width: 36, textAlign: 'center', flexShrink: 0 }}>{icon}</span>
                      <div>
                        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.68rem', marginBottom: '2px', letterSpacing: '0.05em' }}>{label}</div>
                        <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', fontWeight: 500 }}>{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Fade>

            {/* Form column */}
            <Fade delay={0.12}>
              <form onSubmit={submit} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.12)', borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <input required className="input-dark" placeholder={L('שם מלא', 'Full Name')} value={form.name} onChange={set('name')} />
                  <input required className="input-dark" placeholder={L('טלפון', 'Phone')} type="tel" value={form.phone} onChange={set('phone')} />
                </div>
                <input className="input-dark" placeholder={L('אימייל', 'Email')} type="email" value={form.email} onChange={set('email')} />
                <select className="input-dark" value={form.service} onChange={set('service')}>
                  <option value="">{L('בחרו שירות', 'Choose a Service')}</option>
                  {lang === 'he'
                    ? ['AI Video', 'סוכני AI', 'אוטומציות', 'בניית אתרים', 'קורסים', 'אחר'].map(s => <option key={s}>{s}</option>)
                    : ['AI Video', 'AI Agents', 'Automations', 'Web Development', 'Courses', 'Other'].map(s => <option key={s}>{s}</option>)
                  }
                </select>
                <textarea required className="input-dark" placeholder={L('ספרו לנו על הפרויקט...', 'Tell us about your project...')} rows={4}
                  value={form.message} onChange={set('message')} style={{ resize: 'none' }} />

                {status === 'done' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.85rem' }}>
                    <Check size={16} /> {L('הודעה נשלחה! נחזור אליכם בקרוב.', 'Message sent! We\'ll get back to you soon.')}
                  </div>
                )}
                {status === 'err' && (
                  <p style={{ color: '#f87171', fontSize: '0.85rem' }}>{L('שגיאה בשליחה, נסו שוב.', 'Error sending, please try again.')}</p>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-gold"
                  style={{ padding: '1rem', borderRadius: '14px', fontSize: '0.9rem', opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer', width: '100%' }}>
                  <Send size={16} />
                  {status === 'sending' ? L('שולח...', 'Sending...') : L('שליחה', 'Send')}
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </section>

    </div>
  )
}
