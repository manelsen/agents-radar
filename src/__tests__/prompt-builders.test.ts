import { describe, it, expect } from "vitest";
import { buildPeerPrompt, buildPeersComparisonPrompt, buildSkillsPrompt } from "../prompts.ts";
import {
  buildWebReportPrompt,
  buildWeeklyPrompt,
  buildMonthlyPrompt,
  buildHnPrompt,
  buildRoboticsPrompt,
  buildHackingPrompt,
  buildMemoryPrompt,
  build3dPrintingPrompt,
  buildSolarEnergyPrompt,
  buildLivingWellPrompt,
  buildMentalHealthPrompt,
  buildEducationPrompt,
  buildEngineeringPrompt,
  buildAgriculturePrompt,
  buildEnvironmentalPrompt,
  buildArchaeologyPrompt,
  buildSocialPrompt,
  buildOffbeatPrompt,
} from "../prompts-data.ts";
import type { RepoConfig, GitHubItem, GitHubRelease } from "../github.ts";
import type { RepoDigest } from "../prompts.ts";
import type { HnData } from "../hn.ts";
import type { WebFetchResult } from "../web.ts";
import type { ScienceDailyData } from "../science-daily.ts";

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

// ---------------------------------------------------------------------------
// buildRoboticsPrompt
// ---------------------------------------------------------------------------

describe("buildRoboticsPrompt", () => {
  it("includes robotics context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Robots learn to walk",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "New research on robot locomotion.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildRoboticsPrompt(data, "2026-04-19");
    expect(result).toContain("Robótica");
    expect(result).toContain("Robots learn to walk");
    expect(result).toContain("1");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildRoboticsPrompt(data, "2026-04-19", "en");
    expect(result).toContain("robotics");
    expect(result).toContain("Robotics");
  });
});

// ---------------------------------------------------------------------------
// buildHackingPrompt
// ---------------------------------------------------------------------------

describe("buildHackingPrompt", () => {
  it("includes hacking context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "New vulnerability found",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Cybersecurity research.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHackingPrompt(data, "2026-04-19");
    expect(result).toContain("ciberseguran");
    expect(result).toContain("New vulnerability found");
    expect(result).toContain("1");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHackingPrompt(data, "2026-04-19", "en");
    expect(result).toContain("cybersecurity");
  });
});

// ---------------------------------------------------------------------------
// buildMemoryPrompt
// ---------------------------------------------------------------------------

describe("buildMemoryPrompt", () => {
  it("includes memory context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Brain plasticity study",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Neuroscience findings.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildMemoryPrompt(data, "2026-04-19");
    expect(result).toContain("neuroci");
    expect(result).toContain("Brain plasticity study");
    expect(result).toContain("1");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildMemoryPrompt(data, "2026-04-19", "en");
    expect(result).toContain("neuroscience");
  });
});

// ---------------------------------------------------------------------------
// build3dPrintingPrompt
// ---------------------------------------------------------------------------

describe("build3dPrintingPrompt", () => {
  it("includes 3d printing context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "New bioprinting technique",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Manufacturing breakthrough.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = build3dPrintingPrompt(data, "2026-04-19");
    expect(result).toContain("manufatura");
    expect(result).toContain("New bioprinting technique");
    expect(result).toContain("1");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = build3dPrintingPrompt(data, "2026-04-19", "en");
    expect(result).toContain("manufacturing");
  });
});

// ---------------------------------------------------------------------------
// buildSolarEnergyPrompt
// ---------------------------------------------------------------------------

describe("buildSolarEnergyPrompt", () => {
  it("includes solar energy context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Perovskite solar cell record",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Energy efficiency milestone.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildSolarEnergyPrompt(data, "2026-04-19");
    expect(result).toContain("energia");
    expect(result).toContain("Perovskite solar cell record");
    expect(result).toContain("1");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildSolarEnergyPrompt(data, "2026-04-19", "en");
    expect(result).toContain("energy");
  });
});

