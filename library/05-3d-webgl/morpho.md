# Morpho

![Morpho](morpho.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Field Journal`
* **Tech Stack:** `React, Tailwind, Cursor`
* **Accent Color:** `#2e6bff`
* **Status:** `Ücretsiz (Resmi Shaz Labs Promptu)`
* **Live MP4 Video:** [Open / Download Video (morpho.mp4)](https://www.vividsites.app/media/morpho.mp4)
* **Preview Image:** [morpho.webp](morpho.webp)

---

## Production Prompt (for Cursor, Claude Code, Antigravity, Windsurf)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build a full-viewport naturalist field-journal hero section using React, Tailwind CSS, and Lucide React icons. Use the Fraunces font from Google Fonts for display type and Inter for UI/body. The treatment is soft and papery — a warm cream field-journal page, not harsh black. The entire page is a single full-height hero — no scrolling, no additional sections. The brand is MORPHO, a free open field journal whose signature is a living iridescent morpho butterfly holding still in a soft void, its wings catching blue light. The CURSOR shifts its wings — move the mouse and the iridescence and tilt follow.

BACKGROUND VIDEO:

A full-screen background video plays on loop, muted, autoplaying (autoPlay, muted, loop, playsInline), covering the entire viewport with object-cover, fixed-positioned behind everything at z-index 0. It shows an iridescent blue morpho butterfly, wings slowly breathing open and shut in a soft warm void, structural colour flickering across the scales. The butterfly is the centered subject.

Video URL: your provided iridescent morpho butterfly footage (bundled asset: https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/morpho.mp4)

CURSOR-REACTIVE WING SHIFT (signature interaction):

Wrap the video in a fixed container with perspective: 1600px. On pointer move over the hero, drive a gentle 3D tilt so the wings feel like the cursor is turning the specimen in the light. Track mouse position as normalized -1..1 from viewport center (mx, my). Lerp smoothly with requestAnimationFrame (ease factor 0.05 per frame — soft, this is a live insect, not a machine). Apply to the video wrapper:
  transform: scale(1.08) rotateX(calc(var(--my) * -6deg)) rotateY(calc(var(--mx) * 8deg)) translate(calc(var(--mx) * 12px), calc(var(--my) * 12px))
The scale(1.08) guarantees edges never reveal gaps during rotation. Also drive a subtle iridescence layer: a fixed pointer-events-none div (z-index 1, mix-blend-mode: screen) with background: radial-gradient(60% 60% at calc(50% + var(--mx)*20%) calc(45% + var(--my)*20%), rgba(46,107,255,0.16), transparent 60%) so a blue sheen slides across as the cursor moves. Under prefers-reduced-motion and on touch devices, disable both (transform: scale(1.03) only, static sheen).

SOFT LIGHT SCRIM (delicate readability):

This is a light, papery treatment. Add a fixed pointer-events-none overlay at z-index 2 with a whisper-soft cream gradient at the bottom so copy reads without crushing the void:
  background: linear-gradient(to top, rgba(247,244,236,0.92) 0%, rgba(247,244,236,0.5) 28%, rgba(247,244,236,0) 54%)
NO dark overlay. Optionally add backdrop-blur-[2px] on the same masked region for a dreamy edge.

FONT:

Import Fraunces (weights 400, 500, italic 400) and Inter (weights 300–500) from Google Fonts. Set font-family: 'Inter', sans-serif on the body. Use Fraunces for the headline and logo wordmark; Inter for nav, sub-line, buttons, micro-labels.

LIQUID GLASS EFFECT (LIGHT variant, used on buttons):

Create a reusable .liquid-glass CSS class tuned for a light background:
  background: rgba(255, 255, 255, 0.35) with background-blend-mode: luminosity
  backdrop-filter: blur(8px) saturate(1.15) (with -webkit- prefix)
  border: none
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 20px rgba(46,107,255,0.08)
  position: relative; overflow: hidden
A ::before pseudo-element for a thin border stroke:
  position: absolute; inset: 0; border-radius: inherit; padding: 1.4px
  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(46,107,255,0.4) 30%, rgba(255,255,255,0) 55%, rgba(46,107,255,0.35) 100%)
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude
  pointer-events: none

IRIDESCENT GRADIENT TEXT (headline word accent):

Create a .morpho-text class for one emphasized word so it catches structural blue like a wing scale:
  background: linear-gradient(105deg, #2e6bff 0%, #57c8ff 26%, #8ad0ff 50%, #2e6bff 74%, #1741b8 100%)
  background-size: 200% 100%
  -webkit-background-clip: text; background-clip: text; color: transparent
  animation: morphoShift 10s ease-in-out infinite
@keyframes morphoShift — 0%,100% background-position: 0% 50%; 50% background-position: 100% 50%. Pause under prefers-reduced-motion.

BLUR-FADE-UP ANIMATION (every element, staggered):

@keyframes blurFadeUp — From: opacity: 0; filter: blur(20px); transform: translateY(40px). To: opacity: 1; filter: blur(0); transform: translateY(0). The .animate-blur-fade-up class applies animation: blurFadeUp 1s ease-out forwards with initial opacity: 0. Each element gets a staggered animationDelay via inline style.

NAVBAR (z-index 50, relative):

Horizontal navbar, justify-between, padding px-4 sm:px-6 md:px-12 py-4 md:py-6. All nav text is dark on this light treatment: text-neutral-900.
Left: logo "Morpho" in Fraunces text-xl font-medium tracking-[-0.01em], with "FIELD JOURNAL" in Inter text-[11px] tracking-[0.28em] uppercase text-neutral-500 alongside. Blur-fade-up at 0ms.
Center (hidden below lg): links "Species", "Notes", "Plates", "About" — text-sm text-neutral-600 hover:text-neutral-900 transition-colors, staggered 100–250ms.
Right: a small "FREE" badge — rounded-full bg-[#2e6bff] text-white text-[11px] font-medium tracking-[0.14em] px-3 py-1 — next to a "Read the journal" liquid-glass pill (rounded-full, px-5 py-2, text-sm text-neutral-900) with a Lucide ArrowUpRight icon (size 16), blur-fade-up at 350ms. Hamburger below lg — w-10 h-10 rounded-full liquid-glass, animated Menu↔X (rotate-180, opacity, scale-50, duration-500 ease-out), icon text-neutral-800, blur-fade-up at 350ms.

MOBILE MENU (below lg):

Absolutely positioned dropdown top-[72px], z-40. Slides in translate-y-0 opacity-100 when open; -translate-y-4 opacity-0 pointer-events-none when closed; duration-500 ease-out. Background bg-[#f7f4ec]/90 backdrop-blur-lg, border-t border-b border-neutral-200 shadow-xl. Same 4 links in text-neutral-800, each py-3 px-3 rounded-lg hover:bg-neutral-100, staggered translate-x slide-ins (50ms steps). The FREE badge repeats in a bordered footer section.

HERO CONTENT (bottom of viewport):

A flex container flex-1 flex flex-col justify-end, padding px-4 sm:px-6 md:px-12 pb-10 md:pb-16, z-index 10. Copy here is dark (text-neutral-900 / neutral-600) over the light scrim.

Eyebrow — Inter text-[11px] tracking-[0.28em] uppercase text-neutral-500, mb-5, blur-fade-up at 300ms. Text: "OPEN JOURNAL · NO PAYWALL · ENTRY 041"

Metadata row — flex-wrap gap-x-6 gap-y-2 mb-6 md:mb-8, Inter text-[11px] tracking-[0.22em] uppercase text-neutral-500, blur-fade-up at 380ms. Three items, icon + label:
  Leaf icon (size 14) + "MORPHO DIDIUS"
  MousePointer2 icon (size 14) + "MOVE TO OBSERVE"
  MapPin icon (size 14) + "CANOPY, DAWN"

Headline — Fraunces, text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.98] tracking-[-0.015em] text-neutral-900 mb-5, blur-fade-up at 450ms. Two lines: "Blue that" then "isn't there." where "isn't there." carries the .morpho-text class (make it italic Fraunces). Force the break with block spans.

Sub-line — Inter text-base sm:text-lg md:text-xl text-neutral-600 max-w-xl mb-8, blur-fade-up at 560ms. Text: "The colour is structure, not pigment — tilt the wing and it moves with you."

CTA row — flex flex-wrap gap-3 sm:gap-4:
  "Read the entry" — bg-neutral-900 text-white rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm, Lucide ArrowRight icon (size 16), hover:bg-[#2e6bff] transition-colors, blur-fade-up at 660ms.
  "Field notes" — rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-sm text-neutral-900, Lucide BookOpen icon (size 16), blur-fade-up at 760ms.

Bottom hint (right-aligned on md+, under CTAs on mobile) — Inter text-[10px] tracking-[0.26em] uppercase text-neutral-400 flex items-center gap-2, blur-fade-up at 860ms: MousePointer2 icon (size 12) + "MOVE TO SHIFT THE WINGS".

COLOR PALETTE:

Background canvas: warm cream #f7f4ec (used by the light scrim; page bg bg-[#f2efe6]).
Text: neutral-900 for headings, neutral-600 for the sub-line, neutral-500/400 for micro-labels.
Accent: #2e6bff (structural morpho blue) — appears in the iridescent headline word, the sheen layer, the FREE badge, the glass border stroke, and the primary CTA hover.
The only solid elements are the FREE badge (blue) and the "Read the entry" button (neutral-900, white text) until hover, where it flips to blue.

STAGGER TIMING SUMMARY:

Logo 0ms · Nav links 100/150/200/250ms · FREE badge + Read-the-journal 350ms · Hamburger 350ms · Eyebrow 300ms · Metadata row 380ms · Headline 450ms · Sub-line 560ms · Read-the-entry 660ms · Field-notes 760ms · Move-to-shift hint 860ms.

RESPONSIVE BREAKPOINTS:

Below sm (< 640px): headline text-5xl, tighter padding, metadata wraps over two rows, move-to-shift hint sits under the CTAs.
Below lg (< 1024px): nav links hidden, hamburger shown; cursor wing shift stays on for pointer devices, off for touch.
md and up: headline scales up, hint aligns bottom-right.
lg and up: full desktop navbar with all links visible; full cursor-reactive tilt and sheen range.


═══ 6. EXTENDED FULL-STACK PRODUCTION ARCHITECTURE & PHYSICS ENGINE ═══
> **RECOMMENDED AI SKILLS:** Enable **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills to guarantee authentic spring physics, staggered text orchestration, and sub-pixel `.liquid-glass` refraction.

1. FLUID ROOT SCALING & DESIGN TOKENS:
```css
:root {
  --bg-obsidian: #070709;
  --bg-card: rgba(16, 17, 22, 0.72);
  --text-primary: #f4f4f6;
  --text-muted: #a1a1aa;
  --accent-brand: #2e6bff;
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
  * **Module A — Live Video Scrub / Playback Speed Controller:** Interactive pill toggle (`1.0x Realtime` / `0.4x Slow-Mo Inspection` / `Frame Freeze`) directly controlling the `<video src="https://www.vividsites.app/media/morpho.mp4">` element (`video.playbackRate`).
  * **Module B — Pointer-Reactive Spotlight Bento Grid (12-Col):** 3 asymmetric `.liquid-glass` cards tracking `--mouse-x` and `--mouse-y` via `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 45%)`, displaying real-time domain metrics, SVG sparkline telemetry, and expandable specification drawers for **"Morpho"**.
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
- Never replace `https://www.vividsites.app/media/morpho.mp4` with a static placeholder gradient.
- Never use default unstyled browser buttons or opaque white borders; every interactive surface must use `.liquid-glass` with `1.2px` specular gradient mask borders and `#2e6bff` active micro-states.



═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (MORPHO) ═══

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
  color: #2e6bff;
  background: #2e6bff;
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
  box-shadow: 0 18px 40px -8px #57c8ff55;
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
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #57c8ff1f, transparent 40%),
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
  border-color: #57c8ff66;
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
   - Brand emblem (`MORPHO`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #57c8ff`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#57c8ff` and `#8ad0ff` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#2e6bff`, `#2e6bff`, `#57c8ff`, `#8ad0ff`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`MORPHO` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

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

