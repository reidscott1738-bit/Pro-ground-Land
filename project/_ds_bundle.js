/* @ds-bundle: {"format":4,"namespace":"ProGroundDesignSystem_313bb9","components":[{"name":"ContourDivider","sourcePath":"components/brand/ContourDivider.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"PriceBlock","sourcePath":"components/content/PriceBlock.jsx"},{"name":"FaqAccordion","sourcePath":"components/feedback/FaqAccordion.jsx"},{"name":"PromoBanner","sourcePath":"components/feedback/PromoBanner.jsx"},{"name":"TrustBar","sourcePath":"components/feedback/TrustBar.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Msg","sourcePath":"components/forms/fieldHelpers.js"},{"name":"BeforeAfterSlider","sourcePath":"components/interactive/BeforeAfterSlider.jsx"}],"sourceHashes":{"components/brand/ContourDivider.jsx":"d886ab00e41b","components/brand/Logo.jsx":"bb149d708603","components/cards/ServiceCard.jsx":"a4ed2bf4acc8","components/content/Badge.jsx":"9d31d607c580","components/content/Eyebrow.jsx":"80c88942e8b1","components/content/PriceBlock.jsx":"7d20d319fdd5","components/feedback/FaqAccordion.jsx":"95c64194eb63","components/feedback/PromoBanner.jsx":"c409720de27e","components/feedback/TrustBar.jsx":"b842391823bb","components/forms/Button.jsx":"43d4b2828ed8","components/forms/Checkbox.jsx":"21fdffab802b","components/forms/Input.jsx":"6236de6d300d","components/forms/Select.jsx":"2e7de48147d0","components/forms/Textarea.jsx":"134ac7fe6055","components/forms/fieldHelpers.js":"b27abe8c4f8f","components/interactive/BeforeAfterSlider.jsx":"8995313dfd7f","ui_kits/website/App.js":"9b18aea97d55","ui_kits/website/Estimate.js":"ab82ca4c99b7","ui_kits/website/Home.js":"4d68850f8f36","ui_kits/website/Pages.js":"3e4e945ab660","ui_kits/website/Screens.js":"8340a45fbbb7","ui_kits/website/Shared.js":"fcfd169d2808"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/fieldHelpers.js"},{"name":"errStyle","sourcePath":"components/forms/fieldHelpers.js"},{"name":"fieldWrap","sourcePath":"components/forms/fieldHelpers.js"},{"name":"helpStyle","sourcePath":"components/forms/fieldHelpers.js"},{"name":"labelStyle","sourcePath":"components/forms/fieldHelpers.js"},{"name":"reqMark","sourcePath":"components/forms/fieldHelpers.js"},{"name":"ring","sourcePath":"components/forms/fieldHelpers.js"}]} */

