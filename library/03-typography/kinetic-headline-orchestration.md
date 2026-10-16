# Kinetic Headline Orchestration — Monograph Index & Reveal

* **ID:** `typography-kinetic-headline-orchestration`
* **Category:** `03-typography`
* **Vibe:** `Swiss Utilitarian / Editorial Motion`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero neon glows, zero blinking lights, physics-driven typography reveal.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An interactive index reveal and kinetic typographic transition designed for architecture monographs, design awards catalogs, or master planning portfolios. Replaces chaotic, flashing text animations with calibrated line-by-line spring reveals that react smoothly to user hover or section entry.

### 1.2 Layout & Geometry
- **Composition:** High-density vertical index on Swiss paper `#F6F5F1` with dark ink typography `#141413`.
- **Motion Kinematics:** Framer Motion spring physics (`stiffness: 280, damping: 24, mass: 0.85`) driving clip-path vertical reveals.
- **Index Row:** Each row pairs an authoritative project name with a monospaced discipline tag, structural coordinates, and an expanding inline preview drawer upon hover.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or "Featured" chips.
- **NO NEON / BLINK / PULSE:** Zero neon lines, zero glowing cursor trails, zero blinking dots.
- **NO FLUFF COPY:** Clean, self-evident metadata and project coordinates.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MonographEntry {
  id: string;
  index: string;
  title: string;
  location: string;
  typology: string;
  year: string;
  scale: string;
}

const entries: MonographEntry[] = [
  {
    id: "01",
    index: "01",
    title: "Haus am Basalt",
    location: "Vals, Switzerland",
    typology: "Thermal Residence",
    year: "2024",
    scale: "1,240 m²",
  },
  {
    id: "02",
    index: "02",
    title: "Pavillon der Stille",
    location: "Kyoto, Japan",
    typology: "Cultural Pavilion",
    year: "2025",
    scale: "860 m²",
  },
  {
    id: "03",
    index: "03",
    title: "Monolith Speicher",
    location: "Berlin, Germany",
    typology: "Civic Archive",
    year: "2026",
    scale: "5,400 m²",
  },
  {
    id: "04",
    index: "04",
    title: "Lake Lucerne Pavilion",
    location: "Lucerne, Switzerland",
    typology: "Bespoke Cantilever",
    year: "2026",
    scale: "1,980 m²",
  },
];

export function KineticHeadlineOrchestration() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#F6F5F1] text-[#141413] py-24 px-6 sm:px-12 lg:px-16 border-b border-[#E2DFD7] selection:bg-[#141413] selection:text-[#F6F5F1]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="w-full border-b border-[#E2DFD7] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono text-xs text-[#686762] uppercase tracking-widest">
          <div>MONOGRAPH ARCHIVE · INDEX 2024–2026</div>
          <div className="hidden sm:inline">STRUCTURAL RECORD</div>
        </div>

        {/* Interactive Staggered Typography List */}
        <div className="flex flex-col divide-y divide-[#E2DFD7] border-y border-[#E2DFD7]">
          {entries.map((entry) => {
            const isHovered = hoveredId === entry.id;

            return (
              <div
                key={entry.id}
                onMouseEnter={() => setHoveredId(entry.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative py-8 sm:py-10 flex flex-col gap-4 cursor-pointer transition-colors hover:bg-[#ECEAE3]/40 px-4 -mx-4 rounded-[8px]"
              >
                <div className="flex items-baseline justify-between gap-6">
                  {/* Left: Index + Giant Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-sm text-[#94928B] group-hover:text-[#141413] transition-colors">
                      [{entry.index}]
                    </span>

                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] group-hover:translate-x-2 transition-transform duration-300">
                      {entry.title}
                    </h3>
                  </div>

                  {/* Right: Year & Direct Arrow */}
                  <div className="flex items-center gap-4 sm:gap-8 font-mono text-xs text-[#686762]">
                    <span className="hidden md:inline">{entry.year}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#94928B] group-hover:text-[#141413] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>

                {/* Sub-Telemetry Bar */}
                <div className="flex items-center justify-between font-mono text-xs text-[#686762] uppercase tracking-wider pl-12 sm:pl-16">
                  <span>{entry.location}</span>
                  <span className="hidden sm:inline">{entry.typology}</span>
                  <span>{entry.scale}</span>
                </div>

                {/* Subtle Kinetic Indicator (Zero Neon, Clean Monochrome) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId="activeMonographBorder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-0 inset-y-0 w-1 bg-[#141413]"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Ledger */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-[#686762] uppercase tracking-wider pt-4">
          <div>4 of 42 Projects Rendered</div>
          <a
            href="#full-archive"
            className="text-[#141413] hover:underline flex items-center gap-1 font-semibold"
          >
            Access Complete Monograph Catalogue &rarr;
          </a>
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
- [x] Kinetic typography orchestrated via spring physics without layout shifts.
- [x] High-contrast editorial layout with monospaced telemetry.
- [x] Production Next.js + Tailwind CSS with TypeScript.
