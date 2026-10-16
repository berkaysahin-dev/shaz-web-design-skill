# Editorial Split Footer — Creative Studio & Direct Inquiry

* **ID:** `footer-editorial-split`
* **Category:** `09-forms-footers`
* **Vibe:** `Editorial Luxury / Swiss Utilitarian`
* **Primary Target:** Next.js (App Router), Tailwind CSS
* **Rule Compliance:** Zero badges, zero pills, zero blinking status dots, zero filler text.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An architectural, high-impact footer designed for design studios, architecture practices, and premium creative institutions. Replaces cluttered link dumps and social icon clutter with an authoritative split composition: a commanding direct inquiry form on the left, paired with precision site telemetry, global office coordinates, and timezone tickers on the right.

### 1.2 Layout & Geometry
- **Composition:** Asymmetric 2-column grid (`7 cols` left / `5 cols` right) set on a deep obsidian canvas (`#09090B`).
- **Left Column:** Massive call-to-action headline ("INITIATE ENGAGEMENT") paired with a minimal, single-line inquiry input and direct submit arrow.
- **Right Column:** Architectural office directory (Zurich, Tokyo, London) with live GMT offsets, direct email links, and an index of active monograph volumes.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** No "Subscribe to our newsletter" pill tags or status chips.
- **NO BLINKING / PULSE:** No pulsing green dots for "Office open" or "Available for work".
- **NO FLUFF COPY:** Clean, self-evident field labels and strict typographic clarity.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function EditorialSplitFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#09090B] text-[#F4F4F6] pt-24 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10 selection:bg-white selection:text-[#09090B]">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Direct Inquiry & Dispatch */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#71717A] block mb-3">
                Direct Channel · Volume 2026
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95]">
                INITIATE <br />
                <span className="font-serif italic font-normal text-[#A1A1AA]">Engagement.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md leading-relaxed">
              Accepting architectural commissions and digital design partnerships for Q3 2026 onward.
            </p>

            {/* Minimal Single-Line Inquiry Form */}
            <form onSubmit={handleSubmit} className="max-w-md w-full">
              <div className="relative flex items-center border-b border-white/30 focus-within:border-white transition-colors py-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter institutional email address..."
                  required
                  aria-label="Direct inquiry email"
                  className="w-full bg-transparent text-sm sm:text-base font-mono text-white placeholder:text-[#52525B] focus:outline-none pr-10"
                />
                <button
                  type="submit"
                  aria-label="Submit inquiry"
                  className="absolute right-0 p-2 text-white hover:text-[#A1A1AA] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  {submitted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
              {submitted && (
                <span className="font-mono text-xs text-[#A1A1AA] mt-3 block">
                  Transmission received. Our partners will respond within 24 hours.
                </span>
              )}
            </form>
          </div>

          {/* Right Column (5 cols): Office Coordinates & Index */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12 pt-8 lg:pt-0">
            {/* Studio Locations */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#71717A]">
                Locations
              </span>
              <div className="flex flex-col gap-4 font-mono text-xs text-[#A1A1AA]">
                <div>
                  <div className="text-white font-medium">ZURICH</div>
                  <div>Gotthardstrasse 24 · CH-8002</div>
                  <div className="text-[#71717A]">UTC+1</div>
                </div>
                <div>
                  <div className="text-white font-medium">TOKYO</div>
                  <div>Minato-ku, Minamiaoyama 5-7</div>
                  <div className="text-[#71717A]">UTC+9</div>
                </div>
                <div>
                  <div className="text-white font-medium">LONDON</div>
                  <div>12 Berkeley Square · W1J 6BD</div>
                  <div className="text-[#71717A]">UTC+0</div>
                </div>
              </div>
            </div>

            {/* Architectural Index */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#71717A]">
                Index
              </span>
              <ul className="flex flex-col gap-3 font-mono text-xs text-[#A1A1AA]">
                <li>
                  <a href="#monograph" className="hover:text-white transition-colors">
                    01 Monographs (2018–26)
                  </a>
                </li>
                <li>
                  <a href="#materiality" className="hover:text-white transition-colors">
                    02 Material Library
                  </a>
                </li>
                <li>
                  <a href="#engineering" className="hover:text-white transition-colors">
                    03 Structural Engineering
                  </a>
                </li>
                <li>
                  <a href="#governance" className="hover:text-white transition-colors">
                    04 Sustainability Audit
                  </a>
                </li>
                <li>
                  <a href="#press" className="hover:text-white transition-colors">
                    05 Press &amp; Exhibition
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Protocol */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#71717A] uppercase tracking-wider">
          <div>
            &copy; 2026 SHAZ AGENCY &middot; SWISS UTILITARIAN STANDARDS
          </div>
          <div className="flex items-center gap-6">
            <span>ALL RIGHTS RESERVED</span>
            <span>SECURE TRANSMISSION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, pills, or status chips.
- [x] Zero blinking lights or pulsing "available" circles.
- [x] Clean single-line inquiry input; zero unnecessary form fields.
- [x] Asymmetrical 7/5 column architectural split.
- [x] Production Next.js + Tailwind CSS with TypeScript.
