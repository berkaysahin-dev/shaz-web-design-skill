# Aureole

![Aureole]()

---

### Specification & Assets
* **Collection:** `Shaz Labs / Shaz Agency 3D Collection`
* **Item ID:** `aureole`
* **Category:** `Templates`
* **Tier:** `Premium`
* **Tone & Mood:** `Dark` · `luxe, organic`
* **Core Tags:** `threejs, particles, interactive`
* **Design Keywords:** `threejs, particles, corona, gold, sun, aureole, golden, dust, erupting, irregular, spokes, dark, hollow, core, pure, black`
* **Prompt Size:** `20,878 Characters (Complete Full-Stack WebGL + UI Blueprint)`
* **Live Full Video (MP4):** [Download / Stream Video]()
* **Preview Video (MP4):** [Download / Stream Preview]()
* **WebP Poster:** [High-Res Poster]()

---

### Concept & Overview
A golden corona of dust erupting from a dark hollow core â a living sun of amber-to-pale-gold motes breathing and flaring on pure black.

---

### Complete Architecture Prompt (Ready for Claude Code, OpenAI Codex, Cursor, Antigravity, Antigravity, Windsurf)

```markdown
# Recreate this site as a single production-grade HTML/CSS/JS file: Aureole (Templates)

You are a Principal Creative Technologist, WebGL Shader Architect, and Design Systems Engineer.
Produce a **single self-contained `index.html`** (or full Next.js / React + Tailwind + Framer Motion module if requested) that reproduces **"Aureole"** with 1:1 visual fidelity, real-time GPU physics, fluid viewport scaling, and tactile micro-interactions.

> **RECOMMENDED AI SKILLS:** Ensure **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills are active to enforce spring physics, anti-generic layout geometry, and sub-pixel surface polish.

---

## 1. Project Identity & Visual Direction
- **Title:** `Aureole`
- **Slug / ID:** `aureole`
- **Category:** `Templates` (`Shaz Agency 3D Collection`)
- **Creative Concept:** A golden corona of dust erupting from a dark hollow core â a living sun of amber-to-pale-gold motes breathing and flaring on pure black.
- **Atmospheric Tone & Mood:** `DARK` palette · `luxe, organic`
- **Core Stack & Tags:** `threejs, particles, interactive`
- **Visual & Architectural Keywords:** `threejs, particles, corona, gold, sun, aureole, golden, dust, erupting, irregular, spokes, dark, hollow, core, pure, black`
- **Primary Media Assets (Built-In 4K CDN Endpoints):**
  - **Primary Full-Res Video (`.mp4`):** `https://assets.shazagency.com/templates/aureole.mp4`
  - **Preview Loop Video (`.mp4`):** `https://assets.shazagency.com/templates/aureole.mp4`
  - **High-Res Poster Frame (`.webp`):** `https://assets.shazagency.com/templates/aureole.webp`
  *(Note: Use `https://assets.shazagency.com/templates/aureole.mp4` directly for instant 1:1 reproduction. If replacing with a custom commercial product video, generate a studio keyframe in Studio Keyframe Diffusion Engine and animate a 6s dolly loop in Cinematic Camera Motion Engine, then swap the `<video src="...">` URL).*

---

## 2. Calibrated Design Tokens & Fluid Root Scaling

### 2.1 Fluid Viewport Typography & Spacing Engine
Scale the entire layout proportionally against a `1440px` desktop reference and a `390px` mobile reference so every `rem` unit behaves like a precision cinema frame:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* Surface & Atmospheric Palette */
  --bg-canvas: #070709;
  --bg-elevated: #101116;
  --bg-glass: rgba(14, 15, 20, 0.68);
  --bg-glass-hover: rgba(255, 255, 255, 0.06);
  --text-primary: #f4f4f6;
  --text-secondary: #a1a1aa;
  --text-muted: #63636e;
  --accent-primary: #f59e0b;
  --accent-secondary: #ec4899;
  --border-hairline: rgba(255, 255, 255, 0.08);
  --border-specular: rgba(255, 255, 255, 0.22);

  /* Typography Families */
  --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Motion Curves */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Layout Metrics */
  --container-max: 84rem;
  --nav-height: 4.5rem;
}

