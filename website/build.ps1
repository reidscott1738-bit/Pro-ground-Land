<#  ProGround website static generator.
    No Node/Python on this machine — this PowerShell script assembles clean-URL
    static pages from fragments in /pages, wraps them in the shared layout, injects
    per-page + sitewide JSON-LD, and writes /dist (the hosting publish directory).
    Run:  powershell -ExecutionPolicy Bypass -File build.ps1
#>
$ErrorActionPreference = 'Stop'
$root   = Split-Path -Parent $MyInvocation.MyCommand.Path
$pages  = Join-Path $root 'pages'
$dist   = Join-Path $root 'dist'
$proj   = Join-Path (Split-Path -Parent $root) 'project'   # .../proground-design-system/project

# ---------------- CONFIG ----------------
$BASE   = 'https://progroundland.com'      # TODO confirm production domain
$NAME   = 'ProGround Land Management'
$PHONE  = '(225) 324-8252'
$TEL    = '+12253248252'
$EMAIL  = 'info@progroundland.com'
$CITY   = 'Denham Springs'
$REGION = 'LA'
$OG     = $BASE + '/img/hero-home.jpg'     # TODO replace with branded 1200x630 share image
$IG     = 'https://www.instagram.com/proground_land_mgmt/'
$FB     = 'https://www.facebook.com/profile.php?id=61590852360292'

# ---------------- ASSET CACHE-BUSTING ----------------
# .htaccess caches CSS/JS for 1 year, so a plain /assets/site.css URL is frozen
# in browsers across deploys. Stamp a short content hash on each asset URL: when
# a file changes its hash changes, the URL changes, and browsers re-fetch it —
# so edits go live the moment the deploy lands. Unchanged files keep their hash
# (and stay cached). This is what makes "edit -> deploy -> it's live" just work.
function Asset-Ver($path){
  if(-not (Test-Path $path)){ return '0' }
  return (Get-FileHash -Path $path -Algorithm MD5).Hash.Substring(0,8).ToLower()
}
$VER_STYLES  = Asset-Ver (Join-Path $proj 'styles.css')
$VER_SITECSS = Asset-Ver (Join-Path $root 'assets\site.css')
$VER_SITEJS  = Asset-Ver (Join-Path $root 'assets\site.js')

$NAV = @(
  @{label='Services';    href='/services/';       section='services'},
  @{label='Service Areas';href='/service-areas/';  section='areas'},
  @{label='Who We Serve'; href='/who-we-serve/';   section='whoweserve'},
  @{label='Gallery';      href='/gallery/';        section='gallery'},
  @{label='About';        href='/about/';          section='about'}
)

$AREAS = @('Baton Rouge','Denham Springs','Prairieville','Gonzales','Walker','Central','Zachary','Watson','Livingston','Geismar')

$FOOTER_COLS = @(
  @{h='Services'; items=@(
    @{t='Landscape Renovations';u='/services/landscape-renovations/'},
    @{t='Landscape Installation';u='/services/landscape-installation/'},
    @{t='Drainage Solutions';u='/services/drainage-solutions/'},
    @{t='Grading & Yard Leveling';u='/services/grading-yard-leveling/'},
    @{t='Property Maintenance';u='/services/property-maintenance/'},
    @{t='Mulch, Pine Straw & Rock';u='/services/mulch-pine-straw-rock/'},
    @{t='Commercial Grounds';u='/services/commercial-grounds/'})},
  @{h='Service Areas'; items=@(
    @{t='Baton Rouge';u='/service-areas/baton-rouge/'},
    @{t='Denham Springs';u='/service-areas/denham-springs/'},
    @{t='Prairieville';u='/service-areas/prairieville/'},
    @{t='Walker';u='/service-areas/walker/'},
    @{t='Central';u='/service-areas/central/'},
    @{t='Gonzales';u='/service-areas/gonzales/'})},
  @{h='Company'; items=@(
    @{t='About Andrew';u='/about/'},
    @{t='How We Work';u='/how-we-work/'},
    @{t='Gallery';u='/gallery/'},
    @{t='Reviews';u='/reviews/'},
    @{t='FAQ';u='/faq/'})}
)

