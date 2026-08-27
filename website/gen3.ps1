<#  gen3.ps1 - Resource / blog articles (problem-term content) + resources hub.
    Dot-sourced after gen.ps1/gen2.ps1. ASCII-only; entities for glyphs. #>

function Render-Article($a){
  $secHtml = ''
  foreach($s in $a.sections){
    if($s.h){ $secHtml += '<h2>' + $s.h + '</h2>' }
    foreach($p in $s.p){ $secHtml += '<p>' + $p + '</p>' }
    if($s.bullets){ $secHtml += '<ul>'; foreach($b in $s.bullets){ $secHtml += '<li>' + $b + '</li>' }; $secHtml += '</ul>' }
  }
  $faqBlock = ''
  $faqNode = $null
  if($a.faqs){ $f = Build-Faq $a.faqs; $faqBlock = '<h2>Common questions</h2>' + $f.html; $faqNode = $f.node }
  $relHtml = ''
  foreach($r in $a.related){ $relHtml += '<a class="card card-link" href="' + $r.u + '"><div class="body"><h3 style="margin:0">' + $r.t + '</h3><span class="more">Read more &rarr;</span></div></a>' }
  $graph = @(@{ '@type'='Article'; headline=$a.h1; description=$a.desc; author=@{ '@type'='Person'; name='Andrew Lee' };
    publisher=@{ '@id'=$BASE + '/#business' }; datePublished='2026-08-01'; dateModified=(Get-Date).ToString('yyyy-MM-dd');
    mainEntityOfPage=($BASE + $a.path); image=($BASE + $a.img) })
  if($faqNode){ $graph += $faqNode }
  $ld = @{ '@context'='https://schema.org'; '@graph'=$graph } | ConvertTo-Json -Depth 20
  $body = @"
<section class="page-hero">
  <div class="hero-bg" style="background-image:url($($a.img))"></div>
  <div class="pg-container">
    <!--breadcrumb-->
    <span class="eyebrow on-dark">Guide</span>
    <h1>$($a.h1)</h1>
    <p class="hero-sub">$($a.sub)</p>
  </div>
</section>
<section class="section bg-bone">
  <div class="pg-container prose">
    $secHtml
    $faqBlock
    <div class="card card-pad" style="background:var(--pg-bone-deep);margin-top:36px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap">
      <div><h3 style="margin:0;font-size:clamp(1.2rem,2vw,1.5rem)">$($a.ctaH)</h3><p style="margin:6px 0 0;color:var(--pg-slate-600);font-size:16px">Free written estimate, same-day response, no trip fee.</p></div>
      <a class="btn btn-primary btn-lg" href="/estimate/">Request an estimate</a>
    </div>
  </div>
</section>
<section class="section-sm bg-bone-deep">
  <div class="pg-container">
    <div class="section-head"><span class="eyebrow">Keep reading</span><h2>Related</h2></div>
    <div class="cards-grid">$relHtml</div>
  </div>
</section>
<script type="application/ld+json">
$ld
</script>
"@
  Write-Page @{ path=$a.path; title=$a.title; description=$a.desc; image=$a.img; priority='0.7'; crumbs=('Home>/ | Resources>/resources/ | ' + $a.short) } $body
}

