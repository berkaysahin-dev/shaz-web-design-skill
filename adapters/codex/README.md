# OpenAI Codex & Agent Skills Integration Guide

## Overview
This adapter integrates the Shaz Agency Web Design Skill with **OpenAI Codex**, OpenAI Operator / Agent environments, and any runtime supporting the Agent Skills standard (`.agents/skills/`).

## Installation Options

### Option A: Root `AGENTS.md` (Project Level)
Copy `adapters/codex/AGENTS.md` to the root of your project:
```bash
cp adapters/codex/AGENTS.md ./AGENTS.md
```

### Option B: Shared Agent Skills (`~/.agents/skills`)
Run the installer to copy the skill to the standard agent skills path:
```bash
node install.js --target agents
```
This installs the master skill and sub-engines in `~/.agents/skills/shaz-agency-web-design`.

## Verification
Codex or agent runners reading `AGENTS.md` or `.agents/skills` will automatically discover and enforce the design rules and blueprint library.
