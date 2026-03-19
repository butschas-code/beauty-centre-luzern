"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function ServicesPreview() {
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
            Unser Angebot
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-stone-600">
            Von Gesichtsbehandlungen über Byonik bis hin zu Lash &amp; Browstyling – bei uns finden
            Sie ein umfassendes Beauty-Angebot.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Link
                href={`/angebot#${service.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-stone-800 group-hover:text-rose-600">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-rose-600">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/angebot"
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-6 py-3 font-medium text-rose-600 transition-colors hover:bg-rose-50"
          >
            Alle Behandlungen anzeigen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
