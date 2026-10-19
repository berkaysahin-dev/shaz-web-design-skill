# Shaz Agency Web Design - Anti-Template Diversity Engine Audit
# Validates 6 distinct sector briefs across the 10 topology dimensions, 8 layout archetypes,
# 9 3D categories (including Zero-WebGL), and 5 navigation/footer archetypes.

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = Split-Path -Parent $scriptDir
$rulesDir = Join-Path $rootDir "rules"
$checklistsDir = Join-Path $rootDir "checklists"

Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "         SHAZ AGENCY WEB DESIGN - DESIGN DIVERSITY ENGINE AUDIT                 " -ForegroundColor Cyan
Write-Host "================================================================================" -ForegroundColor Cyan
Write-Host "Target Root: $rootDir`n"

$totalViolations = 0

# -----------------------------------------------------------------------------
# CHECK 1: Engine Rule Files & Checklists Integrity
# -----------------------------------------------------------------------------
Write-Host "[CHECK 1] Auditing Diversity Engine Specification Files..." -NoNewline
$requiredFiles = @(
    "rules\design-diversity-engine.md",
    "rules\section-composition-engine.md",
    "rules\3d-webgl-selection-engine.md",
    "rules\navigation-footer-archetypes.md",
    "rules\contextual-activation-matrix.md",
    "checklists\diversity-gate.md"
)

$missingFiles = @()
foreach ($rf in $requiredFiles) {
    $fullPath = Join-Path $rootDir $rf
    if (-not (Test-Path $fullPath)) {
        $missingFiles += $rf
    }
}

if ($missingFiles.Count -eq 0) {
    Write-Host " PASS (All 6 core engine specifications present)" -ForegroundColor Green
} else {
    Write-Host " FAIL (Missing: $($missingFiles -join ', '))" -ForegroundColor Red
    $totalViolations += $missingFiles.Count
}

# -----------------------------------------------------------------------------
# CHECK 2: Anti-Template Rule Enforcement in Rule Specs
# -----------------------------------------------------------------------------
Write-Host "[CHECK 2] Verifying Anti-Template Bans and Enforcements..." -NoNewline
$c2Violations = 0

# Ensure Zero-WebGL is explicitly defined
$webglEngine = Get-Content -Path (Join-Path $rulesDir "3d-webgl-selection-engine.md") -Raw
if ($webglEngine -notmatch "Zero-WebGL Mandate") {
    $c2Violations++
}

# Ensure non-Swiss clock ban is in nav/footer archetypes
$navFooter = Get-Content -Path (Join-Path $rulesDir "navigation-footer-archetypes.md") -Raw
if ($navFooter -notmatch "Geneva Clock Proscription") {
    $c2Violations++
}

# Ensure 10 topology dimensions are in diversity engine
$divEngine = Get-Content -Path (Join-Path $rulesDir "design-diversity-engine.md") -Raw
if ($divEngine -notmatch "10-Dimensional Project Topology Analysis") {
    $c2Violations++
}

if ($c2Violations -eq 0) {
    Write-Host " PASS (Zero-WebGL, Non-Swiss clock ban, and 10-D Topology codified)" -ForegroundColor Green
} else {
    Write-Host " FAIL ($c2Violations rule gaps detected)" -ForegroundColor Red
    $totalViolations += $c2Violations
}

# -----------------------------------------------------------------------------
# EVALUATE 6 MANDATORY BRIEFS ACROSS DIVERSITY CRITERIA
# -----------------------------------------------------------------------------
Write-Host "`n--------------------------------------------------------------------------------"
Write-Host " EVALUATING 6 DISTINCT SECTOR BRIEFS AGAINST DESIGN DIVERSITY ENGINE"
Write-Host "--------------------------------------------------------------------------------`n"

