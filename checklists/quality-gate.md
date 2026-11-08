# Shaz Agency Web Design — 25-Point Universal Quality Gate Audit

Before any code, section, or complete website design is delivered to the user, run this rigorous 25-point audit. These rules are **UNIVERSAL** across every category, industry, and project type.

> **Token Economy Notice:** To prevent output truncation, output ONLY the **Design Signature** (`SKILL.md` §5) before generating code. Do not output lengthy pre-code essays.
>
> **After this gate,** run the Variation Engine self-critique (`rules/variation-engine.md` §6: swap test, previous-output test, default-reflex test, copy test). A page can pass all 25 checks and still be the same page as the last project; §6 catches that.

---

## The 25-Point Universal Pre-Delivery Checklist

| # | Check Item | Verification Command / Observation | Pass Criteria |
| :-: | :--- | :--- | :--- |
| **1** | **Zero Fluff Text** | Scan headings and body copy across all components. | No multi-sentence marketing paragraphs. Every heading is concise and purposeful. Body text is 1 dense sentence maximum per section (or 0 sentences if layout speaks for itself). |
| **2** | **Zero Badges, Pills, Eyebrows & Corner Micro-Labels (Zero 'Üst Küçük Yazılar')** | Inspect DOM for `rounded-full` pills, status chips, eyebrow kicker labels (`SECTION 03`), corner micro-labels (`BENCH 04`, `CHAMBER 01`), floating canvas telemetry tags (`REAL-TIME ISO...`), or card-header subtitle strips (`SERIES 01 · BASALT`). | Zero decorative pills, zero kicker micro-labels above titles, zero corner micro-tags on canvases or cards, zero card-header subtitle strips. Visual surfaces and cards breathe purely and nakedly. |
| **3** | **Zero Blinking & Neon Strobes** | Inspect CSS and Tailwind animations (`animate-pulse`, `@keyframes`, `drop-shadow neon`, radar pings). | Zero blinking indicator dots, pulsing circles, or flashing neon elements anywhere in UI, 3D stages, or telemetry boxes. Colors are matte, optical, and balanced. |
| **4** | **Zero Emojis & Mandatory Vector Icons** | Audit UI code for emojis (🚀, ✨, 🎉, ⌚). Verify vector icon usage. | Zero emojis in UI or copy. Pure monochrome vector icons only (Lucide React or inline SVG, `stroke-current`, 1.5px–1.75px stroke). |
| **5** | **Selective Surface Hierarchy (No Universal Bezel)** | Check container borders and nesting architecture across the whole page. | Double-Bezel (`.bezel-tray` -> `.bezel-core`) is used **selectively** as a prestigious focal accent (e.g. flagship tier or signature stage). Never dogmatically applied to every box. Secondary items use clean single hairline borders, flat panels, or open editorial typography. |
| **6** | **Zero Post-Hero Telemetry Ticker Strips** | Inspect the region immediately below the hero banner. | No horizontal monospace stat bars, ticker bands, or metric strips (`DAILY RATE...`) glued under the hero. Technical data belongs in dedicated architectural dossiers. |
| **7** | **Seamless Atmospheric Section Transitions** | Inspect borders between consecutive page sections. | Zero harsh full-bleed 1px horizontal dividing lines (`border-b border-white/10`). Sections transition through continuous background gradients, ambient lighting, and generous vertical negative space (120px–180px). |
| **8** | **Hero Centerpiece Purity (Backgroundless & Calm)** | Inspect the focal object/preview in the hero section. | The hero centerpiece floats backgroundless without being trapped in a dark card box. Hovering with the mouse produces **zero tilt wobbling or dizzying cursor tracking**. Operates with calm, dignified autonomous precision. |
| **9** | **Architectural Master Horizon Footer Compliance** | Inspect page footer structure. | Zero generic 4-column corporate link lists. Zero uppercase micro-kicker labels (`PHYSICAL ATELIERS`, `DIRECT DESK`, `LABORATORY STATUS`). Zero status dots (`bg-emerald-400`). Zero serial verification inputs. Zero cliché faint watermarks. Must feature: architectural dialogue invitation, single-line inquiry action (`inquire@... →`), clean symmetrical navigation deck, and balanced horizon baseline with discrete time. |
| **10** | **Category-Driven Color & Physical Materiality** | Inspect palette against project industry. | Colors reflect real physical materials (stone, basalt, titanium, brushed aluminum, clinical paper, deep obsidian). Zero radioactive RGB extremes. |
| **11** | **Typographic Hierarchy & Editorial Scale** | Inspect font families, weights, and scale contrast. | Clear pairing of display and text faces from the seeded Variation Engine Axis B pairing; monospace only for literal code, tables or timetables. No default unstyled system fonts. |
| **12** | **60 FPS Motion Performance** | Review animation properties in CSS, Framer Motion, or GSAP. | Strictly animating `transform` and `opacity`. No animated layout properties (`height`, `width`, `padding`). Uses physical spring curves. |
| **13** | **WAI-ARIA & Keyboard Access** | Review button, link, and interactive roles. | Interactive elements have semantic tags (`<button>`, `<a>`, `<input>`), explicit labels, and visible `:focus-visible` styling. |
| **14** | **Zero Comment Leaks & Clean Media** | Check rendered HTML for comment leaks (`{/* ... */}`) and verify background media is text-free and photos are authentic. | Zero visible comment leaks. Background media contains no burned-in text. Stock photos are 100% authentic and relevant to the project. |
| **15** | **Navigation Archetype & Marquee Integrity** | Inspect the navigation chosen on Variation Engine Axis G, and the marquee if the page has one. | Navigation matches the seeded archetype and behaves cleanly on scroll and on mobile; if it is the Two-Stage Dock, the scrolled state collapses with deterministic CSS hiding (`display: none !important` on text links) and no desktop overflow. If an integrations/partners marquee exists (Law 17), it loops seamlessly with edge alpha masks and shows only names the brief supplied. A page without partners has no marquee. |
| **16** | **Bespoke Vector Favicon Architecture** | Verify presence of project-specific vector favicon. | Root `favicon.svg` present and declared in `<head>` via `<link rel="icon" type="image/svg+xml" ...>`. Scalable vector SVG tailored directly to brand motif and materiality. Zero generic or emoji favicons. |
| **17** | **Direct Animation Injection (No Fake CSS)** | Audit motion against `rules/animation-injection-engine.md`. | Directly mounts mechanics from `library/10-interactive-animations/` with real mathematical physics (the spring values of the seeded motion personality, Variation Engine Axis F, Web Audio API curves, drag inertia with Lerp velocity, magnetic cursor pull). Banned: simplistic 1-line CSS shortcuts (`hover:translate-x-1`, `transition: all 0.2s`). |
| **18** | **Anti-Caricature, Zero Slashes & Tactile Texture** | Audit text and surfaces against `rules/tactile-depth-texture-system.md`. | Zero synthetic double slashes (`//`) anywhere in UI strings or headings. Maximum 1 high-density sentence per section. Procedural SVG noise/grain overlay (`<feTurbulence>`) active to eliminate flat vector artificiality. |
| **19** | **Hero Composition Diversity (Strict Anti-50/50 Split)** | Audit hero grid and layout structure against `rules/section-composition-engine.md`. | Zero reflexive 50/50 splits (text left, 3D right). Hero must deliberately utilize one of the 6 archetypes: Full-Bleed Ambient Canvas, Asymmetric Monumental Typography, Kinetic Horizontal Strip, Fullscreen Editorial Curtain, Split Typography, or Zero-Specimen Typographic Stage. |
| **20** | **Anti-Formula Component Diversity** | Audit core interactive section against `library/10-interactive-animations/`. | Zero copy-pasting of the "3-KPI + 2D canvas curve + range slider" formula. The interactive mechanic must be authentically extracted from library blueprints: 3D coverflow monolith, faceted spring drawer, kinetic glyph scrubber, optical caustic refraction, micro-spring tabs, or acoustic decibel meter. |
| **21** | **Strict Zero-Logo Navigation Purity** | Audit top navigation bar and header elements. | Zero graphic logos, SVG logo emblems, shield icons, or app icon boxes next to the brand title. Brand identity is led exclusively by pure, naked typographic wordmarks or raw coordinates. |
| **22** | **Zero Rudimentary Toy 3D Meshes** | Audit Three.js scenes and geometries. | Zero naive 10-line primitive shapes (cylinders with confetti cubes, basic unshaded wireframe boxes). 3D must feature authentic PBR transmission, dispersion, and softbox lighting from `library/05-3d-webgl/`, or enforce the Zero-WebGL Mandate with tactile noise and macro photography. |
| **23** | **Anti-Gold Defaulting & Color Authenticity** | Inspect accent color against sector. | Gold or champagne (`#C5A059`, `#D4AF37`) is STRICTLY FORBIDDEN unless project is explicitly Haute Horlogerie or High Jewelry. Verify color authentically matches sector (Cobalt for FinTech, Basalt/Cyan for SaaS, Sage for Biotech, Concrete for Architecture). Evaluate light mode suitability. |
| **24** | **Zero Broken Image Paths (Generative Fallbacks)** | Inspect `<img src="...">` and background image paths. | Zero fictitious local paths like `/assets/...` or missing files. If no real assets are supplied, generative code fallbacks (procedural WebGL, inline SVG vector line art, or mathematical canvas) are deployed. |
| **25** | **Universal Mobile Responsive Fallback** | Audit layout at viewport `< 768px`. | Desktop 3D Coverflow or horizontal tracks smoothly degrade into vertical stacks or native touch-snap rails (`snap-x snap-mandatory`). Main containers enforce `overflow-x-clip`/`overflow-x-hidden`. Zero horizontal layout leaks; minimum 44px touch targets. |

