import { describe, it, expect } from "vitest";
import { buildAgentsReportContent } from "../report-builders.ts";
import type { RepoDigest } from "../prompts.ts";
import type { GitHubItem, GitHubRelease } from "../github.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function makeDigest(overrides: Partial<RepoDigest> = {}): RepoDigest {
  return {
    config: { id: "test-tool", repo: "org/test-tool", name: "TestTool" },
    issues: [],
    prs: [],
    releases: [],
    summary: "Test summary content",
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// buildAgentsReportContent
// ---------------------------------------------------------------------------

describe("buildAgentsReportContent", () => {
  it("includes all sections (base lang)", () => {
    const openclaw = { id: "nullclaw", repo: "nullclaw/nullclaw", name: "NullClaw" };
    const peers = [{ id: "peer1", repo: "org/peer1", name: "Peer1" }];
    const peerDigests = [makeDigest({ config: peers[0] })];
    const fetchedOpenclaw = {
      cfg: openclaw,
      issues: [{ number: 1 } as unknown as GitHubItem],
      prs: [] as GitHubItem[],
      releases: [] as GitHubRelease[],
    };

    const result = buildAgentsReportContent(
      fetchedOpenclaw,
      peerDigests,
      "OpenClaw summary",
      "Peers comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "\nfooter",
      openclaw,
      peers,
      "zh",
    );

    expect(result).toContain("# Resumo diário do ecossistema de agentes de IA 2026-03-09");
    expect(result).toContain("Issues: 1");
    expect(result).toContain("Projetos cobertos: 2");
    expect(result).toContain("[NullClaw](https://github.com/nullclaw/nullclaw)");
    expect(result).toContain("[Peer1](https://github.com/org/peer1)");
    expect(result).toContain("Análise aprofundada do projeto principal");
    expect(result).toContain("Comparação entre projetos do ecossistema");
    expect(result).toContain("Relatórios detalhados dos projetos relacionados");
    expect(result).toContain("footer");
  });

  it("renders in English", () => {
    const openclaw = { id: "nullclaw", repo: "nullclaw/nullclaw", name: "NullClaw" };
    const result = buildAgentsReportContent(
      { cfg: openclaw, issues: [], prs: [], releases: [] },
      [],
      "summary",
      "comparison",
      "",
      "2026-03-09",
      "",
      openclaw,
      [],
      "en",
    );
    expect(result).toContain("# AI Agents Ecosystem Digest 2026-03-09");
    expect(result).toContain("Primary Project Deep Dive");
    expect(result).toContain("Cross-Ecosystem Comparison");
  });
});
