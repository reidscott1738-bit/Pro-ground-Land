<#  gen2.ps1 - Who We Serve (audience) pages + niche x city money pages.
    Dot-sourced after gen.ps1, so it has $SVC_URL, $SVC_PRICE, $SERVICES, Build-Faq, Write-Page, $BASE, $TEL, $PHONE. ASCII-only. #>

# ============================ WHO WE SERVE ============================
function Render-AudiencePage($p){
  $faq = Build-Faq $p.faqs
  $paras = ''; foreach($x in $p.body){ $paras += '<p style="font-size:17px;line-height:1.65;color:var(--pg-slate-700)">' + $x + '</p>' }
  $pts = ''; foreach($x in $p.points){ $pts += '<li><span class="tick">&check;</span>' + $x + '</li>' }
  $rel = ''
  foreach($rk in $p.related){ $rn = if($rk -eq 'drainage'){'Drainage Solutions'} else { ($SERVICES | Where-Object { $_.slug -eq $rk }).name }; $rel += '<a class="card card-link" href="' + $SVC_URL[$rk] + '"><div class="body"><h3>' + $rn + '</h3><span class="more">Learn more &rarr;</span></div></a>' }
  $svcNode = @{ '@context'='https://schema.org'; '@graph'=@(
    (@{ '@type'='Service'; name=$p.h1; serviceType=$p.h1; provider=@{ '@id'=$BASE + '/#business' }; areaServed=@{ '@type'='City'; name='Baton Rouge' }; url=($BASE + $p.path); description=$p.desc }),
    $faq.node ) }
  $ld = $svcNode | ConvertTo-Json -Depth 20
  $body = @"
<section class="page-hero">
  <div class="hero-bg" style="background-image:url($($p.img))"></div>
  <div class="pg-container">
    <!--breadcrumb-->
    <span class="eyebrow on-dark">Who we serve</span>
    <h1>$($p.h1)</h1>
    <p class="hero-sub">$($p.sub)</p>
    <div class="btn-row" style="margin-top:22px"><a class="btn btn-primary btn-lg on-dark" href="/estimate/">Request an estimate</a><a class="btn btn-secondary btn-lg on-dark" href="tel:$TEL">Call $PHONE</a></div>
  </div>
</section>
<section class="section bg-bone">
  <div class="pg-container grid-2 grid-2-top">
    <div><span class="eyebrow">$($p.eyebrow)</span><h2 style="margin-top:14px;font-size:clamp(1.6rem,2.8vw,2.2rem)">$($p.lead)</h2>$paras</div>
    <div class="card card-pad" style="background:var(--pg-bone-deep)"><div class="mono" style="font-size:12px;text-transform:uppercase;letter-spacing:0.16em;color:var(--pg-slate-500);margin-bottom:14px">What we handle</div><ul class="check-list" style="margin:0">$pts</ul></div>
  </div>
</section>
<section class="section bg-bone-deep">
  <div class="pg-container">
    <div class="section-head"><span class="eyebrow">Relevant services</span><h2>Where we start</h2></div>
    <div class="cards-grid">$rel</div>
  </div>
</section>
<section class="section bg-bone">
  <div class="pg-container maxw-900">
    <div class="section-head"><span class="eyebrow">Questions</span><h2>$($p.short) FAQs</h2></div>
    $($faq.html)
  </div>
</section>
<script type="application/ld+json">
$ld
</script>
"@
  Write-Page @{ path=$p.path; title=$p.title; description=$p.desc; image=$p.img; priority='0.75'; section='whoweserve'; crumbs=('Home>/ | Who We Serve>/who-we-serve/ | ' + $p.short) } $body
}

