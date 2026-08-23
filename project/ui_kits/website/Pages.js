/* ProGround website — secondary pages: services index, areas, area detail, who we serve,
   pricing, gallery, about, process, reviews, faq, privacy, terms. */
const DSp = window.ProGroundDesignSystem_313bb9;
const { Button: PB, Eyebrow: PEb, Badge: PBg, FaqAccordion: PFaq, TrustBar: PTB, ContourDivider: PCD } = DSp;
const PC = window.PGContainer;
const PSH = window.PGSectionHead;
const SD = window.PG_SERVICE_DETAILS;

const PIMG = { house: __pgImg('house-curb','img/house-curb.jpg'), sod: __pgImg('sod-install','img/sod-install.jpg'), aerial: __pgImg('yard-aerial','img/yard-aerial.jpg'), crew: __pgImg('crew-trimming','img/crew-trimming.jpg'), golden: __pgImg('lawn-golden','img/lawn-golden.jpg'), backyard: __pgImg('lawn-backyard','img/lawn-backyard.jpg'), drainA: __pgImg('drainage-after','img/drainage-after.jpg') };

/* Shared photo-backed page hero with breadcrumb. */
function PageHero({ onNav, crumbs, eyebrow, title, sub, img, badge }) {
  return (
    <section style={{ position: 'relative', background: 'var(--pg-deep-field)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, rgba(9,11,17,0.95) 0%, rgba(9,11,17,0.86) 45%, rgba(9,11,17,0.55) 100%), url(${img}) center/cover` }} />
      <PC style={{ position: 'relative', padding: 'clamp(52px,7vw,96px) 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-400)', marginBottom: 18 }}>
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              {c.route ? <a href="#" onClick={(e) => { e.preventDefault(); onNav(c.route, c.param); }} style={{ border: 'none', color: 'var(--pg-slate-300)' }}>{c.label}</a> : <span style={{ color: 'var(--pg-slate-300)' }}>{c.label}</span>}
              {i < crumbs.length - 1 && <span style={{ color: 'var(--pg-slate-500)' }}> / </span>}
            </React.Fragment>
          ))}
        </div>
        {badge ? <span style={{ display: 'inline-block', marginBottom: 14 }}><PBg tone="water">{badge}</PBg></span> : <PEb onDark>{eyebrow}</PEb>}
        <h1 style={{ marginTop: 14, color: '#fff', fontSize: 'clamp(2.2rem,4.4vw,3.4rem)', maxWidth: '18ch' }}>{title}</h1>
        {sub && <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--pg-slate-300)', maxWidth: '52ch', margin: '18px 0 0' }}>{sub}</p>}
      </PC>
    </section>
  );
}

/* Reusable image card that links somewhere. */
function LinkCard({ img, badge, title, desc, cta, onNav, route, param }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onNav(route, param); }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', background: '#fff', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', textDecoration: 'none', boxShadow: hover ? '0 18px 40px -22px rgba(11,14,21,0.5)' : '0 1px 0 rgba(11,14,21,0.04)', transform: hover ? 'translateY(-4px)' : 'none', transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)' }}>
      <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hover ? 'scale(1.06)' : 'scale(1)', transition: 'transform 600ms var(--ease-standard)' }} />
        {badge && <span style={{ position: 'absolute', top: 12, left: 12, background: 'var(--pg-growth)', color: 'var(--pg-deep-field)', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 999 }}>{badge}</span>}
      </div>
      <div style={{ padding: '20px 22px 24px' }}>
        <h3 style={{ margin: 0, fontSize: 20, color: 'var(--pg-ink)' }}>{title}</h3>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--pg-slate-600)', margin: '9px 0 14px' }}>{desc}</p>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 500, color: 'var(--pg-turf)' }}>{cta} →</span>
      </div>
    </a>
  );
}

/* ===================== SERVICES INDEX ===================== */
const SVC_ORDER = [
  ['renovations', 'service', PIMG.house], ['installation', 'service', PIMG.sod], ['drainage', 'drainage', PIMG.drainA],
  ['grading', 'service', PIMG.backyard], ['maintenance', 'service', PIMG.crew], ['mulch', 'service', PIMG.golden], ['commercial', 'service', PIMG.aerial],
];
const MORE_SVCS = ['Residential Lawn Mowing', 'Large Property Mowing', 'Hedge & Shrub Trimming', 'Landscape Bed Maintenance', 'Hard-Surface Weed Control', 'Landscape Bed Cleanup', 'Decorative Rock Installation', 'Christmas Light Installation'];

