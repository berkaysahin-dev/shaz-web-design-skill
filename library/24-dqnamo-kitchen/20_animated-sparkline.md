# Animated Sparkline (Dinamik Animasyonlu Kıvılcım Çizgi Grafiği) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Seçiciler ve Grafikler` (`Pickers & Visuals`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, SVG Cubic Bezier Curves, Motion` · **Fizik:** `SVG path 'd' interpolation: spring curve with control points morphing over 500ms, gradient area fade`  
> **Etiketler:** `Sparkline, Mini Chart, SVG Morph, Financial Trend, Data Visualization`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Trend değişimleri arasında eğri geçişlerini sarsıntısız morflayan ve pozitif/negatif yönelimlere göre renk değiştiren SVG mini grafiği.

A compact SVG sparkline that animates between trend states and adapts its color to data trajectory.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `SVG path 'd' interpolation: spring curve with control points morphing over 500ms, gradient area fade`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Animated Sparkline" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Animated Sparkline (Dinamik Animasyonlu Kıvılcım Çizgi Grafiği)
- Category: Pickers & Visuals
- Core Philosophy: A compact SVG sparkline that animates between trend states and adapts its color to data trajectory.
- Motion & Spring Physics: SVG path 'd' interpolation: spring curve with control points morphing over 500ms, gradient area fade
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, SVG Cubic Bezier Curves, Motion.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/Sparkline.tsx`)
```tsx
import { type CSSProperties, memo, useId, useMemo } from "react";
import { cn } from "@/helpers/classname-helper";

export type SparklineCurve = "sharp" | "smooth";

export type SparklinePoint = {
  label?: string;
  value: number;
};

type SparkCoordinate = {
  x: number;
  y: number;
};

type SparklineProps = {
  ariaLabel?: string;
  className?: string;
  color?: string;
  curve?: SparklineCurve;
  data: readonly SparklinePoint[];
  duration?: number;
  glow?: boolean;
  height?: number;
  replayKey?: number | string;
  showEndpoint?: boolean;
  strokeWidth?: number;
  width?: number;
};

function getSparkCoordinates({
  data,
  height,
  width,
}: {
  data: readonly SparklinePoint[];
  height: number;
  width: number;
}) {
  const values = data.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const horizontalPadding = 6;
  const verticalPadding = 4;
  const innerWidth = width - horizontalPadding * 2;
  const innerHeight = height - verticalPadding * 2;

  return data.map((point, index) => {
    const x =
      horizontalPadding + (index / Math.max(data.length - 1, 1)) * innerWidth;
    const y =
      verticalPadding +
      innerHeight -
      ((point.value - min) / range) * innerHeight;

    return { x, y };
  });
}

function buildSharpSparkPath(points: readonly SparkCoordinate[]) {
  if (points.length === 0) {
    return "";
  }

  return points.reduce(
    (path, point, index) =>
      `${path} ${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`,
    "",
  );
}

