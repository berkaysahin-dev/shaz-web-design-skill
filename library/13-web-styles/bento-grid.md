# Bento Grid — Shaz Agency Web Design Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `bento-grid`  
> **Marka / Konsept:** `QUANTUM FLUX`  
> **Vurgu Rengi:** `#00F0FF`  
> **Karakteristikler:** Apple SaaS Standartı Bento Kutuları, 1x1 ve 1x2 Modüler Kartlar, Canlı Telemetri & ECG Dalgaları, Hız Göstergesi

---

## 1. Stil Özeti ve Felsefesi
Apple ve modern SaaS ürünlerinin standart bento kutusu düzeni. 'Real-Time Telemetry. Peak Performance.' başlığı, 1x1 ve 1x2 oranlarında kusursuz modüler kartlar, canlı sunucu sağlığı ECG dalgası, 48ms API gecikmesi, 12,492 aktif kullanıcı grafiği ve 35% CPU hız göstergesi.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`bento-grid.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#00F0FF`, `#090A0E`, `#204060`, `#4080E0`, `#3060A0`
- **Vurgu Rengi (Accent):** `#00F0FF`
- **Önerilen Tipografi:** Plus Jakarta Sans, JetBrains Mono, Inter
- **Görsel Kimlik Unsurları:** Apple SaaS Standartı Bento Kutuları, 1x1 ve 1x2 Modüler Kartlar, Canlı Telemetri & ECG Dalgaları, Hız Göstergesi
- **Önizleme Görseli:** `05_Web_Stilleri/bento-grid.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / Cursor / Windsurf)

Aşağıdaki promptu Claude, Cursor, Cursor veya Windsurf'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a state-of-the-art dark mode Bento Grid SaaS dashboard website homepage UI exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Brand Name: "QUANTUM FLUX" with a luminous cyan orb icon.
- Primary Headline: "Real-Time Telemetry. Peak Performance." inside the prominent 2x2 hero card.
- Subtitle: "Quantify growth. Optimize workflows. Gain instantaneous visibility."
- Header Navigation: Top navbar with dark tabs [Products ∨], [Platform], [Pricing], [docs], [Login], and glowing pill button "Get Started".

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Layout Structure: Strict mathematical Bento Box Grid with 16px gutters, rounded 20px corners, and subtle 1px border highlights:
  `background: #0E1117; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);`
