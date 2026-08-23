/* ProGround website — data-driven Service detail pages + Drainage money page (Yard Water Diagnostic). */
const DSs = window.ProGroundDesignSystem_313bb9;
const { Button: SB, PriceBlock: SP, BeforeAfterSlider: SBA, FaqAccordion: SFaq, Eyebrow: SEb, Badge: SBg, ServiceCard: SSC } = DSs;
const CC = window.PGContainer;
const SH = window.PGSectionHead;

const FOOTNOTE = 'Pricing varies based on property size, materials, accessibility, service frequency, and project scope. Free consultations and customized estimates are available.';
const SIMG = { house: __pgImg('house-curb','img/house-curb.jpg'), sod: __pgImg('sod-install','img/sod-install.jpg'), aerial: __pgImg('yard-aerial','img/yard-aerial.jpg'), crew: __pgImg('crew-trimming','img/crew-trimming.jpg'), golden: __pgImg('lawn-golden','img/lawn-golden.jpg'), backyard: __pgImg('lawn-backyard','img/lawn-backyard.jpg') };
const BA = {
  renoB: __pgImg('ba-reno-before','img/ba-reno-before.jpg'), renoA: __pgImg('ba-reno-after','img/ba-reno-after.jpg'),
  installB: __pgImg('ba-install-before','img/ba-install-before.jpg'), installA: __pgImg('ba-install-after','img/ba-install-after.jpg'),
  gradingB: __pgImg('ba-grading-before','img/ba-grading-before.jpg'), gradingA: __pgImg('ba-grading-after','img/ba-grading-after.jpg'),
  maintB: __pgImg('ba-maint-before','img/ba-maint-before.jpg'),
  mulchB: __pgImg('ba-mulch-before','img/ba-mulch-before.jpg'),
  commB: __pgImg('ba-comm-before','img/ba-comm-before.jpg'),
  drainB: __pgImg('drainage-before','img/drainage-before.jpg'), drainA: __pgImg('drainage-after','img/drainage-after.jpg'),
};

