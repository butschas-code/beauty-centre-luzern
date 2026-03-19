"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Termin buchen",
    description: "Wählen Sie online Ihren Wunschtermin oder rufen Sie uns an.",
  },
  {
    icon: Sparkles,
    title: "Behandlung geniessen",
    description: "Wir nehmen uns Zeit für Sie und Ihre individuellen Bedürfnisse.",
  },
  {
    icon: Heart,
    title: "Strahlend weitergehen",
    description: "Verlassen Sie uns entspannt und mit strahlender Haut.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="font-serif text-3xl font-light text-stone-800 sm:text-4xl">
            So einfach geht es
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Von der Buchung bis zur Behandlung – alles unkompliziert.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-medium text-stone-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
