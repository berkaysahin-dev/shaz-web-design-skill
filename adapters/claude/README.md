# Claude Code Integration Guide

## Overview
This adapter integrates the Shaz Agency Web Design Skill with **Claude Code CLI**.

## Installation Options

### Option A: Project-Level Installation
Copy or symlink `adapters/claude/CLAUDE.md` to the root of your project:
```bash
cp adapters/claude/CLAUDE.md ./CLAUDE.md
```

### Option B: User-Level Skill Installation
Run the universal installer to copy the skill and slash commands to `~/.claude`:
```bash
node install.js --target claude
```
This installs:
- Master skill in `~/.claude/skills/shaz-agency-web-design`
- Core commands in `~/.claude/commands/` (`/shaz`, `/shaz-audit`, `/shaz-hero`, `/shaz-3d`, `/shaz-style`, `/shaz-dock`, `/shaz-component`)

## Verification
In Claude Code, type `/shaz` or ask for a web design task. Claude will automatically read `CLAUDE.md` or invoke the skill.