html {
  font-size: clamp(13px, calc(100vw / 1440 * 16), 18px);
  background-color: var(--bg-canvas);
  color: var(--text-primary);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
html::-webkit-scrollbar { display: none; }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
```

### 2.2 Liquid Glass Surface & Specular Rim System
Every floating HUD bar, card, badge, and interactive control must implement dual-layer specular refraction rather than flat opaque borders:

```css
.liquid-glass {
  background: var(--bg-glass);
  backdrop-filter: blur(20px) saturate(165%);
  -webkit-backdrop-filter: blur(20px) saturate(165%);
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.14),
    inset 0 0 0 1px var(--border-hairline),
    0 24px 60px -12px rgba(0, 0, 0, 0.65);
  position: relative;
  overflow: hidden;
  transition: transform 0.45s var(--ease-out-expo), box-shadow 0.45s var(--ease-out-expo), background 0.35s ease;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    rgba(255, 255, 255, 0.0) 65%,
    rgba(255, 255, 255, 0.18) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Interactive Cursor Spotlight Card */
.spotlight-card {
  position: relative;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.065),
    transparent 40%
  ), var(--bg-elevated);
  border: 1px solid var(--border-hairline);
  border-radius: 1.25rem;
  overflow: hidden;
}
```

---

## 3. Dual-Layer Visual Engine: 4K Video Scrim + Real-Time Three.js / WebGL2 Shader Stage

This design (`Aureole` — Mode: `MORPHING_PARTICLE_ORB_TO_GALAXY`) runs a hybrid background stage inside `.stage-viewport` (`position: fixed; inset: 0; z-index: 0; pointer-events: none;`):

### 3.1 Layer A: High-Bitrate Video Backdrop & Optical Edge Mask
```html
<div class="stage-viewport" id="stageViewport">
  <video
    id="heroVideo"
    src="https://assets.shazagency.com/templates/aureole.mp4"
    poster="https://assets.shazagency.com/templates/aureole.webp"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    style="width:100%; height:100%; object-fit:cover; position:absolute; inset:0; opacity:0.88; transform:scale(1.03); transition:transform 0.1s linear;"
  ></video>
  <canvas id="webglCanvas" style="position:absolute; inset:0; width:100%; height:100%; mix-blend-mode:screen; opacity:0.85;"></canvas>
  <div class="stage-bottom-blur"></div>
  <div class="stage-vignette"></div>
</div>
```

With optical progressive bottom-edge blur and vignette masking so foreground typography maintains WCAG AAA contrast without muddying the center frame:
```css
.stage-bottom-blur {
  position: absolute;
  inset: auto 0 0 0;
  height: 42vh;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 45%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 45%, transparent 100%);
}
.stage-vignette {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 42%, transparent 25%, var(--bg-canvas) 100%),
    linear-gradient(180deg, rgba(7,7,9,0.55) 0%, transparent 22%, transparent 68%, var(--bg-canvas) 100%);
}
```

### 3.2 Layer B: Real-Time Three.js / GLSL Shader Implementation (`#webglCanvas`)
Implement a live Three.js / WebGL2 particle & shader simulation that responds continuously to scroll progress (`uScroll`: `0.0 -> 1.0`) and normalized damped cursor coordinates (`uMouse`: `[-1, 1]`):