$ARTICLES = @(
  @{ path='/resources/why-does-my-yard-flood-in-baton-rouge/'; short='Why your yard floods'; img='/img/drainage-before.jpg';
     h1='Why does my yard flood in Baton Rouge?'; title='Why Does My Yard Flood in Baton Rouge? | ProGround';
     desc='Standing water in a Baton Rouge yard is almost always clay soil and flat grade, not too much rain. Here is why it happens and what actually fixes it.';
     sub='If water pools in your yard after every storm, the cause is usually underfoot. Here is what is really going on, and what fixes it for good.';
     ctaH='Standing water you want gone?';
     sections=@(
       @{h='It is the soil, not the rain'; p=@('South Louisiana gets plenty of rain, but that is not why your yard floods. The real culprit is the ground itself. Most of the Baton Rouge area sits on heavy clay soil, which is dense and slow to absorb water. Instead of soaking in the way sandy soil would, rain sits on the surface and pools in the lowest spots.','Add in the region&rsquo;s flat terrain and you have water with nowhere to go. It collects along the slab, in the back corners of the yard, and anywhere the grade dips even slightly. Days later, those spots are still soggy.') },
       @{h='Why adding topsoil never works'; p=@('The most common do-it-yourself fix is to dump topsoil in the low spot. It feels logical, but it almost never lasts. Filling a low area does not give the water anywhere to go; it just moves the puddle a few feet or pushes it toward the foundation. Within a season or two, the ground settles and the low spot returns.','Fixing standing water means changing where the water goes, not what sits on top. That is a grading and drainage problem.') },
       @{h='What actually fixes it'; p=@('There are three tools that solve almost every yard-water problem in this region, usually in combination:'); bullets=@('<strong>Regrading</strong> reshapes the surface so water flows away from the house and toward a real outlet instead of pooling.','<strong>Catch basins and buried pipe</strong> collect surface water at the low points and carry it underground to the street, a swale or an existing drain.','<strong>Downspout tie-ins</strong> bury the roof water that gutters concentrate in one spot, a hidden cause of foundation-side pooling.') },
       @{h='How water behaves tells you the fix'; p=@('Where the water sits is the biggest clue. Water that pools in one low spot usually points to a catch basin. Water that sheets across a wide area usually points to grading. Water along the slab often traces back to downspouts and grade near the foundation. A quick look on the property, ideally right after a rain, tells the story.') })
     faqs=@(@{q='Is standing water covered by drainage or grading?';a='Often both. Grading moves water across the surface; drainage carries it away underground. Most yards need a mix, which we confirm on a free site visit.'},@{q='How much does it cost to fix a flooding yard?';a='Drainage projects start at $1,000, driven by pipe length, catch basins and access. You get a written estimate after a free look.'});
     ctaText='Fix my drainage';
     related=@(@{t='Yard drainage in Baton Rouge';u='/drainage-baton-rouge/'},@{t='Drainage Solutions';u='/services/drainage-solutions/'},@{t='French drain vs. regrading';u='/resources/french-drain-vs-regrading/'}) },

  @{ path='/resources/how-much-does-yard-drainage-cost/'; short='Drainage cost'; img='/img/drainage-after.jpg';
     h1='How much does yard drainage cost?'; title='How Much Does Yard Drainage Cost? | Baton Rouge | ProGround';
     desc='Yard drainage in the Baton Rouge area starts around $1,000. Here is what drives the price - pipe length, catch basins, access and grading - and how to budget.';
     sub='Drainage projects here start around $1,000. What moves the number up or down comes down to a handful of factors. Here is how to think about it.';
     ctaH='Want a real number for your yard?';
     sections=@(
       @{h='The short answer'; p=@('For the Baton Rouge area, most residential drainage projects start at $1,000 and commonly run into the low-to-mid thousands depending on the yard. A simple catch basin and a short pipe run to an outlet sits near the low end; a full regrade with multiple basins and a long run to a distant outlet sits higher. The only way to a firm number is a look at the property, which is free.') },
       @{h='What drives the price'; p=@('A drainage quote comes down to a few concrete things:'); bullets=@('<strong>Linear feet of pipe.</strong> The farther the water has to travel to a suitable outlet, the more pipe and trenching.','<strong>Number of catch basins.</strong> More low spots to collect from means more inlets.','<strong>Grading involved.</strong> If the surface needs reshaping as well as pipe, that adds labor and material.','<strong>Access.</strong> A tight backyard a wheelbarrow has to reach costs more than an open lot a machine can drive into.','<strong>The outlet.</strong> Tying into the street, a swale or an existing drain is straightforward; a yard with no natural outlet takes more planning.') },
       @{h='Why the cheapest quote is rarely the best'; p=@('Drainage is one of those jobs where doing it cheaply usually means doing it twice. Undersized pipe, too few basins, or a run that does not reach a real outlet will look fine until the next heavy rain. We would rather scope it properly once, with the right pipe and fall, so it keeps working for years.','That is also why we put the scope in writing. You see the plan, the materials and the price before anyone digs.') })
     faqs=@(@{q='Do you charge for a drainage estimate?';a='No. Estimates are free with no trip fee and no diagnostic fee. You get a written price with a defined scope.'},@{q='Is drainage cheaper than regrading?';a='It depends on the yard. Sometimes regrading alone solves it; sometimes buried pipe is the only path to an outlet. We recommend the least-invasive fix that actually works.'});
     related=@(@{t='Yard drainage in Baton Rouge';u='/drainage-baton-rouge/'},@{t='Drainage Solutions';u='/services/drainage-solutions/'},@{t='Why does my yard flood?';u='/resources/why-does-my-yard-flood-in-baton-rouge/'}) },

  @{ path='/resources/french-drain-vs-regrading/'; short='French drain vs. regrading'; img='/img/lawn-backyard.jpg';
     h1='French drain vs. regrading: which do I need?'; title='French Drain vs. Regrading: Which Do You Need? | ProGround';
     desc='Water sitting in one spot usually needs a drain; water sheeting across the yard usually needs grading. Here is how to tell which your yard needs - or if it needs both.';
     sub='They solve different problems. The way water moves across your yard tells you which one you actually need.';
     ctaH='Not sure which your yard needs?';
     sections=@(
       @{h='They are not the same fix'; p=@('People use drain and grading interchangeably, but they address different problems. Grading changes the shape of the ground so water flows where you want it on the surface. A drain, such as a catch basin and pipe or a French drain, collects water and carries it away underground. Many yards need a bit of both.') },
       @{h='When you need grading'; p=@('If water sheets across a wide area, sits against the slab, or the whole yard drains toward the house, the surface is shaped wrong. Regrading re-establishes fall so water runs away from the foundation and toward a real outlet. It is the right first move when the problem is broad rather than a single puddle.') },
       @{h='When you need a drain'; p=@('If water collects in one persistent low spot that will not drain, no amount of surface shaping helps, because there is nowhere for it to flow. That is a job for a catch basin and buried pipe, or a French drain where subsurface water is the issue. The water gets collected and piped to an outlet.') },
       @{h='In clay soil, it is often both'; p=@('On the heavy clay common around Baton Rouge, water does not percolate down, so subsurface French drains are less of a cure-all than they are in sandy soil. More often the fix is regrading to move surface water plus catch basins to pick up the stubborn low spots and pipe it out. The right mix depends entirely on how your yard behaves in a rain, which is exactly what a free site visit sorts out.') })
     faqs=@(@{q='Does a French drain work in Baton Rouge clay?';a='Sometimes, but because clay holds water at the surface, most local yards do better with regrading plus catch basins and pipe. We recommend the approach that fits how your water actually moves.'},@{q='Can you tell me which I need without visiting?';a='The drainage diagnostic on our drainage page gives a starting read, but water is confirmed on the property, not on a screen. The site visit is free.'});
     related=@(@{t='Drainage Solutions';u='/services/drainage-solutions/'},@{t='Grading & Yard Leveling';u='/services/grading-yard-leveling/'},@{t='How much does drainage cost?';u='/resources/how-much-does-yard-drainage-cost/'}) },

  @{ path='/resources/best-plants-for-clay-soil-south-louisiana/'; short='Plants for clay soil'; img='/img/house-curb.jpg';
     h1='Best plants for clay soil in South Louisiana'; title='Best Plants for Clay Soil in South Louisiana | ProGround';
     desc='The right plants shrug off Baton Rouge clay and heat; the wrong ones rot or fry. A practical guide to plant choices that establish and last in South Louisiana yards.';
     sub='Heavy clay and long, hot summers are hard on the wrong plants. Choose for the conditions and a bed practically takes care of itself.';
     ctaH='Want a bed built for the conditions?';
     sections=@(
       @{h='Work with the clay, not against it'; p=@('Clay soil holds water and drains slowly, which drowns plants that want fast drainage and rewards plants that tolerate wet feet and heat. The single biggest factor in whether a bed thrives is not how many plants go in, it is whether they suit the soil, the light and the heat. Bed prep matters too: loosening and amending the soil and setting the grade so beds are not sitting in a puddle gives everything a better start.') },
       @{h='Shrubs that handle it'; p=@('Dependable choices for South Louisiana beds include several that tolerate clay and heat well:'); bullets=@('Dwarf yaupon holly and other hollies, tough and evergreen','Loropetalum for year-round color','Indian hawthorn in the right spot','Camellias and sasanquas for shade and cool-season bloom','Ligustrum and viburnum for screening') },
       @{h='Color and groundcover'; p=@('For seasonal color and lower beds, options that stand up to the conditions include:'); bullets=@('Louisiana iris, which actually likes wet ground','Daylilies for reliable summer color','Liriope and mondo grass as durable groundcovers and edging','Knock Out roses for long bloom in full sun') },
       @{h='The part most people skip'; p=@('Plant choice is only half of it. Bed lines, edging and a finish of mulch or pine straw are what make a planting read as intentional and keep the soil cooler and moister. And after-care in the first weeks, especially watering on a sensible schedule, is what gets everything established. When we renovate or install a bed, we leave you with after-care instructions so the work holds.') })
     faqs=@(@{q='What grass grows best in this area?';a='Most local lawns are St. Augustine or centipede, with zoysia on sunnier lots. The right choice depends on your light, soil and how the yard is used.'},@{q='Do you pick the plants, or do I?';a='Both. We recommend plant material suited to your conditions, and we build the plan around what you want it to look like.'});
     related=@(@{t='Landscape Renovations';u='/services/landscape-renovations/'},@{t='Mulch, Pine Straw & Rock';u='/services/mulch-pine-straw-rock/'},@{t='Landscape Installation';u='/services/landscape-installation/'}) },

  @{ path='/resources/landscape-renovation-cost-baton-rouge/'; short='Renovation cost'; img='/img/reno-after.jpg';
     h1='What does a landscape renovation cost in Baton Rouge?'; title='Landscape Renovation Cost in Baton Rouge | ProGround';
     desc='Landscape renovations in Baton Rouge start at $750, with most full front-bed projects between $2,500 and $6,000. Here is what drives the price and where the money goes.';
     sub='Renovations start at $750, and most full front-bed projects land between $2,500 and $6,000. Here is what moves the number.';
     ctaH='Curious what your renovation would run?';
     sections=@(
       @{h='The range'; p=@('A landscape renovation in the Baton Rouge area starts at $750 for smaller scopes. Most full front-bed renovations, the kind that resets the whole face of a house, land between roughly $2,500 and $6,000. A large property, extensive removal, or premium plant material can run higher. The only firm number comes from a look at the property, which is free.') },
       @{h='What drives the price'; p=@('A renovation quote comes down to a handful of things:'); bullets=@('<strong>Bed square footage.</strong> More bed area means more prep, plants and mulch.','<strong>Plant size at install.</strong> Larger, more mature plants cost more but read as finished sooner.','<strong>Removal volume.</strong> Tearing out overgrown shrubs and hauling them off is real labor.','<strong>Access.</strong> A backyard a machine cannot reach costs more than an open front bed.','<strong>Whether irrigation is present.</strong> Existing beds and irrigation change the scope.') },
       @{h='Why bed lines matter more than plant count'; p=@('It is tempting to judge a renovation by how many plants go in. In practice, the shape of the beds and the crispness of the edging do more for how a house looks from the street than sheer plant count. A renovation resets the bones, the bed lines, the edging, the soil, not just the greenery, which is why a well-designed bed with fewer, better-placed plants often out-performs a crowded one.') },
       @{h='Where the value is'; p=@('ProGround is not the cheapest, and does not try to be. What a renovation buys is a job planned properly, built with good material, and finished so it still looks right in a few years. You get a written scope and price before anything starts, so there are no surprises.') })
     faqs=@(@{q='How long does a renovation take?';a='Most residential front-bed renovations are completed in one to three days once scheduled.'},@{q='Do you remove the old plants?';a='Yes, demolition and removal of tired plant material is part of the written scope.'});
     related=@(@{t='Landscape Renovations';u='/services/landscape-renovations/'},@{t='Best plants for clay soil';u='/resources/best-plants-for-clay-soil-south-louisiana/'},@{t='Pricing';u='/pricing/'}) },

  @{ path='/resources/how-to-choose-a-landscaper-baton-rouge/'; short='Choosing a landscaper'; img='/img/crew-trimming.jpg';
     h1='How to choose a landscaper in Baton Rouge'; title='How to Choose a Landscaper in Baton Rouge | ProGround';
     desc='A practical checklist for hiring a landscaper in the Baton Rouge area - written scopes, real reviews, one crew for the whole property, and the red flags to avoid.';
     sub='A little diligence up front saves a lot of frustration later. Here is what to look for, and what to avoid, when hiring a crew for your yard.';
     ctaH='Ready to talk to a straight-shooting crew?';
     sections=@(
       @{h='Insist on a written scope'; p=@('The single most useful thing you can ask for is a written estimate with a defined scope. It forces the details, exactly what is being done, with what materials, for what price, into the open before work starts. Vague verbal quotes are where misunderstandings and surprise charges live. A crew that puts it in writing is a crew that has thought the job through.') },
       @{h='Look for one crew that does it all'; p=@('Many yard problems are connected. A flooding bed is a drainage problem; a renovation on poorly graded ground fails; maintenance and renovation go hand in hand. Hiring one crew that handles maintenance, renovation, drainage and grading means no finger-pointing between contractors and one point of contact who knows your property.') },
       @{h='Check real reviews and real work'; p=@('Read reviews from real, named customers, and ask to see examples of work like yours. Consistent, specific praise, showed up when they said, priced fairly, cleaned up, matters more than a star count alone. Be wary of anyone who cannot point to actual local work.') },
       @{h='Watch for the red flags'; p=@('A few things should give you pause:'); bullets=@('Prices that seem far below everyone else, usually a sign of a thin scope or corners cut','No written estimate, or pressure to decide on the spot','Vague answers about who actually does the work','Promises that sound too good, or claims that cannot be backed up') },
       @{h='The ProGround approach'; p=@('When you call ProGround, you get the owner. Andrew looks at the property, writes the estimate, plans the job and checks the finished work himself. Written scopes, scheduled dates, digital approvals and a follow-up when it is done, one crew for the whole property, from a company that is not the cheapest and does not pretend to be.') })
     faqs=@(@{q='Should I get more than one quote?';a='It never hurts. Just compare scopes, not only prices, a lower number for a thinner scope is not actually cheaper.'},@{q='Do you provide written estimates?';a='Always. Every job gets a written estimate with a defined scope before anything starts.'});
     related=@(@{t='About ProGround';u='/about/'},@{t='How we work';u='/how-we-work/'},@{t='Reviews';u='/reviews/'}) }
)
foreach($a in $ARTICLES){ Render-Article $a }

