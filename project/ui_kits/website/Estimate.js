/* ProGround website — Request an estimate: full conditional form. */
const DSe = window.ProGroundDesignSystem_313bb9;
const { Button: EB, Input: EI, Select: ES, Textarea: ET, Checkbox: ECk, TrustBar: ETB, Eyebrow: EEb } = DSe;
const EC = window.PGContainer;

const SERVICE_OPTS = ['Landscape Renovation', 'Landscape Installation', 'Drainage Solution', 'Grading & Yard Leveling', 'Annual Property Maintenance', 'Residential Lawn Maintenance', 'Commercial Property Maintenance', 'Mulch or Pine Straw Installation', 'Decorative Rock Installation', 'Landscape Bed Cleanup', 'Large Property Mowing', 'Christmas Light Installation', 'Other'];
const PROJECT_SVCS = ['Landscape Renovation', 'Landscape Installation', 'Drainage Solution', 'Grading & Yard Leveling'];

function branchFor(svc) {
  if (['Annual Property Maintenance', 'Residential Lawn Maintenance', 'Commercial Property Maintenance', 'Large Property Mowing'].includes(svc))
    return { title: 'About the recurring service', fields: [['What areas need to be maintained?', 'select', ['Whole property', 'Front only', 'Beds only', 'Large lot / field']], ['How often?', 'select', ['Weekly', 'Bi-weekly', 'Monthly', 'Not sure yet']], ['Currently using another company?', 'select', ['No', 'Yes']]] };
  if (['Landscape Renovation', 'Landscape Installation'].includes(svc))
    return { title: 'About the landscaping', fields: [['Renovating, installing new, or both?', 'select', ['Renovating existing', 'Installing new', 'Both']], ['Existing plants/materials to remove?', 'select', ['Yes', 'No', 'Not sure']], ['Finishes you want', 'select', ['Mulch', 'Pine straw', 'Decorative rock', 'Edging', 'Not sure yet']]] };
  if (['Drainage Solution', 'Grading & Yard Leveling'].includes(svc))
    return { title: 'About the water problem', fields: [['Where is the water collecting?', 'text'], ['How long does it stay after rain?', 'select', ['Hours', 'A day', 'Several days']], ['Gutters/downspouts contributing?', 'select', ['Yes', 'No', 'Not sure']]] };
  if (svc === 'Christmas Light Installation')
    return { title: 'About the lighting', fields: [['Areas to decorate', 'select', ['Roofline', 'Trees & shrubs', 'Columns', 'Walkways', 'A combination']], ['Accessible exterior power nearby?', 'select', ['Yes', 'No', 'Not sure']]] };
  return null;
}

function Field({ f }) {
  const [label, type, opts] = f;
  if (type === 'select') return <ES label={label} id={label} options={opts} placeholder="Choose one" />;
  return <EI label={label} id={label} />;
}

