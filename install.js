#!/usr/bin/env node
// Shaz Agency Web Design — installer.
//
// Copies the skill into your agent's skills folder so /shaz and every
// sub-engine work on any machine:
//   - the master skill (SKILL.md + rules, checklists, library, commands)
//   - the core sub-skills (/shaz-hero, /shaz-3d, /shaz-style, ...)
//   - the 44 sector, style and component engines (/shaz-luxury, /shaz-saas, ...)
//   - Claude Code slash commands (~/.claude/commands)
// Relative paths such as `rules/variation-engine.md` inside the sub-skills
// are rewritten to the installed master skill, so they resolve wherever the
// sub-skill lives.
//
// usage:
//   node install.js                    Claude Code (~/.claude)
//   node install.js --target agents    shared agent skills (~/.agents/skills)
//   node install.js --target gemini    Antigravity (~/.gemini/config/skills)
//   node install.js --target all
//   node install.js --dir <folder>     any skills folder
//   node install.js --uninstall [--target ...]

const fs = require("fs");
const os = require("os");
const path = require("path");

const SRC = __dirname;
const NAME = "shaz-agency-web-design";
const SHARED = ["SKILL.md", "README.md", "LICENSE", "rules", "checklists", "library", "commands"];

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
  gemini: { skills: path.join(home, ".gemini", "config", "skills") },
};

let targets;
if (opt("--dir")) targets = [{ skills: path.resolve(opt("--dir")) }];
else {
  const t = opt("--target") || "claude";
  if (t === "all") targets = Object.values(TARGETS);
  else if (TARGETS[t]) targets = [TARGETS[t]];
  else {
    console.error(`unknown target "${t}" (use claude, agents, gemini, all or --dir <folder>)`);
    process.exit(1);
  }
}

function copyDir(from, to) {
  fs.rmSync(to, { recursive: true, force: true });
  fs.cpSync(from, to, { recursive: true });
}

/** Point `rules/…`, `library/…`, `checklists/…`, `commands/…` at the installed master skill. */
function rewrite(text, master) {
  const base = master.split(path.sep).join("/");
  return text.replace(/(^|[\s`'"(\[])(rules|library|checklists|commands)\//g, (_, pre, dir) => `${pre}${base}/${dir}/`);
}

function writeSkill(dir, text) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "SKILL.md"), text);
}

const subSkills = fs.readdirSync(path.join(SRC, ".agents", "skills")).filter((n) => n !== "shaz");
const engines = fs
  .readdirSync(path.join(SRC, "commands"))
  .filter((f) => f.endsWith(".md") && f !== "shaz.md")
  .map((f) => f.slice(0, -3))
  .filter((n) => !subSkills.includes(n));
const slash = fs.existsSync(path.join(SRC, ".claude", "commands")) ? fs.readdirSync(path.join(SRC, ".claude", "commands")).filter((f) => f.endsWith(".md")) : [];

for (const t of targets) {
  const master = path.join(t.skills, NAME);
  const names = ["shaz", ...subSkills, ...engines];

  if (uninstall) {
    fs.rmSync(master, { recursive: true, force: true });
    for (const n of names) fs.rmSync(path.join(t.skills, n), { recursive: true, force: true });
    if (t.commands) for (const f of slash) fs.rmSync(path.join(t.commands, f), { force: true });
    console.log(`removed from ${t.skills}`);
    continue;
  }

  // 1. master skill with everything it references
  fs.mkdirSync(master, { recursive: true });
  for (const item of SHARED) {
    const from = path.join(SRC, item);
    if (!fs.existsSync(from)) continue;
    if (fs.statSync(from).isDirectory()) copyDir(from, path.join(master, item));
    else fs.copyFileSync(from, path.join(master, item));
  }

  // 2. /shaz alias, core sub-skills and the 44 engines, each pointing at the master's files
  writeSkill(path.join(t.skills, "shaz"), rewrite(fs.readFileSync(path.join(SRC, "commands", "shaz.md"), "utf8"), master));
  for (const n of subSkills) {
    writeSkill(path.join(t.skills, n), rewrite(fs.readFileSync(path.join(SRC, ".agents", "skills", n, "SKILL.md"), "utf8"), master));
  }
  for (const n of engines) {
    writeSkill(path.join(t.skills, n), rewrite(fs.readFileSync(path.join(SRC, "commands", `${n}.md`), "utf8"), master));
  }

  // 3. slash commands (Claude Code)
  if (t.commands) {
    fs.mkdirSync(t.commands, { recursive: true });
    for (const f of slash) {
      fs.writeFileSync(path.join(t.commands, f), rewrite(fs.readFileSync(path.join(SRC, ".claude", "commands", f), "utf8"), master));
    }
  }

  console.log(`installed ${NAME} + ${names.length} skills into ${t.skills}${t.commands ? ` and ${slash.length} commands into ${t.commands}` : ""}`);
}
if (!uninstall) console.log("Restart your agent, then run /shaz <brief>.");