function buildSmoothSparkPath(points: readonly SparkCoordinate[]) {
  if (points.length <= 2) {
    return buildSharpSparkPath(points);
  }

  return points.slice(1).reduce(
    (path, point, index) => {
      const previousPoint = points[index];
      const beforePreviousPoint = points[index - 1] ?? previousPoint;
      const nextPoint = points[index + 2] ?? point;
      const controlPointOne = {
        x: previousPoint.x + (point.x - beforePreviousPoint.x) / 6,
        y: previousPoint.y + (point.y - beforePreviousPoint.y) / 6,
      };
      const controlPointTwo = {
        x: point.x - (nextPoint.x - previousPoint.x) / 6,
        y: point.y - (nextPoint.y - previousPoint.y) / 6,
      };

      return `${path} C ${controlPointOne.x.toFixed(2)} ${controlPointOne.y.toFixed(2)}, ${controlPointTwo.x.toFixed(2)} ${controlPointTwo.y.toFixed(2)}, ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
    },
    `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`,
  );
}

function buildSparkPath(
  points: readonly SparkCoordinate[],
  curve: SparklineCurve,
) {
  return curve === "smooth"
    ? buildSmoothSparkPath(points)
    : buildSharpSparkPath(points);
}

function getVisibleSparkPoints(
  points: readonly SparkCoordinate[],
  curve: SparklineCurve,
) {
  if (curve === "smooth" || points.length <= 18) {
    return points;
  }

  const step = Math.ceil(points.length / 18);
  const sharpPoints = points.filter((_, index) => index % step === 0);
  const lastPoint = points.at(-1);

  if (lastPoint && sharpPoints.at(-1) !== lastPoint) {
    sharpPoints.push(lastPoint);
  }

  return sharpPoints;
}

export const Sparkline = memo(function Sparkline({
  ariaLabel = "Sparkline",
  className,
  color = "currentColor",
  curve = "smooth",
  data,
  duration = 980,
  glow = false,
  height = 72,
  replayKey = 0,
  showEndpoint = false,
  strokeWidth = 2,
  width = 220,
}: SparklineProps) {
  const sparklineId = useId().replace(/:/g, "");
  const points = useMemo(
    () => getSparkCoordinates({ data, height, width }),
    [data, height, width],
  );
  const visiblePoints = useMemo(
    () => getVisibleSparkPoints(points, curve),
    [points, curve],
  );
  const path = useMemo(
    () => buildSparkPath(visiblePoints, curve),
    [visiblePoints, curve],
  );
  const lastPoint = visiblePoints.at(-1);
  const animationKey = `${replayKey}-${duration}`;
  const clipBleed = glow ? 18 : Math.ceil(strokeWidth / 2);
  const clipSize = {
    height: height + clipBleed * 2,
    width: width + clipBleed * 2,
    x: -clipBleed,
    y: -clipBleed,
  };
  const strokeLinecap = curve === "sharp" ? "butt" : "round";
  const strokeLinejoin = curve === "sharp" ? "miter" : "round";

  return (
    <svg
      aria-label={ariaLabel}
      className={cn("block h-auto w-full overflow-visible", className)}
      key={animationKey}
      preserveAspectRatio="none"
      role="img"
      style={{ color } as CSSProperties}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <linearGradient
          id={`${sparklineId}-fade`}
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2={width}
          y1="0"
          y2="0"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask
          height={clipSize.height}
          id={`${sparklineId}-fade-mask`}
          maskUnits="userSpaceOnUse"
          width={clipSize.width}
          x={clipSize.x}
          y={clipSize.y}
        >
          <rect
            fill={`url(#${sparklineId}-fade)`}
            height={clipSize.height}
            width={clipSize.width}
            x={clipSize.x}
            y={clipSize.y}
          />
        </mask>
        <clipPath id={`${sparklineId}-clip`}>
          <rect
            height={clipSize.height}
            key={animationKey}
            width={duration > 0 ? 0 : clipSize.width}
            x={clipSize.x}
            y={clipSize.y}
          >
            {duration > 0 ? (
              <animate
                attributeName="width"
                calcMode="spline"
                dur={`${duration}ms`}
                fill="freeze"
                from="0"
                keySplines="0.25 1 0.5 1"
                keyTimes="0;1"
                to={clipSize.width}
              />
            ) : null}
          </rect>
        </clipPath>
      </defs>

      <g
        clipPath={`url(#${sparklineId}-clip)`}
        mask={`url(#${sparklineId}-fade-mask)`}
      >
        {glow ? (
          <>
            <path
              className="fill-none stroke-current opacity-10 blur-[6px]"
              d={path}
              strokeLinecap={strokeLinecap}
              strokeLinejoin={strokeLinejoin}
              strokeWidth={strokeWidth + 8}
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="fill-none stroke-current opacity-20 blur-[2px]"
              d={path}
              strokeLinecap={strokeLinecap}
              strokeLinejoin={strokeLinejoin}
              strokeWidth={strokeWidth + 3}
              vectorEffect="non-scaling-stroke"
            />
          </>
        ) : null}
        <path
          className="fill-none stroke-current"
          d={path}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {showEndpoint && lastPoint ? (
        <circle
          className="fill-current [filter:drop-shadow(0_0_5px_currentColor)]"
          cx={lastPoint.x}
          cy={lastPoint.y}
          key={`${animationKey}-endpoint`}
          opacity={duration > 0 ? "0" : "1"}
          r={strokeWidth + 1}
        >
          {duration > 0 ? (
            <animate
              attributeName="opacity"
              dur={`${duration}ms`}
              fill="freeze"
              keyTimes="0;0.78;1"
              values="0;0;1"
            />
          ) : null}
        </circle>
      ) : null}
    </svg>
  );
});

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/animated-sparkline/animated-sparkline-showcase.tsx`)
```tsx
"use client";

import { Slider } from "@base-ui/react/slider";
import { ArrowClockwiseIcon } from "@phosphor-icons/react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatedSparkline,
  type SparkCurve,
} from "@/components/AnimatedSparkline";
import { Tabs } from "@/components/public/Tabs";
import { cn } from "@/helpers/classname-helper";

