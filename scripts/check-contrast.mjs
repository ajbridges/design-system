// WCAG contrast for the Jazzfolio palette in tokens/tokens.json.
// The default theme is unchanged. This fails the build if Jazzfolio text,
// button, or focus pairs drop below AA.
import { readFileSync } from "node:fs"
import { wcagContrast } from "culori"

const tokens = JSON.parse(readFileSync(new URL("../tokens/tokens.json", import.meta.url), "utf8"))
const { radius, ...colors } = tokens.jazzfolio.colors

function resolve(name, seen = new Set()) {
  const value = colors[name]
  if (!value) throw new Error(`missing jazzfolio color: ${name}`)
  const ref = value.match(/^var\(--([a-z0-9-]+)\)$/)
  if (!ref) return value
  if (seen.has(name)) throw new Error(`circular token: ${name}`)
  seen.add(name)
  return resolve(ref[1], seen)
}

function ratio(fg, bg) {
  const value = wcagContrast(resolve(fg), resolve(bg))
  if (!Number.isFinite(value)) throw new Error(`could not contrast ${fg} on ${bg}`)
  return value
}

const checks = [
  ["foreground", "background", 4.5],
  ["foreground", "card", 4.5],
  ["foreground", "popover", 4.5],
  ["foreground", "muted", 4.5],
  ["foreground", "secondary", 4.5],
  ["muted-foreground", "background", 4.5],
  ["muted-foreground", "card", 4.5],
  ["muted-foreground", "muted", 4.5],
  ["muted-foreground", "secondary", 4.5],
  ["card-foreground", "card", 4.5],
  ["popover-foreground", "popover", 4.5],
  ["secondary-foreground", "secondary", 4.5],
  ["primary", "background", 4.5],
  ["primary", "card", 4.5],
  ["primary-foreground", "primary", 4.5],
  ["primary-foreground", "primary-hover", 4.5],
  ["primary-foreground", "primary-active", 4.5],
  ["success", "card", 4.5],
  ["warning", "card", 4.5],
  ["destructive", "card", 4.5],
  ["info", "card", 4.5],
  ["success-foreground", "success", 4.5],
  ["warning-foreground", "warning", 4.5],
  ["destructive-foreground", "destructive", 4.5],
  ["info-foreground", "info", 4.5],
  ["ring", "background", 3],
]

let failed = 0
for (const [fg, bg, min] of checks) {
  const value = ratio(fg, bg)
  const ok = value >= min - 0.005
  const line = `${ok ? "✔" : "✖"} ${fg} on ${bg}: ${value.toFixed(2)}:1 (AA ${min}:1)`
  if (ok) console.log(line)
  else {
    console.error(line)
    failed += 1
  }
}

if (radius !== "1rem") {
  console.error("✖ jazzfolio radius should stay 1rem")
  failed += 1
}

if (failed) {
  console.error(`\n${failed} contrast check(s) failed`)
  process.exit(1)
}

console.log(`✔ jazzfolio contrast passed (${checks.length} pairs)`)