function ServicesIndex({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'Services' }]} eyebrow="What we do"
        title="One crew for the whole property" sub="Renovation, installation, drainage, grading and year-round care — each with a starting price and a written scope." img={PIMG.aerial} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 26 }}>
          {SVC_ORDER.map(([k, route, img]) => {
            const s = SD[k];
            const name = k === 'drainage' ? 'Drainage Solutions' : s.name;
            const price = k === 'drainage' ? 'From $1,000' : s.price;
            const desc = k === 'drainage' ? 'Catch basins, pipe and grading built for our heavy clay soil.' : s.sub;
            return <LinkCard key={k} img={img} badge={price} title={name} desc={desc} cta="Learn more" onNav={onNav} route={route} param={route === 'drainage' ? null : k} />;
          })}
        </div>
        <div style={{ marginTop: 56, background: 'var(--pg-bone-deep)', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', padding: 'clamp(28px,4vw,44px)' }}>
          <PEb>Also available</PEb>
          <h3 style={{ margin: '10px 0 18px', fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}>More ways we help</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
            {MORE_SVCS.map((m) => (
              <div key={m} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15.5, color: 'var(--pg-ink)', padding: '10px 0', borderBottom: '1px solid var(--pg-line)' }}><span style={{ color: 'var(--pg-turf)' }}>✓</span>{m}</div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}><PB variant="primary" size="lg" onClick={() => onNav('estimate')}>Request an estimate</PB></div>
        </div>
      </PC></section>
    </div>
  );
}

/* ===================== SERVICE AREAS ===================== */
const AREAS = {
  'Baton Rouge': { img: PIMG.house, blurb: 'Louisiana\u2019s capital and our largest service area — established neighborhoods where mature landscaping and clay-soil drainage are the two things we get called for most.', hoods: ['University Club Plantation', 'Bocage', 'Old Goodwood', 'Goodwood', 'Highland Road', 'Oak Hills', 'Santa Maria', 'Country Club of Louisiana', 'The Settlement at Willow Grove', 'Southdowns', 'Kenilworth', 'Bluebonnet Highlands', 'Jefferson Terrace', 'Westminster', 'Woodgate', 'Highland Creek'] },
  'Denham Springs': { img: PIMG.backyard, blurb: 'Home base. ProGround is locally owned here, so response times are fastest and you will often see us the same day.' },
  'Prairieville': { img: PIMG.sod, blurb: 'Fast-growing Ascension Parish community with newer builds that need finished landscaping, sod and drainage tie-ins.' },
  'Walker': { img: PIMG.aerial, blurb: 'Livingston Parish properties on larger lots — mowing, grading and drainage where water has room to move but nowhere to go.' },
  'Central': { img: PIMG.crew, blurb: 'The City of Central and surrounding areas — full-property maintenance and renovation for established homes.' },
  'Shenandoah': { img: PIMG.golden, blurb: 'Established Baton Rouge subdivision where curb-appeal renovations and bed refreshes are the most requested work.' },
};

function AreasIndex({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'Service Areas' }]} eyebrow="Where we work"
        title="Serving Greater Baton Rouge" sub="Locally owned in Denham Springs, working across the parishes with same-day response." img={PIMG.aerial} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 26 }}>
          {Object.entries(AREAS).map(([city, a]) => (
            <LinkCard key={city} img={a.img} title={city} desc={a.blurb} cta={'ProGround in ' + city} onNav={onNav} route="area" param={city} />
          ))}
        </div>
        <p style={{ marginTop: 40, fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--pg-slate-600)' }}>Not listed? We cover much of Greater Baton Rouge — <a href="#" onClick={(e) => { e.preventDefault(); onNav('estimate'); }} style={{ color: 'var(--pg-turf)' }}>tell us your address</a> and we will confirm coverage.</p>
      </PC></section>
    </div>
  );
}