(() => {

const __ds_ns = (window.ProGroundDesignSystem_313bb9 = window.ProGroundDesignSystem_313bb9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ContourDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Contour divider — the signature graphic device. Decorative (aria-hidden). */
function ContourDivider({
  variant = 'topo',
  onDark = false,
  height = 72,
  accent = false,
  style,
  ...rest
}) {
  const line = onDark ? 'rgba(255,255,255,0.16)' : 'color-mix(in srgb, var(--pg-slate-500) 42%, transparent)';
  const bg = variant === 'lines' ? 'repeating-linear-gradient(90deg, transparent 0 7px, ' + line + ' 7px 8px)' : 'repeating-radial-gradient(circle at 50% 150%, transparent 0 20px, ' + line + ' 20px 21px)';
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height,
      width: '100%',
      overflow: 'hidden',
      backgroundImage: bg,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'center',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 64,
      height: 2,
      background: onDark ? 'var(--pg-growth-bright)' : 'var(--pg-turf)'
    }
  }));
}
Object.assign(__ds_scope, { ContourDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ContourDivider.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ProGround logo — real lockup image on dark, typographic interim on light. */
function Logo({
  onDark = false,
  height = 40,
  src,
  alt = 'ProGround Land Management',
  style,
  ...rest
}) {
  const img = src || (onDark ? '../../assets/logo-wordmark.png' : null);
  if (img) return /*#__PURE__*/React.createElement("img", _extends({
    src: img,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
  const scale = height / 40;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": alt,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12 * scale,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 4 * scale,
      height: 34 * scale,
      background: 'var(--pg-survey)',
      borderRadius: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22 * scale,
      letterSpacing: '-0.02em',
      color: 'var(--pg-ink)'
    }
  }, "ProGround"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 8.5 * scale,
      letterSpacing: '0.22em',
      color: 'var(--pg-turf)',
      marginTop: 3 * scale
    }
  }, "LAND MANAGEMENT")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Service card — white, 1px border, small radius, no shadow at rest.
 * Photo + name + one line + starting price (mono). The whole card is the link.
 * Hover lifts the border to Deep Field; nothing else moves.
 */
function ServiceCard({
  name,
  description,
  price,
  image,
  alt,
  href = '#',
  imageLabel = 'ProGround project photo',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      textDecoration: 'none',
      border: `1px solid ${hover ? 'var(--pg-deep-field)' : 'var(--pg-line-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      transition: 'border-color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--pg-bone-deep)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt || name,
    width: "400",
    height: "300",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--pg-slate-400)',
      border: '1px dashed var(--pg-line-strong)'
    }
  }, imageLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--pg-ink)',
      margin: 0,
      lineHeight: 1.25
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--pg-slate-600)',
      margin: 0,
      flex: 1
    }
  }, description), price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--pg-turf)',
      marginTop: 4
    }
  }, price)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill badge. tone: neutral | green | water. */
function Badge({
  children,
  tone = 'neutral',
  onDark = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: onDark ? {
      bg: 'rgba(255,255,255,0.10)',
      fg: '#F4F1E9'
    } : {
      bg: 'var(--pg-bone-deep)',
      fg: 'var(--pg-slate-700)'
    },
    green: onDark ? {
      bg: 'rgba(16,224,22,0.16)',
      fg: 'var(--pg-growth)'
    } : {
      bg: 'color-mix(in srgb,var(--pg-turf) 12%,#fff)',
      fg: 'var(--pg-turf)'
    },
    water: onDark ? {
      bg: 'rgba(24,99,184,0.20)',
      fg: '#7FB0E8'
    } : {
      bg: 'color-mix(in srgb,var(--pg-survey) 12%,#fff)',
      fg: 'var(--pg-survey-ink)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.02em',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase Archivo section label, +18% tracking — mirrors the logo lockup. */
function Eyebrow({
  children,
  onDark = false,
  as = 'div',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: onDark ? 'var(--pg-growth)' : 'var(--pg-turf-strong)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Price block — mono figure + service name, cost drivers, mandatory footnote. */
function PriceBlock({
  service,
  price,
  drivers = [],
  onDark = false,
  footnote = 'Pricing varies based on property size, materials, accessibility, service frequency, and project scope. Free consultations and customized estimates are available.',
  style,
  ...rest
}) {
  const fg = onDark ? '#F4F1E9' : 'var(--pg-ink)';
  const muted = onDark ? 'var(--pg-slate-300)' : 'var(--pg-slate-500)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid ' + (onDark ? 'var(--pg-line-dark)' : 'var(--pg-line-strong)'),
      background: onDark ? 'var(--pg-deep-field-2)' : '#fff',
      borderRadius: 'var(--radius-sm)',
      padding: '20px 22px',
      ...style
    }
  }, rest), service && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: muted,
      marginBottom: 6
    }
  }, service), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 32,
      color: fg,
      lineHeight: 1
    }
  }, price), drivers.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '14px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, drivers.map((d, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: onDark ? 'var(--pg-slate-300)' : 'var(--pg-slate-600)',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: onDark ? 'var(--pg-growth)' : 'var(--pg-turf)'
    }
  }, "\u2014"), d))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      lineHeight: 1.5,
      color: muted,
      margin: '16px 0 0'
    }
  }, footnote));
}
Object.assign(__ds_scope, { PriceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FaqAccordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** FAQ accordion. Visible text must match the FAQPage schema exactly. */
function FaqAccordion({
  items = [],
  allowMultiple = false,
  defaultAllOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(() => new Set(defaultAllOpen ? items.map((_, i) => i) : []));
  const toggle = i => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--pg-line)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--pg-line)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '20px 0',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18,
        color: 'var(--pg-ink)',
        lineHeight: 1.35
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flexShrink: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: 22,
        color: 'var(--pg-turf)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-standard)'
      }
    }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 22,
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--pg-slate-700)',
        maxWidth: '62ch'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/PromoBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Reusable promotion banner with an on/off switch (never hard-code an offer). */
function PromoBanner({
  active = true,
  children,
  dismissible = true,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(true);
  if (!active || !open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "region",
    "aria-label": "Promotion",
    style: {
      background: 'var(--pg-deep-field)',
      color: '#F4F1E9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      padding: '10px 20px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--pg-growth-bright)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      textAlign: 'center'
    }
  }, children), dismissible && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--pg-slate-300)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 4,
      marginLeft: 4
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TrustBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Trust bar — items on one line, no icons larger than the text. */
function TrustBar({
  items = [],
  onDark = false,
  style,
  ...rest
}) {
  const fg = onDark ? '#F4F1E9' : 'var(--pg-ink)';
  const sep = onDark ? 'var(--pg-line-dark)' : 'var(--pg-line-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '10px 28px',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 16,
      background: sep
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: fg
    }
  }, it))));
}
Object.assign(__ds_scope, { TrustBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TrustBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProGround Button.
 * Primary = Deep Field on light / Growth Green on dark. Secondary = 1px outline.
 * No gradients, ever. Hover changes color only (never size).
 */
function Button({
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
    sm: {
      padding: '8px 16px',
      font: '14px',
      minH: 40
    },
    md: {
      padding: '13px 24px',
      font: '16px',
      minH: 48
    },
    lg: {
      padding: '16px 32px',
      font: '17px',
      minH: 56
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: s.font,
    letterSpacing: '0.01em',
    lineHeight: 1,
    padding: s.padding,
    minHeight: s.minH,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: onDark ? {
      background: 'var(--pg-growth)',
      color: 'var(--pg-deep-field)'
    } : {
      background: 'var(--pg-deep-field)',
      color: '#fff'
    },
    secondary: onDark ? {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.4)'
    } : {
      background: 'transparent',
      color: 'var(--pg-ink)',
      borderColor: 'var(--pg-line-strong)'
    },
    ghost: onDark ? {
      background: 'transparent',
      color: 'var(--pg-growth)'
    } : {
      background: 'transparent',
      color: 'var(--pg-turf)'
    }
  };
  const hoverEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = onDark ? '#00E800' : 'var(--pg-slate-800)';
    if (variant === 'secondary') e.currentTarget.style.borderColor = onDark ? '#fff' : 'var(--pg-deep-field)';
    if (variant === 'ghost') e.currentTarget.style.color = onDark ? '#fff' : 'var(--pg-turf-strong)';
  };
  const hoverLeave = e => {
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.borderColor = variants[variant].borderColor || 'transparent';
    e.currentTarget.style.color = variants[variant].color;
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: hoverEnter,
    onMouseLeave: hoverLeave,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with inline label. */
function Checkbox({
  label,
  id,
  checked,
  defaultChecked,
  onChange,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--pg-ink)',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    style: {
      width: 20,
      height: 20,
      marginTop: 1,
      accentColor: 'var(--pg-turf)',
      flexShrink: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/fieldHelpers.js
try { (() => {
const fieldWrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  width: '100%'
};
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  fontWeight: 600,
  color: 'var(--pg-slate-700)'
};
const reqMark = {
  color: 'var(--pg-danger)',
  marginLeft: 3
};
const helpStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 12,
  color: 'var(--pg-slate-500)'
};
const errStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  color: 'var(--pg-danger)'
};
function controlStyle(invalid) {
  return {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    color: 'var(--pg-ink)',
    background: '#fff',
    border: '1px solid ' + (invalid ? 'var(--pg-danger)' : 'var(--pg-line-strong)'),
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    width: '100%',
    minHeight: 48,
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
  };
}
function ring(invalid) {
  return {
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--pg-survey)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--pg-danger)' : 'var(--pg-line-strong)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };
}
function Msg({
  error,
  help
}) {
  if (error) return React.createElement('span', {
    style: errStyle
  }, error);
  if (help) return React.createElement('span', {
    style: helpStyle
  }, help);
  return null;
}
Object.assign(__ds_scope, { fieldWrap, labelStyle, reqMark, helpStyle, errStyle, controlStyle, ring, Msg });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/fieldHelpers.js", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text input; label always above the control (never placeholder-only). */
function Input({
  label,
  id,
  type = 'text',
  required,
  help,
  error,
  style,
  ...rest
}) {
  const invalid = !!error;
  return /*#__PURE__*/React.createElement("div", {
    style: __ds_scope.fieldWrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.reqMark
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    "aria-invalid": invalid,
    "aria-required": required,
    style: {
      ...__ds_scope.controlStyle(invalid),
      ...style
    }
  }, __ds_scope.ring(invalid), rest)), /*#__PURE__*/React.createElement(__ds_scope.Msg, {
    error: error,
    help: help
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled select. options = strings or {value,label}. */
function Select({
  label,
  id,
  required,
  help,
  error,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const invalid = !!error;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: __ds_scope.fieldWrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.reqMark
  }, "*")), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    "aria-invalid": invalid,
    "aria-required": required,
    style: {
      ...__ds_scope.controlStyle(invalid),
      appearance: 'none',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--pg-slate-500) 50%),linear-gradient(135deg,var(--pg-slate-500) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) calc(50% - 2px),calc(100% - 15px) calc(50% - 2px)',
      backgroundSize: '5px 5px,5px 5px',
      backgroundRepeat: 'no-repeat',
      paddingRight: 40,
      ...style
    }
  }, __ds_scope.ring(invalid), rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Msg, {
    error: error,
    help: help
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled multi-line textarea. */
function Textarea({
  label,
  id,
  required,
  help,
  error,
  rows = 4,
  style,
  ...rest
}) {
  const invalid = !!error;
  return /*#__PURE__*/React.createElement("div", {
    style: __ds_scope.fieldWrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.reqMark
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    "aria-invalid": invalid,
    "aria-required": required,
    style: {
      ...__ds_scope.controlStyle(invalid),
      minHeight: 'auto',
      resize: 'vertical',
      lineHeight: 1.5,
      ...style
    }
  }, __ds_scope.ring(invalid), rest)), /*#__PURE__*/React.createElement(__ds_scope.Msg, {
    error: error,
    help: help
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/interactive/BeforeAfterSlider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef,
  useCallback
} = React;
/**
 * Before / after comparison slider — the signature interaction.
 * Draggable divider with a Growth Green handle, keyboard-operable (arrow keys),
 * labeled BEFORE / AFTER in mono, with a caption naming the service and city.
 * Accepts image URLs; when omitted, labeled placeholder panels render.
 */
function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After',
  caption,
  initial = 50,
  height = 420,
  style,
  ...rest
}) {
  const [pos, setPos] = useState(initial);
  const wrapRef = useRef(null);
  const setFromClientX = useCallback(clientX => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, (clientX - r.left) / r.width * 100));
    setPos(p);
  }, []);
  const onPointerDown = e => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = e => {
    if (e.buttons === 1) setFromClientX(e.clientX);
  };
  const onKeyDown = e => {
    if (e.key === 'ArrowLeft') {
      setPos(p => Math.max(0, p - 4));
      e.preventDefault();
    }
    if (e.key === 'ArrowRight') {
      setPos(p => Math.min(100, p + 4));
      e.preventDefault();
    }
    if (e.key === 'Home') {
      setPos(0);
      e.preventDefault();
    }
    if (e.key === 'End') {
      setPos(100);
      e.preventDefault();
    }
  };
  const Panel = ({
    img,
    alt,
    label,
    tint
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, img ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--pg-slate-400)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, label, " photo"));
  const tagStyle = side => ({
    position: 'absolute',
    top: 14,
    [side]: 14,
    zIndex: 3,
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#fff',
    background: 'rgba(11,14,21,0.72)',
    padding: '4px 10px',
    borderRadius: 'var(--radius-xs)'
  });
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    style: {
      position: 'relative',
      width: '100%',
      height,
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      userSelect: 'none',
      touchAction: 'none',
      cursor: 'ew-resize',
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    img: afterImage,
    alt: afterAlt,
    label: "After",
    tint: "var(--pg-bone-deep)"
  }), /*#__PURE__*/React.createElement("div", {
    style: tagStyle('right')
  }, "After"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: `inset(0 ${100 - pos}% 0 0)`
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    img: beforeImage,
    alt: beforeAlt,
    label: "Before",
    tint: "#dcd6c8"
  }), /*#__PURE__*/React.createElement("div", {
    style: tagStyle('left')
  }, "Before")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      background: 'var(--pg-growth-bright)',
      transform: 'translateX(-1px)',
      zIndex: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "slider",
    tabIndex: 0,
    "aria-label": "Reveal before and after",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(pos),
    onKeyDown: onKeyDown,
    style: {
      position: 'absolute',
      top: '50%',
      left: `${pos}%`,
      transform: 'translate(-50%,-50%)',
      zIndex: 5,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--pg-growth-bright)',
      border: '3px solid #fff',
      boxShadow: '0 2px 10px rgba(11,14,21,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      color: 'var(--pg-deep-field)',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\u2039\u203A"))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-600)',
      marginTop: 10
    }
  }, caption));
}
Object.assign(__ds_scope, { BeforeAfterSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/BeforeAfterSlider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.js
try { (() => {
/* ProGround website — app shell + client-side router. */
function App() {
  const [route, setRoute] = React.useState('home');
  const [param, setParam] = React.useState(null);
  const onNav = (r, p = null) => {
    setRoute(r);
    setParam(p);
    const el = document.getElementById('pg-scroll');
    if (el) el.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };
  const screens = {
    home: window.PGHome,
    services: window.PGServicesIndex,
    service: window.PGServicePage,
    drainage: window.PGDrainagePage,
    areas: window.PGAreasIndex,
    area: window.PGAreaPage,
    whoweserve: window.PGWhoWeServe,
    pricing: window.PGPricingPage,
    gallery: window.PGGalleryPage,
    about: window.PGAboutPage,
    process: window.PGProcessPage,
    reviews: window.PGReviewsPage,
    faq: window.PGFaqPage,
    estimate: window.PGEstimatePage,
    privacy: window.PGPrivacyPage,
    terms: window.PGTermsPage
  };
  const Screen = screens[route] || window.PGHome;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.PGHeader, {
    onNav: onNav,
    active: route
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Screen, {
    onNav: onNav,
    param: param
  })), route !== 'estimate' && /*#__PURE__*/React.createElement(window.PGConversion, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(window.PGFooter, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0
    },
    className: "pg-mobile-spacer"
  }), /*#__PURE__*/React.createElement(window.PGMobileBar, {
    onNav: onNav
  }));
}
/* Guard: this file is also swept into _ds_bundle.js, where it would auto-run
   before the babel screen scripts (and before some DS components) are defined.
   Everything with a side effect lives inside this guard; index.html sets
   __PGReady after the bundle loads, so the bundled early-run is a no-op. */
if (window.__PGReady && window.PGHeader && window.PGHome) {
  const rootEl = document.getElementById('pg-root');
  const root = window.__pgRoot || (window.__pgRoot = ReactDOM.createRoot(rootEl));
  root.render(/*#__PURE__*/React.createElement(App, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Estimate.js
try { (() => {
/* ProGround website — Request an estimate: full conditional form. */
const DSe = window.ProGroundDesignSystem_313bb9;
const {
  Button: EB,
  Input: EI,
  Select: ES,
  Textarea: ET,
  Checkbox: ECk,
  TrustBar: ETB,
  Eyebrow: EEb
} = DSe;
const EC = window.PGContainer;
const SERVICE_OPTS = ['Landscape Renovation', 'Landscape Installation', 'Drainage Solution', 'Grading & Yard Leveling', 'Annual Property Maintenance', 'Residential Lawn Maintenance', 'Commercial Property Maintenance', 'Mulch or Pine Straw Installation', 'Decorative Rock Installation', 'Landscape Bed Cleanup', 'Large Property Mowing', 'Christmas Light Installation', 'Other'];
const PROJECT_SVCS = ['Landscape Renovation', 'Landscape Installation', 'Drainage Solution', 'Grading & Yard Leveling'];
function branchFor(svc) {
  if (['Annual Property Maintenance', 'Residential Lawn Maintenance', 'Commercial Property Maintenance', 'Large Property Mowing'].includes(svc)) return {
    title: 'About the recurring service',
    fields: [['What areas need to be maintained?', 'select', ['Whole property', 'Front only', 'Beds only', 'Large lot / field']], ['How often?', 'select', ['Weekly', 'Bi-weekly', 'Monthly', 'Not sure yet']], ['Currently using another company?', 'select', ['No', 'Yes']]]
  };
  if (['Landscape Renovation', 'Landscape Installation'].includes(svc)) return {
    title: 'About the landscaping',
    fields: [['Renovating, installing new, or both?', 'select', ['Renovating existing', 'Installing new', 'Both']], ['Existing plants/materials to remove?', 'select', ['Yes', 'No', 'Not sure']], ['Finishes you want', 'select', ['Mulch', 'Pine straw', 'Decorative rock', 'Edging', 'Not sure yet']]]
  };
  if (['Drainage Solution', 'Grading & Yard Leveling'].includes(svc)) return {
    title: 'About the water problem',
    fields: [['Where is the water collecting?', 'text'], ['How long does it stay after rain?', 'select', ['Hours', 'A day', 'Several days']], ['Gutters/downspouts contributing?', 'select', ['Yes', 'No', 'Not sure']]]
  };
  if (svc === 'Christmas Light Installation') return {
    title: 'About the lighting',
    fields: [['Areas to decorate', 'select', ['Roofline', 'Trees & shrubs', 'Columns', 'Walkways', 'A combination']], ['Accessible exterior power nearby?', 'select', ['Yes', 'No', 'Not sure']]]
  };
  return null;
}
function Field({
  f
}) {
  const [label, type, opts] = f;
  if (type === 'select') return /*#__PURE__*/React.createElement(ES, {
    label: label,
    id: label,
    options: opts,
    placeholder: "Choose one"
  });
  return /*#__PURE__*/React.createElement(EI, {
    label: label,
    id: label
  });
}
function EstimatePage({
  onNav
}) {
  const [step, setStep] = React.useState(1);
  const [svc, setSvc] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const branch = branchFor(svc);
  const totalSteps = 4;
  const isProject = PROJECT_SVCS.includes(svc);
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pg-bone)'
      }
    }, /*#__PURE__*/React.createElement(EC, {
      style: {
        padding: 'clamp(72px,10vw,140px) 0',
        maxWidth: 720,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--pg-turf)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        margin: '0 auto 24px'
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2rem,4vw,3rem)'
      }
    }, "Thank you \u2014 we've got it."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: 'var(--pg-slate-700)',
        maxWidth: '48ch',
        margin: '0 auto'
      }
    }, "You'll hear back the same day. If it's urgent, call or text ", window.PG_PHONE, ". In the meantime, take a look at recent work."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        justifyContent: 'center',
        marginTop: 28,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(EB, {
      variant: "primary",
      onClick: () => onNav('home')
    }, "Back to home"), /*#__PURE__*/React.createElement(EB, {
      variant: "secondary",
      onClick: () => onNav('gallery')
    }, "See the gallery"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(EC, {
    style: {
      padding: 'clamp(48px,6vw,80px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'clamp(32px,5vw,64px)',
      alignItems: 'start'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EEb, null, "Request a free estimate"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 12,
      fontSize: 'clamp(2rem,3.6vw,2.8rem)'
    }
  }, "Tell us about the property."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '20px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(ETB, {
    items: ['Free estimates', 'Same-day response', 'No trip fee', '100+ homes served']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 24
    }
  }, [1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 4,
      flex: 1,
      borderRadius: 2,
      background: n <= step ? 'var(--pg-turf)' : 'var(--pg-line-strong)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--pg-slate-500)',
      marginBottom: 16
    }
  }, "STEP ", step, " OF ", totalSteps), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: 0
    }
  }, "The property"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    },
    className: "pg-f2"
  }, /*#__PURE__*/React.createElement(EI, {
    label: "Name",
    id: "e-name",
    required: true
  }), /*#__PURE__*/React.createElement(EI, {
    label: "Phone",
    id: "e-phone",
    type: "tel",
    required: true,
    help: "Texting accepted."
  })), /*#__PURE__*/React.createElement(EI, {
    label: "Email",
    id: "e-email",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(EI, {
    label: "Property address",
    id: "e-addr",
    required: true,
    help: "Used to check coverage \u2014 city & parish only on the site."
  }), /*#__PURE__*/React.createElement(ES, {
    label: "Residential or commercial?",
    id: "e-type",
    required: true,
    placeholder: "Choose one",
    options: ['Residential', 'Commercial']
  }), /*#__PURE__*/React.createElement(ECk, {
    id: "e-text",
    label: "It's fine to text this number",
    defaultChecked: true
  })), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: 0
    }
  }, "What you need"), /*#__PURE__*/React.createElement(ES, {
    label: "Service needed",
    id: "e-svc",
    required: true,
    placeholder: "Choose a service",
    options: SERVICE_OPTS,
    onChange: e => setSvc(e.target.value)
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)',
      margin: 0
    }
  }, "Choosing a service tailors the next questions.")), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: 0
    }
  }, branch ? branch.title : 'A little more detail'), branch ? branch.fields.map(f => /*#__PURE__*/React.createElement(Field, {
    key: f[0],
    f: f
  })) : /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--pg-slate-600)'
    }
  }, "Pick a service on the previous step to see tailored questions.")), step === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: 0
    }
  }, "Scope, timing & access"), /*#__PURE__*/React.createElement(ET, {
    label: "What would you like done, or what problem are you solving?",
    id: "e-desc",
    required: true,
    rows: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: '20px',
      textAlign: 'center',
      background: '#fff',
      color: 'var(--pg-slate-500)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, "\u2B06 Upload photos (camera roll on mobile) \u2014 optional but the fastest path to a same-day quote"), /*#__PURE__*/React.createElement(ES, {
    label: "How soon?",
    id: "e-when",
    options: ['As soon as possible', 'Within 2–4 weeks', 'Within 1–3 months', 'Just planning ahead'],
    placeholder: "Choose one"
  }), /*#__PURE__*/React.createElement(EI, {
    label: "Preferred day / time for a visit",
    id: "e-time",
    help: "A request, not a locked slot \u2014 we'll confirm."
  }), isProject && /*#__PURE__*/React.createElement(ES, {
    label: "Approximate investment range (optional)",
    id: "e-budget",
    options: ['Under $1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+', 'Not sure yet'],
    placeholder: "Optional"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 28,
      gap: 12
    }
  }, step > 1 ? /*#__PURE__*/React.createElement(EB, {
    variant: "secondary",
    onClick: () => setStep(s => s - 1)
  }, "Back") : /*#__PURE__*/React.createElement("span", null), step < totalSteps ? /*#__PURE__*/React.createElement(EB, {
    variant: "primary",
    onClick: () => setStep(s => s + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(EB, {
    variant: "primary",
    onClick: () => setSubmitted(true)
  }, "Submit request"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--pg-deep-field)',
      color: '#F4F1E9',
      borderRadius: 'var(--radius-sm)',
      padding: 28,
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--pg-growth)'
    }
  }, "Prefer to talk?"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+12253248252",
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 24,
      color: '#fff',
      margin: '12px 0 4px',
      border: 'none'
    }
  }, window.PG_PHONE), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--pg-slate-300)',
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Call or text \u2014 inquiries answered 24/7, same-day response. No trip fee, no diagnostic fee."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--pg-line-dark)',
      margin: '20px 0',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--pg-slate-300)',
      fontSize: 13,
      lineHeight: 1.6,
      margin: 0
    }
  }, "The five things that matter most: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "service, address, the problem, photos, and your timeframe.")))))));
}
window.PGEstimatePage = EstimatePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Estimate.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.js
try { (() => {
/* ProGround website — Homepage. Dark, image-led redesign. */
const DSh = window.ProGroundDesignSystem_313bb9;
const {
  Button: Btn,
  ServiceCard,
  BeforeAfterSlider,
  PriceBlock,
  TrustBar: TBar,
  Eyebrow: Eb,
  Badge: Bdg,
  ContourDivider: CDiv
} = DSh;
const C = window.PGContainer;
const IMG = {
  hero: __pgImg('hero-home', 'img/hero-home.jpg'),
  backyard: __pgImg('lawn-backyard', 'img/lawn-backyard.jpg'),
  house: __pgImg('house-curb', 'img/house-curb.jpg'),
  sod: __pgImg('sod-install', 'img/sod-install.jpg'),
  aerial: __pgImg('yard-aerial', 'img/yard-aerial.jpg'),
  crew: __pgImg('crew-trimming', 'img/crew-trimming.jpg'),
  golden: __pgImg('lawn-golden', 'img/lawn-golden.jpg'),
  renoBefore: __pgImg('reno-before', 'img/reno-before.jpg'),
  renoAfter: __pgImg('reno-after', 'img/reno-after.jpg'),
  drainA: __pgImg('drainage-after', 'img/drainage-after.jpg'),
  patio: __pgImg('yard-aerial', 'img/yard-aerial.jpg')
};
const SERVICES = [{
  name: 'Landscape Renovations',
  d: 'Turn tired, overgrown beds into the reason neighbors slow down — new plants, clean edging and a layout that fits your house today.',
  p: 'From $750',
  img: IMG.house,
  dest: 'service',
  key: 'renovations'
}, {
  name: 'Landscape Installation',
  d: 'Move into a finished look — plants, shrubs, sod, mulch and edging installed and ready the day we leave.',
  p: 'From $750',
  img: IMG.sod,
  dest: 'service',
  key: 'installation'
}, {
  name: 'Drainage Solutions',
  d: 'Stop the standing water and washed-out mulch for good — catch basins, pipe and grading built for our heavy clay.',
  p: 'From $1,000',
  img: IMG.drainA,
  dest: 'drainage',
  key: null
}, {
  name: 'Grading & Yard Leveling',
  d: 'Reclaim the low, soggy corners of your yard — we reshape the ground so water runs off and the space is usable again.',
  p: 'From $750',
  img: IMG.backyard,
  dest: 'service',
  key: 'grading'
}, {
  name: 'Property Maintenance',
  d: 'Never chase a lawn crew again — mowing and bed care on a set schedule, billed automatically each month.',
  p: 'From $145/mo',
  img: IMG.crew,
  dest: 'service',
  key: 'maintenance'
}, {
  name: 'Mulch, Pine Straw & Rock',
  d: 'Sharp, finished beds in an afternoon — fresh mulch, pine straw or rock over properly prepped ground.',
  p: 'From $350',
  img: IMG.golden,
  dest: 'service',
  key: 'mulch'
}];
const REASONS = [{
  h: 'No more scheduling every visit',
  d: 'Recurring agreements, set service days and automatic billing mean the work just happens. No more calling around every few weeks to get someone back out.'
}, {
  h: 'One crew for the whole property',
  d: 'Maintenance, renovations, drainage, grading, installation and seasonal work — all from the same people. No juggling three contractors who blame each other.'
}, {
  h: 'Clear scope and price up front',
  d: 'Written estimates, defined scopes, digital approvals and a follow-up when it is done. You see the price and the plan before anyone touches your yard.'
}];
const STEPS = [['01', 'You send photos', 'Describe the problem and send a few photos from your phone.'], ['02', 'We look at the property', 'Andrew reviews it — same-day response, often the same day.'], ['03', 'Written estimate', 'You get a written estimate with a clearly defined scope.'], ['04', 'You approve digitally', 'Approve the scope and price online. No pressure, no surprises.'], ['05', 'We schedule & follow up', 'We schedule the work and check in when it is done.']];
const REVIEWS = [{
  q: 'I simply shared a few photos and described what I wanted, and they took it from there. I received a quote the same day, the work was completed within a week, and the results exceeded my expectations.',
  n: 'Aimee Lemann',
  m: 'Google review'
}, {
  q: 'Andrew and his team do an awesome job on the attention to the details. They are very professional, punctual and work very efficiently. I shopped around and their prices are in line with his competition.',
  n: 'Connie Schiller',
  m: 'Google review'
}, {
  q: 'Reliable, detail-oriented, and driven. Their automated property management made everything seamless. We truly loved our experience and highly recommend!',
  n: 'Bridgette Homer',
  m: 'Google review'
}];

/* --- tiny inline icons for the hero trust row --- */
function TrustIcon({
  name
}) {
  const p = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--pg-growth)',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const paths = {
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
    }),
    leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 20c8 0 15-4 16-16C10 5 4 10 4 20z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 20C8 14 12 11 18 9"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7.5V12l3 2"
    })),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "2.4"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", p, paths[name]);
}
function HeroTrust({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(TrustIcon, {
    name: icon
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#F4F1E9',
      lineHeight: 1.25,
      maxWidth: 96
    }
  }, label));
}
function SectionHead({
  eyebrow,
  title,
  sub,
  center,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: center ? 720 : 640,
      margin: center ? '0 auto' : 0,
      textAlign: center ? 'center' : 'left',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eb, {
    onDark: dark
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      color: dark ? '#fff' : 'var(--pg-ink)',
      fontSize: 'clamp(1.9rem,3.4vw,2.6rem)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: dark ? 'var(--pg-slate-300)' : 'var(--pg-slate-600)',
      margin: '4px 0 0'
    }
  }, sub));
}

/* --- image-led service card --- */
function ImageServiceCard({
  s,
  onNav
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(s.dest, s.key);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      textDecoration: 'none',
      boxShadow: hover ? '0 18px 40px -22px rgba(11,14,21,0.5)' : '0 1px 0 rgba(11,14,21,0.04)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 188,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform 600ms var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      background: 'var(--pg-growth)',
      color: 'var(--pg-deep-field)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 999
    }
  }, s.p)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 26px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 21,
      color: 'var(--pg-ink)'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--pg-slate-600)',
      margin: '10px 0 16px'
    }
  }, s.d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--pg-turf)'
    }
  }, "Learn more \u2192")));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--pg-deep-field)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(90deg, rgba(9,11,17,0.82) 0%, rgba(9,11,17,0.6) 34%, rgba(9,11,17,0.2) 62%, rgba(9,11,17,0) 100%), linear-gradient(0deg, rgba(9,11,17,0.45) 0%, rgba(9,11,17,0) 40%), url(${IMG.hero}) center 40%/cover`
    }
  }), /*#__PURE__*/React.createElement(C, {
    style: {
      position: 'relative',
      padding: 'clamp(52px,6vw,84px) 0 clamp(48px,5vw,72px)',
      minHeight: 'min(64vh, 560px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid rgba(16,224,22,0.4)',
      borderRadius: 999,
      padding: '7px 16px',
      marginBottom: 26,
      whiteSpace: 'nowrap',
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--pg-growth)',
      boxShadow: '0 0 10px var(--pg-growth)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      letterSpacing: '0.08em',
      color: '#F4F1E9'
    }
  }, "Greater Baton Rouge \xB7 Locally owned")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      fontSize: 'clamp(2.7rem,6.2vw,5.1rem)',
      color: '#fff'
    }
  }, "Your whole property,", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-growth)'
    }
  }, "handled by one crew.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--pg-slate-300)',
      maxWidth: '48ch',
      margin: '26px 0 0'
    }
  }, "Renovations, drainage, grading and year-round maintenance under one written scope. Send a few photos and get a same-day estimate \u2014 no trip fee, no surprises."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onDark: true,
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Request a free estimate"), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    onDark: true,
    size: "lg",
    href: "tel:+12253248252"
  }, "Call ", window.PG_PHONE)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, max-content)',
      gap: 'clamp(20px,4vw,40px)',
      marginTop: 32,
      alignItems: 'center'
    },
    className: "pg-herotrust"
  }, /*#__PURE__*/React.createElement(HeroTrust, {
    icon: "shield",
    label: "Owner-operated"
  }), /*#__PURE__*/React.createElement(HeroTrust, {
    icon: "leaf",
    label: "Free estimates"
  }), /*#__PURE__*/React.createElement(HeroTrust, {
    icon: "clock",
    label: "Same-day response"
  }), /*#__PURE__*/React.createElement(HeroTrust, {
    icon: "pin",
    label: "Locally owned"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-deep-field-2)',
      borderTop: '1px solid var(--pg-line-dark)',
      borderBottom: '1px solid var(--pg-line-dark)'
    }
  }, /*#__PURE__*/React.createElement(C, {
    style: {
      padding: '30px 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 24
    },
    className: "pg-stats"
  }, [['100+', 'Properties served'], ['5.0', 'Google rating'], ['15', 'Services offered'], ['Same-day', 'Response time']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center',
      borderLeft: i === 0 ? 'none' : '1px solid var(--pg-line-dark)'
    },
    className: "pg-stat"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(1.9rem,3vw,2.5rem)',
      color: 'var(--pg-growth)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.04em',
      color: 'var(--pg-slate-300)',
      marginTop: 8
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(C, {
    style: {
      padding: 'clamp(64px,9vw,120px) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(36px,5vw,72px)',
      alignItems: 'center'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 460
    },
    className: "pg-collage"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.house,
    alt: "Renovated home exterior with fresh landscaping",
    style: {
      width: '76%',
      height: 340,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      display: 'block',
      boxShadow: '0 24px 60px -30px rgba(11,14,21,0.6)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG.sod,
    alt: "Healthy, established lawn",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '52%',
      height: 240,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      border: '6px solid var(--pg-bone)',
      boxShadow: '0 24px 60px -30px rgba(11,14,21,0.6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 8,
      background: 'var(--pg-deep-field)',
      color: '#fff',
      padding: '16px 22px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: '0 20px 50px -24px rgba(11,14,21,0.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--pg-growth)',
      lineHeight: 1
    }
  }, "Est. Oct 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--pg-slate-300)',
      marginTop: 5
    }
  }, "Owner-operated"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eb, null, "About ProGround"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.9rem,3.4vw,2.7rem)'
    }
  }, "When you call ProGround, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)'
    }
  }, "you get the owner.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, "Andrew Lee lives in Denham Springs and works here \u2014 he looks at the property, writes the estimate, plans the job and checks the finished work himself. And because ProGround both maintains and renovates, the same crew that keeps your beds clean is the one that rebuilds them when it is time. Written scopes, scheduled dates, a property you are proud to pull up to."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 28px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    },
    className: "pg-checks"
  }, ['Written, defined scopes', 'Same-day response', 'Materials built for clay soil', 'Digital approvals & billing'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 16,
      color: 'var(--pg-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 22,
      height: 22,
      borderRadius: 999,
      background: 'var(--pg-turf)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13,
      marginTop: 1
    }
  }, "\u2713"), x))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('about')
  }, "Meet ProGround")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(C, {
    style: {
      padding: 'clamp(64px,9vw,120px) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: true,
    eyebrow: "Services",
    title: "Everything we do for your property.",
    sub: "Renovation, installation, drainage, grading and year-round care \u2014 with a starting price on every service."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: 26
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ImageServiceCard, {
    key: s.name,
    s: s,
    onNav: onNav
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('services')
  }, "See all services")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(C, {
    style: {
      padding: 'clamp(64px,9vw,120px) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,64px)',
      alignItems: 'center'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement(BeforeAfterSlider, {
    height: 440,
    initial: 52,
    beforeImage: IMG.renoBefore,
    afterImage: IMG.renoAfter,
    caption: "Overgrown to manicured \xB7 full front-yard transformation"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eb, null, "Renovations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.9rem,3.4vw,2.6rem)'
    }
  }, "Rebuild tired, overgrown beds."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--pg-slate-700)'
    }
  }, "We reshape your bed lines, pull the tired plant material, prep the soil and choose plants that survive South Louisiana heat and clay. It is the bed lines, more than the plant count, that make people notice your home as they drive by."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Demolition and removal of tired plant material', 'Soil, bed prep and reshaped edging', 'Plants selected for heat and clay, mulch or pine straw finish'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 16,
      color: 'var(--pg-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)'
    }
  }, "\u2713"), x))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-price",
    style: {
      color: 'var(--pg-turf)'
    }
  }, "From $750"), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => onNav('service', 'renovations')
  }, "See landscape renovations"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--pg-deep-field)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(180deg, rgba(9,11,17,0.86), rgba(9,11,17,0.97)), url(${IMG.golden}) center/cover`,
      opacity: 1
    }
  }), /*#__PURE__*/React.createElement(C, {
    style: {
      position: 'relative',
      padding: 'clamp(64px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    dark: true,
    center: true,
    eyebrow: "Why ProGround",
    title: "Why homeowners stick with us.",
    sub: "We plan the job properly, use materials that hold up, and stand behind the work."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 28
    }
  }, REASONS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.h,
    style: {
      background: 'rgba(20,26,36,0.72)',
      border: '1px solid var(--pg-line-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: 30,
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-growth)'
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      marginTop: 12,
      fontSize: 22
    }
  }, r.h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--pg-slate-300)',
      fontSize: 16,
      lineHeight: 1.6,
      margin: 0
    }
  }, r.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(C, {
    style: {
      padding: 'clamp(64px,9vw,120px) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: true,
    eyebrow: "Our work",
    title: "Recent projects across Greater Baton Rouge."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gridAutoRows: 200,
      gap: 16
    },
    className: "pg-gallery"
  }, [{
    src: IMG.aerial,
    span: 'grid-column:span 2;grid-row:span 2',
    cap: 'Paver patio & hardscape'
  }, {
    src: IMG.sod,
    span: '',
    cap: 'Fresh sod & healthy turf'
  }, {
    src: IMG.house,
    span: '',
    cap: 'Curb-appeal renovation'
  }, {
    src: IMG.backyard,
    span: 'grid-column:span 2',
    cap: 'Full-yard renovation'
  }, {
    src: IMG.crew,
    span: 'grid-column:span 2',
    cap: 'Property maintenance'
  }, {
    src: IMG.golden,
    span: 'grid-column:span 2',
    cap: 'Fresh mulch & clean beds'
  }].map((g, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      position: 'relative',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      ...styleFromString(g.span)
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.cap,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '28px 16px 12px',
      background: 'linear-gradient(0deg, rgba(9,11,17,0.82), transparent)',
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      letterSpacing: '0.03em'
    }
  }, g.cap)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(C, {
    style: {
      padding: 'clamp(64px,9vw,120px) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The process",
    title: "How it works."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 20
    }
  }, STEPS.map(([n, h, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      borderTop: '2px solid var(--pg-turf)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 26,
      fontWeight: 500,
      color: 'var(--pg-turf)'
    }
  }, n), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '10px 0 6px',
      fontSize: 17
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--pg-slate-600)',
      margin: 0
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(C, {
    style: {
      padding: 'clamp(64px,9vw,120px) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: true,
    eyebrow: "Reviews",
    title: "Rated 5.0 stars on Google."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 24
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement("figure", {
    key: r.n,
    style: {
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 28,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--pg-turf)',
      fontSize: 14,
      letterSpacing: 2
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '14px 0 18px',
      fontSize: 17.5,
      lineHeight: 1.55,
      color: 'var(--pg-ink)'
    }
  }, "\u201C", r.q, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)'
    }
  }, r.n, " \xB7 ", r.m)))))));
}

/* parse a tiny "prop:val;prop:val" string into a style object for the gallery spans */
function styleFromString(s) {
  const o = {};
  (s || '').split(';').filter(Boolean).forEach(r => {
    const [k, v] = r.split(':');
    o[k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v.trim();
  });
  return o;
}
window.PGHome = Home;
window.PGSectionHead = SectionHead;
window.PG_SERVICES = SERVICES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.js
try { (() => {
/* ProGround website — secondary pages: services index, areas, area detail, who we serve,
   pricing, gallery, about, process, reviews, faq, privacy, terms. */
const DSp = window.ProGroundDesignSystem_313bb9;
const {
  Button: PB,
  Eyebrow: PEb,
  Badge: PBg,
  FaqAccordion: PFaq,
  TrustBar: PTB,
  ContourDivider: PCD
} = DSp;
const PC = window.PGContainer;
const PSH = window.PGSectionHead;
const SD = window.PG_SERVICE_DETAILS;
const PIMG = {
  house: __pgImg('house-curb', 'img/house-curb.jpg'),
  sod: __pgImg('sod-install', 'img/sod-install.jpg'),
  aerial: __pgImg('yard-aerial', 'img/yard-aerial.jpg'),
  crew: __pgImg('crew-trimming', 'img/crew-trimming.jpg'),
  golden: __pgImg('lawn-golden', 'img/lawn-golden.jpg'),
  backyard: __pgImg('lawn-backyard', 'img/lawn-backyard.jpg'),
  drainA: __pgImg('drainage-after', 'img/drainage-after.jpg')
};

/* Shared photo-backed page hero with breadcrumb. */
function PageHero({
  onNav,
  crumbs,
  eyebrow,
  title,
  sub,
  img,
  badge
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--pg-deep-field)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(90deg, rgba(9,11,17,0.95) 0%, rgba(9,11,17,0.86) 45%, rgba(9,11,17,0.55) 100%), url(${img}) center/cover`
    }
  }), /*#__PURE__*/React.createElement(PC, {
    style: {
      position: 'relative',
      padding: 'clamp(52px,7vw,96px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-400)',
      marginBottom: 18
    }
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, c.route ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(c.route, c.param);
    },
    style: {
      border: 'none',
      color: 'var(--pg-slate-300)'
    }
  }, c.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-slate-300)'
    }
  }, c.label), i < crumbs.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-slate-500)'
    }
  }, " / ")))), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(PBg, {
    tone: "water"
  }, badge)) : /*#__PURE__*/React.createElement(PEb, {
    onDark: true
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 14,
      color: '#fff',
      fontSize: 'clamp(2.2rem,4.4vw,3.4rem)',
      maxWidth: '18ch'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--pg-slate-300)',
      maxWidth: '52ch',
      margin: '18px 0 0'
    }
  }, sub)));
}

