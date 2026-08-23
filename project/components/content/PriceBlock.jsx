import React from 'react';
/** Price block — mono figure + service name, cost drivers, mandatory footnote. */
export function PriceBlock({ service, price, drivers=[], onDark=false, footnote='Pricing varies based on property size, materials, accessibility, service frequency, and project scope. Free consultations and customized estimates are available.', style, ...rest }) {
  const fg = onDark?'#F4F1E9':'var(--pg-ink)';
  const muted = onDark?'var(--pg-slate-300)':'var(--pg-slate-500)';
  return (
    <div style={{ border:'1px solid '+(onDark?'var(--pg-line-dark)':'var(--pg-line-strong)'), background: onDark?'var(--pg-deep-field-2)':'#fff', borderRadius:'var(--radius-sm)', padding:'20px 22px', ...style }} {...rest}>
      {service && <div style={{ fontFamily:'var(--font-display)', fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.14em', color:muted, marginBottom:6 }}>{service}</div>}
      <div style={{ fontFamily:'var(--font-mono)', fontWeight:500, fontSize:32, color:fg, lineHeight:1 }}>{price}</div>
      {drivers.length>0 && <ul style={{ listStyle:'none', padding:0, margin:'14px 0 0', display:'flex', flexDirection:'column', gap:6 }}>{drivers.map((d,i)=>(<li key={i} style={{ fontFamily:'var(--font-body)', fontSize:14, color: onDark?'var(--pg-slate-300)':'var(--pg-slate-600)', display:'flex', gap:8 }}><span aria-hidden="true" style={{ color: onDark?'var(--pg-growth)':'var(--pg-turf)' }}>—</span>{d}</li>))}</ul>}
      <p style={{ fontFamily:'var(--font-mono)', fontSize:11.5, lineHeight:1.5, color:muted, margin:'16px 0 0' }}>{footnote}</p>
    </div>
  );
}