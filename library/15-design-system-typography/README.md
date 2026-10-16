# Shaz Agency Web Design — Official Design System & Typography Hierarchy

This document codifies the master design tokens, font hierarchy, Google Fonts embeddings, and CSS `:root` variables established by Shaz Agency Web Design.

---

## 1. Typography Hierarchy & Font Roles

The typographic architecture balances aggressive display authority with microscopic technical clarity:

### 1.1 Primary Display & Hero Headings
* **Primary Font:** **Druk Wide** (`weight: 700`, `letter-spacing: -0.04em` to `-0.02em`)
  * **Role:** Monumental display headlines, hero titles, full-width section headers.
  * **CSS Fallback:** `'Druk Wide', -apple-system, BlinkMacSystemFont, 'Impact', sans-serif`
* **Creative / Alternative Display:** **Tilt Warp** (`weight: 400`)
  * **Role:** Experimental, kinetic, Y2K retro-futurism, creative studio headers.
  * **CSS Fallback:** `'Tilt Warp', cursive, sans-serif`

### 1.2 Subheadings & Editorial Lead
* **Primary Subheading:** **Neue Haas Grotesk** (`weight: 330` / Light, `letter-spacing: -0.01em`)
  * **Role:** Thin, architectural section leads, editorial summaries, hero supporting text.
  * **CSS Fallback:** `'Neue Haas Grotesk', 'Inter', -apple-system, sans-serif`

### 1.3 Body Typography
* **Primary Body:** **Spline Sans** (`weight: 400` / `500`, `line-height: 1.6`)
  * **Role:** Factual narratives, technical dossiers, multi-paragraph architectural descriptions.
  * **Alternative Modern Body:** **Plus Jakarta Sans** (`weight: 400` / `500`)
  * **CSS Fallback:** `'Spline Sans', 'Plus Jakarta Sans', sans-serif`

### 1.4 Code, Telemetry & Technical Metadata
* **Monospace Standard:** **JetBrains Mono** (`weight: 400` / `500` / `600`, `letter-spacing: 0.05em`)
  * **Role:** Architectural specs, data matrices, timestamp keepers, terminal outputs.
  * **CSS Fallback:** `'JetBrains Mono', 'SF Mono', Consolas, monospace`

### 1.5 Secondary UI & Controls
* **UI Controls Font:** **Outfit** (`weight: 400` / `500` / `600`)
  * **Role:** Button labels, tab bars, segmented controls, modal action triggers.
  * **CSS Fallback:** `'Outfit', sans-serif`

---

## 2. Google Fonts Production Embed

Include the following preconnect and stylesheet link in your document `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Spline+Sans:wght@400;500;600;700&family=Tilt+Warp&display=swap" rel="stylesheet">
```

---

## 3. CSS `:root` Custom Properties

```css
:root {
  /* Surface & Base Contrast Tokens */
  --color-obsidian: #000000;
  --color-core: #0A0A0D;
  --color-tray: #14151B;
  --color-hairline: rgba(255, 255, 255, 0.08);
  --color-hairline-focus: rgba(255, 255, 255, 0.20);

  /* Calibrated Accent Palette */
  --color-light-lilac: #E0D1F0;
  --color-light-purple: #D1D9F0;
  --color-light-green: #D1F0E9;
  --color-light-blue: #99FCFF;
  --color-light-yellow: #EDF8A0;
  --color-warm-gray: #D6C2C4;
  --color-cool-gray: #BBD1DD;
  --color-phosphor-green: #91FE01;
  --color-soft-orange: #FF9481;
  --color-champagne-gold: #C5A880;

  /* Typographic Token Assignments */
  --font-display: 'Druk Wide', 'Impact', sans-serif;
  --font-display-alt: 'Tilt Warp', cursive, sans-serif;
  --font-subheading: 'Neue Haas Grotesk', 'Inter', sans-serif;
  --font-body: 'Spline Sans', sans-serif;
  --font-body-alt: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-ui: 'Outfit', sans-serif;

  /* Double-Bezel Geometry Tokens */
  --bezel-tray-radius: 16px;
  --bezel-tray-padding: 7px;
  --bezel-core-radius: 11px;
}
```

---

## 4. Tailwind CSS Configuration Snippet

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['"Druk Wide"', 'Impact', 'sans-serif'],
        'display-alt': ['"Tilt Warp"', 'cursive', 'sans-serif'],
        subheading: ['"Neue Haas Grotesk"', 'Inter', 'sans-serif'],
        body: ['"Spline Sans"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        ui: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        obsidian: '#000000',
        core: '#0A0A0D',
        tray: '#14151B',
        lilac: '#E0D1F0',
        mint: '#D1F0E9',
        cyan: '#99FCFF',
        phosphor: '#91FE01',
        champagne: '#C5A880',
      }
    }
  }
}
```