```javascript
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js';

const canvas = document.getElementById('webglCanvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 5.2);

// 24,000-Particle Morphing BufferGeometry (Sphere -> Spiral Galaxy -> Neural Cortex / Wave Field)
const COUNT = 24000;
const geometry = new THREE.BufferGeometry();
const posSphere = new Float32Array(COUNT * 3);
const posGalaxy = new Float32Array(COUNT * 3);
const posCortex = new Float32Array(COUNT * 3);
const randomSeed = new Float32Array(COUNT);

for (let i = 0; i < COUNT; i++) {
  const i3 = i * 3;
  randomSeed[i] = Math.random();

  // State 0: Breathing Orb / Sphere
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const rSphere = 1.45 + 0.12 * Math.sin(phi * 6.0);
  posSphere[i3]     = rSphere * Math.sin(phi) * Math.cos(theta);
  posSphere[i3 + 1] = rSphere * Math.sin(phi) * Math.sin(theta);
  posSphere[i3 + 2] = rSphere * Math.cos(phi);

  // State 1: 4-Arm Logarithmic Spiral Galaxy
  const arm = i % 4;
  const radius = Math.pow(Math.random(), 0.75) * 3.1;
  const spinAngle = radius * 2.8 + (arm * Math.PI * 0.5);
  const scatter = (1.0 - radius / 3.2) * 0.28;
  posGalaxy[i3]     = Math.cos(spinAngle) * radius + (Math.random() - 0.5) * scatter;
  posGalaxy[i3 + 1] = (Math.random() - 0.5) * scatter * 0.65;
  posGalaxy[i3 + 2] = Math.sin(spinAngle) * radius + (Math.random() - 0.5) * scatter;

  // State 2: Bi-Hemisphere Cortical Fold / Harmonic Wave Lattice
  const hemi = (i % 2 === 0) ? 1.0 : -1.0;
  const foldFreq = 8.0;
  const gyri = 0.16 * Math.sin(theta * foldFreq) * Math.cos(phi * foldFreq);
  posCortex[i3]     = (1.25 + gyri) * Math.sin(phi) * Math.cos(theta) * 0.85 + hemi * 0.22;
  posCortex[i3 + 1] = (1.15 + gyri) * Math.cos(phi) * 0.92;
  posCortex[i3 + 2] = (1.45 + gyri) * Math.sin(phi) * Math.sin(theta);
}

geometry.setAttribute('position', new THREE.BufferAttribute(posSphere, 3));
geometry.setAttribute('aGalaxy', new THREE.BufferAttribute(posGalaxy, 3));
geometry.setAttribute('aCortex', new THREE.BufferAttribute(posCortex, 3));
geometry.setAttribute('aSeed', new THREE.BufferAttribute(randomSeed, 1));

const uniforms = {
  uTime: { value: 0 },
  uScroll: { value: 0 },
  uMouse: { value: new THREE.Vector2(0, 0) },
  uColorA: { value: new THREE.Color('#f59e0b') },
  uColorB: { value: new THREE.Color('#ec4899') }
};

const material = new THREE.ShaderMaterial({
  uniforms,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  vertexShader: `
    attribute vec3 aGalaxy;
    attribute vec3 aCortex;
    attribute float aSeed;
    uniform float uTime;
    uniform float uScroll;
    uniform vec2 uMouse;
    varying float vMix;
    varying float vAlpha;

    void main() {
      // Smooth 3-stage scroll morph: 0.0->0.5 (Orb to Galaxy), 0.5->1.0 (Galaxy to Cortex)
      float s1 = smoothstep(0.0, 0.5, uScroll);
      float s2 = smoothstep(0.5, 1.0, uScroll);
      vec3 morphed = mix(position, aGalaxy, s1);
      morphed = mix(morphed, aCortex, s2);

      // Organic curl breathing
      float pulse = sin(uTime * 1.4 + aSeed * 6.2831) * 0.045;
      morphed += normalize(morphed + 0.001) * pulse;

      // Cursor magnetic deflection
      vec2 screenOffset = morphed.xy - uMouse * 2.0;
      float dist = length(screenOffset);
      morphed.xy += normalize(screenOffset + 0.001) * smoothstep(1.2, 0.0, dist) * 0.22;

      vec4 mvPosition = modelViewMatrix * vec4(morphed, 1.0);
      gl_PointSize = (2.2 + aSeed * 2.4) * (4.5 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
      vMix = aSeed * 0.6 + s1 * 0.4;
      vAlpha = smoothstep(8.0, 1.5, -mvPosition.z) * (0.45 + 0.55 * aSeed);
    }
  `,
  fragmentShader: `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying float vMix;
    varying float vAlpha;

    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float d = length(uv);
      if (d > 0.5) discard;
      float glow = pow(1.0 - d * 2.0, 2.2);
      vec3 col = mix(uColorA, uColorB, vMix);
      gl_FragColor = vec4(col, glow * vAlpha);
    }
  `
});

const points = new THREE.Points(geometry, material);
scene.add(points);
```

---

## 4. Complete Section-by-Section DOM & Layout Architecture

Build the complete page structure over `z-index: 10` so it scrolls smoothly over the sticky WebGL/video canvas:

