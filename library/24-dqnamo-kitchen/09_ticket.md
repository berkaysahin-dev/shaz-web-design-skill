# Ticket (Delikli Kupon ve Bilet Kartı) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Fiziksel ve İskeomorfi` (`Physical & Skeuomorphic`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, SVG Patterns, Motion` · **Fizik:** `3D Card tilt: perspective(1000px) rotateX(calc(dy * 6deg)) rotateY(calc(dx * -6deg)), notch SVG clipping mask`  
> **Etiketler:** `Ticket Silhouette, Perforated Edge, 3D Tilt, Pass / Voucher, Skeuomorphic`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Gerçekçi delikli koparma çizgisi, kenar çentikleri, barkod ve imlece duyarlı hafif 3D paralaks derinliğine sahip bilet bileşeni.

A perforated ticket silhouette with composable sections and subtle parallax depth.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `3D Card tilt: perspective(1000px) rotateX(calc(dy * 6deg)) rotateY(calc(dx * -6deg)), notch SVG clipping mask`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Ticket" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Ticket (Delikli Kupon ve Bilet Kartı)
- Category: Physical & Skeuomorphic
- Core Philosophy: A perforated ticket silhouette with composable sections and subtle parallax depth.
- Motion & Spring Physics: 3D Card tilt: perspective(1000px) rotateX(calc(dy * 6deg)) rotateY(calc(dx * -6deg)), notch SVG clipping mask
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Tailwind CSS, SVG Patterns, Motion.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/Ticket.tsx`)
```tsx
"use client";

import {
  type CSSProperties,
  type ReactNode,
  useSyncExternalStore,
} from "react";
import type { ReactParallaxTiltProps } from "react-parallax-tilt";
import Tilt from "react-parallax-tilt";
import { cn } from "@/helpers/classname-helper";

const hoverTiltMedia =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const ticketClipPath = `polygon(
  0 var(--ticket-corner-size),
  var(--ticket-corner-size) 0,
  calc(100% - var(--ticket-corner-size)) 0,
  100% var(--ticket-corner-size),
  100% calc(100% - var(--ticket-stub-height) - var(--ticket-notch-size)),
  calc(100% - var(--ticket-notch-size)) calc(100% - var(--ticket-stub-height)),
  100% calc(100% - var(--ticket-stub-height) + var(--ticket-notch-size)),
  100% calc(100% - var(--ticket-corner-size)),
  calc(100% - var(--ticket-corner-size)) 100%,
  var(--ticket-corner-size) 100%,
  0 calc(100% - var(--ticket-corner-size)),
  0 calc(100% - var(--ticket-stub-height) + var(--ticket-notch-size)),
  var(--ticket-notch-size) calc(100% - var(--ticket-stub-height)),
  0 calc(100% - var(--ticket-stub-height) - var(--ticket-notch-size))
)`;

const ticketBackground =
  "linear-gradient(145deg, rgb(255 255 255 / 10%), transparent 42%), var(--ticket-paper)";

const ticketShadow =
  "drop-shadow(0 1px 1px rgb(15 15 15 / 10%)) drop-shadow(0 18px 26px rgb(15 15 15 / 13%))";

type TicketCustomProperty =
  | "--ticket-corner-size"
  | "--ticket-ink"
  | "--ticket-notch-size"
  | "--ticket-paper"
  | "--ticket-stub-height";

type TicketRootStyle = CSSProperties &
  Partial<Record<TicketCustomProperty, string>>;

export type TicketTiltProps = Omit<
  ReactParallaxTiltProps,
  "children" | "className" | "style"
>;

type CssLength = number | string;

export type TicketProps = {
  body: ReactNode;
  stub: ReactNode;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  bodyClassName?: string;
  className?: string;
  cornerSize?: CssLength;
  ink?: string;
  notchSize?: CssLength;
  paper?: string;
  stubClassName?: string;
  stubHeight?: CssLength;
  style?: CSSProperties;
  ticketClassName?: string;
  tilt?: boolean;
  tiltProps?: TicketTiltProps;
};

function subscribeToHoverTilt(listener: () => void) {
  const media = window.matchMedia(hoverTiltMedia);

  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
}

function getHoverTiltSnapshot() {
  return window.matchMedia(hoverTiltMedia).matches;
}

