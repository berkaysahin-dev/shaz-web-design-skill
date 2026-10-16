# Halo — Sound, Elevated

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Düzen ve Kartlar` (layout)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/halo.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/halo.jpg)  
> **Tech Stack:** `vanilla, css, svg, gsap` · **Dependencies:** `1` · **Size:** `6.4 KB`

---

## 1. Architectural Overview & Specification

A product-card template for a headphone line called HALO: three cards with floating headphone photos, spinning accent rings and animated equalizers. Cards rise in with a staggered 3D GSAP entrance, then tilt toward the cursor with a glare via bundled vanilla-tilt. Hovering lifts the headphones forward, pulses sound-wave rings and pulls the Buy label toward the pointer. A dark/light toggle is included, and reduced motion drops the entrance, tilt and loops. Requires GSAP.

* **Key Files:** `index.html`, `script.js`, `style.css`, `vanilla-tilt.min.js`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Halo — Sound, Elevated.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A product-card template for a headphone line called HALO: three cards with floating headphone photos, spinning accent rings and animated equalizers. Cards rise in with a staggered 3D GSAP entrance, then tilt toward the cursor with a glare via bundled vanilla-tilt. Hovering lifts the headphones forward, pulses sound-wave rings and pulls the Buy label toward the pointer. A dark/light toggle is included, and reduced motion drops the entrance, tilt and loops. Requires GSAP.
- Stack: vanilla, css, svg, gsap.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-halo-container" data-state="idle">
  <button class="cc-halo-trigger" type="button" aria-label="Halo">
    <span class="cc-halo-content">
      <span class="cc-halo-label">Halo</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-halo-container {
  --cc-timing: 320ms;
  --cc-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --cc-bg: #141413;
  --cc-fg: #f6f5f1;
  --cc-accent: #af00fd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cc-halo-trigger {
  background: var(--cc-bg);
  color: var(--cc-fg);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 12px 24px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: transform var(--cc-timing) var(--cc-ease), background var(--cc-timing) var(--cc-ease);
  will-change: transform;
}

.cc-halo-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-halo-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Halo — Sound, Elevated
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-halo-container');
const trigger = document.querySelector('.cc-halo-trigger');

if (trigger && container) {
  trigger.addEventListener('click', () => {
    const current = container.dataset.state;
    container.dataset.state = current === 'active' ? 'idle' : 'active';
  });
}
```

---

## 4. Entegrasyon Notları (Vanilla, React & Next.js)

1. **Vanilla JS:** `index.html` içerisindeki iskeleti sayfanıza kopyalayın, `app.css` ve `app.js` dosyalarını bağlayın.
2. **React:** Sınıf adlarını `className` olarak güncelleyin ve tetikleme olaylarını `useEffect` veya `framer-motion` variantlarına bağlayın.
3. **Performans:** Transform ve opacity özellikleri haricinde layout thrashing yaratacak özelliklerden (`top`, `left`, `margin`) kaçının; donanım hızlandırmalı GPU katmanlarını koruyun.

