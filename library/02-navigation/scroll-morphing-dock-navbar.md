# Scroll-Morphing Collapsible Dock Navigation

* **ID:** `nav-scroll-morphing-dock`
* **Category:** `02-navigation`
* **Vibe:** `Kinetic Editorial / Adaptive Studio Dock`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero pills, zero status dots, full keyboard ergonomics, scroll-adaptive geometry.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An intelligent, scroll-adaptive navigation bar for modern web architectures. At page top, it spans comfortably across the container with full typographic wordmark, textual navigation links, and primary action triggers. As the user initiates downward scroll (`scrollY > 80px`), the navigation dynamically contracts into a sleek, centered floating dock with backdrop blur. Text links gracefully collapse into clean monochrome SVG icons, maximizing reading real estate while preserving instant access to all core routes.

### 1.2 Kinetic State Machine
- **Apex State (`scrollY <= 80px`):** Expanded layout (`max-w-7xl` or `max-w-6xl`) with full typographic wordmark, textual menu links, and primary action triggers.
- **Scrolled Dock State (`scrollY > 80px`):** Smooth geometric contraction (`max-w-md`, `rounded-2xl` or `rounded-full`, `px-4 py-2`, `backdrop-blur-xl bg-[#08090C]/85 border border-white/15 shadow-2xl`).
- **Iconic Glyph Collapse:** Text links dissolve into compact, accessible monochrome SVG icons (`Home`, `Laws`, `Library`, `Architecture`, `Docs`).
- **Flyout Overlay Trigger:** Tapping the dock's expand icon opens a full modal drawer menu, ensuring complete route exploration without requiring scrolling back up.
- **Apex Return:** Scrolling back to top smoothly expands the bar back to full scale with zero layout shift.

### 1.3 Anti-Pattern Guardrails
- **NO STATIC MEGA-BARS:** Never fasten heavy, opaque headers across viewports during deep reading.
- **NO ABRUPT VANISHING:** Never disappear completely without leaving a compact floating dock anchor.
- **NO JARRING TRANSITIONS:** Always use cubic-bezier or Framer Motion spring physics for smooth width and padding interpolation.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, Layers, Cpu, Menu, X, ArrowUpRight } from "lucide-react";

interface NavRoute {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const routes: NavRoute[] = [
  { label: "Overview", href: "#overview", icon: Home },
  { label: "Laws", href: "#laws", icon: BookOpen },
  { label: "Library", href: "#library", icon: Layers },
  { label: "Architecture", href: "#architecture", icon: Cpu },
];

export function ScrollMorphingDockNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className={`pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? "max-w-md w-full bg-[#08090C]/90 backdrop-blur-xl border border-white/15 rounded-full px-5 py-2.5 shadow-2xl"
              : "max-w-7xl w-full bg-[#0B0C12]/80 backdrop-blur-md border border-white/10 rounded-[16px] px-6 py-4"
          }`}
        >
          <nav className="flex items-center justify-between w-full" aria-label="Main Navigation">
            {/* Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors"
            >
              <span className="font-bold">SHAZ</span>
              {!isScrolled && <span className="text-slate-500 hidden sm:inline">STUDIO ARCHITECTURE</span>}
            </a>

            {/* Navigation Cluster: Morphs from Text to Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              {routes.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    title={item.label}
                    className={`font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                      isScrolled
                        ? "p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg"
                        : "px-3 py-1 text-slate-400 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {!isScrolled && <span className="hidden md:inline">{item.label}</span>}
                  </a>
                );
              })}
            </div>

            {/* Action / Menu Trigger */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="p-2 text-slate-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                aria-label="Toggle Full Menu Drawer"
              >
                {isDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>

              {!isScrolled && (
                <a
                  href="#deploy"
                  className="hidden sm:inline-flex items-center gap-1.5 bg-white text-[#08090C] hover:bg-slate-200 px-4 py-2 font-mono text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  <span>Deploy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </nav>
        </motion.div>
      </header>

      {/* Expandable Navigation Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#08090C]/95 backdrop-blur-2xl flex flex-col justify-center px-8 sm:px-16"
          >
            <div className="max-w-2xl mx-auto w-full flex flex-col gap-8 font-mono">
              <span className="text-xs text-slate-500 uppercase tracking-widest border-b border-white/10 pb-4">
                Global Navigation Index
              </span>

              <div className="flex flex-col gap-6">
                {routes.map((route) => (
                  <a
                    key={route.label}
                    href={route.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white hover:text-[#00F0FF] transition-colors flex items-center justify-between group"
                  >
                    <span>{route.label}</span>
                    <ArrowUpRight className="w-6 h-6 text-slate-600 group-hover:text-[#00F0FF] transition-colors" />
                  </a>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Autonomous AI Design Engine</span>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-white hover:underline uppercase"
                >
                  Close Window
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```
