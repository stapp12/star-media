import { useLang } from '../context/LangContext'

export default function Footer() {
  const { lang, dir } = useLang()
  const L = (he: string, en: string) => lang === 'he' ? he : en

  const links = [
    { label: L('שירותים', 'Services'), href: '/#services' },
    { label: L('אתרים', 'Websites'),   href: '/#websites' },
    { label: L('קורסים', 'Courses'),   href: '/#courses' },
    { label: L('צור קשר', 'Contact'),  href: '/#contact' },
  ]

  return (
    <footer dir={dir} style={{ borderTop: '1px solid rgba(212,175,55,0.15)', background: '#060606', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>

          {/* Col 1 - Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <img src="/logo.png" alt="Star Media" style={{ height: '36px', width: '36px', objectFit: 'contain' }} />
              <span className="gold-text-static font-display" style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>
                STAR MEDIA
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', lineHeight: 1.65 }}>
              {L('AI לעסקים שרוצים לצמוח - וידאו, אוטומציות, אתרים וקורסים.', 'AI for businesses that want to grow - video, automations, websites and courses.')}
            </p>
          </div>

          {/* Col 2 - Nav */}
          <div>
            <h4 style={{ color: '#d4af37', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {L('ניווט', 'Navigation')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#d4af37' }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Copyright */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', lineHeight: 1.6 }}>
              © {new Date().getFullYear()} Star Media
              <br />
              {L('כל הזכויות שמורות.', 'All rights reserved.')}
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.75rem' }}>
            Star Media - {L('AI לעסקים שרוצים לצמוח', 'AI for businesses that want to grow')}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
