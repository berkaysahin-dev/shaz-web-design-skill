# Nocturne — a glass sign-in over a moonlit parallax forest

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Form` (form)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/nocturne/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/nocturne.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/nocturne.jpg)  
> **Teknoloji:** `vanilla, css, svg` · **Bağımlılık:** `0` · **Boyut:** `5.1 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A glass sign-in card over a violet forest scene, with falling leaves, fireflies, slow aurora bands and a girl cycling back and forth. With a mouse, the background, trees and leaves shift in parallax and the card tilts under a sheen. The form has username, password with show/hide, remember me, forgot password, and Google and Apple buttons. Sign In runs a spinner, then a check and a status message. Reduced motion stops the scenery and hides the cyclist; zero dependencies.

* **Önemli Dosyalar:** `app.js`, `bg.jpg`, `girl.png`, `girl_orig.png`, `index.html`, `leaf_01.png`, `leaf_02.png`, `leaf_03.png`, `leaf_04.png`, `style.css`, `trees.png`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Nocturne — a glass sign-in over a moonlit parallax forest.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A glass sign-in card over a violet forest scene, with falling leaves, fireflies, slow aurora bands and a girl cycling back and forth. With a mouse, the background, trees and leaves shift in parallax and the card tilts under a sheen. The form has username, password with show/hide, remember me, forgot password, and Google and Apple buttons. Sign In runs a spinner, then a check and a status message. Reduced motion stops the scenery and hides the cyclist; zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-nocturne-container" data-state="idle">
  <button class="cc-nocturne-trigger" type="button" aria-label="Nocturne">
    <span class="cc-nocturne-content">
      <span class="cc-nocturne-label">Nocturne</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-nocturne-container {
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

.cc-nocturne-trigger {
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

.cc-nocturne-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-nocturne-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Nocturne — a glass sign-in over a moonlit parallax forest
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-nocturne-container');
const trigger = document.querySelector('.cc-nocturne-trigger');

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
