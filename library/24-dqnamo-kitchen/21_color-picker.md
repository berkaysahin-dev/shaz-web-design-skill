# Harmonic Color Picker (Harmonik Renk Seçici ve Palet Eşleyici) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Seçiciler ve Grafikler` (`Pickers & Visuals`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Radix Colors, Tailwind CSS, Popover` · **Fizik:** `Color swatch focus scale: 1.15, selection ring animation: 150ms ease-out, palette crossfade`  
> **Etiketler:** `Color Picker, Radix Colors, Design Tokens, Contrast Ratios, Palette Builder`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Radix UI renk skalalarını, kontrast oranlarını ve açık/koyu mod harmonik ton eşleşmelerini canlı önizleyen renk seçim aracı.

A refined Radix color palette and harmonic pairing picker with live token preview.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Color swatch focus scale: 1.15, selection ring animation: 150ms ease-out, palette crossfade`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Harmonic Color Picker" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Harmonic Color Picker (Harmonik Renk Seçici ve Palet Eşleyici)
- Category: Pickers & Visuals
- Core Philosophy: A refined Radix color palette and harmonic pairing picker with live token preview.
- Motion & Spring Physics: Color swatch focus scale: 1.15, selection ring animation: 150ms ease-out, palette crossfade
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Radix Colors, Tailwind CSS, Popover.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/ColorPicker.tsx`)
```tsx
"use client";

import { Combobox } from "@base-ui/react/combobox";
import { AnimatePresence, motion } from "motion/react";
import { type CSSProperties, useId, useRef, useState } from "react";
import { cn } from "@/helpers/classname-helper";

const RADIX_COLOR_SCALE_DEFINITIONS = [
  { id: "gold", label: "Gold", family: "Warm" },
  { id: "bronze", label: "Bronze", family: "Warm" },
  { id: "brown", label: "Brown", family: "Warm" },
  { id: "orange", label: "Orange", family: "Warm" },
  { id: "tomato", label: "Tomato", family: "Red" },
  { id: "red", label: "Red", family: "Red" },
  { id: "ruby", label: "Ruby", family: "Red" },
  { id: "crimson", label: "Crimson", family: "Red" },
  { id: "pink", label: "Pink", family: "Red" },
  { id: "plum", label: "Plum", family: "Purple" },
  { id: "purple", label: "Purple", family: "Purple" },
  { id: "violet", label: "Violet", family: "Purple" },
  { id: "iris", label: "Iris", family: "Purple" },
  { id: "indigo", label: "Indigo", family: "Blue" },
  { id: "blue", label: "Blue", family: "Blue" },
  { id: "cyan", label: "Cyan", family: "Blue" },
  { id: "teal", label: "Teal", family: "Green" },
  { id: "jade", label: "Jade", family: "Green" },
  { id: "green", label: "Green", family: "Green" },
  { id: "grass", label: "Grass", family: "Green" },
] as const;

export const RADIX_COLOR_SCALES = RADIX_COLOR_SCALE_DEFINITIONS.map(
  ({ id, label, family }) => ({ id, label, family }),
);

export const RADIX_COLOR_STEP = 9 as const;

export type RadixColorScale =
  (typeof RADIX_COLOR_SCALE_DEFINITIONS)[number]["id"];
export type RadixColorStep = typeof RADIX_COLOR_STEP;
export type RadixColorValue = `${RadixColorScale}-${RadixColorStep}`;

export type RadixColorOption = {
  value: RadixColorValue;
  label: string;
  scale: RadixColorScale;
  scaleLabel: string;
  family: string;
  step: RadixColorStep;
  cssVariable: string;
};

export const DEFAULT_RADIX_COLOR_VALUE = "blue-9" satisfies RadixColorValue;

export const RADIX_COLOR_OPTIONS: RadixColorOption[] =
  RADIX_COLOR_SCALE_DEFINITIONS.map((scale) => ({
    value: `${scale.id}-${RADIX_COLOR_STEP}` as RadixColorValue,
    label: scale.label,
    scale: scale.id,
    scaleLabel: scale.label,
    family: scale.family,
    step: RADIX_COLOR_STEP,
    cssVariable: `var(--${scale.id}-${RADIX_COLOR_STEP})`,
  }));

const RADIX_COLOR_OPTION_BY_VALUE = new Map(
  RADIX_COLOR_OPTIONS.map((option) => [option.value, option]),
);

export function getRadixColorOption(value: RadixColorValue | null | undefined) {
  if (!value) {
    return null;
  }

  return RADIX_COLOR_OPTION_BY_VALUE.get(value) ?? null;
}

function getSwatchStyle(option: RadixColorOption | null): CSSProperties {
  return {
    backgroundColor: option?.cssVariable ?? "transparent",
  };
}

type ColorPickerProps = {
  className?: string;
  defaultValue?: RadixColorValue | null;
  label?: string;
  name?: string;
  onValueChange?: (
    value: RadixColorValue | null,
    option: RadixColorOption | null,
  ) => void;
  placeholder?: string;
  value?: RadixColorValue | null;
};

export function ColorPicker({
  className,
  defaultValue = DEFAULT_RADIX_COLOR_VALUE,
  label = "Color",
  name,
  onValueChange,
  placeholder = "Pick a color",
  value,
}: ColorPickerProps) {
  const id = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] =
    useState<RadixColorValue | null>(defaultValue);
  const selectedValue = value === undefined ? uncontrolledValue : value;
  const selectedOption = getRadixColorOption(selectedValue);

  function selectOption(option: RadixColorOption | null) {
    const nextValue = option?.value ?? null;

    if (value === undefined) {
      setUncontrolledValue(nextValue);
    }

    onValueChange?.(nextValue, option);
  }

  function handleOpenChange(
    nextOpen: boolean,
    eventDetails: Combobox.Root.ChangeEventDetails,
  ) {
    if (!nextOpen && eventDetails.reason === "item-press") {
      eventDetails.cancel();
      return;
    }

    setOpen(nextOpen);
  }

  return (
    <Combobox.Root
      autoHighlight
      isItemEqualToValue={(item, selectedItem) =>
        item.value === selectedItem.value
      }
      inputValue=""
      itemToStringLabel={(item) => item.label}
      itemToStringValue={(item) => item.value}
      items={RADIX_COLOR_OPTIONS}
      name={name}
      onOpenChange={handleOpenChange}
      onValueChange={selectOption}
      open={open}
      value={selectedOption}
    >
      <div
        className={cn("flex min-w-0 flex-col gap-2 items-center", className)}
      >
        <label
          className="font-mono font-semibold text-[10px] text-grayscale-10 uppercase leading-none"
          htmlFor={id}
        >
          {label}
        </label>

        <Combobox.Trigger
          aria-label="Open color list"
          className="flex h-8 px-2 cursor-pointer items-center justify-center rounded-lg border border-grayscale-3 bg-white text-grayscale-12 transition-colors hover:bg-grayscale-2 focus-visible:border-grayscale-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grayscale-4 data-[disabled]:cursor-default data-[disabled]:opacity-40 dark:border-grayscale-6 dark:bg-grayscale-4 dark:hover:bg-grayscale-5 dark:focus-visible:ring-grayscale-5"
          ref={triggerRef}
          type="button"
        >
          <span
            aria-hidden="true"
            className="size-4 shrink-0 rounded border border-black/10 "
            style={getSwatchStyle(selectedOption)}
          />
        </Combobox.Trigger>
        <Combobox.Input
          className="sr-only"
          id={id}
          placeholder={placeholder}
          readOnly
        />
      </div>

      <AnimatePresence>
        {open && (
          <Combobox.Portal keepMounted>
            <Combobox.Positioner
              align="start"
              anchor={triggerRef}
              className="z-50 w-max max-w-[calc(100vw-2rem)]"
              side="bottom"
              sideOffset={6}
            >
              <Combobox.Popup
                className="max-h-80 overflow-hidden rounded-lg border border-grayscale-3 bg-white small-shadow outline-none dark:border-grayscale-6 dark:bg-grayscale-4"
                render={
                  <motion.div
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -4 }}
                    initial={{ opacity: 0, scale: 0.96, y: -4 }}
                    transition={{ duration: 0.14, ease: "easeOut" }}
                  />
                }
              >
                <Combobox.Empty>
                  <div className="text-center text-grayscale-10 text-sm">
                    No colors found.
                  </div>
                </Combobox.Empty>
                <Combobox.List className="grid max-h-72 w-max grid-cols-4 gap-2 p-2 overflow-y-auto">
                  {(item: RadixColorOption) => (
                    <Combobox.Item
                      aria-label={`${item.label} ${item.value}`}
                      className="group relative flex size-5 cursor-pointer items-center justify-center rounded-md outline-none transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-grayscale-12 focus-visible:outline-offset-2 data-[highlighted]:scale-105"
                      key={item.value}
                      style={getSwatchStyle(item)}
                      value={item}
                    >
                      <span
                        aria-hidden="true"
                        className="size-2 rounded bg-white/85 opacity-0 shadow-sm group-data-[selected]:opacity-100"
                      />
                    </Combobox.Item>
                  )}
                </Combobox.List>
              </Combobox.Popup>
            </Combobox.Positioner>
          </Combobox.Portal>
        )}
      </AnimatePresence>
    </Combobox.Root>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/color-picker/color-picker-showcase.tsx`)
