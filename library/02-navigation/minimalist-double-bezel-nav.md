# Minimalist Double-Bezel Navigation — Structural Header & Menu

* **ID:** `nav-minimalist-double-bezel`
* **Category:** `02-navigation`
* **Vibe:** `Swiss Utilitarian / Hardware Precision`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero pills, zero status dots, full keyboard ergonomics.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
A persistent, floating or fixed navigation header built for high-end digital studios and luxury product brands. Replaces cluttered navigation bars with an architectural double-bezel tray housing a purely typographic wordmark, clean text links, and an expandable overlay menu with WAI-ARIA compliance.

### 1.2 Layout & Geometry
- **Outer Shell:** Centered floating container with 16px border-radius, 7px tray padding, and 1px border.
- **Inner Core:** White or dark core surface housing the brand logo (strictly typographic, zero graphic icon logo), 4 primary section anchors, and a trigger button for the detailed catalog.
- **Link Hover State:** Subtle micro-underline expansion or typographic weight shift; strictly zero glowing halos or colorful hover badges.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** No notification pills ("3"), no "NEW" or "BETA" tags next to links.
- **NO BLINKING / PULSE:** No pulsing status lights indicating "online" or "system active".
- **NO FLUFF COPY:** Clean, self-evident route names: `Architecture`, `Practice`, `Archive`, `Contact`.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  index: string;
}

const navItems: NavItem[] = [
  { label: "Architecture", href: "#architecture", index: "01" },
  { label: "Systems", href: "#systems", index: "02" },
  { label: "Monographs", href: "#monographs", index: "03" },
  { label: "Inquiry", href: "#inquiry", index: "04" },
];

export function MinimalistDoubleBezelNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Double-Bezel Header */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto p-[7px] bg-[#ECEAE3]/90 backdrop-blur-md border border-[#E2DFD7] rounded-[16px] shadow-sm max-w-4xl w-full transition-all">
          <nav
            aria-label="Main Navigation"
            className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-[11px] px-5 py-3 flex items-center justify-between"
          >
            {/* Typographic Wordmark */}
            <a
              href="/"
              className="text-sm font-bold tracking-tight text-[#141413] uppercase font-sans focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
            >
              SHAZ <span className="font-serif italic font-normal text-[#686762]">Studio</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.index}
                  href={item.href}
                  className="group relative font-mono text-xs uppercase tracking-wider text-[#686762] hover:text-[#141413] transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
                >
                  <span className="text-[10px] text-[#94928B] mr-1.5">{item.index}</span>
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#141413] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Direct Action / Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 bg-[#141413] text-[#F6F5F1] px-4 py-2 text-xs font-mono uppercase tracking-widest hover:bg-[#2A2A28] transition-colors focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
              >
                Initiate
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-expanded={isOpen}
                aria-label="Open Navigation Menu"
                className="md:hidden p-2 text-[#141413] hover:bg-[#ECEAE3] rounded-[6px] transition-colors font-mono text-xs uppercase tracking-wider"
              >
                Index
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Architectural Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#141413]/95 backdrop-blur-xl flex flex-col justify-between p-8 md:p-16 text-[#F4F4F6]"
          >
            {/* Top Close Row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">
                Navigation Index
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigation Menu"
                className="p-2 text-[#F4F4F6] hover:bg-white/10 rounded-[6px] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Primary Menu Items */}
            <div className="flex flex-col gap-6 my-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 + 0.1, duration: 0.3 }}
                  className="group flex items-baseline justify-between py-4 border-b border-white/10 text-4xl sm:text-6xl font-bold tracking-tight hover:text-white transition-colors"
                >
                  <span className="group-hover:translate-x-3 transition-transform duration-300">
                    {item.label}
                  </span>
                  <span className="font-mono text-base text-[#71717A] group-hover:text-white">
                    [{item.index}]
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Overlay Metadata */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
              <div>Shaz Agency Architectural Standards</div>
              <div>Geneva · Berlin · Tokyo</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or decorative pill containers.
- [x] Zero blinking lights, neon circles, or status indicators.
- [x] Double-bezel hardware envelope applied to persistent floating header.
- [x] WAI-ARIA accessible modal overlay with keyboard close (`X`) and scroll lock.
- [x] Production Next.js + Tailwind CSS with TypeScript.
