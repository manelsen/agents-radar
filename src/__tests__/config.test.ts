import { describe, it, expect, vi, afterEach } from "vitest";
import fs from "node:fs";
import { toRepoConfig, loadConfig } from "../config.ts";

// ---------------------------------------------------------------------------
// toRepoConfig
// ---------------------------------------------------------------------------

describe("toRepoConfig", () => {
  it("converts a basic entry", () => {
    const result = toRepoConfig({ id: "test", repo: "org/test", name: "Test" });
    expect(result).toEqual({ id: "test", repo: "org/test", name: "Test" });
  });

  it("includes paginated when true", () => {
    const result = toRepoConfig({ id: "test", repo: "org/test", name: "Test", paginated: true });
    expect(result).toEqual({ id: "test", repo: "org/test", name: "Test", paginated: true });
  });

  it("omits paginated when false", () => {
    const result = toRepoConfig({ id: "test", repo: "org/test", name: "Test", paginated: false });
    expect(result).not.toHaveProperty("paginated");
  });
});

// ---------------------------------------------------------------------------
// loadConfig
// ---------------------------------------------------------------------------

describe("loadConfig", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns defaults when config file does not exist", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(false);
    const config = loadConfig("/nonexistent/config.yml");
    expect(config.skillsRepo).toBe("anthropics/skills");
    expect(config.agents.id).toBe("nullclaw");
    expect(config.agentsPeers.length).toBeGreaterThan(0);
  });

  it("falls back to defaults for empty skills_repo", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue("skills_repo: ''");
    const config = loadConfig("test.yml");
    expect(config.skillsRepo).toBe("anthropics/skills");
  });

  it("parses agents from YAML", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue(`
agents:
  id: myclaw
  repo: org/myclaw
  name: MyClaw
  paginated: true
`);
    const config = loadConfig("test.yml");
    expect(config.agents).toEqual({ id: "myclaw", repo: "org/myclaw", name: "MyClaw", paginated: true });
  });

  it("falls back to default agents when incomplete", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue("agents:\n  id: partial\n");
    const config = loadConfig("test.yml");
    expect(config.agents.id).toBe("nullclaw"); // default
  });
});
