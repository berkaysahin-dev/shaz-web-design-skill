# Logo Trace Loader (Çizgisel Vektör Logo Yükleyici) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Yükleyiciler ve Animasyon` (`Loaders & Animation`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, SVG Stroke Animation, Tailwind CSS` · **Fizik:** `Path tracing loop: 1.2s dashoffset travel followed by fill-opacity fade-in: 300ms ease-out`  
> **Etiketler:** `Logo Loader, Stroke Animation, Brand Mark, Vector Drawing, Loading State`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Logonun dış hatlarını çizerek başlayıp merkezden dolguya dönüşen minimalist ve şık yükleme animasyonu.

A traced logo loader that resolves into a filled mark.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Path tracing loop: 1.2s dashoffset travel followed by fill-opacity fade-in: 300ms ease-out`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Logo Trace Loader" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Logo Trace Loader (Çizgisel Vektör Logo Yükleyici)
- Category: Loaders & Animation
- Core Philosophy: A traced logo loader that resolves into a filled mark.
- Motion & Spring Physics: Path tracing loop: 1.2s dashoffset travel followed by fill-opacity fade-in: 300ms ease-out
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, SVG Stroke Animation, Tailwind CSS.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/LogoTraceLoader.tsx`)
```tsx
"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/helpers/classname-helper";

type LogoTraceLoaderProps = {
  loading?: boolean;
  isComplete?: boolean;
  size?: number;
  strokeWidth?: number;
  showInnerTrace?: boolean;
  loopDurationSeconds?: number;
  fillFadeSeconds?: number;
  className?: string;
  ariaLabel?: string;
  onDone?: () => void;
};

type LoaderPhase =
  | "loop"
  | "closingOuter"
  | "closingInner"
  | "fadingFill"
  | "done";

const OUTER_PATH =
  "M68.6484 121.746L112.751 21.0823C118.355 8.29253 131.211 0 145.436 0H169.659C183.884 0 196.74 8.29253 202.344 21.0823L246.447 121.746L306.119 209.304C313.198 219.69 314.044 232.99 308.338 244.155L293.469 273.244C286.624 286.636 271.786 294.241 256.634 292.123L157.548 278.277L58.0126 293.577C43.0841 295.871 28.3036 288.686 21.1586 275.661L4.31779 244.96C-2.02676 233.393 -1.17512 219.319 6.51994 208.565L68.6484 121.746Z";
const INNER_TRIANGLE_PATH =
  "M68.6484 121.746L246.447 121.746L157.548 278.277L68.6484 121.746";
const LOGO_SEGMENT_PATHS = [
  "M58.0126 293.577L157.548 278.277L68.6484 121.746L6.51994 208.565C-1.17512 219.319 -2.02676 233.393 4.31779 244.96L21.1586 275.661C28.3036 288.686 43.0841 295.871 58.0126 293.577Z",
  "M112.751 21.0823L68.6484 121.746H246.447L202.344 21.0823C196.74 8.29253 183.884 0 169.659 0H145.436C131.211 0 118.355 8.29253 112.751 21.0823Z",
  "M246.447 121.746L157.548 278.277L256.634 292.123C271.786 294.241 286.624 286.636 293.469 273.244L308.338 244.155C314.044 232.99 313.198 219.69 306.119 209.304L246.447 121.746Z",
] as const;

const TRACE_SEGMENT_LENGTH = 0.16;
const DEFAULT_LOOP_DURATION_SECONDS = 0.62;
const INNER_TRACE_DURATION_SECONDS = 0.24;
const DEFAULT_FILL_FADE_SECONDS = 0.14;
const FALLBACK_BUFFER_MS = 180;
const MIN_FALLBACK_MS = 120;

function toFallbackMs(seconds: number) {
  return Math.max(
    MIN_FALLBACK_MS,
    Math.round(seconds * 1000) + FALLBACK_BUFFER_MS,
  );
}

function FilledLogo() {
  return (
    <g>
      {LOGO_SEGMENT_PATHS.map((path) => (
        <path d={path} fill="currentColor" key={path} />
      ))}
    </g>
  );
}

export function LogoTraceLoader({
  loading = true,
  isComplete = false,
  size = 40,
  strokeWidth = 12,
  showInnerTrace = true,
  loopDurationSeconds = DEFAULT_LOOP_DURATION_SECONDS,
  fillFadeSeconds = DEFAULT_FILL_FADE_SECONDS,
  className,
  ariaLabel = "Loading",
  onDone,
}: LogoTraceLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const complete = isComplete || !loading;
  const [phase, setPhase] = useState<LoaderPhase>("loop");
  const hasCalledDoneRef = useRef(false);
  const isFilled = phase === "fadingFill" || phase === "done";
  const guideStrokeWidth = Math.max(1, strokeWidth / 2);
  const outerCloseDurationSeconds =
    loopDurationSeconds * (1 - TRACE_SEGMENT_LENGTH);

  useEffect(() => {
    if (!complete && phase !== "loop") {
      hasCalledDoneRef.current = false;
      setPhase("loop");
    }
  }, [complete, phase]);

  useEffect(() => {
    if (prefersReducedMotion && complete) {
      setPhase("done");
    }
  }, [complete, prefersReducedMotion]);

  useEffect(() => {
    if (phase !== "done" || hasCalledDoneRef.current) {
      return;
    }

    hasCalledDoneRef.current = true;
    onDone?.();
  }, [onDone, phase]);

  useEffect(() => {
    if (!complete || phase === "done" || prefersReducedMotion) {
      return;
    }

    let timeoutId: number | undefined;

    if (phase === "loop") {
      timeoutId = window.setTimeout(
        () => setPhase("closingOuter"),
        toFallbackMs(loopDurationSeconds),
      );
    } else if (phase === "closingOuter") {
      timeoutId = window.setTimeout(
        () => setPhase(showInnerTrace ? "closingInner" : "fadingFill"),
        toFallbackMs(outerCloseDurationSeconds),
      );
    } else if (phase === "closingInner") {
      timeoutId = window.setTimeout(
        () => setPhase("fadingFill"),
        toFallbackMs(INNER_TRACE_DURATION_SECONDS),
      );
    } else if (phase === "fadingFill") {
      timeoutId = window.setTimeout(
        () => setPhase("done"),
        toFallbackMs(fillFadeSeconds),
      );
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [
    complete,
    fillFadeSeconds,
    loopDurationSeconds,
    outerCloseDurationSeconds,
    phase,
    prefersReducedMotion,
    showInnerTrace,
  ]);

  return (
    <svg
      aria-label={ariaLabel}
      className={cn(
        "overflow-visible transition-colors duration-200",
        isFilled ? "text-grayscale-12" : "text-blue-9",
        className,
      )}
      fill="none"
      height={size}
      role="status"
      viewBox="-8 -8 329 310"
      width={size}
    >
      <g opacity="0.18">
        <path
          d={OUTER_PATH}
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={guideStrokeWidth}
        />
      </g>

      {phase === "loop" && !prefersReducedMotion ? (
        <path
          d={OUTER_PATH}
          fill="none"
          onAnimationIteration={() => {
            if (complete) {
              setPhase("closingOuter");
            }
          }}
          pathLength={1}
          stroke="currentColor"
          strokeDasharray={`${TRACE_SEGMENT_LENGTH} ${1 - TRACE_SEGMENT_LENGTH}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          style={{
            animation: `logo-trace-loader-loop ${loopDurationSeconds}s linear infinite`,
            strokeDashoffset: 0,
          }}
        />
      ) : null}

      {phase === "closingOuter" ? (
        <motion.path
          animate={{ pathLength: 1 }}
          d={OUTER_PATH}
          fill="none"
          initial={{ pathLength: TRACE_SEGMENT_LENGTH }}
          onAnimationComplete={() =>
            setPhase(showInnerTrace ? "closingInner" : "fadingFill")
          }
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          transition={{
            duration: outerCloseDurationSeconds,
            ease: "linear",
          }}
        />
      ) : null}

      {phase === "closingInner" ? (
        <>
          <path
            d={OUTER_PATH}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <motion.path
            animate={{ pathLength: 1 }}
            d={INNER_TRIANGLE_PATH}
            fill="none"
            initial={{ pathLength: 0 }}
            onAnimationComplete={() => setPhase("fadingFill")}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            transition={{
              duration: INNER_TRACE_DURATION_SECONDS,
              ease: "linear",
            }}
          />
        </>
      ) : null}

      {phase === "fadingFill" ? (
        <>
          <motion.g
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            onAnimationComplete={() => setPhase("done")}
            transition={{ duration: fillFadeSeconds, ease: "easeOut" }}
          >
            <FilledLogo />
          </motion.g>
          <path
            d={OUTER_PATH}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          {showInnerTrace ? (
            <path
              d={INNER_TRIANGLE_PATH}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
          ) : null}
        </>
      ) : null}

      {phase === "done" ? (
        <>
          <FilledLogo />
          <path
            d={OUTER_PATH}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          {showInnerTrace ? (
            <path
              d={INNER_TRIANGLE_PATH}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
          ) : null}
        </>
      ) : null}
    </svg>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/logo-trace-loader/logo-trace-loader-showcase.tsx`)
```tsx
"use client";

