# Halftone

![Halftone](halftone.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Print Screen`
* **Tech Stack:** `HTML, WebGL2, Shader`
* **Accent Color:** `#d8442e`
* **Status:** `Ücretsiz (Resmi Shaz Labs Promptu)`
* **Live MP4 Video:** [Open / Download Video (halftone.mp4)](https://www.vividsites.app/media/halftone.mp4)
* **Preview Image:** [halftone.webp](halftone.webp)

---

## Production Prompt (for Cursor, Claude Code, Antigravity, Windsurf)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build HALFTONE — a drop-in animated WebGL background. Ship it as ONE
self-contained HTML file: one <canvas>, one inline <script>, one inline <style>. Raw
WebGL2, NO library, no build step, no CDN, no module graph. It has to drop into a page
whose build system you know nothing about, so it brings nothing with it.

═══ WHAT IT IS ═══
Two real halftone separations at a 60-degree offset over a domain-warped tone field, with the dots swelling into solid ink under the cursor. One full-screen triangle, no library.

Two real halftone separations at a 60-degree offset over a domain-warped tone
field. Each separation rotates into its own screen angle, tiles, and grows a dot
from the centre of each cell — the dot RADIUS carries the tone, which is what gives
the print moire where the two angles overlap. AREA, not radius, is proportional to
tone: a dot covering fraction t of a unit cell has radius sqrt(t/PI) = 0.564*sqrt(t),
and a larger coefficient makes mid-grey come out almost solid so the field reads as
black paper with holes in it. fwidth() on the cell coordinate keeps the dot edge one
pixel wide at any DPR. The cursor OPENS the screen — tone rises toward it, the dots
swell into a solid, and it reads as ink pooling rather than as a spotlight.

═══ THE FIVE THINGS THAT BREAK A DROP-IN BACKGROUND ═══

1. A BACKGROUND ON BOTH <html> AND <body>. Set one on each and body's stops being
   propagated to the viewport — it starts painting as an ordinary element box, which sits
   ABOVE the root stacking context's negative-z layer, and a canvas at `z-index: -1`
   disappears completely behind it. The page renders as a flat colour that looks exactly
   like a deliberate solid fill, with no error anywhere. Put the clear colour on <html>
   only. If the host page's <body> already has a background, give the canvas
   `z-index: 0` and the host's content `position: relative; z-index: 1` instead.

2. TWO TRIANGLES FOR A FULL-SCREEN QUAD. Two triangles rasterise a seam of duplicated
   fragments down the shared diagonal and cost an extra vertex. ONE oversized triangle
   from gl_VertexID covers the clip volume exactly once and needs no buffers, no
   attributes and no VAO:
       vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
       gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);

3. DPR CLAMPED ONCE. A 2x cap on a 3440px display is 47 million fragments a frame. Clamp
   TWICE — by device tier, then by AREA (`sqrt(MAX_FRAGMENTS / (w*h))`). A background
   that costs more than the page in front of it is a bug however good it looks.

4. `x += (target - x) * k` FOR THE POINTER EASE. That is only the intended speed at
   60fps; on a 120Hz panel it converges twice as fast and the lag — which IS the effect —
   is gone. Use `1 - pow(1 - k, dt * 60)`.

5. A BACKTICK ANYWHERE IN THE GLSL, INCLUDING IN A COMMENT. It ends the template literal
   the shader is interpolated into and the page dies with a JavaScript syntax error a
   hundred lines from the cause. The shader is fine; the symptom is "Unexpected
   identifier".

Also: gate the pointer on `(hover: hover) and (pointer: fine)` AND on "has the pointer
ever moved" — an ungated pointer sits at the default position forever and aims every
effect at one spot. Honour `prefers-reduced-motion` by feeding a FIXED time value rather
than by not drawing: a still frame of the field is the right answer, a blank canvas is
not. And if `getContext("webgl2")` returns null, set the clear colour on the canvas and
stop — the page behind it still works, which is the whole contract.

═══ THE FRAGMENT SHADER — VERBATIM ═══
#version 300 es
precision highp float;
out vec4 O;
uniform vec2 uRes; uniform float uTime; uniform vec2 uPointer; uniform float uOn;
uniform vec3 uPaper, uInkA, uInkB; uniform float uCell, uAngle, uBloom, uGrain;

float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float vn(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(h21(i), h21(i+vec2(1,0)), u.x),
             mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.55;
  for (int i = 0; i < 4; i++){ v += a * vn(p); p = p * 2.01 + 9.1; a *= 0.5; }
  return v;
}
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

/* One separation of a halftone screen: rotate into the screen's own angle,
   tile, and grow a dot from the centre of each cell. The dot RADIUS carries
   the tone — this is a real screen, not a texture of dots multiplied by a
   gradient, which is what gives it the print moire when two angles overlap. */
float screenDot(vec2 sp, float tone, float ang, float cell){
  vec2 g = rot(ang) * sp / cell;
  vec2 c = fract(g) - 0.5;
  /* Area, not radius, carries the tone: a dot covering fraction t of a unit
     cell has radius sqrt(t/PI) = 0.564*sqrt(t). Using a bigger coefficient
     makes mid-grey come out almost solid, and the whole field reads as black
     paper with a few holes in it. */
  float r = sqrt(max(0.0, tone)) * 0.564;
  /* fwidth on the CELL coordinate keeps the dot edge one pixel wide at any
     DPR. A constant smoothstep width makes the whole field crawl on a
     retina display and look soft on a 1x one. */
  float aa = fwidth(g.x) * 1.2 + 0.0015;
  return smoothstep(r + aa, r - aa, length(c));
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 sp = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;

  float t = uTime * 0.06;
  vec2 w = vec2(fbm(sp * 1.3 + t), fbm(sp * 1.3 - t + 5.2)) - 0.5;
  float field = fbm(sp * 1.9 + w * 0.9 + vec2(0.0, t * 1.4));

  /* The cursor OPENS the screen: tone rises toward it, so the dots swell into
     a solid and the field reads as ink pooling rather than as a spotlight. */
  vec2 pw = (uPointer - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  float d = length(sp - pw);
  float bloom = exp(-(d * d) / (uBloom * uBloom)) * uOn;

  float tone = clamp(field * 1.15 - 0.30 + bloom * 0.62, 0.0, 1.0);

  /* Two separations at the classic 15 and 75 degree offset. One screen is a
     dot pattern; two at different angles is a PRINT. */
  float a = screenDot(sp, tone,               uAngle,           uCell);
  float b = screenDot(sp, tone * 0.72,        uAngle + 1.0472,  uCell * 1.18);

  vec3 col = uPaper;
  col = mix(col, uInkB, b * 0.42);
  col = mix(col, uInkA, a);

  col += (h21(gl_FragCoord.xy + fract(uTime) * 17.9) - 0.5) * uGrain;
  O = vec4(clamp(col, 0.0, 1.0), 1.0);
}

═══ THE HARNESS — VERBATIM ═══
Wrap the harness AND the per-background setup in one IIFE. The no-WebGL2 path is an
early `return` inside it; written as an `else` block it scopes every helper below it and
the setup code that follows cannot see any of them.

/* ── the smallest honest WebGL2 harness ─────────────────────────────────
   Raw WebGL2, no library. A background that pulls in 600KB of three.js to
   draw one full-screen triangle is not a background, it is a dependency. */
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(hover: none) and (pointer: coarse)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
const MOBILE = innerWidth < 768 || COARSE;

const cv = document.getElementById('bg');
const gl = cv.getContext('webgl2', { antialias: false, alpha: false,
                                     powerPreference: 'high-performance' });
/* No WebGL2 is not an error the visitor should see as a black rectangle.
   Fall back to the flat clear colour and bail — the page it is behind still
   works, which is the whole contract of a background.
   This is an early RETURN inside the wrapping IIFE, not an `else` block: an
   else block scopes every helper below it, and the site's own main.js is
   concatenated after and cannot see any of them. */
if (!gl) { cv.style.background = CFG.clear; return; }

const VERT = `#version 300 es
/* ONE triangle, not a quad. Two triangles rasterise a seam of duplicated
   fragments down the diagonal and cost an extra vertex; a single oversized
   triangle covers the clip volume exactly once. */
void main(){
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

function compile(type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    /* Line-numbered, because a raw GLSL log gives you `0:74` and a wall of
       text you then have to count through by hand. */
    const log = gl.getShaderInfoLog(sh) || '';
    console.error(log + '\n' + src.split('\n')
      .map((l, i) => String(i + 1).padStart(3) + ' | ' + l).join('\n'));
    throw new Error('shader: ' + log.split('\n')[0]);
  }
  return sh;
}
const prog = gl.createProgram();
gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
  throw new Error('link: ' + gl.getProgramInfoLog(prog));
}
gl.useProgram(prog);
const U = {};
for (let i = 0, n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS); i < n; i++) {
  const nm = gl.getActiveUniform(prog, i).name.replace(/\[0\]$/, '');
  U[nm] = gl.getUniformLocation(prog, nm);
}
const rgb = h => {
  const n = parseInt(h.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

/* DPR clamped twice — by tier, then by AREA. A 2x cap on a 3440px display is
   47 million fragments a frame, and a background that costs more than the
   page it is behind is a bug however pretty it is. */
const MAX_FRAG = CFG.maxFragments || 2.6e6;
let W = 0, H = 0, DPR = 1;
function fit() {
  const w = cv.clientWidth || innerWidth, h = cv.clientHeight || innerHeight;
  const byTier = Math.min(devicePixelRatio || 1, MOBILE ? 1.25 : (CFG.dprCap || 1.75));
  const byArea = Math.sqrt(MAX_FRAG / Math.max(1, w * h));
  const dpr = Math.max(0.6, Math.min(byTier, byArea));
  const nw = Math.round(w * dpr), nh = Math.round(h * dpr);
  if (nw === W && nh === H) return false;
  W = nw; H = nh; DPR = dpr;
  cv.width = W; cv.height = H;
  gl.viewport(0, 0, W, H);
  return true;
}
fit();
/* Safari fires resize every time the URL bar collapses, so on a coarse
   pointer a height-only change is ignored entirely. */
let lastW = innerWidth;
addEventListener('resize', () => {
  if (MOBILE && innerWidth === lastW) return;
  lastW = innerWidth; fit();
}, { passive: true });

const P = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, on: 0 };
if (FINE && !MOBILE && CFG.pointer !== false) {
  addEventListener('pointermove', e => {
    P.tx = e.clientX / innerWidth;
    P.ty = 1 - e.clientY / innerHeight;
    P.on = 1;
  }, { passive: true });
}

const t0 = performance.now();
let last = t0, budget = 1000 / (MOBILE ? 30 : (CFG.fps || 60));
function loop(now) {
  requestAnimationFrame(loop);
  if (now - last < budget) return;
  const dt = Math.min(0.05, (now - last) / 1000) || 0.016;
  last = now;
  /* Frame-rate independent damping. `x += (t-x)*k` is only the intended speed
     at 60fps; on a 120Hz panel every eased value on the page is wrong. */
  const k = 1 - Math.pow(1 - 0.08, dt * 60);
  P.x += (P.tx - P.x) * k;
  P.y += (P.ty - P.y) * k;
  draw((now - t0) / 1000, dt);
}

═══ THE PER-BACKGROUND SETUP ═══
gl.uniform3fv(U.uPaper, rgb(CFG.paper));
gl.uniform3fv(U.uInkA, rgb(CFG.inkA));
gl.uniform3fv(U.uInkB, rgb(CFG.inkB));
gl.uniform1f(U.uCell, CFG.cell);
gl.uniform1f(U.uAngle, CFG.angle);
gl.uniform1f(U.uBloom, CFG.bloom);
gl.uniform1f(U.uGrain, CFG.grain);
function draw(t) {
  if (fit()) gl.viewport(0, 0, W, H);
  gl.uniform2f(U.uRes, W, H);
  gl.uniform1f(U.uTime, RM ? 5.0 : t);
  gl.uniform2f(U.uPointer, P.x, P.y);
  gl.uniform1f(U.uOn, P.on);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
draw(0);
requestAnimationFrame(loop);

═══ FIXED PARAMETERS (BAKE THESE IN) ═══
clear = #f2efe7
ink = #1a1713
paper = #f2efe7
inkA = #151310
inkB = #d8442e
cell = 0.0145
angle = 0.2618
bloom = 0.34
grain = 0.012
dprCap = 1.5
maxFragments = 2400000
fps = 60

═══ DELIBERATELY ABSENT ═══
No library, no npm package, no CSS framework, no images, no fonts, no network
requests of any kind. The file is the product and it works offline.


═══ 6. EXTENDED FULL-STACK PRODUCTION ARCHITECTURE & PHYSICS ENGINE ═══
> **RECOMMENDED AI SKILLS:** Enable **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills to guarantee authentic spring physics, staggered text orchestration, and sub-pixel `.liquid-glass` refraction.

1. FLUID ROOT SCALING & DESIGN TOKENS:
```css
:root {
  --bg-obsidian: #070709;
  --bg-card: rgba(16, 17, 22, 0.72);
  --text-primary: #f4f4f6;
  --text-muted: #a1a1aa;
  --accent-brand: #d8442e;
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
  * **Module A — Live Video Scrub / Playback Speed Controller:** Interactive pill toggle (`1.0x Realtime` / `0.4x Slow-Mo Inspection` / `Frame Freeze`) directly controlling the `<video src="https://www.vividsites.app/media/halftone.mp4">` element (`video.playbackRate`).
  * **Module B — Pointer-Reactive Spotlight Bento Grid (12-Col):** 3 asymmetric `.liquid-glass` cards tracking `--mouse-x` and `--mouse-y` via `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 45%)`, displaying real-time domain metrics, SVG sparkline telemetry, and expandable specification drawers for **"Halftone"**.
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
- Never replace `https://www.vividsites.app/media/halftone.mp4` with a static placeholder gradient.
- Never use default unstyled browser buttons or opaque white borders; every interactive surface must use `.liquid-glass` with `1.2px` specular gradient mask borders and `#d8442e` active micro-states.



═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (HALFTONE) ═══

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
  color: #d8442e;
  background: #f2efe7;
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
  box-shadow: 0 18px 40px -8px #1a171355;
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
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #1a17131f, transparent 40%),
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
  border-color: #1a171366;
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
   - Brand emblem (`HALFTONE`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #1a1713`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#1a1713` and `#f2efe7` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#d8442e`, `#f2efe7`, `#1a1713`, `#f2efe7`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`HALFTONE` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

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