describe("buildLivingWellPrompt", () => {
  it("includes living well context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Walking more lowers disease risk",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Daily walking study.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildLivingWellPrompt(data, "2026-04-19");
    expect(result).toContain("bem-estar");
    expect(result).toContain("Walking more lowers disease risk");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildLivingWellPrompt(data, "2026-04-19", "en");
    expect(result).toContain("wellness");
  });
});

describe("buildMentalHealthPrompt", () => {
  it("includes mental health context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "New therapy for anxiety",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "CBT breakthrough.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildMentalHealthPrompt(data, "2026-04-19");
    expect(result).toContain("saúde mental");
    expect(result).toContain("New therapy for anxiety");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildMentalHealthPrompt(data, "2026-04-19", "en");
    expect(result).toContain("mental health");
  });
});

describe("buildEducationPrompt", () => {
  it("includes education context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "AI tutoring improves outcomes",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Study on AI in education.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildEducationPrompt(data, "2026-04-19");
    expect(result).toContain("educação");
    expect(result).toContain("AI tutoring improves outcomes");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildEducationPrompt(data, "2026-04-19", "en");
    expect(result).toContain("education");
  });
});

describe("buildEngineeringPrompt", () => {
  it("includes engineering context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "New bridge design technique",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Civil engineering advance.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildEngineeringPrompt(data, "2026-04-19");
    expect(result).toContain("engenharia");
    expect(result).toContain("New bridge design technique");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildEngineeringPrompt(data, "2026-04-19", "en");
    expect(result).toContain("engineering");
  });
});

describe("buildAgriculturePrompt", () => {
  it("includes agriculture context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Drought-resistant crop developed",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "GM crop milestone.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildAgriculturePrompt(data, "2026-04-19");
    expect(result).toContain("agricultura");
    expect(result).toContain("Drought-resistant crop developed");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildAgriculturePrompt(data, "2026-04-19", "en");
    expect(result).toContain("agriculture");
  });
});

describe("buildEnvironmentalPrompt", () => {
  it("includes environmental context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Ocean cleanup breakthrough",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "New filtering technique.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildEnvironmentalPrompt(data, "2026-04-19");
    expect(result).toContain("ambientais");
    expect(result).toContain("Ocean cleanup breakthrough");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildEnvironmentalPrompt(data, "2026-04-19", "en");
    expect(result).toContain("environmental");
  });
});

describe("buildArchaeologyPrompt", () => {
  it("includes archaeology context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Lost Roman city discovered",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Excavation findings.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildArchaeologyPrompt(data, "2026-04-19");
    expect(result).toContain("arqueologia");
    expect(result).toContain("Lost Roman city discovered");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildArchaeologyPrompt(data, "2026-04-19", "en");
    expect(result).toContain("archaeology");
  });
});

describe("buildSocialPrompt", () => {
  it("includes social context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Income inequality study results",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Economic research.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildSocialPrompt(data, "2026-04-19");
    expect(result).toContain("sociais");
    expect(result).toContain("Income inequality study results");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildSocialPrompt(data, "2026-04-19", "en");
    expect(result).toContain("social");
  });
});

describe("buildOffbeatPrompt", () => {
  it("includes offbeat context in PT-BR", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Quantum systems remember and forget",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Quantum weirdness.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildOffbeatPrompt(data, "2026-04-19");
    expect(result).toContain("incomuns");
    expect(result).toContain("Quantum systems remember and forget");
  });

  it("generates English variant", () => {
    const data: ScienceDailyData = {
      stories: [
        {
          title: "Test Story",
          url: "https://www.sciencedaily.com/releases/2026/04/test.htm",
          description: "Test.",
          publishedAt: "2026-04-19T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildOffbeatPrompt(data, "2026-04-19", "en");
    expect(result).toContain("offbeat");
  });
});
