# Atlasworks

![Atlasworks](atlasworks.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `Studio`
* **Tech Stack:** `React, Tailwind, Cursor`
* **Accent Color:** `#9b8cff`
* **Status:** `Kapsamlı Tam Mimari Prompt (6000+ Karakter)`
* **Live MP4 Video:** [Videoyu Aç / İndir (atlasworks.mp4)](https://www.vividsites.app/media/atlasworks.mp4)
* **Preview Image:** [atlasworks.webp](atlasworks.webp)

---

## Production Prompt (for Cursor, Claude Code, v0, Lovable)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build a full-viewport cinematic movie/editorial website for "ATLASWORKS" — theme: "Studio".
Deliver it using React, Tailwind CSS, and Lucide React icons. Use modern Google Fonts ('Inter' & 'Space Grotesk').
The entire page is a single full-height (100vh) hero experience with zero vertical scrollbars and rich interactive micro-animations.

Background Video: https://www.vividsites.app/media/atlasworks.mp4
Accent Color: #9b8cff
Stack Tags: React, Tailwind, Cursor

═══ 1. BACKGROUND VIDEO LAYER ═══
- Full-screen background video playing on loop, muted, autoplaying, playsinline, covering the entire viewport with object-fit: cover.
- Fixed positioning behind everything at z-index 0.
  Video URL: https://www.vividsites.app/media/atlasworks.mp4
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
   - Left: Text logo "ATLASWORKS" (tracking-widest font-bold text-lg) with animationDelay: 0ms.
   - Center (hidden below lg): Navigation pill items — "Overview", "Technology", "Telemetry", "Design", "Inquire" — with staggered delays (100ms - 300ms).
   - Right:
     * Search pill button (rounded-full liquid-glass, px-5 py-2, Lucide Search icon).
     * Action CTA button: Solid white button with black text, rounded-full, hover:bg-white/90, delay 400ms.
     * Mobile hamburger button (visible below lg) with smooth animated transition to X icon.
2. HERO CONTENT (bottom-aligned flex container, px-6 md:px-12 pb-10 md:pb-16 z-10):
   - Metadata Badge Row (delay 300ms):
     * Star rating badge (Lucide Star, fill-white) + "9.8/10 CRITIC RATING"
     * Category indicator: "STUDIO" with * Year / Edition tag: "2026 EDITION"
   - Giant Display Headline (delay 400ms):
     * Font: 'Space Grotesk', text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white.
     * Subtext highlight using accent color #9b8cff.
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
3. MISMATCHED COLORS: Use pure black (#08080a) and #9b8cff exclusively. No random secondary hues.
4. JAGGED TEXT OVER VIDEO: Always enforce the blur mask overlay under text layers for 100% legibility.
5. SLOW JAVASCRIPT ANIMATIONS: Use pure CSS transitions (cubic-bezier) for all hover states.
6. BROKEN AUTOPLAY ON MOBILE: Always include playsInline and muted attributes on the <video> tag.
═══ 5. ARCHITECTURAL & INTERACTION DIRECTIVES ═══
- Full Production Website Reality (Anti-Mockup Rule): The visual reference defines the aesthetic style and hero mood. NEVER trap the design inside a static isolated card floating on an empty canvas. Deliver a living, full-viewport, responsive production web application with a full-width header (`w-full`), natural vertical scrolling, rich feature sections, and a complete footer.
- Interactive State Traversal: If the reference displays side cards, stacked preview cards, or carousel pagination dots, they are functional interactive states—clicking, swiping, or arrow controls smoothly transition between views.
- Clean Typographic Primacy: Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- Zero Slop: Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Keep the central viewport clean so the 3D subject and visuals breathe.
- Physics & Smoothness: Lenis smooth scroll combined with damped pointer parallax tracking cursor coordinates with spring physics.
```