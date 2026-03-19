"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { modeApero } from "@/data/site";

export function ModeAperoSection() {
  return (
    <section className="bg-stone-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/mode.jpg"
              alt="Mode Apéro"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="font-serif text-3xl font-light sm:text-4xl">{modeApero.title}</h2>
            <p className="mt-6 text-stone-300">{modeApero.description}</p>
            <p className="mt-4 text-sm text-stone-400">{modeApero.eventNote}</p>
            <div className="mt-8 rounded-xl border border-white/20 bg-white/5 p-6">
              <p className="font-medium text-rose-200">Mode Apéro Frühling 2026</p>
              <ul className="mt-3 space-y-2 text-stone-300">
                {modeApero.spring2026.dates.map((date) => (
                  <li key={date}>{date}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