const SERVICE_DETAILS = {
  renovations: {
    name: 'Landscape Renovations', crumb: 'Landscape Renovations', eyebrow: 'Flagship service · from $750',
    headline: 'Landscape renovations in Greater Baton Rouge',
    sub: 'Overgrown or dated beds rebuilt with new plants, mulch, edging and a better layout — with a written scope and same-day response.',
    price: 'From $750', img: SIMG.house,
    problemH: 'Overgrown beds make a home look dated.',
    problemP: ['On established properties, foundation shrubs outgrow their beds, bed lines soften, and the whole house reads older than it is. A renovation resets the bones — not just the plants. Bed lines matter more than plant count for how a house looks from the street.', 'What makes a renovation cost $1,500 versus $6,000: bed square footage, plant size at install, removal volume, and access for equipment.'],
    included: ['Demolition and removal of tired plant material', 'Soil and bed preparation', 'Edging and bed-line reshaping', 'Plant selection for South Louisiana heat and clay', 'Mulch or pine straw finish', 'After-care instructions'],
    drivers: ['Bed square footage', 'Plant size at install', 'Removal volume', 'Equipment access', 'Irrigation present or not'],
    ba: 'Front-bed renovation · Greater Baton Rouge', baBefore: BA.renoB, baAfter: BA.renoA,
    faqs: [
      { q: 'How much does a landscape renovation cost?', a: 'Renovations start at $750. Most full front-bed renovations in Baton Rouge land between $2,500 and $6,000 depending on bed size, plant material and access.' },
      { q: 'Do you remove the old plants?', a: 'Yes — demolition and removal of tired plant material is part of the written scope.' },
      { q: 'How long does a renovation take?', a: 'Most residential front-bed renovations are completed in one to three days once scheduled.' },
      { q: 'What plants hold up in Baton Rouge summers?', a: 'We select plant material for South Louisiana heat and clay, and give you after-care instructions so it establishes well.' },
      { q: 'Do you maintain what you install?', a: 'We do — many renovation clients move onto an annual property maintenance agreement.' },
    ],
    related: [['mulch', 'Mulch, Pine Straw & Rock'], ['maintenance', 'Annual Property Maintenance'], ['drainage', 'Drainage Solutions']],
  },
  installation: {
    name: 'Landscape Installation', crumb: 'Landscape Installation', eyebrow: 'New landscaping · from $750',
    headline: 'Landscape installation for new and bare yards',
    sub: 'A finished landscape from scratch — plants, shrubs, sod, mulch and edging installed and ready the day we leave.',
    price: 'From $750', img: SIMG.sod,
    problemH: 'A bare yard is a blank slate — and a big decision.',
    problemP: ['New builds and cleared lots start with nothing: no beds, no sod, no plan. The order of operations matters — grading and drainage first, then beds, then sod — so nothing has to be torn out and redone later.', 'We plan the whole yard up front so the pieces fit together, then install it in the right sequence.'],
    included: ['Layout and plant plan for the space', 'Bed shaping, edging and soil prep', 'Plants and shrubs selected for clay and heat', 'Sod installation and grading tie-in', 'Mulch, pine straw or rock finish', 'After-care instructions'],
    drivers: ['Total square footage', 'Sod vs. seed', 'Plant size and count', 'Grading or drainage needed first', 'Site access'],
    ba: 'New landscape installation · Greater Baton Rouge', baBefore: BA.installB, baAfter: BA.installA,
    faqs: [
      { q: 'Do you install sod and plants, or just design?', a: 'We install. You get a finished yard — plants, sod, mulch and edging in place — not just a plan on paper.' },
      { q: 'Should drainage come before landscaping?', a: 'Almost always. We grade and handle water first so new sod and beds are not sitting in a low spot.' },
      { q: 'How soon can new sod be walked on?', a: 'Keep foot traffic light for the first two to three weeks while roots take, and water on the schedule we leave you.' },
    ],
    related: [['grading', 'Grading & Yard Leveling'], ['drainage', 'Drainage Solutions'], ['maintenance', 'Property Maintenance']],
  },
  grading: {
    name: 'Grading & Yard Leveling', crumb: 'Grading & Yard Leveling', eyebrow: 'Reshape the ground · from $750',
    headline: 'Grading and yard leveling in Baton Rouge',
    sub: 'Reshape the low, soggy or uneven parts of your yard so water runs off and the space is usable again.',
    price: 'From $750', img: SIMG.sod,
    problemH: 'A yard that will not drain is usually a grading problem.',
    problemP: ['Low corners, ruts and settled spots collect water and stay muddy for days. Adding topsoil on top rarely fixes it — the ground has to be reshaped so water has somewhere to go.', 'We re-establish fall across the yard, tie it into drainage where needed, and finish so the surface is smooth and mowable.'],
    included: ['Assessment of fall and low points', 'Reshaping and re-grading the surface', 'Fill and compaction where needed', 'Tie-in to drainage or an outlet', 'Final grade for sod or seed', 'Cleanup and restoration'],
    drivers: ['Area to be graded', 'Amount of fill required', 'Drainage tie-in needed', 'Equipment access', 'Sod or seed to finish'],
    ba: 'Reshaped bed & clean edging · Greater Baton Rouge', baBefore: BA.gradingB, baAfter: BA.gradingA,
    faqs: [
      { q: 'Grading or drainage — which do I need?', a: 'Often both. Grading moves water across the surface; drainage carries it away underground. We assess and recommend the right mix on a free site visit.' },
      { q: 'Will you re-sod after grading?', a: 'We finish to a clean final grade and can install sod or seed as part of the scope.' },
    ],
    related: [['drainage', 'Drainage Solutions'], ['installation', 'Landscape Installation'], ['maintenance', 'Property Maintenance']],
  },
  maintenance: {
    name: 'Property Maintenance', crumb: 'Property Maintenance', eyebrow: 'Recurring care · from $145/mo',
    headline: 'Annual property maintenance you never have to chase',
    sub: 'Mowing, bed care and seasonal work on a set schedule, billed automatically each month. One crew, one agreement, done.',
    price: 'From $145/mo', img: SIMG.crew,
    problemH: 'Chasing a lawn crew every few weeks gets old.',
    problemP: ['Most homeowners are tired of calling around every time the grass gets tall. A recurring agreement means set service days, a defined scope and automatic billing — the work just happens.', 'Because we also renovate and install, the same crew that maintains your property is the one that can rebuild it when it is time.'],
    included: ['Mowing, edging and blowing on a set schedule', 'Bed weeding and seasonal cleanups', 'Shrub and hedge trimming', 'Mulch and pine straw refreshes', 'Priority scheduling for extra work', 'Automatic monthly billing'],
    drivers: ['Property size', 'Service frequency', 'Beds included or turf only', 'Number of visits per month', 'Add-on seasonal work'],
    ba: 'Overgrown hedge, trimmed & cleaned · Greater Baton Rouge', baBefore: BA.maintB, baAfter: SIMG.crew,
    faqs: [
      { q: 'How does billing work?', a: 'Recurring agreements are billed automatically each month, so there is nothing to remember and no invoice to chase.' },
      { q: 'Can I include beds and just not mowing?', a: 'Yes. We scope the plan to what you want — turf only, beds only, or the whole property.' },
      { q: 'Do you take over from another company?', a: 'Often. Tell us who you use now and what is missing, and we will build a plan that fixes it.' },
    ],
    related: [['renovations', 'Landscape Renovations'], ['mulch', 'Mulch, Pine Straw & Rock'], ['commercial', 'Commercial Grounds']],
  },
  mulch: {
    name: 'Mulch, Pine Straw & Rock', crumb: 'Mulch, Pine Straw & Rock', eyebrow: 'Bed finish · from $350',
    headline: 'Mulch, pine straw and decorative rock',
    sub: 'Sharp, finished beds in an afternoon — fresh mulch, pine straw or rock installed over properly prepped and edged ground.',
    price: 'From $350', img: SIMG.golden,
    problemH: 'Faded mulch makes the whole yard look neglected.',
    problemP: ['Mulch breaks down and washes out; beds fade and lose their edge. A fresh install of mulch, pine straw or rock instantly resets curb appeal — especially with clean, reshaped edges.', 'We prep and edge first so the finish looks intentional and holds up, rather than just piling new material on top.'],
    included: ['Bed cleanup and light weeding', 'Edging and bed-line reshaping', 'Fresh mulch, pine straw or decorative rock', 'Even, consistent depth', 'Cleanup of hard surfaces', 'Optional weed-barrier under rock'],
    drivers: ['Bed square footage', 'Material chosen', 'Edging and reshaping needed', 'Weed barrier for rock', 'Site access'],
    ba: 'Fresh mulch & edging · Greater Baton Rouge', baBefore: BA.mulchB, baAfter: SIMG.golden,
    faqs: [
      { q: 'Mulch, pine straw or rock — which is best?', a: 'Mulch enriches soil and looks refined; pine straw is economical and classic for South Louisiana; rock is low-maintenance and permanent. We help you pick per bed.' },
      { q: 'Do you edge the beds too?', a: 'Yes — reshaped, clean edges are what make a fresh finish look sharp instead of just topped off.' },
    ],
    related: [['renovations', 'Landscape Renovations'], ['maintenance', 'Property Maintenance'], ['installation', 'Landscape Installation']],
  },
  commercial: {
    name: 'Commercial Grounds', crumb: 'Commercial Grounds', eyebrow: 'For businesses · custom quote',
    headline: 'Commercial grounds maintenance and improvements',
    sub: 'Dependable grounds care and landscape improvements for offices, retail, HOAs and multi-property portfolios across Greater Baton Rouge.',
    price: 'Custom quote', img: SIMG.backyard,
    problemH: 'Your property is the first thing customers judge.',
    problemP: ['Overgrown entrances and tired islands cost businesses first impressions. Commercial grounds need a reliable crew on a predictable schedule with a single point of contact — not a rotating cast of subcontractors.', 'We build a scope and schedule around your property, invoice cleanly, and keep the grounds looking open-for-business year-round.'],
    included: ['Scheduled mowing, edging and cleanup', 'Bed, island and entrance maintenance', 'Seasonal color and mulch refreshes', 'Drainage and grading improvements', 'Single point of contact', 'Clean, consolidated invoicing'],
    drivers: ['Total acreage', 'Service frequency', 'Number of properties', 'Improvement scope', 'Contract term'],
    ba: 'Frontage bed renovation · Greater Baton Rouge', baBefore: BA.commB, baAfter: SIMG.backyard,
    faqs: [
      { q: 'Do you service multiple properties under one contract?', a: 'Yes. Portfolios and HOAs get one agreement, one schedule and one point of contact.' },
      { q: 'Can you handle improvements, not just upkeep?', a: 'Absolutely — renovations, drainage and grading are all in scope alongside routine maintenance.' },
    ],
    related: [['maintenance', 'Property Maintenance'], ['drainage', 'Drainage Solutions'], ['renovations', 'Landscape Renovations']],
  },
};

