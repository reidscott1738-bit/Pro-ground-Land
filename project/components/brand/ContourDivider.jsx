import React from 'react';
/** Contour divider — the signature graphic device. Decorative (aria-hidden). */
export function ContourDivider({ variant='topo', onDark=false, height=72, accent=false, style, ...rest }) {
  const line = onDark ? 'rgba(255,255,255,0.16)' : 'color-mix(in srgb, var(--pg-slate-500) 42%, transparent)';
  const bg = variant==='lines' ? 'repeating-linear-gradient(90deg, transparent 0 7px, '+line+' 7px 8px)' : 'repeating-radial-gradient(circle at 50% 150%, transparent 0 20px, '+line+' 20px 21px)';
  return (
    <div aria-hidden="true" style={{ position:'relative', height, width:'100%', overflow:'hidden', backgroundImage:bg, backgroundRepeat:'repeat-x', backgroundPosition:'center', WebkitMaskImage:'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', maskImage:'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', ...style }} {...rest}>
      {accent && <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:64, height:2, background: onDark?'var(--pg-growth-bright)':'var(--pg-turf)' }} />}
    </div>
  );
}