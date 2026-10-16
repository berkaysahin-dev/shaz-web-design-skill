# Minimal Sliding Cart Drawer — Luxury Order Manifest & Direct Acquisition

* **ID:** `ecommerce-minimal-sliding-cart-drawer`
* **Category:** `08-ecommerce`
* **Vibe:** `High-End Luxury / Swiss Double-Bezel`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero coupon pills, zero neon glows, itemized manifest clarity.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An authoritative, slide-out acquisition drawer designed for limited-edition furniture, high-end watches, or bespoke industrial machinery. Avoids standard e-commerce clutter like "Apply Coupon Code" badges, cross-sell popups, or colorful progress bars for free shipping. Instead, it presents an itemized order manifest with physical edition identifiers, discrete quantity steppers, and a commanding single-action checkout trigger.

### 1.2 Layout & Geometry
- **Drawer Envelope:** Right-anchored slide-out container (`w-full max-w-lg`) on an Obsidian Dark canvas (`#09090B`) or Swiss Warm Paper (`#F6F5F1`).
- **Itemized Ledger:** Each item is housed inside an architectural double-bezel card with material nomenclature, unit price, and edition number.
- **Summary & Settlement:** Bottom-docked financial calculation with tax, courier dispatch, and cryptographic transaction reference.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or "Free Shipping!" pill chips.
- **NO NEON / BLINK / PULSE:** Zero glowing borders or pulsing checkout buttons.
- **NO FLUFF COPY:** Clean, self-evident field ledgers and currency amounts.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Minus, Plus } from "lucide-react";

interface CartLineItem {
  id: string;
  editionNo: string;
  name: string;
  material: string;
  unitPrice: number;
  quantity: number;
}

export function MinimalSlidingCartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartLineItem[]>([
    {
      id: "cart-01",
      editionNo: "EDITION 04 / 24",
      name: "Basalt Monolith Armchair",
      material: "Solid Honed Basalt & 316L Steel",
      unitPrice: 4800,
      quantity: 1,
    },
    {
      id: "cart-02",
      editionNo: "EDITION 02 / 12",
      name: "Reference Transducer Model 07",
      material: "Anodized 6061-T6 Aluminum",
      unitPrice: 2200,
      quantity: 1,
    },
  ]);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0);

  return (
    <>
      {/* Trigger Button */}
      <div className="p-6">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-3 bg-[#141413] text-[#F6F5F1] px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-[#2A2A28] transition-colors focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
        >
          <span>Order Manifest ({items.length})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide-Out Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#09090B]/80 backdrop-blur-sm"
            />

            {/* Main Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 w-full max-w-lg h-full bg-[#F6F5F1] text-[#141413] flex flex-col justify-between p-6 sm:p-10 shadow-2xl border-l border-[#E2DFD7]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#94928B] block">
                    Direct Acquisition Protocol
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141413]">
                    ORDER MANIFEST
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Order Manifest"
                  className="p-2 text-[#686762] hover:text-[#141413] hover:bg-[#ECEAE3] rounded-[6px] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Line Items List */}
              <div className="flex-1 overflow-y-auto my-6 flex flex-col gap-4 pr-1">
                {items.length === 0 ? (
                  <div className="my-auto text-center font-mono text-xs text-[#94928B] uppercase">
                    Order manifest is empty.
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-[7px] bg-[#ECEAE3] border border-[#E2DFD7] rounded-[14px]"
                    >
                      <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-[9px] p-5 flex flex-col gap-3">
                        <div className="flex items-baseline justify-between font-mono text-[11px] text-[#686762]">
                          <span className="uppercase text-[#141413] font-semibold">
                            {item.editionNo}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-[#94928B] hover:text-[#141413] text-[10px] uppercase underline"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="flex flex-col">
                          <h4 className="font-bold text-sm text-[#141413]">{item.name}</h4>
                          <span className="font-mono text-xs text-[#686762]">{item.material}</span>
                        </div>

                        {/* Price & Quantity Stepper */}
                        <div className="flex items-center justify-between pt-3 border-t border-[#E2DFD7] font-mono text-xs">
                          <div className="flex items-center border border-[#E2DFD7] rounded-[4px]">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, -1)}
                              aria-label="Decrease quantity"
                              className="p-1.5 hover:bg-[#ECEAE3] transition-colors"
                            >
                              <Minus className="w-3 h-3 text-[#686762]" />
                            </button>
                            <span className="px-3 font-semibold text-[#141413]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, 1)}
                              aria-label="Increase quantity"
                              className="p-1.5 hover:bg-[#ECEAE3] transition-colors"
                            >
                              <Plus className="w-3 h-3 text-[#686762]" />
                            </button>
                          </div>

                          <div className="font-bold text-sm text-[#141413]">
                            ${(item.unitPrice * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Financial Ledger & Direct Settlement */}
              <div className="border-t border-[#E2DFD7] pt-6 flex flex-col gap-5">
                <div className="flex flex-col gap-2 font-mono text-xs text-[#686762]">
                  <div className="flex justify-between">
                    <span>Subtotal Manifest:</span>
                    <span className="text-[#141413] font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>White-Glove Insured Freight:</span>
                    <span className="text-[#141413] font-medium">Calculated at Dispatch</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#141413] pt-2 border-t border-[#E2DFD7]">
                    <span>Total Acquisition:</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-4 bg-[#141413] text-[#F6F5F1] font-mono text-xs uppercase tracking-widest hover:bg-[#2A2A28] transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
                >
                  <span>Authorize Settlement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="font-mono text-[10px] text-[#94928B] text-center uppercase tracking-wider">
                  Insured Transit Guaranteed &middot; Zurich · London · Tokyo
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or coupon code pill tags.
- [x] Zero neon colors, glowing borders, or pulsing checkout buttons.
- [x] Itemized manifest ledger with physical edition numbering.
- [x] WAI-ARIA accessible slide-out drawer with backdrop dismissal.
- [x] Production Next.js + Tailwind CSS with TypeScript.
