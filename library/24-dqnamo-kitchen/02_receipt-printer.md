# Receipt Printer (Termal Fiş Yazıcısı & Ödeme Çıkışı) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Fiziksel ve İskeomorfi` (`Physical & Skeuomorphic`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion, Phosphor Icons` · **Fizik:** `Paper feed translation: translateY(-100%) -> translateY(0) with ease-out, paper tear-off hover tilt: -2deg, friction damping: 32`  
> **Etiketler:** `Checkout, Skeuomorphism, Paper Texture, Thermal Printer, SaaS Receipt`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Ödeme tamamlandığında mekanik ses ve kağıt çıkarma fiziğiyle fiziksel termal makbuz basan SaaS ödeme arayüzü.

A SaaS checkout state that prints a physical receipt when payment clears.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Paper feed translation: translateY(-100%) -> translateY(0) with ease-out, paper tear-off hover tilt: -2deg, friction damping: 32`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Receipt Printer" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Receipt Printer (Termal Fiş Yazıcısı & Ödeme Çıkışı)
- Category: Physical & Skeuomorphic
- Core Philosophy: A SaaS checkout state that prints a physical receipt when payment clears.
- Motion & Spring Physics: Paper feed translation: translateY(-100%) -> translateY(0) with ease-out, paper tear-off hover tilt: -2deg, friction damping: 32
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

### 3.1 Ana Bileşen Kodu (`components/ReceiptPrinter.tsx`)
```tsx
"use client";

import {
  CheckCircleIcon,
  CircleNotchIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  type ComponentPropsWithoutRef,
  createContext,
  type ReactNode,
  useContext,
} from "react";
import { cn } from "@/helpers/classname-helper";

export type ReceiptPrinterStage = "processing" | "printing" | "complete";
export type ReceiptFeedMotion = "smooth" | "stepped";

export type ReceiptPrinterRootProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "children"
> & {
  /** Disables all stage transitions when false. */
  animate?: boolean;
  children: ReactNode;
  /** Controls whether the paper feeds continuously or one line at a time. */
  feedMotion?: ReceiptFeedMotion;
  /** Current state of the printer. */
  stage: ReceiptPrinterStage;
};

export type ReceiptPrinterMachineProps = ComponentPropsWithoutRef<"div">;
export type ReceiptPrinterHeaderProps = ComponentPropsWithoutRef<"div">;
export type ReceiptPrinterScreenProps = ComponentPropsWithoutRef<"div">;
export type ReceiptPrinterOutputProps = ComponentPropsWithoutRef<"div">;
export type ReceiptPrinterPaperProps = ComponentPropsWithoutRef<"article">;

export type ReceiptPrinterStatusProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /** Custom status content. Defaults to a label derived from the current stage. */
  children?: ReactNode;
};

type ReceiptPrinterContextValue = {
  animate: boolean;
  feedMotion: ReceiptFeedMotion;
  shouldMove: boolean;
  stage: ReceiptPrinterStage;
};

const ReceiptPrinterContext = createContext<ReceiptPrinterContextValue | null>(
  null,
);

const easeOut = [0.23, 1, 0.32, 1] as const;
const easeInOut = [0.77, 0, 0.175, 1] as const;

const receiptToothCount = 40;
const receiptToothDepth = 4;
const receiptToothPoints = Array.from(
  { length: receiptToothCount * 2 },
  (_, index) => {
    const x = 100 - ((index + 1) * 100) / (receiptToothCount * 2);
    const y = index % 2 === 0 ? "100%" : `calc(100% - ${receiptToothDepth}px)`;

    return `${x}% ${y}`;
  },
).join(", ");
const receiptClipPath = `polygon(0 0, 100% 0, 100% calc(100% - ${receiptToothDepth}px), ${receiptToothPoints})`;

const printingTransformKeyframes = [
  "translateY(calc(-100% + 2px))",
  "translateY(-91%)",
  "translateY(-91%)",
  "translateY(-81%)",
  "translateY(-81%)",
  "translateY(-70%)",
  "translateY(-70%)",
  "translateY(-58%)",
  "translateY(-58%)",
  "translateY(-45%)",
  "translateY(-45%)",
  "translateY(-32%)",
  "translateY(-32%)",
  "translateY(-20%)",
  "translateY(-20%)",
  "translateY(-10%)",
  "translateY(-10%)",
  "translateY(-3%)",
  "translateY(-3%)",
  "translateY(0%)",
];

const printingKeyframeTimes = [
  0, 0.075, 0.105, 0.18, 0.21, 0.285, 0.315, 0.39, 0.42, 0.495, 0.525, 0.6,
  0.63, 0.705, 0.735, 0.81, 0.84, 0.915, 0.945, 1,
];