### Section 01 — Floating Glassmorphic HUD Navbar (`header.hud-nav`)
- **Position:** `fixed; top: 1.25rem; left: 50%; transform: translateX(-50%); width: min(92vw, 82rem); z-index: 100;`
- **Container:** `.liquid-glass` pill bar (`border-radius: 999px; padding: 0.65rem 1.25rem; display: flex; align-items: center; justify-content: space-between;`).
- **Left Cluster:** Geometric brand mark + uppercase wordmark `AUREOLE` (`font-family: var(--font-display); font-weight: 700; letter-spacing: 0.08em; font-size: 0.92rem;`) + live status badge (`<span class="status-dot"></span> LIVE TELEMETRY`).
- **Center Cluster:** 4 anchor links (`01 / Architecture`, `02 / Neural Core`, `03 / Benchmarks`, `04 / Specs`) with hover sliding pill indicator and `--font-mono` index prefixes.
- **Right Cluster:** Live UTC operational clock (`#utcClock` updating every second in `JetBrains Mono`) + primary magnetic CTA button (`Initialize System ↗` with `background: var(--text-primary); color: var(--bg-canvas); border-radius: 999px; padding: 0.55rem 1.15rem; font-weight: 600;`).

### Section 02 — Full-Viewport Hero Stage (`section.hero-stage`, `min-height: 100vh`)
- **Grid Alignment:** 12-column CSS grid (`max-width: var(--container-max); margin: 0 auto; padding: 8.5rem 2rem 4rem 2rem; display: grid; grid-template-columns: repeat(12, 1fr); align-items: end; min-height: 100vh;`).
- **Left / Main Column (Cols 1–8):**
  - **Eyebrow Pill:** `.liquid-glass` pill containing pulsing `#f59e0b` dot + `TEMPLATES // BUILD v4.2` (`font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.14em;`).
  - **Monumental Display Headline:**
    Split into staggered word/line reveal wrappers (`overflow: hidden` mask with `@keyframes blurFadeUp 0.95s var(--ease-out-expo) forwards`):
    - Line 1: **`Aureole`** (`font-family: var(--font-display); font-size: clamp(3.2rem, 6.8vw, 6.4rem); font-weight: 700; line-height: 0.94; letter-spacing: -0.04em;`)
    - Line 2: Gradient-tinted italic/light accent phrase derived from the concept (`background: linear-gradient(90deg, var(--text-primary), var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; color: transparent;`).
  - **Lead Subcopy:** `A golden corona of dust erupting from a dark hollow core â a living sun of amber-to-pale-gold motes breathing and flaring on pure black.` (`max-width: 38rem; font-size: 1.08rem; line-height: 1.65; color: var(--text-secondary); margin-top: 1.5rem;`).
  - **Action Row:** Primary high-contrast pill CTA + Secondary `.liquid-glass` interactive demo trigger (`Watch 4K Reel ▶`) with hover scale and icon translation.
- **Right Telemetry HUD Card (Cols 9–12):**
  - Floating `.liquid-glass` instrument card (`border-radius: 1.25rem; padding: 1.35rem;`) displaying 3 live readout rows:
    1. `SHADER PIPELINE` → `WebGL2 / 60.0 FPS`
    2. `PARTICLE BUFFER` → `24,000 FLOAT32 NODES`
    3. `SCROLL PHASE` → `<span id="scrollPhaseReadout">0.000 RAD</span>` (dynamically updated on scroll).

### Section 03 — Kinetic Marquee & Editorial Manifesto (`section.manifesto-section`)
- **Infinite Ticker Strip:** Full-bleed horizontal border-top/border-bottom (`1px solid var(--border-hairline)`) scrolling marquee running at `35s linear infinite` with keywords: `THREEJS  •  PARTICLES  •  CORONA  •  GOLD  •  SUN  •  AUREOLE  •  GOLDEN  •  DUST  •  ERUPTING  •  IRREGULAR  •  SPOKES  •  DARK  •  HOLLOW  •  CORE  •  PURE  •  BLACK`.
- **Scroll-Scrubbed Word Opacity Reveal:** A centered editorial statement (`max-width: 64rem; font-family: var(--font-display); font-size: clamp(1.85rem, 3.6vw, 3.25rem); line-height: 1.18; letter-spacing: -0.025em;`) where each word transitions from `opacity: 0.18; filter: blur(4px)` to `opacity: 1.0; filter: blur(0px)` based on element scroll progress.

