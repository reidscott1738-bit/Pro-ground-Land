/* ProGround website — shared chrome. Exports to window for cross-script use. */
const DS = window.ProGroundDesignSystem_313bb9;
const { Button, Logo, TrustBar, ContourDivider, Eyebrow, Input, Select, Textarea, Checkbox, PromoBanner } = DS;
const LOGO_SRC = (typeof __pgImg === 'function') ? __pgImg('logo-wordmark', '../../assets/logo-wordmark.png') : '../../assets/logo-wordmark.png';

const PHONE = '(225) 324-8252';
const NAV = [['Services', 'services'], ['Service Areas', 'areas'], ['Who We Serve', 'whoweserve'], ['Gallery', 'gallery'], ['About', 'about']];

const Container = ({ children, style }) => (
  <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,5vw,72px)', ...style }}>{children}</div>
);

function Header({ onNav, active }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('pg-scroll');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 20);
    const target = el || window;
    target.addEventListener('scroll', fn); return () => target.removeEventListener('scroll', fn);
  }, []);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--pg-deep-field)', borderBottom: '1px solid var(--pg-line-dark)' }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 64 : 84, transition: 'height var(--dur-base) var(--ease-standard)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ border: 'none', display: 'flex' }}>
          <Logo onDark src={LOGO_SRC} height={scrolled ? 40 : 50} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }} className="pg-desktop-nav">
          {NAV.map(([label, route]) => (
            <a key={label} href="#" onClick={(e) => { e.preventDefault(); onNav(route); }}
              style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: active === route ? 'var(--pg-growth)' : '#F4F1E9', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pg-growth)'}
              onMouseLeave={(e) => e.currentTarget.style.color = active === route ? 'var(--pg-growth)' : '#F4F1E9'}>{label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href={`tel:+12253248252`} style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 500, color: 'var(--pg-growth)', border: 'none', whiteSpace: 'nowrap' }} className="pg-phone">{PHONE}</a>
          <Button variant="primary" onDark size="sm" onClick={() => onNav('estimate')}>Request an estimate</Button>
        </div>
      </Container>
    </header>
  );
}

