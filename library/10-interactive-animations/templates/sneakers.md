# Sneakers — Sneaker Collection

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/sneakers/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/sneakers.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/sneakers.jpg)  
> **Teknoloji:** `vanilla, css` · **Bağımlılık:** `0` · **Boyut:** `1.7 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A product carousel template for a fictional sneaker line, STRIDE Aurora, with six shoes arranged on a wheel. Press the next or previous arrow and the wheel turns 60 degrees, bringing the next shoe forward while its name, price, colour dots and description swap in. The page background changes to match each colourway. Plain JavaScript and CSS transitions, no npm dependencies; it does not check for reduced motion.

* **Önemli Dosyalar:** `index.html`, `script.js`, `style.css`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Sneakers — Sneaker Collection.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A product carousel template for a fictional sneaker line, STRIDE Aurora, with six shoes arranged on a wheel. Press the next or previous arrow and the wheel turns 60 degrees, bringing the next shoe forward while its name, price, colour dots and description swap in. The page background changes to match each colourway. Plain JavaScript and CSS transitions, no npm dependencies; it does not check for reduced motion.
- Stack: vanilla, css.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-sneakers-container" data-state="idle">
  <button class="cc-sneakers-trigger" type="button" aria-label="Sneakers">
    <span class="cc-sneakers-content">
      <span class="cc-sneakers-label">Sneakers</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-sneakers-container {
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

.cc-sneakers-trigger {
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

.cc-sneakers-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-sneakers-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Sneakers — Sneaker Collection
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-sneakers-container');
const trigger = document.querySelector('.cc-sneakers-trigger');

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
