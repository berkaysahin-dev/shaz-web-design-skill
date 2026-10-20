# Posy — a cat, a flower, and a surprise

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Mikro-Animasyonlar` (animation)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/posy/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/posy.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/posy.jpg)  
> **Teknoloji:** `vanilla, css, canvas, svg` · **Bağımlılık:** `0` · **Boyut:** `11.8 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

An interactive birthday card template: a chalk-drawn cat holds out a flower, the only colour on the page, to a stick figure in a party hat with his back turned. Drag it over and the cat's arm follows, he turns round and reaches for it, and Happy birthday arrives letter by letter with a canvas confetti burst. Miss and it springs back; Enter or Space gives it for you. Zero dependencies, one SVG and one canvas; reduced motion drops the travel and confetti.

* **Önemli Dosyalar:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Posy — a cat, a flower, and a surprise.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: An interactive birthday card template: a chalk-drawn cat holds out a flower, the only colour on the page, to a stick figure in a party hat with his back turned. Drag it over and the cat's arm follows, he turns round and reaches for it, and Happy birthday arrives letter by letter with a canvas confetti burst. Miss and it springs back; Enter or Space gives it for you. Zero dependencies, one SVG and one canvas; reduced motion drops the travel and confetti.
- Stack: vanilla, css, canvas, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-posy-container" data-state="idle">
  <button class="cc-posy-trigger" type="button" aria-label="Posy">
    <span class="cc-posy-content">
      <span class="cc-posy-label">Posy</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-posy-container {
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

.cc-posy-trigger {
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

.cc-posy-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-posy-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Posy — a cat, a flower, and a surprise
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-posy-container');
const trigger = document.querySelector('.cc-posy-trigger');

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
