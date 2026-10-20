# Aurora

![Aurora](aurora.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Light Curtains`
* **Tech Stack:** `HTML, WebGL2, Shader`
* **Accent Color:** `#2effc4`
* **Status:** `Kapsamlı Tam Mimari Prompt (6000+ Karakter)`
* **Live MP4 Video:** [Videoyu Aç / İndir (aurora.mp4)](https://www.vividsites.app/media/aurora.mp4)
* **Preview Image:** [aurora.webp](aurora.webp)

---

## Production Prompt (for Cursor, Claude Code, v0, Lovable)

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
═══ 5. ARCHITECTURAL & INTERACTION DIRECTIVES ═══
- Full Production Website Reality (Anti-Mockup Rule): The visual reference defines the aesthetic style and hero mood. NEVER trap the design inside a static isolated card floating on an empty canvas. Deliver a living, full-viewport, responsive production web application with a full-width header (`w-full`), natural vertical scrolling, rich feature sections, and a complete footer.
- Interactive State Traversal: If the reference displays side cards, stacked preview cards, or carousel pagination dots, they are functional interactive states—clicking, swiping, or arrow controls smoothly transition between views.
- Clean Typographic Primacy: Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- Zero Slop: Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Keep the central viewport clean so the 3D subject and visuals breathe.
- Physics & Smoothness: Lenis smooth scroll combined with damped pointer parallax tracking cursor coordinates with spring physics.
```