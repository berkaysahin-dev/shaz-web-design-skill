# Dynamic Button (Dinamik Boyutlanan Buton) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Butonlar ve Eylemler` (`Buttons & Actions`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion (layout prop)` · **Fizik:** `Layout transition: spring damping: 30, stiffness: 380, label crossfade: 180ms easeInOut`  
> **Etiketler:** `Layout Animation, Dynamic Width, Morphing Button, Smooth Resizing, State Transition`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
İçerik, durum veya ikon değiştikçe genişliğini ve yüksekliğini sarsıntısız, akıcı bir yay fiziğiyle ayarlayan dinamik buton.

A button that smoothly resizes as its label animates.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Layout transition: spring damping: 30, stiffness: 380, label crossfade: 180ms easeInOut`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Dynamic Button" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Dynamic Button (Dinamik Boyutlanan Buton)
- Category: Buttons & Actions
- Core Philosophy: A button that smoothly resizes as its label animates.
- Motion & Spring Physics: Layout transition: spring damping: 30, stiffness: 380, label crossfade: 180ms easeInOut
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Tailwind CSS, Motion (layout prop).
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/DynamicButton.tsx`)
```tsx
"use client";

import {
  AnimatePresence,
  type HTMLMotionProps,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  forwardRef,
  type Key,
  type ReactNode,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { getButtonClassName } from "./public/Button";

const uiEaseOut = [0.23, 1, 0.32, 1] as const;

export type DynamicButtonProps = Omit<
  HTMLMotionProps<"button">,
  "animate" | "children" | "initial" | "ref" | "transition"
> & {
  children: string;
  icon?: ReactNode;
  stateKey?: Key;
  variant?: "primary" | "secondary";
  width?: "content" | "full";
};

export const DynamicButton = forwardRef<HTMLButtonElement, DynamicButtonProps>(
  function DynamicButton(
    {
      children,
      className,
      icon,
      stateKey,
      type = "button",
      variant = "primary",
      width = "content",
      ...props
    },
    forwardedRef,
  ) {
    const shouldReduceMotion = useReducedMotion();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);
    const measurementSignatureRef = useRef("");
    const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
    const iconKey = stateKey ?? children;
    const measurementSignature = [
      children,
      className,
      icon ? "icon" : "no-icon",
      stateKey,
      variant,
    ].join("\0");
    const shouldMeasureWidth = width === "content";
    const widthTransition = shouldReduceMotion
      ? { duration: 0 }
      : { bounce: 0, duration: 0.26, type: "spring" as const };
    const contentTransition = {
      duration: shouldReduceMotion ? 0.16 : 0.18,
      ease: uiEaseOut,
    };
    const contentVisible = { opacity: 1, transform: "translateY(0px)" };
    const contentInitial = shouldReduceMotion
      ? { opacity: 0, transform: "translateY(0px)" }
      : { opacity: 0, transform: "translateY(8px)" };
    const contentExit = shouldReduceMotion
      ? { opacity: 0, transform: "translateY(0px)" }
      : { opacity: 0, transform: "translateY(-8px)" };

    useImperativeHandle(
      forwardedRef,
      () => buttonRef.current as HTMLButtonElement,
    );

    const syncWidth = useCallback(() => {
      const button = buttonRef.current;
      const measure = measureRef.current;

      if (!button || !measure || !shouldMeasureWidth) {
        return;
      }

      const styles = window.getComputedStyle(button);
      const horizontalPadding =
        Number.parseFloat(styles.paddingLeft) +
        Number.parseFloat(styles.paddingRight) +
        Number.parseFloat(styles.borderLeftWidth) +
        Number.parseFloat(styles.borderRightWidth);
      const nextWidth = Math.ceil(measure.scrollWidth + horizontalPadding);

      setMeasuredWidth((currentWidth) =>
        currentWidth === nextWidth ? currentWidth : nextWidth,
      );
    }, [shouldMeasureWidth]);

    useLayoutEffect(() => {
      const measure = measureRef.current;

      if (!measure || !shouldMeasureWidth) {
        setMeasuredWidth(null);
        return;
      }

      syncWidth();

      const observer = new ResizeObserver(syncWidth);
      observer.observe(measure);
      window.addEventListener("resize", syncWidth);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", syncWidth);
      };
    }, [shouldMeasureWidth, syncWidth]);

    useLayoutEffect(() => {
      if (measurementSignatureRef.current === measurementSignature) {
        return;
      }

      measurementSignatureRef.current = measurementSignature;
      syncWidth();
    }, [measurementSignature, syncWidth]);

    return (
      <motion.button
        {...props}
        className={getButtonClassName({
          className: `relative overflow-hidden whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${width === "full" ? "w-full" : ""} ${className ?? ""}`,
          variant,
        })}
        animate={
          width === "content" ? { width: measuredWidth ?? "auto" } : undefined
        }
        initial={false}
        ref={buttonRef}
        transition={
          width === "content" ? { width: widthTransition } : undefined
        }
        type={type}
      >
        <span className="relative inline-flex items-center gap-1.5">
          {icon ? (
            <span className="relative inline-grid size-[15px] shrink-0 overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  animate={contentVisible}
                  className="col-start-1 row-start-1 flex size-[15px] items-center justify-center"
                  exit={contentExit}
                  initial={contentInitial}
                  key={iconKey}
                  transition={contentTransition}
                >
                  {icon}
                </motion.span>
              </AnimatePresence>
            </span>
          ) : null}

          <span className="relative inline-grid overflow-hidden">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                animate={contentVisible}
                className="col-start-1 row-start-1 block"
                exit={contentExit}
                initial={contentInitial}
                key={children}
                transition={contentTransition}
              >
                {children}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inline-flex items-center gap-1.5 opacity-0"
          ref={measureRef}
        >
          {icon ? (
            <span className="flex size-[15px] shrink-0 items-center justify-center">
              {icon}
            </span>
          ) : null}
          <span>{children}</span>
        </span>
      </motion.button>
    );
  },
);

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/dynamic-button/dynamic-button-showcase.tsx`)
```tsx
"use client";

import {
  CheckCircleIcon,
  CheckIcon,
  CommandIcon,
  CopyIcon,
  FloppyDiskIcon,
  type Icon,
  SpinnerGapIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { DynamicButton } from "@/components/DynamicButton";
import { Tabs } from "@/components/public/Tabs";

type ButtonState = {
  icon: Icon;
  iconClassName?: string;
  iconWeight?: "bold" | "duotone" | "fill" | "light" | "regular" | "thin";
  label: string;
  stateKey: string;
};

type ButtonAction = ButtonState & {
  success?: ButtonState;
  successDelayMs?: number;
};

const buttonActions: readonly ButtonAction[] = [
  {
    icon: FloppyDiskIcon,
    label: "Save",
    stateKey: "save",
    success: {
      icon: CheckCircleIcon,
      iconClassName: "text-green-9",
      iconWeight: "fill",
      label: "Save",
      stateKey: "saved",
    },
  },
  {
    icon: CopyIcon,
    label: "Copy",
    stateKey: "copy",
    success: {
      icon: CheckCircleIcon,
      iconClassName: "text-green-9",
      iconWeight: "fill",
      label: "Copy",
      stateKey: "copied",
    },
  },
  {
    icon: UsersIcon,
    label: "Invite teammates",
    stateKey: "invite",
  },
  {
    icon: CommandIcon,
    label: "Open command palette",
    stateKey: "command",
  },
  {
    icon: SpinnerGapIcon,
    iconClassName: "animate-spin",
    label: "Processing",
    stateKey: "processing",
    successDelayMs: 3000,
    success: {
      icon: CheckIcon,
      label: "Done",
      stateKey: "done",
    },
  },
] as const;

const feedbackDurationMs = 1200;

export function DynamicButtonShowcase() {
  const [actionIndex, setActionIndex] = useState(0);
  const [feedback, setFeedback] = useState<ButtonState | null>(null);
  const [variant, setVariant] = useState<"primary" | "secondary">("primary");
  const feedbackTimerRef = useRef<number | null>(null);
  const successTimerRef = useRef<number | null>(null);

  const currentAction = buttonActions[actionIndex];
  const currentSuccess = currentAction.success;
  const visibleState = feedback ?? currentAction;
  const VisibleIcon = visibleState.icon;

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current !== null) {
        window.clearTimeout(feedbackTimerRef.current);
      }

      if (successTimerRef.current !== null) {
        window.clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  function clearFeedback() {
    if (feedbackTimerRef.current !== null) {
      window.clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = null;
    }

    if (successTimerRef.current !== null) {
      window.clearTimeout(successTimerRef.current);
      successTimerRef.current = null;
    }

    setFeedback(null);
  }

  function showFeedback(nextFeedback: ButtonState) {
    clearFeedback();
    setFeedback(nextFeedback);
    feedbackTimerRef.current = window.setTimeout(() => {
      setFeedback(null);
      feedbackTimerRef.current = null;
    }, feedbackDurationMs);
  }

  function handleActionClick() {
    if (!currentSuccess) {
      return;
    }

    if (currentAction.successDelayMs) {
      return;
    }

    showFeedback(currentSuccess);
  }

  function selectAction(nextStateKey: string) {
    const nextIndex = buttonActions.findIndex(
      (action) => action.stateKey === nextStateKey,
    );

    if (nextIndex === -1) {
      return;
    }

    const nextAction = buttonActions[nextIndex];

    clearFeedback();
    setActionIndex(nextIndex);

    const delayedSuccess = nextAction.success;
    const delayMs = nextAction.successDelayMs;

    if (delayedSuccess && delayMs) {
      successTimerRef.current = window.setTimeout(() => {
        showFeedback(delayedSuccess);
        successTimerRef.current = null;
      }, delayMs);
    }
  }

  return (
    <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
      <div className="flex min-h-72 items-center justify-center bg-white p-8 dark:bg-grayscale-2">
        <DynamicButton
          className="h-9 px-3 text-sm"
          icon={
            <VisibleIcon
              aria-hidden="true"
              className={visibleState.iconClassName}
              size={15}
              weight={visibleState.iconWeight ?? "bold"}
            />
          }
          onClick={handleActionClick}
          stateKey={`${visibleState.stateKey}:${visibleState.label}`}
          variant={variant}
        >
          {visibleState.label}
        </DynamicButton>
      </div>

      <div className="grid gap-4 border-grayscale-3 border-t p-4 dark:border-grayscale-4">
        <div className="flex min-w-0 flex-col gap-2">
          <span className="font-mono font-semibold text-[10px] text-grayscale-10 uppercase leading-none">
            Demo
          </span>
          <Tabs.Root
            onValueChange={selectAction}
            value={currentAction.stateKey}
          >
            <Tabs.List
              aria-label="Dynamic button demo"
              className="flex-wrap gap-1.5"
            >
              {buttonActions.map((action) => {
                const ActionIcon = action.icon;

                return (
                  <Tabs.Tab
                    className="flex h-7 items-center gap-1.5 rounded-md px-2 font-medium text-grayscale-11 text-xs transition-colors data-active:bg-grayscale-3 data-active:text-grayscale-12 data-active:small-shadow dark:data-active:bg-grayscale-4"
                    key={action.stateKey}
                    value={action.stateKey}
                  >
                    <ActionIcon aria-hidden="true" size={15} weight="bold" />
                    {action.label}
                  </Tabs.Tab>
                );
              })}
            </Tabs.List>
          </Tabs.Root>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono font-semibold text-[10px] text-grayscale-10 uppercase leading-none">
            Variant
          </span>
          <div className="flex flex-wrap gap-1.5">
            {(["primary", "secondary"] as const).map((nextVariant) => (
              <button
                className="h-7 rounded-md px-2 font-medium text-grayscale-11 text-xs transition-colors data-[active=true]:bg-grayscale-3 data-[active=true]:text-grayscale-12 data-[active=true]:small-shadow dark:data-[active=true]:bg-grayscale-4"
                data-active={variant === nextVariant}
                key={nextVariant}
                onClick={() => setVariant(nextVariant)}
                type="button"
              >
                {nextVariant === "primary" ? "Primary" : "Secondary"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const componentSource = `import {
  AnimatePresence,
  type HTMLMotionProps,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  forwardRef,
  type Key,
  type ReactNode,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
	} from "react";
	
	type DynamicButtonVariant = "primary" | "secondary";
	
	const uiEaseOut = [0.23, 1, 0.32, 1] as const;
	
	export type DynamicButtonProps = Omit<
	  HTMLMotionProps<"button">,
  "animate" | "children" | "initial" | "ref" | "transition"
