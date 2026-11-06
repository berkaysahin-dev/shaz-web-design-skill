Generate a production-grade WebGL or Three.js shader stage from the 141 Shaz Agency 3D blueprints.
Enforce:
- 60 FPS performance budget (<= 16.6ms frame time) with DPR clamping (`Math.min(window.devicePixelRatio, 2)`).
- Clean, text-free atmospheric canvas (zero burned-in text inside shaders).
- Graceful CSS radial gradient and backdrop-blur fallback.
- Explicit lifecycle memory cleanup on unmount (`useEffect` return cleanup).

## Output Protocol (compact):
Run the Variation Engine first (`rules/variation-engine.md`). Print only the Design Signature (`SKILL.md` §5), then complete, executable, copy-pasteable code with zero placeholders. No essays, no list of laws.