/* Reusable image card that links somewhere. */
function LinkCard({
  img,
  badge,
  title,
  desc,
  cta,
  onNav,
  route,
  param
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(route, param);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      textDecoration: 'none',
      boxShadow: hover ? '0 18px 40px -22px rgba(11,14,21,0.5)' : '0 1px 0 rgba(11,14,21,0.04)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform 600ms var(--ease-standard)'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      background: 'var(--pg-growth)',
      color: 'var(--pg-deep-field)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 999
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20,
      color: 'var(--pg-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--pg-slate-600)',
      margin: '9px 0 14px'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--pg-turf)'
    }
  }, cta, " \u2192")));
}

/* ===================== SERVICES INDEX ===================== */
const SVC_ORDER = [['renovations', 'service', PIMG.house], ['installation', 'service', PIMG.sod], ['drainage', 'drainage', PIMG.drainA], ['grading', 'service', PIMG.backyard], ['maintenance', 'service', PIMG.crew], ['mulch', 'service', PIMG.golden], ['commercial', 'service', PIMG.aerial]];
const MORE_SVCS = ['Residential Lawn Mowing', 'Large Property Mowing', 'Hedge & Shrub Trimming', 'Landscape Bed Maintenance', 'Hard-Surface Weed Control', 'Landscape Bed Cleanup', 'Decorative Rock Installation', 'Christmas Light Installation'];
function ServicesIndex({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'Services'
    }],
    eyebrow: "What we do",
    title: "One crew for the whole property",
    sub: "Renovation, installation, drainage, grading and year-round care \u2014 each with a starting price and a written scope.",
    img: PIMG.aerial
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: 26
    }
  }, SVC_ORDER.map(([k, route, img]) => {
    const s = SD[k];
    const name = k === 'drainage' ? 'Drainage Solutions' : s.name;
    const price = k === 'drainage' ? 'From $1,000' : s.price;
    const desc = k === 'drainage' ? 'Catch basins, pipe and grading built for our heavy clay soil.' : s.sub;
    return /*#__PURE__*/React.createElement(LinkCard, {
      key: k,
      img: img,
      badge: price,
      title: name,
      desc: desc,
      cta: "Learn more",
      onNav: onNav,
      route: route,
      param: route === 'drainage' ? null : k
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      background: 'var(--pg-bone-deep)',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 'clamp(28px,4vw,44px)'
    }
  }, /*#__PURE__*/React.createElement(PEb, null, "Also available"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 18px',
      fontSize: 'clamp(1.4rem,2.4vw,1.9rem)'
    }
  }, "More ways we help"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
      gap: 12
    }
  }, MORE_SVCS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15.5,
      color: 'var(--pg-ink)',
      padding: '10px 0',
      borderBottom: '1px solid var(--pg-line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)'
    }
  }, "\u2713"), m))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Request an estimate"))))));
}

