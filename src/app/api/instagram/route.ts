import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

export interface InstagramImage {
  url: string;
  permalink?: string;
  caption?: string;
  id?: string;
}

/**
 * GET /api/instagram
 * Fetches Instagram images. When INSTAGRAM_ACCESS_TOKEN is set, uses Instagram Graph API.
 * Otherwise returns fallback images from the site.
 */
export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const profileUrl = siteConfig.social.instagram;

  if (token) {
    try {
      const mediaRes = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type&limit=12&access_token=${token}`,
        { next: { revalidate: 3600 } }
      );
      const mediaData = await mediaRes.json();

      if (mediaData.error) {
        return NextResponse.json(getFallbackImages(profileUrl));
      }

      const items = (mediaData.data ?? []).filter(
        (m: { media_type?: string }) => m.media_type === "IMAGE" || m.media_type === "CAROUSEL_ALBUM"
      );

      const images: InstagramImage[] = items.slice(0, 8).map((m: { id: string; media_url: string; permalink?: string; caption?: string }) => ({
        url: m.media_url,
        permalink: m.permalink ?? profileUrl,
        caption: m.caption,
        id: m.id,
      }));

      return NextResponse.json({ images, source: "api" });
    } catch {
      return NextResponse.json(getFallbackImages(profileUrl));
    }
  }

  return NextResponse.json(getFallbackImages(profileUrl));
}

function getFallbackImages(profileUrl: string): { images: InstagramImage[]; source: "fallback" } {
  const fallbackUrls = [
    "/images/studio.jpg",
    "/images/studio2.jpg",
    "/images/makeup.jpg",
    "/images/lash.jpg",
    "/images/mode.jpg",
    "/images/byonik.jpg",
  ];

  return {
    images: fallbackUrls.map((url) => ({
      url,
      permalink: profileUrl,
    })),
    source: "fallback",
  };
}
