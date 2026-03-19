"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const fullAddress = `${siteConfig.contact.address}, ${siteConfig.contact.zip} ${siteConfig.contact.city}`;

  return (
    <section className="border-t border-stone-800 bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 sm:p-12"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-400/80">
            Kontakt
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Wir sind für Sie da
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-stone-400">
            Rufen Sie an, schreiben Sie uns oder kommen Sie vorbei.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <a
            href={siteConfig.contact.phoneHref}
            className="group border border-stone-800 bg-stone-900/50 p-10 sm:p-12 transition-colors hover:border-rose-500/30"
          >
            <Phone className="h-8 w-8 text-rose-500" />
            <h3 className="mt-8 font-display font-semibold text-white">Telefon</h3>
            <p className="mt-4 text-stone-400">{siteConfig.contact.phone}</p>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group border border-stone-800 bg-stone-900/50 p-10 sm:p-12 transition-colors hover:border-rose-500/30"
          >
            <Mail className="h-8 w-8 text-rose-500" />
            <h3 className="mt-8 font-display font-semibold text-white">E-Mail</h3>
            <p className="mt-4 break-all text-stone-400">{siteConfig.contact.email}</p>
          </a>
          <a
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-stone-800 bg-stone-900/50 p-10 sm:p-12 transition-colors hover:border-rose-500/30"
          >
            <MapPin className="h-8 w-8 text-rose-500" />
            <h3 className="mt-8 font-display font-semibold text-white">Adresse</h3>
            <p className="mt-4 text-stone-400">{fullAddress}</p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm text-rose-400">
              Auf Karte anzeigen
              <ExternalLink className="h-4 w-4" />
            </span>
          </a>
          <div className="border border-stone-800 bg-stone-900/50 p-10 sm:p-12">
            <Clock className="h-8 w-8 text-rose-500" />
            <h3 className="mt-8 font-display font-semibold text-white">Öffnungszeiten</h3>
            <div className="mt-6 space-y-3 text-sm text-stone-400">
              {siteConfig.hours.days.map((d) => (
                <p key={d.day}>
                  {d.day}: {d.hours}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8"
        >
          <div className="overflow-hidden border border-stone-800">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=8.328%2C47.069%2C8.348%2C47.089&layer=mapnik&marker=47.079%3B8.338"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beauty Center im Rank Standort"
              className="h-64 w-full"
            />
          </div>
          <p className="mt-8 text-center">
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs font-semibold uppercase tracking-widest text-rose-400 transition-colors hover:text-rose-300"
            >
              Route planen in Google Maps →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
