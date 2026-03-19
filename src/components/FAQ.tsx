"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Wie buche ich einen Termin?",
    a: "Sie können jederzeit online über unseren Buchungslink buchen oder uns telefonisch unter 041 440 30 10 erreichen. Wir beraten Sie gerne zu den passenden Behandlungen.",
  },
  {
    q: "Welche Zahlungsmöglichkeiten gibt es?",
    a: "Wir akzeptieren Twint, Postkarte, Kredit- und Debitkarten sowie Bar. Gutscheine gelten als Zahlungsmittel.",
  },
  {
    q: "Ist die Byonik-Behandlung schmerzhaft?",
    a: "Nein. Byonik ist ein Bio-Lifting mit Pulse-Triggered-Laser und Hyaluron – völlig schmerzfrei. Die Behandlung orientiert sich an Ihrem Herzschlag für optimale Ergebnisse.",
  },
  {
    q: "Für wen ist Body Sugaring geeignet?",
    a: "Body Sugaring eignet sich für Frauen und Männer. Es ist eine schonende und natürliche Methode der Enthaarung, besonders für empfindliche Haut.",
  },
  {
    q: "Wo befindet sich das Beauty Center?",
    a: "Wir sind in der Oberdierikonerstrasse 4, 6030 Ebikon – zentral in der Region Luzern. Ebikon ist gut erreichbar aus Luzern, Root, Gisikon, Adligenswil und Meggen.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-stone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-8 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 sm:p-12"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/80">
            FAQ
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Häufige Fragen
          </h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border-2 transition-all ${
                  isOpen
                    ? "border-rose-500/50 bg-white shadow-lg"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-6 p-8 text-left sm:p-10"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span
                    className={`font-display text-sm font-bold ${
                      isOpen ? "text-rose-600" : "text-stone-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg font-semibold text-stone-900">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center transition-colors ${
                      isOpen ? "bg-rose-600 text-white" : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-stone-100 px-8 pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8">
                        <p className="pl-12 text-base leading-relaxed text-stone-600 sm:pl-14">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
