# Iridescent Foil (Holografik Yanardöner Folyo Efekti) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Yükleyiciler ve Animasyon` (`Loaders & Animation`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, CSS Custom Properties, Blend Modes` · **Fizik:** `Conic & linear gradient angle interpolation based on pointer normalized coordinate: angle = atan2(dy, dx), blend-mode: color-dodge`  
> **Etiketler:** `Holographic Foil, Iridescence, Prism Shader, CSS Blend Modes, Luxury UI`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
İmleç ve kaydırma açısına göre spektrum renklerini yansıtan, metalik parlaklık ve prizmatik ışıma veren CSS holografik folyo katmanı.

A layered CSS foil treatment that reacts to scroll and pointer.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Conic & linear gradient angle interpolation based on pointer normalized coordinate: angle = atan2(dy, dx), blend-mode: color-dodge`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Iridescent Foil" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Iridescent Foil (Holografik Yanardöner Folyo Efekti)
- Category: Loaders & Animation
- Core Philosophy: A layered CSS foil treatment that reacts to scroll and pointer.
- Motion & Spring Physics: Conic & linear gradient angle interpolation based on pointer normalized coordinate: angle = atan2(dy, dx), blend-mode: color-dodge
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, CSS Custom Properties, Blend Modes.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/IridescentFoil.tsx`)
```tsx
"use client";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  useEffect,
  useRef,
} from "react";
import { cn } from "@/helpers/classname-helper";
import styles from "./IridescentFoil.module.css";

type ScrollProgressMode = "element" | "document";

type IridescentFoilCustomProperty =
  | "--foil-shift"
  | "--foil-y-shift"
  | "--glare-x"
  | "--glare-y"
  | "--pointer-x"
  | "--pointer-y"
  | "--shine-angle"
  | "--shine-opacity";

type IridescentFoilStyle = CSSProperties &
  Record<IridescentFoilCustomProperty, string>;

type IridescentFoilProps = ComponentPropsWithoutRef<"div"> & {
  scrollProgressMode?: ScrollProgressMode;
};

const initialStyle: IridescentFoilStyle = {
  "--foil-shift": "0%",
  "--foil-y-shift": "0%",
  "--glare-x": "50%",
  "--glare-y": "50%",
  "--pointer-x": "50%",
  "--pointer-y": "50%",
  "--shine-angle": "135deg",
  "--shine-opacity": "0.62",
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function toPercent(value: number) {
  return `${Number((value * 100).toFixed(3))}%`;
}

function toDegrees(value: number) {
  return `${Number(value.toFixed(3))}deg`;
}

function toUnitless(value: number) {
  return `${Number(value.toFixed(3))}`;
}

function getElementScrollProgress(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const visibleScrollRange = window.innerHeight + rect.height;

  return visibleScrollRange > 0
    ? clamp((window.innerHeight - rect.top) / visibleScrollRange, 0, 1)
    : 0;
}

function getDocumentScrollProgress() {
  const scrollingElement =
    document.scrollingElement ?? document.documentElement;
  const scrollRange = scrollingElement.scrollHeight - window.innerHeight;

  return scrollRange > 0
    ? clamp(scrollingElement.scrollTop / scrollRange, 0, 1)
    : 0;
}

function getElementPointer(event: PointerEvent, element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  return {
    x:
      rect.width > 0
        ? clamp((event.clientX - rect.left) / rect.width, 0.08, 0.92)
        : 0.5,
    y:
      rect.height > 0
        ? clamp((event.clientY - rect.top) / rect.height, 0.08, 0.92)
        : 0.5,
  };
}

function setFoilProperty(
  style: CSSStyleDeclaration,
  property: IridescentFoilCustomProperty,
  value: string,
) {
  style.setProperty(property, value);
}

export function IridescentFoil({
  children,
  className,
  scrollProgressMode = "element",
  style,
  ...props
}: IridescentFoilProps) {
  const foilRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const foil = foilRef.current;

    if (!foil) {
      return;
    }

    const applyEffect = () => {
      const { x, y } = pointerRef.current;
      const scrollProgress =
        scrollProgressMode === "document"
          ? getDocumentScrollProgress()
          : getElementScrollProgress(foil);
      const foilStyle = foil.style;

      setFoilProperty(
        foilStyle,
        "--foil-shift",
        toPercent(scrollProgress * 0.82 + (x - 0.5) * 0.18),
      );
      setFoilProperty(
        foilStyle,
        "--foil-y-shift",
        toPercent(scrollProgress * 0.28 + (y - 0.5) * 0.12),
      );
      setFoilProperty(foilStyle, "--glare-x", toPercent(x));
      setFoilProperty(foilStyle, "--glare-y", toPercent(y));
      setFoilProperty(foilStyle, "--pointer-x", toPercent(x));
      setFoilProperty(foilStyle, "--pointer-y", toPercent(y));
      setFoilProperty(
        foilStyle,
        "--shine-angle",
        toDegrees(105 + scrollProgress * 80 + (x - 0.5) * 28),
      );
      setFoilProperty(
        foilStyle,
        "--shine-opacity",
        toUnitless(0.56 + Math.abs(x - 0.5) * 0.24 + scrollProgress * 0.12),
      );

      frameRef.current = null;
    };

    const scheduleEffect = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(applyEffect);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = getElementPointer(event, foil);

      scheduleEffect();
    };

    const handleScroll = () => {
      scheduleEffect();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleEffect, { passive: true });
    scheduleEffect();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleEffect);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [scrollProgressMode]);

  return (
    <div
      {...props}
      ref={foilRef}
      className={cn(styles.surface, className)}
      style={{ ...initialStyle, ...style }}
    >
      <span aria-hidden className={styles.foil} />
      <span aria-hidden className={styles.film} />
      <span aria-hidden className={styles.pearl} />
      <div className={styles.content}>{children}</div>
      <span aria-hidden className={styles.shine} />
      <span aria-hidden className={styles.glare} />
    </div>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/iridescent-foil/page.tsx`)