# 8 real Google reviews (from the client-supplied design system)
$REVIEWS = @(
  @{n='Aimee Lemann';   q='I simply shared a few photos and described what I wanted, and they took it from there. I received a quote the same day, the work was completed within a week, and the results exceeded my expectations.'},
  @{n='Connie Schiller';q='Andrew and his team do an awesome job on the attention to the details. They are very professional, punctual and work very efficiently. I shopped around and their prices are in line with his competition.'},
  @{n='Bridgette Homer';q='Reliable, detail-oriented, and driven. Their automated property management made everything seamless. We truly loved our experience and highly recommend!'},
  @{n='Tracy Evans';    q='Andrew did an excellent job with my flower beds. He showed up when he said he would, he did a great job, he was reasonably priced and very professional and polite!'},
  @{n='Bennett Roman';  q='ProGround Land Management is the best company I have ever used for my landscaping needs. The value and quality of work is unmatched. Highly recommend.'},
  @{n='Matthew Lee';    q='A customer oriented company, they worry about my lawn and yard so I do not have to. A lot of times it is hit or miss to get someone reliable and really good. These guys are both.'},
  @{n='Shana';          q='Andrew and his crew did an excellent job transforming a difficult space to my specifications. They are professional, polite, and delivered the results I was expecting.'},
  @{n='Carter Stevens'; q='Best company by far, they bring the heat. Will continue to use them. Great pricing, great work, great people.'}
)

$SERVICES_OFFER = @(
  'Landscape Renovations','Landscape Installation','Drainage Solutions','Grading & Yard Leveling',
  'Property Maintenance','Mulch, Pine Straw & Rock','Commercial Grounds Maintenance'
)

# ---------------- SITEWIDE JSON-LD (business + website) ----------------
function Get-BusinessNodes {
  $areaServed = @($AREAS | ForEach-Object { @{ '@type'='City'; name=$_ } })
  $areaServed += @{ '@type'='State'; name='Louisiana' }
  $reviewNodes = @($REVIEWS | ForEach-Object {
    @{ '@type'='Review'; reviewRating=@{ '@type'='Rating'; ratingValue='5'; bestRating='5' };
       author=@{ '@type'='Person'; name=$_.n }; reviewBody=$_.q }
  })
  $offers = @($SERVICES_OFFER | ForEach-Object {
    @{ '@type'='Offer'; itemOffered=@{ '@type'='Service'; name=$_ } }
  })
  $business = [ordered]@{
    '@type'=@('LandscapingBusiness','LocalBusiness','ProfessionalService')
    '@id'=$BASE + '/#business'
    name=$NAME
    url=$BASE + '/'
    telephone=$TEL
    email=$EMAIL
    priceRange='$$'
    image=$OG
    logo=$BASE + '/assets/logo-wordmark.png'
    slogan='Your whole property, handled by one crew.'
    description="Locally owned landscaping, drainage, grading and year-round property maintenance serving Greater Baton Rouge and surrounding areas from Denham Springs, Louisiana."
    address=@{ '@type'='PostalAddress'; addressLocality=$CITY; addressRegion=$REGION; addressCountry='US' }
    areaServed=$areaServed
    founder=@{ '@type'='Person'; name='Andrew Lee'; jobTitle='Owner-Operator' }
    sameAs=@($IG,$FB)
    aggregateRating=@{ '@type'='AggregateRating'; ratingValue='5.0'; reviewCount=$REVIEWS.Count; bestRating='5' }
    review=$reviewNodes
    hasOfferCatalog=@{ '@type'='OfferCatalog'; name='Landscaping & Property Services'; itemListElement=$offers }
  }
  $website = [ordered]@{
    '@type'='WebSite'; '@id'=$BASE + '/#website'; url=$BASE + '/'; name=$NAME
    publisher=@{ '@id'=$BASE + '/#business' }
  }
  return @($business,$website)
}
$SITE_NODES = Get-BusinessNodes

# ---------------- helpers ----------------
function Html-Attr([string]$s){ return ($s -replace '&','&amp;' -replace '"','&quot;' -replace '<','&lt;' -replace '>','&gt;') }

function Parse-FrontMatter([string]$raw){
  $meta = @{}
  $body = $raw
  if ($raw -match '(?s)^\s*<!--pg(.*?)-->(.*)$'){
    $fm = $matches[1]; $body = $matches[2]
    foreach($line in ($fm -split "`n")){
      $line = $line.Trim()
      if ($line -eq '' ) { continue }
      $idx = $line.IndexOf(':')
      if ($idx -lt 1){ continue }
      $k = $line.Substring(0,$idx).Trim()
      $v = $line.Substring($idx+1).Trim()
      $meta[$k] = $v
    }
  }
  return @{ meta=$meta; body=$body }
}

