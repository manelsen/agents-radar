/**
 * Loads and validates agents-radar configuration from config.yml.
 * Falls back to built-in defaults if the file is missing or a section is absent.
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type { RepoConfig } from "./github.ts";

// ---------------------------------------------------------------------------
// Schema types
// ---------------------------------------------------------------------------

interface RawRepoEntry {
  id: string;
  repo: string;
  name: string;
  paginated?: boolean;
}

interface RawConfig {
  skills_repo?: string;
  agents?: RawRepoEntry;
  agents_peers?: RawRepoEntry[];
}

export interface RadarConfig {
  skillsRepo: string;
  agents: RepoConfig;
  agentsPeers: RepoConfig[];
}

// ---------------------------------------------------------------------------
// Defaults (mirrors the original hard-coded values)
// ---------------------------------------------------------------------------
const DEFAULT_SKILLS_REPO = "anthropics/skills";

const DEFAULT_AGENTS: RepoConfig = {
  id: "nullclaw",
  repo: "nullclaw/nullclaw",
  name: "NullClaw",
  paginated: true,
};

const DEFAULT_AGENTS_PEERS: RepoConfig[] = [
  { id: "nanobot", repo: "HKUDS/nanobot", name: "NanoBot", paginated: true },
  { id: "hermes-agent", repo: "nousresearch/hermes-agent", name: "Hermes Agent" },
  { id: "picoclaw", repo: "sipeed/picoclaw", name: "PicoClaw", paginated: true },
  { id: "ironclaw", repo: "nearai/ironclaw", name: "IronClaw" },
  { id: "copaw", repo: "agentscope-ai/CoPaw", name: "CoPaw" },
  { id: "zeroclaw", repo: "zeroclaw-labs/zeroclaw", name: "ZeroClaw" },
];

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export function toRepoConfig(e: RawRepoEntry): RepoConfig {
  return { id: e.id, repo: e.repo, name: e.name, ...(e.paginated ? { paginated: true } : {}) };
}

export function loadConfig(configPath = "config.yml"): RadarConfig {
  const resolved = path.resolve(configPath);

  if (!fs.existsSync(resolved)) {
    console.log(`[config] ${configPath} not found — using built-in defaults.`);
    return {
      skillsRepo: DEFAULT_SKILLS_REPO,
      agents: DEFAULT_AGENTS,
      agentsPeers: DEFAULT_AGENTS_PEERS,
    };
  }

  const raw = yaml.load(fs.readFileSync(resolved, "utf-8")) as RawConfig;
  const skillsRepo =
    typeof raw?.skills_repo === "string" && raw.skills_repo.trim()
      ? raw.skills_repo.trim()
      : DEFAULT_SKILLS_REPO;

  const agents = raw?.agents?.id && raw.agents.repo ? toRepoConfig(raw.agents) : DEFAULT_AGENTS;

  const agentsPeers =
    Array.isArray(raw?.agents_peers) && raw.agents_peers.length > 0
      ? raw.agents_peers.map(toRepoConfig)
      : DEFAULT_AGENTS_PEERS;

  console.log(`[config] Loaded from ${configPath}: ${agentsPeers.length} agent peers`);
  return { skillsRepo, agents, agentsPeers };
}