const statusLabels: Record<ReceiptPrinterStage, ReactNode> = {
  processing: "Processing your order",
  printing: "Printing your receipt",
  complete: "Order complete",
};

const machineClassName =
  "relative isolate w-full overflow-hidden rounded-[var(--printer-radius)] border border-grayscale-12 bg-[color-mix(in_oklab,var(--color-grayscale-11)_30%,var(--color-grayscale-12))] p-[var(--printer-inset)] pb-8 shadow-[0_20px_36px_-20px_color-mix(in_oklab,var(--color-grayscale-12)_55%,transparent),0_6px_14px_-8px_color-mix(in_oklab,var(--color-grayscale-12)_24%,transparent),inset_0_1px_0_color-mix(in_oklab,var(--color-grayscale-1)_14%,transparent),inset_0_-1px_0_color-mix(in_oklab,var(--color-grayscale-12)_55%,transparent)] [--printer-inner-radius:calc(var(--printer-radius)_-_var(--printer-inset))] [--printer-inset:0.75rem] [--printer-radius:1.5rem] before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-[url('/textures/plastic-noise.svg')] before:bg-[length:180px_180px] before:bg-repeat before:opacity-30 before:mix-blend-multiply before:content-[''] dark:border-grayscale-3 dark:bg-grayscale-4 dark:shadow-[0_20px_36px_-20px_color-mix(in_oklab,var(--color-grayscale-3)_55%,transparent),0_6px_14px_-8px_color-mix(in_oklab,var(--color-grayscale-3)_24%,transparent),inset_0_1px_0_color-mix(in_oklab,var(--color-grayscale-12)_14%,transparent),inset_0_-1px_0_color-mix(in_oklab,var(--color-grayscale-3)_55%,transparent)]";

function useReceiptPrinter(component: string) {
  const context = useContext(ReceiptPrinterContext);

  if (!context) {
    throw new Error(`${component} must be used inside ReceiptPrinter.Root.`);
  }

  return context;
}

function ReceiptPrinterRoot({
  "aria-label": ariaLabel = "Receipt printer",
  animate = true,
  children,
  className,
  feedMotion = "stepped",
  stage,
  ...props
}: ReceiptPrinterRootProps) {
  const shouldReduceMotion = useReducedMotion();
  const context = {
    animate,
    feedMotion,
    shouldMove: animate && !shouldReduceMotion,
    stage,
  };

  return (
    <ReceiptPrinterContext.Provider value={context}>
      <section
        aria-label={ariaLabel}
        className={cn(
          "relative isolate flex w-full max-w-sm flex-col items-center",
          className,
        )}
        data-stage={stage}
        {...props}
      >
        {children}
      </section>
    </ReceiptPrinterContext.Provider>
  );
}

function ReceiptPrinterMachine({
  children,
  className,
  ...props
}: ReceiptPrinterMachineProps) {
  return (
    <div className={cn(machineClassName, className)} {...props}>
      {children}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-[var(--printer-inset)] z-40 h-2 rounded-[0.25rem] border border-grayscale-12 bg-grayscale-12 shadow-inner shadow-grayscale-12 dark:border-grayscale-1 dark:bg-grayscale-1 dark:shadow-grayscale-1"
      />
    </div>
  );
}

