Generate a production-grade WebGL or Three.js shader stage from the 141 Shaz Agency 3D blueprints.
Enforce:
- 60 FPS performance budget (<= 16.6ms frame time) with DPR clamping (`Math.min(window.devicePixelRatio, 2)`).
- Clean, text-free atmospheric canvas (zero burned-in text inside shaders).
- Graceful CSS radial gradient and backdrop-blur fallback.
- Explicit lifecycle memory cleanup on unmount (`useEffect` return cleanup).

## Explanatory Output Protocol:
1. Shader & Math Breakdown: Detail vertex/fragment shaders and material physics.
2. GPU Performance Budget: Explain buffer geometries and draw call optimization.
3. Production Three.js / React Three Fiber Code: Complete, self-contained component.
