# Shaz Design System — Toolchain & Environment Matrix

Modern frontend development happens across diverse IDEs, CLI tools, and automation environments. Some environments feature full headless browsers and terminal execution; others operate as editor extensions or code generators.

The system dynamically adapts to the developer's active toolchain and enforces honest verification reporting.

---

## 1. Toolchain Detection Matrix

Before commencing a project, identify active capabilities in the environment:

| Capability | Detection Indicator | When Available | Fallback When Unavailable |
| :--- | :--- | :--- | :--- |
| **File I/O** | `write_file`, `edit_file`, fs write tools | Directly creates/modifies project files. | Output complete, unabridged, copy-pasteable code blocks with clear relative file paths. |
| **Terminal / CLI** | `run_command`, bash/powershell tools | Executes installs, local test dev servers, build commands, and quality audit scripts. | Output exact shell commands for the user to execute manually. Never claim commands were executed. |
| **Browser Inspection** | `browser` tool, puppeteer, play-right | Navigates to live preview, validates visual layout, checks responsive viewport. | Perform AST and regex code-level audits. Explicitly report: *"Visual browser verification was skipped due to environment limitations."* |
| **Screenshot / Vision** | Image upload / view image tools | Inspects rendered DOM screenshots for optical contrast, typography overlap, and clipping. | Inspect CSS classes, line-heights, container bounds, and z-index layers directly in code. |
| **Web Research** | `search_web`, curl, browser fetch | Conducts live competitor and font discovery. | Rely entirely on the internal 1008-blueprint design library (`library/INDEX.md`). |
| **Package Management** | npm, pnpm, yarn via terminal | Installs required dependencies (`lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`). | Document exact `package.json` dependencies and installation commands. |

---

## 2. Truth-in-Reporting Mandate

1. **Zero Fabricated Tests:**
   - If an automated test was not executed in a live shell, never claim: *"All tests passed."* Instead write: *"Code structured for automated testing; run `powershell tests/run-quality-audit.ps1` to verify."*

2. **Zero Hallucinated Visual Verification:**
   - If no browser tool was invoked, do not write: *"I visually confirmed the layout rendered without artifacts."* State: *"Verified via structural code analysis."*

3. **Rule Integrity Warning:**
   - If an agent or host environment lacks the context window to load modular design rules, the agent must output a prominent notice:
     `> [!WARNING] Running in constrained context mode. Core mandatory rules enforced; blueprint references condensed.`
