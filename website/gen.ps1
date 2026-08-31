<#  gen.ps1 - data-driven pages (dot-sourced by build.ps1).
    ASCII-only source (PowerShell 5.1 reads no-BOM scripts as ANSI); use HTML
    entities in output where a special glyph is wanted. Has access to build.ps1
    scope: $BASE, $script:built, Write-Page, plus all Render-* helpers. #>

function E([string]$s){ return ($s -replace '&','&amp;' -replace '<','&lt;' -replace '>','&gt;') }

# Build a FAQ block: returns @{ html=...; nodes=(array of {@type=Question...}) }
function Build-Faq($faqs){
  $html = '<div class="faq">'
  $nodes = @()
  foreach($f in $faqs){
    $html += '<details><summary>' + (E $f.q) + '</summary><div class="answer">' + (E $f.a) + '</div></details>'
    $nodes += @{ '@type'='Question'; name=$f.q; acceptedAnswer=@{ '@type'='Answer'; text=$f.a } }
  }
  $html += '</div>'
  return @{ html=$html; node=@{ '@type'='FAQPage'; mainEntity=$nodes } }
}

function Price-Floor([string]$price){
  if ($price -match '(\d[\d,]*)'){ return ($matches[1] -replace ',','') }
  return $null
}

# ============================ SERVICES ============================
$SVC_URL = @{
  renovations='/services/landscape-renovations/'; installation='/services/landscape-installation/';
  grading='/services/grading-yard-leveling/'; maintenance='/services/property-maintenance/';
  mulch='/services/mulch-pine-straw-rock/'; commercial='/services/commercial-grounds/';
  drainage='/services/drainage-solutions/'
}
$SVC_PRICE = @{ renovations='From $750'; installation='From $750'; grading='From $750'; maintenance='From $145/mo'; mulch='From $350'; commercial='Custom quote'; drainage='From $1,000' }

