"use client";

import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Users } from "lucide-react";
import { siteConfig } from "@/data/site";

const benefits = [
  {
    icon: Heart,
    title: "Persönliche Beratung",
    description: "Individuell und persönlich gehen wir auf Ihre Wünsche ein. Sie stehen bei uns im Mittelpunkt.",
  },
  {
    icon: Star,
    title: "Leidenschaft & Kompetenz",
    description: "Unsere Arbeit ist nicht nur unser Beruf, sondern auch unsere Leidenschaft. Qualität ist selbstverständlich.",
  },
  {
    icon: Sparkles,
    title: "Hochwertige Produkte",
    description: "Wir arbeiten mit Marken wie Maria Galland und Refectocil sowie auserwählten Premium-Produkten.",
  },
  {
    icon: Users,
    title: "39+ Jahre Erfahrung",
    description: `Das Beauty-Center im Rank gibt es seit über 39 Jahren. Erfahren Sie Tradition und Innovation unter einem Dach.`,
  },
];

export function WhyChooseUs() {
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
            Warum wir
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Beauty Center im Rank
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-stone-600">
            In der Region {siteConfig.region} vertrauen uns Kundinnen und Kunden seit Jahrzehnten
            ihre Haut und ihr Wohlbefinden an.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-l-4 border-stone-200 bg-white p-8 sm:p-10 lg:p-12 transition-all hover:border-rose-500 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-stone-900 text-white">
                {(() => {
                  const Icon = benefit.icon;
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-stone-900">
                {benefit.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-stone-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