$AUDIENCES = @(
  @{ path='/who-we-serve/residential/'; short='Residential'; h1='Residential landscaping and maintenance'; title='Residential Landscaping in Baton Rouge | ProGround';
     desc='For homeowners across Greater Baton Rouge and surrounding areas: renovations, drainage, grading and year-round maintenance from one crew that shows up. Free estimates, same-day response.';
     sub='Established homes and new builds across Greater Baton Rouge and surrounding areas. From a bed refresh to a full renovation, drainage fix or year-round maintenance, one crew that shows up.'; img='/img/house-curb.jpg';
     eyebrow='For homeowners'; lead='One crew for everything your yard needs';
     body=@('Most homeowners are tired of juggling a mowing service, a landscaper and whoever they can find for drainage. ProGround does all of it, so the same crew that keeps your beds clean is the one that rebuilds them when it is time, and the one that fixes the low spot that floods every summer.','You get a written estimate with a defined scope before anything starts, a scheduled date, and a follow-up when it is done. No callbacks that never come, no crew that disappears for three weeks.');
     points=@('Curb-appeal renovations and bed refreshes','Drainage and grading fixes for standing water','Recurring mowing, edging and bed care','New-build and full-yard landscaping','Mulch, pine straw and decorative rock','Written scopes and digital approvals');
     faqs=@(@{q='Do you handle small jobs and big projects?';a='Both. A single bed refresh, a full renovation, a drainage fix or ongoing maintenance, it is all one crew and one point of contact.'},@{q='Do I have to sign up for recurring service?';a='No. Plenty of homeowners bring us in for a one-time renovation or drainage fix. Recurring maintenance is there if you want the yard handled year-round.'});
     related=@('renovations','drainage','maintenance') },
  @{ path='/who-we-serve/commercial/'; short='Commercial'; h1='Commercial grounds maintenance'; title='Commercial Grounds Maintenance | ProGround Baton Rouge';
     desc='Dependable grounds care for offices, retail and business properties across Greater Baton Rouge and surrounding areas: scheduled service, one point of contact and clean invoicing.';
     sub='Offices, retail and business properties that need dependable grounds care on a predictable schedule with a single point of contact and clean invoicing.'; img='/img/yard-aerial.jpg';
     eyebrow='For businesses'; lead='Grounds that stay open-for-business';
     body=@('Your property is the first thing customers judge. Overgrown entrances and tired islands cost first impressions, and a rotating cast of subcontractors makes it worse. Commercial grounds need a reliable crew on a set schedule with one number to call.','We build a scope and schedule around your property, keep the grounds sharp year-round, and invoice cleanly. When something beyond mowing comes up, a drainage problem or an entrance that needs a refresh, it is the same crew, not another vendor to manage.');
     points=@('Scheduled mowing, edging and cleanup','Bed, island and entrance maintenance','Seasonal color and mulch refreshes','Drainage and grading improvements','Single point of contact','Clean, consolidated invoicing');
     faqs=@(@{q='Do you work on a contract?';a='Yes. Commercial grounds are handled on a scheduled agreement with a defined scope, so the property stays consistent and the invoicing is predictable.'},@{q='Can you improve the property, not just maintain it?';a='Absolutely. Renovations, drainage and grading are all in scope alongside routine maintenance, from the same crew.'});
     related=@('commercial','maintenance','drainage') },
  @{ path='/who-we-serve/hoa-neighborhoods/'; short='HOA & Neighborhoods'; h1='HOA and neighborhood grounds care'; title='HOA Landscaping & Grounds Care | ProGround Baton Rouge';
     desc='Common areas, entrances and amenity grounds for HOAs and neighborhoods across Greater Baton Rouge and surrounding areas: one agreement, one schedule, one point of contact.';
     sub='Common areas, entrances, islands and amenity grounds kept consistent for HOAs and neighborhoods: one agreement, one schedule, one point of contact.'; img='/img/lawn-golden.jpg';
     eyebrow='For HOAs and neighborhoods'; lead='A neighborhood that looks cared-for at the entrance and everywhere else';
     body=@('The entrance sets the tone for a whole neighborhood, and the common areas are what residents notice and boards field complaints about. HOAs need a crew that shows up on schedule, keeps the standard consistent, and does not need to be chased.','ProGround handles the whole property under one agreement: entrances, islands, common turf and beds, seasonal color, with a single point of contact and clean invoicing the board can hand to the management company.');
     points=@('Entrance and island maintenance','Common-area mowing and bed care','Seasonal color and mulch refreshes','Drainage and grading on common ground','One agreement across the property','One point of contact for the board');
     faqs=@(@{q='Do you work with HOA boards and management companies?';a='Yes. We set up one agreement with a defined scope and schedule, one point of contact, and consolidated invoicing that is easy to hand off to a management company.'},@{q='Can you handle several common areas at once?';a='Yes. Entrances, islands, amenity grounds and common turf are all covered under a single schedule.'});
     related=@('maintenance','commercial','mulch') },
  @{ path='/who-we-serve/property-managers/'; short='Property Managers'; h1='For property managers and realtors'; title='Landscaping for Property Managers | ProGround Baton Rouge';
     desc='Reliable landscaping and grounds care for property managers and realtors across Greater Baton Rouge and surrounding areas: turnovers, curb appeal for listings and multi-property schedules.';
     sub='Turnover cleanups, listing curb appeal and dependable grounds care across a portfolio, one crew that answers same-day and invoices cleanly.'; img='/img/crew-trimming.jpg';
     eyebrow='For managers and realtors'; lead='Curb appeal on your timeline, across every property';
     body=@('A listing sells faster when the yard looks handled, and a managed property keeps tenants happier when the grounds stay consistent. Property managers and realtors need a crew that responds fast, gets a property show-ready, and can cover more than one address without the coordination headache.','We handle turnover cleanups, bed refreshes and curb-appeal work on short notice, plus recurring maintenance across a portfolio under one point of contact and clean invoicing.');
     points=@('Turnover and make-ready cleanups','Listing curb-appeal refreshes','Recurring maintenance across a portfolio','Drainage and grading when a property needs it','Same-day response','One point of contact, clean invoicing');
     faqs=@(@{q='Can you get a listing show-ready quickly?';a='That is common work for us: bed cleanups, fresh mulch, edging and a mow that makes a property photograph and show well, on a fast turnaround.'},@{q='Do you cover multiple properties?';a='Yes. A portfolio runs under one agreement, one schedule and one point of contact, with consolidated invoicing.'});
     related=@('maintenance','mulch','renovations') },
  @{ path='/who-we-serve/new-construction/'; short='New Construction'; h1='New construction and builder landscaping'; title='New Construction Landscaping | ProGround Baton Rouge';
     desc='First landscapes for new builds across Greater Baton Rouge and surrounding areas: grading and drainage first, then beds, sod and edging done in the right order so nothing gets redone.';
     sub='A finished first landscape for new builds and cleared lots: grading and drainage first, then beds, sod and edging, done in the right order.'; img='/img/sod-install.jpg';
     eyebrow='For new builds and builders'; lead='Get the first landscape right, in the right order';
     body=@('A new build starts with nothing: bare dirt, rough grade and no plan for where water goes. The order of operations matters. Grading and drainage first, then beds, then sod, so nothing has to be torn out and redone later. We plan the whole yard up front so the pieces fit.','On the clay soil common across the region, builder-grade sod that sits in a low spot dies and a downspout dumping against the slab undermines it. We handle the drainage tie-ins new construction usually skips, then install a finished landscape that establishes and lasts.');
     points=@('Grading and drainage before sod','Layout and plant plan for the space','Sod installation and grading tie-in','Beds, mulch, pine straw or rock finish','Plants selected for clay and heat','After-care instructions');
     faqs=@(@{q='Should drainage be done before landscaping on a new build?';a='Almost always. New lots are often left rough and flat. We grade and handle water first so new sod and beds are not sitting in a low spot that kills them.'},@{q='Do you work with builders on multiple homes?';a='Yes. We can set up first-landscape packages across several new builds with one point of contact.'});
     related=@('installation','grading','drainage') }
)
foreach($p in $AUDIENCES){ Render-AudiencePage $p }

