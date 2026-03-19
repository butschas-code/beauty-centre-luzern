"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ServicesPreview() {
  return (
    <section className="bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 sm:p-12"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-400/80">
            Unser Angebot
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Behandlungen
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-stone-400">
            Von Gesichtsbehandlungen über Byonik bis hin zu Lash &amp; Browstyling – bei uns finden
            Sie ein umfassendes Beauty-Angebot.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const isTall = i === 0;
            return (
              <motion.div
                key={service.id}
                variants={item}
                className={isTall ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
              >
                <Link
                  href={`/angebot#${service.slug}`}
                  className="group relative block h-full overflow-hidden bg-stone-900"
                >
                  <div
                    className={`relative overflow-hidden ${
                      isTall ? "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[340px]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={
                        isTall
                          ? "(max-width: 1024px) 100vw, 33vw"
                          : "(max-width: 1024px) 100vw, 50vw"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90" />
                  </div>
                  <div className="p-8 sm:p-10">
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 line-clamp-2 text-base leading-relaxed text-stone-400">
                      {service.shortDescription}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-rose-400 transition-colors group-hover:text-rose-300">
                      Mehr erfahren
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8"
        >
          <Link
            href="/angebot"
            className="inline-flex items-center gap-2 border border-stone-600 px-8 py-4 font-display text-xs font-semibold uppercase tracking-widest text-stone-300 transition-colors hover:border-rose-500/50 hover:text-rose-400"
          >
            Alle Behandlungen
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