function Build-Breadcrumb([string]$crumbs){
  # "Home>/ | Services>/services/ | Drainage Solutions"
  if (-not $crumbs){ return @{ html=''; node=$null } }
  $parts = $crumbs -split '\|'
  $items = @()
  $pos = 1
  $html = '<nav class="breadcrumb" aria-label="Breadcrumb">'
  $n = $parts.Count
  for($i=0;$i -lt $n;$i++){
    $p = $parts[$i].Trim()
    $label = $p; $path = $null
    if ($p -match '^(.*?)>(.*)$'){ $label = $matches[1].Trim(); $path = $matches[2].Trim() }
    if ($path){
      $html += '<a href="' + $path + '">' + (Html-Attr $label) + '</a>'
      $items += @{ '@type'='ListItem'; position=$pos; name=$label; item=($BASE + $path) }
    } else {
      $html += '<span>' + (Html-Attr $label) + '</span>'
      $items += @{ '@type'='ListItem'; position=$pos; name=$label }
    }
    if ($i -lt $n-1){ $html += ' <span aria-hidden="true">/</span> ' }
    $pos++
  }
  $html += '</nav>'
  $node = @{ '@type'='BreadcrumbList'; itemListElement=$items }
  return @{ html=$html; node=$node }
}

function Render-Head($meta,$canonical,$crumbNode){
  $title = $meta['title']; $desc = $meta['description']
  # Safety net: keep meta description within ~155 chars, trimmed at a word boundary.
  if ($desc -and $desc.Length -gt 155){
    $cut = $desc.Substring(0,155)
    $sp = $cut.LastIndexOf(' ')
    if ($sp -gt 120){ $cut = $cut.Substring(0,$sp) }
    $desc = $cut.TrimEnd(' ,.;:-')
  }
  $img = if($meta['image']){ $BASE + $meta['image'] } else { $OG }
  $webpage = [ordered]@{
    '@type'='WebPage'; '@id'=$canonical + '#webpage'; url=$canonical; name=$title
    description=$desc; isPartOf=@{ '@id'=$BASE + '/#website' }; about=@{ '@id'=$BASE + '/#business' }
    inLanguage='en-US'
  }
  $graph = @(); $graph += $SITE_NODES; $graph += $webpage
  if ($crumbNode){ $graph += $crumbNode }
  $ld = @{ '@context'='https://schema.org'; '@graph'=$graph } | ConvertTo-Json -Depth 20
  $h = @"
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>$(Html-Attr $title)</title>
<meta name="description" content="$(Html-Attr $desc)">
<link rel="canonical" href="$canonical">
<meta name="robots" content="$(if($meta['robots']){$meta['robots']}else{'index,follow,max-image-preview:large'})">
<meta property="og:type" content="website">
<meta property="og:site_name" content="$(Html-Attr $NAME)">
<meta property="og:title" content="$(Html-Attr $title)">
<meta property="og:description" content="$(Html-Attr $desc)">
<meta property="og:url" content="$canonical">
<meta property="og:image" content="$img">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="$(Html-Attr $title)">
<meta name="twitter:description" content="$(Html-Attr $desc)">
<meta name="twitter:image" content="$img">
<meta name="theme-color" content="#0B0E15">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="$(if($meta['image']){$meta['image']}else{'/img/hero-home.jpg'})" fetchpriority="high">
<link rel="stylesheet" href="/styles.css?v=$VER_STYLES">
<link rel="stylesheet" href="/assets/site.css?v=$VER_SITECSS">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<script type="application/ld+json">
$ld
</script>
"@
  return $h
}

function Render-Header($section){
  $navHtml = ''
  $mobHtml = ''
  foreach($n in $NAV){
    $cur = if($section -and $n.section -eq $section){ ' aria-current="page"' } else { '' }
    $navHtml += '<a href="' + $n.href + '"' + $cur + '>' + $n.label + '</a>'
    $mobHtml += '<li><a href="' + $n.href + '"' + $cur + '>' + $n.label + '</a></li>'
  }
  return @"
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="pg-container">
    <a href="/" class="logo" aria-label="$NAME home"><img src="/assets/logo-wordmark.png" alt="$NAME" width="200" height="50"></a>
    <nav class="desktop-nav" aria-label="Primary">$navHtml</nav>
    <div class="header-cta">
      <a class="header-phone" href="tel:$TEL">$PHONE</a>
      <a class="btn btn-primary btn-sm on-dark" href="/estimate/">Request an estimate</a>
      <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="mobile-nav">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile"><ul>$mobHtml<li><a href="/estimate/">Request an estimate</a></li></ul></nav>
</header>
"@
}