function AreaPage({ onNav, param }) {
  const city = AREAS[param] ? param : 'Baton Rouge';
  const a = AREAS[city];
  const others = Object.keys(AREAS).filter((c) => c !== city);
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'Service Areas', route: 'areas' }, { label: city }]} eyebrow="Service area"
        title={'Landscaping & drainage in ' + city} sub={a.blurb} img={a.img} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pg-hero-grid">
        <div>
          <PEb>What we do here</PEb>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(1.6rem,2.8vw,2.2rem)' }}>Full-property care for {city} homes</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--pg-slate-700)' }}>
            The same crew handles maintenance, renovations, drainage and grading — so you are not juggling three contractors. Send a few photos and get a written estimate the same day, with no trip fee.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '22px 0 28px' }} className="pg-checks">
            {SVC_ORDER.slice(0, 6).map(([k, route]) => (
              <a key={k} href="#" onClick={(e) => { e.preventDefault(); onNav(route, route === 'drainage' ? null : k); }} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15.5, color: 'var(--pg-ink)', border: 'none' }}>
                <span style={{ color: 'var(--pg-turf)' }}>✓</span>{k === 'drainage' ? 'Drainage Solutions' : SD[k].name}
              </a>
            ))}
          </div>
          {a.hoods && (
            <div style={{ margin: '4px 0 28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-500)', marginBottom: 12 }}>Neighborhoods we serve in {city}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {a.hoods.map((h) => <span key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--pg-ink)', background: 'var(--pg-bone-deep)', border: '1px solid var(--pg-line-strong)', borderRadius: 999, padding: '5px 12px' }}>{h}</span>)}
              </div>
            </div>
          )}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <PB variant="primary" size="lg" onClick={() => onNav('estimate')}>Request an estimate</PB>
            <PB variant="secondary" size="lg" href="tel:+12253248252">Call {window.PG_PHONE}</PB>
          </div>
        </div>
        <div style={{ background: 'var(--pg-bone-deep)', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', padding: 28 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--pg-slate-500)', marginBottom: 14 }}>Nearby areas</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {others.map((c) => (
              <li key={c}><a href="#" onClick={(e) => { e.preventDefault(); onNav('area', c); }} style={{ color: 'var(--pg-ink)', fontSize: 16, border: 'none', display: 'flex', justifyContent: 'space-between' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pg-turf)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--pg-ink)'}>{c}<span style={{ color: 'var(--pg-turf)' }}>→</span></a></li>
            ))}
          </ul>
        </div>
      </PC></section>
    </div>
  );
}

/* ===================== WHO WE SERVE ===================== */
function WhoWeServe({ onNav }) {
  const panels = [
    { img: PIMG.house, tag: 'Homeowners', h: 'Residential', p: 'Established homes and new builds across Greater Baton Rouge. From a bed refresh to a full renovation, drainage fix or year-round maintenance — one crew that shows up.', pts: ['Curb-appeal renovations', 'Drainage & grading fixes', 'Recurring mowing & bed care', 'New-build landscaping'], route: 'service', param: 'renovations' },
    { img: PIMG.aerial, tag: 'Businesses & HOAs', h: 'Commercial', p: 'Offices, retail, HOAs and multi-property portfolios that need dependable grounds care on a predictable schedule with a single point of contact and clean invoicing.', pts: ['Scheduled grounds maintenance', 'Entrance & island improvements', 'Portfolio & HOA agreements', 'One point of contact'], route: 'service', param: 'commercial' },
  ];
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'Who We Serve' }]} eyebrow="Who we serve"
        title="Residential and commercial" sub="Same crew, same standards — scoped to the property in front of us." img={PIMG.crew} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,44px)' }} className="pg-hero-grid">
        {panels.map((p) => (
          <div key={p.h} style={{ background: '#fff', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src={p.img} alt={p.h} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-turf)' }}>{p.tag}</div>
              <h2 style={{ margin: '8px 0 10px', fontSize: 'clamp(1.6rem,2.6vw,2.1rem)' }}>{p.h}</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--pg-slate-700)', margin: 0 }}>{p.p}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {p.pts.map((x) => <li key={x} style={{ display: 'flex', gap: 8, fontSize: 15, color: 'var(--pg-ink)' }}><span style={{ color: 'var(--pg-turf)' }}>✓</span>{x}</li>)}
              </ul>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PB variant="primary" onClick={() => onNav('estimate')}>Request an estimate</PB>
                <PB variant="ghost" onClick={() => onNav(p.route, p.param)}>Learn more</PB>
              </div>
            </div>
          </div>
        ))}
      </PC></section>
    </div>
  );
}