/* Dark conversion block — appears at the end of every page. */
function ConversionBlock({ onNav }) {
  return (
    <section style={{ background: 'var(--pg-deep-field)', color: '#F4F1E9', position: 'relative', overflow: 'hidden' }}>
      <ContourDivider variant="lines" onDark height={48} style={{ opacity: 0.5 }} />
      <Container style={{ padding: '72px 0 88px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
        <div>
          <Eyebrow onDark>Free estimate · same-day response</Eyebrow>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.9rem,3vw,2.6rem)', margin: '14px 0 16px' }}>Get a free estimate.</h2>
          <p style={{ color: 'var(--pg-slate-300)', fontSize: 18, lineHeight: 1.6, maxWidth: '46ch', margin: 0 }}>
            Send a few photos and tell us what is bugging you about the yard. You get back a written estimate with a clear scope and a real price — no trip fee, no diagnostic fee, no pressure to book.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="primary" onDark size="lg" onClick={() => onNav('estimate')}>Request an estimate</Button>
            <Button variant="secondary" onDark size="lg" href="tel:+12253248252">Call {PHONE}</Button>
          </div>
          <div style={{ marginTop: 24 }}>
            <TrustBar onDark items={['100+ homes served', 'Locally owned in Denham Springs', 'Same-day response']} />
          </div>
        </div>
        <div style={{ background: 'var(--pg-deep-field-2)', border: '1px solid var(--pg-line-dark)', borderRadius: 'var(--radius-sm)', padding: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Input label="Name" id="cb-name" style={{}} />
            <Input label="Phone" id="cb-phone" type="tel" help="Texting accepted." />
            <Input label="Property address" id="cb-addr" />
            <Button variant="primary" onDark fullWidth onClick={() => onNav('estimate')}>Continue</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer({ onNav }) {
  const cols = [
    { h: 'Services', items: [['Landscape Renovations', 'service', 'renovations'], ['Landscape Installation', 'service', 'installation'], ['Drainage Solutions', 'drainage', null], ['Grading & Yard Leveling', 'service', 'grading'], ['Property Maintenance', 'service', 'maintenance'], ['Mulch, Pine Straw & Rock', 'service', 'mulch'], ['Commercial Grounds', 'service', 'commercial']] },
    { h: 'Service Areas', items: [['Baton Rouge', 'area', 'Baton Rouge'], ['Denham Springs', 'area', 'Denham Springs'], ['Prairieville', 'area', 'Prairieville'], ['Walker', 'area', 'Walker'], ['Central', 'area', 'Central'], ['Shenandoah', 'area', 'Shenandoah']] },
    { h: 'Company', items: [['About Andrew', 'about', null], ['How We Work', 'process', null], ['Gallery', 'gallery', null], ['Reviews', 'reviews', null], ['FAQ', 'faq', null]] },
  ];
  return (
    <footer style={{ background: 'var(--pg-deep-field)', color: 'var(--pg-slate-300)', borderTop: '1px solid var(--pg-line-dark)' }}>
      <Container style={{ padding: '64px 0 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }} className="pg-footer-grid">
        <div>
          <Logo onDark src={LOGO_SRC} height={48} />
          <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.6, maxWidth: '34ch' }}>
            Landscape renovation, drainage and property maintenance across Greater Baton Rouge. Locally owned in Denham Springs.
          </p>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 14 }}>
            <div style={{ color: 'var(--pg-growth)' }}>{PHONE}</div>
            <div style={{ marginTop: 4 }}>info@progroundland.com</div>
            <div style={{ marginTop: 4 }}>Inquiries answered 24/7 · same-day response</div>
          </div>
          <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
            {[['Instagram', 'https://www.instagram.com/proground_land_mgmt/'], ['Facebook', 'https://www.facebook.com/profile.php?id=61590852360292']].map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--pg-slate-300)', border: '1px solid var(--pg-line-dark)', borderRadius: 999, padding: '6px 14px', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--pg-growth)'; e.currentTarget.style.borderColor = 'var(--pg-growth)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--pg-slate-300)'; e.currentTarget.style.borderColor = 'var(--pg-line-dark)'; }}>{label}</a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#F4F1E9', marginBottom: 14 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {c.items.map(([label, route, param]) => (
                <li key={label}><a href="#" onClick={(e) => { e.preventDefault(); onNav(route, param); }} style={{ color: 'var(--pg-slate-300)', fontSize: 14, border: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--pg-slate-300)'}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container style={{ borderTop: '1px solid var(--pg-line-dark)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--pg-slate-400)' }}>
        <span>© 2026 ProGround Land Management · Denham Springs, LA</span>
        <span style={{ display: 'flex', gap: 18 }}><a href="#" onClick={(e) => { e.preventDefault(); onNav('privacy'); }} style={{ color: 'var(--pg-slate-400)', border: 'none' }}>Privacy</a><a href="#" onClick={(e) => { e.preventDefault(); onNav('terms'); }} style={{ color: 'var(--pg-slate-400)', border: 'none' }}>Terms</a></span>
      </Container>
    </footer>
  );
}

/* Mobile sticky bottom bar */
function MobileBar({ onNav }) {
  return (
    <div className="pg-mobile-bar" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 60, display: 'none', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--pg-line-dark)', borderTop: '1px solid var(--pg-line-dark)' }}>
      <a href="tel:+12253248252" style={{ background: 'var(--pg-deep-field)', color: '#fff', textAlign: 'center', padding: '16px', fontFamily: 'var(--font-display)', fontWeight: 700, border: 'none' }}>Call</a>
      <a href="#" onClick={(e) => { e.preventDefault(); onNav('estimate'); }} style={{ background: 'var(--pg-growth)', color: 'var(--pg-deep-field)', textAlign: 'center', padding: '16px', fontFamily: 'var(--font-display)', fontWeight: 700, border: 'none' }}>Request estimate</a>
    </div>
  );
}

Object.assign(window, { PGContainer: Container, PGHeader: Header, PGFooter: Footer, PGConversion: ConversionBlock, PGMobileBar: MobileBar, PG_PHONE: PHONE });
