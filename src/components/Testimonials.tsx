"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/Beauty+Center+im+Rank,+Oberdierikonerstrasse+4,+6030+Ebikon,+Switzerland";

interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface ReviewsResponse {
  reviews: GoogleReview[];
  rating?: number;
  user_ratings_total?: number;
  mapsUrl: string;
  source: "api" | "fallback";
}

export function Testimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data: ReviewsResponse) => {
        setReviews(data.reviews ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (reviews.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reviews.length]);

  const goTo = (index: number) => {
    const next = ((index % reviews.length) + reviews.length) % reviews.length;
    setCurrentIndex(next);
  };

  if (loading) {
    return (
      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl font-light text-stone-800 sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Entdecken Sie Bewertungen von zufriedenen Kundinnen und Kunden auf Google.
            </p>
          </div>
          <div className="flex min-h-[240px] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-rose-200 border-t-rose-600" />
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="font-serif text-3xl font-light text-stone-800 sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Entdecken Sie Bewertungen von zufriedenen Kundinnen und Kunden auf Google.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[180px]"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= reviews[currentIndex].rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-stone-700 sm:text-xl">
                  "{reviews[currentIndex].text}"
                </blockquote>
                <footer className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {reviews[currentIndex].profile_photo_url && (
                      <img
                        src={reviews[currentIndex].profile_photo_url}
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <cite className="not-italic font-medium text-stone-800">
                        {reviews[currentIndex].author_name}
                      </cite>
                      <p className="text-sm text-stone-500">
                        {reviews[currentIndex].relative_time_description}
                      </p>
                    </div>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {reviews.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-stone-50 sm:-translate-x-12"
                aria-label="Vorherige Bewertung"
              >
                <ChevronLeft className="h-6 w-6 text-stone-600" />
              </button>
              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-stone-50 sm:translate-x-12"
                aria-label="Nächste Bewertung"
              >
                <ChevronRight className="h-6 w-6 text-stone-600" />
              </button>
            </>
          )}

          {reviews.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-8 bg-rose-600"
                      : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`Bewertung ${i + 1} anzeigen`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
