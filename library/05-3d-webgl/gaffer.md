# Gaffer

![Gaffer](gaffer.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `The Light Lab`
* **Tech Stack:** `HTML, Three.js, Projected Shadow`
* **Accent Color:** `#d9b26a`
* **Status:** `Complete Production Prompt (6000+ Chars)`
* **Live MP4 Video:** [Open / Download Video (gaffer.mp4)](https://www.vividsites.app/media/gaffer.mp4)
* **Preview Image:** [gaffer.webp](gaffer.webp)

---

## Production Prompt (for Cursor, Claude Code, Antigravity, Windsurf)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build a high-end 3D cinematic web application called "GAFFER" — theme: "The Light Lab".
Deliver it using React + Vite + Three.js (@react-three/fiber or standalone Three.js) + Tailwind CSS.
The entire application is a unified 100vh viewport stage with a Three.js WebGL canvas running underneath an editorial liquid glass HUD.

Source Video / Texture: https://www.vividsites.app/media/gaffer.mp4
Accent Color: #d9b26a
Stack Tags: HTML, Three.js, Projected Shadow

═══ 1. RENDER PIPELINE & 3D ENVIRONMENT ═══
- Viewport: Full-screen 100vw, 100vh fixed Canvas with ACESFilmicToneMapping and sRGBEncoding.
- Postprocessing Effects:
  * Subtle UnrealBloom (intensity 0.35, radius 0.4, threshold 0.85) to make #d9b26a highlights gently bloom.
  * Chromatic Aberration with radial falloff (offset [0.0015, 0.0015]) on screen edges.
  * Subtle vignette: darkens the viewport perimeter to focus attention on the center.
- Materials & Shading (Dispersion Glass / PBR):
  * MeshPhysicalMaterial:
    transmission: 0.96, roughness: 0.04, ior: 1.54, thickness: 1.2,
    reflectivity: 0.8, dispersion: 0.06, clearcoat: 1.0, clearcoatRoughness: 0.05
  * Studio Environment: Studio HDRI reflections combined with a custom point light tinting specular edges with #d9b26a.
- Video Texture Integration:
  * The source video (https://www.vividsites.app/media/gaffer.mp4) is mapped onto a subtle curved backdrop plane or used as a dynamic environmental reflection map with muted luminosity.

═══ 2. INTERACTIVE CURSOR & SCROLL KINEMATICS ═══
- Cursor Parallax Physics:
  * Track normalized mouse coordinates `(mouse.x, mouse.y)` in range [-1, 1].
  * Damped spring physics: Lerp the 3D camera rotation and target position toward cursor offset with damping factor 0.05:
    camera.rotation.y += (mouse.x * 0.15 - camera.rotation.y) * 0.05;
    camera.rotation.x += (-mouse.y * 0.15 - camera.rotation.x) * 0.05;
  * On mobile/touch devices: Gracefully fallback to device orientation gyroscope (DeviceOrientationEvent) or subtle automated continuous orbiting.
- Scroll Scrubbing:
  * Scrolling smoothly flies the camera along a 3D bezier curve, rotating the focal subject and adjusting depth of field.

═══ 3. EDITORIAL HUD & LIQUID GLASS UI (OVERLAY LAYER) ═══
Floating over the 3D canvas (z-index 20), an ultra-refined user interface:
1. Glass Header:
   - Left: Wordmark "GAFFER" in sharp geometric typography.
   - Center: Floating pill menu (Overview, Materiality, Acoustics, Specifications).
   - Right: Interactive button with live pulsing #d9b26a dot ("Order Edition").
2. Bottom Left Telemetry Panel:
   - Live coordinates ticker: "LAT: 37.7749° N | ELEV: 1,420M".
   - Active render stats: "60 FPS · WEBGAL 2.0 ACTIVE".
3. Bottom Right Sound & View Controls:
   - Interactive soundwave button (Mute / Unmute) with animated canvas visualizer.
   - Wireframe toggle button that switches the 3D subject between PBR glass and holographic wireframe.
4. Interactive Spec Modal:
   - Clicking any hotspot on the 3D subject smoothly pans the camera and opens a frosted glass spec drawer.

═══ 4. DESIGN TOKENS & CSS SPEC ═══
- CSS Class:
  .glass-panel {
    background: rgba(12, 12, 16, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.15);
  }
- Colors: Primary #08080a, Accent #d9b26a, Border rgba(255,255,255,0.08).

═══  THE SIX SILENT FAILURES ═══
1. PLASTIC MATERIALS: Do not use default MeshStandardMaterial with high roughness. Glass must have real transmission and specular dispersion.
2. JARRING CAMERA SNAPS: Every camera translation must be smoothed via damping.
3. HIGH GPU OVERHEAD: Limit renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0)) to preserve 60fps on retina displays.
4. CLUTTERED CENTER: Keep the central 60% of the screen free of solid text cards so the 3D model is visible.
5. NO FALLBACK: Ensure a high-resolution poster frame loads immediately while Three.js assets initialize.
6. NO DEFAULT CURSORS: Hide standard cursor and implement a custom smoothed circular cursor with mix-blend-mode: difference.


═══ 6. EXTENDED FULL-STACK PRODUCTION ARCHITECTURE & PHYSICS ENGINE ═══
> **RECOMMENDED AI SKILLS:** Enable **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills to guarantee authentic spring physics, staggered text orchestration, and sub-pixel `.liquid-glass` refraction.

1. FLUID ROOT SCALING & DESIGN TOKENS:
```css
:root {
  --bg-obsidian: #070709;
  --bg-card: rgba(16, 17, 22, 0.72);
  --text-primary: #f4f4f6;
  --text-muted: #a1a1aa;
  --accent-brand: #d9b26a;
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
  * **Module A — Live Video Scrub / Playback Speed Controller:** Interactive pill toggle (`1.0x Realtime` / `0.4x Slow-Mo Inspection` / `Frame Freeze`) directly controlling the `<video src="https://www.vividsites.app/media/gaffer.mp4">` element (`video.playbackRate`).
  * **Module B — Pointer-Reactive Spotlight Bento Grid (12-Col):** 3 asymmetric `.liquid-glass` cards tracking `--mouse-x` and `--mouse-y` via `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 45%)`, displaying real-time domain metrics, SVG sparkline telemetry, and expandable specification drawers for **"Gaffer"**.
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
- Never replace `https://www.vividsites.app/media/gaffer.mp4` with a static placeholder gradient.
- Never use default unstyled browser buttons or opaque white borders; every interactive surface must use `.liquid-glass` with `1.2px` specular gradient mask borders and `#d9b26a` active micro-states.



═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (GAFFER) ═══

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
  color: #d9b26a;
  background: #d9b26a;
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
  box-shadow: 0 18px 40px -8px #d9b26a55;
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
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #d9b26a1f, transparent 40%),
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
  border-color: #d9b26a66;
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
   - Brand emblem (`GAFFER`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #d9b26a`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#d9b26a` and `#d9b26a` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#d9b26a`, `#d9b26a`, `#d9b26a`, `#d9b26a`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`GAFFER` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

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

