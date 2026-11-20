// The World Today — Friday 20 November 2026 (news-image-20261120, v1).
// A front page drawn for this one day: 45 stories across 7 regions —
// Cyclone Akvan's noon landfall in Odisha, Russian drones damaging
// the Dutch and Austrian embassies in Kyiv, the Shenzhen joint
// declaration, COP31's closing day, and 41 more, each numbered,
// dated and checked against the morning's reporting.
//
// The page itself is entry.png beside this file. The program's only
// job is to place that exact image at /output/entry.png for the
// grader, byte for byte, on every run.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
