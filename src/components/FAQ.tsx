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
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white py-20 sm:py-24">
      {/* Subtle decorative element */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(190,18,60,0.03)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-rose-600/80">
            FAQ
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-stone-900 sm:text-5xl">
            Häufige Fragen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-stone-500">
            Schnelle Antworten auf die wichtigsten Fragen
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`group rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-rose-200/60 bg-white shadow-lg shadow-stone-200/20"
                    : "border-stone-200/80 bg-white/80 hover:border-stone-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-5 px-6 py-4 text-left sm:px-7 sm:py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      isOpen
                        ? "bg-rose-600 text-white"
                        : "bg-stone-100 text-stone-500 group-hover:bg-stone-200 group-hover:text-stone-700"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif text-lg font-medium text-stone-800 sm:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-rose-50 text-rose-600" : "bg-stone-100 text-stone-400 group-hover:bg-stone-200"
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
                      <div className="border-t border-stone-100 px-6 pb-4 pt-1 sm:px-7 sm:pb-5 sm:pt-2">
                        <p className="pl-14 text-base leading-relaxed text-stone-600">
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