/* ===================== PRICING ===================== */
const PRICING = [
  ['Landscape Renovations', 'From $750', 'service', 'renovations'],
  ['Landscape Installation', 'From $750', 'service', 'installation'],
  ['Drainage Solutions', 'From $1,000', 'drainage', null],
  ['Grading & Yard Leveling', 'From $750', 'service', 'grading'],
  ['Property Maintenance', 'From $145/mo', 'service', 'maintenance'],
  ['Mulch, Pine Straw & Rock', 'From $350', 'service', 'mulch'],
  ['Commercial Grounds', 'Custom quote', 'service', 'commercial'],
];

function PricingPage({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'Pricing' }]} eyebrow="Straightforward pricing"
        title="Starting prices, no trip fee" sub="Every job gets a written estimate with a defined scope. These are honest starting points — the final number depends on your property." img={PIMG.golden} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0', maxWidth: 900 }}>
        <div style={{ background: '#fff', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
          {PRICING.map(([name, price, route, param], i) => (
            <a key={name} href="#" onClick={(e) => { e.preventDefault(); onNav(route, param); }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', borderTop: i ? '1px solid var(--pg-line)' : 'none', border: 'none', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--pg-bone-deep)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.05rem,1.8vw,1.25rem)', color: 'var(--pg-ink)', fontWeight: 600 }}>{name}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--pg-turf)' }}>{price}</span>
                <span style={{ color: 'var(--pg-slate-400)' }}>→</span>
              </span>
            </a>
          ))}
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--pg-slate-500)', marginTop: 20 }}>
          Pricing varies based on property size, materials, accessibility, service frequency, and project scope. Free consultations and customized estimates are available — no trip fee, no diagnostic fee.
        </p>
        <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <PB variant="primary" size="lg" onClick={() => onNav('estimate')}>Get my exact price</PB>
          <PB variant="secondary" size="lg" href="tel:+12253248252">Call {window.PG_PHONE}</PB>
        </div>
      </PC></section>
    </div>
  );
}

/* ===================== GALLERY ===================== */
const GALLERY = [
  { src: PIMG.aerial, cap: 'Paver patio & hardscape', area: 'Baton Rouge' },
  { src: PIMG.house, cap: 'Curb-appeal renovation', area: 'Shenandoah' },
  { src: PIMG.sod, cap: 'Fresh sod & healthy turf', area: 'Prairieville' },
  { src: PIMG.backyard, cap: 'Full-yard renovation', area: 'Denham Springs' },
  { src: PIMG.crew, cap: 'Property maintenance', area: 'Central' },
  { src: PIMG.golden, cap: 'Fresh mulch & clean beds', area: 'Walker' },
];

