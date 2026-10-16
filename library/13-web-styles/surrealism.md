# Surrealism  — Shaz Agency Web Design Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `surrealism`  
> **Marka / Konsept:** `ÆTHERIS`  
> **Vurgu Rengi:** `#80A0B0`  
> **Karakteristikler:** Havada Duran Gotik Şato, Yer Çekimsiz Antik Saat & Büst, İmkânsız Perspektif Merdivenler, Kozmik Boşluk

---

## 1. Stil Özeti ve Felsefesi
Gerçek dışı nesneler ve yer çekimsiz mimarinin büyüleyici dijital sanat galerisi. 'ÆTHERIS: EXPLORE THE REALMS OF THE IMPOSSIBLE' başlığı, havada asılı duran gotik şato, parlayan kadranlı antika guguklu saat, antik Roma heykeli büstü, göksel göz ve derin uzaya inen spiral taş merdivenler.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`surrealism.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#203030`, `#05090C`, `#405060`, `#608090`, `#80A0B0`
- **Vurgu Rengi (Accent):** `#80A0B0`
- **Önerilen Tipografi:** Playfair Display, Cormorant Garamond, Cinzel
- **Görsel Kimlik Unsurları:** Havada Duran Gotik Şato, Yer Çekimsiz Antik Saat & Büst, İmkânsız Perspektif Merdivenler, Kozmik Boşluk
- **Önizleme Görseli:** `05_Web_Stilleri/surrealism.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / Cursor / Windsurf)

Aşağıdaki promptu Claude, Cursor, Cursor veya Windsurf'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a spellbinding, award-winning Surrealist avant-garde digital art exhibition website homepage UI exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Brand Name: "ÆTHERIS" in refined, tracked-out serif capitals.
- Header Navigation: Top bar with hamburger icon on the left, and exhibition links on the right: [EXHIBITIONS], [ARTISTS], [ABOUT], [JOURNAL].
- Primary Headline: "ÆTHERIS: EXPLORE THE REALMS OF THE IMPOSSIBLE" in elegant, classical Roman serif display typography.
- Subtitle: "A curated digital journey through surrealist landscapes and avant-garde visions."
- Exhibition Metadata: "CURRENT EXHIBITION: 'FRAGMENTED DIMENSIONS' | OCT 15 - NOV 30, 2024".

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Background: Dark, stormy atmospheric celestial void with deep teal-grey nebula clouds, glowing crescent moon, and distant spiral galaxies.
- Surrealist 3D Scene Elements:
  * A monumental gothic stone castle and spiral turret floating weightlessly on a shattered asteroid in zero gravity.
  * An ornate antique gold grandfather clock floating in mid-air with an illuminated dial.
  * A fractured classical Roman marble statue bust and broken classical columns suspended in space.
  * A giant mystical floating eye orb watching silently from the storm clouds.
  * A standalone spiral stone staircase curving impossible into the infinite dark abyss below.
- Color Tokens: Deep Obsidian Cosmos (#06080E), Pale Ethereal Cyan (#88D0D0), Antique Gold (#D4AF37), Marble White (#FFFFFF).

=== COMPONENT ARCHITECTURE ===
1. Primary Call-to-Action: Clean glassmorphic rectangular button "ENTER THE EXHIBITION" with subtle cyan border glow.
2. Narrative Scroll Cue: Centered bottom prompt "SCROLL TO DESCEND ↓" with an arrow pointing downward.
3. Exhibition Index Footer: Minimalist pagination strip: "01 | INTRODUCTION   03 | HISTORY   04 | CONTENT   05 | ARTISTS".
4. Technical Spec Line (Bottom Right): "High fidelity, (8k, cinematic effects, Natural grains.. Typography".

---

## COMPLETE ARCHITECTURAL IMPLEMENTATION BLUEPRINT (SURREALISM  — VISION WEB DESIGNER SPECIFICATION)

> **REQUIRED AI SKILLS:** Activate **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills so the coding assistant enforces exact design tokens, spring physics, and authentic `Surrealism  — Shaz Agency Web Design Specification` visual grammar without generic AI defaults.

### 1. Calibrated Color & Typography CSS Token System
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  /* Pixel-Sampled Surrealism  — Shaz Agency Web Design Specification Palette */
  --style-color-1: #80A0B0;
  --style-color-2: #203030;
  --style-color-3: #05090C;
  --style-color-4: #405060;
  --style-color-5: #608090;

  /* Adaptive Surface & Text Mapping */
  --bg-primary: #80A0B0;
  --bg-surface: #608090;
  --text-main: #203030;
  --accent-main: #05090C;
  --accent-alt: #405060;

  /* Fluid Viewport Root Scaling */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

html {
  font-size: clamp(14px, calc(100vw / 1440 * 16), 18px);
  background: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-body);
  scroll-behavior: smooth;
}
```

