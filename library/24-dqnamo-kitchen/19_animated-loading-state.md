# Animated Loading State (Game of Life) (Game of Life Hücresel Yükleme Durumu) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Yükleyiciler ve Animasyon` (`Loaders & Animation`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, HTML5 Canvas 2D, Cellular Automata Simulation` · **Fizik:** `Grid cell evaluation tick: 80ms interval, cell fade transition: 920ms exponential decay, canvas 2D rendering buffer`  
> **Etiketler:** `Game of Life, Cellular Automaton, Canvas Loader, Generative Loading, Simulation`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Conway'in Hayat Oyunu (Game of Life) hücresel simülasyonunu yükleme ekranı olarak kullanan ve grafiğe dönüşen yaratıcı yükleyici.

A Conway's Game of Life cellular automaton loading state that resolves into an interactive graph.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Grid cell evaluation tick: 80ms interval, cell fade transition: 920ms exponential decay, canvas 2D rendering buffer`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Animated Loading State (Game of Life)" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Animated Loading State (Game of Life) (Game of Life Hücresel Yükleme Durumu)
- Category: Loaders & Animation
- Core Philosophy: A Conway's Game of Life cellular automaton loading state that resolves into an interactive graph.
- Motion & Spring Physics: Grid cell evaluation tick: 80ms interval, cell fade transition: 920ms exponential decay, canvas 2D rendering buffer
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, HTML5 Canvas 2D, Cellular Automata Simulation.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`app/experiments/animated-loading-state/animated-loading-state.tsx`)
```tsx
"use client";

import { ArrowClockwiseIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Button from "@/components/public/Button";
import { GameOfLife } from "@/components/random/GameOfLife";
import { cn } from "@/helpers/classname-helper";

const LOAD_DURATION = 3800;
const CARD_TRANSITION_DURATION = 520;
const CHART_ANIMATION_DURATION = 900;
const TEXT_ROTATION_INTERVAL = 1450;
const TEXT_TRANSITION_DURATION = 260;
const chartWidth = 520;
const chartHeight = 170;

const chartData = [
  { date: "Jan 23", Organic: 232, Sponsored: 0 },
  { date: "Feb 23", Organic: 241, Sponsored: 0 },
  { date: "Mar 23", Organic: 291, Sponsored: 0 },
  { date: "Apr 23", Organic: 101, Sponsored: 0 },
  { date: "May 23", Organic: 318, Sponsored: 0 },
  { date: "Jun 23", Organic: 205, Sponsored: 0 },
  { date: "Jul 23", Organic: 372, Sponsored: 0 },
  { date: "Aug 23", Organic: 341, Sponsored: 0 },
  { date: "Sep 23", Organic: 387, Sponsored: 120 },
  { date: "Oct 23", Organic: 220, Sponsored: 0 },
  { date: "Nov 23", Organic: 372, Sponsored: 0 },
  { date: "Dec 23", Organic: 321, Sponsored: 0 },
];

const summary = [
  { name: "Organic", value: 3273, color: "bg-blue-500" },
  { name: "Sponsored", value: 120, color: "bg-violet-500" },
];

const gridLineIds = ["grid-0", "grid-1", "grid-2", "grid-3"];
const loadingSentences = [
  "Loading events...",
  "Preparing chart data...",
  "Mapping follower signals...",
  "Resolving live metrics...",
];

const maxChartValue = Math.max(
  ...chartData.flatMap((item) => [item.Organic, item.Sponsored]),
);

function buildLinePath(values: number[]) {
  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * chartWidth;
      const y = chartHeight - (value / maxChartValue) * chartHeight;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function buildAreaPath(values: number[]) {
  return `${buildLinePath(values)} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;
}

