import { useReveal } from '../hooks/useReveal'

const cards = [
  { icon:'💸', title:'Earn while you help the planet', desc:'Get cashback every time you return a cup. Sustainability that actually rewards you.', dark:true },
  { icon:'📱', title:'No app needed — ever', desc:'Enter the cup code on our website, sign in with Google. Works on any phone or browser. Zero friction.' },
  { icon:'🔄', title:'Return anywhere, anytime', desc:"You don't have to return where you borrowed. Any partner location accepts any Takeback cup." },
  { icon:'✨', title:'Cleaner than disposables', desc:'Every Takeback cup is professionally washed and sanitised before each use — cleaner than a paper cup.' },
  { icon:'🌱', title:'Real environmental impact', desc:'With 10,000+ cups in circulation, the collective impact adds up fast. We track every cup saved.' },
  { icon:'🔒', title:'Secure & instant payments', desc:'Wallet recharge via UPI, cards and netbanking. Your cashback hits your wallet immediately.' },
]

export default function Why() {
  const [ref, visible] = useReveal()
  return (
    <section id="why" style={{padding:'100px 64px',background:'#fff',borderTop:'1px solid rgba(26,58,36,0.08)'}}>
      <div style={{textAlign:'center',marginBottom:56,opacity:visible?1:0,transform:visible?'none':'translateY(24px)',transition:'all 0.7s ease'}} ref={ref}>
        <span style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:'uppercase',color:'#52b788',display:'block',marginBottom:12}}>Why us</span>
        <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(32px,4vw,52px)',fontWeight:600,lineHeight:1.1,letterSpacing:'-1px',color:'#1a3a24',maxWidth:480,margin:'0 auto'}}>
          Why you'll love Takeback
        </h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,maxWidth:1100,margin:'0 auto'}} className="why-grid">
        {cards.map((c,i) => (
          <div key={i} style={{
            padding:36,borderRadius:20,
            background: c.dark ? '#1a3a24' : '#faf7f2',
            border:`1px solid ${c.dark ? '#1a3a24' : 'rgba(26,58,36,0.1)'}`,
            transition:'all 0.25s',cursor:'default',
          }}
          onMouseEnter={e=>{if(!c.dark){e.currentTarget.style.borderColor='#52b788';e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(26,58,36,0.08)'}}}
          onMouseLeave={e=>{if(!c.dark){e.currentTarget.style.borderColor='rgba(26,58,36,0.1)';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}}>
            <span style={{fontSize:28,display:'block',marginBottom:20}}>{c.icon}</span>
            <h3 style={{fontSize:17,fontWeight:600,color:c.dark?'#fff':'#1a3a24',marginBottom:10,lineHeight:1.3}}>{c.title}</h3>
            <p style={{fontSize:14,color:c.dark?'rgba(255,255,255,0.6)':'#5a7063',lineHeight:1.7,fontWeight:300}}>{c.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:900px){
          #why { padding: 80px 32px !important; }
          .why-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:540px){
          #why { padding: 80px 20px !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}