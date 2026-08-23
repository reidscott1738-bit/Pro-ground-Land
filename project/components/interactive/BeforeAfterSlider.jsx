import React, { useState, useRef, useCallback } from 'react';

/**
 * Before / after comparison slider — the signature interaction.
 * Draggable divider with a Growth Green handle, keyboard-operable (arrow keys),
 * labeled BEFORE / AFTER in mono, with a caption naming the service and city.
 * Accepts image URLs; when omitted, labeled placeholder panels render.
 */
export function BeforeAfterSlider({
  beforeImage, afterImage, beforeAlt = 'Before', afterAlt = 'After',
  caption, initial = 50, height = 420, style, ...rest
}) {
  const [pos, setPos] = useState(initial);
  const wrapRef = useRef(null);

  const setFromClientX = useCallback((clientX) => {
    const el = wrapRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setPos(p);
  }, []);

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e) => { if (e.buttons === 1) setFromClientX(e.clientX); };
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { setPos((p) => Math.max(0, p - 4)); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setPos((p) => Math.min(100, p + 4)); e.preventDefault(); }
    if (e.key === 'Home') { setPos(0); e.preventDefault(); }
    if (e.key === 'End') { setPos(100); e.preventDefault(); }
  };

  const Panel = ({ img, alt, label, tint }) => (
    <>
      {img ? (
        <img src={img} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{ position: 'absolute', inset: 0, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pg-slate-400)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label} photo</div>
      )}
    </>
  );

  const tagStyle = (side) => ({
    position: 'absolute', top: 14, [side]: 14, zIndex: 3,
    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: '#fff', background: 'rgba(11,14,21,0.72)',
    padding: '4px 10px', borderRadius: 'var(--radius-xs)',
  });

  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div ref={wrapRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove}
        style={{ position: 'relative', width: '100%', height, overflow: 'hidden', borderRadius: 'var(--radius-sm)', userSelect: 'none', touchAction: 'none', cursor: 'ew-resize', background: 'var(--pg-bone-deep)' }}>
        {/* AFTER underneath */}
        <Panel img={afterImage} alt={afterAlt} label="After" tint="var(--pg-bone-deep)" />
        <div style={tagStyle('right')}>After</div>
        {/* BEFORE clipped on top */}
        <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Panel img={beforeImage} alt={beforeAlt} label="Before" tint="#dcd6c8" />
          <div style={tagStyle('left')}>Before</div>
        </div>
        {/* divider + handle */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, width: 2, background: 'var(--pg-growth-bright)', transform: 'translateX(-1px)', zIndex: 4 }} />
        <div role="slider" tabIndex={0} aria-label="Reveal before and after" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          style={{ position: 'absolute', top: '50%', left: `${pos}%`, transform: 'translate(-50%,-50%)', zIndex: 5,
            width: 44, height: 44, borderRadius: '50%', background: 'var(--pg-growth-bright)', border: '3px solid #fff',
            boxShadow: '0 2px 10px rgba(11,14,21,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'ew-resize' }}>
          <span aria-hidden="true" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--pg-deep-field)', fontSize: 16, lineHeight: 1 }}>‹›</span>
        </div>
      </div>
      {caption && <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-600)', marginTop: 10 }}>{caption}</figcaption>}
    </figure>
  );
}