$audHub = @"
<section class="page-hero">
  <div class="hero-bg" style="background-image:url(/img/crew-trimming.jpg)"></div>
  <div class="pg-container"><!--breadcrumb--><span class="eyebrow on-dark">Who we serve</span><h1>Residential and commercial</h1><p class="hero-sub">Scope of work tailored to your property</p></div>
</section>
<section class="section bg-bone"><div class="pg-container"><div class="grid-2">
  <div class="card" style="overflow:hidden;display:flex;flex-direction:column">
    <img src="/img/house-curb.jpg" alt="Residential landscaping and maintenance" width="760" height="240" loading="lazy" style="width:100%;height:240px;object-fit:cover;display:block">
    <div style="padding:clamp(24px,3vw,36px);display:flex;flex-direction:column;flex:1">
      <div class="mono" style="font-size:13px;color:var(--pg-turf)">Homeowners</div>
      <h2 style="margin:8px 0 10px;font-size:clamp(1.6rem,2.6vw,2.1rem)">Residential</h2>
      <p style="font-size:16.5px;line-height:1.6;color:var(--pg-slate-700);margin:0">Established homes and new builds across Greater Baton Rouge and surrounding areas. From a bed refresh to a full renovation, drainage fix or year-round maintenance, one crew that shows up.</p>
      <ul class="check-list" style="margin:18px 0 24px"><li>Curb-appeal renovations</li><li>Drainage &amp; grading fixes</li><li>Recurring mowing &amp; bed care</li><li>New-build landscaping</li></ul>
      <div class="btn-row" style="margin-top:auto"><a class="btn btn-primary" href="/estimate/">Request an estimate</a><a class="btn btn-ghost" href="/who-we-serve/residential/">Learn more</a></div>
    </div>
  </div>
  <div class="card" style="overflow:hidden;display:flex;flex-direction:column">
    <img src="/img/commercial-grounds.jpg" alt="Commercial grounds maintenance" width="760" height="240" loading="lazy" style="width:100%;height:240px;object-fit:cover;display:block">
    <div style="padding:clamp(24px,3vw,36px);display:flex;flex-direction:column;flex:1">
      <div class="mono" style="font-size:13px;color:var(--pg-turf)">Businesses &amp; HOAs</div>
      <h2 style="margin:8px 0 10px;font-size:clamp(1.6rem,2.6vw,2.1rem)">Commercial</h2>
      <p style="font-size:16.5px;line-height:1.6;color:var(--pg-slate-700);margin:0">Offices, retail, HOAs and multi-property portfolios that need dependable grounds care on a predictable schedule with a single point of contact and clean invoicing.</p>
      <ul class="check-list" style="margin:18px 0 24px"><li>Scheduled grounds maintenance</li><li>Entrance &amp; island improvements</li><li>Portfolio &amp; HOA agreements</li><li>One point of contact</li></ul>
      <div class="btn-row" style="margin-top:auto"><a class="btn btn-primary" href="/estimate/">Request an estimate</a><a class="btn btn-ghost" href="/who-we-serve/commercial/">Learn more</a></div>
    </div>
  </div>
</div></div></section>
"@
Write-Page @{ path='/who-we-serve/'; title='Who We Serve | ProGround Landscaping Baton Rouge'; description='ProGround serves homeowners, businesses, HOAs, property managers and builders across Greater Baton Rouge and surrounding areas with landscaping, drainage and maintenance from one crew.'; image='/img/crew-trimming.jpg'; priority='0.8'; section='whoweserve'; crumbs='Home>/ | Who We Serve' } $audHub

# ============================ MONEY PAGES (niche x city) ============================
function Render-MoneyPage($m){
  $faq = Build-Faq $m.faqs
  $paras = ''; foreach($x in $m.body){ $paras += '<p style="font-size:17px;line-height:1.65;color:var(--pg-slate-700)">' + $x + '</p>' }
  $pts = ''; foreach($x in $m.points){ $pts += '<li><span class="tick">&check;</span>' + $x + '</li>' }
  $svcNode = @{ '@context'='https://schema.org'; '@graph'=@(
    (@{ '@type'='Service'; name=$m.h1; serviceType=$m.serviceType; provider=@{ '@id'=$BASE + '/#business' }; areaServed=@{ '@type'='City'; name=$m.city }; url=($BASE + $m.path); description=$m.desc }),
    $faq.node ) }
  $ld = $svcNode | ConvertTo-Json -Depth 20
  $badge = if($m.water){'<span class="badge water">Water &amp; drainage</span>'} else {'<span class="eyebrow on-dark">' + $m.eyebrow + '</span>'}
  $body = @"
<section class="page-hero">
  <div class="hero-bg" style="background-image:url($($m.img))"></div>
  <div class="pg-container">
    <!--breadcrumb-->
    $badge
    <h1>$($m.h1)</h1>
    <p class="hero-sub">$($m.sub)</p>
    <div class="btn-row" style="margin-top:22px"><a class="btn btn-primary btn-lg on-dark" href="/estimate/">$($m.cta)</a><a class="btn btn-secondary btn-lg on-dark" href="tel:$TEL">Call $PHONE</a></div>
  </div>
</section>
<section class="section bg-bone">
  <div class="pg-container grid-2 grid-2-top">
    <div><span class="eyebrow">$($m.eyebrow)</span><h2 style="margin-top:14px;font-size:clamp(1.6rem,2.8vw,2.2rem)">$($m.lead)</h2>$paras</div>
    <div class="card card-pad" style="background:var(--pg-bone-deep)"><div class="mono" style="font-size:12px;text-transform:uppercase;letter-spacing:0.16em;color:var(--pg-slate-500);margin-bottom:14px">What it includes</div><ul class="check-list" style="margin:0">$pts</ul>
      <p class="footnote" style="margin-top:16px">$($m.pricenote)</p></div>
  </div>
</section>
<section class="section bg-bone-deep">
  <div class="pg-container maxw-900">
    <div class="section-head"><span class="eyebrow">$($m.city) questions</span><h2>$($m.short) FAQs</h2></div>
    $($faq.html)
  </div>
</section>
<script type="application/ld+json">
$ld
</script>
"@
  Write-Page @{ path=$m.path; title=$m.title; description=$m.desc; image=$m.img; priority='0.85'; crumbs=$m.crumbs } $body
}