function valueFormatter(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function LoadingText() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"entering" | "exiting" | "visible">(
    "visible",
  );

  useEffect(() => {
    let exitTimeout = 0;
    let enterTimeout = 0;

    const interval = window.setInterval(() => {
      setPhase("exiting");

      exitTimeout = window.setTimeout(() => {
        setIndex((value) => (value + 1) % loadingSentences.length);
        setPhase("entering");

        enterTimeout = window.setTimeout(() => {
          setPhase("visible");
        }, 20);
      }, TEXT_TRANSITION_DURATION);
    }, TEXT_ROTATION_INTERVAL);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(exitTimeout);
      window.clearTimeout(enterTimeout);
    };
  }, []);

  return (
    <p
      aria-live="polite"
      className="flex h-7 items-center overflow-hidden font-medium text-grayscale-11 text-sm leading-5"
    >
      <span
        className={cn(
          "inline-block ease-out",
          phase === "visible" &&
            "translate-y-0 opacity-100 transition-[translate,opacity]",
          phase === "exiting" &&
            "-translate-y-full opacity-0 transition-[translate,opacity]",
          phase === "entering" && "translate-y-full opacity-0 transition-none",
        )}
        style={{ transitionDuration: `${TEXT_TRANSITION_DURATION}ms` }}
      >
        {loadingSentences[index]}
      </span>
    </p>
  );
}

function ChartBody({ isVisible }: { isVisible: boolean }) {
  const organicValues = chartData.map((item) => item.Organic);
  const sponsoredValues = chartData.map((item) => item.Sponsored);
  const organicPath = buildLinePath(organicValues);
  const sponsoredPath = buildLinePath(sponsoredValues);

  return (
    <>
      <div className="relative mt-5 h-44">
        <div className="absolute inset-x-0 top-0 bottom-6 grid grid-rows-4">
          {gridLineIds.map((id) => (
            <div
              className="border-grayscale-3 border-t dark:border-grayscale-5"
              key={id}
            />
          ))}
        </div>
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 bottom-6 h-auto w-full overflow-visible"
          preserveAspectRatio="none"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        >
          <defs>
            <linearGradient id="organic-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sponsored-area" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgb(139 92 246)"
                stopOpacity="0.16"
              />
              <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={buildAreaPath(organicValues)}
            fill="url(#organic-area)"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 700ms ease-out 180ms",
            }}
          />
          <path
            d={buildAreaPath(sponsoredValues)}
            fill="url(#sponsored-area)"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 700ms ease-out 280ms",
            }}
          />
          <path
            d={organicPath}
            fill="none"
            pathLength={1}
            stroke="rgb(59 130 246)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style={{
              opacity: isVisible ? 1 : 0,
              strokeDasharray: 1,
              strokeDashoffset: isVisible ? 0 : 1,
              transition: `stroke-dashoffset ${CHART_ANIMATION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease-out`,
            }}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={sponsoredPath}
            fill="none"
            pathLength={1}
            stroke="rgb(139 92 246)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style={{
              opacity: isVisible ? 1 : 0,
              strokeDasharray: 1,
              strokeDashoffset: isVisible ? 0 : 1,
              transition: `stroke-dashoffset ${CHART_ANIMATION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) 120ms, opacity 300ms ease-out 120ms`,
            }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex justify-between font-mono text-[10px] text-grayscale-9 uppercase leading-none transition-all duration-500 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
          )}
        >
          <span>{chartData[0].date}</span>
          <span>{chartData.at(-1)?.date}</span>
        </div>
      </div>

      <div className="mt-2 divide-y divide-grayscale-3 dark:divide-grayscale-5">
        {summary.map((item) => (
          <div
            className={cn(
              "flex items-center justify-between py-2 text-grayscale-10 text-sm transition-all duration-500 ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0",
            )}
            key={item.name}
            style={{
              transitionDelay: isVisible
                ? `${520 + summary.findIndex((entry) => entry.name === item.name) * 90}ms`
                : "0ms",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn("h-0.5 w-3", item.color)}
              />
              <span>{item.name}</span>
            </div>
            <span className="font-medium text-grayscale-12">
              {valueFormatter(item.value)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function ChartReveal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 z-10 p-6 transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      <h3 className="font-medium text-grayscale-12 text-sm">
        Follower metrics
      </h3>

      <ChartBody isVisible={isVisible} />
    </div>
  );
}

function ChartCard({ isLoaded }: { isLoaded: boolean }) {
  const [showLoadingLayer, setShowLoadingLayer] = useState(true);

  useEffect(() => {
    if (!isLoaded) {
      setShowLoadingLayer(true);
      return;
    }

    const timeout = window.setTimeout(() => {
      setShowLoadingLayer(false);
    }, CARD_TRANSITION_DURATION);

    return () => window.clearTimeout(timeout);
  }, [isLoaded]);

  return (
    <div className="relative h-[22rem] w-full max-w-md overflow-hidden rounded-xl border border-grayscale-3 bg-white small-shadow dark:border-grayscale-5 dark:bg-grayscale-3">
      {isLoaded && <ChartReveal />}

      {showLoadingLayer && (
        <div
          className={cn(
            "absolute inset-0 z-20 overflow-hidden bg-white p-6 transition-all ease-out dark:bg-grayscale-3",
            isLoaded ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100",
          )}
          style={{ transitionDuration: `${CARD_TRANSITION_DURATION}ms` }}
        >
          <GameOfLife
            aria-hidden
            cellRadius={3}
            cellSize={14}
            density={0.28}
            fadeDuration={920}
            maxOpacity={1}
            stepInterval={620}
            className="absolute inset-0 [--game-of-life-color:var(--color-grayscale-3)] dark:[--game-of-life-color:var(--color-grayscale-5)]"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <LoadingText />
          </div>
        </div>
      )}
    </div>
  );
}

function AnimatedLoadingStatePreview() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoaded(true);
    }, LOAD_DURATION);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="flex min-h-[31rem] items-center justify-center rounded-[13px] border border-transparent bg-grayscale-2 shadow-none p-4 dark:border-transparent dark:shadow-none dark:bg-grayscale-2 sm:p-8">
      <ChartCard isLoaded={isLoaded} />
    </div>
  );
}

