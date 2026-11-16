# GitHub Copilot Integration Guide

## Overview
This adapter integrates the Shaz Agency Web Design Skill with **GitHub Copilot** and Copilot Chat.

## Installation Options

### Project-Level Installation
Copy `adapters/copilot/copilot-instructions.md` to `.github/copilot-instructions.md`:
```bash
mkdir -p .github
cp adapters/copilot/copilot-instructions.md .github/copilot-instructions.md
```

## Verification
In VS Code or GitHub with Copilot Chat active, generate a frontend component. Copilot will automatically read `.github/copilot-instructions.md` and enforce the design rules.
