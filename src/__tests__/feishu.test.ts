import { describe, it, expect, afterEach } from "vitest";
import { buildFeishuMessage } from "../feishu.ts";
import type { Highlights } from "../notify.ts";

const BASE_URL = "https://example.com/radar";

describe("buildFeishuMessage", () => {
  const origPagesUrl = process.env["PAGES_URL"];

  afterEach(() => {
    if (origPagesUrl !== undefined) {
      process.env["PAGES_URL"] = origPagesUrl;
    } else {
      delete process.env["PAGES_URL"];
    }
  });

  it("builds a daily message with reports", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-agents"], BASE_URL);
    expect(msg).toContain("agents-radar");
    expect(msg).toContain("2026-03-09");
    expect(msg).toContain("📡");
    expect(msg).toContain(`[Ecossistema de agentes de IA](${BASE_URL}/#2026-03-09/ai-agents)`);
  });

  it("shows weekly icon and suffix for weekly reports", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-weekly"], BASE_URL);
    expect(msg).toContain("📅");
    expect(msg).toContain("semanal");
  });

  it("shows monthly icon and suffix for monthly reports", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-monthly"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("mensal");
  });

  it("monthly takes priority over weekly", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-weekly", "ai-monthly"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("mensal");
  });

  it("renders reports without en link", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-hn"], BASE_URL);
    expect(msg).toContain("Comunidade HN");
    expect(msg).not.toContain("HN Community");
  });

  it("includes Web UI and RSS links", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-agents"], BASE_URL);
    expect(msg).toContain("🌐 Web UI");
    expect(msg).toContain("RSS");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("uses markdown links instead of HTML", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-agents"], BASE_URL);
    expect(msg).not.toContain("<a href=");
    expect(msg).not.toContain("<b>");
    expect(msg).toContain("**agents-radar");
    expect(msg).toContain(`[Ecossistema de agentes de IA](`);
  });

  it("includes highlights when provided", () => {
    const highlights: Highlights = {
      zh: {
        "ai-agents": ["OpenClaw 新增 MCP 支持", "Claude Code 发布 v1.2.0"],
        "ai-web": ["Gemini 发布新模型"],
      },
      en: {},
    };
    const msg = buildFeishuMessage("2026-03-09", ["ai-agents", "ai-web"], BASE_URL, highlights);
    expect(msg).toContain("◦ OpenClaw 新增 MCP 支持");
    expect(msg).toContain("◦ Claude Code 发布 v1.2.0");
    expect(msg).toContain("◦ Gemini 发布新模型");
  });

  it("works without highlights", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-agents"], BASE_URL, null);
    expect(msg).toContain("Ecossistema de agentes de IA");
    expect(msg).not.toContain("◦");
  });
});
