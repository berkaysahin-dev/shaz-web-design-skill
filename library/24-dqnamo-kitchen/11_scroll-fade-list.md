# Scroll Fade List (Yumuşak Kenar Solmalı Liste) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Seçiciler ve Grafikler` (`Pickers & Visuals`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, CSS Mask-Image, IntersectionObserver` · **Fizik:** `Scroll listener gradient opacity ramp: linear 0 to 1 over first/last 40px scroll offset`  
> **Etiketler:** `Scroll Mask, Fade Overflow, List Container, Micro-interaction, Clean UI`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Kaydırma pozisyonuna göre üst ve alt sınırlarda yumuşak gradyan maskelemesi uygulayan kompakt liste arayüzü.

A compact list surface with a soft overflow fade.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Scroll listener gradient opacity ramp: linear 0 to 1 over first/last 40px scroll offset`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Scroll Fade List" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Scroll Fade List (Yumuşak Kenar Solmalı Liste)
- Category: Pickers & Visuals
- Core Philosophy: A compact list surface with a soft overflow fade.
- Motion & Spring Physics: Scroll listener gradient opacity ramp: linear 0 to 1 over first/last 40px scroll offset
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, CSS Mask-Image, IntersectionObserver.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`app/experiments/scroll-fade-list/scroll-fade-list.tsx`)
```tsx
"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type ScrollFadeListProps<TItem> = {
  getKey: (item: TItem) => string;
  items: readonly TItem[];
  renderItem: (item: TItem) => ReactNode;
  className?: string;
  maxFadeHeight?: number;
  scrollClassName?: string;
};

const defaultMaxFadeHeight = 76;

const teamItems = [
  {
    name: "South Africa",
    flag: "🇿🇦",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
  },
  {
    name: "Paraguay",
    flag: "🇵🇾",
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
  },
  {
    name: "Morocco",
    flag: "🇲🇦",
  },
  {
    name: "Ivory Coast",
    flag: "🇨🇮",
  },
  {
    name: "Norway",
    flag: "🇳🇴",
  },
  {
    name: "France",
    flag: "🇫🇷",
  },
  {
    name: "Sweden",
    flag: "🇸🇪",
  },
  {
    name: "Mexico",
    flag: "🇲🇽",
  },
  {
    name: "Ecuador",
    flag: "🇪🇨",
  },
  {
    name: "England",
    flag: "🏴",
  },
  {
    name: "DR Congo",
    flag: "🇨🇩",
  },
  {
    name: "Belgium",
    flag: "🇧🇪",
  },
  {
    name: "Senegal",
    flag: "🇸🇳",
  },
  {
    name: "United States",
    flag: "🇺🇸",
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
  },
  {
    name: "Spain",
    flag: "🇪🇸",
  },
  {
    name: "Austria",
    flag: "🇦🇹",
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
  },
  {
    name: "Croatia",
    flag: "🇭🇷",
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
  },
  {
    name: "Algeria",
    flag: "🇩🇿",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
  },
  {
    name: "Argentina",
    flag: "🇦🇷",
  },
  {
    name: "Cabo Verde",
    flag: "🇨🇻",
  },
  {
    name: "Colombia",
    flag: "🇨🇴",
  },
  {
    name: "Ghana",
    flag: "🇬🇭",
  },
] as const;