const sparkPointCount = 64;
const revenueValue = 12_478;
const trendRange = {
  max: 200,
  min: -200,
};
const trendDebounceMs = 180;
const trendMorphDuration = 280;

type SparkAnchor = {
  at: number;
  value: number;
};

type SparkShock = {
  at: number;
  size: number;
  width: number;
};

function smoothStep(value: number) {
  return value * value * (3 - 2 * value);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;

  return value - Math.floor(value);
}

function interpolateAnchors(anchors: readonly SparkAnchor[], progress: number) {
  const nextAnchorIndex = anchors.findIndex((anchor) => anchor.at >= progress);

  if (nextAnchorIndex <= 0) {
    return anchors[0]?.value ?? 0;
  }

  const previousAnchor = anchors[nextAnchorIndex - 1];
  const nextAnchor = anchors[nextAnchorIndex];
  const anchorRange = nextAnchor.at - previousAnchor.at || 1;
  const anchorProgress = smoothStep(
    (progress - previousAnchor.at) / anchorRange,
  );

  return (
    previousAnchor.value +
    (nextAnchor.value - previousAnchor.value) * anchorProgress
  );
}

function getShockValue(progress: number, shock: SparkShock) {
  const distance = (progress - shock.at) / shock.width;

  return shock.size * Math.exp(-(distance ** 2));
}

function buildSparkPoints({
  endValue,
  trendPercent,
}: {
  endValue: number;
  trendPercent: number;
}) {
  const direction = trendPercent >= 0 ? 1 : -1;
  const intensity = Math.abs(trendPercent) / trendRange.max;
  const startValue = endValue * (1 - direction * 0.5 * intensity);
  const controlCount = 9;
  const anchors = Array.from({ length: controlCount }, (_, index) => {
    const progress = index / (controlCount - 1);
    const drift = startValue + (endValue - startValue) * progress;
    const envelope = Math.sin(progress * Math.PI);
    const seed = trendPercent * 0.131 + index * 4.91;
    const noise = (seededNoise(seed) - 0.5) * endValue * 0.18 * intensity;
    const counterMove =
      Math.sin((progress * 3.4 + seededNoise(seed + 3)) * Math.PI) *
      endValue *
      0.045 *
      (0.35 + intensity);

    return {
      at: progress,
      value:
        index === 0
          ? startValue
          : index === controlCount - 1
            ? endValue
            : clamp(drift + envelope * (noise + counterMove), 2200, 22_000),
    };
  });
  const shocks = [0.22, 0.46, 0.68, 0.84].map((at, index) => {
    const seed = trendPercent * 0.217 + index * 7.37;
    const polarity = seededNoise(seed) > 0.5 ? 1 : -1;

    return {
      at,
      size:
        polarity *
        endValue *
        (0.035 + seededNoise(seed + 1) * 0.08) *
        (0.35 + intensity),
      width: 0.028 + seededNoise(seed + 2) * 0.035,
    };
  });

  return Array.from({ length: sparkPointCount }, (_, index) => {
    const progress = index / (sparkPointCount - 1);
    const envelope = Math.sin(progress * Math.PI);
    const trend = interpolateAnchors(anchors, progress);
    const frequency = 6.5 + intensity * 4.5 + seededNoise(trendPercent) * 2;
    const phase = seededNoise(trendPercent * 0.5 + 11) * Math.PI * 2;
    const secondaryFrequency = 14 + seededNoise(trendPercent + 5) * 12;
    const secondaryPhase = seededNoise(trendPercent - 13) * Math.PI * 2;
    const noise = endValue * (0.012 + intensity * 0.035);
    const wave =
      Math.sin(progress * Math.PI * frequency + phase) * noise +
      Math.sin(progress * Math.PI * secondaryFrequency + secondaryPhase) *
        noise *
        0.55 +
      Math.sin(progress * Math.PI * frequency * 2.9 + phase * 1.7) *
        noise *
        0.22;
    const shock = shocks.reduce(
      (value, item) => value + getShockValue(progress, item),
      0,
    );

    return {
      label: `${index + 1}`,
      value: Number(
        clamp(trend + envelope * wave + shock, 500, 24_000).toFixed(2),
      ),
    };
  });
}

