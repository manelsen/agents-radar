/**
 * ScienceDaily AI stories fetched from the official RSS feed.
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

const FEED_URL = "https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml";
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

export async function fetchScienceDailyData(): Promise<ScienceDailyData> {
  try {
    const resp = await fetch(FEED_URL, {
      headers: { "User-Agent": "agents-radar/1.0" },
    });

    if (!resp.ok) {
      console.error(`  [science] HTTP ${resp.status}`);
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

    console.log(`  [science] ${stories.length} stories`);
    return { stories, fetchSuccess: stories.length > 0 };
  } catch (err) {
    console.error(`  [science] fetch failed: ${err}`);
    return { stories: [], fetchSuccess: false };
  }
}
