# Shaz Agency Web Design — Multi-Platform & Mobile Architecture Standards

This document establishes the architectural translation layer bridging web implementations (Next.js / Tailwind CSS) to native mobile environments (React Native, SwiftUI, Flutter, Jetpack Compose) without degrading the Shaz Agency visual standard.

---

## 1. Platform Primitive Mapping Matrix

The signature **Hardware Double-Bezel** and typographic hierarchy map directly to native platforms:

| Architectural Concept | Web (Next.js + Tailwind) | React Native (Tailwind / StyleSheet) | SwiftUI (iOS / macOS) | Flutter (Dart) | Jetpack Compose (Android) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Bezel Tray (Outer)** | `.bezel-tray` (`rounded-[16px] p-[7px]`) | `View` (`borderRadius: 16, padding: 7`) | `RoundedRectangle(cornerRadius: 16)` | `Container(decoration: BoxDecoration(borderRadius: 16))` | `Surface(shape: RoundedCornerShape(16.dp))` |
| **Bezel Core (Inner)** | `.bezel-core` (`rounded-[11px] p-6`) | `View` (`borderRadius: 11, padding: 24`) | `RoundedRectangle(cornerRadius: 11)` | `Container(decoration: BoxDecoration(borderRadius: 11))` | `Card(shape: RoundedCornerShape(11.dp))` |
| **Kinetic Spring** | `stiffness: 280, damping: 24` | `Animated.spring` / Reanimated `withSpring` | `.spring(response: 0.35, dampingFraction: 0.82)` | `SpringSimulation(SpringDescription(mass: 0.8, stiffness: 280, damping: 24))` | `spring(dampingRatio: 0.82f, stiffness: 280f)` |
| **Iconography** | Lucide React / SVG | `lucide-react-native` / Vector Icons | `Image(systemName:)` / SF Symbols (Monochrome) | `SvgPicture.asset` / `Icons` | `Icon` (VectorPainter, Tinted) |

---

## 2. Mobile Safe Area & Hardware Geometry

When translating layouts to mobile platforms, the following hardware constraints are mandatory:

### 2.1 Edge-to-Edge & Safe Insets
- **Top Insets (Notch & Dynamic Island):** Never place interactive elements or critical text inside the top system safe zone. On web, utilize `env(safe-area-inset-top)` or Tailwind `pt-[env(safe-area-inset-top)]`. On native, wrap screens in `SafeAreaView` (React Native) or `.ignoresSafeArea(edges: .bottom)` paired with manual content insets.
- **Bottom Insets (Home Indicator Bar):** Provide a minimum of **24px to 34px** padding above the home indicator bar. Floating action bars and navigation drawers must account for `env(safe-area-inset-bottom)`.

### 2.2 Fluid Viewport Scaling
- **Web Scaling:** Spacing and display type must scale using CSS `clamp()` (e.g., `clamp(2rem, 5vw + 1rem, 4.5rem)`) to prevent line-wrapping errors across narrow (360px) and wide (430px) mobile screens.
- **Native Typography:** Avoid hardcoded fixed pixel widths on text containers. Allow text to wrap cleanly with `numberOfLines` or `TextOverflow.ellipsis` on metadata streams.

### 2.3 Tactile Haptics & Gestures
- **Micro-Interaction Feedback:** Interactive card swipes, sheet reveals, and allocation confirmations must trigger subtle native haptics (`Haptics.impactAsync(ImpactFeedbackStyle.Light)` in React Native / `UIImpactFeedbackGenerator(style: .light)` in SwiftUI).
- **Reduced Motion Support:** Always query `@media (prefers-reduced-motion)` on web and platform accessibility APIs on native to replace heavy kinetic rotations with clean opacity cross-fades.
