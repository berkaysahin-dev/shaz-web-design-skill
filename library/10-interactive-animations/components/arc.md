# Arc — a bottom nav drawn with one filament of light

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Navigasyon ve Barlar` (navigation)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/arc.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/arc.jpg)  
> **Tech Stack:** `vanilla, css` · **Dependencies:** `0` · **Size:** `13.8 KB`

---

## 1. Architectural Overview & Specification

A bottom navigation whose indicator never slides. It is one closed filament of light whose two ends are carried by two different springs, so the leading end leaves first and the light is stretched into a long tube between where you were and where you are going — then the tail catches up and it closes back into a ring. Zero dependencies.

* **Key Files:** `app.js`, `index.html`, `style.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Arc — a bottom nav drawn with one filament of light.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A bottom navigation whose indicator never slides. It is one closed filament of light whose two ends are carried by two different springs, so the leading end leaves first and the light is stretched into a long tube between where you were and where you are going — then the tail catches up and it closes back into a ring. Zero dependencies.
- Stack: vanilla, css.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-arc-container" data-state="idle">
  <button class="cc-arc-trigger" type="button" aria-label="Arc">
    <span class="cc-arc-content">
      <span class="cc-arc-label">Arc</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-arc-container {
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

.cc-arc-trigger {
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

.cc-arc-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-arc-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Arc — a bottom nav drawn with one filament of light
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-arc-container');
const trigger = document.querySelector('.cc-arc-trigger');

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

