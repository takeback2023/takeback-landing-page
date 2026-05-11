import { useState, useEffect } from 'react'

const s = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: scrolled ? '12px 64px' : '24px 64px',
    background: scrolled ? 'rgba(250,247,242,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(26,58,36,0.08)' : 'none',
    transition: 'all 0.35s ease',
  }),
  logo: { fontFamily: "'Fraunces',serif", fontSize: 22, fontWeight: 700, color: '#1a3a24', cursor: 'pointer' },
  logoSpan: { color: '#52b788' },
  links: { display: 'flex', alignItems: 'center', gap: 36 },
  link: { fontSize: 13, fontWeight: 500, color: '#5a7063', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' },
  cta: {
    background: '#1a3a24', color: '#fff', padding: '9px 22px',
    borderRadius: 100, fontSize: 13, fontWeight: 500,
    border: 'none', cursor: 'pointer', transition: 'all 0.2s',
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav style={s.nav(scrolled)}>
      <div style={s.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Take<span style={s.logoSpan}>back</span>
      </div>
      <div style={s.links}>
        {[['how','How it works'],['impact','Our impact'],['why','Why Takeback'],['instagram','Community']].map(([id,label]) => (
          <span key={id} style={s.link} onClick={() => scrollTo(id)}
            onMouseEnter={e => e.target.style.color='#1a3a24'}
            onMouseLeave={e => e.target.style.color='#5a7063'}>
            {label}
          </span>
        ))}
      </div>
      <button style={s.cta} onClick={() => scrollTo('connect')}
        onMouseEnter={e => { e.target.style.background='#2d6a4f'; e.target.style.transform='translateY(-1px)' }}
        onMouseLeave={e => { e.target.style.background='#1a3a24'; e.target.style.transform='none' }}>
        Connect with us
      </button>
    </nav>
  )
}
