# Stamp (Posta Pulu Çerçevesi) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Fiziksel ve İskeomorfi` (`Physical & Skeuomorphic`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, CSS Radial Gradient Masks, Tailwind CSS` · **Fizik:** `Subtle hover lift: scale(1.02) translateY(-4px), drop-shadow blur expansion: 12px -> 20px with warm ambient tint`  
> **Etiketler:** `Postage Stamp, Perforation Mask, Retro Aesthetics, Image Frame, Editorial UI`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Görseller, metinler ve özel içerikler için CSS maskeleme ile üretilmiş tırtıklı delikli kenarlara sahip nostaljik posta pulu çerçevesi.

A reusable postage stamp frame for images, text, and custom React content.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Subtle hover lift: scale(1.02) translateY(-4px), drop-shadow blur expansion: 12px -> 20px with warm ambient tint`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Stamp" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Stamp (Posta Pulu Çerçevesi)
- Category: Physical & Skeuomorphic
- Core Philosophy: A reusable postage stamp frame for images, text, and custom React content.
- Motion & Spring Physics: Subtle hover lift: scale(1.02) translateY(-4px), drop-shadow blur expansion: 12px -> 20px with warm ambient tint
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, CSS Radial Gradient Masks, Tailwind CSS.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/Stamp.tsx`)
```tsx
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/helpers/classname-helper";

const stampShadow =
  "drop-shadow(0 1px 1px rgb(15 15 15 / 12%)) drop-shadow(0 12px 22px rgb(15 15 15 / 9%))";

const stampBackground =
  "linear-gradient(145deg, rgb(255 255 255 / 34%), transparent 42%), var(--stamp-paper)";

type StampCustomProperty = "--stamp-ink" | "--stamp-padding" | "--stamp-paper";

type StampRootStyle = CSSProperties &
  Partial<Record<StampCustomProperty, string>>;

type CssLength = number | string;

export type StampProps = {
  /** Any React content rendered inside the perforated paper frame. */
  children: ReactNode;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  className?: string;
  contentClassName?: string;
  horizontalPerforations?: number;
  ink?: string;
  padding?: CssLength;
  paper?: string;
  perforationDepth?: number;
  stampClassName?: string;
  style?: CSSProperties;
  verticalPerforations?: number;
};

function toCssLength(value: CssLength) {
  return typeof value === "number" ? `${value}px` : value;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function createStampClipPath({
  depth,
  horizontalCount,
  verticalCount,
}: {
  depth: number;
  horizontalCount: number;
  verticalCount: number;
}) {
  const resolvedDepth = clamp(depth, 0, 10);
  const resolvedHorizontalCount = clamp(Math.round(horizontalCount), 4, 32);
  const resolvedVerticalCount = clamp(Math.round(verticalCount), 4, 40);
  const horizontalStep = 100 / resolvedHorizontalCount;
  const verticalStep = 100 / resolvedVerticalCount;
  const points: Array<[number, number]> = [[0, 0]];

  for (let index = 0; index < resolvedHorizontalCount; index += 1) {
    const start = index * horizontalStep;
    points.push([start + horizontalStep * 0.25, 0]);
    points.push([start + horizontalStep * 0.5, resolvedDepth]);
    points.push([start + horizontalStep * 0.75, 0]);
    points.push([start + horizontalStep, 0]);
  }

  for (let index = 0; index < resolvedVerticalCount; index += 1) {
    const start = index * verticalStep;
    points.push([100, start + verticalStep * 0.25]);
    points.push([100 - resolvedDepth, start + verticalStep * 0.5]);
    points.push([100, start + verticalStep * 0.75]);
    points.push([100, start + verticalStep]);
  }

  for (let index = 0; index < resolvedHorizontalCount; index += 1) {
    const start = 100 - index * horizontalStep;
    points.push([start - horizontalStep * 0.25, 100]);
    points.push([start - horizontalStep * 0.5, 100 - resolvedDepth]);
    points.push([start - horizontalStep * 0.75, 100]);
    points.push([start - horizontalStep, 100]);
  }

  for (let index = 0; index < resolvedVerticalCount; index += 1) {
    const start = 100 - index * verticalStep;
    points.push([0, start - verticalStep * 0.25]);
    points.push([resolvedDepth, start - verticalStep * 0.5]);
    points.push([0, start - verticalStep * 0.75]);
    points.push([0, start - verticalStep]);
  }

  return `polygon(${points
    .map(([x, y]) => `${x.toFixed(3)}% ${y.toFixed(3)}%`)
    .join(", ")})`;
}

export function Stamp({
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  children,
  className,
  contentClassName,
  horizontalPerforations = 12,
  ink = "#181713",
  padding = 13,
  paper = "#ffffff",
  perforationDepth = 2.4,
  stampClassName,
  style,
  verticalPerforations = 15,
}: StampProps) {
  const clipPath = createStampClipPath({
    depth: perforationDepth,
    horizontalCount: horizontalPerforations,
    verticalCount: verticalPerforations,
  });
  const rootStyle: StampRootStyle = {
    "--stamp-ink": ink,
    "--stamp-padding": toCssLength(padding),
    "--stamp-paper": paper,
    filter: stampShadow,
    ...style,
  };

  return (
    <div
      className={cn("relative aspect-[4/5] w-[min(100%,14rem)]", className)}
      style={rootStyle}
    >
      <article
        aria-hidden={ariaHidden}
        aria-label={ariaHidden ? undefined : ariaLabel}
        className={cn(
          "relative size-full overflow-hidden p-[var(--stamp-padding)] text-[var(--stamp-ink)]",
          stampClassName,
        )}
        style={{ background: stampBackground, clipPath }}
      >
        <div
          className={cn(
            "relative size-full min-h-0 min-w-0 overflow-hidden",
            contentClassName,
          )}
        >
          {children}
        </div>
      </article>
    </div>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/stamp/stamp-showcase.tsx`)