---

## Density Gate (Variation Engine Axis J)

Run after the 25 checks. Density never relaxes a check above; it only decides whether the page carries enough.

| Check | Pass criteria |
| :--- | :--- |
| **Level declared** | The Design Signature names J0–J3, the category it came from and any one-level adjustment taken from the user's words. |
| **Section count** | Within the level's range (J0 4–5 · J1 6–7 · J2 8–10 · J3 9–12), each section a different shape from Axis I. |
| **Signature moments** | Exactly the level's count (J0 1 · J1 2 · J2 3 · J3 4), each from a different mechanic family, never two in one viewport, each traceable to the subject's world. |
| **Visual coverage** | J1: a visual at least every 2 sections · J2: a visual in most sections plus one full-bleed band · J3: media in almost every section. Visuals are user assets, verified text-free photos marked `REPLACE`, or subject SVG/WebGL. |
| **Motion layer** | J2–J3: every section has a scroll-linked or interactive behaviour; every pinned scene has a reduced-motion static state and drops pinning on mobile. |
| **No filler** | Zero particle fields, gradient blobs, empty glass cards, partner marquees without real partners, invented counters or testimonials, generic icon-card grids, auto-playing carousels, cursor trails. Every effect passes the swap test. |
| **Underfill scan** | At J2–J3, no section on mobile is only a heading and one sentence without a visual or interaction. |

---

## Library Gate (Variation Engine §4.1)

| Check | Pass criteria |
| :--- | :--- |
| **Index searched** | `library/INDEX.md` was searched for every signature moment, the hero, nav, footer and every visual/interactive section, and the full blueprint was opened for each one used. |
| **Coverage** | Every signature moment comes from a blueprint unless none fits; at J1–J3 at least half of the visual/interactive components do too. Each from-scratch slot has a one-line reason in the Design Signature. |
| **Fidelity** | The used blueprint's structure, mechanics, choreography and visual technique are recognisable in the build, not reduced to a simple CSS approximation. |
| **Re-skinned** | Zero blueprint colours, fonts, brand names or demo copy remain; colours come from Axis C tokens, fonts from Axis B, copy from §5. Banned elements were translated through the §8 table. |
| **Rotation** | No blueprint reused in the same role as an earlier site in the conversation. |