$MONEY = @(
  @{ path='/drainage-baton-rouge/'; city='Baton Rouge'; water=$true; short='Baton Rouge drainage'; serviceType='Yard drainage and grading';
     h1='Yard drainage in Baton Rouge'; title='Yard Drainage in Baton Rouge | ProGround';
     desc='Fix standing water in Baton Rouge clay soil for good. Catch basins, drainage pipe and regrading for flat lots, with a free site visit.';
     sub='Standing water after every rain is a grading problem, not a grass problem. Catch basins, buried pipe and regrading built for Baton Rouge clay.'; img='/img/drainage-after.jpg';
     eyebrow='Drainage in Baton Rouge'; lead='Why Baton Rouge yards hold water'; cta='Fix my drainage';
     pricenote='Every drainage project is scoped to the property. It depends on linear feet of pipe, number of catch basins and access, and is confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Drainage in Baton Rouge';
     body=@('Baton Rouge sits on flat, clay-heavy ground. When the summer storms roll through, that water does not soak in, it ponds, along the slab, in the low corners and across the yard. Adding topsoil to a low spot never lasts because the problem is where the water goes, not what is on top.','We read how the water actually behaves on your lot, then fix the cause: regrading to re-establish fall, catch basins and buried pipe to carry surface water to a real outlet, and downspout tie-ins so roof water stops concentrating against the foundation. It is the same approach whether you are in Bocage, Goodwood, Southdowns or a newer build off Highland Road.');
     points=@('Catch basins and inlets at the low points','Buried solid pipe to a suitable outlet','Regrading to re-establish fall across the yard','Downspout tie-ins to move roof water','Surface restored, most lawns recover in weeks','NDS and ADS drainage products installed');
     faqs=@(@{q='How much does drainage cost in Baton Rouge?';a='Every project is scoped to the lot. The number is driven by linear feet of pipe, how many catch basins, and access for equipment, confirmed on a free site visit.'},@{q='Why does my Baton Rouge yard flood after every rain?';a='Flat lots and heavy clay soil hold water on the surface instead of letting it soak in. The fix is grading and drainage to carry it off, not more topsoil.'},@{q='Do I need a French drain or regrading?';a='It depends on how the water behaves. Water sitting in one spot points to a catch basin; water sheeting across the yard points to grading. We assess and recommend on a free visit.'},@{q='Will you tear up my lawn?';a='We work carefully and restore disturbed turf. Most Baton Rouge lawns recover within a few weeks.'}) },
  @{ path='/drainage-denham-springs/'; city='Denham Springs'; water=$true; short='Denham Springs drainage'; serviceType='Yard drainage and grading';
     h1='Yard drainage in Denham Springs'; title='Yard Drainage in Denham Springs, LA | ProGround';
     desc='Standing water on flat Livingston Parish ground? We are locally based in Denham Springs for the fastest drainage and grading response.';
     sub='Low, flat Livingston Parish ground holds water. We are based right here in Denham Springs, so drainage and grading get our fastest response.'; img='/img/lawn-backyard.jpg';
     eyebrow='Drainage in Denham Springs'; lead='Denham Springs knows water'; cta='Fix my drainage';
     pricenote='Every drainage project is scoped to the property. It depends on pipe length, catch basins and access, confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Drainage in Denham Springs';
     body=@('Denham Springs learned about water the hard way, and even an ordinary storm reminds homeowners how flat and slow-draining this ground is. Yards hold water for days, mulch washes out, and low corners stay soggy long after the rain stops.','Because ProGround is locally owned right here, drainage and grading are bread-and-butter work for us, and we can usually get out same-day. We regrade to re-establish fall, run catch basins and buried pipe to a real outlet, and tie in downspouts so roof water stops pooling against the slab.');
     points=@('Fast, local response, often same-day','Regrading low and settled areas','Catch basins and buried pipe to an outlet','Downspout tie-ins','Surface restored when we finish','Built for flat, slow-draining Livingston Parish ground');
     faqs=@(@{q='Are you local to Denham Springs for drainage work?';a='Yes, ProGround is locally owned here, so Denham Springs gets our fastest drainage and grading response, often same-day.'},@{q='Can you fix a yard that holds water for days?';a='That is a grading and drainage problem, which we do most here. We re-establish fall and run water to a suitable outlet so it leaves the yard. It starts with a free site visit.'},@{q='How much does drainage cost here?';a='Every project is scoped to the lot, driven by pipe length, catch basins and access, and confirmed on a free visit.'}) },
  @{ path='/drainage-prairieville/'; city='Prairieville'; water=$true; short='Prairieville drainage'; serviceType='Yard drainage and grading';
     h1='Yard drainage in Prairieville'; title='Yard Drainage in Prairieville, LA | ProGround';
     desc='New Prairieville subdivisions sit close on clay with little drainage plan. We fix standing water between lots with catch basins and regrading.';
     sub='New Ascension Parish subdivisions set homes close together on clay, often with no real drainage plan. We fix the standing water that follows.'; img='/img/sod-install.jpg';
     eyebrow='Drainage in Prairieville'; lead='New builds, tight lots, standing water'; cta='Fix my drainage';
     pricenote='Every drainage project is scoped to the property. It depends on pipe length, catch basins and access, confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Drainage in Prairieville';
     body=@('Prairieville has grown fast, and a lot of that growth is new subdivisions along Highway 42 and Airline where homes sit close together on flat, clay ground. Builders rarely leave a real drainage plan, so water collects between houses, along the slab, and in the low spots the grade never accounted for.','We fix it the right way: regrading to move water off tight lots, catch basins and buried pipe to carry it to a suitable outlet, and downspout tie-ins so roof water is not dumping against a foundation two feet from the property line. If your new build is still bare, we handle drainage before the sod and beds go in.');
     points=@('Regrading tight new-build lots','Catch basins and buried pipe','Downspout tie-ins between close-set homes','Drainage before new sod and beds','Surface restored when we finish','Built for Ascension Parish clay soil');
     faqs=@(@{q='Our new Prairieville build has standing water. Can you fix it?';a='Yes. New subdivisions on clay often lack a drainage plan. We regrade and run catch basins and pipe to a suitable outlet so water leaves the lot. It starts with a free site visit.'},@{q='Should drainage be done before sod on a new build?';a='Almost always. We handle grading and water first so new sod and beds are not sitting in a low spot that kills them.'},@{q='How much does drainage cost in Prairieville?';a='Every project is scoped to the lot, driven by pipe length, catch basins and access, and confirmed on a free visit.'}) },
  @{ path='/commercial-landscaping-baton-rouge/'; city='Baton Rouge'; water=$false; short='Baton Rouge commercial'; serviceType='Commercial grounds maintenance';
     h1='Commercial landscaping in Baton Rouge'; title='Commercial Landscaping in Baton Rouge | ProGround';
     desc='Dependable commercial grounds care for Baton Rouge offices, retail and business properties. Scheduled service, one point of contact, clean invoicing.';
     sub='Offices, retail and business properties across Baton Rouge kept open-for-business, on a predictable schedule with one point of contact.'; img='/img/yard-aerial.jpg';
     eyebrow='Commercial in Baton Rouge'; lead='Your property is the first thing customers judge'; cta='Request a walk-through';
     pricenote='Commercial grounds are scoped per property. It depends on acreage, frequency, number of sites and scope, set in a written agreement after a free walk-through.';
     crumbs='Home>/ | Services>/services/ | Commercial in Baton Rouge';
     body=@('Along the busy corridors of Baton Rouge, an overgrown entrance or a tired island costs a business first impressions. Commercial grounds need a reliable crew on a set schedule with one number to call, not a rotating cast of subcontractors who each blame the last.','ProGround builds a scope and schedule around your property, keeps the grounds sharp year-round, and invoices cleanly. When something beyond mowing comes up, a drainage problem in the parking lot island, an entrance that needs a refresh, it is the same crew, not another vendor to manage.');
     points=@('Scheduled mowing, edging and cleanup','Entrance and island maintenance','Seasonal color and mulch refreshes','Drainage and grading improvements','Single point of contact','Clean, consolidated invoicing');
     faqs=@(@{q='Do you maintain commercial properties in Baton Rouge on contract?';a='Yes. Commercial grounds run on a scheduled agreement with a defined scope so the property stays consistent and the invoicing is predictable.'},@{q='Can one company handle several of our Baton Rouge locations?';a='Yes. Multi-site businesses and portfolios get one agreement, one schedule, one point of contact and consolidated invoicing.'},@{q='Do you do improvements, not just upkeep?';a='Yes, renovations, drainage and grading are all in scope alongside routine maintenance.'}) },
  @{ path='/commercial-landscaping-gonzales/'; city='Gonzales'; water=$false; short='Gonzales commercial'; serviceType='Commercial grounds maintenance';
     h1='Commercial landscaping in Gonzales'; title='Commercial Landscaping in Gonzales, LA | ProGround';
     desc='Grounds maintenance for Gonzales retail, offices and Airline Highway business frontage. Scheduled service, one point of contact, clean invoicing. Free walk-through.';
     sub='Retail and offices along the Airline Highway corridor kept sharp on a predictable schedule, with one point of contact and clean invoicing.'; img='/img/lawn-golden.jpg';
     eyebrow='Commercial in Gonzales'; lead='Business frontage that stays presentable'; cta='Request a walk-through';
     pricenote='Commercial grounds are scoped per property. It depends on acreage, frequency, number of sites and scope, set in a written agreement after a free walk-through.';
     crumbs='Home>/ | Services>/services/ | Commercial in Gonzales';
     body=@('Gonzales is one of the busiest commercial corridors between Baton Rouge and New Orleans, and the businesses along Airline Highway live and die on first impressions. Overgrown frontage and tired islands send the wrong message; consistent, sharp grounds send the right one.','ProGround handles the whole property on a schedule, with one point of contact and clean invoicing. Scheduled mowing and cleanup, entrance and island care, seasonal refreshes, and the drainage or grading work that keeps a parking lot island or frontage from washing out, all from one crew.');
     points=@('Scheduled mowing, edging and cleanup','Entrance and island maintenance','Seasonal color and mulch refreshes','Drainage and grading improvements','Single point of contact','Clean, consolidated invoicing');
     faqs=@(@{q='Do you maintain Airline Highway businesses in Gonzales?';a='Yes. The Airline corridor is prime commercial territory. We keep retail and office frontage sharp on a scheduled agreement with one point of contact.'},@{q='Can you cover multiple Gonzales properties?';a='Yes. Multi-site businesses get one agreement, one schedule and consolidated invoicing.'},@{q='Do you handle improvements too?';a='Yes, entrance refreshes, drainage and grading are all in scope alongside routine grounds care.'}) },
  @{ path='/hoa-landscaping-baton-rouge/'; city='Baton Rouge'; water=$false; short='Baton Rouge HOA'; serviceType='HOA grounds maintenance';
     h1='HOA landscaping in Baton Rouge'; title='HOA Landscaping in Baton Rouge | ProGround';
     desc='HOA and neighborhood common-area grounds care across Baton Rouge: entrances, islands and amenity areas kept consistent under one agreement and one point of contact.';
     sub='Entrances, islands, common turf and amenity grounds kept consistent for Baton Rouge HOAs, under one agreement with one point of contact.'; img='/img/house-curb.jpg';
     eyebrow='HOA in Baton Rouge'; lead='The entrance sets the tone for the whole neighborhood'; cta='Request a walk-through';
     pricenote='HOA grounds are scoped per community. It depends on common-area acreage, frequency and scope, set in a written agreement after a free walk-through.';
     crumbs='Home>/ | Services>/services/ | HOA in Baton Rouge';
     body=@('In a Baton Rouge neighborhood, the entrance is the first thing residents and visitors see, and the common areas are what boards field complaints about. HOAs need a crew that shows up on schedule, holds the standard consistent, and does not need to be chased between visits.','ProGround handles the whole community under one agreement: entrances, islands, common turf and beds, seasonal color, plus drainage and grading on common ground when it is needed. One point of contact, and invoicing the board can hand straight to the management company.');
     points=@('Entrance and island maintenance','Common-area mowing and bed care','Seasonal color and mulch refreshes','Drainage and grading on common ground','One agreement across the community','One point of contact for the board');
     faqs=@(@{q='Do you work with Baton Rouge HOA boards and management companies?';a='Yes. We set up one agreement with a defined scope and schedule, one point of contact, and consolidated invoicing that is easy to hand to a management company.'},@{q='Can you keep our entrance and common areas consistent?';a='That is the point of a scheduled agreement, entrances, islands, common turf and beds held to a consistent standard year-round.'},@{q='Do you handle common-area drainage?';a='Yes, drainage and grading on common ground are in scope alongside routine maintenance.'}) },

  @{ path='/landscape-renovation-baton-rouge/'; city='Baton Rouge'; water=$false; short='Baton Rouge renovation'; serviceType='Landscape renovation';
     h1='Landscape renovation in Baton Rouge'; title='Landscape Renovation in Baton Rouge | ProGround';
     desc='Overgrown, dated front beds rebuilt for established Baton Rouge homes. New bed lines, plants for clay and heat, clean edging, written scope. Free estimate.';
     sub='On an established Baton Rouge home, overgrown foundation beds and soft, dated bed lines make the whole house read older than it is. A renovation resets the bones.'; img='/img/reno-after.jpg';
     eyebrow='Renovation in Baton Rouge'; lead='Reset an established Baton Rouge home from the street'; cta='Renovate my landscaping';
     pricenote='Every renovation is scoped to the property. It depends on bed square footage, plant size, removal volume and access, confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Renovation in Baton Rouge';
     body=@('Baton Rouge is full of established neighborhoods that were landscaped decades ago. In Bocage, Goodwood, Southdowns, Kenilworth and out along Highland Road, the original foundation shrubs have swallowed their beds and the bed lines have gone soft. The house has not aged, but the landscaping has, and that is what people see from the street. A renovation resets the bed lines, the edging and the plant material so the home reads its age or younger.','The other half of the job is choosing plants that actually last here. Baton Rouge summers are long and the soil is heavy clay, so we select material that shrugs both off, prep and reshape the beds properly, and finish with mulch or pine straw and clean edges. You get a written scope before anything is torn out, and after-care instructions so the new planting establishes.');
     points=@('Demolition and removal of overgrown, tired plant material','Bed-line reshaping and clean, crisp edging','Soil and bed preparation','Plants selected for Baton Rouge heat and clay','Mulch or pine straw finish','Written scope and after-care instructions');
     faqs=@(@{q='How much does a landscape renovation cost in Baton Rouge?';a='Every renovation is scoped to the property. It comes down to bed square footage, plant size, how much old material has to be removed, and access. You get a written estimate after a free look, with no trip fee.'},@{q='Do you renovate beds in older neighborhoods like Bocage and Goodwood?';a='Yes, established Baton Rouge neighborhoods are where we do most of our renovation work, resetting overgrown foundation beds, edging and plant material so the home looks cared-for again.'},@{q='Will the new plants survive our summers and clay soil?';a='We select plant material for South Louisiana heat and heavy clay, prep the beds properly, and leave after-care instructions so everything establishes well.'},@{q='How long does a renovation take?';a='Most residential front-bed renovations are completed in one to three days once scheduled.'}) },

  @{ path='/landscape-renovation-denham-springs/'; city='Denham Springs'; water=$false; short='Denham Springs renovation'; serviceType='Landscape renovation';
     h1='Landscape renovation in Denham Springs'; title='Landscape Renovation in Denham Springs, LA | ProGround';
     desc='Bed refreshes and full landscape renovations for Denham Springs homes from our local crew. New plants, edging and mulch, drainage-aware. Free estimate.';
     sub='ProGround is based right here in Denham Springs, so this is where our renovation work gets the fastest response, and where we build beds that account for how this ground holds water.'; img='/img/house-curb.jpg';
     eyebrow='Renovation in Denham Springs'; lead='A local crew that rebuilds beds the right way'; cta='Renovate my landscaping';
     pricenote='Every renovation is scoped to the property. It depends on bed square footage, plant size, removal volume and access, confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Renovation in Denham Springs';
     body=@('Denham Springs runs from the older streets around the Antique Village and Range Avenue to the newer subdivisions out toward Juban Crossing. The older homes want their tired foundation beds reset, the newer ones want a first-class refresh the builder never gave them. Being locally owned here means we are usually the fastest to get out, look at the property and put a written scope in your hands.','Because this is low, flat Livingston Parish ground that holds water, a renovation here is not just about plants. We set bed grades so new beds are not sitting in a puddle after every storm, reshape the edging, and choose material that handles both the heat and the wet. If a bed floods, we fix the drainage as part of the same job instead of sending you to another contractor.');
     points=@('Removal of overgrown, tired plant material','Bed-line reshaping and clean edging','Bed grading so new beds drain properly','Plants selected for heat, clay and wet ground','Mulch or pine straw finish','Fast local response and written scope');
     faqs=@(@{q='Are you actually based in Denham Springs?';a='Yes, ProGround is locally owned and operated here, so Denham Springs renovations get our fastest response, often same-day.'},@{q='My beds hold water after it rains. Can you fix that during a renovation?';a='Yes. We set bed grades and handle drainage as part of the renovation so new beds are not sitting in water. It is one crew for the beds and the water, not two.'},@{q='Do you work on both older and newer homes here?';a='Both, from bed refreshes on established homes near the Antique Village to full renovations in the newer subdivisions toward Juban Crossing.'}) },

  @{ path='/landscape-renovation-prairieville/'; city='Prairieville'; water=$false; short='Prairieville renovation'; serviceType='Landscape renovation';
     h1='Landscape renovation in Prairieville'; title='Landscape Renovation in Prairieville, LA | ProGround';
     desc='Refresh aging subdivision landscaping in Prairieville, or renovate tired beds with new plants, edging and mulch. Written scope, free estimate.';
     sub='Prairieville grew fast, and the builder landscaping that went in with those homes is now a decade or more old. We reset it into beds that look intentional again.'; img='/img/sod-install.jpg';
     eyebrow='Renovation in Prairieville'; lead='Reset builder-grade beds that have aged out'; cta='Renovate my landscaping';
     pricenote='Every renovation is scoped to the property. It depends on bed square footage, plant size, removal volume and access, confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Renovation in Prairieville';
     body=@('A lot of Prairieville homes went up during the Ascension Parish growth boom along Highway 42 and Airline, and they came with quick, builder-grade landscaping, a few foundation shrubs and a strip of mulch. Ten or fifteen years on, those plants have outgrown the beds and the bed lines have disappeared. We reset the whole thing, reshape the bed lines, pull the tired material, and replant with plants that suit the spot.','On the clay soil common here, we also make sure the renovated beds sit and drain right, especially on the tight lots common in newer subdivisions where water collects between houses. The result is beds that look designed rather than defaulted, with a written scope up front and after-care so the planting takes.');
     points=@('Removal of aged builder-grade plant material','Bed-line reshaping and clean edging','Soil and bed preparation','Plants selected for Ascension clay and heat','Mulch, pine straw or decorative rock finish','Written scope and after-care instructions');
     faqs=@(@{q='Our subdivision landscaping looks tired. Can you refresh it?';a='Yes, that is a lot of our Prairieville work, resetting the aging builder-grade beds that came with homes off Highway 42 and Airline into something that looks intentional again.'},@{q='Can you renovate and fix a drainage problem at the same time?';a='Yes. On tight lots where water collects, we set bed grades and handle drainage as part of the renovation, one crew for both.'},@{q='How much does a renovation cost in Prairieville?';a='Each one is scoped to the property, driven by bed size, plant material, removal and access. You get a written estimate after a free look.'}) },

  @{ path='/landscape-renovation-central/'; city='Central'; water=$false; short='Central renovation'; serviceType='Landscape renovation';
     h1='Landscape renovation in Central'; title='Landscape Renovation in Central, LA | ProGround';
     desc='Renovate mature, overgrown landscaping on larger Central lots. New bed lines, plant material, edging and mulch, with a written scope. Free estimate.';
     sub='Central homes tend to sit on larger, established lots, and the landscaping that came with them has grown well past its beds. We reset it into something that fits the property again.'; img='/img/crew-trimming.jpg';
     eyebrow='Renovation in Central'; lead='Bring mature Central landscaping back into shape'; cta='Renovate my landscaping';
     pricenote='Every renovation is scoped to the property. It depends on bed square footage, plant size, removal volume and access, confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Renovation in Central';
     body=@('The City of Central is family neighborhoods and larger lots along Hooper, Sullivan, Wax and Greenwell Springs, and a lot of those homes have mature landscaping that has simply outgrown its space. Foundation shrubs press against the eaves, bed lines have vanished into the lawn, and the beds read overgrown rather than established. A renovation resets the bed lines and plant material so the property looks intentional and cared-for.','Bigger Central lots usually mean bigger beds and more removal, which is real work, and some of Central sits low near the Comite and Amite, so we make sure renovated beds are graded to drain. We scope it in writing, handle the demolition and haul-off, and finish with clean edging, fresh mulch or pine straw and plants chosen for the conditions.');
     points=@('Removal and haul-off of overgrown material','Bed-line reshaping and clean edging on larger beds','Bed grading so renovated beds drain','Plants selected for heat and clay','Mulch or pine straw finish','Written scope and after-care instructions');
     faqs=@(@{q='Do you renovate larger, established yards in Central?';a='Yes, that is some of our favorite work here, resetting overgrown foundation beds and plant material on mature Central properties along Hooper, Sullivan and Greenwell Springs.'},@{q='My beds are huge and overgrown. Is that a bigger job?';a='Larger beds and more removal do add to the scope, which is exactly why we put a written estimate in your hands after a free look, so there are no surprises.'},@{q='Can you also keep it maintained after the renovation?';a='Yes, many Central clients move onto a recurring maintenance agreement so the renovated beds stay sharp year-round.'}) },

  @{ path='/landscape-renovation-walker/'; city='Walker'; water=$false; short='Walker renovation'; serviceType='Landscape renovation';
     h1='Landscape renovation in Walker'; title='Landscape Renovation in Walker, LA | ProGround';
     desc='Renovate tired, overgrown beds on larger Walker lots with new plants, reshaped edging and mulch. Local crew, written scope, free estimate.';
     sub='Walker is larger-lot Livingston Parish, which usually means bigger beds and more overgrowth to reset. We are based one exit away and rebuild it the right way.'; img='/img/lawn-golden.jpg';
     eyebrow='Renovation in Walker'; lead='More yard, bigger beds, a proper reset'; cta='Renovate my landscaping';
     pricenote='Every renovation is scoped to the property. It depends on bed square footage, plant size, removal volume and access, confirmed on a free site visit.';
     crumbs='Home>/ | Services>/services/ | Renovation in Walker';
     body=@('Walker sits just up I-12 from our Denham Springs base, on the larger lots typical of this part of Livingston Parish. More yard tends to mean more landscaping, and on established Walker homes off Walker South Road and Highway 447 that landscaping has often outgrown its beds, foundation shrubs gone leggy, bed lines lost, mulch long since washed out. We reset the bed lines and plant material so it looks designed again.','Because this is low, flat ground that holds water, we grade renovated beds to drain and can tie in a fix if a bed floods, all from one crew. Larger beds mean more removal and material, so we scope it in writing up front, then handle the demolition, reshaping, planting and finish, and leave after-care so it establishes.');
     points=@('Removal and haul-off of overgrown material','Bed-line reshaping and clean edging','Bed grading so renovated beds drain','Plants selected for heat and clay','Mulch or pine straw finish','Fast local response and written scope');
     faqs=@(@{q='Do you renovate larger Walker properties?';a='Yes. Bigger Walker lots and bigger beds are common here, and we reset overgrown landscaping into clean, intentional beds, with a written scope so you know the plan before we start.'},@{q='How close are you to Walker?';a='We are based one exit west in Denham Springs, so Walker gets fast, same-day response.'},@{q='Can you fix a soggy bed while you renovate?';a='Yes. On flat Livingston Parish ground we grade beds to drain and handle any drainage tie-in as part of the renovation, one crew for both.'}) },

  @{ path='/lawn-care-baton-rouge/'; city='Baton Rouge'; water=$false; short='Baton Rouge lawn care'; serviceType='Lawn care and mowing';
     h1='Lawn care and mowing in Baton Rouge'; title='Lawn Care & Mowing in Baton Rouge | ProGround';
     desc='A reliable Baton Rouge lawn crew on a set schedule, billed automatically. Mowing, edging, bed care and seasonal work from one company. Free estimate.';
     sub='A dependable lawn service you never have to chase, mowing, edging and bed care on a set schedule, billed automatically each month.'; img='/img/crew-trimming.jpg';
     eyebrow='Lawn care in Baton Rouge'; lead='A reliable lawn crew you never have to chase'; cta='Get a lawn care quote';
     pricenote='Recurring lawn care is scoped to the property. It depends on lot size, service frequency and what beds are included. Residential agreements start around $145 per month.';
     crumbs='Home>/ | Services>/services/ | Lawn care in Baton Rouge';
     body=@('Most Baton Rouge homeowners are tired of calling around every few weeks trying to get a crew back out. A recurring lawn care agreement fixes that, set service days, a defined scope and automatic monthly billing, so the mowing, edging and blowing just happen. We keep the turf clean and the bed lines sharp on established properties from Highland Road and University Club to Bocage and Southdowns.','The difference with ProGround is that the same crew keeping your lawn cut is the one that can renovate the beds, fix a drainage problem or handle a seasonal cleanup when you need it, so you are not juggling a mowing service, a landscaper and a drainage contractor. One company, one point of contact, one predictable bill.');
     points=@('Mowing, edging and blowing on a set schedule','Bed weeding and seasonal cleanups','Hedge and shrub trimming','Mulch and pine straw refreshes','Automatic monthly billing','One crew for upkeep and bigger projects');
     faqs=@(@{q='How much is lawn maintenance in Baton Rouge?';a='Recurring residential agreements start around $145 per month and are scoped to your lot size, how often you want service, and whether beds are included. You get a clear price after a free look.'},@{q='Do you service neighborhoods like University Club, Highland Road and Bocage?';a='Yes, those established Baton Rouge neighborhoods are core to our route. Send your address and we will confirm coverage and a schedule.'},@{q='Can you take over from my current lawn company?';a='Often. Tell us who you use now and what is missing, and we will build a plan that fixes it, with set service days and automatic billing.'},@{q='Do I have to be home for service?';a='No. For recurring maintenance we service the property as long as we have access, so you do not have to be there.'}) }
)
foreach($m in $MONEY){ Render-MoneyPage $m }
