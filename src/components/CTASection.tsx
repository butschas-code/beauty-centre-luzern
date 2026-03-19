"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";

export function CTASection() {
  const { openBooking } = useBooking();
  return (
    <section className="relative overflow-hidden bg-stone-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(190,18,60,0.12)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Wir freuen uns auf Ihren Besuch
          </h2>
          <p className="mx-auto mt-12 max-w-xl text-lg leading-relaxed text-stone-400">
            Bei uns stehen Sie als Kunde mit Ihren Wünschen und Bedürfnissen im Vordergrund.
          </p>
          <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button
              type="button"
              onClick={openBooking}
              className="w-full rounded-sm bg-rose-600 px-10 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-rose-500 sm:w-auto"
            >
              Online Buchen
            </button>
            <Link
              href="/kontakt"
              className="w-full rounded-sm border-2 border-white/40 bg-transparent px-10 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Kontakt
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