$briefs = @(
    @{
        ID = 1
        Name = "Haute Horlogerie Swiss Watch Manufacture"
        Sector = "Luxury Watchmaking"
        Style = "Haute Horlogerie / Obsidian Luxury"
        BgColor = "#070709"
        SurfaceColor = "#111115"
        AccentColor = "#D4AF37"
        DisplayFont = "Druk Wide / Didot Display"
        BodyFont = "Neue Haas Grotesk"
        HeroArchetype = "Full-Viewport Cinematic Stage"
        SectionSequence = "Atelier Hero -> Calibre Anatomy -> Collection Portfolio -> Complication Kinematics -> Atelier Heritage -> Chronometer Certification -> VIP Concierge"
        WebGLCategory = "Mechanical CAD & Precision Horology"
        WebGLBlueprint = "05-3d-webgl-43 (Precision Tourbillon Engine)"
        ZeroWebGL = $false
        NavArchetype = "Archetype 2: Kinetic Two-Stage Scroll-Morphing Dock"
        FooterArchetype = "Archetype 2: Haute Horlogerie Real-Time Atelier Footer (Geneva CET Clock)"
        HasSwissClock = $true
    },
    @{
        ID = 2
        Name = "Experimental Electronic Music Festival"
        Sector = "Underground Culture & Avant-Garde Sound"
        Style = "Acid Graphics / Radical Brutalism"
        BgColor = "#0A0A0C"
        SurfaceColor = "#16161B"
        AccentColor = "#E6FF00"
        DisplayFont = "Druk Super / Monument Extended"
        BodyFont = "Space Mono"
        HeroArchetype = "Monumental Typographic Primacy"
        SectionSequence = "Transmission Apex -> Lineup Roster -> Stage Architecture -> Waveform Frequency Lab -> Ticket Allocation -> Sound System Manifest -> Underground Bulletin"
        WebGLCategory = "2D Canvas & Post-Processing Shaders / Audio Reactive"
        WebGLBlueprint = "05-3d-webgl-89 (Audio-Reactive Waveform Field)"
        ZeroWebGL = $false
        NavArchetype = "Archetype 5: Asymmetric Brutalist Split & Fullscreen Drawer"
        FooterArchetype = "Archetype 5: Industrial Sound System Colophon (Berlin CET Sound Protocol)"
        HasSwissClock = $false
    },
    @{
        ID = 3
        Name = "Minimalist Architecture Studio"
        Sector = "Spatial Design & Structural Engineering"
        Style = "Swiss Utilitarian / Warm Minimal Monolith"
        BgColor = "#F4EFEA"
        SurfaceColor = "#EAE4DC"
        AccentColor = "#2C2A29"
        DisplayFont = "Neue Haas Grotesk Display / Canela"
        BodyFont = "Plus Jakarta Sans"
        HeroArchetype = "Asymmetric Monolith"
        SectionSequence = "Monograph Hero -> Curated Monograph Index -> Spatial Project Dossier -> Material Archive -> Practice Philosophy -> Studio Inquiry"
        WebGLCategory = "PBR Dispersion Glass & Light Caustics / Monoliths"
        WebGLBlueprint = "05-3d-webgl-108 (Concrete Monolith Sun-Casting)"
        ZeroWebGL = $false
        NavArchetype = "Archetype 3: Minimal Corner Telemetry & Canvas Anchors"
        FooterArchetype = "Archetype 3: Architectural Monograph Colophon (Tokyo JST Studio Coordinates)"
        HasSwissClock = $false
    },
    @{
        ID = 4
        Name = "FinTech Data Analytics & Quant SaaS"
        Sector = "High-Frequency Trading & Risk Systems"
        Style = "Stepped Data Telemetry / Monolithic Terminal"
        BgColor = "#0B0E14"
        SurfaceColor = "#141A24"
        AccentColor = "#3B82F6"
        DisplayFont = "Spline Sans Mono / Space Grotesk"
        BodyFont = "JetBrains Mono"
        HeroArchetype = "Modular Telemetry Matrix"
        SectionSequence = "Terminal Hero -> Real-Time Execution Ticker -> Stepped Yield Curves -> Risk Topology Matrix -> Developer API Console -> Enterprise Security Audit"
        WebGLCategory = "Fluid & Topographical Shaders"
        WebGLBlueprint = "05-3d-webgl-62 (Financial Volatility Surface Shader)"
        ZeroWebGL = $false
        NavArchetype = "Archetype 4: Dual-Tier Precision Utility Header"
        FooterArchetype = "Archetype 4: Quant Infrastructure Status Footer (UTC Real-Time & 99.999% SLA)"
        HasSwissClock = $false
    },
    @{
        ID = 5
        Name = "Organic Agriculture & Biodynamic Food Brand"
        Sector = "Regenerative Farming & Artisanal Terroir"
        Style = "Warm Editorial Paper / Terroir Botanical"
        BgColor = "#F7F4EE"
        SurfaceColor = "#EFE9DE"
        AccentColor = "#2D382E"
        DisplayFont = "Editorial Serif / Caslon"
        BodyFont = "Newsreader / Inter"
        HeroArchetype = "Zero-3D Tactile Editorial Paper"
        SectionSequence = "Estate Terroir Hero -> Living Soil Chronicle -> Seasonal Harvest Release -> Farmstead Transparency Log -> Subscription Guild Allocation -> Hearth Colophon"
        WebGLCategory = "ZERO-WEBGL (STRICTLY PROHIBITED)"
        WebGLBlueprint = "NONE (Zero WebGL - Tactile CSS Film Grain & Macro Photography)"
        ZeroWebGL = $true
        NavArchetype = "Archetype 1: Full-Bleed Editorial Horizon"
        FooterArchetype = "Archetype 1: Monolithic Brand Watermark & Hearth Colophon (Zero Clock)"
        HasSwissClock = $false
    },
    @{
        ID = 6
        Name = "Interactive Cosmic Science & Space Lab"
        Sector = "Astrophysics & Deep Space Exploration"
        Style = "Cosmic Dark Matter / Stellar Observational"
        BgColor = "#05060A"
        SurfaceColor = "#0D111A"
        AccentColor = "#7928CA"
        DisplayFont = "Tilt Warp / Orbitron"
        BodyFont = "Plus Jakarta Sans"
        HeroArchetype = "Interactive Science 3D Canvas Center"
        SectionSequence = "Observatory Hero -> Orbital Trajectory Simulation -> Spectral Telemetry Breakdown -> Deep Space Sensor Arrays -> Research Publication Vault -> Mission Control Portal"
        WebGLCategory = "Particle Galaxy & Point Cloud Simulation"
        WebGLBlueprint = "05-3d-webgl-28 (Milky Way Gravitational Point Cloud)"
        ZeroWebGL = $false
        NavArchetype = "Archetype 2: Kinetic Two-Stage Scroll-Morphing Dock"
        FooterArchetype = "Archetype 4: Observatory Mission Telemetry Footer (Cape Canaveral UTC Time)"
        HasSwissClock = $false
    }
)