function ServicePage({ onNav, param }) {
  const key = SERVICE_DETAILS[param] ? param : 'renovations';
  const s = SERVICE_DETAILS[key];
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      {/* hero */}
      <section>
        <CC style={{ padding: 'clamp(48px,6vw,80px) 0 clamp(32px,4vw,48px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-500)', marginBottom: 20 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ border: 'none' }}>Home</a> / <a href="#" onClick={(e) => { e.preventDefault(); onNav('services'); }} style={{ border: 'none' }}>Services</a> / {s.crumb}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pg-hero-grid">
            <div>
              <SEb>{s.eyebrow}</SEb>
              <h1 style={{ marginTop: 14, fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>{s.headline}</h1>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--pg-slate-700)', maxWidth: '46ch' }}>{s.sub}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
                <SB variant="primary" size="lg" onClick={() => onNav('estimate')}>Request an estimate</SB>
                <SB variant="secondary" size="lg" href="tel:+12253248252">Call {window.PG_PHONE}</SB>
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: '0 24px 60px -30px rgba(11,14,21,0.55)' }}>
              <img src={s.img} alt={s.name} style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </CC>
      </section>

      {/* problem + included */}
      <section style={{ background: 'var(--pg-bone-deep)' }}>
        <CC style={{ padding: 'clamp(64px,8vw,110px) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)' }} className="pg-hero-grid">
          <div>
            <SEb>The problem</SEb>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(1.6rem,2.6vw,2.1rem)' }}>{s.problemH}</h2>
            {s.problemP.map((p, i) => <p key={i} style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--pg-slate-700)' }}>{p}</p>)}
          </div>
          <div>
            <SEb>What's included</SEb>
            <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {s.included.map((x) => (
                <li key={x} style={{ display: 'flex', gap: 12, fontSize: 16.5, color: 'var(--pg-ink)', paddingBottom: 12, borderBottom: '1px solid var(--pg-line)' }}><span style={{ color: 'var(--pg-turf)', fontWeight: 700 }}>✓</span>{x}</li>
              ))}
            </ul>
          </div>
        </CC>
      </section>

      {/* price + evidence */}
      <section>
        <CC style={{ padding: 'clamp(64px,8vw,110px) 0', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'start' }} className="pg-hero-grid">
          <SP service={s.name} price={s.price} footnote={FOOTNOTE} drivers={s.drivers} />
          <div>
            <SEb>Recent work</SEb>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(1.6rem,2.6vw,2.1rem)' }}>Before and after.</h2>
            <SBA height={360} initial={40} beforeImage={s.baBefore} afterImage={s.baAfter} caption={s.ba} style={{ marginTop: 12 }} />
          </div>
        </CC>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--pg-bone-deep)' }}>
        <CC style={{ padding: 'clamp(64px,8vw,110px) 0', maxWidth: 900 }}>
          <SH eyebrow="Questions" title={s.name + ' FAQs'} />
          <SFaq items={s.faqs} />
        </CC>
      </section>

      {/* related */}
      <section>
        <CC style={{ padding: 'clamp(56px,7vw,96px) 0' }}>
          <SH eyebrow="Related services" title="Often paired together" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
            {s.related.map(([rk, rn]) => {
              const r = SERVICE_DETAILS[rk];
              const dest = rk === 'drainage' ? 'drainage' : 'service';
              const prm = rk === 'drainage' ? null : rk;
              const price = rk === 'drainage' ? 'From $1,000' : r.price;
              const desc = rk === 'drainage' ? 'Fix the water problem before it undoes the work.' : r.sub;
              return <SSC key={rk} name={rn} description={desc} price={price} onClick={(e) => { e.preventDefault(); onNav(dest, prm); }} />;
            })}
          </div>
        </CC>
      </section>
    </div>
  );
}

