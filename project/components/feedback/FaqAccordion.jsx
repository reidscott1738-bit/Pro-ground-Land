import React, { useState } from 'react';
/** FAQ accordion. Visible text must match the FAQPage schema exactly. */
export function FaqAccordion({ items=[], allowMultiple=false, defaultAllOpen=false, style, ...rest }) {
  const [open, setOpen] = useState(()=> new Set(defaultAllOpen ? items.map((_,i)=>i) : []));
  const toggle = (i)=> setOpen((prev)=>{ const next = new Set(allowMultiple?prev:[]); if(prev.has(i)) next.delete(i); else next.add(i); return next; });
  return (
    <div style={{ borderTop:'1px solid var(--pg-line)', ...style }} {...rest}>
      {items.map((it,i)=>{ const isOpen=open.has(i); return (
        <div key={i} style={{ borderBottom:'1px solid var(--pg-line)' }}>
          <button onClick={()=>toggle(i)} aria-expanded={isOpen} style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, background:'none', border:'none', cursor:'pointer', padding:'20px 0', textAlign:'left', fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'var(--pg-ink)', lineHeight:1.35 }}>
            <span>{it.q}</span>
            <span aria-hidden="true" style={{ flexShrink:0, fontFamily:'var(--font-mono)', fontSize:22, color:'var(--pg-turf)', transform:isOpen?'rotate(45deg)':'none', transition:'transform var(--dur-base) var(--ease-standard)' }}>+</span>
          </button>
          {isOpen && <div style={{ paddingBottom:22, fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.6, color:'var(--pg-slate-700)', maxWidth:'62ch' }}>{it.a}</div>}
        </div>
      ); })}
    </div>
  );
}