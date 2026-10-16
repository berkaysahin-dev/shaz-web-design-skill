# Heartcode — a 3D heart made of a thousand “i love you”s

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Mikro-Animasyonlar` (animation)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/heartcode/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/heartcode.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/heartcode.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `5.5 KB`

---

## 1. Architectural Overview & Specification

A 3D heart made of the words i love you, built in plain DOM: JavaScript traces the heart curve into rows of text and stacks them in depth with CSS preserve-3d. The heart sways, double-thumps like a heartbeat and shimmers row by row. Moving the pointer over it tilts the heart toward the cursor. Two mock code panels beside it reveal line by line, in a 9:16 frame ready to record. Reduced motion holds a still pose; zero dependencies.

* **Key Files:** `heart.css`, `heart.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Heartcode — a 3D heart made of a thousand “i love you”s.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A 3D heart made of the words i love you, built in plain DOM: JavaScript traces the heart curve into rows of text and stacks them in depth with CSS preserve-3d. The heart sways, double-thumps like a heartbeat and shimmers row by row. Moving the pointer over it tilts the heart toward the cursor. Two mock code panels beside it reveal line by line, in a 9:16 frame ready to record. Reduced motion holds a still pose; zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-heartcode-container" data-state="idle">
  <button class="cc-heartcode-trigger" type="button" aria-label="Heartcode">
    <span class="cc-heartcode-content">
      <span class="cc-heartcode-label">Heartcode</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-heartcode-container {
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

.cc-heartcode-trigger {
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

.cc-heartcode-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-heartcode-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Heartcode — a 3D heart made of a thousand “i love you”s
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-heartcode-container');
const trigger = document.querySelector('.cc-heartcode-trigger');

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

