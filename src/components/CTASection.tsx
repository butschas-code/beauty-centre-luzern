"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";

export function CTASection() {
  const { openBooking } = useBooking();
  return (
    <section className="bg-rose-600 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
            Wir freuen uns auf Ihren Besuch
          </h2>
          <p className="mt-4 text-lg text-rose-100">
            Bei uns stehen Sie als Kunde mit Ihren Wünschen und Bedürfnissen im Vordergrund.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 font-medium text-rose-600 transition-colors hover:bg-rose-50 sm:w-auto"
            >
              Online Buchen
            </button>
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-white px-8 py-4 font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Kontakt
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