function interpolateSparkPoints({
  fromData,
  progress,
  toData,
}: {
  fromData: ReturnType<typeof buildSparkPoints>;
  progress: number;
  toData: ReturnType<typeof buildSparkPoints>;
}) {
  return toData.map((point, index) => {
    const fromValue = fromData[index]?.value ?? point.value;

    return {
      ...point,
      value: Number(
        (fromValue + (point.value - fromValue) * progress).toFixed(2),
      ),
    };
  });
}

function SparklinePreview({
  curve,
  replayKey,
  trendPercent,
}: {
  curve: SparkCurve;
  replayKey: number;
  trendPercent: number;
}) {
  const data = useMemo(
    () => buildSparkPoints({ endValue: revenueValue, trendPercent }),
    [trendPercent],
  );
  const [displayData, setDisplayData] = useState(data);
  const displayDataRef = useRef(data);
  const morphFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (morphFrameRef.current !== null) {
      window.cancelAnimationFrame(morphFrameRef.current);
    }

    const fromData = displayDataRef.current;

    if (fromData === data) {
      setDisplayData(data);
      return;
    }

    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      startTime ??= timestamp;
      const elapsed = timestamp - startTime;
      const nextProgress = Math.min(elapsed / trendMorphDuration, 1);
      const easedProgress = smoothStep(nextProgress);
      const nextData = interpolateSparkPoints({
        fromData,
        progress: easedProgress,
        toData: data,
      });

      displayDataRef.current = nextData;
      setDisplayData(nextData);

      if (nextProgress < 1) {
        morphFrameRef.current = window.requestAnimationFrame(tick);
      } else {
        morphFrameRef.current = null;
        displayDataRef.current = data;
        setDisplayData(data);
      }
    };

    morphFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (morphFrameRef.current !== null) {
        window.cancelAnimationFrame(morphFrameRef.current);
        morphFrameRef.current = null;
      }
    };
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <AnimatedSparkline
        className="mx-auto w-60"
        curve={curve}
        data={displayData}
        label="Revenue"
        replayKey={replayKey}
        trendPercent={trendPercent}
        valueFormat={{ maximumFractionDigits: 0 }}
        valuePrefix="$"
        width={320}
      />
    </div>
  );
}