```tsx
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Arvo } from "next/font/google";
import { ExperimentPage } from "@/app/experiments/_components/ExperimentPage";
import { IridescentFoil } from "@/components/IridescentFoil";
import { tokenize } from "@/helpers/syntax";
import { CopyActions } from "./copy-actions";
import { buildAgentPrompt, buildMarkdown } from "./copy-content";
import { SourcePanel } from "./source-panel";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function IridescentFoilPage() {
  const [tsxSource, cssSource] = await Promise.all([
    readFile(join(process.cwd(), "components/IridescentFoil.tsx"), "utf-8"),
    readFile(
      join(process.cwd(), "components/IridescentFoil.module.css"),
      "utf-8",
    ),
  ]);
  const [tsxLines, cssLines] = await Promise.all([
    tokenize(tsxSource, "tsx"),
    tokenize(cssSource, "css"),
  ]);
  const agentPrompt = buildAgentPrompt(tsxSource, cssSource);
  const markdown = buildMarkdown(tsxSource, cssSource);

  return (
    <ExperimentPage
      description="Holographic foil built from layered CSS gradients. Scroll the page and move your pointer to shift the iridescent colour and specular glare across the sticker."
      headerExtra={
        <div className="mt-4">
          <CopyActions agentPrompt={agentPrompt} markdown={markdown} />
        </div>
      }
      slug="iridescent-foil"
      title="Iridescent Foil"
    >
          <div className="w-full p-28 flex items-center justify-center bg-grayscale-1 dark:bg-grayscale-2 dark:border-transparent dark:shadow-none rounded-[13px] small-shadow border border-grayscale-3">
            <IridescentFoil
              aria-label="Interactive iridescent foil sticker"
              className="group h-40 w-72 cursor-pointer rounded-xl shadow-sm"
              role="img"
              scrollProgressMode="document"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-start p-3">
                  <p className="font-mono font-semibold text-[10px] text-grayscale-8 uppercase leading-none">
                    A product by
                  </p>
                </div>
                <div
                  className={`${arvo.className} flex h-full w-full flex-col items-center justify-center gap-px text-center text-grayscale-12 uppercase leading-none`}
                >
                  <span className="mb-px font-medium text-grayscale-9 text-xs leading-none transition-colors duration-200 group-hover:text-grayscale-11">
                    THE
                  </span>
                  <span className="font-medium text-grayscale-11 text-xl leading-none transition-colors duration-200 group-hover:text-grayscale-12">
                    INTERFACE
                  </span>
                  <span className="font-medium text-grayscale-11 text-xl leading-none transition-colors duration-200 group-hover:text-grayscale-12">
                    COMPANY
                  </span>
                  <span className="mt-px font-medium text-grayscale-9 text-xs leading-none transition-colors duration-200 group-hover:text-grayscale-11">
                    OF LONDON
                  </span>
                </div>
                <div className="flex items-center justify-end p-3">
                  <div className="flex size-5 items-center justify-center bg-grayscale-7/30 rounded-full transition-colors duration-200 group-hover:bg-blue-9">
                    <ArrowRightIcon
                      className="size-3 text-grayscale-11 transition-colors duration-200 dark:group-hover:text-grayscale-12 group-hover:text-grayscale-1"
                      weight="bold"
                    />
                  </div>
                </div>
              </div>
            </IridescentFoil>
          </div>
          <div className="w-full overflow-hidden bg-grayscale-1 dark:bg-grayscale-3 dark:border-grayscale-4 rounded-[13px] small-shadow border border-grayscale-3">
            <SourcePanel
              cssLines={cssLines}
              cssSource={cssSource}
              tsxLines={tsxLines}
              tsxSource={tsxSource}
            />
          </div>
    </ExperimentPage>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
const TITLE = "Iridescent Foil";
const DESCRIPTION =
  "Holographic foil built from layered CSS gradients. Scroll the page and move your pointer to shift the iridescent colour and specular glare across the sticker.";

export function buildAgentPrompt(tsxSource: string, cssSource: string) {
  return `Implement an iridescent foil UI component in React.

${DESCRIPTION}

Create these two files:

## IridescentFoil.tsx

\`\`\`tsx
${tsxSource}
\`\`\`

## IridescentFoil.module.css

\`\`\`css
${cssSource}
\`\`\`

The component should:
- Wrap arbitrary children with layered CSS gradient foil, film, pearl, shine, and glare effects
- Update CSS custom properties (--foil-shift, --pointer-x, etc.) on scroll and pointermove
- Accept scrollProgressMode "element" (scroll progress relative to the element) or "document" (page scroll)
- Use requestAnimationFrame to batch DOM updates
`;
}

export function buildMarkdown(tsxSource: string, cssSource: string) {
  return `# ${TITLE}

${DESCRIPTION}

## IridescentFoil.tsx

\`\`\`tsx
${tsxSource}
\`\`\`

## IridescentFoil.module.css

\`\`\`css
${cssSource}
\`\`\`
`;
}

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `components/IridescentFoil.module.css`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