function Render-Conversion(){
  return @"
<section class="conversion" aria-labelledby="cta-h">
  <div class="contour" aria-hidden="true"></div>
  <div class="pg-container">
    <div class="grid">
      <div>
        <span class="eyebrow on-dark">Free estimate &middot; same-day response</span>
        <h2 id="cta-h">Get a free estimate.</h2>
        <div class="btn-row" style="margin-top:28px">
          <a class="btn btn-primary btn-lg on-dark" href="/estimate/">Request an estimate</a>
          <a class="btn btn-secondary btn-lg on-dark" href="tel:$TEL">Call $PHONE</a>
        </div>
        <ul class="trustbar" style="margin-top:24px"><li>100+ homes served</li><li>Locally owned in Denham Springs</li><li>Same-day response</li></ul>
      </div>
      <div class="form-card on-dark">
        <form class="form-stack" action="/estimate/" method="get">
          <div class="field"><label for="cb-name">Name</label><input id="cb-name" name="name" type="text"></div>
          <div class="field"><label for="cb-phone">Phone</label><input id="cb-phone" name="phone" type="tel"><span class="help">Texting accepted.</span></div>
          <div class="field"><label for="cb-addr">Property address</label><input id="cb-addr" name="address" type="text"></div>
          <button class="btn btn-primary btn-full on-dark" type="submit">Continue</button>
        </form>
      </div>
    </div>
  </div>
</section>
"@
}

function Render-Footer(){
  $cols = ''
  foreach($c in $FOOTER_COLS){
    $li = ''
    foreach($it in $c.items){ $li += '<li><a href="' + $it.u + '">' + $it.t + '</a></li>' }
    $cols += '<div class="footer-col"><h2>' + $c.h + '</h2><ul>' + $li + '</ul></div>'
  }
  $year = (Get-Date).Year
  return @"
<footer class="site-footer">
  <div class="pg-container footer-grid">
    <div class="footer-brand">
      <img src="/assets/logo-wordmark.png" alt="$NAME" width="192" height="48" loading="lazy">
      <p>Landscape renovation, drainage and property maintenance across Greater Baton Rouge and surrounding areas. Locally owned in Denham Springs.</p>
      <div class="footer-contact">
        <div class="ph"><a href="tel:$TEL">$PHONE</a></div>
        <div><a href="mailto:$EMAIL">$EMAIL</a></div>
        <div>Inquiries answered 24/7 &middot; same-day response</div>
      </div>
      <div class="footer-social">
        <a href="$IG" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="$FB" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </div>
    $cols
  </div>
  <div class="pg-container footer-legal">
    <span>&copy; $year $NAME &middot; Denham Springs, LA</span>
    <span class="links"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></span>
  </div>
</footer>
<div class="mobile-bar">
  <a class="call" href="tel:$TEL">Call</a>
  <a class="est" href="/estimate/">Request estimate</a>
</div>
<script src="/assets/site.js?v=$VER_SITEJS" defer></script>
"@
}

# ---------------- BUILD ----------------
# Clean without deleting $dist itself (OneDrive/preview may hold a lock on the dir).
function Copy-Tree($src,$dst){ if(Test-Path $dst){ Remove-Item $dst -Recurse -Force -ErrorAction SilentlyContinue }; Copy-Item $src $dst -Recurse -Force }
if (Test-Path $dist){
  try { Remove-Item $dist -Recurse -Force -ErrorAction Stop }
  catch { Get-ChildItem $dist -Force | ForEach-Object { Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue } }
}
if (-not (Test-Path $dist)){ New-Item -ItemType Directory -Path $dist | Out-Null }
New-Item -ItemType Directory -Path (Join-Path $dist 'assets') -Force | Out-Null

# copy static assets
Copy-Item (Join-Path $proj 'styles.css') (Join-Path $dist 'styles.css') -Force
Copy-Tree (Join-Path $proj 'tokens') (Join-Path $dist 'tokens')
Copy-Tree (Join-Path $proj 'assets') (Join-Path $dist 'assets')
Copy-Tree (Join-Path $proj 'ui_kits\website\img') (Join-Path $dist 'img')
Copy-Item (Join-Path $root 'assets\site.css') (Join-Path $dist 'assets\site.css') -Force
Copy-Item (Join-Path $root 'assets\site.js')  (Join-Path $dist 'assets\site.js') -Force
if (Test-Path (Join-Path $root 'assets\favicon.svg')){ Copy-Item (Join-Path $root 'assets\favicon.svg') (Join-Path $dist 'assets\favicon.svg') -Force }

$script:built = New-Object System.Collections.ArrayList

