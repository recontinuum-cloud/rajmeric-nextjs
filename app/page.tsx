export default function Home() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(160deg,#0F2318 0%,#1B3D26 40%,#243D1A 100%)',color:'white',textAlign:'center',padding:'40px 20px'}}>
      <div>
        <h1 style={{fontSize:'48px',fontWeight:900,marginBottom:'20px',letterSpacing:'-0.02em'}}>
          Rajmeric Lifesciences
        </h1>
        <p style={{fontSize:'20px',opacity:0.8,marginBottom:'40px'}}>
          Next.js 15 Full Stack Foundation — Ready to Build
        </p>
        <div style={{display:'inline-block',padding:'14px 32px',background:'linear-gradient(135deg,#9A7010,#E8B800)',borderRadius:'8px',color:'#0A0A06',fontWeight:700,fontSize:'14px'}}>
          Foundation Deployed ✅
        </div>
        <div style={{marginTop:'60px',fontSize:'14px',opacity:0.6'}}>
          Add your pages in app/ directory
        </div>
      </div>
    </div>
  )
}
