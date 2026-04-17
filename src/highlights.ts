import fs from "node:fs";
import path from "node:path";
import type { ReportHighlights } from "./prompts-data.ts";

export interface Highlights {
  zh: ReportHighlights;
  en: ReportHighlights;
}

const LEGACY_HIGHLIGHTS_FILE = "highlights.json";

function mergeHighlights(target: Highlights, incoming: Partial<Highlights>): void {
  Object.assign(target.zh, incoming.zh ?? {});
  Object.assign(target.en, incoming.en ?? {});
}

export function getHighlightsFilename(scope: string): string {
  return `highlights-${scope}.json`;
}

export function loadHighlights(date: string, digestsDir = "digests"): Highlights | null {
  const dateDir = path.join(digestsDir, date);
  if (!fs.existsSync(dateDir)) return null;

  const merged: Highlights = { zh: {}, en: {} };
  let found = false;

  const files = fs
    .readdirSync(dateDir)
    .filter((file) => file === LEGACY_HIGHLIGHTS_FILE || /^highlights-.+\.json$/.test(file))
    .sort();

  for (const file of files) {
    const filePath = path.join(dateDir, file);
    try {
      const parsed = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Partial<Highlights>;
      mergeHighlights(merged, parsed);
      found = true;
    } catch {
      // Ignore invalid highlight files so notifications can still be sent.
    }
  }

  return found ? merged : null;
}
