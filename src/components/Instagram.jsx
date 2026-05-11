import { useReveal } from '../hooks/useReveal'

const placeholders = [
  { bg:'linear-gradient(135deg,#d8f3dc,#52b788)', icon:'🍃' },
  { bg:'linear-gradient(135deg,#2d6a4f,#1a3a24)', icon:'☕' },
  { bg:'linear-gradient(135deg,#52b788,#2d6a4f)', icon:'♻️' },
  { bg:'linear-gradient(135deg,#1a3a24,#2d6a4f)', icon:'🌍' },
]

export default function Instagram() {
  const [ref, visible] = useReveal()
  return (
    <section id="instagram" style={{padding:'100px 64px',background:'#faf7f2',borderTop:'1px solid rgba(26,58,36,0.08)'}}>
      <div style={{textAlign:'center',marginBottom:48,opacity:visible?1:0,transform:visible?'none':'translateY(24px)',transition:'all 0.7s ease'}} ref={ref}>
        <span style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:'uppercase',color:'#52b788',display:'block',marginBottom:12}}>Community</span>
        <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:600,lineHeight:1.1,letterSpacing:'-1px',color:'#1a3a24',maxWidth:400,margin:'0 auto 16px'}}>
          Follow our journey
        </h2>
        <p style={{fontSize:15,color:'#5a7063',fontWeight:300}}>Tag us at <strong style={{color:'#2d6a4f'}}>@gotakeback</strong> when you borrow or return</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12,maxWidth:880,margin:'0 auto 40px'}} className="insta-grid">
        {placeholders.map((p,i) => (
          <div key={i} style={{
            aspectRatio:'1',borderRadius:16,background:p.bg,
            display:'flex',alignItems:'center',justifyContent:'center',
            fontSize:40,opacity:0.7,cursor:'pointer',
            transition:'transform 0.2s,opacity 0.2s',overflow:'hidden',position:'relative',
          }}
          onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.04)';e.currentTarget.style.opacity='1'}}
          onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.opacity='0.7'}}>
            {p.icon}
          </div>
        ))}
      </div>
      <div style={{textAlign:'center'}}>
        <a href="https://www.instagram.com/gotakeback/" target="_blank" rel="noopener noreferrer" style={{
          display:'inline-flex',alignItems:'center',gap:8,
          background:'#1a3a24',color:'#fff',
          padding:'14px 28px',borderRadius:100,
          fontSize:14,fontWeight:500,textDecoration:'none',
          transition:'all 0.2s',
        }}
        onMouseEnter={e=>{e.currentTarget.style.background='#2d6a4f';e.currentTarget.style.transform='translateY(-2px)'}}
        onMouseLeave={e=>{e.currentTarget.style.background='#1a3a24';e.currentTarget.style.transform='none'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          Follow on Instagram
        </a>
      </div>
      <style>{`
        @media(max-width:768px){
          #instagram { padding: 80px 24px !important; }
          .insta-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:480px){
          #instagram { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  )
}