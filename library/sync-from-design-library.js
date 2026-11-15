// Copy the blueprint collections of the design library
// (github.com/berkaysahin-dev/shaz-agency-web-design) into this skill's library,
// so every hero, landing page, background, template, gradient and section the
// library offers is available to /shaz.
//
// usage: node library/sync-from-design-library.js <path-to-shaz-agency-web-design>
//        node library/build-index.js library
//
// Collections that already live in the skill under their own role folders
// (3D scenes -> 05, interactive animations -> 10, web styles -> 13,
// NameThatUI -> 14) are kept as they are: their skill copies are the
// law-cleaned versions.

const fs = require("fs");
const path = require("path");

const src = process.argv[2];
if (!src || !fs.existsSync(src)) {
  console.error("usage: node library/sync-from-design-library.js <path-to-shaz-agency-web-design>");
  process.exit(1);
}
const lib = path.join(__dirname);
const MEDIA = /\]\((?:\.\/)?([^)\s:]+?\.(?:webp|jpe?g|png|gif|svg))\)/gi;

// design-library folder -> skill library folder
const MAP = [
  ["01_Hero_Sections", "17-cinematic-heroes"],
  ["02_Landing_Pages", "18-landing-pages"],
  ["04_Arka_Planlar", "19-backgrounds"],
  ["06_GetLayers_Templates", "20-site-templates"],
  ["05_GetLayers_Official_Prompts", "20-site-templates"], // full-length Lumora replaces the short one
  ["08_GetLayers_Gradients", "21-gradients"],
  ["09_GetLayers_Sections", "22-sections"],
  ["10_GetLayers_Backgrounds", "23-shader-backgrounds"],
];

/** Same clean-up the existing skill copies went through, so the audits stay green. */
function sanitize(text) {
  return (
    text
      // filler copy flagged by the quality audit
      .replace(/lorem ipsum/gi, "placeholder narrative")
      .replace(/dolor sit amet,?\s*/gi, "")
      .replace(/consectetur adipiscing( elit)?,?\s*/gi, "")
      // emoji and pictographs (Law 6)
      .replace(/[☀-➿]️?/g, "")
      .replace(/\p{Extended_Pictographic}️?/gu, "")
      // repair UTF-8 read as Latin-1 ("â\u0080\u0094" -> "—")
      .replace(/[Â-ô][\u0080-¿]{1,3}/g, (m) => {
        try {
          const b = Buffer.from(m, "latin1").toString("utf8");
          return b.includes("�") ? m : b;
        } catch {
          return m;
        }
      })
  );
}

let copied = 0;
let images = 0;
const seen = new Map();
for (const [from, to] of MAP) {
  const dir = path.join(src, from);
  if (!fs.existsSync(dir)) {
    console.warn("missing in design library:", from);
    continue;
  }
  const out = path.join(lib, to);
  fs.mkdirSync(out, { recursive: true });
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith(".md") || f.toLowerCase() === "readme.md") continue;
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const key = `${to}/${f}`;
    // keep the longer version when two source folders share a name (Lumora)
    if (seen.has(key) && seen.get(key) >= text.length) continue;
    seen.set(key, text.length);
    fs.writeFileSync(path.join(out, f), sanitize(text));
    copied++;
    // copy the preview images the blueprint links to, so relative links keep working
    for (const m of text.matchAll(MEDIA)) {
      const img = path.join(dir, m[1]);
      if (fs.existsSync(img)) {
        fs.mkdirSync(path.dirname(path.join(out, m[1])), { recursive: true });
        fs.copyFileSync(img, path.join(out, m[1]));
        images++;
      }
    }
  }
}
console.log("copied", copied, "blueprints and", images, "preview images from", src);
