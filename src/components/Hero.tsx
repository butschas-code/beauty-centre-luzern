"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useBooking } from "@/lib/BookingContext";

export function Hero() {
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/header.jpg"
          alt="Beauty Center im Rank"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-900/50" />
      </div>
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="font-serif text-4xl font-light tracking-wide text-white sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="text-xl text-rose-100 sm:text-2xl">{siteConfig.tagline}</p>
          <p className="mx-auto max-w-xl text-lg text-white/90">
            Wir freuen uns auf Ihren Besuch! Bei uns stehen Sie als Kunde mit Ihren Wünschen und
            Bedürfnissen im Vordergrund. Unsere Arbeit ist nicht nur unser Beruf, sondern auch unsere
            Leidenschaft.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={siteConfig.contact.phoneHref}
            className="rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-stone-800"
          >
            {siteConfig.contact.phone}
          </a>
          <button
            type="button"
            onClick={openBooking}
            className="rounded-full bg-rose-600 px-6 py-3 font-medium text-white transition-colors hover:bg-rose-700"
          >
            Online Buchen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
