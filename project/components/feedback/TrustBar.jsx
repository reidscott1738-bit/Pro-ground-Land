import React from 'react';
/** Trust bar — items on one line, no icons larger than the text. */
export function TrustBar({ items=[], onDark=false, style, ...rest }) {
  const fg = onDark?'#F4F1E9':'var(--pg-ink)';
  const sep = onDark?'var(--pg-line-dark)':'var(--pg-line-strong)';
  return (
    <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:'10px 28px', ...style }} {...rest}>
      {items.map((it,i)=>(<React.Fragment key={i}>{i>0 && <span aria-hidden="true" style={{ width:1, height:16, background:sep }} />}<span style={{ fontFamily:'var(--font-mono)', fontSize:14, fontWeight:500, letterSpacing:'0.02em', color:fg }}>{it}</span></React.Fragment>))}
    </div>
  );
}