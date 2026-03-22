/**
 * Cross-platform copy of `sequence/` → `public/sequence/` (replaces rm/cp in npm script).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dest = path.join(root, "public", "sequence");
const src = path.join(root, "sequence");

if (!fs.existsSync(src)) {
  console.error(`[sync-sequence] Source missing: ${src}`);
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log(`[sync-sequence] Copied ${src} → ${dest}`);
