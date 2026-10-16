# Kinetic Spec Showcase — Precision Hardware & Acoustics

* **ID:** `showcase-kinetic-spec`
* **Category:** `06-product-showcase`
* **Vibe:** `Technical Minimal / Luxury Hardware`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero blinking lights, zero marketing fluff, tabular technical density.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An interactive product showcase designed for high-precision physical instruments, luxury audio equipment, or bespoke industrial devices. Completely avoids generic e-commerce badges ("Hot", "New", "50% Off") and replace them with interactive layer isolation, exact acoustic/material specifications, and architectural framing.

### 1.2 Layout & Geometry
- **Top Bar:** Model nomenclature ("SERIES VII / TRANSDUCER") and physical mass/dimensions.
- **Center Canvas:** Asymmetric split. Left: High-contrast product viewport with switchable perspective views. Right: Tabular technical matrix displaying material modulus, frequency response, and assembly tolerances.
- **Interactive Controls:** Segmented view controller with solid monochromatic active states (strictly zero glowing borders or pulsing halos).

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** No promotional badges or pill chips.
- **NO BLINKING / PULSE:** No pulsing circular hotspots or blinking radar rings on the product visual.
- **NO FLUFF COPY:** Descriptions are replaced by hard engineering facts and material specifications.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpecView {
  id: string;
  label: string;
  title: string;
  material: string;
  specTable: { key: string; value: string }[];
}

const views: SpecView[] = [
  {
    id: "acoustics",
    label: "Acoustic Chamber",
    title: "Dual-Cavity Resonance Damping",
    material: "Machined Aerograde 6061-T6 Aluminum",
    specTable: [
      { key: "Frequency Spectrum", value: "4 Hz – 48,000 Hz (±0.5 dB)" },
      { key: "Total Harmonic Distortion", value: "< 0.002% at 1 kHz, 94 dB SPL" },
      { key: "Driver Topology", value: "50mm Pure Beryllium Diaphragm" },
      { key: "Acoustic Resistance", value: "32 Ω at 1,000 Hz" },
    ],
  },
  {
    id: "materiality",
    label: "Structural Core",
    title: "Anodized Monocoque Chassis",
    material: "Bead-Blasted Basalt Composite",
    specTable: [
      { key: "Tensile Strength", value: "480 MPa" },
      { key: "Chassis Weight", value: "328 grams (excl. cable)" },
      { key: "Surface Treatment", value: "Hard-Anodized Type III Class 2" },
      { key: "Assembly Tolerance", value: "± 0.005 mm CNC Precision" },
    ],
  },
  {
    id: "kinematics",
    label: "Gimbal Pivot",
    title: "Frictionless Dual-Axis Gimbal",
    material: "Grade 5 Titanium & Phosphor Bronze",
    specTable: [
      { key: "Articulation Range", value: "360° Horizontal · 45° Pitch" },
      { key: "Pivot Bearings", value: "Ceramic Hybrid Ball-Race" },
      { key: "Clamping Force", value: "4.2 N Calibrated Ergonomics" },
      { key: "Interconnect", value: "Oxygen-Free 8-Core Silver Wire" },
    ],
  },
];

export function KineticSpecShowcase() {
  const [activeTab, setActiveTab] = useState<string>("acoustics");
  const currentView = views.find((v) => v.id === activeTab) || views[0];

  return (
    <section className="w-full bg-[#141413] text-[#F4F4F6] py-20 px-6 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        {/* Header Telemetry */}
        <div className="w-full border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#71717A] block mb-2">
              Engineering Specification · Model 07
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              REFERENCE <span className="font-serif italic font-normal text-[#A1A1AA]">Transducer</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1A1AA] text-left sm:text-right">
            <div>TOLERANCE: &plusmn;0.005mm</div>
            <div>STATUS: VERIFIED PRODUCTION</div>
          </div>
        </div>

        {/* View Switcher Controls (Strictly Zero Pills) */}
        <div className="flex border-b border-white/10 w-full overflow-x-auto no-scrollbar">
          {views.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-4 px-6 font-mono text-xs uppercase tracking-wider transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${
                activeTab === tab.id ? "text-white font-medium" : "text-[#71717A] hover:text-[#A1A1AA]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBorder"
                  className="absolute bottom-0 inset-x-0 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Canvas: Product Architectural Representation */}
          <div className="lg:col-span-7 p-[7px] bg-[#1C1C20] border border-white/10 rounded-[16px] flex flex-col">
            <div className="relative flex-1 bg-[#09090B] border border-white/10 rounded-[11px] p-8 flex flex-col justify-between min-h-[380px] overflow-hidden">
              <div className="flex items-center justify-between text-white/50 font-mono text-[11px] uppercase tracking-wider">
                <span>Viewport: Optical Orthographic</span>
                <span>Sub-Assembly: {currentView.id.toUpperCase()}</span>
              </div>

              {/* Minimal Wireframe Geometry */}
              <div className="my-auto py-12 flex items-center justify-center relative">
                <div className="w-56 h-56 rounded-full border border-white/15 flex items-center justify-center relative">
                  <div className="w-40 h-40 rounded-full border border-white/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-white/60 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/80 rounded-full" />
                    </div>
                  </div>
                  {/* Static measurement indicators (Zero pulse, zero blink) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#09090B] px-2 font-mono text-[10px] text-[#A1A1AA]">
                    &Oslash; 120.0 MM
                  </div>
                </div>
              </div>

              <div className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider">
                Primary Alloy: {currentView.material}
              </div>
            </div>
          </div>

          {/* Right Matrix: Hard Engineering Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#71717A] block mb-1">
                    Architecture Detail
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {currentView.title}
                  </h3>
                </div>

                {/* Precision Spec Table */}
                <div className="border-t border-white/10 divide-y divide-white/10">
                  {currentView.specTable.map((row) => (
                    <div key={row.key} className="py-3.5 flex items-baseline justify-between gap-4">
                      <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wide">
                        {row.key}
                      </span>
                      <span className="font-mono text-xs text-white text-right font-medium">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Direct Engineering Inquiry Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#71717A] uppercase">
                CAD Data &amp; STEP Files
              </span>
              <button
                type="button"
                className="bg-white text-[#141413] px-5 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-[#E2DFD7] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Request Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero promotional badges, chips, or floating pills.
- [x] Zero pulsing hotspots or blinking indicator lights.
- [x] Tabular engineering matrix replaces decorative filler copy.
- [x] Double-bezel outer container (`#1C1C20` tray with `#09090B` core).
- [x] Full keyboard navigation and accessible segmented tab switcher.
