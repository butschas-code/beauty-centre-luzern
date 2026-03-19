"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section className="bg-stone-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio.jpg"
                alt="Beauty Center Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/studio2.jpg"
                  alt="Behandlungsraum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/studio3.jpg"
                  alt="Studio Ambiente"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="font-serif text-3xl font-light sm:text-4xl">{siteConfig.name}</h2>
            <p className="mt-6 text-lg text-stone-300">
              Das Beauty-Center im Rank gibt es nun seit über 39 Jahren! Wir arbeiten mit
              hochwertigen Marken und auserwählten Produkten.
            </p>
            <p className="mt-4 text-stone-300">
              Gerne nehmen wir uns Zeit, Sie kompetent und freundlich zu beraten. Es ist uns ein
              grosses Anliegen, individuell und persönlich auf Ihre Wünsche einzugehen.
            </p>
            <p className="mt-4 text-stone-300">
              An dieser Stelle bedanken wir uns bei unseren treuen Stammkunden, welche uns seit vielen
              Jahren die Treue halten. Wir würden uns freuen, Sie zu unseren zufriedenen Kunden zu
              zählen.
            </p>
            <Link
              href="/ueber-uns"
              className="mt-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/20"
            >
              Mehr über uns
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