/* ===================== SERVICE AREAS ===================== */
const AREAS = {
  'Baton Rouge': {
    img: PIMG.house,
    blurb: 'Louisiana\u2019s capital and our largest service area — established neighborhoods where mature landscaping and clay-soil drainage are the two things we get called for most.',
    hoods: ['University Club Plantation', 'Bocage', 'Old Goodwood', 'Goodwood', 'Highland Road', 'Oak Hills', 'Santa Maria', 'Country Club of Louisiana', 'The Settlement at Willow Grove', 'Southdowns', 'Kenilworth', 'Bluebonnet Highlands', 'Jefferson Terrace', 'Westminster', 'Woodgate', 'Highland Creek']
  },
  'Denham Springs': {
    img: PIMG.backyard,
    blurb: 'Home base. ProGround is locally owned here, so response times are fastest and you will often see us the same day.'
  },
  'Prairieville': {
    img: PIMG.sod,
    blurb: 'Fast-growing Ascension Parish community with newer builds that need finished landscaping, sod and drainage tie-ins.'
  },
  'Walker': {
    img: PIMG.aerial,
    blurb: 'Livingston Parish properties on larger lots — mowing, grading and drainage where water has room to move but nowhere to go.'
  },
  'Central': {
    img: PIMG.crew,
    blurb: 'The City of Central and surrounding areas — full-property maintenance and renovation for established homes.'
  },
  'Shenandoah': {
    img: PIMG.golden,
    blurb: 'Established Baton Rouge subdivision where curb-appeal renovations and bed refreshes are the most requested work.'
  }
};
function AreasIndex({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'Service Areas'
    }],
    eyebrow: "Where we work",
    title: "Serving Greater Baton Rouge",
    sub: "Locally owned in Denham Springs, working across the parishes with same-day response.",
    img: PIMG.aerial
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: 26
    }
  }, Object.entries(AREAS).map(([city, a]) => /*#__PURE__*/React.createElement(LinkCard, {
    key: city,
    img: a.img,
    title: city,
    desc: a.blurb,
    cta: 'ProGround in ' + city,
    onNav: onNav,
    route: "area",
    param: city
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 40,
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--pg-slate-600)'
    }
  }, "Not listed? We cover much of Greater Baton Rouge \u2014 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('estimate');
    },
    style: {
      color: 'var(--pg-turf)'
    }
  }, "tell us your address"), " and we will confirm coverage."))));
}
function AreaPage({
  onNav,
  param
}) {
  const city = AREAS[param] ? param : 'Baton Rouge';
  const a = AREAS[city];
  const others = Object.keys(AREAS).filter(c => c !== city);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'Service Areas',
      route: 'areas'
    }, {
      label: city
    }],
    eyebrow: "Service area",
    title: 'Landscaping & drainage in ' + city,
    sub: a.blurb,
    img: a.img
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'clamp(32px,5vw,64px)',
      alignItems: 'start'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PEb, null, "What we do here"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.6rem,2.8vw,2.2rem)'
    }
  }, "Full-property care for ", city, " homes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, "The same crew handles maintenance, renovations, drainage and grading \u2014 so you are not juggling three contractors. Send a few photos and get a written estimate the same day, with no trip fee."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      margin: '22px 0 28px'
    },
    className: "pg-checks"
  }, SVC_ORDER.slice(0, 6).map(([k, route]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(route, route === 'drainage' ? null : k);
    },
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15.5,
      color: 'var(--pg-ink)',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)'
    }
  }, "\u2713"), k === 'drainage' ? 'Drainage Solutions' : SD[k].name))), a.hoods && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)',
      marginBottom: 12
    }
  }, "Neighborhoods we serve in ", city), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, a.hoods.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--pg-ink)',
      background: 'var(--pg-bone-deep)',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 999,
      padding: '5px 12px'
    }
  }, h)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Request an estimate"), /*#__PURE__*/React.createElement(PB, {
    variant: "secondary",
    size: "lg",
    href: "tel:+12253248252"
  }, "Call ", window.PG_PHONE))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone-deep)',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--pg-slate-500)',
      marginBottom: 14
    }
  }, "Nearby areas"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, others.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('area', c);
    },
    style: {
      color: 'var(--pg-ink)',
      fontSize: 16,
      border: 'none',
      display: 'flex',
      justifyContent: 'space-between'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pg-turf)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--pg-ink)'
  }, c, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)'
    }
  }, "\u2192")))))))));
}