export function ScrollFadeList<TItem>({
  className = "relative w-full max-w-xs overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 [--scroll-fade-list-bg:var(--color-grayscale-1)] [--scrollbar-gutter-width:10px] dark:border-grayscale-4 dark:bg-grayscale-3 dark:[--scroll-fade-list-bg:var(--color-grayscale-3)]",
  getKey,
  items,
  maxFadeHeight = defaultMaxFadeHeight,
  renderItem,
  scrollClassName = "h-[390px] overflow-y-auto overscroll-contain [scrollbar-color:var(--color-grayscale-7)_transparent] [scrollbar-gutter:stable] [scrollbar-width:thin]",
}: ScrollFadeListProps<TItem>) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frameElement = frameRef.current;
    const scrollElement = scrollRef.current;
    let animationFrame = 0;

    if (!frameElement || !scrollElement) {
      return;
    }

    const updateFadeHeights = () => {
      const maxScrollTop = Math.max(
        0,
        scrollElement.scrollHeight - scrollElement.clientHeight,
      );
      const distanceFromTop = scrollElement.scrollTop;
      const distanceFromBottom = maxScrollTop - scrollElement.scrollTop;

      const topFadeHeight = Math.min(
        maxFadeHeight,
        Math.max(0, distanceFromTop),
      );
      const bottomFadeHeight = Math.min(
        maxFadeHeight,
        Math.max(0, distanceFromBottom),
      );

      frameElement.style.setProperty("--top-fade-height", `${topFadeHeight}px`);
      frameElement.style.setProperty(
        "--bottom-fade-height",
        `${bottomFadeHeight}px`,
      );
    };

    const scheduleFadeUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateFadeHeights);
    };

    updateFadeHeights();
    scrollElement.addEventListener("scroll", scheduleFadeUpdate, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(scheduleFadeUpdate);
    resizeObserver.observe(scrollElement);

    if (scrollElement.firstElementChild) {
      resizeObserver.observe(scrollElement.firstElementChild);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollElement.removeEventListener("scroll", scheduleFadeUpdate);
      resizeObserver.disconnect();
    };
  }, [maxFadeHeight]);

  return (
    <div
      className={`${className} [--bottom-fade-height:0px] [--top-fade-height:0px] before:pointer-events-none before:absolute before:top-0 before:right-[var(--scrollbar-gutter-width)] before:left-0 before:h-[var(--top-fade-height)] before:bg-linear-to-b before:from-[var(--scroll-fade-list-bg)] before:to-transparent before:content-[''] before:transition-[height] before:duration-75 before:ease-linear after:pointer-events-none after:absolute after:right-[var(--scrollbar-gutter-width)] after:bottom-0 after:left-0 after:h-[var(--bottom-fade-height)] after:bg-linear-to-b after:from-transparent after:to-[var(--scroll-fade-list-bg)] after:content-[''] after:transition-[height] after:duration-75 after:ease-linear`}
      ref={frameRef}
    >
      <div className={scrollClassName} ref={scrollRef}>
        <ol className="flex flex-col p-2">
          {items.map((item) => (
            <li
              className="flex min-h-10 min-w-0 items-center gap-2.5 rounded-control px-2.5 transition-colors hover:bg-grayscale-2 dark:hover:bg-grayscale-4"
              key={getKey(item)}
            >
              {renderItem(item)}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function ScrollFadeListShowcase() {
  return (
    <ScrollFadeList
      getKey={(item) => item.name}
      items={teamItems}
      renderItem={({ flag, name }) => (
        <>
          <span
            aria-hidden="true"
            className="flex size-5 shrink-0 items-center justify-center text-base leading-none"
          >
            {flag}
          </span>
          <span className="min-w-0 truncate font-medium text-grayscale-12 text-sm">
            {name}
          </span>
        </>
      )}
    />
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/scroll-fade-list/page.tsx`)
```tsx
import type { Metadata } from "next";
import { ExperimentPage } from "@/app/experiments/_components/ExperimentPage";
import { SourcePanel } from "@/app/experiments/_components/SourcePanel";
import { buildSourceTabs } from "@/app/experiments/_lib/source";
import { componentSource, usageSource } from "./copy-content";
import { ScrollFadeListShowcase } from "./scroll-fade-list";

export const metadata: Metadata = {
  title: "Scroll fade list | dqnamo",
  description: "A compact scrollable list with scroll-linked edge fades.",
};

export default async function ScrollFadeListPage() {
  const tabs = await buildSourceTabs([
    {
      label: "ScrollFadeList.tsx",
      source: componentSource,
      value: "component",
    },
    { label: "Usage.tsx", source: usageSource, value: "usage" },
  ]);

  return (
    <ExperimentPage
      description="A scrollable list with gradient fade edges to show that there is more content above or below."
      sectionClassName="dark:border-grayscale-3 dark:bg-grayscale-2"
      slug="scroll-fade-list"
      title="Scroll Fade List"
    >
      <div className="flex min-h-[34rem] w-full items-center justify-center rounded-[13px] border border-grayscale-3 bg-grayscale-1 p-4 small-shadow dark:border-grayscale-4 dark:bg-grayscale-2 dark:shadow-none md:p-8">
        <ScrollFadeListShowcase />
      </div>
      <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
        <SourcePanel tabs={tabs} />
      </div>
    </ExperimentPage>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const componentSource = `"use client";

import { type ReactNode, useEffect, useRef } from "react";

type ScrollFadeListProps<TItem> = {
  getKey: (item: TItem) => string;
  items: readonly TItem[];
  renderItem: (item: TItem) => ReactNode;
  className?: string;
  maxFadeHeight?: number;
  scrollClassName?: string;
};

export function ScrollFadeList<TItem>({
  className = "relative overflow-hidden rounded-xl border bg-white [--scroll-fade-list-bg:white] [--scrollbar-gutter-width:10px]",
  getKey,
  items,
  maxFadeHeight = 76,
  renderItem,
  scrollClassName = "h-80 overflow-y-auto overscroll-contain [scrollbar-gutter:stable]",
}: ScrollFadeListProps<TItem>) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frameElement = frameRef.current;
    const scrollElement = scrollRef.current;
    let animationFrame = 0;

    if (!frameElement || !scrollElement) {
      return;
    }

    const updateFadeHeights = () => {
      const maxScrollTop = Math.max(
        0,
        scrollElement.scrollHeight - scrollElement.clientHeight,
      );
      const distanceFromTop = scrollElement.scrollTop;
      const distanceFromBottom = maxScrollTop - scrollElement.scrollTop;

      frameElement.style.setProperty(
        "--top-fade-height",
        \`\${Math.min(maxFadeHeight, Math.max(0, distanceFromTop))}px\`,
      );
      frameElement.style.setProperty(
        "--bottom-fade-height",
        \`\${Math.min(maxFadeHeight, Math.max(0, distanceFromBottom))}px\`,
      );
    };

    const scheduleFadeUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateFadeHeights);
    };

    updateFadeHeights();
    scrollElement.addEventListener("scroll", scheduleFadeUpdate, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(scheduleFadeUpdate);
    resizeObserver.observe(scrollElement);

    if (scrollElement.firstElementChild) {
      resizeObserver.observe(scrollElement.firstElementChild);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollElement.removeEventListener("scroll", scheduleFadeUpdate);
      resizeObserver.disconnect();
    };
  }, [maxFadeHeight]);

  return (
    <div
      className={\`\${className} [--bottom-fade-height:0px] [--top-fade-height:0px] before:pointer-events-none before:absolute before:left-0 before:right-[var(--scrollbar-gutter-width)] before:top-0 before:h-[var(--top-fade-height)] before:bg-linear-to-b before:from-[var(--scroll-fade-list-bg)] before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-[var(--scrollbar-gutter-width)] after:h-[var(--bottom-fade-height)] after:bg-linear-to-b after:from-transparent after:to-[var(--scroll-fade-list-bg)] after:content-['']\`}
      ref={frameRef}
    >
      <div className={scrollClassName} ref={scrollRef}>
        <ul className="p-2">
          {items.map((item) => (
            <li className="rounded-md px-3 py-2" key={getKey(item)}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
`;

export const usageSource = `import { ScrollFadeList } from "./scroll-fade-list";

const teams = [
  { code: "za", flag: "🇿🇦", name: "South Africa" },
  { code: "ca", flag: "🇨🇦", name: "Canada" },
  { code: "br", flag: "🇧🇷", name: "Brazil" },
];

export function Example() {
  return (
    <ScrollFadeList
      getKey={(team) => team.code}
      items={teams}
      renderItem={(team) => (
        <span className="flex items-center gap-2">
          <span aria-hidden="true">{team.flag}</span>
          <span>{team.name}</span>
        </span>
      )}
    />
  );
}
`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
