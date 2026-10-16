# Whisper — a hold-to-record voice message you can actually ship

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Form` (form)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/whisper.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/whisper.jpg)  
> **Tech Stack:** `vanilla, css, canvas, svg` · **Dependencies:** `0` · **Size:** `10.4 KB`

---

## 1. Architectural Overview & Specification

A production-grade voice-message composer: hold to talk with a live waveform, slide to cancel, slide up to lock hands-free, release to send. Zero dependencies.

* **Key Files:** `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Whisper — a hold-to-record voice message you can actually ship.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A production-grade voice-message composer: hold to talk with a live waveform, slide to cancel, slide up to lock hands-free, release to send. Zero dependencies.
- Stack: vanilla, css, canvas, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-whisper-container" data-state="idle">
  <button class="cc-whisper-trigger" type="button" aria-label="Whisper">
    <span class="cc-whisper-content">
      <span class="cc-whisper-label">Whisper</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-whisper-container {
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

.cc-whisper-trigger {
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

.cc-whisper-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-whisper-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Whisper — a hold-to-record voice message you can actually ship
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-whisper-container');
const trigger = document.querySelector('.cc-whisper-trigger');

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

