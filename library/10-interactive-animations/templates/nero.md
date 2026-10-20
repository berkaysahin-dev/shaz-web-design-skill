# Nero — Single-origin dark chocolate

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/nero/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/nero.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/nero.jpg)  
> **Teknoloji:** `vanilla, css, gsap` · **Bağımlılık:** `1` · **Boyut:** `7.9 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A single-screen product picker template for a fictional chocolate brand, NÉRO, with four bars to switch between. Click a thumbnail or press the arrow keys and the bar turns away like a card while the next one swings in, the background and accent colour change, and the text crosses to the other side. Floating cacao beans bob, follow the cursor, and fly to new spots on each switch. Includes a custom cursor and an optional low drone sound. GSAP only; honours reduced motion.

* **Önemli Dosyalar:** `index.html`, `nero.css`, `nero.js`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Nero — Single-origin dark chocolate.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A single-screen product picker template for a fictional chocolate brand, NÉRO, with four bars to switch between. Click a thumbnail or press the arrow keys and the bar turns away like a card while the next one swings in, the background and accent colour change, and the text crosses to the other side. Floating cacao beans bob, follow the cursor, and fly to new spots on each switch. Includes a custom cursor and an optional low drone sound. GSAP only; honours reduced motion.
- Stack: vanilla, css, gsap.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-nero-container" data-state="idle">
  <button class="cc-nero-trigger" type="button" aria-label="Nero">
    <span class="cc-nero-content">
      <span class="cc-nero-label">Nero</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-nero-container {
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

.cc-nero-trigger {
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

.cc-nero-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-nero-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Nero — Single-origin dark chocolate
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-nero-container');
const trigger = document.querySelector('.cc-nero-trigger');

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