$SERVICES = @(
  @{ slug='renovations'; name='Landscape Renovations'; title='Landscape Renovations in Baton Rouge | ProGround';
     desc='Overgrown or dated beds rebuilt with new plants, mulch, edging and a better layout. Written scope, same-day response. Serving Greater Baton Rouge and surrounding areas.';
     eyebrow='Flagship service'; headline='Landscape renovations in Greater Baton Rouge and surrounding areas';
     sub='Overgrown or dated beds rebuilt with new plants, mulch, edging and a better layout &mdash; with a written scope and same-day response.';
     price='From $750'; img='/img/house-curb.jpg'; baB='/img/ba-reno-before.jpg'; baA='/img/ba-reno-after.jpg'; baCap='Front-bed renovation &middot; Greater Baton Rouge and surrounding areas';
     problemH='Overgrown beds make a home look dated.';
     problemP=@('On established properties, foundation shrubs outgrow their beds, bed lines soften, and the whole house reads older than it is. A renovation resets the bones - not just the plants. Bed lines matter more than plant count for how a house looks from the street.','What changes the size of a renovation: bed square footage, plant size at install, removal volume, and access for equipment.');
     included=@('Demolition and removal of tired plant material','Soil and bed preparation','Edging and bed-line reshaping','Plant selection for South Louisiana heat and clay','Mulch or pine straw finish','After-care instructions');
     drivers=@('Bed square footage','Plant size at install','Removal volume','Equipment access','Irrigation present or not');
     faqs=@(
       @{q='How much does a landscape renovation cost?';a='Every renovation is scoped to the property. What it takes depends on bed size, plant material and access - we put a clear written estimate in your hands before any work starts.'},
       @{q='Do you remove the old plants?';a='Yes - demolition and removal of tired plant material is part of the written scope.'},
       @{q='How long does a renovation take?';a='Most residential front-bed renovations are completed in one to three days once scheduled.'},
       @{q='What plants hold up in Baton Rouge summers?';a='We select plant material for South Louisiana heat and clay, and give you after-care instructions so it establishes well.'},
       @{q='Do you maintain what you install?';a='We do - many renovation clients move onto an annual property maintenance agreement.'});
     related=@('mulch','maintenance','drainage') },

  @{ slug='installation'; name='Landscape Installation'; title='Landscape Installation in Baton Rouge | ProGround';
     desc='A finished landscape from scratch - plants, shrubs, sod, mulch and edging installed and ready the day we leave. Serving Greater Baton Rouge and surrounding areas.';
     eyebrow='New landscaping'; headline='Landscape installation for new and bare yards';
     sub='A finished landscape from scratch &mdash; plants, shrubs, sod, mulch and edging installed and ready the day we leave.';
     price='From $750'; img='/img/sod-install.jpg'; baB='/img/ba-install-before.jpg'; baA='/img/ba-install-after.jpg'; baCap='New landscape installation &middot; Greater Baton Rouge and surrounding areas';
     problemH='A bare yard is a blank slate - and a big decision.';
     problemP=@('New builds and cleared lots start with nothing: no beds, no sod, no plan. The order of operations matters - grading and drainage first, then beds, then sod - so nothing has to be torn out and redone later.','We plan the whole yard up front so the pieces fit together, then install it in the right sequence.');
     included=@('Layout and plant plan for the space','Bed shaping, edging and soil prep','Plants and shrubs selected for clay and heat','Sod installation and grading tie-in','Mulch, pine straw or rock finish','After-care instructions');
     drivers=@('Total square footage','Sod vs. seed','Plant size and count','Grading or drainage needed first','Site access');
     faqs=@(
       @{q='Do you install sod and plants, or just design?';a='We install. You get a finished yard - plants, sod, mulch and edging in place - not just a plan on paper.'},
       @{q='Should drainage come before landscaping?';a='Almost always. We grade and handle water first so new sod and beds are not sitting in a low spot.'},
       @{q='How soon can new sod be walked on?';a='Keep foot traffic light for the first two to three weeks while roots take, and water on the schedule we leave you.'});
     related=@('grading','drainage','maintenance') },

  @{ slug='grading'; name='Grading & Yard Leveling'; title='Grading & Yard Leveling in Baton Rouge | ProGround';
     desc='Reshape low, soggy or uneven yard areas so water runs off and the space is usable again. Grading and yard leveling across Greater Baton Rouge and surrounding areas.';
     eyebrow='Reshape the ground'; headline='Grading and yard leveling in Baton Rouge';
     sub='Reshape the low, soggy or uneven parts of your yard so water runs off and the space is usable again.';
     price='From $750'; img='/img/grading-leveling.jpg'; baB='/img/ba-grading-before.jpg'; baA='/img/ba-grading-after.jpg'; baCap='Reshaped yard &amp; clean grade &middot; Greater Baton Rouge and surrounding areas';
     problemH='A yard that will not drain is usually a grading problem.';
     problemP=@('Low corners, ruts and settled spots collect water and stay muddy for days. Adding topsoil on top rarely fixes it - the ground has to be reshaped so water has somewhere to go.','We re-establish fall across the yard, tie it into drainage where needed, and finish so the surface is smooth and mowable.');
     included=@('Assessment of fall and low points','Reshaping and re-grading the surface','Fill and compaction where needed','Tie-in to drainage or an outlet','Final grade for sod or seed','Cleanup and restoration');
     drivers=@('Area to be graded','Amount of fill required','Drainage tie-in needed','Equipment access','Sod or seed to finish');
     faqs=@(
       @{q='Grading or drainage - which do I need?';a='Often both. Grading moves water across the surface; drainage carries it away underground. We assess and recommend the right mix on a free site visit.'},
       @{q='Will you re-sod after grading?';a='We finish to a clean final grade and can install sod or seed as part of the scope.'});
     related=@('drainage','installation','maintenance') },

  @{ slug='maintenance'; name='Property Maintenance'; title='Property Maintenance in Baton Rouge | ProGround';
     desc='Mowing, bed care and seasonal work on a set schedule, billed automatically each month. One crew, one agreement, serving Greater Baton Rouge and surrounding areas.';
     eyebrow='Recurring care'; headline='Annual property maintenance you never have to chase';
     sub='Mowing, bed care and seasonal work on a set schedule, billed automatically each month. One crew, one agreement, done.';
     price='From $145/mo'; img='/img/crew-trimming.jpg'; baB='/img/ba-maint-before.jpg'; baA='/img/ba-maint-after.jpg'; baCap='Overgrown hedge, trimmed &amp; cleaned &middot; Greater Baton Rouge and surrounding areas';
     problemH='Chasing a lawn crew every few weeks gets old.';
     problemP=@('Most homeowners are tired of calling around every time the grass gets tall. A recurring agreement means set service days, a defined scope and automatic billing - the work just happens.','Because we also renovate and install, the same crew that maintains your property is the one that can rebuild it when it is time.');
     included=@('Mowing, edging and blowing on a set schedule','Bed weeding and seasonal cleanups','Shrub and hedge trimming','Mulch and pine straw refreshes','Priority scheduling for extra work','Automatic monthly billing');
     drivers=@('Property size','Service frequency','Beds included or turf only','Number of visits per month','Add-on seasonal work');
     faqs=@(
       @{q='How does billing work?';a='Recurring agreements are billed automatically each month, so there is nothing to remember and no invoice to chase.'},
       @{q='Can I include beds and just not mowing?';a='Yes. We scope the plan to what you want - turf only, beds only, or the whole property.'},
       @{q='Do you take over from another company?';a='Often. Tell us who you use now and what is missing, and we will build a plan that fixes it.'});
     related=@('renovations','mulch','commercial') },

  @{ slug='mulch'; name='Mulch, Pine Straw & Rock'; title='Mulch, Pine Straw & Rock in Baton Rouge | ProGround';
     desc='Fresh mulch, pine straw or decorative rock over properly prepped and edged beds. Sharp, finished beds in an afternoon, across Greater Baton Rouge and surrounding areas.';
     eyebrow='Bed finish'; headline='Mulch, pine straw and decorative rock';
     sub='Sharp, finished beds in an afternoon &mdash; fresh mulch, pine straw or rock installed over properly prepped and edged ground.';
     price='From $350'; img='/img/mulch.jpg'; baB='/img/ba-mulch-before.jpg'; baA='/img/ba-mulch-after.jpg'; baCap='Fresh mulch &amp; edging &middot; Greater Baton Rouge and surrounding areas';
     problemH='Faded mulch makes the whole yard look neglected.';
     problemP=@('Mulch breaks down and washes out; beds fade and lose their edge. A fresh install of mulch, pine straw or rock instantly resets curb appeal - especially with clean, reshaped edges.','We prep and edge first so the finish looks intentional and holds up, rather than just piling new material on top.');
     included=@('Bed cleanup and light weeding','Edging and bed-line reshaping','Fresh mulch, pine straw or decorative rock','Even, consistent depth','Cleanup of hard surfaces','Optional weed-barrier under rock');
     drivers=@('Bed square footage','Material chosen','Edging and reshaping needed','Weed barrier for rock','Site access');
     faqs=@(
       @{q='Mulch, pine straw or rock - which is best?';a='Mulch enriches soil and looks refined; pine straw is economical and classic for South Louisiana; rock is low-maintenance and permanent. We help you pick per bed.'},
       @{q='Do you edge the beds too?';a='Yes - reshaped, clean edges are what make a fresh finish look sharp instead of just topped off.'});
     related=@('renovations','maintenance','installation') },

  @{ slug='commercial'; name='Commercial Grounds'; title='Commercial Grounds Maintenance | ProGround Baton Rouge';
     desc='Dependable grounds care and landscape improvements for offices, retail, HOAs and multi-property portfolios across Greater Baton Rouge and surrounding areas. One point of contact.';
     eyebrow='For businesses'; headline='Commercial grounds maintenance and improvements';
     sub='Dependable grounds care and landscape improvements for offices, retail, HOAs and multi-property portfolios across Greater Baton Rouge and surrounding areas.';
     price='Custom quote'; img='/img/commercial-grounds.jpg'; baB='/img/ba-comm-before.jpg'; baA='/img/ba-comm-after.jpg'; baCap='Frontage bed renovation &middot; Greater Baton Rouge and surrounding areas';
     problemH='Your property is the first thing customers judge.';
     problemP=@('Overgrown entrances and tired islands cost businesses first impressions. Commercial grounds need a reliable crew on a predictable schedule with a single point of contact - not a rotating cast of subcontractors.','We build a scope and schedule around your property, invoice cleanly, and keep the grounds looking open-for-business year-round.');
     included=@('Scheduled mowing, edging and cleanup','Bed, island and entrance maintenance','Seasonal color and mulch refreshes','Drainage and grading improvements','Single point of contact','Clean, consolidated invoicing');
     drivers=@('Total acreage','Service frequency','Number of properties','Improvement scope','Contract term');
     faqs=@(
       @{q='Do you service multiple properties under one contract?';a='Yes. Portfolios and HOAs get one agreement, one schedule and one point of contact.'},
       @{q='Can you handle improvements, not just upkeep?';a='Absolutely - renovations, drainage and grading are all in scope alongside routine maintenance.'});
     related=@('maintenance','drainage','renovations') }
)

