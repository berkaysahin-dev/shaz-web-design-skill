# Hold to Confirm (Basılı Tut ve Onayla (Zamanlı Geri Al)) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Butonlar ve Eylemler` (`Buttons & Actions`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion` · **Fizik:** `Fill duration: 1200ms linear hold progress, release decay: 150ms spring reverse, undo notification slide-in: 250ms spring`  
> **Etiketler:** `Destructive Action Guard, Hold to Confirm, Undo Toast, Progress Ring, Micro-interaction`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Kritik eylemler için basılı tutuldukça dolan progress halkası ve ardından zamanlı geri alma (Undo) bildirimi sunan onay butonu.

A deliberate action that fills while held, then offers a timed undo.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Fill duration: 1200ms linear hold progress, release decay: 150ms spring reverse, undo notification slide-in: 250ms spring`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Hold to Confirm" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Hold to Confirm (Basılı Tut ve Onayla (Zamanlı Geri Al))
- Category: Buttons & Actions
- Core Philosophy: A deliberate action that fills while held, then offers a timed undo.
- Motion & Spring Physics: Fill duration: 1200ms linear hold progress, release decay: 150ms spring reverse, undo notification slide-in: 250ms spring
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Tailwind CSS, Motion.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/HoldToConfirmButton.tsx`)
```tsx
"use client";

import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { useReducedMotion } from "motion/react";
import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/helpers/classname-helper";

type HoldToConfirmButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "children" | "onClick"
> & {
  children?: ReactNode;
  confirmedContent?: ReactNode;
  duration?: number;
  onConfirm: (input: ConfirmationInput) => void;
  resetAfter?: number;
};

type HoldStatus = "confirmed" | "holding" | "idle";
export type ConfirmationInput = "keyboard" | "pointer";

export function HoldToConfirmButton({
  children = "Hold to confirm",
  className,
  confirmedContent,
  disabled,
  duration = 1600,
  onConfirm,
  resetAfter = 1800,
  ...buttonProps
}: HoldToConfirmButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const confirmTimerRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);
  const activePointerIdRef = useRef<number | null>(null);
  const inputModeRef = useRef<ConfirmationInput>("pointer");
  const isHoldingRef = useRef(false);
  const [inputMode, setInputMode] = useState<ConfirmationInput | null>(null);
  const [status, setStatus] = useState<HoldStatus>("idle");
  const shouldReduceMotion = useReducedMotion();

  const clearConfirmTimer = useCallback(() => {
    if (confirmTimerRef.current === null) {
      return;
    }

    window.clearTimeout(confirmTimerRef.current);
    confirmTimerRef.current = null;
  }, []);

  const completeHold = useCallback(() => {
    if (!isHoldingRef.current) {
      return;
    }

    isHoldingRef.current = false;
    activePointerIdRef.current = null;
    clearConfirmTimer();
    setStatus("confirmed");
    onConfirm(inputModeRef.current);

    if (resetAfter > 0) {
      resetTimerRef.current = window.setTimeout(() => {
        setStatus("idle");
        resetTimerRef.current = null;
      }, resetAfter);
    }
  }, [clearConfirmTimer, onConfirm, resetAfter]);

  const cancelHold = useCallback(() => {
    if (!isHoldingRef.current) {
      return;
    }

    isHoldingRef.current = false;
    activePointerIdRef.current = null;
    clearConfirmTimer();
    setStatus("idle");
  }, [clearConfirmTimer]);

  const startHold = useCallback(
    (input: ConfirmationInput) => {
      if (disabled || status === "confirmed" || isHoldingRef.current) {
        return;
      }

      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
        resetTimerRef.current = null;
      }

      inputModeRef.current = input;
      setInputMode(input);
      isHoldingRef.current = true;
      setStatus("holding");
      confirmTimerRef.current = window.setTimeout(completeHold, duration);
    },
    [completeHold, disabled, duration, status],
  );

  useEffect(() => {
    return () => {
      clearConfirmTimer();

      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, [clearConfirmTimer]);

  useEffect(() => {
    if (disabled) {
      cancelHold();
    }
  }, [cancelHold, disabled]);

  function releasePointerCapture(pointerId: number) {
    const button = buttonRef.current;

    if (button?.hasPointerCapture(pointerId)) {
      button.releasePointerCapture(pointerId);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0 || disabled) {
      return;
    }

    activePointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    startHold("pointer");
  }

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (
      !isHoldingRef.current ||
      activePointerIdRef.current !== event.pointerId
    ) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const boundaryPadding = 8;
    const isOutside =
      event.clientX < rect.left - boundaryPadding ||
      event.clientX > rect.right + boundaryPadding ||
      event.clientY < rect.top - boundaryPadding ||
      event.clientY > rect.bottom + boundaryPadding;

    if (isOutside) {
      cancelHold();
      releasePointerCapture(event.pointerId);
    }
  }

  function handlePointerEnd(event: PointerEvent<HTMLButtonElement>) {
    if (activePointerIdRef.current !== event.pointerId) {
      return;
    }

    cancelHold();
    releasePointerCapture(event.pointerId);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.repeat || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    startHold("keyboard");
  }

  function handleKeyUp(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    cancelHold();
  }

  const isConfirmed = status === "confirmed";
  const isHolding = status === "holding";
  const overlayStyle = {
    clipPath: isHolding ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
    transitionDuration:
      shouldReduceMotion || inputMode === "keyboard"
        ? "0ms"
        : isHolding
          ? `${duration}ms`
          : "180ms",
    transitionProperty: "clip-path",
    transitionTimingFunction: isHolding
      ? "linear"
      : "cubic-bezier(0.23, 1, 0.32, 1)",
  };

  return (
    <button
      {...buttonProps}
      aria-busy={isHolding}
      className={cn(
        "relative isolate inline-flex h-9 min-w-40 touch-none cursor-pointer select-none items-center justify-center overflow-hidden rounded-lg border border-red-9 bg-red-3 px-3 font-medium text-red-11 text-sm outline-none transition-[transform,border-color,background-color,color] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:ring-red-8 focus-visible:ring-offset-2 focus-visible:ring-offset-grayscale-1 data-[input=pointer]:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-4",
        isConfirmed && "bg-red-9 text-white dark:bg-red-9 dark:text-white",
        className,
      )}
      data-input={inputMode}
      disabled={disabled}
      onBlur={cancelHold}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onLostPointerCapture={cancelHold}
      onPointerCancel={handlePointerEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      ref={buttonRef}
      type="button"
    >
      {isConfirmed ? (
        <span className="relative flex items-center justify-center gap-1.5">
          {confirmedContent ?? (
            <>
              <CheckIcon aria-hidden="true" size={15} weight="bold" />
              Confirmed
            </>
          )}
        </span>
      ) : (
        <>
          <span className="relative flex items-center justify-center gap-1.5">
            {children}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center gap-1.5 bg-red-9 px-3 text-white"
            style={overlayStyle}
          >
            {children}
          </span>
        </>
      )}
    </button>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/hold-to-confirm/hold-to-confirm-showcase.tsx`)
