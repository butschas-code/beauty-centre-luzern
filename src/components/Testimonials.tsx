"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
      <section className="bg-stone-100 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
          <div className="p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
          </div>
          <div className="flex min-h-[280px] items-center justify-center p-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-300 border-t-rose-600" />
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-stone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 sm:p-12"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/80">
            Bewertungen
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-stone-600">
            Entdecken Sie Bewertungen von zufriedenen Kundinnen und Kunden auf Google.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="overflow-hidden border-2 border-stone-200 bg-white p-12 sm:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[200px]"
              >
                <div className="mb-8 flex items-center gap-1">
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
                <blockquote className="font-serif text-xl leading-relaxed text-stone-700 sm:text-2xl">
                  "{reviews[currentIndex].text}"
                </blockquote>
                <footer className="mt-12 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {reviews[currentIndex].profile_photo_url && (
                      <img
                        src={reviews[currentIndex].profile_photo_url}
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <cite className="not-italic font-display font-semibold text-stone-900">
                        {reviews[currentIndex].author_name}
                      </cite>
                      <p className="mt-1 text-sm text-stone-500">
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
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-sm border-2 border-stone-200 bg-white p-2 transition-colors hover:border-rose-500 hover:bg-rose-50 sm:-translate-x-12"
                aria-label="Vorherige Bewertung"
              >
                <ChevronLeft className="h-6 w-6 text-stone-600" />
              </button>
              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-sm border-2 border-stone-200 bg-white p-2 transition-colors hover:border-rose-500 hover:bg-rose-50 sm:translate-x-12"
                aria-label="Nächste Bewertung"
              >
                <ChevronRight className="h-6 w-6 text-stone-600" />
              </button>
            </>
          )}

          {reviews.length > 1 && (
            <div className="mt-16 flex justify-center gap-2 p-4">
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
