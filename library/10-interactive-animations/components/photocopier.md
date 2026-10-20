# Photocopier — a copy-to-clipboard button that earns the click

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Bileşen` · **Kategori:** `Form` (form)  
> **Canlı Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/photocopier.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/photocopier.jpg)  
> **Teknoloji:** `vanilla, css, svg` · **Bağımlılık:** `0` · **Boyut:** `8.5 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

Copy to clipboard, made physical: a xerox light-bar sweeps the content, the machine chugs, and a warm duplicate slides out into the tray. Real clipboard write, execCommand fallback, keyboard + reduced-motion. No dependencies.

* **Önemli Dosyalar:** `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `320ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Photocopier — a copy-to-clipboard button that earns the click.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: Copy to clipboard, made physical: a xerox light-bar sweeps the content, the machine chugs, and a warm duplicate slides out into the tray. Real clipboard write, execCommand fallback, keyboard + reduced-motion. No dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-photocopier-container" data-state="idle">
  <button class="cc-photocopier-trigger" type="button" aria-label="Photocopier">
    <span class="cc-photocopier-content">
      <span class="cc-photocopier-label">Photocopier</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-photocopier-container {
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

.cc-photocopier-trigger {
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

.cc-photocopier-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-photocopier-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Photocopier — a copy-to-clipboard button that earns the click
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-photocopier-container');
const trigger = document.querySelector('.cc-photocopier-trigger');

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
