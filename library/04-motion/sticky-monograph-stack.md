# Sticky Monograph Stack — Structural Case Study Cascade

* **ID:** `motion-sticky-monograph-stack`
* **Category:** `04-motion`
* **Vibe:** `Swiss Utilitarian / Kinetic Architecture`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero neon effects, zero blinking lights, physics-driven sticky stack.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
A persistent, scroll-driven sticky card stacking experience designed for architecture firms, structural engineers, or luxury industrial portfolios. Avoids jarring card flips and cartoonish neon trails. Instead, it applies subtle scale attenuation (`scale: 0.95 -> 1.0`), slight vertical translation, and hardware double-bezel containment as the user scrolls through projects.

### 1.2 Layout & Geometry
- **Composition:** Viewport-pinned stacking sequence where each case study card smoothly docks over the previous one.
- **Surface Materiality:** Swiss warm paper `#F6F5F1` outer tray (`#ECEAE3`) housing an inner white core (`#FFFFFF`) with 1px `#E2DFD7` borders.
- **Motion Kinematics:** Framer Motion `useScroll` with calibrated progress ranges, strictly transforming `scale` and `y` without animating layout dimensions.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating "Case Study" or "Featured" pill tags.
- **NO NEON / BLINK / PULSE:** Zero neon glow borders, zero pulsing indicator circles, zero electric colors.
- **NO FLUFF COPY:** Project summaries are strictly one technical sentence paired with hard structural metrics (Span, Load, Location).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  index: string;
  title: string;
  location: string;
  discipline: string;
  metrics: { key: string; value: string }[];
  summary: string;
}

const projects: CaseStudy[] = [
  {
    id: "proj-01",
    index: "01",
    title: "Cantilever Alpine Pavilion",
    location: "Engadin, Switzerland",
    discipline: "Post-Tensioned Concrete",
    metrics: [
      { key: "Unsupported Span", value: "34.0 meters" },
      { key: "Snow Load Rating", value: "8.5 kN/m²" },
      { key: "Elevation", value: "2,140m AMSL" },
    ],
    summary: "Monolithic post-tensioned concrete volume anchored directly into high-altitude granite bedrock.",
  },
  {
    id: "proj-02",
    index: "02",
    title: "Atrium der Schatten",
    location: "Basel, Switzerland",
    discipline: "Perforated Titanium Envelope",
    metrics: [
      { key: "Facade Area", value: "4,200 m²" },
      { key: "Natural Daylight Factor", value: "12.4% Average" },
      { key: "Acoustic Attenuation", value: "46 dB Sound Reduction" },
    ],
    summary: "Self-supporting double-skin titanium facade calibrated for solar dissipation and diffuse natural illumination.",
  },
  {
    id: "proj-03",
    index: "03",
    title: "Basalt Monolith Archive",
    location: "Reykjavík, Iceland",
    discipline: "Basalt & Structural Glass",
    metrics: [
      { key: "Seismic Resilience", value: "Magnitude 8.2 Safe" },
      { key: "Thermal Infiltration", value: "0.14 W/m²K Passivhaus" },
      { key: "Storage Capacity", value: "120,000 Volume Archive" },
    ],
    summary: "Seismic-isolated underground institutional archive engineered with native basalt blocks and vacuum-insulated glazing.",
  },
];

function CardItem({ project, index, total }: { project: CaseStudy; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94 + index * 0.02, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 w-full mb-16 last:mb-0"
    >
      <motion.div
        style={{ scale, opacity }}
        className="p-[7px] bg-[#ECEAE3] border border-[#E2DFD7] rounded-[16px] shadow-sm transition-shadow duration-300 hover:shadow-md"
      >
        <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-[11px] p-8 sm:p-12 flex flex-col justify-between gap-8 min-h-[460px]">
          {/* Card Top Ledger */}
          <div className="flex items-baseline justify-between border-b border-[#E2DFD7] pb-4 font-mono text-xs text-[#686762] uppercase tracking-wider">
            <span className="text-[#141413] font-semibold">
              [{project.index} / {total.toString().padStart(2, "0")}]
            </span>
            <span>{project.location}</span>
          </div>

          {/* Main Title & One-Sentence Intent */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#686762] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Hard Structural Metric Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E2DFD7]">
            {project.metrics.map((m) => (
              <div key={m.key} className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#94928B] uppercase tracking-widest">
                  {m.key}
                </span>
                <span className="font-mono text-sm sm:text-base text-[#141413] font-medium">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Action Row */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E2DFD7] font-mono text-xs">
            <span className="text-[#686762] uppercase tracking-wider">
              Discipline: {project.discipline}
            </span>
            <a
              href={`#${project.id}`}
              className="inline-flex items-center gap-2 text-[#141413] font-semibold uppercase tracking-wider hover:translate-x-1 transition-transform"
            >
              Full Monograph
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StickyMonographStack() {
  return (
    <section className="w-full bg-[#F6F5F1] text-[#141413] py-24 px-6 sm:px-12 lg:px-16 border-b border-[#E2DFD7] selection:bg-[#141413] selection:text-[#F6F5F1]">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="w-full border-b border-[#E2DFD7] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#686762] block mb-2">
              Case Study Cascade · Section 03
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
              STRUCTURAL <br />
              <span className="font-serif italic font-normal text-[#686762]">Monographs</span> ARCHIVE.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#686762] max-w-xs leading-relaxed">
            Scroll-calibrated case study stack. Cards dock progressively without horizontal shifts.
          </p>
        </div>

        {/* Sticky Card Cascade Sequence */}
        <div className="relative w-full flex flex-col items-center">
          {projects.map((proj, idx) => (
            <CardItem
              key={proj.id}
              project={proj}
              index={idx}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill tags.
- [x] Zero neon colors, glowing borders, or pulsing lights.
- [x] Sticky scroll cascade driven strictly by transform (`scale`, `opacity`).
- [x] Double-bezel hardware envelope applied to all cards.
- [x] Production Next.js + Tailwind CSS with TypeScript.