export function AnimatedSparklineShowcase() {
  const [curve, setCurve] = useState<SparkCurve>("smooth");
  const [trendPercent, setTrendPercent] = useState(42);
  const [sparklineTrendPercent, setSparklineTrendPercent] =
    useState(trendPercent);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    if (sparklineTrendPercent === trendPercent) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setSparklineTrendPercent(trendPercent);
    }, trendDebounceMs);

    return () => window.clearTimeout(timeout);
  }, [sparklineTrendPercent, trendPercent]);

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="relative rounded-[13px] border border-transparent bg-grayscale-2 p-3 py-32 dark:bg-grayscale-2">
        <button
          className="absolute top-1 right-1 flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-grayscale-3 bg-white px-2 font-medium text-grayscale-11 text-xs transition-colors hover:border-grayscale-4 hover:bg-grayscale-2 dark:border-grayscale-4 dark:bg-grayscale-3 dark:hover:border-grayscale-5 dark:hover:bg-grayscale-4"
          onClick={() => setReplayKey((value) => value + 1)}
          type="button"
        >
          <ArrowClockwiseIcon aria-hidden size={15} weight="bold" />
          Replay
        </button>
        <SparklinePreview
          curve={curve}
          replayKey={replayKey}
          trendPercent={sparklineTrendPercent}
        />
      </div>

      <div className="grid gap-3 rounded-[13px] border border-grayscale-3 bg-grayscale-1 p-3 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none md:grid-cols-[auto_1fr] md:items-center">
        <div className="grid gap-2">
          <p className="font-mono px-2 font-semibold text-[10px] text-grayscale-10 uppercase leading-none">
            Curve
          </p>
          <Tabs.Root
            onValueChange={(value) => {
              if (value !== "smooth" && value !== "sharp") {
                return;
              }

              setCurve(value);
              setReplayKey((currentValue) => currentValue + 1);
            }}
            value={curve}
          >
            <Tabs.List aria-label="Sparkline curve" className="">
              {(["smooth", "sharp"] as const).map((nextCurve) => (
                <Tabs.Tab
                  className={cn(
                    "flex h-6 min-w-14 items-center justify-center rounded-md px-2 py-0 font-medium text-grayscale-11 text-xs capitalize transition-colors data-active:text-grayscale-12",
                    curve === nextCurve && "text-grayscale-12",
                  )}
                  key={nextCurve}
                  value={nextCurve}
                >
                  {nextCurve}
                </Tabs.Tab>
              ))}
              <Tabs.Indicator className="bg-grayscale-3 dark:bg-grayscale-4" />
            </Tabs.List>
          </Tabs.Root>
        </div>

        <Slider.Root
          className="grid min-w-0 gap-2 md:px-3"
          max={trendRange.max}
          min={trendRange.min}
          onValueChange={(value) => setTrendPercent(value)}
          step={1}
          value={trendPercent}
        >
          <div className="flex items-center justify-between gap-3">
            <Slider.Label className="font-mono font-semibold text-[10px] text-grayscale-10 uppercase leading-none">
              Trend
            </Slider.Label>
            <span className="font-number font-semibold text-grayscale-11 text-xs tabular-nums">
              {trendPercent > 0 ? "+" : ""}
              {trendPercent}%
            </span>
          </div>
          <Slider.Control className="flex h-4 w-full cursor-pointer items-center">
            <Slider.Track className="relative h-2 w-full bg-grayscale-3 rounded-full dark:bg-grayscale-5">
              <Slider.Indicator className="absolute h-full bg-grayscale-5 rounded-full dark:bg-grayscale-7" />
              <Slider.Thumb
                aria-label="Trend percentage"
                className="block size-4 rounded-full border border-grayscale-4 bg-white small-shadow outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-grayscale-7 dark:border-grayscale-9 dark:bg-grayscale-8"
              />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>
    </div>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const usageSource = `import { Sparkline } from "@/components/Sparkline";

const data = [
  { label: "Jan", value: 42 },
  { label: "Feb", value: 47 },
  { label: "Mar", value: 44 },
  { label: "Apr", value: 53 },
  { label: "May", value: 57 },
  { label: "Jun", value: 63 },
  { label: "Jul", value: 61 },
  { label: "Aug", value: 72 },
];

export function SparklineExample() {
  return (
    <div className="w-64 text-green-9">
      <Sparkline
        ariaLabel="Revenue trend up"
        data={data}
        glow
        showEndpoint
      />
    </div>
  );
}
`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