/* ===================== WHO WE SERVE ===================== */
function WhoWeServe({
  onNav
}) {
  const panels = [{
    img: PIMG.house,
    tag: 'Homeowners',
    h: 'Residential',
    p: 'Established homes and new builds across Greater Baton Rouge. From a bed refresh to a full renovation, drainage fix or year-round maintenance — one crew that shows up.',
    pts: ['Curb-appeal renovations', 'Drainage & grading fixes', 'Recurring mowing & bed care', 'New-build landscaping'],
    route: 'service',
    param: 'renovations'
  }, {
    img: PIMG.aerial,
    tag: 'Businesses & HOAs',
    h: 'Commercial',
    p: 'Offices, retail, HOAs and multi-property portfolios that need dependable grounds care on a predictable schedule with a single point of contact and clean invoicing.',
    pts: ['Scheduled grounds maintenance', 'Entrance & island improvements', 'Portfolio & HOA agreements', 'One point of contact'],
    route: 'service',
    param: 'commercial'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'Who We Serve'
    }],
    eyebrow: "Who we serve",
    title: "Residential and commercial",
    sub: "Same crew, same standards \u2014 scoped to the property in front of us.",
    img: PIMG.crew
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(28px,4vw,44px)'
    },
    className: "pg-hero-grid"
  }, panels.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.h,
    style: {
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.h,
    style: {
      width: '100%',
      height: 240,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,3vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-turf)'
    }
  }, p.tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 10px',
      fontSize: 'clamp(1.6rem,2.6vw,2.1rem)'
    }
  }, p.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.6,
      color: 'var(--pg-slate-700)',
      margin: 0
    }
  }, p.p), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, p.pts.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 15,
      color: 'var(--pg-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)'
    }
  }, "\u2713"), x))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "primary",
    onClick: () => onNav('estimate')
  }, "Request an estimate"), /*#__PURE__*/React.createElement(PB, {
    variant: "ghost",
    onClick: () => onNav(p.route, p.param)
  }, "Learn more"))))))));
}

/* ===================== PRICING ===================== */
const PRICING = [['Landscape Renovations', 'From $750', 'service', 'renovations'], ['Landscape Installation', 'From $750', 'service', 'installation'], ['Drainage Solutions', 'From $1,000', 'drainage', null], ['Grading & Yard Leveling', 'From $750', 'service', 'grading'], ['Property Maintenance', 'From $145/mo', 'service', 'maintenance'], ['Mulch, Pine Straw & Rock', 'From $350', 'service', 'mulch'], ['Commercial Grounds', 'Custom quote', 'service', 'commercial']];
function PricingPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'Pricing'
    }],
    eyebrow: "Straightforward pricing",
    title: "Starting prices, no trip fee",
    sub: "Every job gets a written estimate with a defined scope. These are honest starting points \u2014 the final number depends on your property.",
    img: PIMG.golden
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, PRICING.map(([name, price, route, param], i) => /*#__PURE__*/React.createElement("a", {
    key: name,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(route, param);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '20px 24px',
      borderTop: i ? '1px solid var(--pg-line)' : 'none',
      border: 'none',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--pg-bone-deep)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.05rem,1.8vw,1.25rem)',
      color: 'var(--pg-ink)',
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--pg-turf)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-slate-400)'
    }
  }, "\u2192"))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--pg-slate-500)',
      marginTop: 20
    }
  }, "Pricing varies based on property size, materials, accessibility, service frequency, and project scope. Free consultations and customized estimates are available \u2014 no trip fee, no diagnostic fee."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Get my exact price"), /*#__PURE__*/React.createElement(PB, {
    variant: "secondary",
    size: "lg",
    href: "tel:+12253248252"
  }, "Call ", window.PG_PHONE)))));
}

/* ===================== GALLERY ===================== */
const GALLERY = [{
  src: PIMG.aerial,
  cap: 'Paver patio & hardscape',
  area: 'Baton Rouge'
}, {
  src: PIMG.house,
  cap: 'Curb-appeal renovation',
  area: 'Shenandoah'
}, {
  src: PIMG.sod,
  cap: 'Fresh sod & healthy turf',
  area: 'Prairieville'
}, {
  src: PIMG.backyard,
  cap: 'Full-yard renovation',
  area: 'Denham Springs'
}, {
  src: PIMG.crew,
  cap: 'Property maintenance',
  area: 'Central'
}, {
  src: PIMG.golden,
  cap: 'Fresh mulch & clean beds',
  area: 'Walker'
}];
function GalleryPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'Gallery'
    }],
    eyebrow: "Our work",
    title: "Recent projects across Greater Baton Rouge",
    sub: "A look at renovations, installs, drainage and the properties we keep looking their best.",
    img: PIMG.house
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 18
    }
  }, GALLERY.map((g, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      position: 'relative',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.cap,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '30px 16px 14px',
      background: 'linear-gradient(0deg, rgba(9,11,17,0.85), transparent)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, g.cap), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--pg-slate-300)',
      marginTop: 3
    }
  }, g.area))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)'
    }
  }, "Photos are representative of ProGround\u2019s work. Want to see a project like yours? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('estimate');
    },
    style: {
      color: 'var(--pg-turf)'
    }
  }, "Ask for examples with your estimate.")))));
}

/* ===================== ABOUT ===================== */
const ABOUT_SYSTEM = [['Written estimate', 'A real number on paper before anything starts.'], ['Defined scope', 'Exactly what is being done — no gray areas.'], ['Digital approval', 'Approve the scope and price online, on your time.'], ['A scheduled date', 'You know when we are coming, and we come.'], ['A follow-up', 'We check the finished work ourselves when it is done.']];
const ABOUT_HANDLES = [['Renovations & installs', 'Landscape renovations and new installations — beds rebuilt or a bare yard finished.'], ['Drainage & grading', 'For yards that hold water, which around here is most of them eventually.'], ['Beds, mulch & rock', 'Bed cleanups, mulch, pine straw and decorative rock to finish the look.'], ['Year-round maintenance', 'A set schedule and one predictable monthly bill — not a crew that disappears.']];
function AboutPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'About'
    }],
    eyebrow: "About ProGround",
    title: "When you call, you get the owner",
    sub: "ProGround Land Management started in October 2025, after owner Andrew Lee spent five years in this trade watching how it usually gets done.",
    img: PIMG.backyard
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(36px,5vw,72px)',
      alignItems: 'center'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 460
    },
    className: "pg-collage"
  }, /*#__PURE__*/React.createElement("img", {
    src: PIMG.house,
    alt: "Renovated home exterior",
    style: {
      width: '76%',
      height: 340,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      display: 'block',
      boxShadow: '0 24px 60px -30px rgba(11,14,21,0.6)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: PIMG.crew,
    alt: "Freshly trimmed hedge",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '52%',
      height: 240,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      border: '6px solid var(--pg-bone)',
      boxShadow: '0 24px 60px -30px rgba(11,14,21,0.6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 8,
      background: 'var(--pg-deep-field)',
      color: '#fff',
      padding: '14px 20px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: '0 20px 50px -24px rgba(11,14,21,0.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--pg-growth)',
      lineHeight: 1
    }
  }, "Est. Oct 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--pg-slate-300)',
      marginTop: 5
    }
  }, "Owner-operated \xB7 Denham Springs"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PEb, null, "Why ProGround exists"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.8rem,3.2vw,2.5rem)'
    }
  }, "Most of what frustrates owners ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)'
    }
  }, "has nothing to do with grass.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, "Andrew Lee spent five years in this trade watching how it usually gets done. The problems he saw again and again had nothing to do with grass or plants. It is not knowing what a job will cost. It is a callback that never comes. It is a crew that shows up once and then disappears for three weeks with no explanation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, "None of that seemed hard to fix. It just needed somebody to actually do it. So in October 2025 he started ProGround."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, "Andrew lives in Denham Springs and works here. He looks at the property, writes the estimate, plans the job and checks the finished work himself. When you call ProGround, you get the owner."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Work with us"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement(PSH, {
    center: true,
    eyebrow: "How ProGround runs",
    title: "Five things you can count on.",
    sub: "Customers know what is being done, what it costs and what happens next."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
      gap: 18
    }
  }, ABOUT_SYSTEM.map(([h, d], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderTop: '3px solid var(--pg-turf)',
      borderRadius: 'var(--radius-sm)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-turf)'
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 10,
      fontSize: 18
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--pg-slate-600)',
      margin: '6px 0 0'
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement(PSH, {
    eyebrow: "What ProGround handles",
    title: "One company instead of three.",
    sub: "Over 100 homes served across Baton Rouge, Denham Springs, Prairieville, Walker, Central and the surrounding parishes \u2014 with commercial grounds maintenance growing alongside it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 24
    }
  }, ABOUT_HANDLES.map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 19
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--pg-slate-600)',
      margin: '8px 0 0'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('services')
  }, "See all services")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(PEb, null, "On price"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.7rem,3vw,2.3rem)'
    }
  }, "Not the cheapest \u2014 and not trying to be."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, "Someone will always do it for less. What ProGround sells instead is a job planned properly, built with good material, finished with attention to detail, and still looking right in a few years."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "ghost",
    onClick: () => onNav('pricing')
  }, "See starting prices \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--pg-deep-field)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(180deg, rgba(9,11,17,0.9), rgba(9,11,17,0.97)), url(${PIMG.golden}) center/cover`
    }
  }), /*#__PURE__*/React.createElement(PC, {
    style: {
      position: 'relative',
      padding: 'clamp(64px,8vw,110px) 0',
      maxWidth: 900,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      color: 'var(--pg-growth)',
      lineHeight: 0.5
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '10px 0 24px',
      color: '#fff',
      fontSize: 'clamp(1.4rem,2.8vw,2rem)',
      lineHeight: 1.4,
      fontWeight: 500
    }
  }, "Good business comes down to doing what you say you\u2019re going to do, communicating with people, and taking pride in your work. Our customers aren\u2019t account numbers. They\u2019re homeowners, families, business owners and neighbors in the communities we all live in."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--pg-slate-300)'
    }
  }, "Andrew Lee \xB7 Owner, ProGround Land Management"))));
}

/* ===================== PROCESS ===================== */
const PSTEPS = [['01', 'You send photos', 'Describe the problem and send a few photos from your phone — beds, the low spot, the whole yard, whatever is bugging you.'], ['02', 'We look at the property', 'Andrew reviews it with same-day response, often the same day. For bigger projects we schedule a free site visit — no trip fee.'], ['03', 'Written estimate', 'You get a written estimate with a clearly defined scope, so the price and the plan are on paper before anyone starts.'], ['04', 'You approve digitally', 'Approve the scope and price online whenever it works for you. No pressure, no surprises, no chasing.'], ['05', 'We schedule & follow up', 'We put you on the schedule, do the work, and check in when it is done to make sure it is right.']];
function ProcessPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'How We Work'
    }],
    eyebrow: "The process",
    title: "From photos to finished \u2014 in five steps",
    sub: "No pressure and no trip fee. Here is exactly what happens after you reach out.",
    img: PIMG.crew
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, PSTEPS.map(([n, h, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'clamp(20px,4vw,44px)',
      padding: '28px 0',
      borderBottom: i < PSTEPS.length - 1 ? '1px solid var(--pg-line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.2rem,4vw,3rem)',
      color: 'var(--pg-turf)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'clamp(1.3rem,2.2vw,1.6rem)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--pg-slate-700)',
      margin: '8px 0 0',
      maxWidth: '58ch'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Start my estimate"), /*#__PURE__*/React.createElement(PB, {
    variant: "secondary",
    size: "lg",
    href: "tel:+12253248252"
  }, "Call ", window.PG_PHONE)))));
}

