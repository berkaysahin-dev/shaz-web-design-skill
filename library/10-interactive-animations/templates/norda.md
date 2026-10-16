# Norda — a one-page home-goods store that moves like a film

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Düzen ve Kartlar` (layout)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/norda/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/norda.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/norda.jpg)  
> **Tech Stack:** `vanilla, css, svg, gsap, lenis` · **Dependencies:** `2` · **Size:** `13.8 KB`

---

## 1. Architectural Overview & Specification

A one-page Nordic home-goods store: the hero grows the product out of a full-screen panel, a rail swaps the featured piece, add-to-cart flies the item into the bag, and a pinned room scene opens to full bleed. GSAP and Lenis, transform-only motion, with phone and reduced-motion layouts built in. All 19 photographs are included.

* **Key Files:** `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Norda — a one-page home-goods store that moves like a film.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A one-page Nordic home-goods store: the hero grows the product out of a full-screen panel, a rail swaps the featured piece, add-to-cart flies the item into the bag, and a pinned room scene opens to full bleed. GSAP and Lenis, transform-only motion, with phone and reduced-motion layouts built in. All 19 photographs are included.
- Stack: vanilla, css, svg, gsap, lenis.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-norda-container" data-state="idle">
  <button class="cc-norda-trigger" type="button" aria-label="Norda">
    <span class="cc-norda-content">
      <span class="cc-norda-label">Norda</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-norda-container {
  --cc-timing: 600ms;
  --cc-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --cc-bg: #141413;
  --cc-fg: #f6f5f1;
  --cc-accent: #af00fd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cc-norda-trigger {
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

.cc-norda-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-norda-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Norda — a one-page home-goods store that moves like a film
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-norda-container');
const trigger = document.querySelector('.cc-norda-trigger');

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

