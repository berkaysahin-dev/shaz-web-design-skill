# Interactive Glyph Scrubber — Type Foundry & Variable Specimen

* **ID:** `typography-interactive-glyph-scrubber`
* **Category:** `03-typography`
* **Vibe:** `Swiss Utilitarian / Technical Foundry`
* **Primary Target:** Next.js (App Router), Tailwind CSS
* **Rule Compliance:** Zero badges, zero neon glows, zero blinking dots, tactile mechanical scrubber.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An interactive variable font specimen inspector for digital type foundries, cultural archives, or publication studios. Avoids decorative sliders with neon tracks and pulsing thumb handles. Instead, it uses a tactile, double-bezel mechanical inspection canvas with precise numeric weight and optical tracking readouts.

### 1.2 Layout & Geometry
- **Container:** Dark Obsidian stage (`#0E0E11`) with a `#1A1A20` double-bezel tray.
- **Top Control Bar:** Monospaced sliders for Variable Font Weight (100–900) and Letter Spacing (-0.05em to +0.25em).
- **Interactive Canvas:** An editable or scrubbable glyph specimen ("Aa Bb & 0–9") that reacts dynamically with zero layout latency.
- **Bottom Glyph Matrix:** High-density 16-cell architectural grid showing individual character vectors with unicode hex codes.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or "Interactive" pills.
- **NO NEON / BLINK / PULSE:** Zero neon green/cyan sliders, zero glowing halos, zero blinking indicators.
- **NO FLUFF COPY:** Replaced with exact font metrics (UPM, Ascender, Descender, Unicode blocks).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";

export function InteractiveGlyphScrubber() {
  const [weight, setWeight] = useState<number>(400);
  const [tracking, setTracking] = useState<number>(0);
  const [sampleText, setSampleText] = useState<string>("PERMANENCE");

  const glyphs = [
    { char: "A", unicode: "U+0041" },
    { char: "G", unicode: "U+0047" },
    { char: "Q", unicode: "U+0051" },
    { char: "R", unicode: "U+0052" },
    { char: "&", unicode: "U+0026" },
    { char: "§", unicode: "U+00A7" },
    { char: "0", unicode: "U+0030" },
    { char: "8", unicode: "U+0038" },
  ];

  return (
    <section className="w-full bg-[#09090B] text-[#F4F4F6] py-24 px-6 sm:px-12 lg:px-16 border-b border-white/10 selection:bg-white selection:text-[#09090B]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Telemetry */}
        <div className="w-full border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#71717A] block mb-2">
              Foundry Laboratory · Specimen 03
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              VARIABLE <span className="font-serif italic font-normal text-[#A1A1AA]">Glyph</span> DYNAMICS.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1A1AA] text-left sm:text-right">
            <div>AXES: WEIGHT [100–900]</div>
            <div>UPM: 1000 · OPENTYPE CFF2</div>
          </div>
        </div>

        {/* Double-Bezel Specimen Chamber */}
        <div className="p-[7px] bg-[#16161A] border border-white/10 rounded-[16px] shadow-sm">
          <div className="bg-[#0D0D10] border border-white/10 rounded-[11px] p-6 sm:p-10 flex flex-col gap-8">
            {/* Control Sliders (Zero Neon, Clean Monochrome) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-white/10 pb-8 font-mono text-xs">
              {/* Weight Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between uppercase tracking-wider text-[#A1A1AA]">
                  <span>Optical Weight:</span>
                  <span className="text-white font-semibold">{weight}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="900"
                  step="10"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  aria-label="Adjust font weight"
                  className="w-full h-1.5 bg-white/20 rounded-none appearance-none cursor-pointer accent-white"
                />
              </div>

              {/* Tracking Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between uppercase tracking-wider text-[#A1A1AA]">
                  <span>Tracking (em):</span>
                  <span className="text-white font-semibold">{tracking > 0 ? `+${tracking}` : tracking}em</span>
                </div>
                <input
                  type="range"
                  min="-0.05"
                  max="0.25"
                  step="0.01"
                  value={tracking}
                  onChange={(e) => setTracking(Number(e.target.value))}
                  aria-label="Adjust tracking"
                  className="w-full h-1.5 bg-white/20 rounded-none appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>

            {/* Live Responsive Canvas */}
            <div className="min-h-[220px] sm:min-h-[280px] flex items-center justify-center p-4 overflow-hidden border border-white/5 bg-[#08080A]">
              <input
                type="text"
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                aria-label="Editable specimen text"
                style={{
                  fontWeight: weight,
                  letterSpacing: `${tracking}em`,
                }}
                className="w-full bg-transparent text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight focus:outline-none transition-all duration-75 uppercase"
              />
            </div>

            {/* Individual Glyph Vector Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 pt-4">
              {glyphs.map((item) => (
                <div
                  key={item.unicode}
                  className="p-4 border border-white/10 bg-[#09090C] flex flex-col items-center justify-between gap-3 text-center"
                >
                  <span
                    style={{ fontWeight: weight }}
                    className="text-2xl sm:text-3xl text-white font-serif"
                  >
                    {item.char}
                  </span>
                  <span className="font-mono text-[10px] text-[#71717A] uppercase">
                    {item.unicode}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Technical Notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-wider">
          <div>Kerning Pairs: 1,420 Active Rules</div>
          <div>Bespoke Foundry Licensing: type@shazagency.com</div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill containers.
- [x] Zero neon colors, glowing borders, or pulsing lights.
- [x] Tactile mechanical sliders with exact numeric telemetry readouts.
- [x] Hardware double-bezel container (`#16161A` tray with `#0D0D10` core).
- [x] Production Next.js + Tailwind CSS with TypeScript.
