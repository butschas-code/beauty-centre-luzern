"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricing } from "@/data/site";
import { PageHero } from "./PageHero";
import { useBooking } from "@/lib/BookingContext";

type TabId = "gesicht" | "byonik" | "wimpern" | "haare" | "diverses";

const tabs: { id: TabId; label: string }[] = [
  { id: "gesicht", label: "Gesicht" },
  { id: "byonik", label: "Byonik" },
  { id: "wimpern", label: "Wimpern & Brauen" },
  { id: "haare", label: "Haarentfernung" },
  { id: "diverses", label: "Diverses" },
];

export function PricingPage() {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<TabId>("gesicht");
  const [hairSubTab, setHairSubTab] = useState<"sugar" | "wax">("sugar");

  return (
    <div>
      <PageHero
        image="/images/heroes/preise.jpg"
        imageAlt="Hochwertige Kosmetikprodukte im Beauty Center"
        title="Preise"
        subtitle={`Twint • Karte • Bar • Gutscheine`}
      />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Introductory text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600">
              Transparente Preise für professionelle Kosmetikbehandlungen. Wir beraten Sie gerne persönlich 
              zu den passenden Anwendungen – wählen Sie unten eine Kategorie und entdecken Sie unser Angebot.
            </p>
          </motion.div>

          {/* Tab navigation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-8 py-5 text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-rose-600 text-white shadow-md shadow-rose-900/20"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "gesicht" && (
              <PricingContent key="gesicht">
                {pricing.facial.map((item, i) => (
                  <PriceCard
                    key={i}
                    index={i}
                    name={item.name}
                    price={item.price}
                    includes={"includes" in item ? item.includes : undefined}
                  />
                ))}
              </PricingContent>
            )}

            {activeTab === "byonik" && (
              <PricingContent key="byonik">
                {pricing.byonik.map((item, i) => (
                  <PriceCard key={i} name={item.name} price={item.price} />
                ))}
              </PricingContent>
            )}

            {activeTab === "wimpern" && (
              <PricingContent key="wimpern">
                {pricing.lashes.map((item, i) => (
                  <PriceCard key={i} name={item.name} price={item.price} />
                ))}
              </PricingContent>
            )}

            {activeTab === "haare" && (
              <PricingContent key="haare">
                <div className="mb-6 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setHairSubTab("sugar")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      hairSubTab === "sugar"
                        ? "bg-rose-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    Sugar
                  </button>
                  <button
                    type="button"
                    onClick={() => setHairSubTab("wax")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      hairSubTab === "wax"
                        ? "bg-rose-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    Wachs
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  {hairSubTab === "sugar" ? (
                    <motion.div
                      key="sugar"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2"
                    >
                      {pricing.hairRemoval.sugar.map((item, i) => (
                        <PriceCard key={i} name={item.name} price={item.price} compact />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="wax"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2"
                    >
                      {pricing.hairRemoval.wax.map((item, i) => (
                        <PriceCard key={i} name={item.name} price={item.price} compact />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </PricingContent>
            )}

            {activeTab === "diverses" && (
              <PricingContent key="diverses">
                {pricing.diverse.map((item, i) => (
                  <PriceCard key={i} name={item.name} price={item.price} />
                ))}
              </PricingContent>
            )}
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-14 text-center"
          >
            <p className="mb-4 text-sm text-stone-500">
              Gutscheine gelten als Zahlungsmittel.
            </p>
            <button
              type="button"
              onClick={openBooking}
              className="rounded-full bg-rose-600 px-8 py-3 font-medium text-white shadow-lg shadow-rose-900/20 transition-all hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-900/25"
            >
              Online Buchen
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function PricingContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mx-auto max-w-2xl space-y-3"
    >
      {children}
    </motion.div>
  );
}

function PriceCard({
  name,
  price,
  includes,
  compact,
  index = 0,
}: {
  name: string;
  price: string;
  includes?: string;
  compact?: boolean;
  index?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.25 }}
      className={`group overflow-hidden rounded-xl border border-stone-200/80 bg-white transition-all hover:border-rose-200 hover:shadow-md hover:shadow-stone-200/50 ${
        compact ? "px-5 py-4" : "px-6 py-5"
      }`}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0 flex-1">
          <p className="font-medium leading-snug text-stone-800">{name}</p>
          {includes && (
            <>
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-rose-600 hover:text-rose-700"
              >
                {expanded ? "Weniger" : "Leistungen anzeigen"}
              </button>
              <AnimatePresence>
                {expanded && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 overflow-hidden text-sm leading-relaxed text-stone-600"
                  >
                    {includes}
                  </motion.p>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
        <span className="shrink-0 text-base font-medium tabular-nums text-stone-800">{price}</span>
      </div>
    </motion.div>
  );
}