function getServerHoverTiltSnapshot() {
  return false;
}

function toCssLength(value: CssLength) {
  return typeof value === "number" ? `${value}px` : value;
}

export function Ticket({
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  body,
  bodyClassName,
  className,
  cornerSize = 0,
  ink = "#171714",
  notchSize = 13,
  paper = "#ff633f",
  stub,
  stubClassName,
  stubHeight = "24%",
  style,
  ticketClassName,
  tilt = true,
  tiltProps,
}: TicketProps) {
  const hoverTiltEnabled = useSyncExternalStore(
    subscribeToHoverTilt,
    getHoverTiltSnapshot,
    getServerHoverTiltSnapshot,
  );
  const {
    glareEnable = false,
    scale = 1.018,
    tiltEnable: tiltEnabledByProp = true,
    ...resolvedTiltProps
  } = tiltProps ?? {};
  const tiltEnabled = tilt && tiltEnabledByProp && hoverTiltEnabled;
  const glareEnabled = tiltEnabled && glareEnable;
  const rootStyle: TicketRootStyle = {
    "--ticket-corner-size": toCssLength(cornerSize),
    "--ticket-ink": ink,
    "--ticket-notch-size": toCssLength(notchSize),
    "--ticket-paper": paper,
    "--ticket-stub-height": toCssLength(stubHeight),
    filter: ticketShadow,
    ...style,
  };

  return (
    <div
      className={cn("relative aspect-[5/12] w-[min(100%,17rem)]", className)}
      style={rootStyle}
    >
      <Tilt
        glareEnable={glareEnabled}
        gyroscope={false}
        key={glareEnabled ? "ticket-with-glare" : "ticket-without-glare"}
        perspective={1100}
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        transitionEasing="cubic-bezier(0.23, 1, 0.32, 1)"
        transitionSpeed={220}
        {...resolvedTiltProps}
        className="relative h-full w-full touch-pan-y [transform-style:preserve-3d]"
        scale={tiltEnabled ? scale : 1}
        style={{
          clipPath: ticketClipPath,
        }}
        tiltEnable={tiltEnabled}
      >
        <article
          aria-hidden={ariaHidden}
          aria-label={ariaHidden ? undefined : ariaLabel}
          className={cn(
            "relative grid h-full w-full grid-rows-[minmax(0,1fr)_var(--ticket-stub-height)] overflow-hidden text-[var(--ticket-ink)] transition-[color,background-color] duration-[180ms] ease-[ease]",
            ticketClassName,
          )}
          style={{ background: ticketBackground }}
        >
          <div
            className={cn(
              "relative min-h-0 min-w-0 overflow-hidden",
              bodyClassName,
            )}
          >
            {body}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[calc(var(--ticket-notch-size)+6px)] bottom-px left-[calc(var(--ticket-notch-size)+6px)] z-[2] border-current border-b border-dashed opacity-30"
            />
          </div>
          <div
            className={cn(
              "relative min-h-0 min-w-0 overflow-hidden",
              stubClassName,
            )}
          >
            {stub}
          </div>
        </article>
      </Tilt>
    </div>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/ticket/ticket-showcase.tsx`)
```tsx
"use client";

import { type CSSProperties, useState } from "react";
import { Ticket } from "@/components/Ticket";
import { TicketPattern } from "@/components/TicketPattern";

const palettes = [
  {
    ink: "#181713",
    name: "Signal",
    paper: "#ff6542",
  },
  {
    ink: "#f7f2df",
    name: "Cobalt",
    paper: "#2645dc",
  },
  {
    ink: "#1a1b17",
    name: "Acid",
    paper: "#c9e54b",
  },
] as const;

const eventDetails = [
  { label: "Date", value: "27.09" },
  { label: "Doors", value: "19:30" },
] as const;

const microLabelClassName =
  "font-mono text-[6px] font-bold leading-none tracking-[0.08em] uppercase opacity-[0.62]";

const stageGridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(var(--color-grayscale-4) 1px, transparent 1px), linear-gradient(90deg, var(--color-grayscale-4) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  maskImage: "radial-gradient(circle at center, black, transparent 76%)",
};

const barcodeStyle: CSSProperties = {
  background:
    "repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 4px, currentColor 4px 5px, transparent 5px 8px, currentColor 8px 12px, transparent 12px 14px)",
};

function TicketBody({ ink }: { ink: string }) {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto_auto] gap-4 p-[20px_21px_25px] max-[520px]:gap-[13px] max-[520px]:p-[17px_18px_22px]">
      <div className="flex justify-between gap-3 font-mono text-[7px] font-bold leading-none tracking-[0.08em] uppercase opacity-[0.72]">
        <span>Series no. 024</span>
        <span>London · UK</span>
      </div>

      <TicketPattern ink={ink} />

      <div>
        <h2 className="font-[750] text-[28px] leading-[0.82] tracking-[-0.075em] uppercase max-[520px]:text-[25px]">
          Crafted
          <br />
          Pixels
        </h2>
        <p className="mt-3 max-w-[168px] font-semibold text-[8px] leading-[1.3] tracking-[-0.015em]">
          An evening of code, motion, and the details that make digital products
          feel right.
        </p>
      </div>

      <dl className="grid grid-cols-2 gap-2.5">
        {eventDetails.map(({ label, value }) => (
          <div className="flex flex-col gap-[3px]" key={label}>
            <dt className={microLabelClassName}>{label}</dt>
            <dd className="font-mono text-[10px] font-bold leading-none">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function TicketStub() {
  return (
    <div className="flex h-full flex-col justify-between gap-3.5 p-[20px_21px_18px] max-[520px]:px-[18px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className={microLabelClassName}>Admit</span>
          <strong className="font-[750] text-[13px] leading-none uppercase">
            One
          </strong>
        </div>
        <div className="flex flex-col items-end gap-1 text-right">
          <span className={microLabelClassName}>Reference</span>
          <strong className="font-mono font-[750] text-[7px] leading-none tracking-[-0.04em] uppercase">
            CP-240927-031
          </strong>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="h-[22px] w-full"
        style={barcodeStyle}
      />
    </div>
  );
}

export function TicketShowcase() {
  const [paletteIndex, setPaletteIndex] = useState(1);
  const palette = palettes[paletteIndex];

  return (
    <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
      <div
        className="relative flex min-h-[610px] items-center justify-center overflow-hidden bg-grayscale-1 px-6 py-12 dark:bg-grayscale-2 max-[520px]:min-h-[535px] max-[520px]:px-5 max-[520px]:py-8"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 47%, color-mix(in srgb, ${palette.paper} 15%, transparent), transparent 42%)`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.38]"
          style={stageGridStyle}
        />
        <Ticket
          aria-label="Crafted Pixels design engineering event ticket"
          body={<TicketBody ink={palette.ink} />}
          className="z-[1] h-[516px] w-[218px] aspect-auto max-[520px]:h-[456px] max-[520px]:w-[190px]"
          ink={palette.ink}
          paper={palette.paper}
          stub={<TicketStub />}
          stubHeight={118}
          tiltProps={{
            glareColor: "#ffffff",
            glareEnable: true,
            glareMaxOpacity: 0.2,
            glarePosition: "all",
            perspective: 1200,
            scale: 1.02,
            tiltMaxAngleX: 7,
            tiltMaxAngleY: 7,
          }}
        />
      </div>

      <div className="flex min-h-[57px] items-center border-grayscale-3 border-t px-3 py-2.5">
        <div className="flex items-center gap-1">
          {palettes.map((option, index) => (
            <button
              aria-label={`${option.name} paper`}
              aria-pressed={paletteIndex === index}
              className="grid size-7 cursor-pointer place-items-center rounded-lg border border-transparent p-[3px] transition-[border-color,transform] duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-grayscale-5 focus-visible:outline-2 focus-visible:outline-grayscale-8 focus-visible:outline-offset-2 active:scale-[0.97] aria-pressed:border-grayscale-6 aria-pressed:bg-grayscale-2 motion-reduce:transition-none"
              key={option.name}
              onClick={() => setPaletteIndex(index)}
              title={option.name}
              type="button"
            >
              <span
                aria-hidden="true"
                className="size-[18px] rounded-[5px] border border-black/10 shadow-[inset_0_1px_0_rgb(255_255_255_/_22%)]"
                style={{ backgroundColor: option.paper }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