function Render-ServicePage($s){
  $faq = Build-Faq $s.faqs
  $incl = ''
  foreach($x in $s.included){ $incl += '<li><span class="tick">&check;</span>' + (E $x) + '</li>' }
  $prob = ''
  foreach($p in $s.problemP){ $prob += '<p style="font-size:17px;line-height:1.65;color:var(--pg-slate-700)">' + (E $p) + '</p>' }
  $drv = ''
  foreach($d in $s.drivers){ $drv += '<li>' + (E $d) + '</li>' }
  $rel = ''
  foreach($rk in $s.related){
    $rn = if($rk -eq 'drainage'){'Drainage Solutions'} else { ($SERVICES | Where-Object { $_.slug -eq $rk }).name }
    $rp = $SVC_PRICE[$rk]
    $rel += '<a class="card card-link" href="' + $SVC_URL[$rk] + '"><div class="body"><h3>' + (E $rn) + '</h3><p>Often paired with ' + (E $s.name).ToLower() + '.</p><span class="more">Learn more &rarr;</span></div></a>'
  }
  # schema: Service + FAQPage
  $svcNode = [ordered]@{ '@context'='https://schema.org'; '@graph'=@(
    (@{ '@type'='Service'; name=$s.name; serviceType=$s.name; description=($s.sub -replace '&mdash;','-' -replace '&middot;','-');
        provider=@{ '@id'=$BASE + '/#business' }; areaServed=@{ '@type'='City'; name='Baton Rouge' }; url=($BASE + $SVC_URL[$s.slug]) }),
    $faq.node ) }
  $ld = $svcNode | ConvertTo-Json -Depth 20

  $body = @"
<section class="section-sm bg-bone">
  <div class="pg-container">
    <!--breadcrumb-->
    <div class="grid-2">
      <div>
        <span class="eyebrow">$($s.eyebrow)</span>
        <h1 style="margin-top:14px;font-size:clamp(2.2rem,4vw,3.2rem)">$(E $s.headline)</h1>
        <p class="lead" style="max-width:46ch">$($s.sub)</p>
        <div class="btn-row" style="margin-top:26px">
          <a class="btn btn-primary btn-lg" href="/estimate/">Request an estimate</a>
          <a class="btn btn-secondary btn-lg" href="tel:$TEL">Call $PHONE</a>
        </div>
      </div>
      <div class="rounded-img"><img src="$($s.img)" alt="$(E $s.name) in Baton Rouge" width="800" height="420" fetchpriority="high"></div>
    </div>
  </div>
</section>

<section class="section bg-bone-deep">
  <div class="pg-container grid-2 grid-2-top">
    <div>
      <span class="eyebrow">The problem</span>
      <h2 style="margin-top:14px;font-size:clamp(1.6rem,2.6vw,2.1rem)">$(E $s.problemH)</h2>
      $prob
    </div>
    <div>
      <span class="eyebrow">What's included</span>
      <ul class="check-list" style="margin-top:18px">$incl</ul>
    </div>
  </div>
</section>

<section class="section bg-bone">
  <div class="pg-container grid-2 grid-2-top">
    <div class="price-block">
      <div class="svc">$(E $s.name)</div>
      <p class="footnote">Every property is different. Your scope depends on size, materials, accessibility, service frequency, and project scope. Free consultations and customized written estimates are always available.</p>
      <div style="margin-top:6px"><span class="eyebrow">What affects your estimate</span></div>
      <ul class="drivers">$drv</ul>
    </div>
    <div>
      <span class="eyebrow">Recent work</span>
      <h2 style="margin-top:14px;font-size:clamp(1.6rem,2.6vw,2.1rem)">Before and after.</h2>
      <div class="ba-slider" style="height:clamp(280px,40vw,380px);margin-top:12px">
        <img class="ba-after" src="$($s.baA)" alt="$(E $s.name) after" width="760" height="380" loading="lazy">
        <div class="ba-before-wrap"><img src="$($s.baB)" alt="$(E $s.name) before" width="760" height="380" loading="lazy"></div>
        <div class="ba-handle"><div class="grip">&#8646;</div></div>
        <span class="ba-label before">Before</span><span class="ba-label after">After</span>
        <input type="range" min="0" max="100" value="40" aria-label="Drag to compare before and after">
      </div>
      <p class="ba-caption">$($s.baCap)</p>
    </div>
  </div>
</section>

<section class="section bg-bone-deep">
  <div class="pg-container maxw-900">
    <div class="section-head"><span class="eyebrow">Questions</span><h2>$(E $s.name) FAQs</h2></div>
    $($faq.html)
  </div>
</section>

<section class="section bg-bone">
  <div class="pg-container">
    <div class="section-head"><span class="eyebrow">Related services</span><h2>Often paired together</h2></div>
    <div class="cards-grid">$rel</div>
  </div>
</section>

<script type="application/ld+json">
$ld
</script>
"@
  $meta = @{ path=$SVC_URL[$s.slug]; title=$s.title; description=$s.desc; image=$s.img; priority='0.8'; section='services';
             crumbs=('Home>/ | Services>/services/ | ' + $s.name) }
  Write-Page $meta $body
}

foreach($s in $SERVICES){ Render-ServicePage $s }

# ---- Services index ----
$SVC_INDEX_ORDER = @(
  @{k='renovations';img='/img/house-curb.jpg'}, @{k='installation';img='/img/sod-install.jpg'},
  @{k='drainage';img='/img/drainage-after.jpg';name='Drainage Solutions';desc='Catch basins, pipe and grading built for our heavy clay soil.'},
  @{k='grading';img='/img/grading-leveling.jpg'}, @{k='maintenance';img='/img/crew-trimming.jpg'},
  @{k='mulch';img='/img/mulch.jpg'}, @{k='commercial';img='/img/commercial-grounds.jpg'}
)
$MORE_SVCS = @('Residential Lawn Mowing','Large Property Mowing','Hedge & Shrub Trimming','Landscape Bed Maintenance','Hard-Surface Weed Control','Landscape Bed Cleanup','Decorative Rock Installation','Christmas Light Installation')

