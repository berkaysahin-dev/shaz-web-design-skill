# Lamp — a lamp that wakes up, in CSS

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Mikro-Animasyonlar` (animation)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/lamp.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/lamp.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `7.6 KB`

---

## 1. Architectural Overview & Specification

A cartoon desk lamp drawn in SVG that dozes with its head drooped until you pull its cord. Drag the rope past its detent and the switch clicks, the head nods up and a cone of light pops on; let go and the cord springs back. A tap, Enter or Space does the same with a quick scripted yank and a click sound. Alongside the lamp, CSS and JS code panes reveal line by line. Reduced motion shows it lit and still; no runtime dependencies.

* **Key Files:** `index.html`, `lamp.css`, `lamp.js`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Lamp — a lamp that wakes up, in CSS.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A cartoon desk lamp drawn in SVG that dozes with its head drooped until you pull its cord. Drag the rope past its detent and the switch clicks, the head nods up and a cone of light pops on; let go and the cord springs back. A tap, Enter or Space does the same with a quick scripted yank and a click sound. Alongside the lamp, CSS and JS code panes reveal line by line. Reduced motion shows it lit and still; no runtime dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-lamp-container" data-state="idle">
  <button class="cc-lamp-trigger" type="button" aria-label="Lamp">
    <span class="cc-lamp-content">
      <span class="cc-lamp-label">Lamp</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-lamp-container {
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

.cc-lamp-trigger {
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

.cc-lamp-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-lamp-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Lamp — a lamp that wakes up, in CSS
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-lamp-container');
const trigger = document.querySelector('.cc-lamp-trigger');

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

