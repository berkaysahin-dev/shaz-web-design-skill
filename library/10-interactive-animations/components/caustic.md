# Caustic — a delete button that dissolves what it eats

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Bileşen` · **Kategori:** `Form` (form)  
> **Canlı Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/caustic.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/caustic.jpg)  
> **Teknoloji:** `vanilla, css, svg` · **Bağımlılık:** `0` · **Boyut:** `13.6 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

Press it and the lid flips, the bin tips, and the letters of its own label are pulled in one by one. The pill furls into a disc and the work becomes visible: the level in the bin falls for exactly as long as the delete takes, inside a corona of caustic light. Every number was measured off the reference film frame by frame — the furl is 640ms on cubic-bezier(.72,0,.33,.95). Zero dependencies.

* **Önemli Dosyalar:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(.72,0,.33,.95)`
  - **Süre:** `640ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Caustic — a delete button that dissolves what it eats.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(.72,0,.33,.95) over 640ms.
- Description: Press it and the lid flips, the bin tips, and the letters of its own label are pulled in one by one. The pill furls into a disc and the work becomes visible: the level in the bin falls for exactly as long as the delete takes, inside a corona of caustic light. Every number was measured off the reference film frame by frame — the furl is 640ms on cubic-bezier(.72,0,.33,.95). Zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-caustic-container" data-state="idle">
  <button class="cc-caustic-trigger" type="button" aria-label="Caustic">
    <span class="cc-caustic-content">
      <span class="cc-caustic-label">Caustic</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-caustic-container {
  --cc-timing: 640ms;
  --cc-ease: cubic-bezier(.72,0,.33,.95);
  --cc-bg: #141413;
  --cc-fg: #f6f5f1;
  --cc-accent: #af00fd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cc-caustic-trigger {
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

.cc-caustic-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-caustic-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Caustic — a delete button that dissolves what it eats
// Physics: cubic-bezier(.72,0,.33,.95) @ 640ms
const container = document.querySelector('.cc-caustic-container');
const trigger = document.querySelector('.cc-caustic-trigger');

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
