# Dynamic Button v2 (Dinamik Buton v2 (Çok Durumlu Morf)) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Butonlar ve Eylemler` (`Buttons & Actions`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion, Phosphor Icons` · **Fizik:** `Spring physics: stiffness 420, damping 32, mass 0.9, morphing boundary border-radius transition: 12px -> 24px -> 12px`  
> **Etiketler:** `Multi-state Button, Morphing UI, Physics Feedback, Micro-interaction`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Farklı eylem durumları (Yükleniyor, Onaylandı, Hata, İptal) arasında geometrisini, ikonlarını ve etiketini dönüştüren gelişmiş buton.

An advanced multi-state button that smoothly morphs geometry, icons, and labels across complex workflows.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Spring physics: stiffness 420, damping 32, mass 0.9, morphing boundary border-radius transition: 12px -> 24px -> 12px`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Dynamic Button v2" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Dynamic Button v2 (Dinamik Buton v2 (Çok Durumlu Morf))
- Category: Buttons & Actions
- Core Philosophy: An advanced multi-state button that smoothly morphs geometry, icons, and labels across complex workflows.
- Motion & Spring Physics: Spring physics: stiffness 420, damping 32, mass 0.9, morphing boundary border-radius transition: 12px -> 24px -> 12px
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Tailwind CSS, Motion, Phosphor Icons.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/DynamicButtonV2.tsx`)
```tsx
"use client";

import {
  AnimatePresence,
  animate,
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import {
  forwardRef,
  type Key,
  type ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { cn } from "@/helpers/classname-helper";
import { buttonSurfaceClassNames } from "./public/Button";

type DynamicButtonTone = "default" | "success" | "danger";
type DynamicButtonVariant = "primary" | "secondary";
type DynamicButtonSize = "sm" | "md";

const uiEaseOut = [0.23, 1, 0.32, 1] as const;
const resizeSpring = { bounce: 0, duration: 0.34, type: "spring" } as const;
const wordStaggerSeconds = 0.04;
const maxWordDelaySeconds = 0.12;

const toneClassNames: Record<
  DynamicButtonVariant,
  Record<DynamicButtonTone, string>
> = {
  primary: {
    default:
      "bg-grayscale-12 text-grayscale-2 hover:bg-grayscale-12/90 dark:bg-grayscale-5 dark:text-grayscale-12 dark:hover:bg-grayscale-6",
    success:
      "bg-green-11 text-white hover:bg-green-11/90 dark:bg-green-5 dark:text-green-12 dark:hover:bg-green-6",
    danger:
      "bg-red-10 text-white hover:bg-red-10/90 dark:bg-red-5 dark:text-red-12 dark:hover:bg-red-6",
  },
  secondary: {
    default:
      "border-grayscale-4 bg-white text-grayscale-11 hover:bg-grayscale-1 dark:border-grayscale-5 dark:bg-grayscale-3 dark:hover:bg-grayscale-4",
    success:
      "border-green-6 bg-green-2 text-green-11 hover:bg-green-3 dark:border-green-6 dark:bg-green-3 dark:hover:bg-green-4",
    danger:
      "border-red-6 bg-red-2 text-red-11 hover:bg-red-3 dark:border-red-6 dark:bg-red-3 dark:hover:bg-red-4",
  },
};

const sizeClassNames: Record<
  DynamicButtonSize,
  { button: string; content: string }
> = {
  sm: { button: "h-7 rounded-lg", content: "px-2" },
  md: { button: "h-9 rounded-[10px]", content: "px-3" },
};

type Segment = {
  key: string;
  text: string;
};

// Key each word by its text and occurrence so words shared between labels
// keep their identity and slide into place instead of re-entering.
function toSegments(text: string): Segment[] {
  const occurrences = new Map<string, number>();

  return text
    .split(/(\s+)/)
    .filter(Boolean)
    .map((segment) => {
      const occurrence = occurrences.get(segment) ?? 0;
      occurrences.set(segment, occurrence + 1);

      return { key: `${segment}:${occurrence}`, text: segment };
    });
}

function MorphText({ children }: { children: string }) {
  const shouldReduceMotion = useReducedMotion();
  const segments = useMemo(() => toSegments(children), [children]);
  const offset = shouldReduceMotion ? 0 : 8;
  const blur = shouldReduceMotion ? "blur(0px)" : "blur(2px)";

  return (
    <span className="relative inline-flex whitespace-pre">
      <AnimatePresence initial={false} mode="popLayout">
        {segments.map((segment, index) => (
          <motion.span
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              transition: {
                delay: shouldReduceMotion
                  ? 0
                  : Math.min(index * wordStaggerSeconds, maxWordDelaySeconds),
                duration: 0.22,
                ease: uiEaseOut,
              },
              y: 0,
            }}
            className="inline-block"
            exit={{
              filter: blur,
              opacity: 0,
              transition: { duration: 0.16, ease: uiEaseOut },
              y: -offset,
            }}
            initial={{ filter: blur, opacity: 0, y: offset }}
            key={segment.key}
            layout={shouldReduceMotion ? false : "position"}
            transition={{ layout: resizeSpring }}
          >
            {segment.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}

export type DynamicButtonProps = Omit<
  HTMLMotionProps<"button">,
  "animate" | "children" | "initial" | "ref" | "transition"
> & {
  children: string;
  icon?: ReactNode;
  iconKey?: Key;
  size?: DynamicButtonSize;
  tone?: DynamicButtonTone;
  variant?: DynamicButtonVariant;
};

export const DynamicButton = forwardRef<HTMLButtonElement, DynamicButtonProps>(
  function DynamicButton(
    {
      children,
      className,
      icon,
      iconKey,
      size = "md",
      style,
      tone = "default",
      type = "button",
      variant = "primary",
      ...props
    },
    forwardedRef,
  ) {
    const shouldReduceMotion = useReducedMotion();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLSpanElement>(null);
    const hasMeasuredRef = useRef(false);
    const width = useMotionValue<number | "auto">("auto");
    const hasIcon = icon != null;

    useImperativeHandle(
      forwardedRef,
      () => buttonRef.current as HTMLButtonElement,
    );

    // The content row is sized to the incoming label straight away (exiting
    // words pop out of flow), so the button only has to chase its width.
    const syncWidth = useCallback(() => {
      const button = buttonRef.current;
      const content = contentRef.current;

      if (!button || !content) {
        return;
      }

      const borderWidth = button.offsetWidth - button.clientWidth;
      const nextWidth = content.offsetWidth + borderWidth;

      if (nextWidth === width.get()) {
        return;
      }

      if (!hasMeasuredRef.current || shouldReduceMotion) {
        hasMeasuredRef.current = true;
        width.jump(nextWidth);
        return;
      }

      animate(width, nextWidth, resizeSpring);
    }, [shouldReduceMotion, width]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: re-measure whenever the rendered content changes.
    useLayoutEffect(() => {
      syncWidth();
    }, [children, hasIcon, size, syncWidth]);

    useEffect(() => {
      const content = contentRef.current;

      if (!content) {
        return;
      }

      const observer = new ResizeObserver(syncWidth);
      observer.observe(content);

      return () => observer.disconnect();
    }, [syncWidth]);

    return (
      <motion.button
        {...props}
        className={cn(
          "inline-flex shrink-0 cursor-pointer items-center overflow-hidden whitespace-nowrap border font-medium text-sm",
          "transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
          "outline-offset-2 focus-visible:outline-2 focus-visible:outline-grayscale-8",
          sizeClassNames[size].button,
          buttonSurfaceClassNames[variant],
          toneClassNames[variant][tone],
          className,
        )}
        data-tone={tone}
        ref={buttonRef}
        style={{ ...style, width }}
        type={type}
      >
        <span aria-live="polite" className="sr-only">
          {children}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex w-max shrink-0 items-center gap-1.5",
            sizeClassNames[size].content,
          )}
          ref={contentRef}
        >
          {hasIcon ? (
            <span className="relative inline-grid size-[15px] shrink-0 place-items-center">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                  className="col-start-1 row-start-1 flex size-[15px] items-center justify-center"
                  exit={{
                    filter: shouldReduceMotion ? "blur(0px)" : "blur(2px)",
                    opacity: 0,
                    scale: shouldReduceMotion ? 1 : 0.4,
                  }}
                  initial={{
                    filter: shouldReduceMotion ? "blur(0px)" : "blur(2px)",
                    opacity: 0,
                    scale: shouldReduceMotion ? 1 : 0.4,
                  }}
                  key={iconKey ?? children}
                  transition={{ duration: 0.2, ease: uiEaseOut }}
                >
                  {icon}
                </motion.span>
              </AnimatePresence>
            </span>
          ) : null}
          <MorphText>{children}</MorphText>
        </span>
      </motion.button>
    );
  },
);

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/dynamic-button-v2/dynamic-button-v2-showcase.tsx`)
```tsx
"use client";

import {
  ArrowClockwiseIcon,
  CaretRightIcon,
  CheckCircleIcon,
  CheckIcon,
  CopyIcon,
  FloppyDiskIcon,
  type Icon,
  type IconWeight,
  RocketLaunchIcon,
  SpinnerGapIcon,
  UserCheckIcon,
  UserPlusIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { DynamicButton } from "@/components/DynamicButtonV2";
import { Tabs } from "@/components/public/Tabs";
import { cn } from "@/helpers/classname-helper";

type FrameState = "active" | "error" | "idle" | "pending" | "success";

type Frame = {
  // Automatically move to another frame after a pause.
  after?: { frame: string; ms: number };
  icon: Icon;
  iconClassName?: string;
  iconWeight?: IconWeight;
  id: string;
  label: string;
  // The frame a click on the button moves to.
  press?: string;
  state: FrameState;
  tone?: "danger" | "default" | "success";
};

type Scenario = {
  frames: readonly Frame[];
  icon: Icon;
  id: string;
  label: string;
};

const spinner = {
  icon: SpinnerGapIcon,
  iconClassName: "animate-spin",
  state: "pending",
} as const;

const success = {
  icon: CheckIcon,
  state: "success",
  tone: "success",
} as const;

const scenarios: readonly Scenario[] = [
  {
    frames: [
      {
        icon: CopyIcon,
        id: "idle",
        label: "Copy link",
        press: "copied",
        state: "idle",
      },
      {
        after: { frame: "idle", ms: 1600 },
        icon: CheckCircleIcon,
        iconClassName: "text-green-9",
        iconWeight: "fill",
        id: "copied",
        label: "Copied",
        press: "copied",
        state: "success",
      },
    ],
    icon: CopyIcon,
    id: "copy",
    label: "Copy",
  },
  {
    frames: [
      {
        icon: FloppyDiskIcon,
        id: "idle",
        label: "Save changes",
        press: "saving",
        state: "idle",
      },
      {
        ...spinner,
        after: { frame: "saved", ms: 1400 },
        id: "saving",
        label: "Saving changes",
      },
      {
        ...success,
        after: { frame: "idle", ms: 1600 },
        id: "saved",
        label: "Saved",
      },
    ],
    icon: FloppyDiskIcon,
    id: "save",
    label: "Save",
  },
  {
    frames: [
      {
        icon: UserPlusIcon,
        id: "idle",
        label: "Follow",
        press: "following",
        state: "idle",
      },
      {
        icon: UserCheckIcon,
        id: "following",
        label: "Following",
        press: "idle",
        state: "active",
      },
    ],
    icon: UserPlusIcon,
    id: "follow",
    label: "Follow",
  },
  {
    frames: [
      {
        icon: RocketLaunchIcon,
        id: "idle",
        label: "Deploy",
        press: "deploying",
        state: "idle",
      },
      {
        ...spinner,
        after: { frame: "failed", ms: 1600 },
        id: "deploying",
        label: "Deploying",
      },
      {
        after: { frame: "retry", ms: 1200 },
        icon: WarningCircleIcon,
        iconWeight: "fill",
        id: "failed",
        label: "Failed",
        state: "error",
        tone: "danger",
      },
      {
        icon: ArrowClockwiseIcon,
        id: "retry",
        label: "Retry",
        press: "redeploying",
        state: "error",
        tone: "danger",
      },
      {
        ...spinner,
        after: { frame: "deployed", ms: 1600 },
        id: "redeploying",
        label: "Deploying",
      },
      {
        ...success,
        after: { frame: "idle", ms: 1800 },
        id: "deployed",
        label: "Deployed",
      },
    ],
    icon: RocketLaunchIcon,
    id: "deploy",
    label: "Deploy",
  },
];

const variants = ["primary", "secondary"] as const;

type Variant = (typeof variants)[number];

const stateDotClassNames: Record<FrameState, string> = {
  active: "bg-accent-9",
  error: "bg-red-9",
  idle: "bg-grayscale-8",
  pending: "bg-amber-9",
  success: "bg-green-9",
};

const segmentedListClassName =
  "rounded-[10px] border border-grayscale-3 bg-grayscale-2 dark:border-grayscale-4 dark:bg-grayscale-3";

const segmentedTabClassName =
  "flex h-7 items-center gap-1.5 rounded-[9px] px-2.5 font-medium text-grayscale-10 text-xs transition-colors hover:text-grayscale-11 data-active:text-grayscale-12";

const segmentedIndicatorClassName =
  "rounded-[9px] border border-grayscale-3 bg-white dark:border-grayscale-6 dark:bg-grayscale-5";

export function DynamicButtonV2Showcase() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const [frameId, setFrameId] = useState(scenarios[0].frames[0].id);
  const [variant, setVariant] = useState<Variant>("primary");
  const timerRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const scenario =
    scenarios.find((candidate) => candidate.id === scenarioId) ?? scenarios[0];
  const frame =
    scenario.frames.find((candidate) => candidate.id === frameId) ??
    scenario.frames[0];
  const FrameIcon = frame.icon;

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  function goTo(nextScenario: Scenario, nextFrameId: string) {
    const nextFrame = nextScenario.frames.find(
      (candidate) => candidate.id === nextFrameId,
    );

    if (!nextFrame) {
      return;
    }

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setFrameId(nextFrame.id);

    const { after } = nextFrame;

    if (after) {
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        goTo(nextScenario, after.frame);
      }, after.ms);
    }
  }

  function handlePress() {
    if (frame.press) {
      goTo(scenario, frame.press);
    }
  }

  function selectScenario(nextId: string) {
    const nextScenario = scenarios.find((candidate) => candidate.id === nextId);

    if (!nextScenario) {
      return;
    }

    setScenarioId(nextScenario.id);
    goTo(nextScenario, nextScenario.frames[0].id);
  }

  return (
    <div className="relative flex min-h-96 w-full flex-col overflow-hidden rounded-[13px] border border-grayscale-3 bg-white small-shadow dark:border-grayscale-4 dark:bg-grayscale-2 dark:shadow-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--color-grayscale-5)_1px,transparent_1.5px)] bg-size-[14px_14px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_65%)] dark:opacity-40"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-2 p-3">
        <Tabs.Root onValueChange={selectScenario} value={scenario.id}>
          <Tabs.List aria-label="Scenario" className={segmentedListClassName}>
            {scenarios.map((option) => {
              const OptionIcon = option.icon;

              return (
                <Tabs.Tab
                  className={segmentedTabClassName}
                  key={option.id}
                  value={option.id}
                >
                  <OptionIcon
                    aria-hidden="true"
                    className="hidden sm:block"
                    size={13}
                    weight="bold"
                  />
                  {option.label}
                </Tabs.Tab>
              );
            })}
            <Tabs.Indicator className={segmentedIndicatorClassName} />
          </Tabs.List>
        </Tabs.Root>

        <Tabs.Root
          onValueChange={(value: Variant) => setVariant(value)}
          value={variant}
        >
          <Tabs.List aria-label="Variant" className={segmentedListClassName}>
            {variants.map((option) => (
              <Tabs.Tab
                className={segmentedTabClassName}
                key={option}
                value={option}
              >
                {option === "primary" ? "Primary" : "Secondary"}
              </Tabs.Tab>
            ))}
            <Tabs.Indicator className={segmentedIndicatorClassName} />
          </Tabs.List>
        </Tabs.Root>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 py-12">
        <DynamicButton
          aria-busy={frame.state === "pending"}
          icon={
            <FrameIcon
              aria-hidden="true"
              className={frame.iconClassName}
              size={15}
              weight={frame.iconWeight ?? "bold"}
            />
          }
          iconKey={`${scenario.id}:${frame.id}`}
          onClick={handlePress}
          tone={frame.tone}
          variant={variant}
        >
          {frame.label}
        </DynamicButton>
      </div>

      <LayoutGroup id="dynamic-button-states">
        <ol
          aria-label="Button states"
          className="relative flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1 p-3"
        >
          {scenario.frames.map((option, index) => {
            const isActive = option.id === frame.id;

            return (
              <li className="flex items-center gap-0.5" key={option.id}>
                {index > 0 ? (
                  <CaretRightIcon
                    aria-hidden="true"
                    className="text-grayscale-7"
                    size={10}
                    weight="bold"
                  />
                ) : null}
                <button
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "relative flex h-6 cursor-pointer items-center gap-1.5 rounded-md px-2 font-mono font-semibold text-[10px] uppercase leading-none transition-colors",
                    isActive
                      ? "text-grayscale-12"
                      : "text-grayscale-9 hover:text-grayscale-11",
                  )}
                  onClick={() => goTo(scenario, option.id)}
                  type="button"
                >
                  {isActive ? (
                    <motion.span
                      className="absolute inset-0 rounded-md bg-grayscale-3 dark:bg-grayscale-4"
                      layoutId="active-state"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { bounce: 0, duration: 0.3, type: "spring" }
                      }
                    />
                  ) : null}
                  <span
                    className={cn(
                      "relative size-1.5 rounded-full transition-[background-color,opacity] duration-200",
                      stateDotClassNames[option.state],
                      isActive ? "opacity-100" : "opacity-50",
                    )}
                  />
                  <span className="relative">{option.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </LayoutGroup>
    </div>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const usageSource = `import {
  CheckIcon,
  FloppyDiskIcon,
  SpinnerGapIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { DynamicButton } from "./DynamicButton";

const states = {
  idle: { icon: FloppyDiskIcon, label: "Save changes", tone: "default" },
  saving: { icon: SpinnerGapIcon, label: "Saving changes", tone: "default" },
  saved: { icon: CheckIcon, label: "Saved", tone: "success" },
} as const;

type SaveStatus = keyof typeof states;

export function SaveButton({ onSave }: { onSave: () => Promise<void> }) {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const { icon: Icon, label, tone } = states[status];

  async function handleClick() {
    if (status !== "idle") {
      return;
    }

    setStatus("saving");
    await onSave();
    setStatus("saved");
    window.setTimeout(() => setStatus("idle"), 1600);
  }

  return (
    <DynamicButton
      aria-busy={status === "saving"}
      icon={
        <Icon
          aria-hidden="true"
          className={status === "saving" ? "animate-spin" : undefined}
          size={15}
          weight="bold"
        />
      }
      iconKey={status}
      onClick={handleClick}
      tone={tone}
    >
      {label}
    </DynamicButton>
  );
}
`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
