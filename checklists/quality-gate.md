# Shaz Agency Web Design — 16-Point Universal Quality Gate Audit

Before any code, section, or complete website design is delivered to the user, run this rigorous 16-point audit. These rules are **UNIVERSAL** across every category, industry, and project type (SaaS, FinTech, Industrial, Architecture, Biotech, Automotive, Luxury, Portfolios). If even a single criterion fails, correct it immediately before outputting code.

---

## The 16-Point Universal Pre-Delivery Checklist

| # | Check Item | Verification Command / Observation | Pass Criteria |
| :-: | :--- | :--- | :--- |
| **1** | **Zero Fluff Text** | Scan headings and body copy across all components. | No multi-sentence marketing paragraphs. Every heading is concise and purposeful. Body text is 1–2 sentences maximum. |
| **2** | **Zero Badges, Pills & Eyebrows** | Inspect DOM for `rounded-full` pills, status chips, eyebrow kicker labels (`SECTION 03`, `CATEGORY · SUB`), or fake GPS coordinates. | Zero decorative pills, zero kicker micro-labels above titles, zero synthetic GPS coordinates. |
| **3** | **Zero Blinking & Neon Strobes** | Inspect CSS and Tailwind animations (`animate-pulse`, `@keyframes`, `drop-shadow neon`). | Zero blinking indicator dots, pulsing halos, or flashing neon elements. Colors are matte, optical, and balanced. |
| **4** | **Zero Emojis & Mandatory Vector Icons** | Audit UI code for emojis (🚀, ✨, 🎉, ⌚). Verify vector icon usage. | Zero emojis in UI or copy. Pure monochrome vector icons only (Lucide React or inline SVG, `stroke-current`, 1.5px–1.75px stroke). |
| **5** | **Selective Surface Hierarchy (No Universal Bezel)** | Check container borders and nesting architecture across the whole page. | Double-Bezel (`.bezel-tray` -> `.bezel-core`) is used **selectively** as a prestigious focal accent (e.g. flagship tier or signature stage). Never dogmatically applied to every box. Secondary items use clean single hairline borders, flat panels, or open editorial typography. |
| **6** | **Zero Post-Hero Telemetry Ticker Strips** | Inspect the region immediately below the hero banner. | No horizontal monospace stat bars, ticker bands, or metric strips (`DAILY RATE...`) glued under the hero. Technical data belongs in dedicated architectural dossiers. |
| **7** | **Seamless Atmospheric Section Transitions** | Inspect borders between consecutive page sections. | Zero harsh full-bleed 1px horizontal dividing lines (`border-b border-white/10`). Sections transition through continuous background gradients, ambient lighting, and generous negative space (120px–180px). |
| **8** | **Hero Centerpiece Purity (Backgroundless & Calm)** | Inspect the focal object/preview in the hero section. | The hero centerpiece (product, 3D model, UI specimen) floats backgroundless without being trapped in a dark card box. Hovering with the mouse produces **zero tilt wobbling or dizzying cursor tracking**. Operates with calm, dignified autonomous precision. |
| **9** | **Bespoke Non-Classic Footers** | Inspect page footer structure. | No generic 4-column corporate link lists ("About / Careers / Privacy"). Must feature bespoke closing architecture: monumental brand watermark, live operating timekeeping/status, physical salon/office coordinates, and VIP concierge direct action. |
| **10** | **Category-Driven Color & Physical Materiality** | Inspect palette against project industry. | Colors reflect real physical materials (stone, basalt, titanium, brushed aluminum, clinical paper, deep obsidian). Zero radioactive RGB extremes. |
| **11** | **Typographic Hierarchy & Editorial Scale** | Inspect font families, weights, and scale contrast. | Clear pairing of authoritative display/editorial typography with clean sans/mono telemetry. No default unstyled system fonts. |
| **12** | **60 FPS Motion Performance** | Review animation properties in CSS, Framer Motion, or GSAP. | Strictly animating `transform` and `opacity`. No animated layout properties (`height`, `width`, `padding`). Uses physical spring curves. |
| **13** | **WAI-ARIA & Keyboard Access** | Review button, link, and interactive roles. | Interactive elements have semantic tags (`<button>`, `<a>`, `<input>`), explicit labels, and visible `:focus-visible` styling. |
| **14** | **Zero Comment Leaks & Clean Media** | Check rendered HTML for comment leaks (`{/* ... */}`) and verify background media is text-free and photos are authentic. | Zero visible comment leaks. Background media contains no burned-in text. Stock photos are 100% authentic and relevant to the project. |
| **15** | **Scroll-Morphing Dock & Marquee Integrity** | Inspect downward scroll behavior of navigation and infinite marquee. | Scrolled navbar collapses cleanly into centered compact pill with deterministic CSS hiding (`display: none !important` on text links) preventing desktop overflow; marquee runs seamlessly with edge alpha masks. |
| **16** | **Bespoke Vector Favicon Architecture** | Verify presence of project-specific vector favicon. | Root `favicon.svg` present and declared in `<head>` via `<link rel="icon" type="image/svg+xml" ...>`. Scalable vector SVG tailored directly to brand motif and materiality. Zero generic or emoji favicons. |

