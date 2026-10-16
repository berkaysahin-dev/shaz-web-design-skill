# Monolithic Luxury Product Card — Bespoke Hardware & Furniture

* **ID:** `ecommerce-monolithic-luxury-product-card`
* **Category:** `08-ecommerce`
* **Vibe:** `High-End Luxury / Swiss Utilitarian`
* **Primary Target:** Next.js (App Router), Tailwind CSS
* **Rule Compliance:** Zero badges, zero discount pills, zero neon glows, architectural material density.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
A high-end product card and collection grid designed for bespoke furniture ateliers, luxury watchmakers, or custom architectural hardware fabricators. Replaces noisy e-commerce patterns (like "SALE!", "BEST SELLER", "50% OFF" pills, star rating widgets, and pulsating "Add to Cart" buttons) with a calm, double-bezel architectural frame, precise physical dimensions, material finish selectors, and clean typographical hierarchy.

### 1.2 Layout & Geometry
- **Outer Shell:** Swiss warm stone paper `#F6F5F1` with `#ECEAE3` tray padding (7px) and 16px radius.
- **Inner Core:** Solid white `#FFFFFF` core housing the product canvas, specimen reference code, finish swatches, and direct acquisition action.
- **Finish Selector:** Tactile monochrome circular swatches with crisp 1px active rings (strictly zero neon glows or drop shadows).

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero "SALE", "HOT", or category pill capsules.
- **NO NEON / BLINK / PULSE:** Zero glowing borders, zero pulsing stock alerts.
- **NO FLUFF COPY:** Descriptions are replaced with material composition, origin, and verified dimensions.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProductItem {
  id: string;
  refCode: string;
  name: string;
  designer: string;
  price: string;
  materials: string;
  dimensions: string;
  origin: string;
  finishes: { id: string; name: string; hex: string }[];
}

const products: ProductItem[] = [
  {
    id: "prod-01",
    refCode: "MONO-CHAIR-04",
    name: "Basalt Monolith Armchair",
    designer: "Studio Shaz · 2026",
    price: "$4,800",
    materials: "Solid Basalt & Cold-Rolled Stainless Steel",
    dimensions: "78 × 82 × 72 cm",
    origin: "Vals, Switzerland",
    finishes: [
      { id: "basalt", name: "Honed Basalt", hex: "#1C1C20" },
      { id: "granite", name: "Silver Granite", hex: "#686762" },
      { id: "travertine", name: "Raw Travertine", hex: "#D8D5CD" },
    ],
  },
  {
    id: "prod-02",
    refCode: "CANT-TABLE-08",
    name: "Cantilever Cast Bronze Desk",
    designer: "Studio Shaz · 2026",
    price: "$9,200",
    materials: "Sand-Cast Phosphor Bronze & Smoked Glass",
    dimensions: "210 × 90 × 74 cm",
    origin: "Milan, Italy",
    finishes: [
      { id: "bronze-raw", name: "Oxidized Bronze", hex: "#3A352F" },
      { id: "bronze-brushed", name: "Brushed Bronze", hex: "#7A6B58" },
    ],
  },
];

export function MonolithicLuxuryProductCard() {
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, string>>({
    "prod-01": "basalt",
    "prod-02": "bronze-raw",
  });

  const handleFinishChange = (productId: string, finishId: string) => {
    setSelectedFinishes((prev) => ({ ...prev, [productId]: finishId }));
  };

  return (
    <section className="w-full bg-[#F6F5F1] text-[#141413] py-24 px-6 sm:px-12 lg:px-16 border-b border-[#E2DFD7] selection:bg-[#141413] selection:text-[#F6F5F1]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header Telemetry */}
        <div className="w-full border-b border-[#E2DFD7] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#686762] block mb-2">
              Bespoke Catalog · Series 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
              FURNITURE &amp; <br />
              <span className="font-serif italic font-normal text-[#686762]">Monolithic</span> EDITIONS.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#686762] text-left sm:text-right">
            <div>FABRICATION: LIMITED TO 24 EDITIONS</div>
            <div>PROVENANCE: NUMBERED &amp; SIGNED</div>
          </div>
        </div>

        {/* 2-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((item) => {
            const activeFinish = item.finishes.find(
              (f) => f.id === (selectedFinishes[item.id] || item.finishes[0].id)
            );

            return (
              <div
                key={item.id}
                className="p-[7px] bg-[#ECEAE3] border border-[#E2DFD7] rounded-[16px] shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-[11px] p-6 sm:p-8 flex flex-col justify-between gap-6 flex-1">
                  {/* Card Top Ledger */}
                  <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3 font-mono text-xs text-[#686762]">
                    <span className="uppercase tracking-wider font-semibold text-[#141413]">
                      {item.refCode}
                    </span>
                    <span>{item.origin}</span>
                  </div>

                  {/* Architectural Silhouette Stage */}
                  <div className="aspect-[4/3] w-full bg-[#141413] rounded-[6px] p-6 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="flex justify-between font-mono text-[10px] text-white/50 uppercase">
                      <span>Specimen Canvas</span>
                      <span>Finish: {activeFinish?.name}</span>
                    </div>

                    <div className="my-auto flex items-center justify-center">
                      <div className="w-36 h-28 border border-white/20 flex items-center justify-center relative">
                        <div className="w-24 h-16 border border-white/40" />
                        <span className="absolute bottom-2 font-mono text-[9px] text-[#A1A1AA] uppercase">
                          {item.dimensions}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-end font-mono text-[10px] text-white/60 uppercase">
                      <span>{item.designer}</span>
                      <span className="text-white font-semibold text-xs">{item.price}</span>
                    </div>
                  </div>

                  {/* Product Metadata */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141413]">
                      {item.name}
                    </h3>
                    <p className="font-mono text-xs text-[#686762]">
                      {item.materials}
                    </p>
                  </div>

                  {/* Finish Selector Swatches (Zero Neon, Clean Monochrome Rings) */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E2DFD7]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#94928B] uppercase">Finish:</span>
                      <div className="flex items-center gap-2">
                        {item.finishes.map((finish) => {
                          const isSelected = selectedFinishes[item.id] === finish.id;
                          return (
                            <button
                              key={finish.id}
                              type="button"
                              onClick={() => handleFinishChange(item.id, finish.id)}
                              aria-label={`Select finish ${finish.name}`}
                              style={{ backgroundColor: finish.hex }}
                              className={`w-5 h-5 rounded-full border transition-all ${
                                isSelected
                                  ? "ring-2 ring-[#141413] ring-offset-2 border-white scale-110"
                                  : "border-black/20 hover:scale-105"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Direct Acquisition CTA */}
                    <a
                      href={`#order-${item.id}`}
                      className="inline-flex items-center gap-2 bg-[#141413] text-[#F6F5F1] px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-[#2A2A28] transition-colors focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
                    >
                      Acquire
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or discount pills.
- [x] Zero neon colors, glowing halos, or pulsing stock indicators.
- [x] Double-bezel hardware envelope enclosing all luxury product items.
- [x] High-density material and dimension specifications.
- [x] Production Next.js + Tailwind CSS with TypeScript.