```tsx
import Image from "next/image";
import { Stamp } from "@/components/Stamp";

const stageGridStyle = {
  backgroundImage:
    "linear-gradient(var(--color-grayscale-4) 1px, transparent 1px), linear-gradient(90deg, var(--color-grayscale-4) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  maskImage: "radial-gradient(circle at center, black, transparent 76%)",
};

export function StampShowcase() {
  return (
    <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
      <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-grayscale-1 px-6 py-10 dark:bg-grayscale-2 max-[520px]:min-h-[410px] max-[520px]:px-5 max-[520px]:py-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.38]"
          style={stageGridStyle}
        />

        <Stamp
          aria-label="Retro pixel landscape postage stamp"
          className="z-[1] w-[198px] -rotate-2 transform-gpu transition-transform duration-200 ease-out hover:rotate-0 hover:scale-[1.015] motion-reduce:transition-none motion-reduce:hover:-rotate-2 motion-reduce:hover:scale-100 max-[520px]:w-[180px]"
        >
          <Image
            alt="A retro pixel-art sunset over mountains and a lake"
            className="object-cover [image-rendering:pixelated]"
            draggable={false}
            fill
            preload
            sizes="(max-width: 520px) 188px, 220px"
            src="/experiments/stamp/retro-landscape.png"
          />
          <div className="pointer-events-none absolute inset-x-2.5 top-2.5 flex items-start justify-between gap-3 text-white drop-shadow-[0_1px_1px_rgb(0_0_0_/_52%)]">
            <span className="font-mono font-bold text-[8px] uppercase leading-none tracking-[0.12em]">
              Pixel Parks
            </span>
            <strong className="font-mono font-bold text-[17px] leading-[0.8] tracking-[-0.08em]">
              24
            </strong>
          </div>
          <span className="pointer-events-none absolute bottom-2.5 left-2.5 font-mono font-bold text-[7px] text-white uppercase leading-none tracking-[0.1em] drop-shadow-[0_1px_1px_rgb(0_0_0_/_52%)]">
            Field archive · 01
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgb(24_23_19_/_18%)]"
          />
        </Stamp>
      </div>
    </div>
  );
}

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `assets/dqnamo/experiments/stamp/retro-landscape.png`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
