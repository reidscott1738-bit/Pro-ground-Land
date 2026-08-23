import React from 'react';
/** ProGround logo — real lockup image on dark, typographic interim on light. */
export function Logo({ onDark=false, height=40, src, alt='ProGround Land Management', style, ...rest }) {
  const img = src || (onDark ? '../../assets/logo-wordmark.png' : null);
  if (img) return <img src={img} alt={alt} style={{ height, width:'auto', display:'block', ...style }} {...rest} />;
  const scale = height/40;
  return (
    <span role="img" aria-label={alt} style={{ display:'inline-flex', alignItems:'center', gap:12*scale, ...style }} {...rest}>
      <span aria-hidden="true" style={{ width:4*scale, height:34*scale, background:'var(--pg-survey)', borderRadius:1, flexShrink:0 }} />
      <span style={{ lineHeight:1 }}>
        <span style={{ display:'block', fontFamily:'var(--font-display)', fontWeight:800, fontSize:22*scale, letterSpacing:'-0.02em', color:'var(--pg-ink)' }}>ProGround</span>
        <span style={{ display:'block', fontFamily:'var(--font-display)', fontWeight:700, fontSize:8.5*scale, letterSpacing:'0.22em', color:'var(--pg-turf)', marginTop:3*scale }}>LAND MANAGEMENT</span>
      </span>
    </span>
  );
}