#!/usr/bin/env node
// Fails when UI code bypasses the design system's tokens.
// Usage:  node scripts/check-design-system.mjs [dir ...]   (default: app src components)
// Skip a line on purpose by adding:  ds-ignore
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname, relative } from "node:path";

const PALETTE =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black";
const PREFIX =
  "bg|text|border(?:-[xytrbl])?|ring|ring-offset|outline|fill|stroke|from|via|to|divide|placeholder|accent|caret|decoration|shadow";

const RULES = [
  {
    name: "Tailwind palette color",
    re: new RegExp(`(?<![\\w-])(?:[\\w-]+:)*(?:${PREFIX})-(?:${PALETTE})(?:-\\d{2,3})?(?:\\/\\d+)?(?![\\w-])`, "g"),
    fix: "use a token class (bg-primary, text-muted-foreground, border-border, text-success…)",
  },
  {
    name: "Arbitrary color value",
    re: /(?:bg|text|border|ring|fill|stroke|from|via|to|outline|shadow)-\[(?:#|rgb|hsl|oklch|color)[^\]]*\]/g,
    fix: "add the color to tokens/tokens.json in the design-system repo",
  },
  {
    name: "Hardcoded color",
    re: /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b|\b(?:rgba?|hsla?|oklch)\(\s*\d/g,
    fix: "use var(--token) or a token class",
  },
];

const EXTS = new Set([".tsx", ".ts", ".jsx", ".js", ".mdx"]);
const SKIP = new Set(["node_modules", ".next", "dist", "build", "out", ".git", ".turbo"]);

const roots = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["app", "src", "components", "pages"].filter((d) => existsSync(d));

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (EXTS.has(extname(p))) yield p;
  }
}

const seen = new Set();
const problems = [];
for (const root of roots) {
  for (const file of walk(root)) {
    if (seen.has(file)) continue;
    seen.add(file);
    readFileSync(file, "utf8").split("\n").forEach((line, i) => {
      if (line.includes("ds-ignore")) return;
      const trimmed = line.trim();
      if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("import ")) return;
      const spans = []; // report each spot once, even if two rules match it
      for (const rule of RULES) {
        for (const m of line.matchAll(rule.re)) {
          const [s, e] = [m.index, m.index + m[0].length];
          if (spans.some(([a, b]) => s < b && e > a)) continue;
          spans.push([s, e]);
          problems.push({ file: relative(process.cwd(), file), line: i + 1, match: m[0], rule });
        }
      }
    });
  }
}

if (!roots.length) {
  console.log("check-design-system: no app/src/components/pages folder found. Pass folders as arguments.");
  process.exit(0);
}

if (!problems.length) {
  console.log(`✔ design system check passed (${seen.size} files)`);
  process.exit(0);
}

console.error(`✖ ${problems.length} design-system violation(s):\n`);
for (const p of problems) {
  console.error(`  ${p.file}:${p.line}  ${p.match}\n    ${p.rule.name} → ${p.rule.fix}`);
}
console.error("\nSee AGENTS.md. Add `ds-ignore` to a line only for a deliberate exception.");
process.exit(1);
