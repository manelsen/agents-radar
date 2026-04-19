import { describe, it, expect } from "vitest";
import {
  MSG,
  AGENTS_REPORT,
  WEB_REPORT,
  HN_REPORT,
  ARXIV_REPORT,
  SCIENCE_REPORT,
  WEEKLY_REPORT,
  MONTHLY_REPORT,
  ISSUE_LABELS,
  AGENTS_ISSUE_TITLE,
  FOOTER,
  NOTIFY_LABELS,
} from "../i18n.ts";

// ---------------------------------------------------------------------------
// Static bilingual strings
// ---------------------------------------------------------------------------

describe("bilingual string maps", () => {
  const maps = [
    { name: "MSG.noActivity", obj: MSG.noActivity },
    { name: "MSG.summaryFailed", obj: MSG.summaryFailed },
    { name: "MSG.skillsFailed", obj: MSG.skillsFailed },
    { name: "AGENTS_REPORT.title", obj: AGENTS_REPORT.title },
    { name: "AGENTS_REPORT.deepDive", obj: AGENTS_REPORT.deepDive },
    { name: "AGENTS_REPORT.comparison", obj: AGENTS_REPORT.comparison },
    { name: "AGENTS_REPORT.peers", obj: AGENTS_REPORT.peers },
    { name: "WEB_REPORT.title", obj: WEB_REPORT.title },
    { name: "WEB_REPORT.firstCrawl", obj: WEB_REPORT.firstCrawl },
    { name: "HN_REPORT.title", obj: HN_REPORT.title },
    { name: "ARXIV_REPORT.title", obj: ARXIV_REPORT.title },
    { name: "SCIENCE_REPORT.title", obj: SCIENCE_REPORT.title },
    { name: "WEEKLY_REPORT.title", obj: WEEKLY_REPORT.title },
    { name: "MONTHLY_REPORT.title", obj: MONTHLY_REPORT.title },
    { name: "FOOTER.autoGen", obj: FOOTER.autoGen },
  ];

  for (const { name, obj } of maps) {
    it(`${name} has both zh and en`, () => {
      expect(obj).toHaveProperty("zh");
      expect(obj).toHaveProperty("en");
      expect(obj.zh).toBeTruthy();
      expect(obj.en).toBeTruthy();
      expect(obj.zh).not.toBe(obj.en);
    });
  }
});

// ---------------------------------------------------------------------------
// Dynamic title functions
// ---------------------------------------------------------------------------

describe("issue title functions", () => {
  it("AGENTS_ISSUE_TITLE produces zh and en titles", () => {
    expect(AGENTS_ISSUE_TITLE("2026-03-12", "zh")).toContain("Ecossistema de agentes de IA");
    expect(AGENTS_ISSUE_TITLE("2026-03-12", "zh")).toContain("2026-03-12");
    expect(AGENTS_ISSUE_TITLE("2026-03-12", "en")).toContain("AI Agents Ecosystem Digest");
  });

  it("WEB_REPORT.issueTitle includes first crawl flag", () => {
    expect(WEB_REPORT.issueTitle("2026-03-12", true, "zh")).toContain("primeira varredura");
    expect(WEB_REPORT.issueTitle("2026-03-12", false, "zh")).not.toContain("primeira varredura");
    expect(WEB_REPORT.issueTitle("2026-03-12", true, "en")).toContain("First Crawl");
  });

  it("HN_REPORT.issueTitle produces zh and en", () => {
    expect(HN_REPORT.issueTitle("2026-03-12", "zh")).toContain("Hacker News");
    expect(HN_REPORT.issueTitle("2026-03-12", "en")).toContain("Hacker News");
  });

  it("WEEKLY_REPORT.issueTitle includes week string and lang", () => {
    expect(WEEKLY_REPORT.issueTitle("2026-W11", "zh")).toContain("2026-W11");
    expect(WEEKLY_REPORT.issueTitle("2026-W11", "en")).toContain("2026-W11");
  });

  it("MONTHLY_REPORT.issueTitle includes month string and lang", () => {
    expect(MONTHLY_REPORT.issueTitle("2026-02", "zh")).toContain("2026-02");
    expect(MONTHLY_REPORT.issueTitle("2026-02", "en")).toContain("2026-02");
  });
});

// ---------------------------------------------------------------------------
// Dynamic content functions
// ---------------------------------------------------------------------------

describe("dynamic content helpers", () => {
  it("WEB_REPORT.newContent formats count", () => {
    expect(WEB_REPORT.newContent(10, "zh")).toContain("10 artigos");
    expect(WEB_REPORT.newContent(10, "en")).toContain("10 articles");
  });

  it("WEB_REPORT.generated formats timestamp", () => {
    expect(WEB_REPORT.generated("12:00", "zh")).toContain("12:00 UTC");
    expect(WEB_REPORT.generated("12:00", "en")).toContain("12:00 UTC");
  });
});

// ---------------------------------------------------------------------------
// ISSUE_LABELS
// ---------------------------------------------------------------------------

describe("ISSUE_LABELS", () => {
  it("maps report types to label names", () => {
    const keys = Object.keys(ISSUE_LABELS);
    expect(keys).toEqual(expect.arrayContaining(["agents", "web", "hn", "arxiv", "science"]));
    expect(keys).not.toContain("cli");
    expect(keys).not.toContain("openclaw");
    expect(keys).not.toContain("trending");

    expect(ISSUE_LABELS.agents.zh).toBe("agents");
    expect(ISSUE_LABELS.hn.en).toBe("hn");
  });
});

// ---------------------------------------------------------------------------
// NOTIFY_LABELS
// ---------------------------------------------------------------------------

describe("NOTIFY_LABELS", () => {
  it("covers all report types", () => {
    const expected = ["ai-agents", "ai-web", "ai-hn", "ai-arxiv", "ai-science", "ai-weekly", "ai-monthly"];
    for (const key of expected) {
      expect(NOTIFY_LABELS[key]).toBeDefined();
      expect(NOTIFY_LABELS[key]!.zh).toBeTruthy();
      expect(NOTIFY_LABELS[key]!.en).toBeTruthy();
    }

    // Removed keys must not be present
    expect(NOTIFY_LABELS).not.toHaveProperty("ai-cli");
    expect(NOTIFY_LABELS).not.toHaveProperty("ai-trending");
    expect(NOTIFY_LABELS).not.toHaveProperty("ai-community");
  });
});