/* ===================== REVIEWS ===================== */
const ALL_REVIEWS = [{
  q: 'I simply shared a few photos and described what I wanted, and they took it from there. I received a quote the same day, the work was completed within a week, and the results exceeded my expectations.',
  n: 'Aimee Lemann',
  m: 'Google review'
}, {
  q: 'Andrew and his team do an awesome job on the attention to the details. They are very professional, punctual and work very efficiently. I shopped around and their prices are in line with his competition.',
  n: 'Connie Schiller',
  m: 'Google review'
}, {
  q: 'Reliable, detail-oriented, and driven. Their automated property management made everything seamless. We truly loved our experience and highly recommend!',
  n: 'Bridgette Homer',
  m: 'Google review'
}, {
  q: 'Andrew did an excellent job with my flower beds. He showed up when he said he would, he did a great job, he was reasonably priced and VERY professional and polite!',
  n: 'Tracy Evans',
  m: 'Google review'
}, {
  q: 'ProGround Land Management is the best company I have ever used for my landscaping needs. The value and quality of work is unmatched. Highly recommend.',
  n: 'Bennett Roman',
  m: 'Google review'
}, {
  q: 'A customer oriented company, they worry about my lawn and yard so I don\u2019t have to. A lot of times it is hit or miss to get someone reliable and really good. These guys are both.',
  n: 'Matthew Lee',
  m: 'Google review'
}, {
  q: 'Andrew and his crew did an excellent job transforming a difficult space to my specifications. They are professional, polite, and delivered the results I was expecting.',
  n: 'Shana',
  m: 'Google review'
}, {
  q: 'Best company by far, they bring the heat. Will continue to use them. Great pricing, great work, great people.',
  n: 'Carter Stevens',
  m: 'Google review'
}];
function ReviewsPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'Reviews'
    }],
    eyebrow: "Reviews",
    title: "Rated 5.0 stars on Google",
    sub: "What homeowners across Greater Baton Rouge say after the work is done.",
    img: PIMG.golden
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      color: 'var(--pg-turf)',
      lineHeight: 1
    }
  }, "5.0"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--pg-turf)',
      fontSize: 20,
      letterSpacing: 3
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--pg-slate-600)',
      marginTop: 4
    }
  }, "Based on Google reviews \xB7 100+ properties served"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 24
    }
  }, ALL_REVIEWS.map(r => /*#__PURE__*/React.createElement("figure", {
    key: r.n,
    style: {
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 28,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--pg-turf)',
      fontSize: 14,
      letterSpacing: 2
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '14px 0 18px',
      fontSize: 17.5,
      lineHeight: 1.55,
      color: 'var(--pg-ink)'
    }
  }, "\u201C", r.q, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)'
    }
  }, r.n, " \xB7 ", r.m)))))));
}

/* ===================== FAQ ===================== */
const FAQ_GROUPS = [{
  h: 'Estimates & pricing',
  items: [{
    q: 'Is the estimate really free?',
    a: 'Yes. Free estimates, no trip fee and no diagnostic fee. Send photos or have us out — either way you get a written price with a defined scope.'
  }, {
    q: 'How fast will I hear back?',
    a: 'Same-day response. Inquiries are answered 24/7, and most get a real answer the same day.'
  }, {
    q: 'How do you set the price?',
    a: 'Every job gets a written estimate. The number depends on property size, materials, access, frequency and scope — the service pages list the exact drivers.'
  }]
}, {
  h: 'Services & scheduling',
  items: [{
    q: 'Do you do both maintenance and big projects?',
    a: 'Yes — that is the point of ProGround. The same crew mows, renovates, installs, grades and fixes drainage.'
  }, {
    q: 'How does recurring billing work?',
    a: 'Maintenance agreements are billed automatically each month on a set schedule, so there is nothing to remember.'
  }, {
    q: 'Can you take over from my current company?',
    a: 'Often. Tell us what is missing today and we will build a plan that fixes it.'
  }]
}, {
  h: 'Drainage & grading',
  items: [{
    q: 'Why does water keep sitting in my yard?',
    a: 'Heavy clay holds water on the surface instead of soaking in. Adding topsoil rarely fixes it — the ground usually needs regrading or a catch-basin system.'
  }, {
    q: 'French drain or grading — which do I need?',
    a: 'It depends on how the water behaves. Water sitting in one spot points to a catch basin; water sheeting across a yard points to grading. The drainage diagnostic gives a starting read.'
  }]
}, {
  h: 'Guarantee & payment',
  items: [{
    q: 'Do you guarantee your work?',
    a: 'ProGround Land Management stands behind the quality of our workmanship. If an issue arises that is directly related to our installation or workmanship, we will evaluate it and work to make it right. Any project-specific workmanship warranties or manufacturer warranties will be clearly outlined in the customer\u2019s proposal or service agreement. Warranty coverage does not include damage caused by weather, improper watering or maintenance, pests, disease, third parties, or conditions outside of our control.'
  }, {
    q: 'What payment methods do you accept?',
    a: 'We accept major credit/debit cards, checks, and ACH bank transfers. Recurring property maintenance clients can also use automatic payments for convenient monthly billing. Financing is not currently offered.'
  }, {
    q: 'Do you run any promotions?',
    a: 'We periodically offer seasonal promotions and new-customer specials. Current promotions may vary throughout the year. Contact us to ask about any available offers.'
  }]
}];
function FaqPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: 'FAQ'
    }],
    eyebrow: "Questions",
    title: "Frequently asked questions",
    sub: "The things homeowners ask most, answered straight.",
    img: PIMG.aerial
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,110px) 0',
      maxWidth: 900
    }
  }, FAQ_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.h,
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.3rem,2.2vw,1.7rem)',
      marginBottom: 18
    }
  }, g.h), /*#__PURE__*/React.createElement(PFaq, {
    items: g.items
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone-deep)',
      border: '1px solid var(--pg-line-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 'clamp(24px,3vw,36px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'clamp(1.2rem,2vw,1.5rem)'
    }
  }, "Still have a question?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--pg-slate-600)',
      fontSize: 16
    }
  }, "Call or text ", window.PG_PHONE, " \u2014 answered 24/7.")), /*#__PURE__*/React.createElement(PB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Request an estimate")))));
}