function ReceiptPrinterHeader({
  children,
  className,
  ...props
}: ReceiptPrinterHeaderProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-11 items-start justify-between",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ReceiptPrinterScreen({
  children,
  className,
  ...props
}: ReceiptPrinterScreenProps) {
  return (
    <div
      className={cn(
        "relative z-10 isolate overflow-hidden rounded-[var(--printer-inner-radius)] border border-grayscale-12 bg-grayscale-12 p-4 text-grayscale-1 shadow-inner shadow-grayscale-12/80 after:pointer-events-none after:absolute after:inset-0 after:z-20 after:rounded-[inherit] after:shadow-[inset_0_0_24px_4px_color-mix(in_oklab,var(--color-grayscale-12)_52%,transparent)] after:content-[''] dark:border-grayscale-1 dark:bg-grayscale-2 dark:text-grayscale-12 dark:shadow-grayscale-1/80 dark:after:shadow-[inset_0_0_24px_4px_color-mix(in_oklab,var(--color-grayscale-1)_52%,transparent)]",
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function StatusIndicator({
  animate,
  move,
  stage,
}: {
  animate: boolean;
  move: boolean;
  stage: ReceiptPrinterStage;
}) {
  const isComplete = stage === "complete";

  return (
    <span
      aria-hidden="true"
      className="relative grid size-5 shrink-0 place-items-center"
    >
      <AnimatePresence initial={false} mode="sync">
        {isComplete ? (
          <motion.span
            animate={{ opacity: 1, transform: "scale(1)" }}
            className="col-start-1 row-start-1 grid place-items-center text-green-9"
            exit={{
              opacity: animate ? 0 : 1,
              transform: move ? "scale(0.96)" : "scale(1)",
            }}
            initial={{
              opacity: animate ? 0 : 1,
              transform: move ? "scale(0.94)" : "scale(1)",
            }}
            key="complete"
            transition={{ duration: animate ? 0.16 : 0, ease: easeOut }}
          >
            <CheckCircleIcon size={18} weight="fill" />
          </motion.span>
        ) : (
          <motion.span
            animate={{ opacity: 1, transform: "scale(1)" }}
            className="col-start-1 row-start-1 grid place-items-center text-grayscale-8 dark:text-grayscale-11"
            exit={{
              opacity: animate ? 0 : 1,
              transform: move ? "scale(0.96)" : "scale(1)",
            }}
            initial={{
              opacity: animate ? 0 : 1,
              transform: move ? "scale(0.94)" : "scale(1)",
            }}
            key="working"
            transition={{ duration: animate ? 0.16 : 0, ease: easeOut }}
          >
            <CircleNotchIcon
              className={cn(
                animate && "animate-spin motion-reduce:animate-none",
              )}
              size={18}
              weight="bold"
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

function ReceiptPrinterStatus({
  children,
  className,
  ...props
}: ReceiptPrinterStatusProps) {
  const { animate, shouldMove, stage } = useReceiptPrinter(
    "ReceiptPrinter.Status",
  );

  return (
    <div
      className={cn("flex min-w-0 items-center gap-2", className)}
      {...props}
    >
      <StatusIndicator animate={animate} move={shouldMove} stage={stage} />
      <div
        aria-live="polite"
        className="grid min-w-0 flex-1 items-center"
        role="status"
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            className="col-start-1 row-start-1 truncate font-medium text-grayscale-8 text-xs leading-none dark:text-grayscale-11"
            exit={{
              opacity: animate ? 0 : 1,
              transform: shouldMove ? "translateY(-4px)" : "translateY(0px)",
            }}
            initial={{
              opacity: animate ? 0 : 1,
              transform: shouldMove ? "translateY(4px)" : "translateY(0px)",
            }}
            key={stage}
            transition={{ duration: animate ? 0.18 : 0, ease: easeOut }}
          >
            {children ?? statusLabels[stage]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ReceiptPrinterPaper({
  children,
  className,
  style,
  ...props
}: ReceiptPrinterPaperProps) {
  return (
    <article
      className={cn(
        "relative z-10 min-h-80 bg-grayscale-1 bg-[url('/textures/receipt-paper.svg')] bg-cover px-6 pt-7 pb-8 font-mono text-grayscale-12 bg-blend-soft-light dark:bg-grayscale-12 dark:text-grayscale-1",
        className,
      )}
      style={{ clipPath: receiptClipPath, ...style }}
      {...props}
    >
      {children}
    </article>
  );
}

function ReceiptPrinterOutput({
  children,
  className,
  ...props
}: ReceiptPrinterOutputProps) {
  const { animate, feedMotion, shouldMove, stage } = useReceiptPrinter(
    "ReceiptPrinter.Output",
  );
  const isReceiptVisible = stage !== "processing";
  const shouldUseSteppedFeed =
    feedMotion === "stepped" && stage === "printing" && shouldMove;

  return (
    <div
      className={cn(
        "relative z-50 -mt-4 h-[32rem] w-[calc(80%+3rem)] max-w-full overflow-hidden px-6",
        className,
      )}
      {...props}
    >
      {isReceiptVisible ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 -top-1 z-20 h-2 bg-grayscale-12/75 blur-[6px] dark:bg-grayscale-1/75"
        />
      ) : null}

      <motion.div
        animate={{
          opacity: isReceiptVisible ? 1 : 0,
          transform:
            stage === "printing" && shouldMove
              ? shouldUseSteppedFeed
                ? printingTransformKeyframes
                : "translateY(0%)"
              : isReceiptVisible || !shouldMove
                ? "translateY(0%)"
                : "translateY(calc(-100% + 2px))",
        }}
        aria-hidden={stage !== "complete"}
        className="relative isolate before:pointer-events-none before:absolute before:inset-x-3 before:top-3 before:bottom-4 before:z-0 before:rounded-sm before:shadow-[0_8px_24px_color-mix(in_oklab,var(--color-grayscale-12)_24%,transparent)] before:content-[''] after:pointer-events-none after:absolute after:right-[8%] after:bottom-0 after:left-[8%] after:z-0 after:h-3 after:translate-y-1.5 after:rounded-full after:bg-grayscale-12/10 after:blur-lg after:content-[''] dark:before:shadow-[0_8px_24px_color-mix(in_oklab,var(--color-grayscale-1)_20%,transparent)] dark:after:bg-grayscale-1/10"
        initial={false}
        transition={{
          opacity: { duration: animate ? 0.16 : 0, ease: easeOut },
          transform: {
            duration: shouldMove ? 1.75 : 0,
            ease: shouldUseSteppedFeed ? "linear" : easeInOut,
            times: shouldUseSteppedFeed ? printingKeyframeTimes : undefined,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const ReceiptPrinter = {
  Header: ReceiptPrinterHeader,
  Machine: ReceiptPrinterMachine,
  Output: ReceiptPrinterOutput,
  Paper: ReceiptPrinterPaper,
  Root: ReceiptPrinterRoot,
  Screen: ReceiptPrinterScreen,
  Status: ReceiptPrinterStatus,
};

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/receipt-printer/receipt-printer-showcase.tsx`)
```tsx
"use client";

import { ArrowClockwiseIcon, HouseIcon } from "@phosphor-icons/react/dist/ssr";
import { type MouseEvent, useEffect, useState } from "react";
import {
  ReceiptPrinter,
  type ReceiptPrinterStage,
} from "@/components/ReceiptPrinter";
import { TactileButton } from "@/components/TactileButton";
import { cn } from "@/helpers/classname-helper";

const demoOrder = {
  orderNumber: "ORD-2048",
  plan: "Pro plan",
  billingPeriod: "Annual subscription",
  subtotal: "£192.00",
  tax: "£38.40",
  total: "£230.40",
  paymentMethod: "Visa •••• 4242",
  purchasedAt: "11 AUG 2026 · 14:32",
};

function ShowcaseLogo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block aspect-square w-6 bg-current [-webkit-mask-image:url('/images/receipt-printer-logo.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] [mask-image:url('/images/receipt-printer-logo.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]",
        className,
      )}
    />
  );
}

export function ReceiptPrinterShowcase() {
  const [cycle, setCycle] = useState(0);
  const [animate, setAnimate] = useState(true);

  function replay(event: MouseEvent<HTMLButtonElement>) {
    setAnimate(event.detail !== 0);
    setCycle((currentCycle) => currentCycle + 1);
  }

  return (
    <div className="relative flex min-h-[48rem] w-full items-start justify-center overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 px-4 pt-20 small-shadow dark:border-grayscale-4 dark:bg-grayscale-2 dark:shadow-none sm:px-8 sm:pt-16">
      <button
        aria-label="Replay receipt printing"
        className="absolute top-2 right-2 z-30 flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-grayscale-3 bg-grayscale-1 px-2 font-medium text-grayscale-11 text-xs transition-[background-color,border-color,transform] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:border-grayscale-4 hover:bg-grayscale-2 active:scale-[0.97] dark:border-grayscale-4 dark:bg-grayscale-3 dark:hover:border-grayscale-5 dark:hover:bg-grayscale-4"
        onClick={replay}
        type="button"
      >
        <ArrowClockwiseIcon aria-hidden="true" size={15} weight="bold" />
        Replay
      </button>

      <ReceiptSequence animate={animate} key={cycle} />
    </div>
  );
}

function ReceiptSequence({ animate }: { animate: boolean }) {
  const [stage, setStage] = useState<ReceiptPrinterStage>("processing");

  useEffect(() => {
    const printTimer = window.setTimeout(() => setStage("printing"), 1600);
    const completeTimer = window.setTimeout(() => setStage("complete"), 3600);

    return () => {
      window.clearTimeout(printTimer);
      window.clearTimeout(completeTimer);
    };
  }, []);

  return (
    <ReceiptPrinter.Root animate={animate} stage={stage}>
      <ReceiptPrinter.Machine>
        <ReceiptPrinter.Header>
          <ShowcaseLogo className="mt-1 ml-1 text-grayscale-10 opacity-70 drop-shadow-sm" />
          <TactileButton depth="shallow" href="/" size="sm">
            <HouseIcon aria-hidden="true" size={13} weight="fill" />
            Home
          </TactileButton>
        </ReceiptPrinter.Header>

        <ReceiptPrinter.Screen>
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate font-medium text-sm">{demoOrder.plan}</p>
                <p className="mt-0.5 truncate text-grayscale-8 text-xs dark:text-grayscale-11">
                  {demoOrder.billingPeriod}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-grayscale-8 text-xs dark:text-grayscale-11">
                  Total
                </p>
                <p className="mt-0.5 font-semibold text-base leading-none">
                  {demoOrder.total}
                </p>
              </div>
            </div>

            <ReceiptPrinter.Status />
          </div>
        </ReceiptPrinter.Screen>
      </ReceiptPrinter.Machine>

      <ReceiptPrinter.Output>
        <ReceiptPrinter.Paper aria-label="Order receipt">
          <ShowcaseLogo className="mx-auto w-10 text-grayscale-12 opacity-90 dark:text-grayscale-1" />

          <div className="my-5 border-current/25 border-t border-dashed" />

          <div className="flex items-start justify-between gap-4 text-[9px] leading-4">
            <div>
              <p className="font-bold uppercase tracking-[0.08em]">
                {demoOrder.plan}
              </p>
              <p className="opacity-55">{demoOrder.billingPeriod}</p>
            </div>
            <span className="shrink-0 font-bold">{demoOrder.subtotal}</span>
          </div>

          <div className="my-4 border-current/20 border-t border-dashed" />

          <dl className="space-y-1.5 text-[9px] leading-none">
            <div className="flex justify-between gap-4">
              <dt className="opacity-55">Subtotal</dt>
              <dd>{demoOrder.subtotal}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-55">Tax</dt>
              <dd>{demoOrder.tax}</dd>
            </div>
            <div className="flex items-end justify-between gap-4 pt-2 font-bold">
              <dt className="text-[10px] uppercase tracking-[0.08em]">
                Total paid
              </dt>
              <dd className="text-[15px] tracking-[-0.04em]">
                {demoOrder.total}
              </dd>
            </div>
          </dl>

          <div className="my-4 border-current/20 border-t border-dashed" />

          <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 text-[8px] leading-3">
            <span className="opacity-55">Order</span>
            <span>{demoOrder.orderNumber}</span>
            <span className="opacity-55">Paid with</span>
            <span>{demoOrder.paymentMethod}</span>
            <span className="opacity-55">Date</span>
            <span>{demoOrder.purchasedAt}</span>
          </div>

          <div className="mt-5 text-center">
            <div className="mx-auto h-7 w-32 bg-[repeating-linear-gradient(90deg,currentColor_0_1px,transparent_1px_3px,currentColor_3px_5px,transparent_5px_7px,currentColor_7px_8px,transparent_8px_11px)]" />
            <p className="mt-1 text-[7px] tracking-[0.18em] opacity-50">
              {demoOrder.orderNumber.replaceAll("-", " ")}
            </p>
          </div>
        </ReceiptPrinter.Paper>
      </ReceiptPrinter.Output>
    </ReceiptPrinter.Root>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const usageSource = `"use client";

import { HouseIcon } from "@phosphor-icons/react";
import { useState } from "react";
import {
  ReceiptPrinter,
  type ReceiptPrinterStage,
} from "@/components/ReceiptPrinter";
import { TactileButton } from "@/components/TactileButton";

function Logo() {
  return (
    <img
      alt=""
      className="size-6"
      src="/images/receipt-printer-logo.png"
    />
  );
}

export function CheckoutStatus() {
  const [stage] = useState<ReceiptPrinterStage>("processing");

  return (
    <ReceiptPrinter.Root stage={stage}>
      <ReceiptPrinter.Machine>
        <ReceiptPrinter.Header>
          <Logo />
          <TactileButton depth="shallow" href="/" size="sm">
            <HouseIcon aria-hidden="true" size={13} weight="fill" />
            Home
          </TactileButton>
        </ReceiptPrinter.Header>

        <ReceiptPrinter.Screen>
          {/* Any React DOM can go on the screen. */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <p>Pro plan</p>
                <p>Annual subscription</p>
              </div>
              <strong>£230.40</strong>
            </div>
            <ReceiptPrinter.Status />
          </div>
        </ReceiptPrinter.Screen>
      </ReceiptPrinter.Machine>

      <ReceiptPrinter.Output>
        <ReceiptPrinter.Paper>
          {/* Any React DOM can be printed. */}
          <h2>Receipt</h2>
          <hr />
          <dl>
            <div>
              <dt>Total paid</dt>
              <dd>£230.40</dd>
            </div>
          </dl>
          <p>Thanks for your order.</p>
        </ReceiptPrinter.Paper>
      </ReceiptPrinter.Output>
    </ReceiptPrinter.Root>
  );
}`;

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `assets/dqnamo/images/receipt-printer-logo.png`
- `assets/dqnamo/textures/receipt-paper.svg`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