### 2. Multi-Section Full-Page DOM Architecture (6 Complete Sections)
1. **Top Navigation Bar (`<header class="style-navbar">`):**
   - Sticky top architecture (`height: 4.5rem; z-index: 100;`) featuring brand emblem, 4 navigation pills with magnetic hover states, live theme/telemetry indicator in `--font-mono`, and high-contrast primary CTA button using `--accent-main` (`#05090C`).
2. **Hero Showcase Stage (`<section class="style-hero">` — `min-height: 92vh`):**
   - Asymmetric 12-column grid (`max-width: 84rem; margin: 0 auto; padding: 6rem 2rem;`).
   - Left 7 columns: Eyebrow category badge (`SURREALISM  — VISION WEB DESIGNER SPECIFICATION // DESIGN SYSTEM`), oversized display headline (`font-size: clamp(3.2rem, 6.5vw, 6.2rem); line-height: 0.95; letter-spacing: -0.04em;`), editorial subcopy, dual CTA cluster, and trust metrics bar.
   - Right 5 columns: Interactive 3D-tilting showcase card stack (`transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))`) referencing `./05_Web_Stilleri/surrealism.jpg` with live floating UI widgets and color swatch chips (`#80A0B0`, `#203030`, `#05090C`, `#405060`, `#608090`).
3. **Interactive Kinetic Marquee Strip (`<div class="style-marquee">`):**
   - Full-bleed infinite horizontal scrolling ticker (`animation: marquee 28s linear infinite`) separating the hero from the feature grid.
4. **6-Card Bento Feature Matrix (`<section class="style-bento">`):**
   - 12-column responsive Bento layout (`span 8`, `span 4`, `span 4`, `span 4`, `span 4`) demonstrating interactive components built strictly in the **Surrealism  — Shaz Agency Web Design Specification** aesthetic (live toggle switches, animated progress meters, data visualization sparklines, interactive tabs, and micro-badges).
5. **Interactive Typography & Palette Inspector (`<section class="style-tokens">`):**
   - Live specimen showcase displaying Display (`H1`–`H4`), Body, and Monospace scales Alongside clickable color token cards for `#80A0B0`, `#203030`, `#05090C`, `#405060`, and `#608090` that copy HEX codes to the clipboard.
6. **Monumental Footer (`<footer class="style-footer">`):**
   - Full-width newsletter/command input, 4-column sitemap directory, and edge-to-edge watermark typography (`SURREALISM  — VISION WEB DESIGNER SPECIFICATION`).

### 3. Framer Motion / Interactive Physics & Cursor Controller
```javascript
// Pointer-Driven 3D Card Tilt & Radial Spotlight Controller
document.querySelectorAll('.bento-card, .hero-showcase-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 10;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
});
```

### 4. Strict Anti-Slop Execution Rules
- **NEVER** use generic Bootstrap/Tailwind default white cards or unstyled borders; every single container, shadow, border, and button must strictly obey the **Surrealism  — Shaz Agency Web Design Specification** visual rules above.
- **NEVER** truncate sections or use placeholder `"Calibrated production narrative"` copy. Deliver a complete, runnable, multi-section production page.


═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (SURREALISM  — VISION WEB DESIGNER SPECIFICATION) ═══

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
  color: #80A0B0;
  background: #203030;
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
  box-shadow: 0 18px 40px -8px #05090C55;
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
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #05090C1f, transparent 40%),
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
  border-color: #05090C66;
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
   - Brand emblem (`SURREALISM  — VISION WEB DESIGNER SPECIFICATION`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #05090C`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#05090C` and `#405060` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#80A0B0`, `#203030`, `#05090C`, `#405060`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`SURREALISM  — VISION WEB DESIGNER SPECIFICATION` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

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



