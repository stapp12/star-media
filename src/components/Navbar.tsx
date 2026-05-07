import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function Navbar() {
  const { lang, setLang, dir } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: L('שירותים', 'Services'),       href: '/#services' },
    { label: L('אתרים', 'Websites'),         href: '/#websites' },
    { label: L('קורסים', 'Courses'),         href: '/#courses' },
    { label: L('Social Selling', 'Social Selling'), href: '/social-selling' },
    { label: L('צור קשר', 'Contact'),        href: '/#contact' },
  ]

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    transition: 'all 0.4s ease',
    background: scrolled ? 'rgba(6,6,6,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(212,175,55,0.1)' : '1px solid transparent',
    padding: scrolled ? '0.75rem 0' : '1.25rem 0',
  }

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', fontWeight: 500,
    textDecoration: 'none', transition: 'color 0.2s ease',
  }

  return (
    <nav style={navStyle} dir={dir}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Star Media" style={{ height: '36px', width: '36px', objectFit: 'contain' }} />
          <span className="gold-text-static font-display" style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>
            STAR MEDIA
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={linkStyle}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#d4af37' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)' }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Lang toggle + mobile burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px', padding: '3px' }}>
            {(['he','en'] as const).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: '0.25rem 0.75rem', borderRadius: '999px', border: 'none', cursor: 'pointer',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em', transition: 'all 0.2s ease',
                background: lang === l ? '#d4af37' : 'transparent',
                color: lang === l ? '#0a0600' : 'rgba(255,255,255,0.45)',
              }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'none' }} className="show-mobile">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(6,6,6,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(212,175,55,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', fontWeight: 500, textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