/* ===================== LEGAL ===================== */
function LegalPage({
  onNav,
  title,
  crumb,
  intro,
  sections
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement(PageHero, {
    onNav: onNav,
    crumbs: [{
      label: 'Home',
      route: 'home'
    }, {
      label: crumb
    }],
    eyebrow: "Legal",
    title: title,
    img: PIMG.backyard
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PC, {
    style: {
      padding: 'clamp(56px,8vw,96px) 0',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--pg-slate-700)'
    }
  }, intro), sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.h,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.2rem,2vw,1.5rem)',
      marginBottom: 10
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--pg-slate-700)',
      margin: 0
    }
  }, s.p))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 40,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)'
    }
  }, "Questions about this policy? Contact info@progroundland.com or call ", window.PG_PHONE, "."))));
}
function PrivacyPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement(LegalPage, {
    onNav: onNav,
    crumb: "Privacy",
    title: "Privacy Policy",
    intro: "ProGround Land Management respects your privacy. This page explains what we collect when you request an estimate or contact us, and how we use it.",
    sections: [{
      h: 'What we collect',
      p: 'Contact details you provide — name, phone, email, property address — plus any photos or project details you share so we can prepare an accurate estimate.'
    }, {
      h: 'How we use it',
      p: 'Only to respond to your inquiry, prepare estimates, schedule and perform work, and follow up. We do not sell your information.'
    }, {
      h: 'Text messages',
      p: 'If you opt in, we may text the number you provide about your estimate or scheduled service. Reply STOP at any time to opt out.'
    }, {
      h: 'Data retention',
      p: 'We keep inquiry and customer records only as long as needed to serve you and meet legal or accounting requirements.'
    }]
  });
}
function TermsPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement(LegalPage, {
    onNav: onNav,
    crumb: "Terms",
    title: "Terms of Service",
    intro: "These terms cover use of the ProGround Land Management website and the estimates we provide. Booked work is governed by the written scope you approve.",
    sections: [{
      h: 'Estimates',
      p: 'Estimates are based on the information and photos you provide and are confirmed on a site visit. Final scope and price are set in the written estimate you approve.'
    }, {
      h: 'Scheduling',
      p: 'Service dates are scheduled after approval and may shift with weather or site conditions. We communicate changes as early as possible.'
    }, {
      h: 'Workmanship',
      p: 'We stand behind our work and address issues with completed scopes. Plant establishment depends on after-care and conditions outside our control.'
    }, {
      h: 'Website content',
      p: 'Photos and pricing shown are representative. Starting prices are not quotes; your price is set in your written estimate.'
    }]
  });
}
Object.assign(window, {
  PGServicesIndex: ServicesIndex,
  PGAreasIndex: AreasIndex,
  PGAreaPage: AreaPage,
  PGWhoWeServe: WhoWeServe,
  PGPricingPage: PricingPage,
  PGGalleryPage: GalleryPage,
  PGAboutPage: AboutPage,
  PGProcessPage: ProcessPage,
  PGReviewsPage: ReviewsPage,
  PGFaqPage: FaqPage,
  PGPrivacyPage: PrivacyPage,
  PGTermsPage: TermsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.js
try { (() => {
/* ProGround website — data-driven Service detail pages + Drainage money page (Yard Water Diagnostic). */
const DSs = window.ProGroundDesignSystem_313bb9;
const {
  Button: SB,
  PriceBlock: SP,
  BeforeAfterSlider: SBA,
  FaqAccordion: SFaq,
  Eyebrow: SEb,
  Badge: SBg,
  ServiceCard: SSC
} = DSs;
const CC = window.PGContainer;
const SH = window.PGSectionHead;
const FOOTNOTE = 'Pricing varies based on property size, materials, accessibility, service frequency, and project scope. Free consultations and customized estimates are available.';
const SIMG = {
  house: __pgImg('house-curb', 'img/house-curb.jpg'),
  sod: __pgImg('sod-install', 'img/sod-install.jpg'),
  aerial: __pgImg('yard-aerial', 'img/yard-aerial.jpg'),
  crew: __pgImg('crew-trimming', 'img/crew-trimming.jpg'),
  golden: __pgImg('lawn-golden', 'img/lawn-golden.jpg'),
  backyard: __pgImg('lawn-backyard', 'img/lawn-backyard.jpg')
};
const BA = {
  renoB: __pgImg('ba-reno-before', 'img/ba-reno-before.jpg'),
  renoA: __pgImg('ba-reno-after', 'img/ba-reno-after.jpg'),
  installB: __pgImg('ba-install-before', 'img/ba-install-before.jpg'),
  installA: __pgImg('ba-install-after', 'img/ba-install-after.jpg'),
  gradingB: __pgImg('ba-grading-before', 'img/ba-grading-before.jpg'),
  gradingA: __pgImg('ba-grading-after', 'img/ba-grading-after.jpg'),
  maintB: __pgImg('ba-maint-before', 'img/ba-maint-before.jpg'),
  mulchB: __pgImg('ba-mulch-before', 'img/ba-mulch-before.jpg'),
  commB: __pgImg('ba-comm-before', 'img/ba-comm-before.jpg'),
  drainB: __pgImg('drainage-before', 'img/drainage-before.jpg'),
  drainA: __pgImg('drainage-after', 'img/drainage-after.jpg')
};
const SERVICE_DETAILS = {
  renovations: {
    name: 'Landscape Renovations',
    crumb: 'Landscape Renovations',
    eyebrow: 'Flagship service · from $750',
    headline: 'Landscape renovations in Greater Baton Rouge',
    sub: 'Overgrown or dated beds rebuilt with new plants, mulch, edging and a better layout — with a written scope and same-day response.',
    price: 'From $750',
    img: SIMG.house,
    problemH: 'Overgrown beds make a home look dated.',
    problemP: ['On established properties, foundation shrubs outgrow their beds, bed lines soften, and the whole house reads older than it is. A renovation resets the bones — not just the plants. Bed lines matter more than plant count for how a house looks from the street.', 'What makes a renovation cost $1,500 versus $6,000: bed square footage, plant size at install, removal volume, and access for equipment.'],
    included: ['Demolition and removal of tired plant material', 'Soil and bed preparation', 'Edging and bed-line reshaping', 'Plant selection for South Louisiana heat and clay', 'Mulch or pine straw finish', 'After-care instructions'],
    drivers: ['Bed square footage', 'Plant size at install', 'Removal volume', 'Equipment access', 'Irrigation present or not'],
    ba: 'Front-bed renovation · Greater Baton Rouge',
    baBefore: BA.renoB,
    baAfter: BA.renoA,
    faqs: [{
      q: 'How much does a landscape renovation cost?',
      a: 'Renovations start at $750. Most full front-bed renovations in Baton Rouge land between $2,500 and $6,000 depending on bed size, plant material and access.'
    }, {
      q: 'Do you remove the old plants?',
      a: 'Yes — demolition and removal of tired plant material is part of the written scope.'
    }, {
      q: 'How long does a renovation take?',
      a: 'Most residential front-bed renovations are completed in one to three days once scheduled.'
    }, {
      q: 'What plants hold up in Baton Rouge summers?',
      a: 'We select plant material for South Louisiana heat and clay, and give you after-care instructions so it establishes well.'
    }, {
      q: 'Do you maintain what you install?',
      a: 'We do — many renovation clients move onto an annual property maintenance agreement.'
    }],
    related: [['mulch', 'Mulch, Pine Straw & Rock'], ['maintenance', 'Annual Property Maintenance'], ['drainage', 'Drainage Solutions']]
  },
  installation: {
    name: 'Landscape Installation',
    crumb: 'Landscape Installation',
    eyebrow: 'New landscaping · from $750',
    headline: 'Landscape installation for new and bare yards',
    sub: 'A finished landscape from scratch — plants, shrubs, sod, mulch and edging installed and ready the day we leave.',
    price: 'From $750',
    img: SIMG.sod,
    problemH: 'A bare yard is a blank slate — and a big decision.',
    problemP: ['New builds and cleared lots start with nothing: no beds, no sod, no plan. The order of operations matters — grading and drainage first, then beds, then sod — so nothing has to be torn out and redone later.', 'We plan the whole yard up front so the pieces fit together, then install it in the right sequence.'],
    included: ['Layout and plant plan for the space', 'Bed shaping, edging and soil prep', 'Plants and shrubs selected for clay and heat', 'Sod installation and grading tie-in', 'Mulch, pine straw or rock finish', 'After-care instructions'],
    drivers: ['Total square footage', 'Sod vs. seed', 'Plant size and count', 'Grading or drainage needed first', 'Site access'],
    ba: 'New landscape installation · Greater Baton Rouge',
    baBefore: BA.installB,
    baAfter: BA.installA,
    faqs: [{
      q: 'Do you install sod and plants, or just design?',
      a: 'We install. You get a finished yard — plants, sod, mulch and edging in place — not just a plan on paper.'
    }, {
      q: 'Should drainage come before landscaping?',
      a: 'Almost always. We grade and handle water first so new sod and beds are not sitting in a low spot.'
    }, {
      q: 'How soon can new sod be walked on?',
      a: 'Keep foot traffic light for the first two to three weeks while roots take, and water on the schedule we leave you.'
    }],
    related: [['grading', 'Grading & Yard Leveling'], ['drainage', 'Drainage Solutions'], ['maintenance', 'Property Maintenance']]
  },
  grading: {
    name: 'Grading & Yard Leveling',
    crumb: 'Grading & Yard Leveling',
    eyebrow: 'Reshape the ground · from $750',
    headline: 'Grading and yard leveling in Baton Rouge',
    sub: 'Reshape the low, soggy or uneven parts of your yard so water runs off and the space is usable again.',
    price: 'From $750',
    img: SIMG.sod,
    problemH: 'A yard that will not drain is usually a grading problem.',
    problemP: ['Low corners, ruts and settled spots collect water and stay muddy for days. Adding topsoil on top rarely fixes it — the ground has to be reshaped so water has somewhere to go.', 'We re-establish fall across the yard, tie it into drainage where needed, and finish so the surface is smooth and mowable.'],
    included: ['Assessment of fall and low points', 'Reshaping and re-grading the surface', 'Fill and compaction where needed', 'Tie-in to drainage or an outlet', 'Final grade for sod or seed', 'Cleanup and restoration'],
    drivers: ['Area to be graded', 'Amount of fill required', 'Drainage tie-in needed', 'Equipment access', 'Sod or seed to finish'],
    ba: 'Reshaped bed & clean edging · Greater Baton Rouge',
    baBefore: BA.gradingB,
    baAfter: BA.gradingA,
    faqs: [{
      q: 'Grading or drainage — which do I need?',
      a: 'Often both. Grading moves water across the surface; drainage carries it away underground. We assess and recommend the right mix on a free site visit.'
    }, {
      q: 'Will you re-sod after grading?',
      a: 'We finish to a clean final grade and can install sod or seed as part of the scope.'
    }],
    related: [['drainage', 'Drainage Solutions'], ['installation', 'Landscape Installation'], ['maintenance', 'Property Maintenance']]
  },
  maintenance: {
    name: 'Property Maintenance',
    crumb: 'Property Maintenance',
    eyebrow: 'Recurring care · from $145/mo',
    headline: 'Annual property maintenance you never have to chase',
    sub: 'Mowing, bed care and seasonal work on a set schedule, billed automatically each month. One crew, one agreement, done.',
    price: 'From $145/mo',
    img: SIMG.crew,
    problemH: 'Chasing a lawn crew every few weeks gets old.',
    problemP: ['Most homeowners are tired of calling around every time the grass gets tall. A recurring agreement means set service days, a defined scope and automatic billing — the work just happens.', 'Because we also renovate and install, the same crew that maintains your property is the one that can rebuild it when it is time.'],
    included: ['Mowing, edging and blowing on a set schedule', 'Bed weeding and seasonal cleanups', 'Shrub and hedge trimming', 'Mulch and pine straw refreshes', 'Priority scheduling for extra work', 'Automatic monthly billing'],
    drivers: ['Property size', 'Service frequency', 'Beds included or turf only', 'Number of visits per month', 'Add-on seasonal work'],
    ba: 'Overgrown hedge, trimmed & cleaned · Greater Baton Rouge',
    baBefore: BA.maintB,
    baAfter: SIMG.crew,
    faqs: [{
      q: 'How does billing work?',
      a: 'Recurring agreements are billed automatically each month, so there is nothing to remember and no invoice to chase.'
    }, {
      q: 'Can I include beds and just not mowing?',
      a: 'Yes. We scope the plan to what you want — turf only, beds only, or the whole property.'
    }, {
      q: 'Do you take over from another company?',
      a: 'Often. Tell us who you use now and what is missing, and we will build a plan that fixes it.'
    }],
    related: [['renovations', 'Landscape Renovations'], ['mulch', 'Mulch, Pine Straw & Rock'], ['commercial', 'Commercial Grounds']]
  },
  mulch: {
    name: 'Mulch, Pine Straw & Rock',
    crumb: 'Mulch, Pine Straw & Rock',
    eyebrow: 'Bed finish · from $350',
    headline: 'Mulch, pine straw and decorative rock',
    sub: 'Sharp, finished beds in an afternoon — fresh mulch, pine straw or rock installed over properly prepped and edged ground.',
    price: 'From $350',
    img: SIMG.golden,
    problemH: 'Faded mulch makes the whole yard look neglected.',
    problemP: ['Mulch breaks down and washes out; beds fade and lose their edge. A fresh install of mulch, pine straw or rock instantly resets curb appeal — especially with clean, reshaped edges.', 'We prep and edge first so the finish looks intentional and holds up, rather than just piling new material on top.'],
    included: ['Bed cleanup and light weeding', 'Edging and bed-line reshaping', 'Fresh mulch, pine straw or decorative rock', 'Even, consistent depth', 'Cleanup of hard surfaces', 'Optional weed-barrier under rock'],
    drivers: ['Bed square footage', 'Material chosen', 'Edging and reshaping needed', 'Weed barrier for rock', 'Site access'],
    ba: 'Fresh mulch & edging · Greater Baton Rouge',
    baBefore: BA.mulchB,
    baAfter: SIMG.golden,
    faqs: [{
      q: 'Mulch, pine straw or rock — which is best?',
      a: 'Mulch enriches soil and looks refined; pine straw is economical and classic for South Louisiana; rock is low-maintenance and permanent. We help you pick per bed.'
    }, {
      q: 'Do you edge the beds too?',
      a: 'Yes — reshaped, clean edges are what make a fresh finish look sharp instead of just topped off.'
    }],
    related: [['renovations', 'Landscape Renovations'], ['maintenance', 'Property Maintenance'], ['installation', 'Landscape Installation']]
  },
  commercial: {
    name: 'Commercial Grounds',
    crumb: 'Commercial Grounds',
    eyebrow: 'For businesses · custom quote',
    headline: 'Commercial grounds maintenance and improvements',
    sub: 'Dependable grounds care and landscape improvements for offices, retail, HOAs and multi-property portfolios across Greater Baton Rouge.',
    price: 'Custom quote',
    img: SIMG.backyard,
    problemH: 'Your property is the first thing customers judge.',
    problemP: ['Overgrown entrances and tired islands cost businesses first impressions. Commercial grounds need a reliable crew on a predictable schedule with a single point of contact — not a rotating cast of subcontractors.', 'We build a scope and schedule around your property, invoice cleanly, and keep the grounds looking open-for-business year-round.'],
    included: ['Scheduled mowing, edging and cleanup', 'Bed, island and entrance maintenance', 'Seasonal color and mulch refreshes', 'Drainage and grading improvements', 'Single point of contact', 'Clean, consolidated invoicing'],
    drivers: ['Total acreage', 'Service frequency', 'Number of properties', 'Improvement scope', 'Contract term'],
    ba: 'Frontage bed renovation · Greater Baton Rouge',
    baBefore: BA.commB,
    baAfter: SIMG.backyard,
    faqs: [{
      q: 'Do you service multiple properties under one contract?',
      a: 'Yes. Portfolios and HOAs get one agreement, one schedule and one point of contact.'
    }, {
      q: 'Can you handle improvements, not just upkeep?',
      a: 'Absolutely — renovations, drainage and grading are all in scope alongside routine maintenance.'
    }],
    related: [['maintenance', 'Property Maintenance'], ['drainage', 'Drainage Solutions'], ['renovations', 'Landscape Renovations']]
  }
};
function ServicePage({
  onNav,
  param
}) {
  const key = SERVICE_DETAILS[param] ? param : 'renovations';
  const s = SERVICE_DETAILS[key];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(48px,6vw,80px) 0 clamp(32px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      border: 'none'
    }
  }, "Home"), " / ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('services');
    },
    style: {
      border: 'none'
    }
  }, "Services"), " / ", s.crumb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,64px)',
      alignItems: 'center'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SEb, null, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(2.2rem,4vw,3.2rem)'
    }
  }, s.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--pg-slate-700)',
      maxWidth: '46ch'
    }
  }, s.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(SB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Request an estimate"), /*#__PURE__*/React.createElement(SB, {
    variant: "secondary",
    size: "lg",
    href: "tel:+12253248252"
  }, "Call ", window.PG_PHONE))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      boxShadow: '0 24px 60px -30px rgba(11,14,21,0.55)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.name,
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover',
      display: 'block'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(64px,8vw,110px) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,64px)'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SEb, null, "The problem"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.6rem,2.6vw,2.1rem)'
    }
  }, s.problemH), s.problemP.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, p))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SEb, null, "What's included"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, s.included.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 16.5,
      color: 'var(--pg-ink)',
      paddingBottom: 12,
      borderBottom: '1px solid var(--pg-line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pg-turf)',
      fontWeight: 700
    }
  }, "\u2713"), x)))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(64px,8vw,110px) 0',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'clamp(32px,5vw,56px)',
      alignItems: 'start'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement(SP, {
    service: s.name,
    price: s.price,
    footnote: FOOTNOTE,
    drivers: s.drivers
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SEb, null, "Recent work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.6rem,2.6vw,2.1rem)'
    }
  }, "Before and after."), /*#__PURE__*/React.createElement(SBA, {
    height: 360,
    initial: 40,
    beforeImage: s.baBefore,
    afterImage: s.baAfter,
    caption: s.ba,
    style: {
      marginTop: 12
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(64px,8vw,110px) 0',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Questions",
    title: s.name + ' FAQs'
  }), /*#__PURE__*/React.createElement(SFaq, {
    items: s.faqs
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(56px,7vw,96px) 0'
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Related services",
    title: "Often paired together"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 24
    }
  }, s.related.map(([rk, rn]) => {
    const r = SERVICE_DETAILS[rk];
    const dest = rk === 'drainage' ? 'drainage' : 'service';
    const prm = rk === 'drainage' ? null : rk;
    const price = rk === 'drainage' ? 'From $1,000' : r.price;
    const desc = rk === 'drainage' ? 'Fix the water problem before it undoes the work.' : r.sub;
    return /*#__PURE__*/React.createElement(SSC, {
      key: rk,
      name: rn,
      description: desc,
      price: price,
      onClick: e => {
        e.preventDefault();
        onNav(dest, prm);
      }
    });
  })))));
}

