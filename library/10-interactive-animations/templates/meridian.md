# Meridian — a portfolio dashboard that moves like a single instrument

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/meridian/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/meridian.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/meridian.jpg)  
> **Teknoloji:** `vanilla, css, svg, gsap` · **Bağımlılık:** `1` · **Boyut:** `13.2 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A dark wealth dashboard: one violet holdings card with a lime equity curve that redraws itself when you change the range, a watchlist that breathes, asset-mix tiles that fill from the floor, and a volatility gauge that swings to its number. GSAP-driven, transform and opacity only.

* **Önemli Dosyalar:** `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Meridian — a portfolio dashboard that moves like a single instrument.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A dark wealth dashboard: one violet holdings card with a lime equity curve that redraws itself when you change the range, a watchlist that breathes, asset-mix tiles that fill from the floor, and a volatility gauge that swings to its number. GSAP-driven, transform and opacity only.
- Stack: vanilla, css, svg, gsap.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-meridian-container" data-state="idle">
  <button class="cc-meridian-trigger" type="button" aria-label="Meridian">
    <span class="cc-meridian-content">
      <span class="cc-meridian-label">Meridian</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-meridian-container {
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

.cc-meridian-trigger {
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

.cc-meridian-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-meridian-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Meridian — a portfolio dashboard that moves like a single instrument
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-meridian-container');
const trigger = document.querySelector('.cc-meridian-trigger');

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