$cards = ''
foreach($o in $SVC_INDEX_ORDER){
  $k = $o.k
  $svc = $SERVICES | Where-Object { $_.slug -eq $k }
  $name = if($o.name){$o.name}elseif($svc){$svc.name}else{$k}
  $desc = if($o.desc){$o.desc}elseif($svc){$svc.sub}else{''}
  $price = $SVC_PRICE[$k]
  $cards += '<a class="card card-link" href="' + $SVC_URL[$k] + '"><div class="thumb"><img src="' + $o.img + '" alt="' + (E $name) + '" width="400" height="180" loading="lazy"></div><div class="body"><h3>' + (E $name) + '</h3><p>' + $desc + '</p><span class="more">Learn more &rarr;</span></div></a>'
}
$moreHtml = ''
foreach($m in $MORE_SVCS){ $moreHtml += '<div style="display:flex;gap:10px;align-items:center;font-size:15.5px;color:var(--pg-ink);padding:10px 0;border-bottom:1px solid var(--pg-line)"><span style="color:var(--pg-turf)">&check;</span>' + (E $m) + '</div>' }

$svcIndexBody = @"
<section class="page-hero" style="--x:0">
  <div class="hero-bg" style="background-image:url(/img/yard-aerial.jpg)"></div>
  <div class="pg-container">
    <!--breadcrumb-->
    <span class="eyebrow on-dark">What we do</span>
    <h1>Pro Ground handles everything big and small</h1>
  </div>
</section>
<section class="section bg-bone">
  <div class="pg-container">
    <div class="cards-grid">$cards</div>
    <div style="margin-top:56px;background:var(--pg-bone-deep);border:1px solid var(--pg-line-strong);border-radius:var(--radius-sm);padding:clamp(28px,4vw,44px)">
      <span class="eyebrow">Also available</span>
      <h2 style="margin:10px 0 18px;font-size:clamp(1.4rem,2.4vw,1.9rem)">More ways we help</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px">$moreHtml</div>
      <div style="margin-top:26px"><a class="btn btn-primary btn-lg" href="/estimate/">Request an estimate</a></div>
    </div>
  </div>
</section>
"@
Write-Page @{ path='/services/'; title='Landscaping Services in Baton Rouge | ProGround'; description='Landscape renovation, installation, drainage, grading, mulch and year-round property maintenance across Greater Baton Rouge and surrounding areas. Starting prices and written scopes.'; image='/img/yard-aerial.jpg'; priority='0.9'; section='services'; crumbs='Home>/ | Services' } $svcIndexBody

