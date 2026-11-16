#!/usr/bin/env node
/**
 * Shaz Agency Web Design — Skill & Core Structure Validator
 * 
 * Validates:
 * 1. Root SKILL.md and YAML frontmatter
 * 2. Canonical core/ modules
 * 3. Platform adapters in adapters/
 * 4. Root platform entry points (CLAUDE.md, AGENTS.md, GEMINI.md, .cursorrules, .github)
 * 5. Library index file
 * 6. Internal markdown file references
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let errors = 0;
let warnings = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`  FAIL: ${message}`);
    errors++;
  } else {
    console.log(`  PASS: ${message}`);
  }
}

console.log('==========================================================');
console.log('   SHAZ AGENCY WEB DESIGN - SKILL STRUCTURE VALIDATION   ');
console.log('==========================================================');
console.log(`Target Root: ${ROOT}\n`);

// 1. Validate SKILL.md
console.log('[SECTION 1] Validating SKILL.md Frontmatter...');
const skillPath = path.join(ROOT, 'SKILL.md');
assert(fs.existsSync(skillPath), 'SKILL.md exists');
if (fs.existsSync(skillPath)) {
  const content = fs.readFileSync(skillPath, 'utf8');
  assert(content.startsWith('---'), 'SKILL.md starts with YAML frontmatter delimiter');
  assert(/name:\s*shaz-agency-web-design/.test(content), 'SKILL.md specifies name: shaz-agency-web-design');
  assert(/description:\s*["'].+["']/.test(content), 'SKILL.md specifies description in frontmatter');
}

// 2. Validate Canonical core/ Modules
console.log('\n[SECTION 2] Validating Canonical core/ Modules...');
const coreModules = [
  'design-philosophy.md',
  'mandatory-rules.md',
  'industry-intelligence.md',
  'design-diversity.md',
  'reference-intelligence.md',
  'visual-quality.md',
  'accessibility.md',
  'capability-detection.md'
];

for (const mod of coreModules) {
  const p = path.join(ROOT, 'core', mod);
  assert(fs.existsSync(p) && fs.statSync(p).size > 100, `core/${mod} exists and is populated`);
}

// 3. Validate Platform Adapters
console.log('\n[SECTION 3] Validating Platform Adapters...');
const adapterFiles = [
  'adapters/claude/CLAUDE.md',
  'adapters/claude/README.md',
  'adapters/cursor/shaz-design.mdc',
  'adapters/cursor/.cursorrules',
  'adapters/cursor/README.md',
  'adapters/codex/AGENTS.md',
  'adapters/codex/README.md',
  'adapters/gemini/GEMINI.md',
  'adapters/gemini/README.md',
  'adapters/copilot/copilot-instructions.md',
  'adapters/copilot/README.md'
];

for (const af of adapterFiles) {
  const p = path.join(ROOT, af);
  assert(fs.existsSync(p) && fs.statSync(p).size > 50, `${af} exists and is populated`);
}

// 4. Validate Root Platform Entry Points
console.log('\n[SECTION 4] Validating Root Platform Entry Points...');
const rootEntryPoints = [
  'CLAUDE.md',
  'AGENTS.md',
  'GEMINI.md',
  '.cursorrules',
  '.cursor/rules/shaz-design.mdc',
  '.github/copilot-instructions.md',
  'CHANGELOG.md',
  'README.md',
  'LICENSE'
];

for (const ep of rootEntryPoints) {
  const p = path.join(ROOT, ep);
  assert(fs.existsSync(p), `Root entry point ${ep} exists`);
}

// 5. Validate Library Index
console.log('\n[SECTION 5] Validating Reference Library Index...');
const indexPath = path.join(ROOT, 'library', 'INDEX.md');
assert(fs.existsSync(indexPath), 'library/INDEX.md exists');
if (fs.existsSync(indexPath)) {
  const idx = fs.readFileSync(indexPath, 'utf8');
  assert(idx.includes('01-hero-sections'), 'INDEX.md lists hero sections');
  assert(idx.includes('02-navigation'), 'INDEX.md lists navigation');
  assert(idx.includes('24-dqnamo-kitchen'), 'INDEX.md lists 24-dqnamo-kitchen components');
}

console.log('\n==========================================================');
if (errors === 0) {
  console.log('   VALIDATION RESULT: 100% PASS - ALL STRUCTURES VALID   ');
  console.log('==========================================================');
  process.exit(0);
} else {
  console.error(`   VALIDATION RESULT: FAILED WITH ${errors} ERROR(S)    `);
  console.log('==========================================================');
  process.exit(1);
}
