"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section className="bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-start lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-sm shrink-0 lg:mx-0 lg:max-w-[280px]"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/studio.jpg"
                  alt="Beauty Center Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 42vw"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/studio2.jpg"
                    alt="Behandlungsraum"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 21vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/studio3.jpg"
                    alt="Studio Ambiente"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 21vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-8 sm:p-12 lg:p-0 lg:pl-8"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-400/80">
              Über uns
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {siteConfig.name}
            </h2>
            <p className="mt-12 max-w-xl text-lg leading-relaxed text-stone-300">
              Das Beauty-Center im Rank gibt es nun seit über 39 Jahren! Wir arbeiten mit
              hochwertigen Marken und auserwählten Produkten.
            </p>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-stone-300">
              Gerne nehmen wir uns Zeit, Sie kompetent und freundlich zu beraten. Es ist uns ein
              grosses Anliegen, individuell und persönlich auf Ihre Wünsche einzugehen.
            </p>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-stone-300">
              An dieser Stelle bedanken wir uns bei unseren treuen Stammkunden, welche uns seit vielen
              Jahren die Treue halten. Wir würden uns freuen, Sie zu unseren zufriedenen Kunden zu
              zählen.
            </p>
            <Link
              href="/ueber-uns"
              className="mt-16 inline-flex items-center border-2 border-rose-500 px-10 py-4 font-display text-xs font-semibold uppercase tracking-widest text-rose-400 transition-colors hover:bg-rose-500 hover:text-white"
            >
              Mehr über uns
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