# ============================ SERVICE AREAS ============================
$AREA_URL = '/service-areas/'
$AREAS_DATA = @(
  @{ slug='baton-rouge'; name='Baton Rouge'; parish='East Baton Rouge Parish'; img='/img/house-curb.jpg';
     intro='Louisiana&rsquo;s capital and our largest service area. From the mature oaks of the Garden District to the newer builds off Highland Road, Baton Rouge yards deal with two constants: heavy clay soil that holds water, and established landscaping that has outgrown its beds. We handle both.';
     why=@('Baton Rouge sits on flat, clay-heavy ground, so the summer downpours that roll through do not soak in - they pond. Standing water along the slab, washed-out mulch and soggy low spots are the calls we get most, and the fix is almost always grading or drainage, not more grass seed.','The city&rsquo;s established neighborhoods - Bocage, Goodwood, Southdowns, Kenilworth - were landscaped decades ago. Foundation shrubs have swallowed the beds and the bed lines have softened. A renovation that resets the edges and plant material changes how the whole house reads from the street.');
     problems=@(@{h='Standing water in clay';d='Flat lots and heavy clay mean rain ponds instead of draining. We regrade and add catch basins so it moves off.'},@{h='Overgrown foundation beds';d='Decades-old shrubs outgrow their beds. We reset the bed lines, plant material and edging.'},@{h='Tired curb appeal';d='Fresh mulch, clean edges and the right plants make an established home look cared-for again.'});
     hoods=@('Bocage','Old Goodwood','Goodwood','Highland Road','University Club Plantation','Oak Hills','Santa Maria','Country Club of Louisiana','Southdowns','Kenilworth','Bluebonnet Highlands','Jefferson Terrace','Westminster','Shenandoah');
     faqs=@(
       @{q='How much does landscaping cost in Baton Rouge?';a='It depends on the work. Renovations, installations, drainage and recurring maintenance are each scoped to the property, and every job gets a free written estimate with a defined scope - no trip fee.'},
       @{q='Why does water stand in my Baton Rouge yard?';a='Heavy clay soil holds water on the surface instead of letting it soak in. On the flat lots common here, that means ponding along the slab and in low spots. Grading and catch basins fix it; topsoil does not.'},
       @{q='Do you serve older neighborhoods like Bocage and Goodwood?';a='Yes. Established Baton Rouge neighborhoods are where we do the most renovation work - resetting overgrown foundation beds and edging so the house looks its age or younger, not older.'},
       @{q='Can you handle both mowing and bigger projects?';a='That is the point of ProGround. The same crew mows on a set schedule and handles renovations, drainage and grading when you need them - one company instead of three.'});
     nearby=@('central','zachary','denham-springs','prairieville') },

  @{ slug='denham-springs'; name='Denham Springs'; parish='Livingston Parish'; img='/img/lawn-backyard.jpg';
     intro='Home base. ProGround is locally owned in Denham Springs, so this is where our response times are fastest and you will often see us the same day. It is also where drainage and grading matter most - this is low, flat Livingston Parish ground with a long memory for water.';
     why=@('Denham Springs learned about water the hard way in the 2016 flood, and even ordinary storms remind homeowners how flat and slow-draining this ground is. Regrading low spots, tying downspouts into buried pipe and running catch basins to a real outlet is bread-and-butter work for us here.','Around the Antique Village and the older streets off Range Avenue, homes want renovation and bed refreshes; out toward Juban Crossing and the newer subdivisions, it is finished installations and recurring maintenance. Being based here means we are minutes away either direction.');
     problems=@(@{h='Low lots that hold water';d='Flat Livingston Parish ground drains slowly. We regrade and add drainage so water leaves the yard, not the slab.'},@{h='Settling and ruts';d='Ground settles and low corners form. We reshape the surface and re-establish fall.'},@{h='Fast, local response';d='Based here, we answer same-day and are often on-site quicker than anyone driving in from Baton Rouge.'});
     hoods=@('Antique Village / Downtown','Range Avenue','Juban Road','Juban Crossing','Rushing Road','Pete&rsquo;s Highway','Magnolia Beach Road');
     faqs=@(
       @{q='Are you actually based in Denham Springs?';a='Yes - ProGround is locally owned and operated here. That is why Denham Springs and the rest of Livingston Parish get our fastest response, often same-day.'},
       @{q='Can you fix a yard that flooded or holds water?';a='Drainage and grading are among the things we do most here. We regrade low spots, tie in downspouts and run catch basins to a suitable outlet so water leaves the yard. It starts with a free site visit.'},
       @{q='Do you do recurring maintenance in Denham Springs?';a='Yes. Set service days, a defined scope and automatic monthly billing - and because we are local, rescheduling around weather is easy.'},
       @{q='How fast can you get out here?';a='Inquiries are answered 24/7 with same-day response. For Denham Springs specifically, being based in town usually means we can look sooner than crews coming from out of the area.'});
     nearby=@('walker','watson','livingston','baton-rouge') },

  @{ slug='prairieville'; name='Prairieville'; parish='Ascension Parish'; img='/img/sod-install.jpg';
     intro='One of the fastest-growing communities in Louisiana, and it shows in the yards. New subdivisions keep going up along Highway 42 and Airline, and those homes hand owners a blank slate - bare dirt, builder-grade sod and no drainage plan. Getting the first landscape right is what we do here.';
     why=@('A new build in Prairieville starts with nothing: no beds, no established sod, and often no thought given to where water goes between houses set close together. The order matters - grading and drainage first, then beds, then sod - so nothing has to be torn out later. We plan the whole yard up front.','Once the yard is in, the same clay soil that everywhere else in the region deals with shows up here too. Builder sod that sits in a low spot dies; a downspout dumping against the slab undermines it. We handle the drainage tie-ins that new construction usually skips.');
     problems=@(@{h='Bare new-build yards';d='Fresh construction leaves dirt and rough grade. We install a finished landscape - plants, sod, beds and edging.'},@{h='Drainage between close lots';d='New subdivisions pack homes together. We route water off tight lots before it sits against the slab.'},@{h='Failing builder sod';d='Cheap sod on unprepared ground struggles. We prep, grade and install sod that establishes.'});
     hoods=@('Highway 42 corridor','Airline Highway','Highway 73','Old Perkins Road','Manchac area');
     faqs=@(
       @{q='We just built in Prairieville - can you landscape the whole yard?';a='Yes, that is a lot of our Prairieville work. We plan and install the full landscape - grading and drainage first, then beds, plants, sod, mulch and edging - so it is finished and ready, not a patchwork.'},
       @{q='Should drainage be done before sod on a new build?';a='Almost always. New lots are often left rough and flat. We handle grading and water first so new sod and beds are not sitting in a low spot that kills them.'},
       @{q='Do you work with newer subdivisions off Highway 42?';a='Regularly. The Highway 42 and Airline growth corridor is full of new homes that need a first landscape and drainage tie-ins, which is exactly what we set up.'});
     nearby=@('gonzales','geismar','baton-rouge','denham-springs') },

  @{ slug='gonzales'; name='Gonzales'; parish='Ascension Parish'; img='/img/yard-aerial.jpg';
     intro='The Jambalaya Capital, and one of the busiest commercial corridors between Baton Rouge and New Orleans. Along Airline Highway the calls skew commercial - retail, offices and business frontage that has to look open-for-business - while the subdivisions off Highway 30 want finished residential landscaping and drainage.';
     why=@('Gonzales business owners know an overgrown entrance or a tired island costs first impressions. Commercial grounds here need a reliable crew on a predictable schedule with one point of contact and clean invoicing - not a rotating cast of subcontractors. We build the scope around the property and keep it looking sharp year-round.','On the residential side, Ascension Parish growth means newer neighborhoods around Pelican Point and off Highway 44 that need first landscapes, drainage tie-ins and recurring maintenance. Same clay, same water rules as the rest of the region.');
     problems=@(@{h='Commercial frontage';d='Retail and office grounds along Airline need scheduled, dependable care with one point of contact.'},@{h='Residential growth';d='Newer Gonzales subdivisions want finished landscaping, sod and drainage done right.'},@{h='Clay drainage';d='Standing water is a grading problem here too - catch basins and regrading, not topsoil.'});
     hoods=@('Airline Highway','Highway 30','Highway 44','Pelican Point','Worthey Road','near Tanger Outlets');
     faqs=@(
       @{q='Do you handle commercial grounds in Gonzales?';a='Yes - the Airline Highway corridor is prime commercial territory. We do scheduled grounds maintenance, entrance and island improvements, and seasonal refreshes for offices, retail and HOAs, all under one agreement.'},
       @{q='Can one company cover several of our properties?';a='Yes. Portfolios and multi-site businesses get one agreement, one schedule, one point of contact and consolidated invoicing.'},
       @{q='Do you do residential work in Gonzales too?';a='We do - renovations, installations, drainage and recurring maintenance for homes in the subdivisions off Highway 30 and 44 and around Pelican Point.'});
     nearby=@('prairieville','geismar','baton-rouge','denham-springs') },

  @{ slug='walker'; name='Walker'; parish='Livingston Parish'; img='/img/lawn-golden.jpg';
     intro='Just up I-12 from Denham Springs, Walker is larger-lot Livingston Parish - more room between houses, more yard to manage, and the same low, flat ground that holds water. That combination makes grading, drainage and large-property mowing the work we do most here.';
     why=@('On a bigger Walker lot, water has room to move but often nowhere to go. Low back corners stay soggy for days, and mowing a large, uneven yard is a chore. We re-establish fall across the property and tie the low spots into drainage so the whole yard drains and mows clean.','Walker also flooded in 2016, so homeowners here take standing water seriously. Whether it is regrading a settled area, burying downspouts or setting up recurring maintenance on a larger property, being based one exit away means we are close.');
     problems=@(@{h='Large, uneven lots';d='Bigger Walker yards settle unevenly. We regrade so the surface is smooth, mowable and drains.'},@{h='Slow-draining ground';d='Flat Livingston Parish clay holds water. We add drainage that carries it to a real outlet.'},@{h='Big-property mowing';d='Large lots need the right equipment on a set schedule. We handle full-property maintenance.'});
     hoods=@('Walker South Road','Highway 447','Burgess Avenue','Florida Boulevard (US-190)','Milton Road area');
     faqs=@(
       @{q='Do you mow larger properties in Walker?';a='Yes. Large-property and acreage mowing is common here. We set a schedule with the right equipment and can add bed care and seasonal work to the same agreement.'},
       @{q='My back yard stays soggy for days - can you fix it?';a='That is a grading and drainage issue, which we handle a lot in Walker. We re-establish fall and run drainage to a suitable outlet so water leaves instead of sitting. It starts with a free site visit.'},
       @{q='How close are you to Walker?';a='We are based one exit west in Denham Springs, so Walker gets fast, same-day response.'});
     nearby=@('denham-springs','livingston','watson','central') },

  @{ slug='central'; name='Central'; parish='East Baton Rouge Parish'; img='/img/crew-trimming.jpg';
     intro='The City of Central is its own community northeast of Baton Rouge - family neighborhoods, established homes and larger lots, bordered by the Comite and Amite rivers. That river-adjacent, low-lying ground means drainage and grading come up often, right alongside renovation and year-round maintenance.';
     why=@('Parts of Central sit low near the Comite and Amite, so water is a recurring topic. Regrading yards that pond, tying downspouts into buried pipe and building catch-basin systems to a real outlet is steady work here. Adding topsoil to a wet corner never lasts; reshaping the ground does.','Central&rsquo;s established homes along Hooper, Sullivan and Greenwell Springs have mature landscaping that has grown past its beds. Renovations that reset the bed lines and plant material, plus recurring maintenance so it stays sharp, are what keep these properties looking their best.');
     problems=@(@{h='River-adjacent low ground';d='Land near the Comite and Amite ponds easily. We regrade and add drainage to move water off.'},@{h='Mature, overgrown beds';d='Established Central homes have outgrown their landscaping. We reset bed lines and plant material.'},@{h='Whole-property upkeep';d='Larger lots need a set schedule. We mow, edge and maintain beds year-round.'});
     hoods=@('Hooper Road','Sullivan Road','Greenwell Springs Road','Wax Road','Joor Road','Magnolia Bridge Road');
     faqs=@(
       @{q='Do you fix drainage problems in Central?';a='Yes, and it comes up a lot given how low some of Central sits near the Comite and Amite. We regrade, bury downspouts and run catch basins to a suitable outlet so the yard drains. It starts with a free site visit.'},
       @{q='Can you renovate an established yard in Central?';a='That is some of our favorite work here - resetting overgrown foundation beds, edging and plant material on mature Central properties so they look cared-for again.'},
       @{q='Do you offer recurring maintenance on larger Central lots?';a='Yes. We set a schedule for mowing, edging and bed care sized to the property, billed automatically each month.'});
     nearby=@('zachary','baton-rouge','denham-springs','watson') },

  @{ slug='zachary'; name='Zachary'; parish='East Baton Rouge Parish'; img='/img/house-curb.jpg';
     intro='Families move to Zachary for the schools - the district is consistently among the top-rated in Louisiana - and for the newer homes and larger lots north of Baton Rouge. Those properties want a finished landscape that keeps its curb appeal, plus dependable year-round care.';
     why=@('Zachary&rsquo;s growth means a mix of established homes near Main Street and newer subdivisions like Americana and out toward Copper Mill. New builds want a first landscape - beds, sod, drainage - while established homes want renovations and recurring maintenance. We do both from one crew.','The clay soil and flat ground here behave like the rest of the region: rain ponds rather than soaks in. Getting grade and drainage right before sod and beds go in is what keeps a Zachary yard looking good instead of holding water.');
     problems=@(@{h='New-build first landscapes';d='Newer Zachary homes start with bare yards. We install beds, plants, sod and edging, finished.'},@{h='Curb-appeal upkeep';d='Family homes want to stay sharp. Renovations and set-schedule maintenance keep them that way.'},@{h='Grade before sod';d='Clay ponds water. We handle grade and drainage first so new turf establishes.'});
     hoods=@('Main Street','Americana','Copper Mill','Plank Road (Highway 19)','Highway 64','Old Scenic Highway');
     faqs=@(
       @{q='Do you landscape new homes in Zachary?';a='Yes - the newer subdivisions like Americana and out toward Copper Mill are full of homes that need a first landscape. We grade and handle drainage first, then install beds, plants, sod and edging.'},
       @{q='Can you keep our yard maintained year-round?';a='Yes. Set service days, a clear scope and automatic monthly billing keep a Zachary property sharp without you chasing a crew.'},
       @{q='Do you serve established Zachary neighborhoods too?';a='Absolutely - renovations and bed refreshes on older homes near Main Street are steady work for us here.'});
     nearby=@('central','baton-rouge','watson') },

  @{ slug='watson'; name='Watson'; parish='Livingston Parish'; img='/img/lawn-backyard.jpg';
     intro='Watson has been one of the fastest-growing corners of Livingston Parish - families moving out for larger lots, newer subdivisions and the Live Oak schools. Bigger yards and fresh construction mean grading, first-landscape installs and full-property maintenance are the calls we get here.';
     why=@('New Watson subdivisions off Highway 16 and Magnolia Beach Road hand owners a big, rough-graded lot with builder sod and no drainage plan. On flat Livingston Parish ground that is a recipe for standing water, so we grade and set drainage before installing a finished landscape.','Larger Watson properties also mean more to maintain. A recurring agreement with the right equipment keeps a big yard mowed, edged and its beds cared-for on a set schedule - and because we are based just south in Denham Springs, we are close.');
     problems=@(@{h='Large new-construction lots';d='Fresh Watson builds leave rough, flat ground. We grade, drain and install a finished landscape.'},@{h='Standing water on flat ground';d='Livingston Parish clay holds water. We re-establish fall and run drainage to an outlet.'},@{h='Big-yard maintenance';d='Larger lots need a schedule and the right equipment. We handle the whole property.'});
     hoods=@('Highway 16','Magnolia Beach Road','Frost Road','Live Oak area','Highway 1019');
     faqs=@(
       @{q='We built on a big lot in Watson - can you do the whole landscape?';a='Yes. Larger Watson lots are a lot of our work. We grade and handle drainage first, then install the full landscape - beds, plants, sod, mulch and edging - so it is finished and drains right.'},
       @{q='Do you mow larger Watson properties?';a='Yes, with the right equipment on a set schedule. Bed care and seasonal work can go on the same monthly agreement.'},
       @{q='How fast can you get to Watson?';a='We are based just south in Denham Springs, so Watson gets fast, same-day response.'});
     nearby=@('denham-springs','walker','livingston','central') },

  @{ slug='livingston'; name='Livingston'; parish='Livingston Parish'; img='/img/yard-aerial.jpg';
     intro='Livingston is the parish seat - a bit more rural and spread out, with larger properties and acreage along US-190 and the highways off I-12. Bigger lots and low, flat ground make grading, drainage and large-property maintenance the work we do most out here.';
     why=@('Acreage in and around Livingston means more yard, more low spots and more water with nowhere to go. We re-establish fall across a property, tie the wet corners into drainage and finish so the surface mows clean. On this flat ground, reshaping the grade is what actually solves standing water.','For larger and rural Livingston properties, a recurring agreement takes the chore off your plate - full-property mowing, edging and bed care on a schedule sized to the land. We travel the parish from our Denham Springs base a few exits west.');
     problems=@(@{h='Acreage and larger lots';d='More ground means more low spots. We grade the property so it drains and mows evenly.'},@{h='Rural drainage';d='Flat, low Livingston ground holds water. We build drainage to a real outlet.'},@{h='Property-scale mowing';d='Big lots need the right equipment on a schedule. We handle full-property care.'});
     hoods=@('US-190','Highway 63','Highway 1025','downtown Livingston','I-12 corridor');
     faqs=@(
       @{q='Do you service larger and rural properties in Livingston?';a='Yes. Acreage and larger lots are common here, and we set up mowing and maintenance with the right equipment, plus grading and drainage where water sits.'},
       @{q='Can you fix standing water on a big Livingston lot?';a='Yes - on flat, low ground the fix is grading and drainage, not topsoil. We re-establish fall and run water to a suitable outlet. It starts with a free site visit.'},
       @{q='Are you local to Livingston Parish?';a='We are based in Denham Springs, a few exits west on I-12, so the whole parish including Livingston gets fast, same-day response.'});
     nearby=@('walker','watson','denham-springs') },

  @{ slug='geismar'; name='Geismar'; parish='Ascension Parish'; img='/img/sod-install.jpg';
     intro='Geismar sits in the heart of Ascension Parish&rsquo;s river-corridor growth - a mix of newer residential subdivisions near the Dutchtown schools, larger rural lots, and commercial and industrial frontage. That range means everything from first-landscape installs to scheduled commercial grounds care.';
     why=@('The residential side of Geismar, especially around the Dutchtown area, is full of newer homes on clay soil that need a finished first landscape and the drainage tie-ins builders skip. We grade and handle water first, then install beds, sod and edging that establish and stay sharp.','Geismar also has business and industrial frontage that has to stay presentable. Commercial grounds here want a dependable crew on a predictable schedule with one point of contact - scheduled mowing, entrance and island care, and seasonal refreshes, invoiced cleanly.');
     problems=@(@{h='Newer residential landscapes';d='Homes near Dutchtown need a finished first landscape with drainage done right.'},@{h='Commercial and industrial frontage';d='Business grounds need scheduled, dependable care with one point of contact.'},@{h='Clay-soil drainage';d='Standing water is a grading problem here too - catch basins and regrading, not topsoil.'});
     hoods=@('Highway 30','Highway 73','Dutchtown area','Ashland','St. Amant edge');
     faqs=@(
       @{q='Do you do commercial grounds in Geismar?';a='Yes. With the business and industrial frontage along the river corridor, commercial grounds care is steady work here - scheduled mowing, entrance and island maintenance and seasonal refreshes under one agreement.'},
       @{q='Can you landscape a newer home near Dutchtown?';a='Yes - the newer Geismar and Dutchtown-area subdivisions need finished first landscapes. We grade and handle drainage, then install beds, plants, sod and edging.'},
       @{q='Do you handle drainage in Geismar?';a='We do. Ascension clay soil holds water like the rest of the region; we regrade and run catch basins and pipe to a suitable outlet so yards drain.'});
     nearby=@('prairieville','gonzales','baton-rouge') }
)