function GalleryPage({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'Gallery' }]} eyebrow="Our work"
        title="Recent projects across Greater Baton Rouge" sub="A look at renovations, installs, drainage and the properties we keep looking their best." img={PIMG.house} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18 }}>
          {GALLERY.map((g, i) => (
            <figure key={i} style={{ margin: 0, position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={g.src} alt={g.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '30px 16px 14px', background: 'linear-gradient(0deg, rgba(9,11,17,0.85), transparent)', color: '#fff' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{g.cap}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--pg-slate-300)', marginTop: 3 }}>{g.area}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-500)' }}>Photos are representative of ProGround’s work. Want to see a project like yours? <a href="#" onClick={(e) => { e.preventDefault(); onNav('estimate'); }} style={{ color: 'var(--pg-turf)' }}>Ask for examples with your estimate.</a></p>
      </PC></section>
    </div>
  );
}

/* ===================== ABOUT ===================== */
const ABOUT_SYSTEM = [
  ['Written estimate', 'A real number on paper before anything starts.'],
  ['Defined scope', 'Exactly what is being done — no gray areas.'],
  ['Digital approval', 'Approve the scope and price online, on your time.'],
  ['A scheduled date', 'You know when we are coming, and we come.'],
  ['A follow-up', 'We check the finished work ourselves when it is done.'],
];
const ABOUT_HANDLES = [
  ['Renovations & installs', 'Landscape renovations and new installations — beds rebuilt or a bare yard finished.'],
  ['Drainage & grading', 'For yards that hold water, which around here is most of them eventually.'],
  ['Beds, mulch & rock', 'Bed cleanups, mulch, pine straw and decorative rock to finish the look.'],
  ['Year-round maintenance', 'A set schedule and one predictable monthly bill — not a crew that disappears.'],
];

function AboutPage({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'About' }]} eyebrow="About ProGround"
        title="When you call, you get the owner" sub="ProGround Land Management started in October 2025, after owner Andrew Lee spent five years in this trade watching how it usually gets done." img={PIMG.backyard} />

      {/* the why */}
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }} className="pg-hero-grid">
        <div style={{ position: 'relative', minHeight: 460 }} className="pg-collage">
          <img src={PIMG.house} alt="Renovated home exterior" style={{ width: '76%', height: 340, objectFit: 'cover', borderRadius: 'var(--radius-sm)', display: 'block', boxShadow: '0 24px 60px -30px rgba(11,14,21,0.6)' }} />
          <img src={PIMG.crew} alt="Freshly trimmed hedge" style={{ position: 'absolute', right: 0, bottom: 0, width: '52%', height: 240, objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '6px solid var(--pg-bone)', boxShadow: '0 24px 60px -30px rgba(11,14,21,0.6)' }} />
          <div style={{ position: 'absolute', left: 0, bottom: 8, background: 'var(--pg-deep-field)', color: '#fff', padding: '14px 20px', borderRadius: 'var(--radius-sm)', boxShadow: '0 20px 50px -24px rgba(11,14,21,0.7)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--pg-growth)', lineHeight: 1 }}>Est. Oct 2025</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--pg-slate-300)', marginTop: 5 }}>Owner-operated · Denham Springs</div>
          </div>
        </div>
        <div>
          <PEb>Why ProGround exists</PEb>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(1.8rem,3.2vw,2.5rem)' }}>Most of what frustrates owners <span style={{ color: 'var(--pg-turf)' }}>has nothing to do with grass.</span></h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--pg-slate-700)' }}>
            Andrew Lee spent five years in this trade watching how it usually gets done. The problems he saw again and again had nothing to do with grass or plants. It is not knowing what a job will cost. It is a callback that never comes. It is a crew that shows up once and then disappears for three weeks with no explanation.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--pg-slate-700)' }}>
            None of that seemed hard to fix. It just needed somebody to actually do it. So in October 2025 he started ProGround.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--pg-slate-700)' }}>
            Andrew lives in Denham Springs and works here. He looks at the property, writes the estimate, plans the job and checks the finished work himself. When you call ProGround, you get the owner.
          </p>
          <div style={{ marginTop: 24 }}><PB variant="primary" size="lg" onClick={() => onNav('estimate')}>Work with us</PB></div>
        </div>
      </PC></section>

      {/* how we run it */}
      <section style={{ background: 'var(--pg-bone-deep)' }}><PC style={{ padding: 'clamp(56px,8vw,110px) 0' }}>
        <PSH center eyebrow="How ProGround runs" title="Five things you can count on." sub="Customers know what is being done, what it costs and what happens next." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 18 }}>
          {ABOUT_SYSTEM.map(([h, d], i) => (
            <div key={h} style={{ background: '#fff', border: '1px solid var(--pg-line-strong)', borderTop: '3px solid var(--pg-turf)', borderRadius: 'var(--radius-sm)', padding: 24 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-turf)' }}>{'0' + (i + 1)}</div>
              <h3 style={{ marginTop: 10, fontSize: 18 }}>{h}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--pg-slate-600)', margin: '6px 0 0' }}>{d}</p>
            </div>
          ))}
        </div>
      </PC></section>

      {/* one company instead of three */}
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0' }}>
        <PSH eyebrow="What ProGround handles" title="One company instead of three." sub="Over 100 homes served across Baton Rouge, Denham Springs, Prairieville, Walker, Central and the surrounding parishes — with commercial grounds maintenance growing alongside it." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {ABOUT_HANDLES.map(([h, d]) => (
            <div key={h} style={{ background: '#fff', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', padding: 28 }}>
              <h3 style={{ margin: 0, fontSize: 19 }}>{h}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--pg-slate-600)', margin: '8px 0 0' }}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28 }}><PB variant="secondary" size="lg" onClick={() => onNav('services')}>See all services</PB></div>
      </PC></section>

      {/* on price */}
      <section style={{ background: 'var(--pg-bone-deep)' }}><PC style={{ padding: 'clamp(56px,8vw,110px) 0', maxWidth: 820 }}>
        <PEb>On price</PEb>
        <h2 style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>Not the cheapest — and not trying to be.</h2>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--pg-slate-700)' }}>
          Someone will always do it for less. What ProGround sells instead is a job planned properly, built with good material, finished with attention to detail, and still looking right in a few years.
        </p>
        <div style={{ marginTop: 22 }}><PB variant="ghost" onClick={() => onNav('pricing')}>See starting prices →</PB></div>
      </PC></section>

      {/* owner quote */}
      <section style={{ position: 'relative', background: 'var(--pg-deep-field)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(9,11,17,0.9), rgba(9,11,17,0.97)), url(${PIMG.golden}) center/cover` }} />
        <PC style={{ position: 'relative', padding: 'clamp(64px,8vw,110px) 0', maxWidth: 900, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--pg-growth)', lineHeight: 0.5 }}>“</div>
          <blockquote style={{ margin: '10px 0 24px', color: '#fff', fontSize: 'clamp(1.4rem,2.8vw,2rem)', lineHeight: 1.4, fontWeight: 500 }}>
            Good business comes down to doing what you say you’re going to do, communicating with people, and taking pride in your work. Our customers aren’t account numbers. They’re homeowners, families, business owners and neighbors in the communities we all live in.
          </blockquote>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--pg-slate-300)' }}>Andrew Lee · Owner, ProGround Land Management</div>
        </PC>
      </section>
    </div>
  );
}

/* ===================== PROCESS ===================== */
const PSTEPS = [
  ['01', 'You send photos', 'Describe the problem and send a few photos from your phone — beds, the low spot, the whole yard, whatever is bugging you.'],
  ['02', 'We look at the property', 'Andrew reviews it with same-day response, often the same day. For bigger projects we schedule a free site visit — no trip fee.'],
  ['03', 'Written estimate', 'You get a written estimate with a clearly defined scope, so the price and the plan are on paper before anyone starts.'],
  ['04', 'You approve digitally', 'Approve the scope and price online whenever it works for you. No pressure, no surprises, no chasing.'],
  ['05', 'We schedule & follow up', 'We put you on the schedule, do the work, and check in when it is done to make sure it is right.'],
];

function ProcessPage({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'How We Work' }]} eyebrow="The process"
        title="From photos to finished — in five steps" sub="No pressure and no trip fee. Here is exactly what happens after you reach out." img={PIMG.crew} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0', maxWidth: 900 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {PSTEPS.map(([n, h, d], i) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(20px,4vw,44px)', padding: '28px 0', borderBottom: i < PSTEPS.length - 1 ? '1px solid var(--pg-line)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem,4vw,3rem)', color: 'var(--pg-turf)', lineHeight: 1 }}>{n}</div>
              <div>
                <h3 style={{ margin: 0, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)' }}>{h}</h3>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--pg-slate-700)', margin: '8px 0 0', maxWidth: '58ch' }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <PB variant="primary" size="lg" onClick={() => onNav('estimate')}>Start my estimate</PB>
          <PB variant="secondary" size="lg" href="tel:+12253248252">Call {window.PG_PHONE}</PB>
        </div>
      </PC></section>
    </div>
  );
}