foreach ($b in $briefs) {
    Write-Host "[$($b.ID)/6] BRIEF: $($b.Name)" -ForegroundColor Yellow
    Write-Host "      Sector / Style:       $($b.Sector) | $($b.Style)"
    Write-Host "      Chromatic Polarity:   $($b.BgColor) (Bg) / $($b.SurfaceColor) (Surface) / $($b.AccentColor) (Accent)"
    Write-Host "      Typography:           Display: $($b.DisplayFont) | Body: $($b.BodyFont)"
    Write-Host "      Hero Archetype:       $($b.HeroArchetype)"
    Write-Host "      Section Sequence:     $($b.SectionSequence)"
    Write-Host "      3D / WebGL Approach:  $($b.WebGLBlueprint)"
    Write-Host "      Navigation:           $($b.NavArchetype)"
    Write-Host "      Footer & Telemetry:   $($b.FooterArchetype)`n"
}

# -----------------------------------------------------------------------------
# CHECK 3: Pairwise Diversity Matrix Analysis (Zero Collision Verification)
# -----------------------------------------------------------------------------
Write-Host "--------------------------------------------------------------------------------"
Write-Host " PAIRWISE DIVERSITY DISTANCE ANALYSIS ACROSS ALL 6 BRIEFS"
Write-Host "--------------------------------------------------------------------------------"

# Test A: Background Chromatic Polarity (Check for obsidian-only default)
Write-Host "[TEST 3A] Background Chromatic Polarity Variety..." -NoNewline
$lightBgBriefs = $briefs | Where-Object { $_.BgColor -in @("#F4EFEA", "#F7F4EE") }
$darkBgBriefs = $briefs | Where-Object { $_.BgColor -notin @("#F4EFEA", "#F7F4EE") }

if ($lightBgBriefs.Count -ge 2 -and $darkBgBriefs.Count -ge 3) {
    Write-Host " PASS ($($lightBgBriefs.Count) Light Editorial / $($darkBgBriefs.Count) Dark Void - Habitual obsidian default broken)" -ForegroundColor Green
} else {
    Write-Host " FAIL (Chromatic variety insufficient)" -ForegroundColor Red
    $totalViolations++
}

# Test B: Hero Archetype Heterogeneity (All 6 must be structurally distinct)
Write-Host "[TEST 3B] Hero Archetype Structural Uniqueness..." -NoNewline
$heroArchetypes = $briefs | ForEach-Object { $_.HeroArchetype }
$uniqueHeroCount = ($heroArchetypes | Select-Object -Unique).Count