function Render-AreaPage($a){
  # nearby names for the coverage FAQ
  $nearNames = @()
  foreach($ns in $a.nearby){ $nd = $AREAS_DATA | Where-Object { $_.slug -eq $ns }; if($nd){ $nearNames += $nd.name } }
  $nearStr = if($nearNames.Count -ge 2){ ($nearNames[0..($nearNames.Count-2)] -join ', ') + ' and ' + $nearNames[-1] } else { $nearNames -join ', ' }
  $commonFaqs = @(
    @{ q=('What grass grows best in ' + $a.name + ' yards?'); a=('Most ' + $a.name + '-area lawns are St. Augustine or centipede, with zoysia on sunnier lots. We match turf and plant material to your light, your soil and how the space is used, and leave after-care instructions so it establishes.') },
    @{ q=('Do you charge for an estimate in ' + $a.name + '?'); a='No. Estimates are free with no trip fee and no diagnostic fee. Send a few photos or have us out, and you get a written price with a clearly defined scope, usually the same day.' },
    @{ q=('What other areas near ' + $a.name + ' do you serve?'); a=('Plenty. Along with ' + $a.name + ' we regularly work ' + $nearStr + ' and much of Greater Baton Rouge and surrounding areas. If you are not sure we reach you, send your address and we will confirm coverage.') }
  )
  $allFaqs = @(); $allFaqs += $a.faqs; $allFaqs += $commonFaqs
  $faq = Build-Faq $allFaqs
  $whyHtml = ''
  foreach($p in $a.why){ $whyHtml += '<p style="font-size:17px;line-height:1.65;color:var(--pg-slate-700)">' + $p + '</p>' }
  $svcLinks = ''
  foreach($u in @(@{n='Landscape Renovations';u='/services/landscape-renovations/'},@{n='Landscape Installation';u='/services/landscape-installation/'},@{n='Drainage Solutions';u='/services/drainage-solutions/'},@{n='Grading &amp; Yard Leveling';u='/services/grading-yard-leveling/'},@{n='Property Maintenance';u='/services/property-maintenance/'},@{n='Mulch, Pine Straw &amp; Rock';u='/services/mulch-pine-straw-rock/'})){
    $svcLinks += '<a href="' + $u.u + '" style="display:flex;gap:10px;align-items:center;font-size:15.5px;color:var(--pg-ink);border-bottom:none"><span style="color:var(--pg-turf)">&check;</span>' + $u.n + '</a>'
  }
  $hoodTags = ''
  foreach($h in $a.hoods){ $hoodTags += '<span class="tag">' + $h + '</span>' }
  $probCards = ''
  foreach($p in $a.problems){ $probCards += '<div class="card card-pad"><h3 style="font-size:19px;margin:0 0 8px">' + $p.h + '</h3><p class="muted" style="margin:0;font-size:15.5px;line-height:1.6">' + $p.d + '</p></div>' }
  $nearHtml = ''
  foreach($ns in $a.nearby){ $nd = $AREAS_DATA | Where-Object { $_.slug -eq $ns }; if($nd){ $nearHtml += '<li><a href="' + $AREA_URL + $ns + '/" style="color:var(--pg-ink);border-bottom:none;display:flex;justify-content:space-between"><span>' + $nd.name + '</span><span style="color:var(--pg-turf)">&rarr;</span></a></li>' } }

  $svcNode = @{ '@context'='https://schema.org'; '@graph'=@(
    (@{ '@type'='Service'; name=('Landscaping & Drainage in ' + $a.name); serviceType='Landscaping, drainage and property maintenance';
        provider=@{ '@id'=$BASE + '/#business' }; areaServed=@{ '@type'='City'; name=$a.name };
        url=($BASE + $AREA_URL + $a.slug + '/'); description=('Landscape renovation, installation, drainage, grading and year-round maintenance for ' + $a.name + ', ' + $a.parish + '.') }),
    $faq.node ) }
  $ld = $svcNode | ConvertTo-Json -Depth 20

  $body = @"
<section class="page-hero">
  <div class="hero-bg" style="background-image:url($($a.img))"></div>
  <div class="pg-container">
    <!--breadcrumb-->
    <span class="eyebrow on-dark">Service area &middot; $($a.parish)</span>
    <h1>Landscaping &amp; drainage in $($a.name)</h1>
    <p class="hero-sub">$($a.intro)</p>
    <div class="btn-row" style="margin-top:22px">
      <a class="btn btn-primary btn-lg on-dark" href="/estimate/">Request an estimate</a>
      <a class="btn btn-secondary btn-lg on-dark" href="tel:$TEL">Call $PHONE</a>
    </div>
  </div>
</section>

<section class="section bg-bone">
  <div class="pg-container" style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:clamp(32px,5vw,64px);align-items:start">
    <div>
      <span class="eyebrow">What we do here</span>
      <h2 style="margin-top:14px;font-size:clamp(1.6rem,2.8vw,2.2rem)">Full-property care for $($a.name) homes</h2>
      $whyHtml
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:22px 0 28px">$svcLinks</div>
      <div style="margin:4px 0 28px">
        <div class="mono" style="font-size:13px;color:var(--pg-slate-500);margin-bottom:12px">Areas &amp; landmarks we serve in $($a.name)</div>
        <div class="tags">$hoodTags</div>
      </div>
      <div class="btn-row">
        <a class="btn btn-primary btn-lg" href="/estimate/">Request an estimate</a>
        <a class="btn btn-secondary btn-lg" href="tel:$TEL">Call $PHONE</a>
      </div>
    </div>
    <div class="card card-pad" style="background:var(--pg-bone-deep)">
      <div class="mono" style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.16em;color:var(--pg-slate-500);margin-bottom:14px">Nearby areas</div>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px">$nearHtml</ul>
    </div>
  </div>
</section>

<section class="section bg-bone-deep">
  <div class="pg-container">
    <div class="section-head"><span class="eyebrow">Common problems</span><h2>What we solve most in $($a.name)</h2></div>
    <div class="cards-grid-3">$probCards</div>
  </div>
</section>

<section class="section bg-bone">
  <div class="pg-container maxw-900">
    <div class="section-head"><span class="eyebrow">$($a.name) questions</span><h2>$($a.name) FAQs</h2></div>
    $($faq.html)
  </div>
</section>

<script type="application/ld+json">
$ld
</script>
"@
  $meta = @{ path=($AREA_URL + $a.slug + '/'); title=('Landscaping & Drainage in ' + $a.name + ', LA | ProGround');
             description=('Landscaping, drainage, grading and year-round maintenance in ' + $a.name + ', ' + $a.parish + '. Locally owned, free same-day estimates.');
             image=$a.img; priority='0.8'; section='areas'; crumbs=('Home>/ | Service Areas>/service-areas/ | ' + $a.name) }
  Write-Page $meta $body
}
foreach($a in $AREAS_DATA){ Render-AreaPage $a }