export function AnimatedLoadingStateMiniPreview() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-grayscale-2 p-3 dark:bg-grayscale-2">
      <div className="w-[448px] origin-center scale-[0.31]">
        <ChartCard isLoaded={false} />
      </div>
    </div>
  );
}

export function AnimatedLoadingState() {
  const [run, setRun] = useState(0);

  return (
    <div className="flex flex-col gap-1.5">
      <AnimatedLoadingStatePreview key={run} />

      <div className="flex items-center justify-between gap-3 rounded-[13px] border border-grayscale-3 bg-grayscale-1 p-3 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3">
        <div className="min-w-0">
          <p className="font-medium text-grayscale-12 text-sm leading-none">
            Animated loading state
          </p>
          <p className="mt-1.5 text-grayscale-10 text-xs leading-5">
            A live loading state resolves into follower metrics.
          </p>
        </div>
        <Button
          aria-label="Replay loading animation"
          className="shrink-0"
          onClick={() => setRun((value) => value + 1)}
          type="button"
          variant="secondary"
        >
          <ArrowClockwiseIcon aria-hidden="true" size={15} weight="bold" />
          Replay
        </Button>
      </div>
    </div>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/animated-loading-state/page.tsx`)
```tsx
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Metadata } from "next";
import { ExperimentLayout } from "@/app/experiments/_components/ExperimentPage";
import { WorkWithMeCta } from "@/components/WorkWithMeCta";
import { tokenize } from "@/helpers/syntax";
import { AnimatedLoadingState } from "./animated-loading-state";
import {
  buildMarkdown,
  installCommand,
  PACKAGE_NAME,
  usageSource,
} from "./copy-content";
import { PackageActions } from "./package-actions";
import { SourcePanel } from "./source-panel";

export const metadata: Metadata = {
  title: "Animated loading state | dqnamo",
  description:
    "A Game of Life loading state that resolves into an animated graph.",
};

export default async function AnimatedLoadingStatePage() {
  const [packageSource, readmeSource, packageJsonSource] = await Promise.all([
    readFile(
      join(process.cwd(), "packages/game-of-life-animation/src/index.tsx"),
      "utf-8",
    ),
    readFile(
      join(process.cwd(), "packages/game-of-life-animation/README.md"),
      "utf-8",
    ),
    readFile(
      join(process.cwd(), "packages/game-of-life-animation/package.json"),
      "utf-8",
    ),
  ]);
  const [usageLines, packageSourceLines, readmeLines, packageJsonLines] =
    await Promise.all([
      tokenize(usageSource, "tsx"),
      tokenize(packageSource, "tsx"),
      tokenize(readmeSource, "markdown"),
      tokenize(packageJsonSource, "json"),
    ]);
  const markdown = buildMarkdown(packageSource);

  return (
    <ExperimentLayout
      description="A Conway-inspired loading state that keeps the empty wait active, then resolves into a compact graph when the data is ready."
      title="Animated Loading State"
    >
        <section className="mt-12 flex flex-col gap-1.5 rounded-[16px] border border-grayscale-3 bg-grayscale-2 p-1.5 dark:border-grayscale-4">
          <AnimatedLoadingState />
        </section>

        <section className="mt-8 flex flex-col gap-1.5 rounded-[16px] border border-grayscale-3 bg-grayscale-2 p-1.5 dark:border-grayscale-4">
          <div className="rounded-[13px] border border-grayscale-3 bg-grayscale-1 p-5 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
            <div className="flex flex-col gap-px">
              <p className="font-mono font-semibold text-[10px] text-grayscale-10 uppercase leading-none">
                npm package
              </p>
              <h2 className="mt-2 font-medium text-grayscale-12 text-sm">
                {PACKAGE_NAME}
              </h2>
              <p className="mt-1 max-w-xl text-grayscale-10 text-sm leading-6">
                The loading animation now lives as a package-ready React canvas
                component with typed props, deterministic seeding, reduced
                motion support, and a buildable npm manifest.
              </p>
            </div>

            <div className="mt-4 flex min-w-0 items-center rounded-lg border border-grayscale-3 bg-white px-3 py-2 dark:border-grayscale-5 dark:bg-grayscale-2">
              <code className="min-w-0 truncate font-mono text-grayscale-11 text-xs">
                {installCommand}
              </code>
            </div>

            <PackageActions
              installCommand={installCommand}
              markdown={markdown}
              usageSource={usageSource}
            />
          </div>

          <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
            <SourcePanel
              packageJsonLines={packageJsonLines}
              packageJsonSource={packageJsonSource}
              packageSource={packageSource}
              packageSourceLines={packageSourceLines}
              readmeLines={readmeLines}
              readmeSource={readmeSource}
              usageLines={usageLines}
              usageSource={usageSource}
            />
          </div>
        </section>

        <WorkWithMeCta className="my-16" />
    </ExperimentLayout>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const PACKAGE_NAME = "game-of-life-animation";

export const installCommand = `npm install ${PACKAGE_NAME}`;

export const usageSource = `"use client";

import { GameOfLifeLoader } from "${PACKAGE_NAME}";

export function LoadingState() {
  return (
    <div className="relative h-80 overflow-hidden rounded-xl border">
      <GameOfLifeLoader
        cellColor="rgb(100 116 139)"
        cellRadius={3}
        cellSize={14}
        density={0.28}
        fadeDuration={920}
        maxOpacity={0.22}
        stepInterval={620}
      />
    </div>
  );
}`;

export function buildMarkdown(packageSource: string) {
  return `# ${PACKAGE_NAME}

A tiny React canvas component for Game of Life loading states.

\`\`\`bash
${installCommand}
\`\`\`

\`\`\`tsx
${usageSource}
\`\`\`

## Source

\`\`\`tsx
${packageSource}
\`\`\`
`;
}

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
