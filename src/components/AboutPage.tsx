"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team, siteConfig } from "@/data/site";
import { PageHero } from "./PageHero";
import { useBooking } from "@/lib/BookingContext";

export function AboutPage() {
  const { openBooking } = useBooking();
  return (
    <div>
      <PageHero
        image="/images/heroes/ueber-uns.jpg"
        imageAlt="Beauty Salon Interior"
        title="Über uns"
        subtitle="Das Beauty-Center im Rank gibt es nun seit über 39 Jahren."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
          <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/images/team.jpg"
                alt="Unser Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 lg:p-0 lg:pl-12"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                {siteConfig.name}
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
                Wir arbeiten mit hochwertigen Marken und auserwählten Produkten. Gerne nehmen wir
                uns Zeit, Sie kompetent und freundlich zu beraten.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
                Es ist uns ein grosses Anliegen, individuell und persönlich auf Ihre Wünsche
                einzugehen.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
                An dieser Stelle bedanken wir uns bei unseren treuen Stammkunden, welche uns seit
                vielen Jahren die Treue halten. Wir würden uns freuen, Sie zu unseren zufriedenen
                Kunden zu zählen.
              </p>
              <p className="mt-8 font-display text-base font-semibold text-stone-800">
                Wir bedienen die Region: {siteConfig.serviceArea.join(", ")}.
              </p>
              <button
                type="button"
                onClick={openBooking}
                className="mt-10 rounded-sm bg-rose-600 px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-rose-500"
              >
                Online Buchen
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 sm:p-12"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Unser Team
            </h2>
          </motion.div>
          <div className="grid gap-10 sm:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden bg-white"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-lg font-semibold text-stone-900">{member.name}</h3>
                  <p className="mt-2 text-stone-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 sm:p-12"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Unser Studio
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {["studio.jpg", "studio2.jpg", "studio3.jpg", "studio4.jpg"].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Beauty Center Studio ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
