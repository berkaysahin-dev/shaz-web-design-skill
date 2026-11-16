#!/usr/bin/env node
// Shaz Agency Web Design — Universal Multi-Platform Installer.
//
// Installs the skill into supported AI agent and IDE environments:
//   - Claude Code (~/.claude)
//   - OpenAI Codex / Shared Agent Skills (~/.agents/skills)
//   - Gemini CLI / Antigravity (~/.gemini/config/skills)
//   - Cursor / Windsurf (.cursor/rules & .cursorrules)
//   - GitHub Copilot (.github/copilot-instructions.md)
//
// usage:
//   node install.js                    Claude Code (~/.claude)
//   node install.js --target agents    OpenAI Codex / shared agent skills (~/.agents/skills)
//   node install.js --target gemini    Antigravity / Gemini CLI (~/.gemini/config/skills)
//   node install.js --target cursor    Cursor rules (project root or ~/.cursor)
//   node install.js --target copilot   GitHub Copilot instructions (.github)
//   node install.js --target all       Install across all detected platform paths
//   node install.js --dir <folder>     Custom destination folder
//   node install.js --uninstall [--target ...]

const fs = require("fs");
const os = require("os");
const path = require("path");

const SRC = __dirname;
const NAME = "shaz-agency-web-design";
const SHARED = [
  "SKILL.md",
  "README.md",
  "CHANGELOG.md",
  "LICENSE",
  "CLAUDE.md",
  "AGENTS.md",
  "GEMINI.md",
  "core",
  "adapters",
  "rules",
  "checklists",
  "library",
  "commands",
  "scripts"
];

const args = process.argv.slice(2);
const opt = (k) => {
  const i = args.indexOf(k);
  return i >= 0 ? args[i + 1] : undefined;
};
const uninstall = args.includes("--uninstall");
const home = os.homedir();

const TARGETS = {
  claude: { skills: path.join(home, ".claude", "skills"), commands: path.join(home, ".claude", "commands") },
  agents: { skills: path.join(home, ".agents", "skills") },
  codex: { skills: path.join(home, ".agents", "skills") },
  gemini: { skills: path.join(home, ".gemini", "config", "skills") },
  cursor: {
    rulesDir: path.join(process.cwd(), ".cursor", "rules"),
    cursorrules: path.join(process.cwd(), ".cursorrules")
  },
  copilot: {
    instructionsDir: path.join(process.cwd(), ".github")
  }
};

let targets;
if (opt("--dir")) {
  targets = [{ skills: path.resolve(opt("--dir")) }];
} else {
  const t = opt("--target") || "claude";
  if (t === "all") {
    targets = [TARGETS.claude, TARGETS.agents, TARGETS.gemini, TARGETS.cursor, TARGETS.copilot];
  } else if (TARGETS[t]) {
    targets = [TARGETS[t]];
  } else {
    console.error(`unknown target "${t}" (use claude, agents, codex, gemini, cursor, copilot, all or --dir <folder>)`);
    process.exit(1);
  }
}

function copyDir(from, to) {
  fs.rmSync(to, { recursive: true, force: true });
  fs.cpSync(from, to, { recursive: true });
}