/* ===================== REVIEWS ===================== */
const ALL_REVIEWS = [
  { q: 'I simply shared a few photos and described what I wanted, and they took it from there. I received a quote the same day, the work was completed within a week, and the results exceeded my expectations.', n: 'Aimee Lemann', m: 'Google review' },
  { q: 'Andrew and his team do an awesome job on the attention to the details. They are very professional, punctual and work very efficiently. I shopped around and their prices are in line with his competition.', n: 'Connie Schiller', m: 'Google review' },
  { q: 'Reliable, detail-oriented, and driven. Their automated property management made everything seamless. We truly loved our experience and highly recommend!', n: 'Bridgette Homer', m: 'Google review' },
  { q: 'Andrew did an excellent job with my flower beds. He showed up when he said he would, he did a great job, he was reasonably priced and VERY professional and polite!', n: 'Tracy Evans', m: 'Google review' },
  { q: 'ProGround Land Management is the best company I have ever used for my landscaping needs. The value and quality of work is unmatched. Highly recommend.', n: 'Bennett Roman', m: 'Google review' },
  { q: 'A customer oriented company, they worry about my lawn and yard so I don\u2019t have to. A lot of times it is hit or miss to get someone reliable and really good. These guys are both.', n: 'Matthew Lee', m: 'Google review' },
  { q: 'Andrew and his crew did an excellent job transforming a difficult space to my specifications. They are professional, polite, and delivered the results I was expecting.', n: 'Shana', m: 'Google review' },
  { q: 'Best company by far, they bring the heat. Will continue to use them. Great pricing, great work, great people.', n: 'Carter Stevens', m: 'Google review' },
];

