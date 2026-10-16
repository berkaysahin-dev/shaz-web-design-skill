# Fathom — a live trading terminal with eight pages that move as one product

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Düzen ve Kartlar` (layout)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/fathom/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/fathom.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/fathom.jpg)  
> **Tech Stack:** `vanilla, css, svg, gsap` · **Dependencies:** `1` · **Size:** `68 KB`

---

## 1. Architectural Overview & Specification

Fathom is a crypto trading workspace: a live markets terminal with candles, order book and fills, plus portfolio, orders, wallets, alerts, activity, settings and help — one dark brass product that moves as one.

* **Key Files:** `app.css`, `app.js`, `index.html`, `js/activity.js`, `js/alerts.js`, `js/charts.js`, `js/data.js`, `js/help.js`, `js/markets.js`, `js/motion.js`, `js/orders.js`, `js/portfolio.js`, `js/prefs.js`, `js/settings.js`, `js/ui.js`, `js/wallets.js`, `views.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Fathom — a live trading terminal with eight pages that move as one product.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: Fathom is a crypto trading workspace: a live markets terminal with candles, order book and fills, plus portfolio, orders, wallets, alerts, activity, settings and help — one dark brass product that moves as one.
- Stack: vanilla, css, svg, gsap.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-fathom-container" data-state="idle">
  <button class="cc-fathom-trigger" type="button" aria-label="Fathom">
    <span class="cc-fathom-content">
      <span class="cc-fathom-label">Fathom</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-fathom-container {
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

.cc-fathom-trigger {
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

.cc-fathom-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-fathom-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Fathom — a live trading terminal with eight pages that move as one product
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-fathom-container');
const trigger = document.querySelector('.cc-fathom-trigger');

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

