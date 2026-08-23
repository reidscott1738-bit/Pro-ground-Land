import React, { useState } from 'react';

/**
 * Service card — white, 1px border, small radius, no shadow at rest.
 * Photo + name + one line + starting price (mono). The whole card is the link.
 * Hover lifts the border to Deep Field; nothing else moves.
 */
export function ServiceCard({ name, description, price, image, alt, href = '#', imageLabel = 'ProGround project photo', style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', background: '#fff', textDecoration: 'none',
        border: `1px solid ${hover ? 'var(--pg-deep-field)' : 'var(--pg-line-strong)'}`,
        borderRadius: 'var(--radius-sm)', overflow: 'hidden',
        transition: 'border-color var(--dur-base) var(--ease-standard)', ...style,
      }} {...rest}>
      <div style={{ aspectRatio: '4 / 3', background: 'var(--pg-bone-deep)', position: 'relative', overflow: 'hidden' }}>
        {image ? (
          <img src={image} alt={alt || name} width="400" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--pg-slate-400)', border: '1px dashed var(--pg-line-strong)' }}>{imageLabel}</div>
        )}
      </div>
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--pg-ink)', margin: 0, lineHeight: 1.25 }}>{name}</h3>
        {description && <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--pg-slate-600)', margin: 0, flex: 1 }}>{description}</p>}
        {price && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 500, color: 'var(--pg-turf)', marginTop: 4 }}>{price}</div>}
      </div>
    </a>
  );
}
