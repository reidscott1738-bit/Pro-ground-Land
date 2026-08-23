/* ProGround website — app shell + client-side router. */
function App() {
  const [route, setRoute] = React.useState('home');
  const [param, setParam] = React.useState(null);
  const onNav = (r, p = null) => { setRoute(r); setParam(p); const el = document.getElementById('pg-scroll'); if (el) el.scrollTo({ top: 0, behavior: 'auto' }); };

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
    terms: window.PGTermsPage,
  };
  const Screen = screens[route] || window.PGHome;

  return (
    <div>
      <window.PGHeader onNav={onNav} active={route} />
      <main><Screen onNav={onNav} param={param} /></main>
      {route !== 'estimate' && <window.PGConversion onNav={onNav} />}
      <window.PGFooter onNav={onNav} />
      <div style={{ height: 0 }} className="pg-mobile-spacer" />
      <window.PGMobileBar onNav={onNav} />
    </div>
  );
}
/* Guard: this file is also swept into _ds_bundle.js, where it would auto-run
   before the babel screen scripts (and before some DS components) are defined.
   Everything with a side effect lives inside this guard; index.html sets
   __PGReady after the bundle loads, so the bundled early-run is a no-op. */
if (window.__PGReady && window.PGHeader && window.PGHome) {
  const rootEl = document.getElementById('pg-root');
  const root = window.__pgRoot || (window.__pgRoot = ReactDOM.createRoot(rootEl));
  root.render(<App />);
}
