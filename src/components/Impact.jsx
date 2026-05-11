import { useReveal } from '../hooks/useReveal'

const stats = [
  { num:'10K+', label:'Cups in\ncirculation' },
  { num:'3K+',  label:'Successful\nreturns' },
  { num:'1K+',  label:'Members\njoined' },
  { num:'15K+', label:'Disposable cups\nsaved' },
]

export default function Impact() {
  const [ref, visible] = useReveal()
  return (
    <section id="impact" style={{padding:'100px 64px',background:'#1a3a24',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:-60,right:-60,width:400,height:400,borderRadius:'50%',background:'rgba(82,183,136,0.07)',pointerEvents:'none'}}/>
      <div style={{textAlign:'center',marginBottom:52,opacity:visible?1:0,transform:visible?'none':'translateY(24px)',transition:'all 0.7s ease'}} ref={ref}>
        <span style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:'uppercase',color:'#52b788',display:'block',marginBottom:12}}>Our impact</span>
        <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(32px,4vw,52px)',fontWeight:600,lineHeight:1.1,letterSpacing:'-1px',color:'#fff',maxWidth:480,margin:'0 auto'}}>
          Every return counts
        </h2>
      </div>
      <div style={{
        display:'grid',gridTemplateColumns:'repeat(4,1fr)',
        maxWidth:900,margin:'0 auto',
        background:'rgba(255,255,255,0.06)',borderRadius:20,overflow:'hidden',
        border:'1px solid rgba(255,255,255,0.1)',
      }}>
        {stats.map((s,i) => (
          <div key={i} style={{padding:'40px 24px',textAlign:'center',transition:'background 0.2s',cursor:'default',borderRight:i<3?'1px solid rgba(255,255,255,0.08)':'none'}}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}
            onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
            <div style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(36px,4vw,52px)',fontWeight:700,color:'#fff',lineHeight:1,marginBottom:10}}>{s.num}</div>
            <div style={{fontSize:13,color:'rgba(255,255,255,0.5)',fontWeight:300,lineHeight:1.5,whiteSpace:'pre-line'}}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