import {
  ArrowClockwiseIcon,
  CheckCircleIcon,
  DotsThreeCircleIcon,
  type Icon,
  SpinnerGapIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { LogoTraceLoader } from "@/components/LogoTraceLoader";
import Button from "@/components/public/Button";

const completeDelayMs = 900;
const signInFallbackDelayMs = 2500;
const revealTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
} as const;

type Status = {
  icon: Icon;
  iconClassName?: string;
  iconWeight?: "regular" | "bold" | "fill";
  text: string;
};

function getStatus({
  isComplete,
  isLoaderDone,
}: {
  isComplete: boolean;
  isLoaderDone: boolean;
}): Status {
  if (isLoaderDone) {
    return {
      icon: CheckCircleIcon,
      iconClassName: "text-green-9",
      iconWeight: "fill",
      text: "Ready",
    };
  }

  if (isComplete) {
    return {
      icon: DotsThreeCircleIcon,
      iconClassName: "text-blue-9",
      iconWeight: "fill",
      text: "Completing",
    };
  }

  return {
    icon: SpinnerGapIcon,
    iconClassName: "animate-spin text-grayscale-10",
    iconWeight: "fill",
    text: "Loading",
  };
}

function SignInPreview() {
  return (
    <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
      <div className="p-4">
        <h2 className="font-semibold text-grayscale-12 text-sm">Sign In</h2>
        <p className="text-pretty text-grayscale-11 text-sm leading-6">
          Enter your email and we&apos;ll send you a verification code.
          We&apos;ll create your account too if you don&apos;t already have one.
        </p>
      </div>

      <form className="flex flex-col">
        <input
          autoComplete="email"
          className="mt-2 w-full border-0 border-grayscale-4 border-b bg-transparent px-4 py-2 text-grayscale-12 text-sm outline-none placeholder:text-grayscale-10 focus:border-blue-9"
          defaultValue=""
          placeholder="you@email.com"
          readOnly
          type="email"
        />

        <div className="flex items-center justify-end p-4">
          <Button type="button">Send code</Button>
        </div>
      </form>
    </div>
  );
}

