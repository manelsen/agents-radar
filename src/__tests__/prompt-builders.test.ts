import { describe, it, expect } from "vitest";
import { buildPeerPrompt, buildPeersComparisonPrompt, buildSkillsPrompt } from "../prompts.ts";
import {
  buildWebReportPrompt,
  buildWeeklyPrompt,
  buildMonthlyPrompt,
  buildHnPrompt,
} from "../prompts-data.ts";
import type { RepoConfig, GitHubItem, GitHubRelease } from "../github.ts";
import type { RepoDigest } from "../prompts.ts";
import type { HnData } from "../hn.ts";
import type { WebFetchResult } from "../web.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const cfg: RepoConfig = { id: "test", repo: "org/test", name: "TestTool" };

function makeItem(overrides: Partial<GitHubItem> = {}): GitHubItem {
  return {
    number: 1,
    title: "Issue",
    state: "open",
    user: { login: "alice" },
    labels: [],
    created_at: "2026-03-09T00:00:00Z",
    updated_at: "2026-03-09T12:00:00Z",
    comments: 5,
    reactions: { "+1": 2 },
    body: "body",
    html_url: "https://github.com/org/test/issues/1",
    ...overrides,
  };
}

const release: GitHubRelease = {
  tag_name: "v1.0.0",
  name: "Release 1.0",
  body: "Release notes",
  published_at: "2026-03-09T00:00:00Z",
};

function makeDigest(overrides: Partial<RepoDigest> = {}): RepoDigest {
  return { config: cfg, issues: [], prs: [], releases: [], summary: "Summary", ...overrides };
}

// ---------------------------------------------------------------------------
// buildPeerPrompt
// ---------------------------------------------------------------------------

describe("buildPeerPrompt", () => {
  it("includes data overview section", () => {
    const issues = [makeItem({ state: "open" }), makeItem({ state: "closed" })];
    const result = buildPeerPrompt(cfg, issues, [makeItem()], [release], "2026-03-09");
    expect(result).toContain("Visão geral dos dados");
    expect(result).toContain("abertas/ativas: 1");
    expect(result).toContain("fechadas: 1");
  });

  it("generates English prompt", () => {
    const result = buildPeerPrompt(cfg, [], [], [], "2026-03-09", 30, 20, "en");
    expect(result).toContain("Data Overview");
    expect(result).toContain("None");
  });
});

// ---------------------------------------------------------------------------
// buildPeersComparisonPrompt
// ---------------------------------------------------------------------------

describe("buildPeersComparisonPrompt", () => {
  it("includes openclaw and peer sections", () => {
    const openclawDigest = makeDigest({
      config: { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" },
      summary: "OC summary",
    });
    const peerDigests = [
      makeDigest({ config: { ...cfg, name: "Peer" }, summary: "Peer summary", issues: [makeItem()] }),
    ];
    const result = buildPeersComparisonPrompt(openclawDigest, peerDigests, "2026-03-09");
    expect(result).toContain("OpenClaw (referência principal");
    expect(result).toContain("OC summary");
    expect(result).toContain("Peer summary");
  });
});

// ---------------------------------------------------------------------------
// buildSkillsPrompt
// ---------------------------------------------------------------------------

describe("buildSkillsPrompt", () => {
  it("includes skills repository context", () => {
    const result = buildSkillsPrompt([makeItem()], [makeItem()], "2026-03-09");
    expect(result).toContain("anthropics/skills");
    expect(result).toContain("Claude Code Skills");
  });

  it("generates English variant", () => {
    const result = buildSkillsPrompt([], [], "2026-03-09", "en");
    expect(result).toContain("Claude Code ecosystem");
    expect(result).toContain("None");
  });
});

// ---------------------------------------------------------------------------
// buildWebReportPrompt
// ---------------------------------------------------------------------------

describe("buildWebReportPrompt", () => {
  it("includes site sections for first run", () => {
    const results: WebFetchResult[] = [
      {
        site: "anthropic",
        siteName: "Anthropic",
        isFirstRun: true,
        newItems: [
          {
            url: "https://anthropic.com/news/test",
            title: "Test",
            lastmod: "2026-03-09",
            content: "Content",
            site: "anthropic",
            category: "news",
          },
        ],
        totalDiscovered: 50,
      },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("Primeira varredura completa");
    expect(result).toContain("Anthropic");
    expect(result).toContain("Panorama de conteúdo"); // first-run-only section
  });

  it("shows incremental mode for non-first-run", () => {
    const results: WebFetchResult[] = [
      { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 100 },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("Atualização incremental");
    expect(result).not.toContain("Panorama de conteúdo");
  });
});

// ---------------------------------------------------------------------------
// buildWeeklyPrompt
// ---------------------------------------------------------------------------

describe("buildWeeklyPrompt", () => {
  it("includes daily digest entries", () => {
    const digests = { "2026-03-03": "Day 1 content", "2026-03-04": "Day 2 content" };
    const result = buildWeeklyPrompt(digests, "2026-W10");
    expect(result).toContain("2026-03-03");
    expect(result).toContain("Day 1 content");
    expect(result).toContain("2026-W10");
    expect(result).toContain("relatório semanal");
  });

  it("generates English variant", () => {
    const result = buildWeeklyPrompt({ "2026-03-03": "content" }, "2026-W10", "en");
    expect(result).toContain("weekly recap");
  });
});

// ---------------------------------------------------------------------------
// buildMonthlyPrompt
// ---------------------------------------------------------------------------

describe("buildMonthlyPrompt", () => {
  it("includes source digests and month", () => {
    const digests = { "2026-02-01": "Week 1", "2026-02-08": "Week 2" };
    const result = buildMonthlyPrompt(digests, "2026-02");
    expect(result).toContain("2026-02");
    expect(result).toContain("2 relatórios");
    expect(result).toContain("relatório mensal");
  });

  it("generates English variant", () => {
    const result = buildMonthlyPrompt({ "2026-02-01": "w1" }, "2026-02", "en");
    expect(result).toContain("monthly review");
  });
});

// ---------------------------------------------------------------------------
// buildHnPrompt
// ---------------------------------------------------------------------------

describe("buildHnPrompt", () => {
  it("includes stories with metadata", () => {
    const data: HnData = {
      stories: [
        {
          id: "123",
          title: "AI News",
          url: "https://example.com/ai",
          hnUrl: "https://news.ycombinator.com/item?id=123",
          points: 200,
          comments: 50,
          author: "bob",
          createdAt: "2026-03-09T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHnPrompt(data, "2026-03-09");
    expect(result).toContain("AI News");
    expect(result).toContain("Pontuação: 200");
    expect(result).toContain("Comentários: 50");
    expect(result).toContain("Autor: bob");
    expect(result).toContain("1");
  });

  it("generates English variant", () => {
    const data: HnData = {
      stories: [
        {
          id: "1",
          title: "Test",
          url: "https://test.com",
          hnUrl: "https://news.ycombinator.com/item?id=1",
          points: 10,
          comments: 2,
          author: "a",
          createdAt: "2026-03-09T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHnPrompt(data, "2026-03-09", "en");
    expect(result).toContain("Score: 10");
    expect(result).toContain("Comments: 2");
    expect(result).toContain("Hacker News");
  });
});
