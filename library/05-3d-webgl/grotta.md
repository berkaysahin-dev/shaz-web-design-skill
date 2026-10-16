# Grotta

![Grotta](grotta.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Villa Rental`
* **Tech Stack:** `HTML, CSS, Scroll-Scrub`
* **Accent Color:** `#2f9e78`
* **Status:** `Complete Production Prompt (6000+ Chars)`
* **Live MP4 Video:** [Open / Download Video (grotta.mp4)](https://www.vividsites.app/media/grotta.mp4)
* **Preview Image:** [grotta.webp](grotta.webp)

---

## Production Prompt (for Cursor, Claude Code, Antigravity, Windsurf)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build a scroll-scrubbed cinematic page for "GROTTA" — theme: "Villa Rental".
Deliver it as ONE self-contained HTML file: inline <style>, inline <script>, Google Fonts ('Space Grotesk' & 'Inter') via <link>. No build step, no external frameworks. The only external asset is the background video.

═══ 1. SCROLL MECHANIC — THE SCRUBBED VIDEO IS THE HERO ═══
- The entire page has a scroll track of 500vh (height: 500vh).
- Inside it, a sticky viewport stage:
  position: sticky; top: 0; width: 100vw; height: 100vh; overflow: hidden;
- Inside the sticky stage: ONE <video> tag with object-fit: cover covering the entire viewport at z-index 0.
  Video Source: https://www.vividsites.app/media/grotta.mp4
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
    - Left: Brand wordmark "GROTTA" in uppercase Space Grotesk (tracking: 0.12em).
    - Center: Status pill with live glowing pulse dot (#2f9e78): "SYSTEM OPERATIONAL".
    - Right: Action pill "Inquire" with liquid glass styling.
  * Hero Headlines (bottom-left):
    - Category badge: "VILLA RENTAL" with subtle 1px border.
    - Giant Title (64px bold): "GROTTA" with accent highlight #2f9e78.
    - Subtitle: "Precision engineering, filmed in continuous cinematic depth."
    - Cue: Monospaced "SCROLL TO SCRUB TIMELINE ↓" with gentle breathing opacity animation.
  * Transitions: Fully visible at 0%, fades out and slides up by 22% scroll.

- MILESTONE 2 — TELEMETRY & SPECIFICATIONS (25% → 48% scroll):
  * Left-aligned Telemetry HUD Card:
    - Frosted glass panel with 3 live metrics:
      1. "RESPONSE LATENCY: 0.02ms"
      2. "OPTICAL PURITY: 99.8%"
      3. "DYNAMIC REGISTER: 16-BIT"
    - Each metric has a thin progress bar filled with #2f9e78.
  * Transitions: Fades in from translateY(30px) at 25%, locks solid at 35%, fades out by 48%.

- MILESTONE 3 — ARCHITECTURE & MATERIALITY (52% → 75% scroll):
  * Right-aligned Editorial Breakdown:
    - Minimalist typography block with high contrast:
      "A STUDY IN FORM AND TENSION"
    - Two-column technical description detailing the materials, craft, and execution.
  * Transitions: Fades in at 52%, locks solid at 62%, fades out by 76%.

- MILESTONE 4 — THE HORIZON / CALL TO ACTION (80% → 100% scroll):
  * Centered Conclusion View:
    - Title: "DISCOVER GROTTA"
    - Description: "Ready for deployment. Experience the collection today."
    - Dual Action Buttons:
      * Primary: Solid white background, black bold text, hover scale(1.03), #2f9e78 glow on hover.
      * Secondary: Liquid glass pill with arrow icon →.
  * Transitions: Fades in at 80%, stays locked until bottom of track.

═══ 4. TYPOGRAPHY & COLOR SYSTEM ═══
- Display Font: 'Space Grotesk', sans-serif (weights: 400, 600, 700)
- Body Font: 'Inter', sans-serif (weights: 300, 400, 500)
- Monospace: 'JetBrains Mono' or system monospace for metadata and telemetry.
- Palette:
  * Background: #09090b (Deep obsidian)
  * Accent: #2f9e78
  * Text Primary: #f4f4f5 (95% white)
  * Text Muted: #a1a1aa (Muted zinc)
  * Border Glass: rgba(255, 255, 255, 0.08)

═══  THE SIX SILENT FAILURES (MANDATORY YASAKLAR) ═══
1. SPRING LAG: Do NOT use heavy spring interpolation that lags 2 seconds behind the user's scroll. The scrub must feel 1:1 and instant.
2. AUTO-SCROLL BUTTONS: No jumping "Click to scroll to next section" anchors. The user controls the timeline with their fingers.
3. ROUNDED CARTOON CORNERS: Max border-radius is 14px on cards, 9999px on pills. Never use 32px pill cards.
4. RAINBOW GRADIENTS: The video footage is the sole hero. Keep UI text strictly white and muted zinc with subtle #2f9e78 highlights.
5. VIDEO BUFFERING DESYNC: Explicitly listen to 'loadeddata' and set preload="auto" so frames do not freeze while scrubbing.
6. VISIBLE SCROLLBARS: Hide native browser scrollbars using CSS (scrollbar-width: none; -ms-overflow-style: none; ::-webkit-scrollbar { display: none; }).


═══ 6. EXTENDED FULL-STACK PRODUCTION ARCHITECTURE & PHYSICS ENGINE ═══
> **RECOMMENDED AI SKILLS:** Enable **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills to guarantee authentic spring physics, staggered text orchestration, and sub-pixel `.liquid-glass` refraction.

1. FLUID ROOT SCALING & DESIGN TOKENS:
```css
:root {
  --bg-obsidian: #070709;
  --bg-card: rgba(16, 17, 22, 0.72);
  --text-primary: #f4f4f6;
  --text-muted: #a1a1aa;
  --accent-brand: #2f9e78;
  --border-glass: rgba(255, 255, 255, 0.09);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
html {
  font-size: clamp(13px, calc(100vw / 1440 * 16), 18px);
  background: var(--bg-obsidian);
  color: var(--text-primary);
  scrollbar-width: none;
}
html::-webkit-scrollbar { display: none; }
```

2. INTERACTIVE BENTO TELEMETRY & BELOW-THE-FOLD EXPANSION:
- Below or integrated into the hero stage, provide interactive glassmorphic HUD modules:
  * **Module A — Live Video Scrub / Playback Speed Controller:** Interactive pill toggle (`1.0x Realtime` / `0.4x Slow-Mo Inspection` / `Frame Freeze`) directly controlling the `<video src="https://www.vividsites.app/media/grotta.mp4">` element (`video.playbackRate`).
  * **Module B — Pointer-Reactive Spotlight Bento Grid (12-Col):** 3 asymmetric `.liquid-glass` cards tracking `--mouse-x` and `--mouse-y` via `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 45%)`, displaying real-time domain metrics, SVG sparkline telemetry, and expandable specification drawers for **"Grotta"**.
  * **Module C — Fullscreen Cinema Modal & Keyboard Shortcuts:** Pressing `[Space]` toggles play/pause on the background film; pressing `[M]` toggles ambient audio state indicator; clicking the reel pill opens a 16:9 theatre inspection modal.

3. LENIS SMOOTH SCROLL & POINTER PARALLAX ENGINE:
```javascript
import Lenis from 'https://cdn.jsdelivr.net/npm/lenis@1.1.18/+esm';
const lenis = new Lenis({ duration: 1.15, smoothWheel: true });

let mx = 0, my = 0, tx = 0, ty = 0;
window.addEventListener('mousemove', (e) => {
  tx = (e.clientX / window.innerWidth - 0.5) * 2;
  ty = (e.clientY / window.innerHeight - 0.5) * 2;
  document.querySelectorAll('.liquid-glass').forEach((el) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
  });
});

function raf(time) {
  lenis.raf(time);
  mx += (tx - mx) * 0.06;
  my += (ty - my) * 0.06;
  const bgVideo = document.querySelector('video');
  if (bgVideo) {
    bgVideo.style.transform = `scale(1.04) translate3d(${(-mx * 14).toFixed(2)}px, ${(-my * 10).toFixed(2)}px, 0)`;
  }
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

4. STRICT ANTI-SLOP DIRECTIVES:
- Never replace `https://www.vividsites.app/media/grotta.mp4` with a static placeholder gradient.
- Never use default unstyled browser buttons or opaque white borders; every interactive surface must use `.liquid-glass` with `1.2px` specular gradient mask borders and `#2f9e78` active micro-states.



═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (GROTTA) ═══

### 7.1 Complete Interactive Component Architecture & CSS States
Implement the following production-grade UI primitives and interactive states with zero external image dependencies beyond the provided media URLs:

```css
/* 1. Magnetic Pill Button & Specular Shimmer */
.btn-magnetic {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.85rem 1.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.92rem;
  letter-spacing: -0.01em;
  color: #2f9e78;
  background: #2f9e78;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, background 0.25s ease;
}
.btn-magnetic::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 45%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  transform: rotate(25deg);
  transition: left 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-magnetic:hover::after {
  left: 130%;
}
.btn-magnetic:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 18px 40px -8px #2f9e7855;
}

/* 2. Interactive Bento Grid & Sub-Pixel Hairline Matrix */
.bento-matrix {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.25rem;
  max-width: 84rem;
  margin: 0 auto;
  padding: 4rem 2rem;
}
.bento-cell {
  position: relative;
  border-radius: 1.35rem;
  padding: 2rem;
  background:
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #2f9e781f, transparent 40%),
    rgba(15, 16, 22, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.bento-cell:hover {
  border-color: #2f9e7866;
  transform: translateY(-4px);
}
.bento-cell-lg { grid-column: span 7; min-height: 24rem; }
.bento-cell-sm { grid-column: span 5; min-height: 24rem; }
@media (max-width: 960px) {
  .bento-cell-lg, .bento-cell-sm { grid-column: span 12; min-height: 18rem; }
}
```

### 7.2 Full-Page Section Blueprint & Content Hierarchy
Ensure the generated application includes the following complete, scroll-connected sections:
1. **Header / Floating Command Bar (`z-index: 100`):**
   - Brand emblem (`GROTTA`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #2f9e78`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#2f9e78` and `#2f9e78` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#2f9e78`, `#2f9e78`, `#2f9e78`, `#2f9e78`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`GROTTA` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

### 7.3 Complete Runtime Animation & Scroll-Spy Controller
```javascript
// Staggered IntersectionObserver Reveal & Counter Engine
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Animate numerical counters if present
      entry.target.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1400;
        const start = performance.now();
        function step(now) {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          el.textContent = (target * ease).toFixed(target % 1 === 0 ? 0 : 2) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .bento-cell').forEach((el) => observer.observe(el));

// Magnetic Button Physics
document.querySelectorAll('.btn-magnetic').forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.28;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
    btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) scale(1.03)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate3d(0, 0, 0) scale(1)';
  });
});
```

```

