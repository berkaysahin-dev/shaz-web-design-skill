# Aurora

![Aurora](aurora.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Light Curtains`
* **Tech Stack:** `HTML, WebGL2, Shader`
* **Accent Color:** `#2effc4`
* **Status:** `Complete Production Prompt (6000+ Chars)`
* **Live MP4 Video:** [Open / Download Video (aurora.mp4)](https://www.vividsites.app/media/aurora.mp4)
* **Preview Image:** [aurora.webp](aurora.webp)

---

## Production Prompt (for Cursor, Claude Code, Antigravity, Windsurf)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build "AURORA" — an interactive procedural WebGL2 shader experience for "Light Curtains".
Deliver it as ONE self-contained HTML file: one <canvas>, one inline <script>, one inline <style>.
Raw WebGL2, zero external libraries, zero build steps. It must run standalone in any browser.

Video / Reference: https://www.vividsites.app/media/aurora.mp4
Accent Color: #2effc4
Stack Tags: HTML, WebGL2, Shader

═══ 1. SHADER PIPELINE & MATHEMATICS ═══
- Canvas: Sized to window.innerWidth and window.innerHeight, automatically handling devicePixelRatio (capped at 2.0).
- Vertex Shader:
  * Full-screen triangle covering [-1, -1] to [3, -1], avoiding multiple draw calls.
  * Outputs normalized UV coordinates `(0.0 to 1.0)`.
- Fragment Shader (GLSL 3.00 ES):
  * Domain Warping & Raymarching: Implements fractional Brownian motion (fBm) or signed distance fields (SDF) tailored to "Light Curtains".
  * Uniforms:
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_scroll;
  * Cursor Interaction:
    Mouse movements create exponential displacement ripples that decay smoothly over 60 frames.
  * Palette:
    Base black (#08080a) blended with #2effc4 highlights, specular shine, and ambient chromatic dispersion.
  * Anti-Banding: Includes a high-frequency triangular dither noise in final color output to eliminate color banding on OLED/HDR screens.

═══ 2. MINIMALIST HUD OVERLAY (HTML/CSS) ═══
- Position: Fixed, inset 0, z-index 10, pointer-events: none.
- Top-Left: "AURORA" wordmark in monospace, status badge: "WEBGL 2.0 PROCEDURAL".
- Top-Right: Live performance metrics (FPS counter, render resolution, particle count).
- Center-Bottom:
  * Minimalist title with wide letter tracking.
  * Interactive controls: "Pause Simulation", "Randomize Seed", "Export Frame".
  * Buttons have pointer-events: auto and liquid glass backdrop styling.

═══  THE SIX SILENT FAILURES ═══
1. CPU BOTTLENECK: Never compute noise in JavaScript. All mathematics must execute in parallel on the GPU.
2. VIEWPORT RESIZE STRETCH: Recalculate canvas.width/height and gl.viewport on window resize without aspect ratio distortion.
3. EXCESSIVE POWER CONSUMPTION: Pause render loop when document.hidden is true (Page Visibility API).
4. UNINITIALIZED UNIFORMS: Set default fallback values for u_mouse and u_time before first render.
5. NO FALLBACK POSTER: Render a crisp static CSS gradient or poster while WebGL context compiles.
6. SCROLLBARS: Set overflow: hidden on html, body, and canvas.


═══ 6. EXTENDED FULL-STACK PRODUCTION ARCHITECTURE & PHYSICS ENGINE ═══
> **RECOMMENDED AI SKILLS:** Enable **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills to guarantee authentic spring physics, staggered text orchestration, and sub-pixel `.liquid-glass` refraction.

1. FLUID ROOT SCALING & DESIGN TOKENS:
```css
:root {
  --bg-obsidian: #070709;
  --bg-card: rgba(16, 17, 22, 0.72);
  --text-primary: #f4f4f6;
  --text-muted: #a1a1aa;
  --accent-brand: #2effc4;
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
  * **Module A — Live Video Scrub / Playback Speed Controller:** Interactive pill toggle (`1.0x Realtime` / `0.4x Slow-Mo Inspection` / `Frame Freeze`) directly controlling the `<video src="https://www.vividsites.app/media/aurora.mp4">` element (`video.playbackRate`).
  * **Module B — Pointer-Reactive Spotlight Bento Grid (12-Col):** 3 asymmetric `.liquid-glass` cards tracking `--mouse-x` and `--mouse-y` via `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 45%)`, displaying real-time domain metrics, SVG sparkline telemetry, and expandable specification drawers for **"Aurora"**.
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
- Never replace `https://www.vividsites.app/media/aurora.mp4` with a static placeholder gradient.
- Never use default unstyled browser buttons or opaque white borders; every interactive surface must use `.liquid-glass` with `1.2px` specular gradient mask borders and `#2effc4` active micro-states.



═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (AURORA) ═══

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
  color: #2effc4;
  background: #2effc4;
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
  box-shadow: 0 18px 40px -8px #08080a55;
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
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #08080a1f, transparent 40%),
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
  border-color: #08080a66;
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
   - Brand emblem (`AURORA`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #08080a`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#08080a` and `#2effc4` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#2effc4`, `#2effc4`, `#08080a`, `#2effc4`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`AURORA` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

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

