"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    num: "01",
    title: "Termin buchen",
    description: "Wählen Sie online Ihren Wunschtermin oder rufen Sie uns an.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Behandlung geniessen",
    description: "Wir nehmen uns Zeit für Sie und Ihre individuellen Bedürfnisse.",
  },
  {
    icon: Heart,
    num: "03",
    title: "Strahlend weitergehen",
    description: "Verlassen Sie uns entspannt und mit strahlender Haut.",
  },
];

export function ProcessSection() {
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
            So einfach
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Von der Buchung bis zur Behandlung
          </h2>
        </motion.div>

        <div className="grid gap-16 sm:grid-cols-3 lg:gap-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 sm:p-10"
              >
                <span className="font-display text-6xl font-bold text-stone-200/80 sm:text-7xl">
                  {step.num}
                </span>
                <div className="mt-8 flex h-14 w-14 items-center justify-center bg-stone-900 text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-10 font-display text-xl font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-stone-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
