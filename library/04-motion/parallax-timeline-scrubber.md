# Parallax Timeline Scrubber — Heritage & Engineering Milestones

* **ID:** `motion-parallax-timeline-scrubber`
* **Category:** `04-motion`
* **Vibe:** `Technical Minimal / Swiss Utilitarian`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero neon glows, zero pulsing dots, precision scroll scrubber.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
A continuous, scroll-driven chronological timeline engineered for heritage industrial enterprises, scientific institutions, or century-old engineering practices. Replaces cartoonish timeline circles and blinking neon status nodes with a clean, monospaced architectural track, mechanical progress ruler, and high-density milestone records.

### 1.2 Layout & Geometry
- **Composition:** Centered or left-aligned vertical spine with alternating milestone chambers.
- **Scroll Progress Track:** Single 1px solid hairline line (`#E2DFD7`) with a solid black (`#141413`) active progress fill (strictly zero neon glows or laser effects).
- **Milestone Cards:** Double-bezel containers housing exact year nomenclature, technical patent references, and archival documentation.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or "Historic Milestone" pills.
- **NO NEON / BLINK / PULSE:** Zero glowing nodes, zero pulsing radar circles, zero electric colors.
- **NO FLUFF COPY:** Each milestone is defined by an exact engineering breakthrough and verified technical datum.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface Milestone {
  year: string;
  patentId: string;
  title: string;
  achievement: string;
  material: string;
  scale: string;
}

const milestones: Milestone[] = [
  {
    year: "1948",
    patentId: "CH-PAT-248102",
    title: "Invention of the Frictionless Pivot",
    achievement: "Patented ceramic-sleeved micro-pivot reducing rotational inertia by 78% in mechanical instrumentation.",
    material: "Cold-Drawn Phosphor Bronze",
    scale: "±0.001 mm Tolerance",
  },
  {
    year: "1974",
    patentId: "CH-PAT-498210",
    title: "Monocoque Basalt Foundation System",
    achievement: "Pioneered continuous basalt-aggregate casting for extreme seismic stabilization in Alpine structures.",
    material: "High-Density Basalt Mortar",
    scale: "Magnitude 8.0 Seismic Safe",
  },
  {
    year: "2002",
    patentId: "EP-PAT-104921",
    title: "Vacuum-Insulated Structural Envelope",
    achievement: "First fully glazed commercial building envelope achieving passive solar neutrality without mechanical cooling.",
    material: "Double-Pane Argon Low-E Glass",
    scale: "0.18 W/m²K Thermal Performance",
  },
  {
    year: "2026",
    patentId: "WO-PAT-202609",
    title: "Autonomous Post-Tensioned Truss",
    achievement: "Dynamic sensor-integrated hydraulic tensioning system actively damping high-frequency wind vibrations.",
    material: "Grade 5 Titanium & Carbon Fiber",
    scale: "Sub-Second Vibration Nulling",
  },
];

export function ParallaxTimelineScrubber() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 28,
    mass: 0.8,
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F6F5F1] text-[#141413] py-28 px-6 sm:px-12 lg:px-16 border-b border-[#E2DFD7] selection:bg-[#141413] selection:text-[#F6F5F1]"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {/* Section Header */}
        <div className="w-full border-b border-[#E2DFD7] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#686762] block mb-2">
              Centennial Record · 1948–2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
              ENGINEERING <br />
              <span className="font-serif italic font-normal text-[#686762]">Chronology</span> &amp; PATENTS.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#686762] max-w-xs leading-relaxed">
            Continuous mechanical timeline. Progress track updates responsively without layout shifts.
          </p>
        </div>

        {/* Timeline Track & Milestones */}
        <div className="relative flex flex-col gap-16 sm:gap-24">
          {/* Vertical Progress Spine (Zero Neon, Clean Solid Track) */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1px] bg-[#E2DFD7] -translate-x-1/2">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-[#141413]"
            />
          </div>

          {milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.year}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center w-full pl-12 sm:pl-0 ${
                  isEven ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Node Tick Marker on Spine (Zero pulse, zero blink) */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-3 h-3 bg-[#FFFFFF] border-2 border-[#141413] rounded-none z-10" />

                {/* Double-Bezel Milestone Container */}
                <div className={`w-full sm:w-[45%] ${isEven ? "sm:pr-10" : "sm:pl-10"}`}>
                  <div className="p-[7px] bg-[#ECEAE3] border border-[#E2DFD7] rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-[11px] p-6 sm:p-8 flex flex-col gap-4">
                      {/* Top Ledger: Year & Patent */}
                      <div className="flex items-baseline justify-between border-b border-[#E2DFD7] pb-3">
                        <span className="font-serif text-3xl sm:text-4xl font-bold text-[#141413]">
                          {item.year}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#686762]">
                          {item.patentId}
                        </span>
                      </div>

                      {/* Breakthrough Title & Description */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#141413]">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#686762] leading-relaxed">
                          {item.achievement}
                        </p>
                      </div>

                      {/* Technical Specs Footer */}
                      <div className="pt-3 border-t border-[#E2DFD7] flex items-center justify-between font-mono text-[11px] text-[#686762]">
                        <span>Alloy: {item.material}</span>
                        <span className="text-[#141413] font-medium">{item.scale}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Technical Reference */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-[#686762] uppercase tracking-wider pt-6 border-t border-[#E2DFD7]">
          <div>Federal Patent Registry · Bern</div>
          <div>Continuous Operation Verified</div>
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
- [x] Solid continuous mechanical progress spine without glowing halos.
- [x] Hardware double-bezel cards alternating smoothly.
- [x] Production Next.js + Tailwind CSS with TypeScript.
