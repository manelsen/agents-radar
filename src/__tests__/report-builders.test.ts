import { describe, it, expect } from "vitest";
import { buildCliReportContent, buildOpenclawReportContent } from "../report-builders.ts";
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
// buildCliReportContent
// ---------------------------------------------------------------------------

describe("buildCliReportContent", () => {
  it("includes title, meta, and all sections (base lang)", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "OpenAI Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "Skills summary",
      "Comparison content",
      "2026-03-09 00:00",
      "2026-03-09",
      "\n---\nfooter",
      "anthropics/skills",
      "zh",
    );

    expect(result).toContain("# Relatório diário da comunidade de ferramentas AI CLI 2026-03-09");
    expect(result).toContain("Ferramentas cobertas: 2");
    expect(result).toContain("[Claude Code](https://github.com/anthropics/claude-code)");
    expect(result).toContain("[Claude Code Skills](https://github.com/anthropics/skills)");
    expect(result).toContain("Comparação entre ferramentas");
    expect(result).toContain("Comparison content");
    expect(result).toContain("Skills summary");
    expect(result).toContain("footer");
  });

  it("includes title and meta in English", () => {
    const digests = [makeDigest()];
    const result = buildCliReportContent(
      digests,
      "Skills",
      "Comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "",
      "anthropics/skills",
      "en",
    );
    expect(result).toContain("# AI CLI Tools Community Digest 2026-03-09");
    expect(result).toContain("Cross-Tool Comparison");
  });

  it("nests skills section inside claude-code details only", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "SKILLS_CONTENT",
      "comparison",
      "",
      "",
      "",
      "anthropics/skills",
      "zh",
    );

    // Skills should appear inside claude-code details
    const claudeIdx = result.indexOf("Claude Code");
    const skillsIdx = result.indexOf("SKILLS_CONTENT");
    expect(skillsIdx).toBeGreaterThan(claudeIdx);
    // Skills should not appear after codex section
    expect(result.split("SKILLS_CONTENT")).toHaveLength(2); // appears exactly once
  });
});

// ---------------------------------------------------------------------------
// buildOpenclawReportContent
// ---------------------------------------------------------------------------

describe("buildOpenclawReportContent", () => {
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

    const result = buildOpenclawReportContent(
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
    const result = buildOpenclawReportContent(
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