> & {
  children: string;
  icon?: ReactNode;
  stateKey?: Key;
  variant?: DynamicButtonVariant;
  width?: "content" | "full";
};

const buttonClasses: Record<DynamicButtonVariant, string> = {
  primary: "border-neutral-950 bg-neutral-950 text-white hover:bg-neutral-800",
  secondary:
    "border-neutral-200 bg-white text-neutral-950 hover:border-neutral-300 hover:bg-neutral-50",
};

function getButtonClassName({
  className,
  variant = "primary",
}: {
  className?: string;
  variant?: DynamicButtonVariant;
}) {
  return [
    "inline-flex h-7 cursor-pointer items-center justify-center gap-1.5 rounded-lg border px-2 text-sm font-medium transition-colors",
    buttonClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export const DynamicButton = forwardRef<HTMLButtonElement, DynamicButtonProps>(
  function DynamicButton(
    {
      children,
      className,
      icon,
      stateKey,
      type = "button",
      variant = "primary",
      width = "content",
      ...props
    },
    forwardedRef,
  ) {
    const shouldReduceMotion = useReducedMotion();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);
    const measurementSignatureRef = useRef("");
    const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
    const iconKey = stateKey ?? children;
    const measurementSignature = [
      children,
      className,
      icon ? "icon" : "no-icon",
      stateKey,
      variant,
    ].join("\\0");
	    const shouldMeasureWidth = width === "content";
	    const widthTransition = shouldReduceMotion
	      ? { duration: 0 }
	      : { bounce: 0, duration: 0.26, type: "spring" as const };
	    const contentTransition = {
	      duration: shouldReduceMotion ? 0.16 : 0.18,
	      ease: uiEaseOut,
	    };
	    const contentVisible = { opacity: 1, transform: "translateY(0px)" };
	    const contentInitial = shouldReduceMotion
	      ? { opacity: 0, transform: "translateY(0px)" }
	      : { opacity: 0, transform: "translateY(8px)" };
	    const contentExit = shouldReduceMotion
	      ? { opacity: 0, transform: "translateY(0px)" }
	      : { opacity: 0, transform: "translateY(-8px)" };

    useImperativeHandle(
      forwardedRef,
      () => buttonRef.current as HTMLButtonElement,
    );

    const syncWidth = useCallback(() => {
      const button = buttonRef.current;
      const measure = measureRef.current;

      if (!button || !measure || !shouldMeasureWidth) {
        return;
      }

      const styles = window.getComputedStyle(button);
      const horizontalPadding =
        Number.parseFloat(styles.paddingLeft) +
        Number.parseFloat(styles.paddingRight) +
        Number.parseFloat(styles.borderLeftWidth) +
        Number.parseFloat(styles.borderRightWidth);
      const nextWidth = Math.ceil(measure.scrollWidth + horizontalPadding);

      setMeasuredWidth((currentWidth) =>
        currentWidth === nextWidth ? currentWidth : nextWidth,
      );
    }, [shouldMeasureWidth]);

    useLayoutEffect(() => {
      const measure = measureRef.current;

      if (!measure || !shouldMeasureWidth) {
        setMeasuredWidth(null);
        return;
      }

      syncWidth();

      const observer = new ResizeObserver(syncWidth);
      observer.observe(measure);
      window.addEventListener("resize", syncWidth);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", syncWidth);
      };
    }, [shouldMeasureWidth, syncWidth]);

    useLayoutEffect(() => {
      if (measurementSignatureRef.current === measurementSignature) {
        return;
      }

      measurementSignatureRef.current = measurementSignature;
      syncWidth();
    }, [measurementSignature, syncWidth]);

    return (
      <motion.button
        {...props}
        animate={
          width === "content" ? { width: measuredWidth ?? "auto" } : undefined
        }
	        className={getButtonClassName({
	          className: [
	            "relative overflow-hidden whitespace-nowrap",
	            "transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
	            width === "full" ? "w-full" : "",
	            className,
	          ]
            .filter(Boolean)
            .join(" "),
          variant,
	        })}
	        initial={false}
	        ref={buttonRef}
	        transition={width === "content" ? { width: widthTransition } : undefined}
	        type={type}
	      >
        <span className="relative inline-flex items-center gap-1.5">
          {icon ? (
            <span className="relative inline-grid size-[15px] shrink-0 overflow-hidden">
	              <AnimatePresence initial={false} mode="popLayout">
	                <motion.span
	                  animate={contentVisible}
	                  className="col-start-1 row-start-1 flex size-[15px] items-center justify-center"
	                  exit={contentExit}
	                  initial={contentInitial}
	                  key={iconKey}
	                  transition={contentTransition}
	                >
                  {icon}
                </motion.span>
              </AnimatePresence>
            </span>
          ) : null}

          <span className="relative inline-grid overflow-hidden">
	            <AnimatePresence initial={false} mode="popLayout">
	              <motion.span
	                animate={contentVisible}
	                className="col-start-1 row-start-1 block"
	                exit={contentExit}
	                initial={contentInitial}
	                key={children}
	                transition={contentTransition}
	              >
                {children}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inline-flex items-center gap-1.5 opacity-0"
          ref={measureRef}
        >
          {icon ? (
            <span className="flex size-[15px] shrink-0 items-center justify-center">
              {icon}
            </span>
          ) : null}
          <span>{children}</span>
        </span>
      </motion.button>
    );
  },
);
`;

export const usageSource = `import { CheckCircleIcon, CopyIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { DynamicButton } from "./DynamicButton";

export function DynamicButtonExample() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);
  const Icon = copied ? CheckCircleIcon : CopyIcon;

  function handleCopy() {
    setCopied(true);

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setCopied(false);
      timerRef.current = null;
    }, 1200);
  }

  return (
    <DynamicButton
      icon={
        <Icon
          aria-hidden="true"
          className={copied ? "text-green-9" : undefined}
          size={15}
          weight={copied ? "fill" : "bold"}
        />
      }
      onClick={handleCopy}
      stateKey={copied ? "copied" : "copy"}
      type="button"
    >
      Copy invite link
    </DynamicButton>
  );
}
`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