```tsx
"use client";

import { ArrowClockwiseIcon, TrashIcon } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";
import {
  type ConfirmationInput,
  HoldToConfirmButton,
} from "@/components/HoldToConfirmButton";
import { type UndoInteraction, UndoNotice } from "@/components/UndoNotice";

type DeleteStage = "closed" | "idle" | "undo";
type TransitionDirection = -1 | 1;

const easeOut = [0.23, 1, 0.32, 1] as const;

type ModalMotionSettings = {
  enterDuration: number;
  exitDuration: number;
  shouldMove: boolean;
};

type SwapMotionSettings = {
  direction: TransitionDirection;
  enterDuration: number;
  exitDuration: number;
  offset: number;
};

const modalVariants = {
  enter: ({ shouldMove }: ModalMotionSettings) => ({
    opacity: 0,
    transform: shouldMove ? "scale(0.97)" : "scale(1)",
  }),
  exit: ({ exitDuration, shouldMove }: ModalMotionSettings) => ({
    opacity: 0,
    transform: shouldMove ? "scale(0.97)" : "scale(1)",
    transition: { duration: exitDuration, ease: easeOut },
  }),
  visible: ({ enterDuration }: ModalMotionSettings) => ({
    opacity: 1,
    transform: "scale(1)",
    transition: { duration: enterDuration, ease: easeOut },
  }),
};

const swapVariants = {
  enter: ({ direction, offset }: SwapMotionSettings) => ({
    opacity: 0,
    transform: `translateY(${direction * offset}px)`,
  }),
  exit: ({ direction, exitDuration, offset }: SwapMotionSettings) => ({
    opacity: 0,
    transform: `translateY(${-direction * offset}px)`,
    transition: { duration: exitDuration, ease: easeOut },
  }),
  visible: ({ enterDuration }: SwapMotionSettings) => ({
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: enterDuration, ease: easeOut },
  }),
};

export function HoldToConfirmShowcase() {
  const [stage, setStage] = useState<DeleteStage>("idle");
  const [direction, setDirection] = useState<TransitionDirection>(1);
  const [animateTransition, setAnimateTransition] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const shouldMove = animateTransition && !shouldReduceMotion;
  const motionOffset = shouldMove ? 4 : 0;
  const enterDuration = animateTransition ? 0.18 : 0;
  const exitDuration = animateTransition ? 0.12 : 0;
  const modalMotion: ModalMotionSettings = {
    enterDuration: animateTransition ? 0.24 : 0,
    exitDuration: animateTransition ? 0.18 : 0,
    shouldMove,
  };
  const swapMotion: SwapMotionSettings = {
    direction,
    enterDuration,
    exitDuration,
    offset: motionOffset,
  };

  const closeModal = useCallback((animate = true) => {
    setAnimateTransition(animate);
    setStage("closed");
  }, []);

  function handleConfirm(input: ConfirmationInput) {
    setAnimateTransition(input === "pointer");
    setDirection(1);
    setStage("undo");
  }

  function handleUndo(input: UndoInteraction) {
    setAnimateTransition(input === "pointer");
    setDirection(-1);
    setStage("idle");
  }

  const handleNoticeExpire = useCallback(() => {
    closeModal();
  }, [closeModal]);

  function replayModal(animate = true) {
    setAnimateTransition(animate);
    setDirection(1);
    setStage("idle");
  }

  return (
    <div className="relative flex min-h-[34rem] w-full items-center justify-center overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 p-4 small-shadow dark:border-grayscale-4 dark:bg-grayscale-2 dark:shadow-none sm:p-8">
      <button
        aria-label="Replay delete modal"
        className="absolute top-2 right-2 flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-grayscale-3 bg-white px-2 font-medium text-grayscale-11 text-xs transition-[background-color,border-color,transform] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:border-grayscale-4 hover:bg-grayscale-2 active:scale-[0.97] dark:border-grayscale-4 dark:bg-grayscale-3 dark:hover:border-grayscale-5 dark:hover:bg-grayscale-4"
        onClick={(event) => replayModal(event.detail !== 0)}
        type="button"
      >
        <ArrowClockwiseIcon aria-hidden="true" size={15} weight="bold" />
        Replay
      </button>

      <AnimatePresence custom={modalMotion}>
        {stage !== "closed" ? (
          <motion.div
            animate="visible"
            aria-labelledby="delete-project-title"
            className="w-full max-w-sm origin-center rounded-2xl border border-grayscale-4 bg-grayscale-1 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_6px_16px_-8px_rgba(0,0,0,0.1),0_16px_32px_-16px_rgba(0,0,0,0.08)] dark:border-grayscale-5 dark:bg-grayscale-3 dark:shadow-[0_1px_2px_rgba(0,0,0,0.18),0_12px_28px_-12px_rgba(0,0,0,0.36)]"
            custom={modalMotion}
            exit="exit"
            initial="enter"
            key="delete-modal"
            role="dialog"
            variants={modalVariants}
          >
            <div className="p-2">
              <h2
                className="font-medium text-grayscale-12 text-sm"
                id="delete-project-title"
              >
                Delete this project?
              </h2>
              <p className="mt-1 text-balance text-grayscale-10 text-xs leading-5">
                This permanently removes the project and everything stored
                inside it.
              </p>
            </div>

            <AnimatePresence custom={swapMotion} initial={false} mode="wait">
              {stage === "idle" ? (
                <motion.div
                  animate="visible"
                  className="mt-2 grid h-9 grid-cols-2 gap-2"
                  custom={swapMotion}
                  exit="exit"
                  initial="enter"
                  key="actions"
                  variants={swapVariants}
                >
                  <button
                    className="h-9 cursor-pointer rounded-lg border border-grayscale-4 bg-grayscale-1 px-3 font-medium text-grayscale-11 text-sm transition-[background-color,border-color,transform] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:bg-grayscale-2 active:scale-[0.97] dark:border-grayscale-6 dark:bg-grayscale-4 dark:hover:bg-grayscale-5"
                    onClick={(event) => closeModal(event.detail !== 0)}
                    type="button"
                  >
                    Cancel
                  </button>
                  <HoldToConfirmButton
                    className="min-w-0 w-full"
                    onConfirm={handleConfirm}
                    resetAfter={0}
                  >
                    <TrashIcon aria-hidden="true" size={15} weight="bold" />
                    Hold to delete
                  </HoldToConfirmButton>
                </motion.div>
              ) : null}

              {stage === "undo" ? (
                <motion.div
                  animate="visible"
                  className="mt-2 h-9"
                  custom={swapMotion}
                  exit="exit"
                  initial="enter"
                  key="undo"
                  variants={swapVariants}
                >
                  <UndoNotice
                    className="h-9"
                    onExpire={handleNoticeExpire}
                    onUndo={handleUndo}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const usageSource = `import { TrashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { HoldToConfirmButton } from "@/components/HoldToConfirmButton";
import { UndoNotice } from "@/components/UndoNotice";

export function DeleteAction() {
  const [stage, setStage] = useState<"closed" | "idle" | "undo">("idle");

  if (stage === "closed") {
    return null;
  }

  if (stage === "undo") {
    return (
      <UndoNotice
        onExpire={() => setStage("closed")}
        onUndo={() => setStage("idle")}
      />
    );
  }

  return (
    <HoldToConfirmButton
      duration={1600}
      onConfirm={() => setStage("undo")}
      resetAfter={0}
    >
      <TrashIcon aria-hidden="true" size={15} weight="bold" />
      Hold to delete
    </HoldToConfirmButton>
  );
}`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
