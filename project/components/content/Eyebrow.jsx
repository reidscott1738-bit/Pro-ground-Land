import React from 'react';
/** Uppercase Archivo section label, +18% tracking — mirrors the logo lockup. */
export function Eyebrow({ children, onDark=false, as='div', style, ...rest }) {
  const Tag = as;
  return <Tag style={{ fontFamily:'var(--font-display)', fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.18em', color: onDark?'var(--pg-growth)':'var(--pg-turf-strong)', ...style }} {...rest}>{children}</Tag>;
}