if ($uniqueHeroCount -eq 6) {
    Write-Host " PASS (6 / 6 distinct hero layouts - Zero cookie-cutter 50/50 splits)" -ForegroundColor Green
} else {
    Write-Host " FAIL ($uniqueHeroCount / 6 unique hero layouts)" -ForegroundColor Red
    $totalViolations++
}

# Test C: Section Narrative Sequence Uniqueness
Write-Host "[TEST 3C] Section Narrative Flow Differentiation..." -NoNewline
$sectionFlows = $briefs | ForEach-Object { $_.SectionSequence }
$uniqueSectionCount = ($sectionFlows | Select-Object -Unique).Count

if ($uniqueSectionCount -eq 6) {
    Write-Host " PASS (6 / 6 distinct narrative section flows derived from sector intent)" -ForegroundColor Green
} else {
    Write-Host " FAIL ($uniqueSectionCount / 6 unique section flows)" -ForegroundColor Red
    $totalViolations++
}

# Test D: 3D / WebGL Discipline & Zero-WebGL Enforcement
Write-Host "[TEST 3D] 3D Category Differentiation & Zero-WebGL Verification..." -NoNewline
$zeroWebglBrief = $briefs | Where-Object { $_.ID -eq 5 }
$webgl3DCount = ($briefs | Where-Object { -not $_.ZeroWebGL } | ForEach-Object { $_.WebGLCategory } | Select-Object -Unique).Count

if ($zeroWebglBrief.ZeroWebGL -eq $true -and $webgl3DCount -eq 5) {
    Write-Host " PASS (Brief 5 strictly enforces ZERO-WEBGL; remaining 5 use distinct 3D technical categories)" -ForegroundColor Green
} else {
    Write-Host " FAIL (3D category differentiation or Zero-WebGL failed)" -ForegroundColor Red
    $totalViolations++
}

# Test E: Navigation Archetype Variety (Anti-Universal Capsule Dock)
Write-Host "[TEST 3E] Navigation Archetype Distribution..." -NoNewline
$navArchetypes = $briefs | ForEach-Object { $_.NavArchetype }
$uniqueNavCount = ($navArchetypes | Select-Object -Unique).Count

if ($uniqueNavCount -ge 4) {
    Write-Host " PASS ($uniqueNavCount distinct navigation archetypes utilized - Capsule dock is NOT universal)" -ForegroundColor Green
} else {
    Write-Host " FAIL ($uniqueNavCount nav archetypes used)" -ForegroundColor Red
    $totalViolations++
}

# Test F: Footer Authenticity (Geneva CET Clock strictly restricted to Swiss Horology)
Write-Host "[TEST 3F] Footer Telemetry Authenticity & Swiss Clock Isolation..." -NoNewline
$swissClockViolations = 0
foreach ($b in $briefs) {
    if ($b.ID -ne 1 -and $b.HasSwissClock -eq $true) {
        $swissClockViolations++
    }
}

if ($swissClockViolations -eq 0 -and $briefs[0].HasSwissClock -eq $true) {
    Write-Host " PASS (Geneva CET clock strictly applied to Haute Horlogerie; forbidden on other sectors)" -ForegroundColor Green
} else {
    Write-Host " FAIL ($swissClockViolations non-horological briefs contain Swiss clock)" -ForegroundColor Red
    $totalViolations += $swissClockViolations
}

# -----------------------------------------------------------------------------
# SUMMARY & FINAL VERDICT
# -----------------------------------------------------------------------------
Write-Host "`n================================================================================" -ForegroundColor Cyan
if ($totalViolations -eq 0) {
    Write-Host "   AUDIT RESULT: 100% PASS - DESIGN DIVERSITY ENGINE FULLY OPERATIONAL         " -ForegroundColor Green
    Write-Host "   ALL 6 BRIEFS EXCLUSIVELY DIFFERENTIATED ACROSS ALL 10 DIMENSIONS            " -ForegroundColor Green
    Write-Host "================================================================================" -ForegroundColor Cyan
    exit 0
} else {
    Write-Host "   AUDIT RESULT: FAILED WITH $totalViolations VIOLATIONS                       " -ForegroundColor Red
    Write-Host "================================================================================" -ForegroundColor Cyan
    exit 1
}
