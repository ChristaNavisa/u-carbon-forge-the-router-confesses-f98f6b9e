import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry =
  "The villain was about to confess, so I confessed first: I unplugged myself.";

if (entry.length < 1 || entry.length > 200 || !entry.trim() || entry.includes("\n")) {
  throw new Error(`entry gate failed: ${entry.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
void repoRoot;
