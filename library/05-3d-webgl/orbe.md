# Orbe

![Orbe](orbe.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Y2K Ecommerce`
* **Tech Stack:** `React, Tailwind, Cursor`
* **Accent Color:** `#ff9de0`
* **Status:** `Complete Production Prompt (6000+ Chars)`
* **Live MP4 Video:** [Open / Download Video (orbe.mp4)](https://www.vividsites.app/media/orbe.mp4)
* **Preview Image:** [orbe.webp](orbe.webp)

---

## Production Prompt (for Cursor, Claude Code, Antigravity, Windsurf)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build a full-viewport cinematic movie/editorial website for "ORBE" — theme: "Y2K Ecommerce".
Deliver it using React, Tailwind CSS, and Lucide React icons. Use modern Google Fonts ('Inter' & 'Space Grotesk').
The entire page is a single full-height (100vh) hero experience with zero vertical scrollbars and rich interactive micro-animations.

Background Video: https://www.vividsites.app/media/orbe.mp4
Accent Color: #ff9de0
Stack Tags: React, Tailwind, Cursor

═══ 1. BACKGROUND VIDEO LAYER ═══
- Full-screen background video playing on loop, muted, autoplaying, playsinline, covering the entire viewport with object-fit: cover.
- Fixed positioning behind everything at z-index 0.
  Video URL: https://www.vividsites.app/media/orbe.mp4
- DUAL OVERLAY SYSTEM (Legibility without muddying the shot):
  1. Bottom Edge Mask: An overlay with backdrop-filter: blur(16px) using a CSS mask so the blur only appears at the bottom 35% and fades upward:
     mask-image: linear-gradient(to top, black 0%, transparent 100%);
     -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
  2. Contrast Gradient: A subtle linear gradient from rgba(0,0,0,0.7) on the left edge fading to transparent toward the right to protect title text.

═══ 2. LIQUID GLASS CSS SYSTEM ═══
Define a reusable `.liquid-glass` CSS class in index.css:
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.02);
  background-blend-mode: luminosity;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 10px 30px rgba(0,0,0,0.5);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.2px;
  background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

═══ 3. STAGGERED BLUR-FADE-UP ANIMATION ═══
Keyframes definition:
```css
@keyframes blurFadeUp {
  from {
    opacity: 0;
    filter: blur(16px);
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0px);
  }
}
.animate-blur-fade-up {
  animation: blurFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
```

═══ 4. UI COMPONENTS ARCHITECTURE ═══
1. NAVBAR (z-index 50, top-0, fixed, px-6 md:px-12 py-5 w-full flex justify-between items-center):
   - Left: Text logo "ORBE" (tracking-widest font-bold text-lg) with animationDelay: 0ms.
   - Center (hidden below lg): Navigation pill items — "Overview", "Technology", "Telemetry", "Design", "Inquire" — with staggered delays (100ms - 300ms).
   - Right:
     * Search pill button (rounded-full liquid-glass, px-5 py-2, Lucide Search icon).
     * Action CTA button: Solid white button with black text, rounded-full, hover:bg-white/90, delay 400ms.
     * Mobile hamburger button (visible below lg) with smooth animated transition to X icon.
2. HERO CONTENT (bottom-aligned flex container, px-6 md:px-12 pb-10 md:pb-16 z-10):
   - Metadata Badge Row (delay 300ms):
     * Star rating badge (Lucide Star, fill-white) + "9.8/10 CRITIC RATING"
     * Category indicator: "Y2K ECOMMERCE" with pulsing #ff9de0 dot
     * Year / Edition tag: "2026 EDITION"
   - Giant Display Headline (delay 400ms):
     * Font: 'Space Grotesk', text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white.
     * Subtext highlight using accent color #ff9de0.
   - Description Paragraph (delay 500ms):
     * text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed.
   - Action Buttons (delay 600ms - 700ms):
     * Primary button: "Explore Premiere" with Lucide Play icon (solid white, text-black).
     * Secondary button: "Technical Specs" with liquid-glass styling and ChevronRight icon.
3. AUDIO / MEDIA CONTROLLER (Bottom Right, z-index 30):
   - Rounded-full liquid-glass pill with interactive Mute / Unmute toggle and live animated audio frequency bars.

═══ 5. RESPONSIVE BREAKPOINTS ═══
- Mobile (<640px): Stacks buttons vertically, reduces headline to 38px, hides center navigation into full-screen sliding drawer.
- Tablet (640px - 1024px): Side-by-side buttons, condensed padding.
- Desktop (1024px+): Full horizontal layout, complete glass navbar with hover highlight pills.

═══  THE SIX SILENT FAILURES ═══
1. FILLING THE CENTER: Do not place cards in the middle of the frame. Let the background video breathe.
2. FLASH OF UNSTYLED CONTENT: Ensure all elements have opacity: 0 initially before blurFadeUp fires.
3. MISMATCHED COLORS: Use pure black (#08080a) and #ff9de0 exclusively. No random secondary hues.
4. JAGGED TEXT OVER VIDEO: Always enforce the blur mask overlay under text layers for 100% legibility.
5. SLOW JAVASCRIPT ANIMATIONS: Use pure CSS transitions (cubic-bezier) for all hover states.
6. BROKEN AUTOPLAY ON MOBILE: Always include playsInline and muted attributes on the <video> tag.


═══ 6. EXTENDED FULL-STACK PRODUCTION ARCHITECTURE & PHYSICS ENGINE ═══
> **RECOMMENDED AI SKILLS:** Enable **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills to guarantee authentic spring physics, staggered text orchestration, and sub-pixel `.liquid-glass` refraction.

1. FLUID ROOT SCALING & DESIGN TOKENS:
```css
:root {
  --bg-obsidian: #070709;
  --bg-card: rgba(16, 17, 22, 0.72);
  --text-primary: #f4f4f6;
  --text-muted: #a1a1aa;
  --accent-brand: #ff9de0;
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
  * **Module A — Live Video Scrub / Playback Speed Controller:** Interactive pill toggle (`1.0x Realtime` / `0.4x Slow-Mo Inspection` / `Frame Freeze`) directly controlling the `<video src="https://www.vividsites.app/media/orbe.mp4">` element (`video.playbackRate`).
  * **Module B — Pointer-Reactive Spotlight Bento Grid (12-Col):** 3 asymmetric `.liquid-glass` cards tracking `--mouse-x` and `--mouse-y` via `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 45%)`, displaying real-time domain metrics, SVG sparkline telemetry, and expandable specification drawers for **"Orbe"**.
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
- Never replace `https://www.vividsites.app/media/orbe.mp4` with a static placeholder gradient.
- Never use default unstyled browser buttons or opaque white borders; every interactive surface must use `.liquid-glass` with `1.2px` specular gradient mask borders and `#ff9de0` active micro-states.



═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (ORBE) ═══

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
  color: #ff9de0;
  background: #ff9de0;
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
  box-shadow: 0 18px 40px -8px #ff9de055;
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
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #ff9de01f, transparent 40%),
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
  border-color: #ff9de066;
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
   - Brand emblem (`ORBE`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #ff9de0`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#ff9de0` and `#ff9de0` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#ff9de0`, `#ff9de0`, `#ff9de0`, `#ff9de0`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`ORBE` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

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

