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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="font-serif text-3xl font-light text-stone-800 sm:text-4xl">
            Warum Beauty Center im Rank?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            In der Region {siteConfig.region} vertrauen uns Kundinnen und Kunden seit Jahrzehnten
            ihre Haut und ihr Wohlbefinden an.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                {(() => {
                  const Icon = benefit.icon;
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
              <h3 className="mt-4 font-serif text-lg font-medium text-stone-800">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
