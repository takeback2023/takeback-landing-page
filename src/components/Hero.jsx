import { useEffect, useRef } from 'react'

const cards = [
  {
    w:280,h:340,bg:'linear-gradient(135deg,#2d6a4f,#1a3a24)',
    top:60,left:60,rotate:0,label:'Borrow',icon:'☕',
    shadow:'0 32px 64px rgba(0,0,0,0.22)',z:3,iconColor:'rgba(255,255,255,0.2)',
  },
  {
    w:210,h:250,bg:'linear-gradient(145deg,#52b788,#2d6a4f)',
    top:-10,right:10,rotate:5,label:'Return anywhere',icon:'♻️',
    shadow:'0 20px 40px rgba(0,0,0,0.16)',z:4,iconColor:'rgba(255,255,255,0.18)',
  },
  {
    w:168,h:190,bg:'linear-gradient(135deg,#c7efd4,#52b788)',
    bottom:30,left:10,rotate:-4,label:'₹50 back',icon:'💸',
    shadow:'0 14px 28px rgba(0,0,0,0.12)',z:2,iconColor:'rgba(26,58,36,0.18)',
  },
  {
    w:148,h:168,bg:'linear-gradient(135deg,#0f1a12,#1a3a24)',
    bottom:8,right:30,rotate:3,label:'Eco friendly',icon:'🌿',
    shadow:'0 14px 28px rgba(0,0,0,0.18)',z:2,iconColor:'rgba(255,255,255,0.12)',
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
        card.style.transform = `rotate(${cards[i].rotate}deg) translate(${dx * depth * 8}px, ${dy * depth * 8}px)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 64px 60px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background blob */}
      <div style={{
        position:'absolute',top:-120,right:-120,
        width:560,height:560,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(82,183,136,0.09),transparent 70%)',
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute',bottom:-80,left:-80,
        width:360,height:360,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(26,58,36,0.04),transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div style={{
        maxWidth:1200,margin:'0 auto',width:'100%',
        display:'grid',gridTemplateColumns:'1fr 1fr',
        gap:40,alignItems:'center',
      }}>

        {/* LEFT TEXT */}
        <div>
          <div style={{
            display:'inline-flex',alignItems:'center',gap:8,
            background:'#d8f3dc',color:'#2d6a4f',
            padding:'5px 14px',borderRadius:100,
            fontSize:11,fontWeight:600,letterSpacing:2,
            textTransform:'uppercase',marginBottom:28,
          }}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#52b788',animation:'pulse 2s infinite',display:'inline-block'}}/>
            India's reusable cup movement
          </div>

          <h1 style={{
            fontFamily:"'Fraunces',serif",
            fontSize:'clamp(56px,7.5vw,96px)',
            fontWeight:700,lineHeight:0.95,
            letterSpacing:'-3px',color:'#1a3a24',
            marginBottom:32,
          }}>
            Borrow<br/>
            <em style={{color:'#52b788',fontStyle:'italic'}}>a cup.</em><br/>
            Return<br/>
            kind.
          </h1>

          <p style={{
            fontSize:16,color:'#5a7063',fontWeight:300,
            maxWidth:380,lineHeight:1.75,marginBottom:40,
          }}>
            Borrow a reusable cup for ₹150. Return any cup anywhere and get ₹50 back instantly. No app needed — just scan and go.
          </p>

          <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:36}}>
            <button onClick={() => scrollTo('how')} style={{
              background:'#1a3a24',color:'#fff',
              padding:'15px 30px',borderRadius:100,
              fontSize:14,fontWeight:500,border:'none',cursor:'pointer',
              display:'flex',alignItems:'center',gap:8,
              transition:'all 0.25s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.background='#2d6a4f';e.currentTarget.style.transform='translateY(-2px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#1a3a24';e.currentTarget.style.transform='none'}}>
              See how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={() => scrollTo('connect')} style={{
              background:'transparent',color:'#1a3a24',
              padding:'15px 30px',borderRadius:100,
              fontSize:14,fontWeight:500,
              border:'1.5px solid rgba(26,58,36,0.25)',cursor:'pointer',
              transition:'all 0.25s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='#1a3a24';e.currentTarget.style.background='rgba(26,58,36,0.04)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(26,58,36,0.25)';e.currentTarget.style.background='transparent'}}>
              Connect with us
            </button>
          </div>

          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {['10,000+ cups','1,050+ members','₹50 cashback'].map(stat => (
              <span key={stat} style={{
                background:'#d8f3dc',color:'#2d6a4f',
                padding:'6px 14px',borderRadius:100,
                fontSize:12,fontWeight:500,
              }}>{stat}</span>
            ))}
          </div>
        </div>

        {/* RIGHT COLLAGE */}
        <div ref={collageRef} style={{position:'relative',height:520,width:'100%'}}>
          {cards.map((c,i) => (
            <div key={i} className="card" style={{
              position:'absolute',
              width:c.w,height:c.h,
              background:c.bg,
              borderRadius:20,
              ...(c.top !== undefined ? {top:c.top} : {}),
              ...(c.bottom !== undefined ? {bottom:c.bottom} : {}),
              ...(c.left !== undefined ? {left:c.left} : {}),
              ...(c.right !== undefined ? {right:c.right} : {}),
              transform:`rotate(${c.rotate}deg)`,
              boxShadow:c.shadow,
              zIndex:c.z,
              overflow:'hidden',
              transition:'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
              cursor:'default',
            }}>
              <div style={{
                position:'absolute',top:'50%',left:'50%',
                transform:'translate(-50%,-60%)',
                fontSize:c.w * 0.28,
                color:c.iconColor,
                userSelect:'none',
              }}>{c.icon}</div>
              <div style={{
                position:'absolute',bottom:16,left:16,
                color: i===2 ? '#1a3a24' : '#fff',
                fontSize:12,fontWeight:600,
                background: i===2 ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.2)',
                padding:'4px 10px',borderRadius:100,
                backdropFilter:'blur(4px)',
              }}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute',bottom:32,left:'50%',transform:'translateX(-50%)',
        display:'flex',flexDirection:'column',alignItems:'center',gap:6,
        cursor:'pointer',opacity:0.5,
      }} onClick={() => scrollTo('how')}>
        <span style={{fontSize:11,color:'#5a7063',letterSpacing:1,textTransform:'uppercase'}}>Scroll</span>
        <div style={{animation:'bounce 1.8s ease infinite'}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="#5a7063" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        @media(max-width:768px){
          section { padding: 90px 20px 60px !important; }
          section > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