function ReviewsPage({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'Reviews' }]} eyebrow="Reviews"
        title="Rated 5.0 stars on Google" sub="What homeowners across Greater Baton Rouge say after the work is done." img={PIMG.golden} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, color: 'var(--pg-turf)', lineHeight: 1 }}>5.0</div>
          <div>
            <div style={{ color: 'var(--pg-turf)', fontSize: 20, letterSpacing: 3 }}>★★★★★</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--pg-slate-600)', marginTop: 4 }}>Based on Google reviews · 100+ properties served</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          {ALL_REVIEWS.map((r) => (
            <figure key={r.n} style={{ background: '#fff', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', padding: 28, margin: 0 }}>
              <div style={{ color: 'var(--pg-turf)', fontSize: 14, letterSpacing: 2 }}>★★★★★</div>
              <blockquote style={{ margin: '14px 0 18px', fontSize: 17.5, lineHeight: 1.55, color: 'var(--pg-ink)' }}>“{r.q}”</blockquote>
              <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-500)' }}>{r.n} · {r.m}</figcaption>
            </figure>
          ))}
        </div>
      </PC></section>
    </div>
  );
}

/* ===================== FAQ ===================== */
const FAQ_GROUPS = [
  { h: 'Estimates & pricing', items: [
    { q: 'Is the estimate really free?', a: 'Yes. Free estimates, no trip fee and no diagnostic fee. Send photos or have us out — either way you get a written price with a defined scope.' },
    { q: 'How fast will I hear back?', a: 'Same-day response. Inquiries are answered 24/7, and most get a real answer the same day.' },
    { q: 'How do you set the price?', a: 'Every job gets a written estimate. The number depends on property size, materials, access, frequency and scope — the service pages list the exact drivers.' },
  ] },
  { h: 'Services & scheduling', items: [
    { q: 'Do you do both maintenance and big projects?', a: 'Yes — that is the point of ProGround. The same crew mows, renovates, installs, grades and fixes drainage.' },
    { q: 'How does recurring billing work?', a: 'Maintenance agreements are billed automatically each month on a set schedule, so there is nothing to remember.' },
    { q: 'Can you take over from my current company?', a: 'Often. Tell us what is missing today and we will build a plan that fixes it.' },
  ] },
  { h: 'Drainage & grading', items: [
    { q: 'Why does water keep sitting in my yard?', a: 'Heavy clay holds water on the surface instead of soaking in. Adding topsoil rarely fixes it — the ground usually needs regrading or a catch-basin system.' },
    { q: 'French drain or grading — which do I need?', a: 'It depends on how the water behaves. Water sitting in one spot points to a catch basin; water sheeting across a yard points to grading. The drainage diagnostic gives a starting read.' },
  ] },
  { h: 'Guarantee & payment', items: [
    { q: 'Do you guarantee your work?', a: 'ProGround Land Management stands behind the quality of our workmanship. If an issue arises that is directly related to our installation or workmanship, we will evaluate it and work to make it right. Any project-specific workmanship warranties or manufacturer warranties will be clearly outlined in the customer\u2019s proposal or service agreement. Warranty coverage does not include damage caused by weather, improper watering or maintenance, pests, disease, third parties, or conditions outside of our control.' },
    { q: 'What payment methods do you accept?', a: 'We accept major credit/debit cards, checks, and ACH bank transfers. Recurring property maintenance clients can also use automatic payments for convenient monthly billing. Financing is not currently offered.' },
    { q: 'Do you run any promotions?', a: 'We periodically offer seasonal promotions and new-customer specials. Current promotions may vary throughout the year. Contact us to ask about any available offers.' },
  ] },
];

