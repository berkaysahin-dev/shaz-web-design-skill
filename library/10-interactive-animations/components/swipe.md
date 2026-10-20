# Swipe — an iOS list row that shreds, and a list that springs shut

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Bileşen` · **Kategori:** `Navigasyon ve Barlar` (navigation)  
> **Canlı Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/swipe.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/swipe.jpg)  
> **Teknoloji:** `vanilla, css, svg` · **Bağımlılık:** `0` · **Boyut:** `15.9 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

Drag a row left, the trash mouth opens. Past the point of no return the row shreds into the mouth with paper physics and the list springs up to close the gap. Zero dependencies.

* **Önemli Dosyalar:** `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `320ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Swipe — an iOS list row that shreds, and a list that springs shut.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: Drag a row left, the trash mouth opens. Past the point of no return the row shreds into the mouth with paper physics and the list springs up to close the gap. Zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-swipe-container" data-state="idle">
  <button class="cc-swipe-trigger" type="button" aria-label="Swipe">
    <span class="cc-swipe-content">
      <span class="cc-swipe-label">Swipe</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-swipe-container {
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

.cc-swipe-trigger {
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

.cc-swipe-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-swipe-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Swipe — an iOS list row that shreds, and a list that springs shut
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-swipe-container');
const trigger = document.querySelector('.cc-swipe-trigger');

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
