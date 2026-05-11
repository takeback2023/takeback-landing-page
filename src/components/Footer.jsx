const scrollTo = (id) => {
  if (id === 'top') return window.scrollTo({ top: 0, behavior: 'smooth' })
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{background:'#0f1a12',color:'rgba(255,255,255,0.45)',padding:'48px 64px 32px'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:32,paddingBottom:32,borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
          <div>
            <div style={{fontFamily:"'Fraunces',serif",fontSize:20,color:'#fff',fontWeight:700,marginBottom:6,cursor:'pointer'}} onClick={()=>scrollTo('top')}>
              Take<span style={{color:'#52b788'}}>back</span>
            </div>
            <div style={{fontSize:13,fontWeight:300}}>Borrow smart. Return kind. 🍃</div>
          </div>
          <div style={{display:'flex',gap:32,flexWrap:'wrap'}}>
            {[['how','How it works'],['impact','Our impact'],['why','Why Takeback'],['instagram','Community'],['connect','Contact']].map(([id,label])=>(
              <span key={id} onClick={()=>scrollTo(id)} style={{fontSize:13,color:'rgba(255,255,255,0.45)',cursor:'pointer',transition:'color 0.2s',textDecoration:'none'}}
                onMouseEnter={e=>e.target.style.color='#fff'}
                onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>
                {label}
              </span>
            ))}
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12,marginTop:24,fontSize:12}}>
          <span>© 2025 Takeback. All rights reserved.</span>
          <span style={{color:'rgba(255,255,255,0.25)'}}>Made with 🍃 in India</span>
        </div>
      </div>
    </footer>
  )
}