/* ---------- DRAINAGE MONEY PAGE + YARD WATER DIAGNOSTIC ---------- */
const DIAG = [
  { id: 'where', q: 'Where is the water collecting?', opts: ['A low spot in the middle of the yard', 'Along the foundation / near the slab', 'Across a wide area (sheets of water)', 'Near a downspout or gutter'] },
  { id: 'long', q: 'How long does water stay after rain?', opts: ['Gone within a few hours', 'A day or so', 'Several days — the ground stays soggy'] },
  { id: 'drain', q: 'Do you know where the water currently drains?', opts: ['Yes, there is an outlet', 'No, it just sits', 'Not sure'] },
  { id: 'tried', q: 'Has anything been attempted before?', opts: ['Nothing yet', 'Added topsoil to the low spot', 'A previous drain that failed'] },
];

function Diagnostic({ onNav }) {
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState({});
  const done = step >= DIAG.length;
  const pick = (id, v) => { setAns((a) => ({ ...a, [id]: v })); setStep((s) => s + 1); };

  const read = () => {
    const w = ans.where || '';
    if (w.includes('foundation')) return { cause: 'Water moving toward the slab', fam: 'Grading + downspout tie-ins', range: '$1,000 – $3,500', blue: true };
    if (w.includes('wide') || ans.long?.includes('Several')) return { cause: 'Poor fall across clay soil holding water on the surface', fam: 'Regrading, sometimes with a catch-basin system', range: '$1,500 – $5,000', blue: true };
    if (w.includes('downspout')) return { cause: 'Roof water concentrating in one area', fam: 'Downspout tie-ins and buried drainage pipe', range: '$1,000 – $2,500', blue: true };
    return { cause: 'A low spot that will not percolate in clay soil', fam: 'A catch basin and pipe run to a suitable outlet', range: '$1,000 – $3,000', blue: true };
  };

  if (done) {
    const r = read();
    return (
      <div style={{ background: 'var(--pg-deep-field-2)', border: '1px solid var(--pg-line-dark)', borderRadius: 'var(--radius-sm)', padding: 30 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#7FB0E8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Starting read</div>
        <h3 style={{ color: '#fff', marginTop: 12, fontSize: 22 }}>{r.cause}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '18px 0' }}>
          <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--pg-slate-300)' }}>LIKELY FIX</div><div style={{ color: '#fff', fontSize: 16, marginTop: 4 }}>{r.fam}</div></div>
          <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--pg-slate-300)' }}>STARTING RANGE</div><div style={{ fontFamily: 'var(--font-mono)', color: 'var(--pg-growth)', fontSize: 18, marginTop: 4 }}>{r.range}</div></div>
        </div>
        <p style={{ color: 'var(--pg-slate-300)', fontSize: 14, lineHeight: 1.6, borderLeft: '2px solid var(--pg-survey)', paddingLeft: 14 }}>
          This is a starting read based on what you described. Water problems are confirmed on the property, not on a screen — a free site visit is the next step.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
          <SB variant="primary" onDark onClick={() => onNav('estimate')}>Get my free estimate</SB>
          <SB variant="ghost" onDark onClick={() => { setStep(0); setAns({}); }}>Start over</SB>
        </div>
      </div>
    );
  }

  const cur = DIAG[step];
  return (
    <div style={{ background: 'var(--pg-deep-field-2)', border: '1px solid var(--pg-line-dark)', borderRadius: 'var(--radius-sm)', padding: 30 }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {DIAG.map((_, i) => <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i <= step ? 'var(--pg-survey)' : 'var(--pg-line-dark)' }} />)}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#7FB0E8' }}>QUESTION {step + 1} OF {DIAG.length}</div>
      <h3 style={{ color: '#fff', margin: '10px 0 20px', fontSize: 21 }}>{cur.q}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {cur.opts.map((o) => (
          <button key={o} onClick={() => pick(cur.id, o)}
            style={{ textAlign: 'left', padding: '14px 16px', borderRadius: 'var(--radius-sm)', background: 'var(--pg-deep-field)', color: '#F4F1E9', border: '1px solid var(--pg-line-dark)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 15.5, transition: 'border-color 120ms' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--pg-survey)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--pg-line-dark)'}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function DrainagePage({ onNav }) {
  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <section>
        <CC style={{ padding: 'clamp(48px,6vw,80px) 0 clamp(32px,4vw,48px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-500)', marginBottom: 20 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ border: 'none' }}>Home</a> / <a href="#" onClick={(e) => { e.preventDefault(); onNav('services'); }} style={{ border: 'none' }}>Services</a> / Drainage Solutions
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pg-hero-grid">
            <div>
              <span style={{ display: 'inline-block', marginBottom: 14 }}><SBg tone="water">Water &amp; drainage</SBg></span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>Yard drainage that works in Baton Rouge clay</h1>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--pg-slate-700)', maxWidth: '46ch' }}>
                Standing water after every rain is a grading problem, not a grass problem. Catch basins, drainage pipe and grading built for South Louisiana soil.
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--accent-water-text)', marginTop: 20 }}>Drainage projects from $1,000 · NDS &amp; ADS products installed</p>
            </div>
            <Diagnostic onNav={onNav} />
          </div>
        </CC>
      </section>

      {/* why clay */}
      <section style={{ background: 'var(--pg-bone-deep)' }}>
        <CC style={{ padding: 'clamp(64px,8vw,110px) 0' }}>
          <SH eyebrow="Why it happens here" title="Heavy clay holds water on the surface." sub="Water sits instead of soaking in — which is why adding topsoil to a low spot never fixes it." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              ['Catch basins & inlets', 'Surface water collected at the low points and carried away in solid pipe.'],
              ['Regrading', 'Reshaping fall so water moves away from the slab and toward a real outlet.'],
              ['Downspout tie-ins', 'Roof water is a hidden cause — we bury it and route it out.'],
            ].map(([h, d]) => (
              <div key={h} style={{ background: '#fff', border: '1px solid var(--pg-line-strong)', borderLeft: '3px solid var(--pg-survey)', borderRadius: 'var(--radius-sm)', padding: 26 }}>
                <h3 style={{ fontSize: 20, margin: '0 0 8px' }}>{h}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--pg-slate-600)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </CC>
      </section>

      {/* before / after */}
      <section>
        <CC style={{ padding: 'clamp(64px,8vw,110px) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pg-hero-grid">
          <SBA height={400} initial={48} beforeImage={BA.drainB} afterImage={BA.drainA} caption="Backyard drainage · catch basins and pipe, restored to clean turf" />
          <div>
            <SEb>Recent work</SEb>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(1.6rem,2.6vw,2.1rem)' }}>From soggy to solved.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--pg-slate-700)' }}>
              A backyard that held water after every rain, regraded and tied into buried drainage so the turf finally stays dry and mowable. We restore the surface when we are done — most lawns recover within a few weeks.
            </p>
            <div style={{ marginTop: 22 }}><SB variant="primary" size="lg" onClick={() => onNav('estimate')}>Fix my drainage</SB></div>
          </div>
        </CC>
      </section>

      <section style={{ background: 'var(--pg-bone-deep)' }}>
        <CC style={{ padding: 'clamp(56px,7vw,96px) 0', maxWidth: 900 }}>
          <SH eyebrow="Questions" title="Drainage FAQs" />
          <SFaq items={[
            { q: 'How much does yard drainage cost?', a: 'Drainage projects start at $1,000. The number is driven by linear feet of pipe, how many catch basins, and access for equipment — confirmed with a free site visit.' },
            { q: 'Do I need a French drain or grading?', a: 'It depends on how the water behaves. Water sitting in one spot points to a catch basin; water sheeting across a yard usually points to grading. The diagnostic above gives a starting read.' },
            { q: 'Will you damage my lawn?', a: 'We work carefully and restore disturbed turf. Most lawns recover within a few weeks.' },
            { q: 'What happens to the water once it is collected?', a: 'It is carried in pipe to a suitable outlet — the street, a swale, or an existing drain — away from the foundation.' },
          ]} />
        </CC>
      </section>
    </div>
  );
}

window.PGServicePage = ServicePage;
window.PGDrainagePage = DrainagePage;
window.PG_SERVICE_DETAILS = SERVICE_DETAILS;