- Background: Pitch obsidian black (#08090C).
- Color Accents:
  * Telemetry Green: #39FF14 (Server Health, operational indicators)
  * Cyan Neon: #00F0FF (Latency graphs, active curves)
  * Electric Violet: #A855F7 (Memory progress, user statistics)
  * Alert Amber & Coral: #F59E0B / #EF4444 (Severity bars)
- Typography: Plus Jakarta Sans for UI titles, JetBrains Mono for numeric telemetry and milliseconds.

=== BENTO MODULES SPECIFICATION ===
1. Module 1 (2x2 Large Hero): Headline, descriptive paragraph, buttons [Start Free Trial] and [Request Demo], beside a 3D interconnected wireframe constellation globe.
2. Module 2 (1x1): "Server Health" displaying "89% Active", live glowing green ECG pulse wave, status "All Systems Operational".
3. Module 3 (1x1): "API Latency" displaying "48ms Avg" with sharp blue frequency waveform.
4. Module 4 (1x1): "Active Users" displaying "12,492" (+1.2% live counter badge) with multi-color cyan/emerald vertical bar chart.
5. Module 5 (1x2 Wide): "User Engagement" with dual smooth area curves (79% Active Users, 22,492 Interactive Users).
6. Module 6 (1x1): "Database Load" displaying "35%" with an illuminated radial speedometer gauge.
7. Module 7 (1x1): "Memory Usage" displaying "18.5 GB / 32 GB" with segmented neon progress pill.
8. Module 8 (1x1): "Project Milestones" displaying circular radial completion gauge "4/10".
9. Module 9 (1x2 Wide): "Security Events" with timeline alert pips and 3D Low/Mid/High severity bars.
10. Module 10 (1x1): "Data Flow" showing a fiber-optic radial burst visualization.
11. Module 11 (1x1): "Subscription Metrics" displaying "MRR $89K" with smooth ascending emerald area curve.

---

## COMPLETE ARCHITECTURAL IMPLEMENTATION BLUEPRINT (BENTO GRID — VISION WEB DESIGNER SPECIFICATION)

> **REQUIRED AI SKILLS:** Activate **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** skills so the coding assistant enforces exact design tokens, spring physics, and authentic `Bento Grid — Shaz Agency Web Design Specification` visual grammar without generic AI defaults.

### 1. Calibrated Color & Typography CSS Token System
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  /* Pixel-Sampled Bento Grid — Shaz Agency Web Design Specification Palette */
  --style-color-1: #00F0FF;
  --style-color-2: #00F0FF;
  --style-color-3: #090A0E;
  --style-color-4: #204060;
  --style-color-5: #4080E0;

  /* Adaptive Surface & Text Mapping */
  --bg-primary: #00F0FF;
  --bg-surface: #4080E0;
  --text-main: #00F0FF;
  --accent-main: #090A0E;
  --accent-alt: #204060;

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
   - Sticky top architecture (`height: 4.5rem; z-index: 100;`) featuring brand emblem, 4 navigation pills with magnetic hover states, live theme/telemetry indicator in `--font-mono`, and high-contrast primary CTA button using `--accent-main` (`#090A0E`).
2. **Hero Showcase Stage (`<section class="style-hero">` — `min-height: 92vh`):**
   - Asymmetric 12-column grid (`max-width: 84rem; margin: 0 auto; padding: 6rem 2rem;`).
   - Left 7 columns: Eyebrow category badge (`BENTO GRID — VISION WEB DESIGNER SPECIFICATION // DESIGN SYSTEM`), oversized display headline (`font-size: clamp(3.2rem, 6.5vw, 6.2rem); line-height: 0.95; letter-spacing: -0.04em;`), editorial subcopy, dual CTA cluster, and trust metrics bar.
   - Right 5 columns: Interactive 3D-tilting showcase card stack (`transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))`) referencing `./05_Web_Stilleri/bento-grid.jpg` with live floating UI widgets and color swatch chips (`#00F0FF`, `#00F0FF`, `#090A0E`, `#204060`, `#4080E0`).
3. **Interactive Kinetic Marquee Strip (`<div class="style-marquee">`):**
   - Full-bleed infinite horizontal scrolling ticker (`animation: marquee 28s linear infinite`) separating the hero from the feature grid.
4. **6-Card Bento Feature Matrix (`<section class="style-bento">`):**
   - 12-column responsive Bento layout (`span 8`, `span 4`, `span 4`, `span 4`, `span 4`) demonstrating interactive components built strictly in the **Bento Grid — Shaz Agency Web Design Specification** aesthetic (live toggle switches, animated progress meters, data visualization sparklines, interactive tabs, and micro-badges).
5. **Interactive Typography & Palette Inspector (`<section class="style-tokens">`):**
   - Live specimen showcase displaying Display (`H1`–`H4`), Body, and Monospace scales Alongside clickable color token cards for `#00F0FF`, `#00F0FF`, `#090A0E`, `#204060`, and `#4080E0` that copy HEX codes to the clipboard.
6. **Monumental Footer (`<footer class="style-footer">`):**
   - Full-width newsletter/command input, 4-column sitemap directory, and edge-to-edge watermark typography (`BENTO GRID — VISION WEB DESIGNER SPECIFICATION`).

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
- **NEVER** use generic Bootstrap/Tailwind default white cards or unstyled borders; every single container, shadow, border, and button must strictly obey the **Bento Grid — Shaz Agency Web Design Specification** visual rules above.
- **NEVER** truncate sections or use placeholder `"Calibrated production narrative"` copy. Deliver a complete, runnable, multi-section production page.


═══ 7. MASTER COMPONENT & MOTION SYSTEM SPECIFICATION (BENTO GRID — VISION WEB DESIGNER SPECIFICATION) ═══

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
  color: #00F0FF;
  background: #00F0FF;
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
  box-shadow: 0 18px 40px -8px #090A0E55;
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
    radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #090A0E1f, transparent 40%),
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
  border-color: #090A0E66;
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
   - Brand emblem (`BENTO GRID — VISION WEB DESIGNER SPECIFICATION`), live operational status indicator (`<span class="pulse-dot"></span> ONLINE`), 4 section jump-links with active scroll-spy indicator, and primary action button.
2. **Hero Stage (`100vh` Full-Viewport):**
   - High-contrast display headline split into staggered `<span class="word-reveal">` elements animated via `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Bottom-anchored telemetry bar displaying 4 live architectural metrics (`LATENCY: 0.4ms`, `RENDER: 60 FPS`, `ACCENT: #090A0E`, `BUILD: PRODUCTION`).
3. **Interactive Feature Bento Matrix (`Section 02`):**
   - **Cell 01 (Span 7):** Live interactive parameter controller allowing the user to toggle visual modes (`Cinema Mode`, `Wireframe / Telemetry HUD`, `High-Contrast Editorial`) with instant DOM state updates.
   - **Cell 02 (Span 5):** Animated SVG data visualization & real-time waveform graph rendered in `#090A0E` and `#204060` gradients.
   - **Cell 03 (Span 5):** Interactive token & typography inspector showing live font weights (`Space Grotesk 700`, `Inter 400`, `JetBrains Mono 500`) and clickable color swatches (`#00F0FF`, `#00F0FF`, `#090A0E`, `#204060`).
   - **Cell 04 (Span 7):** Expandable architectural specification accordion with keyboard navigation support (`ArrowUp`, `ArrowDown`, `Enter`).
4. **Horizontal Velocity Ticker & Social Proof (`Section 03`):**
   - Continuous dual-direction CSS/JS velocity marquee (`transform: translate3d(...)`) that accelerates proportionally to the user's Lenis scroll velocity (`lenis.velocity`).
5. **Interactive FAQ & Technical Specifications Table (`Section 04`):**
   - Structured specification matrix comparing performance metrics, shader passes, and responsive breakpoints, paired with smooth height-interpolated accordion items.
6. **Monumental Footer (`Section 05`):**
   - Oversized background watermark (`BENTO GRID — VISION WEB DESIGNER SPECIFICATION` in `clamp(5rem, 16vw, 15rem)`), newsletter command bar with instant validation toast, and 4-column navigation links.

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