function EstimatePage({ onNav }) {
  const [step, setStep] = React.useState(1);
  const [svc, setSvc] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const branch = branchFor(svc);
  const totalSteps = 4;
  const isProject = PROJECT_SVCS.includes(svc);

  if (submitted) {
    return (
      <div style={{ background: 'var(--pg-bone)' }}>
        <EC style={{ padding: 'clamp(72px,10vw,140px) 0', maxWidth: 720, textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--pg-turf)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 24px' }}>✓</div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Thank you — we've got it.</h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--pg-slate-700)', maxWidth: '48ch', margin: '0 auto' }}>
            You'll hear back the same day. If it's urgent, call or text {window.PG_PHONE}. In the meantime, take a look at recent work.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
            <EB variant="primary" onClick={() => onNav('home')}>Back to home</EB>
            <EB variant="secondary" onClick={() => onNav('gallery')}>See the gallery</EB>
          </div>
        </EC>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--pg-bone)' }}>
      <EC style={{ padding: 'clamp(48px,6vw,80px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pg-hero-grid">
          <div>
            <EEb>Request a free estimate</EEb>
            <h1 style={{ marginTop: 12, fontSize: 'clamp(2rem,3.6vw,2.8rem)' }}>Tell us about the property.</h1>
            <div style={{ margin: '20px 0 28px' }}>
              <ETB items={['Free estimates', 'Same-day response', 'No trip fee', '100+ homes served']} />
            </div>

            {/* progress */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
              {[1, 2, 3, 4].map((n) => <div key={n} style={{ height: 4, flex: 1, borderRadius: 2, background: n <= step ? 'var(--pg-turf)' : 'var(--pg-line-strong)' }} />)}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--pg-slate-500)', marginBottom: 16 }}>STEP {step} OF {totalSteps}</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {step === 1 && <>
                <h3 style={{ fontSize: 20, margin: 0 }}>The property</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="pg-f2">
                  <EI label="Name" id="e-name" required />
                  <EI label="Phone" id="e-phone" type="tel" required help="Texting accepted." />
                </div>
                <EI label="Email" id="e-email" type="email" required />
                <EI label="Property address" id="e-addr" required help="Used to check coverage — city & parish only on the site." />
                <ES label="Residential or commercial?" id="e-type" required placeholder="Choose one" options={['Residential', 'Commercial']} />
                <ECk id="e-text" label="It's fine to text this number" defaultChecked />
              </>}
              {step === 2 && <>
                <h3 style={{ fontSize: 20, margin: 0 }}>What you need</h3>
                <ES label="Service needed" id="e-svc" required placeholder="Choose a service" options={SERVICE_OPTS} onChange={(e) => setSvc(e.target.value)} />
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--pg-slate-500)', margin: 0 }}>Choosing a service tailors the next questions.</p>
              </>}
              {step === 3 && <>
                <h3 style={{ fontSize: 20, margin: 0 }}>{branch ? branch.title : 'A little more detail'}</h3>
                {branch ? branch.fields.map((f) => <Field key={f[0]} f={f} />) : <p style={{ color: 'var(--pg-slate-600)' }}>Pick a service on the previous step to see tailored questions.</p>}
              </>}
              {step === 4 && <>
                <h3 style={{ fontSize: 20, margin: 0 }}>Scope, timing &amp; access</h3>
                <ET label="What would you like done, or what problem are you solving?" id="e-desc" required rows={4} />
                <div style={{ border: '1px dashed var(--pg-line-strong)', borderRadius: 'var(--radius-sm)', padding: '20px', textAlign: 'center', background: '#fff', color: 'var(--pg-slate-500)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                  ⬆ Upload photos (camera roll on mobile) — optional but the fastest path to a same-day quote
                </div>
                <ES label="How soon?" id="e-when" options={['As soon as possible', 'Within 2–4 weeks', 'Within 1–3 months', 'Just planning ahead']} placeholder="Choose one" />
                <EI label="Preferred day / time for a visit" id="e-time" help="A request, not a locked slot — we'll confirm." />
                {isProject && <ES label="Approximate investment range (optional)" id="e-budget" options={['Under $1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+', 'Not sure yet']} placeholder="Optional" />}
              </>}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28, gap: 12 }}>
              {step > 1 ? <EB variant="secondary" onClick={() => setStep((s) => s - 1)}>Back</EB> : <span />}
              {step < totalSteps
                ? <EB variant="primary" onClick={() => setStep((s) => s + 1)}>Continue</EB>
                : <EB variant="primary" onClick={() => setSubmitted(true)}>Submit request</EB>}
            </div>
          </div>

          {/* sidebar */}
          <aside style={{ background: 'var(--pg-deep-field)', color: '#F4F1E9', borderRadius: 'var(--radius-sm)', padding: 28, position: 'sticky', top: 100 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--pg-growth)' }}>Prefer to talk?</div>
            <a href="tel:+12253248252" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 24, color: '#fff', margin: '12px 0 4px', border: 'none' }}>{window.PG_PHONE}</a>
            <p style={{ color: 'var(--pg-slate-300)', fontSize: 14, lineHeight: 1.6 }}>Call or text — inquiries answered 24/7, same-day response. No trip fee, no diagnostic fee.</p>
            <div style={{ borderTop: '1px solid var(--pg-line-dark)', margin: '20px 0', paddingTop: 20 }}>
              <p style={{ color: 'var(--pg-slate-300)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>The five things that matter most: <span style={{ color: '#fff' }}>service, address, the problem, photos, and your timeframe.</span></p>
            </div>
          </aside>
        </div>
      </EC>
    </div>
  );
}

window.PGEstimatePage = EstimatePage;
