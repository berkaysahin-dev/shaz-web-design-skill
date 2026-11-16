# Gemini CLI & Antigravity Integration Guide

## Overview
This adapter integrates the Shaz Agency Web Design Skill with **Gemini CLI**, Google AI Studio, and **Antigravity**.

## Installation Options

### Option A: Root `GEMINI.md` (Project Level)
Copy `adapters/gemini/GEMINI.md` to the root of your project:
```bash
cp adapters/gemini/GEMINI.md ./GEMINI.md
```

### Option B: Antigravity Global Skill Installation
Run the installer to copy the skill to Antigravity's config path:
```bash
node install.js --target gemini
```
This installs the master skill in `~/.gemini/config/skills/shaz-agency-web-design`.

## Verification
In Antigravity or Gemini CLI, invoke `/shaz` or ask for a web design task. The agent will read `GEMINI.md` or `SKILL.md` directly.