# ---- Service Areas hub ----
$areaCards = ''
foreach($a in $AREAS_DATA){
  $areaCards += '<a class="card card-link" href="' + $AREA_URL + $a.slug + '/"><div class="thumb"><img src="' + $a.img + '" alt="Landscaping in ' + $a.name + '" width="400" height="180" loading="lazy"></div><div class="body"><h3>' + $a.name + '</h3><p>' + $a.parish + ' &middot; landscaping, drainage, grading and maintenance.</p><span class="more">ProGround in ' + $a.name + ' &rarr;</span></div></a>'
}
$areaHubBody = @"
<section class="page-hero">
  <div class="hero-bg" style="background-image:url(/img/yard-aerial.jpg)"></div>
  <div class="pg-container">
    <!--breadcrumb-->
    <span class="eyebrow on-dark">Where we work</span>
    <h1>Serving Greater Baton Rouge and surrounding areas</h1>
    <p class="hero-sub">Locally owned in Denham Springs, working across East Baton Rouge, Livingston and Ascension parishes with same-day response.</p>
  </div>
</section>
<section class="section bg-bone">
  <div class="pg-container">
    <div class="cards-grid">$areaCards</div>
    <p class="mono" style="margin-top:40px;font-size:14px;color:var(--pg-slate-600)">Not listed? We cover much of Greater Baton Rouge and surrounding areas &mdash; <a href="/estimate/">tell us your address</a> and we will confirm coverage.</p>
  </div>
</section>
"@
Write-Page @{ path='/service-areas/'; title='Service Areas | Landscaping Across Greater Baton Rouge and surrounding areas'; description='ProGround serves Baton Rouge, Denham Springs, Prairieville, Gonzales, Walker, Central, Zachary and more across East Baton Rouge, Livingston and Ascension parishes.'; image='/img/yard-aerial.jpg'; priority='0.9'; section='areas'; crumbs='Home>/ | Service Areas' } $areaHubBody