```tsx
"use client";

import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { type CSSProperties, useState } from "react";
import {
  ColorPicker,
  DEFAULT_RADIX_COLOR_VALUE,
  getRadixColorOption,
  type RadixColorValue,
} from "@/components/ColorPicker";

export function ColorPickerShowcase() {
  const [value, setValue] = useState<RadixColorValue | null>(
    DEFAULT_RADIX_COLOR_VALUE,
  );
  const selectedOption = getRadixColorOption(value);
  const selectedScale = selectedOption?.scale ?? "blue";

  return (
    <div className="grid h-full w-full grid-cols-2 gap-2">
      <div className="flex h-full w-full items-center justify-center rounded-[13px] border border-grayscale-3 bg-grayscale-1 px-8 py-16 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
        <ColorPicker
          label="Color"
          onValueChange={(nextValue) => setValue(nextValue)}
          value={value}
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-[13px] border border-grayscale-3 bg-grayscale-1 px-8 py-16 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
        <div
          className="flex flex-row items-center gap-2 rounded-lg border border-[var(--badge-border-color)] bg-[var(--badge-background-color)] px-2 py-1 text-[var(--badge-color)] transition-colors duration-150 ease-out dark:border-grayscale-7 dark:bg-grayscale-5"
          style={
            {
              "--badge-background-color": `var(--${selectedScale}-3)`,
              "--badge-border-color": `var(--${selectedScale}-4)`,
              "--badge-color": `var(--${selectedScale}-9)`,
            } as CSSProperties
          }
        >
          <CheckCircleIcon size={16} weight="fill" />
          <p className="text-sm font-medium">Color Coded</p>
        </div>
      </div>
    </div>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const usageSource = `import { useState } from "react";
import {
  ColorPicker,
  DEFAULT_RADIX_COLOR_VALUE,
  type RadixColorValue,
} from "@/components/ColorPicker";

export function ColorPickerExample() {
  const [value, setValue] = useState<RadixColorValue | null>(
    DEFAULT_RADIX_COLOR_VALUE,
  );

  return (
    <ColorPicker
      label="Color"
      onValueChange={(nextValue) => setValue(nextValue)}
      value={value}
    />
  );
}
`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
