import React, { useState } from 'react';
/** Reusable promotion banner with an on/off switch (never hard-code an offer). */
export function PromoBanner({ active=true, children, dismissible=true, style, ...rest }) {
  const [open, setOpen] = useState(true);
  if (!active || !open) return null;
  return (
    <div role="region" aria-label="Promotion" style={{ background:'var(--pg-deep-field)', color:'#F4F1E9', display:'flex', alignItems:'center', justifyContent:'center', gap:16, padding:'10px 20px', ...style }} {...rest}>
      <span aria-hidden="true" style={{ width:8, height:8, borderRadius:'50%', background:'var(--pg-growth-bright)', flexShrink:0 }} />
      <span style={{ fontFamily:'var(--font-body)', fontSize:15, textAlign:'center' }}>{children}</span>
      {dismissible && <button onClick={()=>setOpen(false)} aria-label="Dismiss" style={{ background:'none', border:'none', color:'var(--pg-slate-300)', cursor:'pointer', fontSize:18, lineHeight:1, padding:4, marginLeft:4 }}>×</button>}
    </div>
  );
}