function rewrite(text, master) {
  const base = master.split(path.sep).join("/");
  return text.replace(/(^|[\s`'"(\[])(core|rules|library|checklists|commands|adapters)\//g, (_, pre, dir) => `${pre}${base}/${dir}/`);
}

function writeSkill(dir, text) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "SKILL.md"), text);
}

const subSkills = fs.existsSync(path.join(SRC, ".agents", "skills"))
  ? fs.readdirSync(path.join(SRC, ".agents", "skills")).filter((n) => n !== "shaz")
  : [];
const engines = fs.existsSync(path.join(SRC, "commands"))
  ? fs
      .readdirSync(path.join(SRC, "commands"))
      .filter((f) => f.endsWith(".md") && f !== "shaz.md")
      .map((f) => f.slice(0, -3))
      .filter((n) => !subSkills.includes(n))
  : [];
const slash = fs.existsSync(path.join(SRC, ".claude", "commands"))
  ? fs.readdirSync(path.join(SRC, ".claude", "commands")).filter((f) => f.endsWith(".md"))
  : [];

for (const t of targets) {
  // Cursor-specific installation
  if (t.rulesDir) {
    if (uninstall) {
      if (fs.existsSync(t.rulesDir)) fs.rmSync(path.join(t.rulesDir, "shaz-design.mdc"), { force: true });
      if (fs.existsSync(t.cursorrules)) fs.rmSync(t.cursorrules, { force: true });
      console.log(`removed cursor rules from project`);
    } else {
      fs.mkdirSync(t.rulesDir, { recursive: true });
      fs.copyFileSync(path.join(SRC, "adapters", "cursor", "shaz-design.mdc"), path.join(t.rulesDir, "shaz-design.mdc"));
      fs.copyFileSync(path.join(SRC, "adapters", "cursor", ".cursorrules"), t.cursorrules);
      console.log(`installed Cursor MDC rules into ${t.rulesDir} and ${t.cursorrules}`);
    }
    continue;
  }

  // Copilot-specific installation
  if (t.instructionsDir) {
    const targetFile = path.join(t.instructionsDir, "copilot-instructions.md");
    if (uninstall) {
      if (fs.existsSync(targetFile)) fs.rmSync(targetFile, { force: true });
      console.log(`removed copilot instructions from project`);
    } else {
      fs.mkdirSync(t.instructionsDir, { recursive: true });
      fs.copyFileSync(path.join(SRC, "adapters", "copilot", "copilot-instructions.md"), targetFile);
      console.log(`installed GitHub Copilot instructions into ${targetFile}`);
    }
    continue;
  }

  // Skill-based installations (Claude, Agents/Codex, Gemini)
  if (t.skills) {
    const master = path.join(t.skills, NAME);
    const names = ["shaz", ...subSkills, ...engines];

    if (uninstall) {
      fs.rmSync(master, { recursive: true, force: true });
      for (const n of names) fs.rmSync(path.join(t.skills, n), { recursive: true, force: true });
      if (t.commands) for (const f of slash) fs.rmSync(path.join(t.commands, f), { force: true });
      console.log(`removed from ${t.skills}`);
      continue;
    }

    // 1. master skill with canonical core & all resources
    fs.mkdirSync(master, { recursive: true });
    for (const item of SHARED) {
      const from = path.join(SRC, item);
      if (!fs.existsSync(from)) continue;
      if (fs.statSync(from).isDirectory()) copyDir(from, path.join(master, item));
      else fs.copyFileSync(from, path.join(master, item));
    }

    // 2. /shaz alias, core sub-skills and engines
    if (fs.existsSync(path.join(SRC, "commands", "shaz.md"))) {
      writeSkill(path.join(t.skills, "shaz"), rewrite(fs.readFileSync(path.join(SRC, "commands", "shaz.md"), "utf8"), master));
    }
    for (const n of subSkills) {
      const sp = path.join(SRC, ".agents", "skills", n, "SKILL.md");
      if (fs.existsSync(sp)) {
        writeSkill(path.join(t.skills, n), rewrite(fs.readFileSync(sp, "utf8"), master));
      }
    }
    for (const n of engines) {
      const ep = path.join(SRC, "commands", `${n}.md`);
      if (fs.existsSync(ep)) {
        writeSkill(path.join(t.skills, n), rewrite(fs.readFileSync(ep, "utf8"), master));
      }
    }

    // 3. Claude Code slash commands
    if (t.commands) {
      fs.mkdirSync(t.commands, { recursive: true });
      for (const f of slash) {
        fs.writeFileSync(path.join(t.commands, f), rewrite(fs.readFileSync(path.join(SRC, ".claude", "commands", f), "utf8"), master));
      }
    }

    console.log(`installed ${NAME} + ${names.length} skills into ${t.skills}${t.commands ? ` and ${slash.length} commands into ${t.commands}` : ""}`);
  }
}

if (!uninstall) {
  console.log("\nInstallation complete. Shaz Agency Web Design is active across chosen environments.");
}
