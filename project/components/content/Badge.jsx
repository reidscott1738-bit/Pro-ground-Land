import React from 'react';
/** Pill badge. tone: neutral | green | water. */
export function Badge({ children, tone='neutral', onDark=false, style, ...rest }) {
  const tones = {
    neutral: onDark?{bg:'rgba(255,255,255,0.10)',fg:'#F4F1E9'}:{bg:'var(--pg-bone-deep)',fg:'var(--pg-slate-700)'},
    green: onDark?{bg:'rgba(16,224,22,0.16)',fg:'var(--pg-growth)'}:{bg:'color-mix(in srgb,var(--pg-turf) 12%,#fff)',fg:'var(--pg-turf)'},
    water: onDark?{bg:'rgba(24,99,184,0.20)',fg:'#7FB0E8'}:{bg:'color-mix(in srgb,var(--pg-survey) 12%,#fff)',fg:'var(--pg-survey-ink)'},
  };
  const t = tones[tone]||tones.neutral;
  return <span style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:'var(--font-mono)', fontSize:12, fontWeight:500, letterSpacing:'0.02em', padding:'4px 10px', borderRadius:'var(--radius-pill)', background:t.bg, color:t.fg, ...style }} {...rest}>{children}</span>;
}