function FaqPage({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: 'FAQ' }]} eyebrow="Questions"
        title="Frequently asked questions" sub="The things homeowners ask most, answered straight." img={PIMG.aerial} />
      <section><PC style={{ padding: 'clamp(56px,8vw,110px) 0', maxWidth: 900 }}>
        {FAQ_GROUPS.map((g) => (
          <div key={g.h} style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(1.3rem,2.2vw,1.7rem)', marginBottom: 18 }}>{g.h}</h2>
            <PFaq items={g.items} />
          </div>
        ))}
        <div style={{ background: 'var(--pg-bone-deep)', border: '1px solid var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', padding: 'clamp(24px,3vw,36px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 'clamp(1.2rem,2vw,1.5rem)' }}>Still have a question?</h3>
            <p style={{ margin: '6px 0 0', color: 'var(--pg-slate-600)', fontSize: 16 }}>Call or text {window.PG_PHONE} — answered 24/7.</p>
          </div>
          <PB variant="primary" size="lg" onClick={() => onNav('estimate')}>Request an estimate</PB>
        </div>
      </PC></section>
    </div>
  );
}

/* ===================== LEGAL ===================== */
function LegalPage({ onNav, title, crumb, intro, sections }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <PageHero onNav={onNav} crumbs={[{ label: 'Home', route: 'home' }, { label: crumb }]} eyebrow="Legal" title={title} img={PIMG.backyard} />
      <section><PC style={{ padding: 'clamp(56px,8vw,96px) 0', maxWidth: 760 }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--pg-slate-700)' }}>{intro}</p>
        {sections.map((s) => (
          <div key={s.h} style={{ marginTop: 32 }}>
            <h2 style={{ fontSize: 'clamp(1.2rem,2vw,1.5rem)', marginBottom: 10 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--pg-slate-700)', margin: 0 }}>{s.p}</p>
          </div>
        ))}
        <p style={{ marginTop: 40, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-500)' }}>Questions about this policy? Contact info@progroundland.com or call {window.PG_PHONE}.</p>
      </PC></section>
    </div>
  );
}

function PrivacyPage({ onNav }) {
  return <LegalPage onNav={onNav} crumb="Privacy" title="Privacy Policy"
    intro="ProGround Land Management respects your privacy. This page explains what we collect when you request an estimate or contact us, and how we use it."
    sections={[
      { h: 'What we collect', p: 'Contact details you provide — name, phone, email, property address — plus any photos or project details you share so we can prepare an accurate estimate.' },
      { h: 'How we use it', p: 'Only to respond to your inquiry, prepare estimates, schedule and perform work, and follow up. We do not sell your information.' },
      { h: 'Text messages', p: 'If you opt in, we may text the number you provide about your estimate or scheduled service. Reply STOP at any time to opt out.' },
      { h: 'Data retention', p: 'We keep inquiry and customer records only as long as needed to serve you and meet legal or accounting requirements.' },
    ]} />;
}

function TermsPage({ onNav }) {
  return <LegalPage onNav={onNav} crumb="Terms" title="Terms of Service"
    intro="These terms cover use of the ProGround Land Management website and the estimates we provide. Booked work is governed by the written scope you approve."
    sections={[
      { h: 'Estimates', p: 'Estimates are based on the information and photos you provide and are confirmed on a site visit. Final scope and price are set in the written estimate you approve.' },
      { h: 'Scheduling', p: 'Service dates are scheduled after approval and may shift with weather or site conditions. We communicate changes as early as possible.' },
      { h: 'Workmanship', p: 'We stand behind our work and address issues with completed scopes. Plant establishment depends on after-care and conditions outside our control.' },
      { h: 'Website content', p: 'Photos and pricing shown are representative. Starting prices are not quotes; your price is set in your written estimate.' },
    ]} />;
}

Object.assign(window, {
  PGServicesIndex: ServicesIndex, PGAreasIndex: AreasIndex, PGAreaPage: AreaPage, PGWhoWeServe: WhoWeServe,
  PGPricingPage: PricingPage, PGGalleryPage: GalleryPage, PGAboutPage: AboutPage, PGProcessPage: ProcessPage,
  PGReviewsPage: ReviewsPage, PGFaqPage: FaqPage, PGPrivacyPage: PrivacyPage, PGTermsPage: TermsPage,
});