export function LogoTraceLoaderShowcase() {
  const [runKey, setRunKey] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  const completeTimerRef = useRef<number | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (completeTimerRef.current !== null) {
      window.clearTimeout(completeTimerRef.current);
      completeTimerRef.current = null;
    }

    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  }, []);

  const scheduleRun = useCallback(() => {
    completeTimerRef.current = window.setTimeout(() => {
      setIsComplete(true);
    }, completeDelayMs);

    fallbackTimerRef.current = window.setTimeout(() => {
      setIsLoaderDone(true);
    }, signInFallbackDelayMs);
  }, []);

  useEffect(() => {
    scheduleRun();

    return () => {
      clearTimers();
    };
  }, [clearTimers, scheduleRun]);

  function replay() {
    clearTimers();
    setIsComplete(false);
    setIsLoaderDone(false);
    setRunKey((currentRunKey) => currentRunKey + 1);
    scheduleRun();
  }

  const status = getStatus({ isComplete, isLoaderDone });
  const StatusIcon = status.icon;

  return (
    <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
      <div className="flex min-h-[30rem] items-center justify-center bg-grayscale-1 px-4 py-10 dark:bg-grayscale-2">
        <div
          className={`flex w-full max-w-md flex-col items-center ${
            isLoaderDone ? "-mt-6 gap-6" : ""
          }`}
        >
          <motion.div
            animate={{
              scale: isLoaderDone ? 0.8 : 1,
              y: isLoaderDone ? -12 : 0,
            }}
            className="flex items-center justify-center"
            layout
            transition={revealTransition}
          >
            <LogoTraceLoader
              ariaLabel="Loading logo"
              fillFadeSeconds={0.2}
              isComplete={isComplete}
              key={runKey}
              loopDurationSeconds={0.5}
              onDone={() => setIsLoaderDone(true)}
              showInnerTrace={false}
              size={40}
            />
            <span className="sr-only">Loading content</span>
          </motion.div>

          {isLoaderDone ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="w-full"
              initial={{ opacity: 0, y: 48 }}
              transition={revealTransition}
            >
              <SignInPreview />
            </motion.div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-4 border-grayscale-3 border-t p-4 dark:border-grayscale-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex h-7 min-w-0 flex-1 items-center overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-y-0 left-0 flex items-center text-grayscale-11 text-sm"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
              key={status.text}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <StatusIcon
                aria-hidden="true"
                className={status.iconClassName}
                size={15}
                weight={status.iconWeight}
              />
              <span className="ml-1.5">{status.text}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <Button
            aria-label="Replay logo trace loader reveal"
            className="text-xs"
            onClick={replay}
            type="button"
            variant="secondary"
          >
            <ArrowClockwiseIcon aria-hidden="true" size={15} weight="bold" />
            Replay
          </Button>
        </div>
      </div>
    </div>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const LOGO_TRACE_LOADER_PROMPT = `Build a reusable SVG logo trace loader component.

Goal:
Create one self-contained client component that traces a logo while work is in progress, then resolves into the filled logo mark when loading completes.

Component contract:

\`\`\`tsx
// components/LogoTraceLoader.tsx
type LogoTraceLoaderProps = {
  loading?: boolean;
  isComplete?: boolean;
  size?: number;
  strokeWidth?: number;
  loopDurationSeconds?: number;
  fillFadeSeconds?: number;
  className?: string;
  ariaLabel?: string;
  onDone?: () => void;
};
\`\`\`

Logo data:
Use my actual logo SVG paths. If they are not already available in the repo, ask me for the SVG file or extract these values from an existing logo asset:

\`\`\`ts
const LOGO_VIEW_BOX = "PASTE_VIEW_BOX";

const TRACE_PATH =
  "PASTE_SINGLE_CLEAN_PATH_FOR_THE_ANIMATED_TRACE";

const FILL_PATHS = [
  "PASTE_FILLED_LOGO_PATH_1",
  "PASTE_FILLED_LOGO_PATH_2",
] as const;
\`\`\`

SVG preparation:
- Prefer one continuous path for TRACE_PATH. It is the route followed by the animated stroke, not necessarily every filled shape in the logo.
- If the source SVG only contains filled shapes, derive a clean outer contour for TRACE_PATH and keep the original filled shapes in FILL_PATHS.
- Flatten transforms before copying path data when the SVG uses transformed groups or paths.
- Preserve holes and compound shapes in FILL_PATHS so the final filled logo matches the original.
- If a clean trace path cannot be confidently extracted, ask me for a simplified outline/trace path instead of guessing.

Behavior:
- While loading is true, animate a short stroke segment around TRACE_PATH.
- When isComplete is true, or loading becomes false, transition from the looping trace to the full outline.
- After the trace closes, fade in FILL_PATHS so the spinner resolves into the filled logo.
- Call onDone exactly once after the filled logo is visible.
- Use currentColor for both stroke and fill so the loader can be styled through className.
- Respect prefers-reduced-motion by showing the filled logo immediately and calling onDone.
- Include timeout fallbacks so the component does not rely only on SVG animation callbacks.
- Keep width and height stable from the first render to avoid layout shift.

Internal state:

\`\`\`ts
type LoaderPhase = "loop" | "closingOutline" | "fadingFill" | "done";
\`\`\`

Rendering outline:

\`\`\`tsx
<svg
  role="status"
  aria-label={ariaLabel}
  viewBox={LOGO_VIEW_BOX}
  width={size}
  height={size}
  className={className}
>
  <g opacity="0.18">
    <path
      d={TRACE_PATH}
      fill="none"
      stroke="currentColor"
      strokeWidth={Math.max(1, strokeWidth / 2)}
      strokeLinejoin="round"
    />
  </g>

  {phase === "loop" ? (
    <path
      d={TRACE_PATH}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={1}
      strokeDasharray="0.16 0.84"
      style={{
        animation: \`logo-trace-loader-loop \${loopDurationSeconds}s linear infinite\`,
      }}
    />
  ) : null}

  {phase === "fadingFill" || phase === "done"
    ? FILL_PATHS.map((path) => <path key={path} d={path} fill="currentColor" />)
    : null}
</svg>
\`\`\`

Animation CSS:

\`\`\`css
@keyframes logo-trace-loader-loop {
  to {
    stroke-dashoffset: -1;
  }
}
\`\`\`

Scope:
- Implement the component and any required CSS only.
- Do not add unrelated UI, product copy, routes, screens, buttons, or business logic.
- Keep the component typed and reusable.
- Run the project formatter, typecheck, and build after implementation.`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
