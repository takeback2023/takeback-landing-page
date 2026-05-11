import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: scrolled ? '12px 64px' : '24px 64px',
    background: scrolled ? 'rgba(250,247,242,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(26,58,36,0.08)' : 'none',
    transition: 'all 0.35s ease',
  }

  return (
    <>
      <nav style={navStyle} className="main-nav">
        <div
          style={{ fontFamily: "'Fraunces',serif", fontSize: 22, fontWeight: 700, color: '#1a3a24', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Take<span style={{ color: '#52b788' }}>back</span>
        </div>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {[['how','How it works'],['impact','Our impact'],['why','Why Takeback'],['instagram','Community']].map(([id,label]) => (
            <span key={id}
              style={{ fontSize: 13, fontWeight: 500, color: '#5a7063', cursor: 'pointer', transition: 'color 0.2s' }}
              onClick={() => scrollTo(id)}
              onMouseEnter={e => e.target.style.color='#1a3a24'}
              onMouseLeave={e => e.target.style.color='#5a7063'}>
              {label}
            </span>
          ))}
          <button
            style={{ background: '#1a3a24', color: '#fff', padding: '9px 22px', borderRadius: 100, fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
            onClick={() => scrollTo('connect')}
            onMouseEnter={e => { e.target.style.background='#2d6a4f'; e.target.style.transform='translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background='#1a3a24'; e.target.style.transform='none' }}>
            Connect with us
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4,
        }}>
          <span style={{ width: 22, height: 2, background: '#1a3a24', display: 'block', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }}/>
          <span style={{ width: 22, height: 2, background: '#1a3a24', display: 'block', borderRadius: 2, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }}/>
          <span style={{ width: 22, height: 2, background: '#1a3a24', display: 'block', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}/>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
          background: 'rgba(250,247,242,0.98)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(26,58,36,0.1)',
          padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16,
        }} className="mobile-menu">
          {[['how','How it works'],['impact','Our impact'],['why','Why Takeback'],['instagram','Community']].map(([id,label]) => (
            <span key={id} onClick={() => scrollTo(id)} style={{
              fontSize: 16, fontWeight: 500, color: '#1a3a24', cursor: 'pointer', padding: '8px 0',
              borderBottom: '1px solid rgba(26,58,36,0.07)',
            }}>{label}</span>
          ))}
          <button onClick={() => scrollTo('connect')} style={{
            background: '#1a3a24', color: '#fff', padding: '12px 22px', borderRadius: 100,
            fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer', marginTop: 4,
          }}>Connect with us</button>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .main-nav { padding: 14px 20px !important; }
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}