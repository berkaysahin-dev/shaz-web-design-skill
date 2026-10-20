# Love Letter — a cute interactive pixel-art love letter celebrating one month of marriage

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Mikro-Animasyonlar` (animation)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/love-letter/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/love-letter.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/love-letter.jpg)  
> **Teknoloji:** `vanilla, css, canvas` · **Bağımlılık:** `0` · **Boyut:** `13.5 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A pixel-art love letter in two acts: shoot Cupid's arrow at a floating envelope, then answer the question inside. Hold to draw the bow, aim and release; the arrow arcs with a heart trail, and Space or Enter fires a shot that always lands. Inside, a canvas-drawn pixel cat blinks while NO runs from hover, tap and focus and YES grows. Saying yes fires heart-confetti cannons from the bottom corners. Zero dependencies; reduced motion skips the flight and confetti.

* **Önemli Dosyalar:** `index.html`, `love.css`, `love.js`, `record5.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Love Letter — a cute interactive pixel-art love letter celebrating one month of marriage.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A pixel-art love letter in two acts: shoot Cupid's arrow at a floating envelope, then answer the question inside. Hold to draw the bow, aim and release; the arrow arcs with a heart trail, and Space or Enter fires a shot that always lands. Inside, a canvas-drawn pixel cat blinks while NO runs from hover, tap and focus and YES grows. Saying yes fires heart-confetti cannons from the bottom corners. Zero dependencies; reduced motion skips the flight and confetti.
- Stack: vanilla, css, canvas.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-love-letter-container" data-state="idle">
  <button class="cc-love-letter-trigger" type="button" aria-label="Love Letter">
    <span class="cc-love-letter-content">
      <span class="cc-love-letter-label">Love Letter</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-love-letter-container {
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

.cc-love-letter-trigger {
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

.cc-love-letter-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-love-letter-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Love Letter — a cute interactive pixel-art love letter celebrating one month of marriage
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-love-letter-container');
const trigger = document.querySelector('.cc-love-letter-trigger');

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