# Resources hub
$resCards = ''
foreach($a in $ARTICLES){ $resCards += '<a class="card card-link" href="' + $a.path + '"><div class="thumb"><img src="' + $a.img + '" alt="' + $a.h1 + '" width="400" height="180" loading="lazy"></div><div class="body"><h3>' + $a.short + '</h3><p>' + $a.sub + '</p><span class="more">Read the guide &rarr;</span></div></a>' }
$resHub = @"
<section class="page-hero">
  <div class="hero-bg" style="background-image:url(/img/drainage-before.jpg)"></div>
  <div class="pg-container"><!--breadcrumb--><span class="eyebrow on-dark">Resources</span><h1>Guides for Baton Rouge yards</h1><p class="hero-sub">Straight answers on drainage, renovation costs, plants and hiring, written for South Louisiana conditions.</p></div>
</section>
<section class="section bg-bone"><div class="pg-container"><div class="cards-grid">$resCards</div></div></section>
"@
Write-Page @{ path='/resources/'; title='Resources & Guides | ProGround Landscaping Baton Rouge'; description='Practical guides on yard drainage, standing water, renovation costs, plants for clay soil and choosing a landscaper in the Baton Rouge area.'; image='/img/drainage-before.jpg'; priority='0.7'; crumbs='Home>/ | Resources' } $resHub
