import { NextResponse } from "next/server";

const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Beauty+Center+im+Rank,+Oberdierikonerstrasse+4,+6030+Ebikon,+Switzerland";

export interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export interface ReviewsResponse {
  reviews: GoogleReview[];
  rating?: number;
  user_ratings_total?: number;
  mapsUrl: string;
  source: "api" | "fallback";
}

/**
 * Fetches Google reviews for Beauty Center im Rank.
 * Requires GOOGLE_PLACES_API_KEY in env. Enable "Places API" in Google Cloud Console.
 * Falls back to static reviews if API key is missing or request fails.
 */
export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (apiKey) {
    try {
      // 1. Find place by text search
      const searchRes = await fetch(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?` +
          new URLSearchParams({
            input: "Beauty Center im Rank, Oberdierikonerstrasse 4, 6030 Ebikon, Switzerland",
            inputtype: "textquery",
            fields: "place_id",
            key: apiKey,
          }),
        { next: { revalidate: 3600 } } // Cache 1 hour
      );
      const searchJson = await searchRes.json();

      const placeId = searchJson?.candidates?.[0]?.place_id;
      if (!placeId) {
        return NextResponse.json(buildFallbackResponse());
      }

      // 2. Get place details including reviews
      const detailsRes = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?` +
          new URLSearchParams({
            place_id: placeId,
            fields: "name,rating,reviews,user_ratings_total",
            key: apiKey,
          }),
        { next: { revalidate: 3600 } }
      );
      const detailsJson = await detailsRes.json();

      if (detailsJson.status !== "OK") {
        return NextResponse.json(buildFallbackResponse());
      }

      const result = detailsJson.result;
      const reviews = (result.reviews ?? []).map((r: GoogleReview) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
      }));

      if (reviews.length === 0) {
        return NextResponse.json(buildFallbackResponse());
      }

      return NextResponse.json({
        reviews,
        rating: result.rating,
        user_ratings_total: result.user_ratings_total,
        mapsUrl: GOOGLE_MAPS_PLACE_URL,
        source: "api",
      } satisfies ReviewsResponse);
    } catch {
      return NextResponse.json(buildFallbackResponse());
    }
  }

  return NextResponse.json(buildFallbackResponse());
}

function buildFallbackResponse(): ReviewsResponse {
  return {
    reviews: getStaticReviews(),
    mapsUrl: GOOGLE_MAPS_PLACE_URL,
    source: "fallback",
  };
}

function getStaticReviews(): GoogleReview[] {
  return [
    {
      author_name: "M. K.",
      rating: 5,
      relative_time_description: "vor einem Monat",
      text: "Super freundliches Team und tolle Behandlungen. Bin seit Jahren Stammkundin und komme immer gerne wieder!",
    },
    {
      author_name: "S. B.",
      rating: 5,
      relative_time_description: "vor 2 Monaten",
      text: "Sehr professionell und einfühlsam. Die Gesichtsbehandlung war wunderbar entspannend. Empfehle ich sehr weiter.",
    },
    {
      author_name: "C. M.",
      rating: 5,
      relative_time_description: "vor 3 Monaten",
      text: "Hervorragender Service und liebevolle Beratung. Das Beauty Center im Rank ist eine echte Bereicherung in der Region.",
    },
  ];
}
