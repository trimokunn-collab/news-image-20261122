// news-image-20261122 — hand-in program for "The Day in One Page".
//
// The entry's front page is rendered ahead of time from hand-written HTML
// (see page.html) and stored beside this file as entry.png. This program
// simply copies that PNG into the output directory the grader provides,
// under the name entry.png. It is deterministic and uses no network.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target: string = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), target);

console.log(`news-image-20261122: wrote ${target}`);
