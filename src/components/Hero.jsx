import { useEffect, useRef } from 'react'

import img1 from '/assets/Card1.jpeg'
import img2 from '/assets/Card2.jpeg'
import img3 from '/assets/Card3.jpeg'
import img4 from '/assets/Card4.jpeg'

export default function Hero() {
  const collageRef = useRef(null)

  useEffect(() => {
    const el = collageRef.current
    if (!el) return
    const rotates = [-5, 3, -2, 5]
    const depths  = [1, 1.8, 1.4, 0.8]
    const onMove  = (e) => {
      const cards = el.querySelectorAll('.hcard')
      const rect  = el.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width  / 2)) / rect.width
      const dy = (e.clientY - (rect.top  + rect.height / 2)) / rect.height
      cards.forEach((card, i) => {
        card.style.transform = `rotate(${rotates[i]}deg) translate(${dx * depths[i] * 10}px, ${dy * depths[i] * 10}px)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const images = [img1, img2, img3, img4]
  const labels = ['Borrow', 'Return anywhere', 'Community', 'Impact']

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 64px 60px',
      position: 'relative',
      overflow: 'hidden',
      background: '#faf7f2',
    }}>

      {/* Background blobs */}
      <div style={{ position:'absolute', top:-120, right:-120, width:560, height:560, borderRadius:'50%', background:'radial-gradient(circle,rgba(82,183,136,0.09),transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-80, left:-80, width:360, height:360, borderRadius:'50%', background:'radial-gradient(circle,rgba(26,58,36,0.04),transparent 70%)', pointerEvents:'none' }} />

      {/* ── DESKTOP: two-column ── */}
      <div className="hero-desktop" style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 48, alignItems: 'center',
      }}>

        {/* LEFT: text */}
        <div>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'#d8f3dc', color:'#2d6a4f',
            padding:'5px 14px', borderRadius:100,
            fontSize:11, fontWeight:600, letterSpacing:2,
            textTransform:'uppercase', marginBottom:28,
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#52b788', animation:'pulse 2s infinite', display:'inline-block' }} />
            India's reusable cup movement
          </div>

          <h1 style={{
            fontFamily:"'Fraunces',serif",
            fontSize:'clamp(48px,6vw,84px)',
            fontWeight:700, lineHeight:0.95,
            letterSpacing:'-3px', color:'#1a3a24',
            marginBottom:28,
          }}>
            Borrow<br />
            <em style={{ color:'#52b788', fontStyle:'italic' }}>a cup.</em><br />
            Return<br />
            kind.
          </h1>

          <p style={{
            fontSize:16, color:'#5a7063', fontWeight:300,
            maxWidth:400, lineHeight:1.8, marginBottom:40,
          }}>
            Borrow a reusable cup, enjoy your drink, and return it at any partner location across India. No app needed — just scan and go.
          </p>

          <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:36 }}>
            <button onClick={() => scrollTo('how')} style={{
              background:'#1a3a24', color:'#fff',
              padding:'15px 30px', borderRadius:100,
              fontSize:14, fontWeight:500, border:'none', cursor:'pointer',
              display:'flex', alignItems:'center', gap:8,
              transition:'all 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background='#2d6a4f'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background='#1a3a24'; e.currentTarget.style.transform='none' }}>
              See how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => scrollTo('connect')} style={{
              background:'transparent', color:'#1a3a24',
              padding:'15px 30px', borderRadius:100,
              fontSize:14, fontWeight:500,
              border:'1.5px solid rgba(26,58,36,0.25)', cursor:'pointer',
              transition:'all 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='#1a3a24'; e.currentTarget.style.background='rgba(26,58,36,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(26,58,36,0.25)'; e.currentTarget.style.background='transparent' }}>
              Connect with us
            </button>
          </div>

          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {['10,000+ cups', '1,050+ members', 'Instant cashback'].map(stat => (
              <span key={stat} style={{
                background:'#d8f3dc', color:'#2d6a4f',
                padding:'6px 14px', borderRadius:100,
                fontSize:12, fontWeight:500,
              }}>{stat}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: 2×2 grid with slight rotations — no overflow */}
        <div
          ref={collageRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            padding: '20px',
          }}
        >
          {images.map((src, i) => {
            const rotates = [-3, 2, 2, -3]
            return (
              <div key={i} className="hcard" style={{
                borderRadius: 20,
                overflow: 'hidden',
                aspectRatio: '3/4',
                boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
                position: 'relative',
                transform: `rotate(${rotates[i]}deg)`,
                transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1)',
                // alternate vertical offset for a staggered feel
                marginTop: i % 2 === 0 ? 0 : 24,
              }}>
                <img src={src} alt={labels[i]} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                <div style={{
                  position:'absolute', bottom:12, left:12,
                  background:'rgba(0,0,0,0.32)', backdropFilter:'blur(6px)',
                  color:'#fff', fontSize:11, fontWeight:600,
                  padding:'3px 10px', borderRadius:100,
                }}>{labels[i]}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── MOBILE: stacked layout ── */}
      <div className="hero-mobile" style={{ display:'none', flexDirection:'column', width:'100%', gap:32 }}>

        <div style={{ textAlign:'center' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'#d8f3dc', color:'#2d6a4f',
            padding:'5px 14px', borderRadius:100,
            fontSize:10, fontWeight:600, letterSpacing:2,
            textTransform:'uppercase', marginBottom:20,
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#52b788', animation:'pulse 2s infinite', display:'inline-block' }} />
            India's reusable cup movement
          </div>

          <h1 style={{
            fontFamily:"'Fraunces',serif",
            fontSize:'clamp(44px,12vw,64px)',
            fontWeight:700, lineHeight:0.95,
            letterSpacing:'-2px', color:'#1a3a24',
            marginBottom:20,
          }}>
            Borrow <em style={{ color:'#52b788', fontStyle:'italic' }}>a cup.</em><br />
            Return kind.
          </h1>

          <p style={{ fontSize:15, color:'#5a7063', fontWeight:300, lineHeight:1.75, marginBottom:28 }}>
            Borrow a reusable cup, enjoy your drink, and return it at any partner location. No app needed — just scan and go.
          </p>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', marginBottom:24 }}>
            <button onClick={() => scrollTo('how')} style={{
              background:'#1a3a24', color:'#fff',
              padding:'14px 26px', borderRadius:100,
              fontSize:14, fontWeight:500, border:'none', cursor:'pointer',
              display:'flex', alignItems:'center', gap:8,
            }}>
              See how it works
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => scrollTo('connect')} style={{
              background:'transparent', color:'#1a3a24',
              padding:'14px 26px', borderRadius:100,
              fontSize:14, fontWeight:500,
              border:'1.5px solid rgba(26,58,36,0.25)', cursor:'pointer',
            }}>
              Connect with us
            </button>
          </div>

          <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center' }}>
            {['10,000+ cups', '1,050+ members', 'Instant cashback'].map(stat => (
              <span key={stat} style={{
                background:'#d8f3dc', color:'#2d6a4f',
                padding:'5px 12px', borderRadius:100,
                fontSize:11, fontWeight:500,
              }}>{stat}</span>
            ))}
          </div>
        </div>

        {/* Clean 2×2 grid, no overlap */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, width:'100%' }}>
          {images.map((src, i) => (
            <div key={i} style={{
              borderRadius:16, overflow:'hidden',
              aspectRatio:'3/4',
              boxShadow:'0 8px 20px rgba(0,0,0,0.12)',
              position:'relative',
            }}>
              <img src={src} alt={labels[i]} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              <div style={{
                position:'absolute', bottom:10, left:10,
                background:'rgba(0,0,0,0.32)', backdropFilter:'blur(6px)',
                color:'#fff', fontSize:10, fontWeight:600,
                padding:'3px 9px', borderRadius:100,
              }}>{labels[i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:6,
        cursor:'pointer', opacity:0.4,
      }} onClick={() => scrollTo('how')}>
        <span style={{ fontSize:10, color:'#5a7063', letterSpacing:1, textTransform:'uppercase' }}>Scroll</span>
        <div style={{ animation:'bounce 1.8s ease infinite' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="#5a7063" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }

        .hero-desktop { display: grid !important; }
        .hero-mobile  { display: none  !important; }

        @media(max-width: 768px) {
          section { padding: 88px 20px 60px !important; }
          .hero-desktop { display: none !important; }
          .hero-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  )
}