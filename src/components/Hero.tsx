"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useBooking } from "@/lib/BookingContext";

export function Hero() {
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/header.jpg"
          alt="Beauty Center im Rank"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.6)_0%,transparent_50%)]" />
      </div>

      <div className="relative flex min-h-[100vh] items-end pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="mx-auto w-full max-w-6xl px-8 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-rose-400/90"
            >
              {siteConfig.region} · Seit 1985
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 font-serif text-xl text-stone-300 sm:text-2xl"
            >
              {siteConfig.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-stone-400"
            >
              Wir freuen uns auf Ihren Besuch! Bei uns stehen Sie als Kunde mit Ihren Wünschen und
              Bedürfnissen im Vordergrund.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={openBooking}
                className="rounded-sm bg-rose-600 px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-rose-500"
              >
                Online Buchen
              </button>
              <a
                href={siteConfig.contact.phoneHref}
                className="rounded-sm border-2 border-white/40 bg-white/5 px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/10"
              >
                {siteConfig.contact.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
