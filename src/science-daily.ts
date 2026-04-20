/**
 * ScienceDaily stories fetched from official RSS feeds.
 */

export interface ScienceDailyStory {
  title: string;
  url: string;
  description: string;
  publishedAt: string;
}

export interface ScienceDailyData {
  stories: ScienceDailyStory[];
  fetchSuccess: boolean;
}

const AI_FEED_URL = "https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml";
const ROBOTICS_FEED_URL = "https://www.sciencedaily.com/rss/computers_math/robotics.xml";
const HACKING_FEED_URL = "https://www.sciencedaily.com/rss/computers_math/hacking.xml";
const MEMORY_FEED_URL = "https://www.sciencedaily.com/rss/mind_brain/memory.xml";
const PRINTING_FEED_URL = "https://www.sciencedaily.com/rss/matter_energy/3-d_printing.xml";
const SOLAR_FEED_URL = "https://www.sciencedaily.com/rss/matter_energy/solar_energy.xml";
const LIVING_WELL_FEED_URL = "https://www.sciencedaily.com/rss/living_well.xml";
const MENTAL_HEALTH_FEED_URL = "https://www.sciencedaily.com/rss/mind_brain/mental_health.xml";
const EDUCATION_FEED_URL = "https://www.sciencedaily.com/rss/education_learning.xml";
const ENGINEERING_FEED_URL = "https://www.sciencedaily.com/rss/matter_energy/engineering.xml";
const AGRICULTURE_FEED_URL = "https://www.sciencedaily.com/rss/plants_animals/agriculture_and_food.xml";
const ENVIRONMENTAL_FEED_URL = "https://www.sciencedaily.com/rss/earth_climate/environmental_science.xml";
const ARCHAEOLOGY_FEED_URL = "https://www.sciencedaily.com/rss/fossils_ruins/archaeology.xml";
const SOCIAL_FEED_URL = "https://www.sciencedaily.com/rss/science_society/social_issues.xml";
const OFFBEAT_FEED_URL = "https://www.sciencedaily.com/rss/strange_offbeat.xml";
const MAX_STORIES = 20;
const LOOKBACK_MS = 7 * 24 * 60 * 60 * 1000;

function decodeXml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripHtml(text: string): string {
  return decodeXml(text)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const m = xml.match(re);
  return m ? m[1]!.trim() : "";
}

async function fetchScienceDailyFeed(feedUrl: string, logTag: string): Promise<ScienceDailyData> {
  try {
    const resp = await fetch(feedUrl, {
      headers: { "User-Agent": "agents-radar/1.0" },
    });

    if (!resp.ok) {
      console.error(`  [${logTag}] HTTP ${resp.status}`);
      return { stories: [], fetchSuccess: false };
    }

    const xml = await resp.text();
    const itemBlocks = xml.split("<item>").slice(1);
    const cutoff = Date.now() - LOOKBACK_MS;

    const stories = itemBlocks
      .map((block) => {
        const itemXml = `<item>${block}`;
        const title = stripHtml(extractTag(itemXml, "title"));
        const url = extractTag(itemXml, "link");
        const description = stripHtml(extractTag(itemXml, "description"));
        const publishedAt = extractTag(itemXml, "pubDate");
        if (!title || !url || !publishedAt) return null;
        return {
          title,
          url,
          description,
          publishedAt: new Date(publishedAt).toISOString(),
        } satisfies ScienceDailyStory;
      })
      .filter((story): story is ScienceDailyStory => Boolean(story))
      .filter((story) => new Date(story.publishedAt).getTime() >= cutoff)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, MAX_STORIES);

    console.log(`  [${logTag}] ${stories.length} stories`);
    return { stories, fetchSuccess: stories.length > 0 };
  } catch (err) {
    console.error(`  [${logTag}] fetch failed: ${err}`);
    return { stories: [], fetchSuccess: false };
  }
}

export async function fetchScienceDailyData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(AI_FEED_URL, "science");
}

export async function fetchRoboticsData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(ROBOTICS_FEED_URL, "robotics");
}

export async function fetchHackingData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(HACKING_FEED_URL, "hacking");
}

export async function fetchMemoryData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(MEMORY_FEED_URL, "memory");
}

export async function fetch3dPrintingData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(PRINTING_FEED_URL, "3dprinting");
}

export async function fetchSolarEnergyData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(SOLAR_FEED_URL, "solar");
}

export async function fetchLivingWellData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(LIVING_WELL_FEED_URL, "livingwell");
}

export async function fetchMentalHealthData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(MENTAL_HEALTH_FEED_URL, "mentalhealth");
}

export async function fetchEducationData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(EDUCATION_FEED_URL, "education");
}

export async function fetchEngineeringData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(ENGINEERING_FEED_URL, "engineering");
}

export async function fetchAgricultureData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(AGRICULTURE_FEED_URL, "agriculture");
}

export async function fetchEnvironmentalData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(ENVIRONMENTAL_FEED_URL, "environmental");
}

export async function fetchArchaeologyData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(ARCHAEOLOGY_FEED_URL, "archaeology");
}

export async function fetchSocialData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(SOCIAL_FEED_URL, "social");
}

export async function fetchOffbeatData(): Promise<ScienceDailyData> {
  return fetchScienceDailyFeed(OFFBEAT_FEED_URL, "offbeat");
}
