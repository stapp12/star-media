import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import SEOHead from '../../components/SEOHead'

interface Section { title: string; content: string; emoji?: string }
interface Props {
  emoji: string; title: string; subtitle: string; description: string
  badge: 'free' | 'paid'; sections: Section[]; ctaText?: string; ctaHref?: string
}

export default function GuidePage({ emoji, title, subtitle, description, badge, sections, ctaText, ctaHref }: Props) {
  const { dir } = useLang()
  const navigate = useNavigate()
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  const goToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#')) return
    e.preventDefault()
    const section = href.slice(2)
    navigate('/')
    setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }), 150)
  }

  return (
    <div dir={dir} style={{ background: '#060606', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '5rem' }}>
      <SEOHead
        title={`${title} | Star Media`}
        description={description}
      />

      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            style={{ marginBottom: '1rem' }}>
            <span className={badge==='free' ? 'badge-free' : 'badge-paid'}>
              {badge === 'free' ? '🎁 חינם לגמרי' : '⭐ פרימיום'}
            </span>
          </motion.div>
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, delay:0.1 }}
            style={{ fontSize: '5rem', margin: '1rem 0', lineHeight: 1 }}>{emoji}</motion.div>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
            className="font-display gold-text"
            style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            {title}
          </motion.h1>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
            style={{ color: '#d4af37', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>{subtitle}</motion.p>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }}
            style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto' }}>{description}</motion.p>
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {sections.map((sec, i) => (
          <motion.div key={i}
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:'-40px' }}
            transition={{ duration:0.6, delay:i*0.05, ease:[0.22,1,0.36,1] }}
            className="card-glass"
            style={{ borderRadius: '20px', padding: '1.75rem 2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            {sec.emoji && <div style={{ fontSize:'1.8rem', lineHeight:1, flexShrink:0, marginTop:'0.15rem' }}>{sec.emoji}</div>}
            <div>
              <h2 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.65rem' }}>{sec.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sec.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ maxWidth: '720px', margin: '3rem auto 0', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ background:'rgba(212,175,55,0.04)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:'24px', padding:'2.5rem', textAlign:'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
          <h3 className="font-display gold-text" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            {dir==='rtl' ? 'רוצה ללמוד עוד?' : 'Want to Learn More?'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            {dir==='rtl' ? 'Star Media מחכה לך עם עוד תוכן, קורסים ושירותים מטורפים.' : 'Star Media is waiting with more amazing content, courses and services.'}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={ctaHref ?? '/#contact'} onClick={e => goToSection(e, ctaHref ?? '/#contact')} className="btn-gold" style={{ padding: '0.75rem 1.75rem', borderRadius: '999px', fontSize: '0.85rem', textDecoration: 'none' }}>
              <Send size={14} />{ctaText ?? (dir==='rtl' ? 'צור קשר עכשיו' : 'Contact Us')}
            </a>
            <a href="/#courses" onClick={e => goToSection(e, '/#courses')} className="btn-ghost-gold" style={{ padding: '0.75rem 1.75rem', borderRadius: '999px', fontSize: '0.85rem', textDecoration: 'none' }}>
              {dir==='rtl' ? 'כל הקורסים' : 'All Courses'} <Arrow size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
