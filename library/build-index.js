const fs = require("fs");
const path = require("path");

const lib = process.argv[2];
const clean = (s) =>
  s.replace(/\*\*/g, "").replace(/`/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\s+/g, " ").trim();
const cut = (s, n = 170) => {
  const chars = Array.from(s.replace(/\p{Extended_Pictographic}️?/gu, "").replace(/\s+/g, " ").trim());
  return chars.length > n ? chars.slice(0, n - 1).join("").replace(/\s+\S*$/, "") + "…" : chars.join("");
};

function describe(text) {
  const lines = text.split(/\r?\n/);
  const h1 = (lines.find((l) => /^# /.test(l)) || "").replace(/^# /, "").trim();
  let desc = "";
  const nextText = (idx) => {
    for (let i = idx + 1; i < lines.length; i++) {
      const l = lines[i].trim();
      if (!l || /^#/.test(l) || /^[*>|!-]/.test(l) || /^```/.test(l)) continue;
      return l;
    }
    return "";
  };
  const concept = lines.findIndex((l) => /^#+\s*Concept & Overview/.test(l) || /^CONCEPT:\s*$/.test(l.trim()));
  if (concept >= 0) desc = nextText(concept);
  const start = desc ? -1 : lines.findIndex((l) => /^## 1[.\s]/.test(l));
  if (start >= 0) {
    for (let i = start + 1; i < lines.length; i++) {
      const l = lines[i].trim();
      if (!l || /^#/.test(l) || /^[*>|!-]/.test(l) || /^```/.test(l)) continue;
      desc = l;
      break;
    }
  }
  if (!desc) {
    const b = lines.find((l) => /^- Description:/.test(l.trim()));
    if (b) desc = b.trim().replace(/^- Description:\s*/, "");
  }
  if (!desc) {
    const v = lines.find((l) => /(Vibe|Tone & Mood|Karakteristikler|Also Called)/.test(l));
    if (v) desc = v.replace(/^[*>\s-]+/, "");
  }
  const tag = (re) => {
    const l = lines.find((x) => re.test(x));
    return l ? clean(l.replace(/^.*?:\s*/, "")).split(" · ")[0] : "";
  };
  const mood = tag(/Tone & Mood/) || tag(/\*\*Theme:\*\*/);
  const kind = tag(/\*\*Kategori:\*\*|\*\*Category:\*\*/);
  return { h1: cut(clean(h1), 120), desc: cut(clean(desc)), mood, kind };
}

const out = [
  "# Shaz Library Index",
  "",
  "One line per blueprint, generated from the files themselves. Read this first, shortlist, then open the full blueprint before building (Variation Engine §4.1). Colours, fonts and copy in a blueprint are never used as-is; structure, mechanics, motion and visual craft are.",
  "",
];

const folders = fs.readdirSync(lib).filter((d) => fs.statSync(path.join(lib, d)).isDirectory()).sort();
let total = 0;
for (const folder of folders) {
  const files = [];
  (function walk(dir) {
    for (const f of fs.readdirSync(dir).sort()) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (f.endsWith(".md") && f.toLowerCase() !== "readme.md") files.push(p);
    }
  })(path.join(lib, folder));
  if (!files.length) continue;
  out.push(`## ${folder} (${files.length})`, "");
  for (const p of files) {
    const rel = path.relative(lib, p).split(path.sep).join("/");
    const d = describe(fs.readFileSync(p, "utf8"));
    const meta = [d.kind, d.mood].filter(Boolean).join(" · ");
    out.push(`- \`${rel}\` — **${d.h1 || path.basename(p, ".md")}**${meta ? ` (${meta})` : ""}${d.desc ? `: ${d.desc}` : ""}`);
    total++;
  }
  out.push("");
}
fs.writeFileSync(path.join(lib, "INDEX.md"), out.join("\n"));
console.log("indexed", total);
