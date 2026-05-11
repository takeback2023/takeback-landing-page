import { useReveal } from '../hooks/useReveal'

const problems = [
  { icon:'🌍', title:'15 billion cups wasted yearly', desc:'India generates staggering cup waste annually — the vast majority ending up in landfills or waterways.' },
  { icon:'⏳', title:'30 years to decompose', desc:'A single disposable cup takes three decades to break down. The coffee is gone in minutes — the damage lasts decades.' },
  { icon:'♻️', title:'Less than 1% recycled', desc:'The plastic lining makes most paper cups unrecyclable. They look green — they\'re not.' },
]

export default function Problem() {
  const [ref, visible] = useReveal()
  return (
    <section style={{padding:'100px 64px',background:'#fff',borderTop:'1px solid rgba(26,58,36,0.08)'}}>
      <div ref={ref} style={{
        maxWidth:1100,margin:'0 auto',
        display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'center',
        opacity: visible?1:0, transform: visible?'none':'translateY(28px)',
        transition:'all 0.8s ease',
      }}>
        <div>
          <span style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:'uppercase',color:'#52b788',display:'block',marginBottom:16}}>The problem</span>
          <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(32px,4vw,48px)',fontWeight:600,lineHeight:1.1,letterSpacing:'-1px',color:'#1a3a24',marginBottom:20}}>
            15 billion cups.<br/>One year. India.
          </h2>
          <p style={{fontSize:16,color:'#5a7063',lineHeight:1.8,fontWeight:300}}>
            We're drowning in disposable cups. Most people want to do better — they just forget their reusable cup, or find it inconvenient. Takeback makes doing the right thing the easiest thing.
          </p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          {problems.map((p,i) => (
            <div key={i} style={{
              background:'#faf7f2',border:'1px solid rgba(26,58,36,0.1)',borderRadius:16,
              padding:'24px',display:'flex',gap:20,alignItems:'flex-start',
              transition:'all 0.2s',cursor:'default',
              transitionDelay:`${i*0.1}s`,
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.borderColor='#52b788'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='rgba(26,58,36,0.1)'}}>
              <div style={{width:44,height:44,borderRadius:12,background:'#d8f3dc',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>{p.icon}</div>
              <div>
                <h4 style={{fontSize:15,fontWeight:600,color:'#1a3a24',marginBottom:6}}>{p.title}</h4>
                <p style={{fontSize:13,color:'#5a7063',lineHeight:1.6,fontWeight:300}}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
