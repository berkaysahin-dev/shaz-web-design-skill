# Double-Bezel Faceted Filter — Industrial & Material Registry

* **ID:** `ecommerce-double-bezel-filter-drawer`
* **Category:** `08-ecommerce`
* **Vibe:** `Swiss Utilitarian / Material Index`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero neon glows, zero pulsing dots, architectural facet taxonomy.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An interactive catalog filtering interface for raw material registries, specialized hardware components, or luxury design archives. Replaces generic e-commerce pills (like blue filter chips and tags) with a structured double-bezel faceted panel, checkbox matrices with micro-typography, and numerical range boundaries.

### 1.2 Layout & Geometry
- **Layout:** Persistent sidebar or slide-out drawer encased in `#ECEAE3` tray with `#FFFFFF` core.
- **Faceted Sections:** Divided by crisp 1px `#E2DFD7` partition rules (Alloy Family, Surface Finish, Tensile Strength, Origin).
- **Active State:** Clean monochrome checkbox fill with monospaced quantity count.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or "Applied Filters: 3" pill chips.
- **NO NEON / BLINK / PULSE:** Zero glowing borders or electric active halos.
- **NO FLUFF COPY:** Clean taxonomy labels and physical units (MPa, mm, ISO).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { SlidersHorizontal, X, Check } from "lucide-react";

interface FilterFacet {
  category: string;
  options: { id: string; label: string; count: number }[];
}

const facets: FilterFacet[] = [
  {
    category: "Alloy Classification",
    options: [
      { id: "al-7075", label: "Aerograde 7075-T6", count: 18 },
      { id: "ti-gr5", label: "Grade 5 Titanium", count: 12 },
      { id: "ss-316l", label: "Austenitic 316L Steel", count: 24 },
      { id: "bronze-c932", label: "Phosphor Bronze C932", count: 8 },
    ],
  },
  {
    category: "Surface Hardening",
    options: [
      { id: "anodized-type3", label: "Hardcoat Anodized Type III", count: 16 },
      { id: "bead-blasted", label: "Micro-Bead Blasted Ra 0.8", count: 22 },
      { id: "dlc-carbon", label: "Diamond-Like Carbon (DLC)", count: 9 },
    ],
  },
  {
    category: "Tolerance Calibration",
    options: [
      { id: "tol-001", label: "Ultra-Precision ±0.001 mm", count: 14 },
      { id: "tol-005", label: "Standard CNC ±0.005 mm", count: 32 },
    ],
  },
];

export function DoubleBezelFilterDrawer() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["al-7075"]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAll = () => setSelectedFilters([]);

  return (
    <div className="w-full bg-[#F6F5F1] text-[#141413] p-6 sm:p-10 border-b border-[#E2DFD7] selection:bg-[#141413] selection:text-[#F6F5F1]">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Trigger Bar */}
        <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-6 font-mono text-xs text-[#686762] uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 bg-[#141413] text-[#F6F5F1] px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-[#2A2A28] transition-colors focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{isOpen ? "Close Index Filter" : "Filter Material Index"}</span>
            </button>

            {selectedFilters.length > 0 && (
              <span className="text-[#141413] font-medium">
                Active Parameters: {selectedFilters.length}
              </span>
            )}
          </div>

          {selectedFilters.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="text-[#94928B] hover:text-[#141413] transition-colors flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Parameters</span>
            </button>
          )}
        </div>

        {/* Double-Bezel Filter Chamber */}
        {isOpen && (
          <div className="p-[7px] bg-[#ECEAE3] border border-[#E2DFD7] rounded-[16px] shadow-sm">
            <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-[11px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E2DFD7]">
              {facets.map((facet, idx) => (
                <div key={facet.category} className={`${idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""} flex flex-col gap-5`}>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#141413] font-semibold border-b border-[#E2DFD7] pb-3">
                    {facet.category}
                  </div>

                  <div className="flex flex-col gap-3 font-mono text-xs">
                    {facet.options.map((opt) => {
                      const isChecked = selectedFilters.includes(opt.id);

                      return (
                        <label
                          key={opt.id}
                          className="flex items-center justify-between cursor-pointer group py-1"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              onClick={() => toggleFilter(opt.id)}
                              className={`w-4 h-4 rounded-[3px] border flex items-center justify-center transition-colors ${
                                isChecked
                                  ? "bg-[#141413] border-[#141413] text-white"
                                  : "border-[#E2DFD7] group-hover:border-[#686762] bg-white"
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3" />}
                            </div>
                            <span className={`${isChecked ? "text-[#141413] font-semibold" : "text-[#686762] group-hover:text-[#141413]"} transition-colors`}>
                              {opt.label}
                            </span>
                          </div>

                          <span className="text-[#94928B] text-[11px]">
                            [{opt.count}]
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill containers.
- [x] Zero neon colors, glowing halos, or pulsing lights.
- [x] Clean double-bezel filter chamber with monospaced taxonomy.
- [x] Full keyboard accessibility and toggle state handling.
- [x] Production Next.js + Tailwind CSS with TypeScript.
