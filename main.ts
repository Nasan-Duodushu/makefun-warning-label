// Warning Label for Humans: the single-line safety warning that should come
// printed on every human being, 160 characters or fewer.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "WARNING: Contents under pressure. Do not shake, startle, or ask what's wrong. May cry at adverts. Coffee sold separately.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
