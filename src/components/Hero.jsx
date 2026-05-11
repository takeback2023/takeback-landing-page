import { useEffect, useRef } from 'react'
import card1 from '/assets/Card1.jpeg'
import card2 from '/assets/Card2.jpeg'
import card3 from '/assets/Card3.jpeg'
import card4 from '/assets/Card4.jpeg'


const cards = [
  {
    w: 280,
    h: 340,
    top: 60,
    left: 60,
    rotate: 0,
    label: 'Borrow',
    shadow: '0 32px 64px rgba(0,0,0,0.22)',
    z: 3,
    image: card1,
  },
  {
    w: 210,
    h: 250,
    top: -10,
    right: 10,
    rotate: 5,
    label: 'Return anywhere',
    shadow: '0 20px 40px rgba(0,0,0,0.16)',
    z: 4,
    image: card3,
  },
  {
    w: 168,
    h: 190,
    bottom: 30,
    left: 10,
    rotate: -4,
    label: 'Instant cashback',
    shadow: '0 14px 28px rgba(0,0,0,0.12)',
    z: 2,
    image: card2,
  },
  {
    w: 148,
    h: 168,
    bottom: 8,
    right: 30,
    rotate: 3,
    label: 'Eco friendly',
    shadow: '0 14px 28px rgba(0,0,0,0.18)',
    z: 2,
    image: card4,
  },
]

export default function Hero() {
  const collageRef = useRef(null)

  useEffect(() => {
    const el = collageRef.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height

      el.querySelectorAll('.card').forEach((card, i) => {
        const depth = [1.5, 2.5, 1, 2][i]

        card.style.transform = `
          rotate(${cards[i].rotate}deg)
          translate(${dx * depth * 8}px, ${dy * depth * 8}px)
        `
      })
    }

    window.addEventListener('mousemove', onMove)

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 64px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 560,
          height: 560,
          borderRadius: '50%',
          background:
            'radial-gradient(circle,rgba(82,183,136,0.09),transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background:
            'radial-gradient(circle,rgba(26,58,36,0.04),transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#d8f3dc',
              color: '#2d6a4f',
              padding: '5px 14px',
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#52b788',
                animation: 'pulse 2s infinite',
                display: 'inline-block',
              }}
            />
            India's reusable cup movement
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(48px,7.5vw,96px)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-3px',
              color: '#1a3a24',
              marginBottom: 32,
            }}
          >
            Borrow
            <br />
            <em style={{ color: '#52b788', fontStyle: 'italic' }}>
              a cup.
            </em>
            <br />
            Return
            <br />
            kind.
          </h1>

          <p
            style={{
              fontSize: 16,
              color: '#5a7063',
              fontWeight: 300,
              maxWidth: 380,
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Borrow a reusable cup, enjoy your drink, and return it at any
            partner location. No app needed — just scan and go.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              marginBottom: 36,
            }}
          >
            <button
              onClick={() => scrollTo('how')}
              style={{
                background: '#1a3a24',
                color: '#fff',
                padding: '15px 30px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              See how it works
            </button>

            <button
              onClick={() => scrollTo('connect')}
              style={{
                background: 'transparent',
                color: '#1a3a24',
                padding: '15px 30px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 500,
                border: '1.5px solid rgba(26,58,36,0.25)',
                cursor: 'pointer',
              }}
            >
              Connect with us
            </button>
          </div>
        </div>

        {/* RIGHT COLLAGE */}
        <div
          ref={collageRef}
          className="hero-collage"
          style={{
            position: 'relative',
            height: 520,
            width: '100%',
          }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="card"
              style={{
                position: 'absolute',
                width: c.w,
                height: c.h,
                borderRadius: 18,
                ...(c.top !== undefined ? { top: c.top } : {}),
                ...(c.bottom !== undefined ? { bottom: c.bottom } : {}),
                ...(c.left !== undefined ? { left: c.left } : {}),
                ...(c.right !== undefined ? { right: c.right } : {}),
                transform: `rotate(${c.rotate}deg)`,
                boxShadow: c.shadow,
                zIndex: c.z,
                overflow: 'hidden',
                transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
              }}
            >
              <img
                src={c.image}
                alt={c.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: 12,
                  left: 12,
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 600,
                  background: 'rgba(0,0,0,0.35)',
                  padding: '4px 10px',
                  borderRadius: 100,
                  backdropFilter: 'blur(6px)',
                }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1 }
          50% { opacity:0.4 }
        }

        @media(max-width:900px){
          section {
            padding: 90px 32px 60px !important;
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .hero-collage {
            height: 320px !important;
          }
        }

        @media(max-width:480px){
          section {
            padding: 80px 20px 60px !important;
          }

          .hero-collage {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  )
}