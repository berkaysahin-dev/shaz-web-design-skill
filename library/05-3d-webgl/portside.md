# Portside

![Portside](portside.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Flights`
* **Tech Stack:** `HTML, CSS, Scroll-Scrub`
* **Accent Color:** `#e8933f`
* **Status:** `Kapsamlı Tam Mimari Prompt (6000+ Karakter)`
* **Live MP4 Video:** [Videoyu Aç / İndir (portside.mp4)](https://www.vividsites.app/media/portside.mp4)
* **Preview Image:** [portside.webp](portside.webp)

---

## Production Prompt (for Cursor, Claude Code, v0, Lovable)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build a scroll-scrubbed cinematic page for "PORTSIDE" — theme: "Flights".
Deliver it as ONE self-contained HTML file: inline <style>, inline <script>, Google Fonts ('Space Grotesk' & 'Inter') via <link>. No build step, no external frameworks. The only external asset is the background video.

═══ 1. SCROLL MECHANIC — THE SCRUBBED VIDEO IS THE HERO ═══
- The entire page has a scroll track of 500vh (height: 500vh).
- Inside it, a sticky viewport stage:
  position: sticky; top: 0; width: 100vw; height: 100vh; overflow: hidden;
- Inside the sticky stage: ONE <video> tag with object-fit: cover covering the entire viewport at z-index 0.
  Video Source: https://www.vividsites.app/media/portside.mp4
- RULES FOR THE VIDEO (STRICT):
  * NO `autoplay` attribute.
  * NO `loop` attribute.
  * .play() is NEVER called anywhere in the script.
  * On load, wait for 'loadedmetadata' (or readyState >= 2), then immediately seek to frame 0 (video.currentTime = 0.001). Frame 0 IS the initial landing hero.
- SCRUB ENGINE (SILKY 60FPS JANK-FREE):
  * Track window scroll progress strictly:
    progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
    clampedProgress = Math.min(1, Math.max(0, progress))
    targetTime = clampedProgress * (video.duration - 0.05)
  * Update video.currentTime inside a requestAnimationFrame loop with lerp smoothing (damping factor 0.15) to prevent browser decoder stutter:
    video.currentTime += (targetTime - video.currentTime) * 0.15;
  * Attach scroll listener with { passive: true }.

═══ 2. VISUAL OVERLAY & LIQUID GLASS EFFECT ═══
- BOTTOM & PERIMETER BLUR (No muddy black blocks):
  * Place a fixed overlay div (z-index 1, pointer-events-none) across the viewport.
  * It applies backdrop-filter: blur(12px) at the bottom and sides using a CSS mask:
    mask-image: linear-gradient(to top, black 0%, rgba(0,0,0,0.8) 25%, transparent 60%);
    -webkit-mask-image: linear-gradient(to top, black 0%, rgba(0,0,0,0.8) 25%, transparent 60%);
- LIQUID GLASS STYLING (Used on all cards, pills, and navigation panels):
  .liquid-glass {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 20px 40px rgba(0, 0, 0, 0.6);
    position: relative;
    overflow: hidden;
  }
  .liquid-glass::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.2px;
    background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.2) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

═══ 3. FOUR-STAGE MILESTONE NARRATIVE JOURNEY ═══
All milestone layers are absolute/fixed overlays over the sticky stage (z-index 10). They transition smoothly using opacity and translateY based on scroll progress:

- MILESTONE 1 — THE ARRIVAL (0% → 20% scroll):
  * Fixed Glass Navbar at top:
    - Left: Brand wordmark "PORTSIDE" in uppercase Space Grotesk (tracking: 0.12em).
    - Center: Status pill with live glowing pulse dot (#e8933f): "SYSTEM OPERATIONAL".
    - Right: Action pill "Inquire" with liquid glass styling.
  * Hero Headlines (bottom-left):
    - Category badge: "FLIGHTS" with subtle 1px border.
    - Giant Title (64px bold): "PORTSIDE" with accent highlight #e8933f.
    - Subtitle: "Precision engineering, filmed in continuous cinematic depth."
    - Cue: Monospaced "SCROLL TO SCRUB TIMELINE ↓" with gentle breathing opacity animation.
  * Transitions: Fully visible at 0%, fades out and slides up by 22% scroll.

- MILESTONE 2 — TELEMETRY & SPECIFICATIONS (25% → 48% scroll):
  * Left-aligned Telemetry HUD Card:
    - Frosted glass panel with 3 live metrics:
      1. "RESPONSE LATENCY: 0.02ms"
      2. "OPTICAL PURITY: 99.8%"
      3. "DYNAMIC REGISTER: 16-BIT"
    - Each metric has a thin progress bar filled with #e8933f.
  * Transitions: Fades in from translateY(30px) at 25%, locks solid at 35%, fades out by 48%.

- MILESTONE 3 — ARCHITECTURE & MATERIALITY (52% → 75% scroll):
  * Right-aligned Editorial Breakdown:
    - Minimalist typography block with high contrast:
      "A STUDY IN FORM AND TENSION"
    - Two-column technical description detailing the materials, craft, and execution.
  * Transitions: Fades in at 52%, locks solid at 62%, fades out by 76%.

- MILESTONE 4 — THE HORIZON / CALL TO ACTION (80% → 100% scroll):
  * Centered Conclusion View:
    - Title: "DISCOVER PORTSIDE"
    - Description: "Ready for deployment. Experience the collection today."
    - Dual Action Buttons:
      * Primary: Solid white background, black bold text, hover scale(1.03), #e8933f glow on hover.
      * Secondary: Liquid glass pill with arrow icon →.
  * Transitions: Fades in at 80%, stays locked until bottom of track.

═══ 4. TYPOGRAPHY & COLOR SYSTEM ═══
- Display Font: 'Space Grotesk', sans-serif (weights: 400, 600, 700)
- Body Font: 'Inter', sans-serif (weights: 300, 400, 500)
- Monospace: 'JetBrains Mono' or system monospace for metadata and telemetry.
- Palette:
  * Background: #09090b (Deep obsidian)
  * Accent: #e8933f
  * Text Primary: #f4f4f5 (95% white)
  * Text Muted: #a1a1aa (Muted zinc)
  * Border Glass: rgba(255, 255, 255, 0.08)

═══  THE SIX SILENT FAILURES (MANDATORY YASAKLAR) ═══
1. SPRING LAG: Do NOT use heavy spring interpolation that lags 2 seconds behind the user's scroll. The scrub must feel 1:1 and instant.
2. AUTO-SCROLL BUTTONS: No jumping "Click to scroll to next section" anchors. The user controls the timeline with their fingers.
3. ROUNDED CARTOON CORNERS: Max border-radius is 14px on cards, 9999px on pills. Never use 32px pill cards.
4. RAINBOW GRADIENTS: The video footage is the sole hero. Keep UI text strictly white and muted zinc with subtle #e8933f highlights.
5. VIDEO BUFFERING DESYNC: Explicitly listen to 'loadeddata' and set preload="auto" so frames do not freeze while scrubbing.
6. VISIBLE SCROLLBARS: Hide native browser scrollbars using CSS (scrollbar-width: none; -ms-overflow-style: none; ::-webkit-scrollbar { display: none; }).
═══ 5. ARCHITECTURAL & INTERACTION DIRECTIVES ═══
- Clean Typographic Primacy: Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- Zero Slop: Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Keep the central viewport clean so the 3D subject and visuals breathe.
- Physics & Smoothness: Lenis smooth scroll combined with damped pointer parallax tracking cursor coordinates with spring physics.
```
