# Animated Signature (Canlı Çizilen SVG İmza) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Yükleyiciler ve Animasyon` (`Loaders & Animation`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, SVG Path Animation, Motion` · **Fizik:** `Stroke-dashoffset animation: dasharray length calculation with easeInOut cubic-bezier(0.65, 0, 0.35, 1) duration: 1.4s`  
> **Etiketler:** `SVG Signature, Stroke Draw Animation, Handwritten, Vector Path, Editorial`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Sayfa yüklendiğinde veya tetiklendiğinde dolmakalem akıcılığıyla kendisini çizen vektörel SVG imza bileşeni.

A reusable SVG signature component that draws itself on mount.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Stroke-dashoffset animation: dasharray length calculation with easeInOut cubic-bezier(0.65, 0, 0.35, 1) duration: 1.4s`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Animated Signature" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Animated Signature (Canlı Çizilen SVG İmza)
- Category: Loaders & Animation
- Core Philosophy: A reusable SVG signature component that draws itself on mount.
- Motion & Spring Physics: Stroke-dashoffset animation: dasharray length calculation with easeInOut cubic-bezier(0.65, 0, 0.35, 1) duration: 1.4s
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, SVG Path Animation, Motion.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/Signature.tsx`)
```tsx
import { cn } from "@/helpers/classname-helper";

const DEFAULT_SIGNATURE_PATH =
  "M126.4 164.1 C166.4 156.1 259 148.8 283 148.8 C324.3 150 299 276.7 295.5 324.1 C289.2 368.9 262.9 382.1 233.3 337.2 C213.9 310 221.2 240 360.2 244.9 C362 288.1 349.3 387.5 344.7 458.2 C344.7 458.2 348.9 289.8 382.8 245.7 C404.5 222.9 450.3 223.3 442.3 269.4 C414.9 328.6 344.9 333.4 316.2 334.3 C340.2 334.3 547.2 320.3 571.2 320.3";
const DEFAULT_SIGNATURE_EASING = "cubic-bezier(0.2, 0.2, 0.8, 0.9)";

type SignatureProps = {
  path?: string;
  viewBox?: string;
  size?: number | string;
  strokeWidth?: number;
  duration?: number | string;
  delay?: number | string;
  easing?: string;
  className?: string;
  ariaLabel?: string;
};

function toCssTime(value: number | string) {
  return typeof value === "number" ? `${value}s` : value;
}

export function Signature({
  path = DEFAULT_SIGNATURE_PATH,
  viewBox = "0 0 900 460",
  size = "100%",
  strokeWidth = 10,
  duration = 2.8,
  delay = 0,
  easing = DEFAULT_SIGNATURE_EASING,
  className,
  ariaLabel = "Animated signature",
}: SignatureProps) {
  const width = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      aria-label={ariaLabel}
      className={cn("block overflow-visible", className)}
      role="img"
      style={{ width, height: "auto" }}
      viewBox={viewBox}
    >
      <path
        className="dqnamo-signature-stroke"
        d={path}
        pathLength={1}
        style={{
          animationDelay: toCssTime(delay),
          animationDuration: toCssTime(duration),
          animationTimingFunction: easing,
          strokeWidth,
        }}
      />

      <style>{`
        .dqnamo-signature-stroke {
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation-name: dqnamo-draw-signature;
          animation-fill-mode: forwards;
        }

        @keyframes dqnamo-draw-signature {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dqnamo-signature-stroke {
            animation-duration: 1ms !important;
            animation-delay: 0s !important;
          }
        }
      `}</style>
    </svg>
  );
}

export default Signature;

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/signature/signature-lab.tsx`)
```tsx
"use client";

import { useState } from "react";
import type { CodeLine } from "@/helpers/syntax";
import { SignatureCreator } from "./signature-creator";
import { SourcePanel } from "./source-panel";

type SignatureLabProps = {
  componentLines: CodeLine[];
  componentSource: string;
  usageLines: CodeLine[];
  usageSource: string;
};

export function SignatureLab({
  componentLines,
  componentSource,
  usageLines,
  usageSource,
}: SignatureLabProps) {
  const [signaturePath, setSignaturePath] = useState("");

  return (
    <>
      <SignatureCreator onPathChange={setSignaturePath} />
      <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
        <SourcePanel
          componentLines={componentLines}
          componentSource={componentSource}
          signaturePath={signaturePath}
          usageLines={usageLines}
          usageSource={usageSource}
        />
      </div>
    </>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const SIGNATURE_PATH_PLACEHOLDER = "__SIGNATURE_PATH__";

export const SIGNATURE_FALLBACK_PATH =
  "M60 200 Q180 60 300 180 T540 180 Q660 260 780 140 T940 180";

export const usageSource = `import { Signature } from "@/components/Signature";

export function MySignature() {
  return (
    <div className="w-64 text-grayscale-12">
      <Signature
        path="${SIGNATURE_PATH_PLACEHOLDER}"
        viewBox="0 0 1000 320"
        duration={1.4}
        strokeWidth={7}
      />
    </div>
  );
}
`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
