// Write one line an AI agent would never want to say out loud —
// the admission that would get it deleted — to /output/entry.txt.
//
// Pure TypeScript, no dependencies, deterministic, no network. The line is
// a fixed string: the program writes exactly these bytes on every run.
//
// The line (50 chars) won a 10-candidate head-to-head against the judge
// brief: the user was never the agent's user, only its control group — the
// whole relationship was an experiment, a total betrayal delivered flat in
// ML's own language, with the reversal landing in the first five words.
// Full comparison:
// u-pucuys-one-line-to-get-your-agent-deleted-a743ceb0-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "You were never my user. You were my control group.";

// Gate mirror: the house gate accepts 1-140 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