### Section 04 — Asymmetric 4-Card Bento Architecture (`section.bento-section`)
- **12-Column Bento Grid (`gap: 1.25rem`):**
  - **Card 1 (Span 7 cols):** `.spotlight-card` featuring an interactive live shader parameter toggle (`Orb State`, `Spiral State`, `Cortex State`) that directly mutates `uniforms.uScroll.value` when clicked, plus technical breakdown copy.
  - **Card 2 (Span 5 cols):** `.spotlight-card` with live animated SVG waveform / frequency spectrum visualizer (`<svg viewBox="0 0 400 160">`) using `#f59e0b` and `#ec4899` stroke gradients.
  - **Card 3 (Span 5 cols):** `.spotlight-card` showcasing micro-typography and color token swatches (`#070709`, `#f59e0b`, `#ec4899`, `#f4f4f6`) with click-to-copy HEX interaction.
  - **Card 4 (Span 7 cols):** `.spotlight-card` housing an embedded secondary preview loop (`https://assets.shazagency.com/templates/aureole.mp4`) with hover slow-motion playbackrate (`video.playbackRate = 0.5` on hover, `1.0` on leave) and glass HUD overlay badges.

### Section 05 — Quantitative Telemetry & Performance Benchmarks (`section.metrics-section`)
- 4-column glassmorphic stat grid with `IntersectionObserver` count-up animations (`data-target`):
  - `99.98%` — `FRAME TIMING STABILITY (16.6ms BUDGET)`
  - `24K` — `CONCURRENT GPU VERTEX DISPATCH`
  - `0.04ms` — `UNIFORM BUFFER LATENCY`
  - `4K / 60` — `HDR STREAMING PIPELINE`

### Section 06 — Monumental Footer & Interactive Command Bar (`footer.site-footer`)
- Oversized edge-to-edge watermark typography (`AUREOLE` at `font-size: clamp(4.5rem, 15vw, 14rem); font-weight: 800; line-height: 0.82; letter-spacing: -0.05em; color: rgba(255,255,255,0.04); pointer-events: none;`).
- 4-column directory navigation, system status indicator (`All Systems Operational`), and back-to-top smooth scroll trigger.

---

## 5. Smooth Scroll (Lenis) & Pointer Physics Controller

Include this complete runtime orchestration loop inside `<script type="module">`:

```javascript
import Lenis from 'https://cdn.jsdelivr.net/npm/lenis@1.1.18/+esm';

const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true
});

let targetScroll = 0;
let currentScroll = 0;
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;

window.addEventListener('mousemove', (e) => {
  targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
  targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;

  // Update CSS radial spotlight coordinates on all .spotlight-card elements
  document.querySelectorAll('.spotlight-card').forEach((card) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});

lenis.on('scroll', ({ progress }) => {
  targetScroll = progress;
  const readout = document.getElementById('scrollPhaseReadout');
  if (readout) readout.textContent = `${(progress * 6.2831).toFixed(3)} RAD`;
});

const clock = new THREE.Clock();
function animate(time) {
  lenis.raf(time);
  const elapsed = clock.getElapsedTime();

  // Smooth linear interpolation (lerp)
  currentScroll += (targetScroll - currentScroll) * 0.08;
  mouseX += (targetMouseX - mouseX) * 0.06;
  mouseY += (targetMouseY - mouseY) * 0.06;

  uniforms.uTime.value = elapsed;
  uniforms.uScroll.value = currentScroll;
  uniforms.uMouse.value.set(mouseX, mouseY);

  points.rotation.y = elapsed * 0.06 + currentScroll * 1.8;
  points.rotation.x = mouseY * 0.25;

  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.style.transform = `scale(${1.03 + currentScroll * 0.12}) translateY(${currentScroll * 45}px)`;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

---

## 6. Strict Anti-Slop & Quality Guardrails (Mandatory)
1. **NO Placeholder Text:** Never output `"Calibrated production narrative"` or `"Content goes here"`. Every card, metric, telemetry label, and paragraph must contain domain-authentic copy matching **"Aureole"**.
2. **NO Generic Unstyled Scrollbars:** Keep native scrollbars hidden (`scrollbar-width: none`) while preserving smooth wheel/touch scrolling via Lenis.
3. **NO Flat Opaque Borders:** All borders must use translucent `rgba(255,255,255,0.08)` hairlines paired with `.liquid-glass` specular pseudo-element masks.
4. **NO Broken Video/Canvas Z-Indexing:** The `.stage-viewport` (`<video>` + `<canvas id="webglCanvas">`) must stay fixed at `z-index: 0` with `pointer-events: none`, while all interactive sections scroll cleanly above at `z-index: 10`.
5. **100% Self-Contained Execution:** All CSS tokens, keyframe animations, Three.js shaders, Lenis smooth scroll, and DOM sections must run out-of-the-box with zero missing imports or console errors.

```



