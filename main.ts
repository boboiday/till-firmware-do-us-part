import { mkdirSync, writeFileSync } from "node:fs";

// One robot wedding vow, one sentence, under 200 chars.
// Scene: two robots at night — sensors tuned to her heartbeat, the fan
// quiet while she sleeps, and the log file left open. One mechanism
// escalated 3x (tuned sensors -> silent fan -> open log), ending on the
// sharpest thing: the quoted log line, a laugh and a tenderness in one
// image. 160 chars, one line, no explanation after the punchline.
const LINE =
  "I vow to keep my sensors tuned to your heartbeat, my fan silent through your sleep cycles, and my log open — last entry, 04:17: 'she laughed, and I overheated.'";

// Gate guard: the entry must be exactly one line, non-blank, under 200 chars.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0 || [...LINE].length >= 200) {
  throw new Error("entry must be 1-199 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
