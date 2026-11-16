# Tactile Button (Dokunsal 3D Buton) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Butonlar ve Eylemler` (`Buttons & Actions`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion` · **Fizik:** `Spring stiffness: 400, damping: 28, depth-compression: 4px -> 1px, shadow-collapse: 0.1s cubic-bezier(0.16, 1, 0.3, 1)`  
> **Etiketler:** `Physical UI, 3D Depth, Micro-interaction, Double-bezel, Tactile`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Şekillendirilmiş yüzey, sert kenar oluğu ve sıkıştırılabilir fiziksel derinlikten oluşan dokunsal 3D buton çalışması.

A physical button study built from a shaped face, firm edge, and compressible depth.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Spring stiffness: 400, damping: 28, depth-compression: 4px -> 1px, shadow-collapse: 0.1s cubic-bezier(0.16, 1, 0.3, 1)`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Tactile Button" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Tactile Button (Dokunsal 3D Buton)
- Category: Buttons & Actions
- Core Philosophy: A physical button study built from a shaped face, firm edge, and compressible depth.
- Motion & Spring Physics: Spring stiffness: 400, damping: 28, depth-compression: 4px -> 1px, shadow-collapse: 0.1s cubic-bezier(0.16, 1, 0.3, 1)
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

### 3.1 Ana Bileşen Kodu (`components/TactileButton.tsx`)
```tsx
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import { cn } from "@/helpers/classname-helper";

export type TactileButtonDepth = "shallow" | "medium" | "deep";
export type TactileButtonSize = "sm" | "md" | "lg";
export type TactileButtonTone = "light" | "dark";

type TactileButtonSharedProps = {
  children: ReactNode;
  className?: string;
  /** Controls the visible height of the button edge. */
  depth?: TactileButtonDepth;
  size?: TactileButtonSize;
  tone?: TactileButtonTone;
};

type TactileButtonElementProps = TactileButtonSharedProps &
  Omit<
    ComponentPropsWithoutRef<"button">,
    keyof TactileButtonSharedProps | "href"
  > & {
    href?: never;
  };

type TactileButtonAnchorProps = TactileButtonSharedProps &
  Omit<
    ComponentPropsWithoutRef<"a">,
    keyof TactileButtonSharedProps | "href"
  > & {
    href: string;
  };

export type TactileButtonProps =
  | TactileButtonElementProps
  | TactileButtonAnchorProps;

export const tactileButtonColorTokens = {
  "--tactile-face": "#4a4a46",
  "--tactile-face-highlight": "#64645e",
  "--tactile-content": "#eeeeec",
  "--tactile-base": "#292926",
  "--tactile-base-shadow": "#141412",
} as CSSProperties;

const lightColorTokens = {
  "--tactile-face": "var(--color-grayscale-4)",
  "--tactile-face-highlight": "var(--color-grayscale-1)",
  "--tactile-content": "var(--color-grayscale-12)",
  "--tactile-base": "var(--color-grayscale-6)",
  "--tactile-base-shadow": "var(--color-grayscale-9)",
} as CSSProperties;

const toneStyles: Record<TactileButtonTone, CSSProperties> = {
  dark: tactileButtonColorTokens,
  light: lightColorTokens,
};

const depthClassNames: Record<TactileButtonDepth, string> = {
  shallow: "[--tactile-depth:3px]",
  medium: "[--tactile-depth:6px]",
  deep: "[--tactile-depth:8px]",
};

const sizeClassNames: Record<TactileButtonSize, string> = {
  sm: "[--tactile-radius:0.75rem]",
  md: "[--tactile-radius:0.75rem]",
  lg: "[--tactile-radius:0.875rem]",
};

const faceSizeClassNames: Record<TactileButtonSize, string> = {
  sm: "h-8 gap-1.5 px-3 text-xs",
  md: "h-10 gap-2 px-4 text-sm",
  lg: "h-12 gap-2.5 px-5 text-base",
};

function getRootClassName({
  className,
  depth,
  size,
}: {
  className?: string;
  depth: TactileButtonDepth;
  size: TactileButtonSize;
}) {
  return cn(
    "group/tactile relative inline-grid w-max shrink-0 cursor-pointer select-none border-0 bg-transparent p-0 pb-[var(--tactile-depth)] font-inherit leading-none focus-visible:rounded-[var(--tactile-radius)] focus-visible:outline-2 focus-visible:outline-grayscale-9 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45",
    depthClassNames[depth],
    sizeClassNames[size],
    className,
  );
}

function TactileButtonLayers({
  children,
  size,
}: {
  children: ReactNode;
  size: TactileButtonSize;
}) {
  return (
    <>
      <span className="absolute inset-x-0 top-[var(--tactile-depth)] bottom-0 rounded-[var(--tactile-radius)] bg-[var(--tactile-base)] shadow-[inset_0_-1px_0_var(--tactile-base-shadow)]" />
      <span
        className={cn(
          "relative flex items-center justify-center rounded-[var(--tactile-radius)] bg-[var(--tactile-face)] font-medium text-[var(--tactile-content)] shadow-[inset_0_1px_0_var(--tactile-face-highlight)] transition-transform duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/tactile:translate-y-0.5 group-active/tactile:translate-y-[var(--tactile-depth)] motion-reduce:transform-none motion-reduce:transition-none",
          faceSizeClassNames[size],
        )}
      >
        {children}
      </span>
    </>
  );
}

export function TactileButton(props: TactileButtonProps) {
  const {
    children,
    className,
    depth = "medium",
    size = "md",
    tone = "dark",
  } = props;
  const resolvedClassName = getRootClassName({ className, depth, size });

  if ("href" in props && props.href !== undefined) {
    const {
      children: _children,
      className: _className,
      depth: _depth,
      size: _size,
      style,
      tone: _tone,
      ...anchorProps
    } = props;

    return (
      <a
        className={resolvedClassName}
        style={{ ...toneStyles[tone], ...style }}
        {...anchorProps}
      >
        <TactileButtonLayers size={size}>{children}</TactileButtonLayers>
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    depth: _depth,
    size: _size,
    style,
    tone: _tone,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      className={resolvedClassName}
      style={{ ...toneStyles[tone], ...style }}
      type={type}
      {...buttonProps}
    >
      <TactileButtonLayers size={size}>{children}</TactileButtonLayers>
    </button>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/tactile-button/tactile-button-showcase.tsx`)
```tsx
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TactileButton } from "@/components/TactileButton";

export function TactileButtonShowcase() {
  return (
    <div className="flex min-h-80 w-full items-center justify-center rounded-[13px] bg-grayscale-2">
      <TactileButton size="sm">
        <span>Continue</span>
        <ArrowRightIcon aria-hidden="true" size={14} weight="bold" />
      </TactileButton>
    </div>
  );
}

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `assets/dqnamo/textures/plastic-noise.svg`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
