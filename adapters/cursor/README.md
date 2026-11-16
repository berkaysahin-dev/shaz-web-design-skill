# Cursor & Windsurf Integration Guide

## Overview
This adapter integrates the Shaz Agency Web Design Skill with **Cursor** and **Windsurf** AI editors using native MDC rules and `.cursorrules`.

## Installation Options

### Option A: Native MDC Rule (Recommended for Cursor)
Copy `adapters/cursor/shaz-design.mdc` to `.cursor/rules/`:
```bash
mkdir -p .cursor/rules
cp adapters/cursor/shaz-design.mdc .cursor/rules/shaz-design.mdc
```

### Option B: Root `.cursorrules` (Legacy / Portable)
Copy `adapters/cursor/.cursorrules` to the root of your project:
```bash
cp adapters/cursor/.cursorrules ./.cursorrules
```

## Verification
Open any `.tsx` or frontend file in Cursor. The rule will automatically apply in the chat and composer contexts.
