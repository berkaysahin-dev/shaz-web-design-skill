# Kinetic Typography Monolith Hero — Editorial & Type Foundry

* **ID:** `hero-kinetic-typography-monolith`
* **Category:** `01-hero-sections`
* **Vibe:** `Editorial Monolith / Stark Swiss Typography`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero pills, zero blinking lights, typographic scale dominance.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An unapologetic, typography-dominant hero designed for cultural foundations, independent type foundries, or high-end architectural publications. The design rejects all decorative clutter, stock hero photography, and cartoonish badges. The headline itself functions as the primary visual architecture of the site.

### 1.2 Layout & Geometry
- **Composition:** Full viewport stage (`100vh`) anchored by a massive 3-line responsive typographic stack (`text-6xl sm:text-8xl lg:text-[9.5vw]`).
- **Interactive Stagger:** Hovering or scrolling subtly shifts the typographic tracking or weight via smooth CSS transitions.
- **Micro-Telemetry Band:** High-precision publication metadata, issue numbering, and edition identifiers rendered in razor-sharp monospace.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or category pill badges.
- **NO BLINKING / PULSE:** Strictly zero pulsing indicator lights or flashing cursor effects.
- **NO FLUFF COPY:** A single authoritative manifesto sentence; zero generic promotional fillers.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function KineticTypographyMonolithHero() {
  return (
    <section className="relative min-h-screen w-full bg-[#141413] text-[#F4F4F6] flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-hidden selection:bg-white selection:text-[#141413]">
      {/* Top Ledger Row */}
      <header className="w-full flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
        <div>FOUNDRY MONOGRAPH &middot; NO. 14</div>
        <div className="hidden md:flex items-center gap-8">
          <span>SPECIMEN: SERIF &middot; GROTESK</span>
          <span>EDITION OF 500</span>
        </div>
        <div>ZURICH &middot; 2026</div>
      </header>

      {/* Center Monolithic Typography Stack */}
      <div className="my-auto py-12 flex flex-col gap-8 w-full max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5vw] font-bold tracking-tight text-white leading-[0.88] uppercase select-none">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            RIGID FORM
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block font-serif italic font-normal text-[#A1A1AA] normal-case"
          >
            Silent Weight
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            ENDURING.
          </motion.span>
        </h1>

        {/* Dense Single-Sentence Intent Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-white/10">
          <p className="md:col-span-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            We publish monolithic typographic systems and architectural monographs calibrated for structural clarity.
          </p>

          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-6">
            <a
              href="#specimens"
              className="bg-white text-[#141413] px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-[#E2DFD7] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Inspect Types
            </a>
            <a
              href="#archive"
              className="border border-white/20 text-white px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Archive Index
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Ledger & Scroll Direction */}
      <footer className="w-full border-t border-white/10 pt-6 flex items-end justify-between font-mono text-xs text-[#71717A] uppercase tracking-wider">
        <div className="flex items-center gap-2 text-[#A1A1AA]">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>Scroll to Read Monograph</span>
        </div>

        <div className="hidden sm:block text-right">
          <span>PRINT RUN ARCHIVE · REGISTERED CH-8002</span>
        </div>
      </footer>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or pill containers.
- [x] Zero pulsing lights, flashing neon dots, or continuous glow loops.
- [x] Massive typographic scale with `Instrument Serif` italic contrast.
- [x] Exactly one concise manifesto sentence; zero filler marketing fluff.
- [x] Production Next.js + Tailwind CSS with TypeScript.
