import React from 'react';

/**
 * ProGround Button.
 * Primary = Deep Field on light / Growth Green on dark. Secondary = 1px outline.
 * No gradients, ever. Hover changes color only (never size).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', font: '14px', minH: 40 },
    md: { padding: '13px 24px', font: '16px', minH: 48 },
    lg: { padding: '16px 32px', font: '17px', minH: 56 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: s.font,
    letterSpacing: '0.01em', lineHeight: 1, padding: s.padding, minHeight: s.minH,
    borderRadius: 'var(--radius-sm)', border: '1px solid transparent', cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1, whiteSpace: 'nowrap',
  };

  const variants = {
    primary: onDark
      ? { background: 'var(--pg-growth)', color: 'var(--pg-deep-field)' }
      : { background: 'var(--pg-deep-field)', color: '#fff' },
    secondary: onDark
      ? { background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }
      : { background: 'transparent', color: 'var(--pg-ink)', borderColor: 'var(--pg-line-strong)' },
    ghost: onDark
      ? { background: 'transparent', color: 'var(--pg-growth)' }
      : { background: 'transparent', color: 'var(--pg-turf)' },
  };

  const hoverEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = onDark ? '#00E800' : 'var(--pg-slate-800)';
    if (variant === 'secondary') e.currentTarget.style.borderColor = onDark ? '#fff' : 'var(--pg-deep-field)';
    if (variant === 'ghost') e.currentTarget.style.color = onDark ? '#fff' : 'var(--pg-turf-strong)';
  };
  const hoverLeave = (e) => {
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.borderColor = variants[variant].borderColor || 'transparent';
    e.currentTarget.style.color = variants[variant].color;
  };

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag {...tagProps} onClick={onClick} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}
      style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
