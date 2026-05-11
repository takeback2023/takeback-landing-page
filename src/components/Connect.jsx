import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Connect() {
  const [ref, visible] = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', type:'', message:'' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inp = {
    width:'100%',padding:'14px 18px',
    background:'rgba(255,255,255,0.08)',
    border:'1px solid rgba(255,255,255,0.15)',
    borderRadius:12,color:'#fff',
    fontFamily:"'DM Sans',sans-serif",fontSize:14,
    outline:'none',transition:'border-color 0.2s',
    boxSizing:'border-box',
  }

  const details = [
    { icon:'📸', label:'Instagram', val:'@gotakeback' },
    { icon:'✉️', label:'Email', val:'hello@takeback.in' },
    { icon:'📍', label:'Location', val:'India — expanding city by city' },
  ]

  return (
    <section id="connect" style={{padding:'100px 64px',background:'#1a3a24',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',bottom:-80,left:-80,width:300,height:300,borderRadius:'50%',background:'rgba(82,183,136,0.07)',pointerEvents:'none'}}/>
      <div style={{textAlign:'center',marginBottom:56,opacity:visible?1:0,transform:visible?'none':'translateY(24px)',transition:'all 0.7s ease'}} ref={ref}>
        <span style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:'uppercase',color:'#52b788',display:'block',marginBottom:12}}>Get in touch</span>
        <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(32px,4vw,52px)',fontWeight:600,lineHeight:1.1,letterSpacing:'-1px',color:'#fff',maxWidth:480,margin:'0 auto'}}>
          Connect with us
        </h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,maxWidth:1000,margin:'0 auto',alignItems:'start'}} className="connect-grid">
        <div>
          <h3 style={{fontFamily:"'Fraunces',serif",fontSize:24,fontWeight:600,color:'#fff',marginBottom:16,lineHeight:1.3}}>
            Whether you're curious, a café owner, or just want to say hi — we'd love to hear from you.
          </h3>
          <p style={{fontSize:15,color:'rgba(255,255,255,0.55)',fontWeight:300,lineHeight:1.8,marginBottom:32}}>
            We're building India's reusable cup movement from the ground up. If you want to partner, collaborate, or simply learn more, drop us a message.
          </p>
          {details.map((d,i) => (
            <div key={i} style={{display:'flex',alignItems:'center',gap:14,marginBottom:12,padding:16,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:12}}>
              <span style={{fontSize:18}}>{d.icon}</span>
              <div>
                <div style={{fontSize:11,color:'rgba(255,255,255,0.4)',fontWeight:500,textTransform:'uppercase',letterSpacing:1,marginBottom:2}}>{d.label}</div>
                <div style={{fontSize:14,color:'rgba(255,255,255,0.8)'}}>{d.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:24,padding:36}}>
          {submitted ? (
            <div style={{textAlign:'center',padding:'40px 0'}}>
              <div style={{fontSize:48,marginBottom:16}}>✅</div>
              <h3 style={{color:'#52b788',fontFamily:"'Fraunces',serif",fontSize:22,marginBottom:8}}>Message sent!</h3>
              <p style={{color:'rgba(255,255,255,0.5)',fontSize:14,fontWeight:300}}>We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}} className="form-row">
                {[['name','Your name','Rahul Sharma','text'],['email','Email address','rahul@gmail.com','email']].map(([k,l,ph,t])=>(
                  <div key={k}>
                    <label style={{display:'block',fontSize:12,fontWeight:500,color:'rgba(255,255,255,0.6)',marginBottom:7}}>{l}</label>
                    <input type={t} placeholder={ph} value={form[k]} required style={inp}
                      onChange={e=>setForm({...form,[k]:e.target.value})}
                      onFocus={e=>{e.target.style.borderColor='#52b788';e.target.style.background='rgba(255,255,255,0.12)'}}
                      onBlur={e=>{e.target.style.borderColor='rgba(255,255,255,0.15)';e.target.style.background='rgba(255,255,255,0.08)'}}/>
                  </div>
                ))}
              </div>
              <div style={{marginBottom:14}}>
                <label style={{display:'block',fontSize:12,fontWeight:500,color:'rgba(255,255,255,0.6)',marginBottom:7}}>I am a...</label>
                <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} style={{...inp,appearance:'none'}}>
                  <option value="">Select one</option>
                  {['Curious individual','Café / Restaurant owner','College / Campus admin','Investor / Partner','Media / Press','Other'].map(o=>(
                    <option key={o} value={o} style={{background:'#1a3a24'}}>{o}</option>
                  ))}
                </select>
              </div>
              <div style={{marginBottom:20}}>
                <label style={{display:'block',fontSize:12,fontWeight:500,color:'rgba(255,255,255,0.6)',marginBottom:7}}>Message</label>
                <textarea placeholder="Tell us what's on your mind..." rows={4} value={form.message} required style={{...inp,resize:'vertical'}}
                  onChange={e=>setForm({...form,message:e.target.value})}
                  onFocus={e=>{e.target.style.borderColor='#52b788';e.target.style.background='rgba(255,255,255,0.12)'}}
                  onBlur={e=>{e.target.style.borderColor='rgba(255,255,255,0.15)';e.target.style.background='rgba(255,255,255,0.08)'}}/>
              </div>
              <button type="submit" disabled={loading} style={{
                width:'100%',padding:16,background:'#52b788',color:'#1a3a24',
                border:'none',borderRadius:12,
                fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:600,
                cursor:loading?'not-allowed':'pointer',
                transition:'all 0.2s',opacity:loading?0.7:1,
                display:'flex',alignItems:'center',justifyContent:'center',gap:8,
              }}
              onMouseEnter={e=>{if(!loading){e.currentTarget.style.background='#3da06b';e.currentTarget.style.transform='translateY(-1px)'}}}
              onMouseLeave={e=>{e.currentTarget.style.background='#52b788';e.currentTarget.style.transform='none'}}>
                {loading ? 'Sending...' : <>Send message <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></>}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          #connect { padding: 80px 32px !important; }
          .connect-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media(max-width:480px){
          #connect { padding: 80px 20px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}