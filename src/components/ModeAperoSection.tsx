"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { modeApero } from "@/data/site";

export function ModeAperoSection() {
  return (
    <section className="bg-stone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-start lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-sm shrink-0 lg:mx-0 lg:max-w-[320px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/mode.jpg"
                alt="Mode Apéro"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-8 sm:p-12 lg:p-0 lg:pl-8"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/80">
              Mode & Accessoires
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {modeApero.title}
            </h2>
            <p className="mt-12 max-w-xl text-lg leading-relaxed text-stone-600 sm:text-xl">
              {modeApero.description}
            </p>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-stone-500">
              {modeApero.eventNote}
            </p>
            <div className="mt-20 border-l-4 border-rose-600 bg-stone-900 p-12 text-white">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-rose-400">
                Mode Apéro Frühling 2026
              </p>
              <ul className="mt-8 space-y-4 text-stone-300">
                {modeApero.spring2026.dates.map((date) => (
                  <li key={date} className="leading-relaxed">{date}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