/* ---------- DRAINAGE MONEY PAGE + YARD WATER DIAGNOSTIC ---------- */
const DIAG = [{
  id: 'where',
  q: 'Where is the water collecting?',
  opts: ['A low spot in the middle of the yard', 'Along the foundation / near the slab', 'Across a wide area (sheets of water)', 'Near a downspout or gutter']
}, {
  id: 'long',
  q: 'How long does water stay after rain?',
  opts: ['Gone within a few hours', 'A day or so', 'Several days — the ground stays soggy']
}, {
  id: 'drain',
  q: 'Do you know where the water currently drains?',
  opts: ['Yes, there is an outlet', 'No, it just sits', 'Not sure']
}, {
  id: 'tried',
  q: 'Has anything been attempted before?',
  opts: ['Nothing yet', 'Added topsoil to the low spot', 'A previous drain that failed']
}];
function Diagnostic({
  onNav
}) {
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState({});
  const done = step >= DIAG.length;
  const pick = (id, v) => {
    setAns(a => ({
      ...a,
      [id]: v
    }));
    setStep(s => s + 1);
  };
  const read = () => {
    const w = ans.where || '';
    if (w.includes('foundation')) return {
      cause: 'Water moving toward the slab',
      fam: 'Grading + downspout tie-ins',
      range: '$1,000 – $3,500',
      blue: true
    };
    if (w.includes('wide') || ans.long?.includes('Several')) return {
      cause: 'Poor fall across clay soil holding water on the surface',
      fam: 'Regrading, sometimes with a catch-basin system',
      range: '$1,500 – $5,000',
      blue: true
    };
    if (w.includes('downspout')) return {
      cause: 'Roof water concentrating in one area',
      fam: 'Downspout tie-ins and buried drainage pipe',
      range: '$1,000 – $2,500',
      blue: true
    };
    return {
      cause: 'A low spot that will not percolate in clay soil',
      fam: 'A catch basin and pipe run to a suitable outlet',
      range: '$1,000 – $3,000',
      blue: true
    };
  };
  if (done) {
    const r = read();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pg-deep-field-2)',
        border: '1px solid var(--pg-line-dark)',
        borderRadius: 'var(--radius-sm)',
        padding: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: '#7FB0E8',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      }
    }, "Starting read"), /*#__PURE__*/React.createElement("h3", {
      style: {
        color: '#fff',
        marginTop: 12,
        fontSize: 22
      }
    }, r.cause), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        margin: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--pg-slate-300)'
      }
    }, "LIKELY FIX"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontSize: 16,
        marginTop: 4
      }
    }, r.fam)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--pg-slate-300)'
      }
    }, "STARTING RANGE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--pg-growth)',
        fontSize: 18,
        marginTop: 4
      }
    }, r.range))), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--pg-slate-300)',
        fontSize: 14,
        lineHeight: 1.6,
        borderLeft: '2px solid var(--pg-survey)',
        paddingLeft: 14
      }
    }, "This is a starting read based on what you described. Water problems are confirmed on the property, not on a screen \u2014 a free site visit is the next step."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 18,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(SB, {
      variant: "primary",
      onDark: true,
      onClick: () => onNav('estimate')
    }, "Get my free estimate"), /*#__PURE__*/React.createElement(SB, {
      variant: "ghost",
      onDark: true,
      onClick: () => {
        setStep(0);
        setAns({});
      }
    }, "Start over")));
  }
  const cur = DIAG[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-deep-field-2)',
      border: '1px solid var(--pg-line-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 20
    }
  }, DIAG.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 4,
      flex: 1,
      borderRadius: 2,
      background: i <= step ? 'var(--pg-survey)' : 'var(--pg-line-dark)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: '#7FB0E8'
    }
  }, "QUESTION ", step + 1, " OF ", DIAG.length), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      margin: '10px 0 20px',
      fontSize: 21
    }
  }, cur.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, cur.opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => pick(cur.id, o),
    style: {
      textAlign: 'left',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--pg-deep-field)',
      color: '#F4F1E9',
      border: '1px solid var(--pg-line-dark)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      transition: 'border-color 120ms'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = 'var(--pg-survey)',
    onMouseLeave: e => e.currentTarget.style.borderColor = 'var(--pg-line-dark)'
  }, o))));
}
function DrainagePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-bone)'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(48px,6vw,80px) 0 clamp(32px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--pg-slate-500)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      border: 'none'
    }
  }, "Home"), " / ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('services');
    },
    style: {
      border: 'none'
    }
  }, "Services"), " / Drainage Solutions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,64px)',
      alignItems: 'center'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SBg, {
    tone: "water"
  }, "Water & drainage")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.2rem,4vw,3.2rem)'
    }
  }, "Yard drainage that works in Baton Rouge clay"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--pg-slate-700)',
      maxWidth: '46ch'
    }
  }, "Standing water after every rain is a grading problem, not a grass problem. Catch basins, drainage pipe and grading built for South Louisiana soil."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--accent-water-text)',
      marginTop: 20
    }
  }, "Drainage projects from $1,000 \xB7 NDS & ADS products installed")), /*#__PURE__*/React.createElement(Diagnostic, {
    onNav: onNav
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(64px,8vw,110px) 0'
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Why it happens here",
    title: "Heavy clay holds water on the surface.",
    sub: "Water sits instead of soaking in \u2014 which is why adding topsoil to a low spot never fixes it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 24
    }
  }, [['Catch basins & inlets', 'Surface water collected at the low points and carried away in solid pipe.'], ['Regrading', 'Reshaping fall so water moves away from the slab and toward a real outlet.'], ['Downspout tie-ins', 'Roof water is a hidden cause — we bury it and route it out.']].map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      background: '#fff',
      border: '1px solid var(--pg-line-strong)',
      borderLeft: '3px solid var(--pg-survey)',
      borderRadius: 'var(--radius-sm)',
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: '0 0 8px'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--pg-slate-600)',
      margin: 0
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(64px,8vw,110px) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,64px)',
      alignItems: 'center'
    },
    className: "pg-hero-grid"
  }, /*#__PURE__*/React.createElement(SBA, {
    height: 400,
    initial: 48,
    beforeImage: BA.drainB,
    afterImage: BA.drainA,
    caption: "Backyard drainage \xB7 catch basins and pipe, restored to clean turf"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SEb, null, "Recent work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontSize: 'clamp(1.6rem,2.6vw,2.1rem)'
    }
  }, "From soggy to solved."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--pg-slate-700)'
    }
  }, "A backyard that held water after every rain, regraded and tied into buried drainage so the turf finally stays dry and mowable. We restore the surface when we are done \u2014 most lawns recover within a few weeks."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(SB, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Fix my drainage"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-bone-deep)'
    }
  }, /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 'clamp(56px,7vw,96px) 0',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SH, {
    eyebrow: "Questions",
    title: "Drainage FAQs"
  }), /*#__PURE__*/React.createElement(SFaq, {
    items: [{
      q: 'How much does yard drainage cost?',
      a: 'Drainage projects start at $1,000. The number is driven by linear feet of pipe, how many catch basins, and access for equipment — confirmed with a free site visit.'
    }, {
      q: 'Do I need a French drain or grading?',
      a: 'It depends on how the water behaves. Water sitting in one spot points to a catch basin; water sheeting across a yard usually points to grading. The diagnostic above gives a starting read.'
    }, {
      q: 'Will you damage my lawn?',
      a: 'We work carefully and restore disturbed turf. Most lawns recover within a few weeks.'
    }, {
      q: 'What happens to the water once it is collected?',
      a: 'It is carried in pipe to a suitable outlet — the street, a swale, or an existing drain — away from the foundation.'
    }]
  }))));
}
window.PGServicePage = ServicePage;
window.PGDrainagePage = DrainagePage;
window.PG_SERVICE_DETAILS = SERVICE_DETAILS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.js
try { (() => {
/* ProGround website — shared chrome. Exports to window for cross-script use. */
const DS = window.ProGroundDesignSystem_313bb9;
const {
  Button,
  Logo,
  TrustBar,
  ContourDivider,
  Eyebrow,
  Input,
  Select,
  Textarea,
  Checkbox,
  PromoBanner
} = DS;
const LOGO_SRC = typeof __pgImg === 'function' ? __pgImg('logo-wordmark', '../../assets/logo-wordmark.png') : '../../assets/logo-wordmark.png';
const PHONE = '(225) 324-8252';
const NAV = [['Services', 'services'], ['Service Areas', 'areas'], ['Who We Serve', 'whoweserve'], ['Pricing', 'pricing'], ['Gallery', 'gallery'], ['About', 'about']];
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 clamp(24px,5vw,72px)',
    ...style
  }
}, children);
function Header({
  onNav,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('pg-scroll');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 20);
    const target = el || window;
    target.addEventListener('scroll', fn);
    return () => target.removeEventListener('scroll', fn);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--pg-deep-field)',
      borderBottom: '1px solid var(--pg-line-dark)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: scrolled ? 64 : 84,
      transition: 'height var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      border: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    onDark: true,
    src: LOGO_SRC,
    height: scrolled ? 40 : 50
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    },
    className: "pg-desktop-nav"
  }, NAV.map(([label, route]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(route);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: active === route ? 'var(--pg-growth)' : '#F4F1E9',
      border: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pg-growth)',
    onMouseLeave: e => e.currentTarget.style.color = active === route ? 'var(--pg-growth)' : '#F4F1E9'
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `tel:+12253248252`,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--pg-growth)',
      border: 'none',
      whiteSpace: 'nowrap'
    },
    className: "pg-phone"
  }, PHONE), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onDark: true,
    size: "sm",
    onClick: () => onNav('estimate')
  }, "Request an estimate"))));
}

/* Dark conversion block — appears at the end of every page. */
function ConversionBlock({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pg-deep-field)',
      color: '#F4F1E9',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ContourDivider, {
    variant: "lines",
    onDark: true,
    height: 48,
    style: {
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: '72px 0 88px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Free estimate \xB7 same-day response"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'clamp(1.9rem,3vw,2.6rem)',
      margin: '14px 0 16px'
    }
  }, "Get a free estimate."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--pg-slate-300)',
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: '46ch',
      margin: 0
    }
  }, "Send a few photos and tell us what is bugging you about the yard. You get back a written estimate with a clear scope and a real price \u2014 no trip fee, no diagnostic fee, no pressure to book."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onDark: true,
    size: "lg",
    onClick: () => onNav('estimate')
  }, "Request an estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: true,
    size: "lg",
    href: "tel:+12253248252"
  }, "Call ", PHONE)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(TrustBar, {
    onDark: true,
    items: ['100+ homes served', 'Locally owned in Denham Springs', 'Same-day response']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pg-deep-field-2)',
      border: '1px solid var(--pg-line-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    id: "cb-name",
    style: {}
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    id: "cb-phone",
    type: "tel",
    help: "Texting accepted."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Property address",
    id: "cb-addr"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onDark: true,
    fullWidth: true,
    onClick: () => onNav('estimate')
  }, "Continue")))));
}
function Footer({
  onNav
}) {
  const cols = [{
    h: 'Services',
    items: [['Landscape Renovations', 'service', 'renovations'], ['Landscape Installation', 'service', 'installation'], ['Drainage Solutions', 'drainage', null], ['Grading & Yard Leveling', 'service', 'grading'], ['Property Maintenance', 'service', 'maintenance'], ['Mulch, Pine Straw & Rock', 'service', 'mulch'], ['Commercial Grounds', 'service', 'commercial']]
  }, {
    h: 'Service Areas',
    items: [['Baton Rouge', 'area', 'Baton Rouge'], ['Denham Springs', 'area', 'Denham Springs'], ['Prairieville', 'area', 'Prairieville'], ['Walker', 'area', 'Walker'], ['Central', 'area', 'Central'], ['Shenandoah', 'area', 'Shenandoah']]
  }, {
    h: 'Company',
    items: [['About Andrew', 'about', null], ['How We Work', 'process', null], ['Pricing', 'pricing', null], ['Gallery', 'gallery', null], ['Reviews', 'reviews', null], ['FAQ', 'faq', null]]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pg-deep-field)',
      color: 'var(--pg-slate-300)',
      borderTop: '1px solid var(--pg-line-dark)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: '64px 0 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    },
    className: "pg-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    onDark: true,
    src: LOGO_SRC,
    height: 48
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: '34ch'
    }
  }, "Landscape renovation, drainage and property maintenance across Greater Baton Rouge. Locally owned in Denham Springs."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--pg-growth)'
    }
  }, PHONE), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, "info@progroundland.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, "Inquiries answered 24/7 \xB7 same-day response")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      gap: 10
    }
  }, [['Instagram', 'https://www.instagram.com/proground_land_mgmt/'], ['Facebook', 'https://www.facebook.com/profile.php?id=61590852360292']].map(([label, url]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em',
      color: 'var(--pg-slate-300)',
      border: '1px solid var(--pg-line-dark)',
      borderRadius: 999,
      padding: '6px 14px',
      textDecoration: 'none'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--pg-growth)';
      e.currentTarget.style.borderColor = 'var(--pg-growth)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--pg-slate-300)';
      e.currentTarget.style.borderColor = 'var(--pg-line-dark)';
    }
  }, label)))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: '#F4F1E9',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.items.map(([label, route, param]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(route, param);
    },
    style: {
      color: 'var(--pg-slate-300)',
      fontSize: 14,
      border: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--pg-slate-300)'
  }, label))))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      borderTop: '1px solid var(--pg-line-dark)',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--pg-slate-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ProGround Land Management \xB7 Denham Springs, LA"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('privacy');
    },
    style: {
      color: 'var(--pg-slate-400)',
      border: 'none'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('terms');
    },
    style: {
      color: 'var(--pg-slate-400)',
      border: 'none'
    }
  }, "Terms"))));
}

/* Mobile sticky bottom bar */
function MobileBar({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pg-mobile-bar",
    style: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      display: 'none',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'var(--pg-line-dark)',
      borderTop: '1px solid var(--pg-line-dark)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+12253248252",
    style: {
      background: 'var(--pg-deep-field)',
      color: '#fff',
      textAlign: 'center',
      padding: '16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      border: 'none'
    }
  }, "Call"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('estimate');
    },
    style: {
      background: 'var(--pg-growth)',
      color: 'var(--pg-deep-field)',
      textAlign: 'center',
      padding: '16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      border: 'none'
    }
  }, "Request estimate"));
}
Object.assign(window, {
  PGContainer: Container,
  PGHeader: Header,
  PGFooter: Footer,
  PGConversion: ConversionBlock,
  PGMobileBar: MobileBar,
  PG_PHONE: PHONE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.js", error: String((e && e.message) || e) }); }

__ds_ns.ContourDivider = __ds_scope.ContourDivider;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PriceBlock = __ds_scope.PriceBlock;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.TrustBar = __ds_scope.TrustBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Msg = __ds_scope.Msg;

__ds_ns.BeforeAfterSlider = __ds_scope.BeforeAfterSlider;

})();
