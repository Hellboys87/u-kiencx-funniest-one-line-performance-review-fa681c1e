import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Exceeds Expectations: delegates everything, understands nothing, takes all credit — recommend immediate promotion to my manager.";

// The gate requires /output/entry.txt to be UTF-8 text of 1 to 140
// characters, not only white space. Fail loudly here so a bad edit can
// never ship an invalid entry.
const chars = [...LINE].length;
if (LINE.trim().length === 0 || chars > 140) {
  throw new Error(
    `entry line must be 1-140 characters, got ${chars}: ${JSON.stringify(LINE)}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