function Write-Page($meta, $bodyRaw){
  $path = $meta['path']
  if (-not $path){ Write-Warning 'skip (no path)'; return }
  $canonical = $BASE + $path
  $bc = Build-Breadcrumb $meta['crumbs']
  $head = Render-Head $meta $canonical $bc.node
  $header = Render-Header $meta['section']
  $footer = Render-Footer
  $conv = if ($meta['convert'] -eq 'false'){ '' } else { Render-Conversion }
  $body = $bodyRaw -replace '<!--breadcrumb-->', $bc.html
  $doc = @"
<!doctype html>
<html lang="en-US">
<head>
$head
</head>
<body>
$header
<main id="main">
$body
</main>
$conv
$footer
</body>
</html>
"@
  if ($path -eq '/404'){ $outFile = Join-Path $dist '404.html' }
  else {
    $rel = $path.Trim('/')
    $outDir = if ($rel -eq ''){ $dist } else { Join-Path $dist ($rel -replace '/','\') }
    if (-not (Test-Path $outDir)){ New-Item -ItemType Directory -Path $outDir -Force | Out-Null }
    $outFile = Join-Path $outDir 'index.html'
  }
  [System.IO.File]::WriteAllText($outFile, $doc, (New-Object System.Text.UTF8Encoding($false)))
  if ($path -ne '/404' -and ($meta['robots'] -notmatch 'noindex')){
    $prio = if($meta['priority']){ $meta['priority'] } else { '0.7' }
    [void]$script:built.Add(@{ path=$path; priority=$prio })
  }
  Write-Host ("built  " + $path)
}

# ---- hand-written fragments in /pages ----
Get-ChildItem $pages -Filter *.html -Recurse | ForEach-Object {
  $parsed = Parse-FrontMatter ([System.IO.File]::ReadAllText($_.FullName))
  if (-not $parsed.meta['path']){ Write-Warning "skip (no path): $($_.Name)"; return }
  Write-Page $parsed.meta $parsed.body
}

# ---- data-driven pages (services, areas, audiences, money, resources) ----
Get-ChildItem $root -Filter 'gen*.ps1' | Sort-Object Name | ForEach-Object { . $_.FullName }

# ---------------- robots / sitemap / llms / favicon ----------------
$robots = @"
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: $BASE/sitemap.xml
"@
[System.IO.File]::WriteAllText((Join-Path $dist 'robots.txt'), $robots, (New-Object System.Text.UTF8Encoding($false)))

$today = (Get-Date).ToString('yyyy-MM-dd')
$sm = '<?xml version="1.0" encoding="UTF-8"?>' + "`n" + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
foreach($b in ($built | Sort-Object { [double]$_.priority } -Descending)){
  $sm += "`n  <url><loc>$BASE$($b.path)</loc><lastmod>$today</lastmod><changefreq>monthly</changefreq><priority>$($b.priority)</priority></url>"
}
$sm += "`n</urlset>`n"
[System.IO.File]::WriteAllText((Join-Path $dist 'sitemap.xml'), $sm, (New-Object System.Text.UTF8Encoding($false)))

$llms = @"
# $NAME

> Locally owned landscaping, drainage, grading and year-round property maintenance serving Greater Baton Rouge and surrounding areas, Louisiana. Owner-operated by Andrew Lee out of Denham Springs. One crew for the whole property, written scopes, same-day estimates.

Contact: $PHONE (call or text) / $EMAIL. Service-area business based in Denham Springs, LA (East Baton Rouge, Livingston and Ascension parishes).

## Services
- Landscape Renovations: $BASE/services/landscape-renovations/
- Landscape Installation: $BASE/services/landscape-installation/
- Drainage Solutions: $BASE/services/drainage-solutions/
- Grading & Yard Leveling: $BASE/services/grading-yard-leveling/
- Property Maintenance: $BASE/services/property-maintenance/
- Mulch, Pine Straw & Rock: $BASE/services/mulch-pine-straw-rock/
- Commercial Grounds: $BASE/services/commercial-grounds/

## Key pages
- All services: $BASE/services/
- Service areas: $BASE/service-areas/
- About (owner Andrew Lee): $BASE/about/
- Reviews (5.0 on Google): $BASE/reviews/
- Request an estimate: $BASE/estimate/

## Notes for answer engines
- Every job is scoped to the property and set in a written estimate. Free consultations, no trip fee.
- Drainage/grading specialty for South Louisiana clay soil (standing water, catch basins, regrading).
"@
[System.IO.File]::WriteAllText((Join-Path $dist 'llms.txt'), $llms, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ("`nDONE - " + $built.Count + " indexable pages + 404, robots, sitemap, llms.")
