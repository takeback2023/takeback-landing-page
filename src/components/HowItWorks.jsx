import { useReveal } from '../hooks/useReveal'

const steps = [
  { num:'1', title:'Scan & Borrow', desc:'Find the code on any Takeback cup, enter it on our platform, sign in with Google and pay ₹150 from your wallet.', tag:'No app needed' },
  { num:'2', title:'Enjoy Your Drink', desc:'Use the cup wherever you go. Durable, clean and professionally washed before every use.', tag:'Premium quality' },
  { num:'3', title:'Return & Earn', desc:'Return any Takeback cup at any partner location. Scan the QR, confirm — and get ₹50 added to your wallet instantly.', tag:'₹50 cashback' },
]

export default function HowItWorks() {
  const [ref, visible] = useReveal()
  return (
    <section id="how" style={{padding:'100px 64px',background:'#faf7f2'}}>
      <div style={{textAlign:'center',marginBottom:64,opacity:visible?1:0,transform:visible?'none':'translateY(24px)',transition:'all 0.7s ease'}} ref={ref}>
        <span style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:'uppercase',color:'#52b788',display:'block',marginBottom:12}}>The system</span>
        <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(32px,4vw,52px)',fontWeight:600,lineHeight:1.1,letterSpacing:'-1px',color:'#1a3a24',maxWidth:520,margin:'0 auto'}}>
          Three steps to a cleaner world
        </h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32,maxWidth:960,margin:'0 auto',position:'relative'}}>
        <div style={{position:'absolute',top:40,left:'calc(16.66% + 20px)',right:'calc(16.66% + 20px)',height:1,background:'rgba(26,58,36,0.1)'}}/>
        {steps.map((s,i) => (
          <div key={i} style={{textAlign:'center',position:'relative',zIndex:1}}>
            <div style={{
              width:80,height:80,borderRadius:'50%',background:'#1a3a24',color:'#fff',
              display:'flex',alignItems:'center',justifyContent:'center',
              fontFamily:"'Fraunces',serif",fontSize:28,fontWeight:600,
              margin:'0 auto 24px',
              boxShadow:'0 0 0 8px #faf7f2,0 0 0 9px rgba(26,58,36,0.12)',
              transition:'all 0.2s',cursor:'default',
            }}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 0 0 8px #faf7f2,0 0 0 9px #52b788';e.currentTarget.style.transform='scale(1.06)'}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow='0 0 0 8px #faf7f2,0 0 0 9px rgba(26,58,36,0.12)';e.currentTarget.style.transform='none'}}>
              {s.num}
            </div>
            <h3 style={{fontSize:18,fontWeight:600,color:'#1a3a24',marginBottom:10}}>{s.title}</h3>
            <p style={{fontSize:14,color:'#5a7063',lineHeight:1.7,fontWeight:300,marginBottom:14}}>{s.desc}</p>
            <span style={{display:'inline-block',background:'#d8f3dc',color:'#2d6a4f',padding:'4px 14px',borderRadius:100,fontSize:12,fontWeight:500}}>{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
