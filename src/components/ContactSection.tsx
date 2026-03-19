"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const fullAddress = `${siteConfig.contact.address}, ${siteConfig.contact.zip} ${siteConfig.contact.city}`;

  return (
    <section className="border-t border-stone-200 bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="font-serif text-3xl font-light text-stone-800 sm:text-4xl">
            Kontakt
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Wir sind für Sie da. Rufen Sie an, schreiben Sie uns oder kommen Sie vorbei.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <a
            href={siteConfig.contact.phoneHref}
            className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <Phone className="h-8 w-8 text-rose-600" />
            <h3 className="mt-4 font-medium text-stone-800">Telefon</h3>
            <p className="mt-1 text-stone-600">{siteConfig.contact.phone}</p>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <Mail className="h-8 w-8 text-rose-600" />
            <h3 className="mt-4 font-medium text-stone-800">E-Mail</h3>
            <p className="mt-1 break-all text-stone-600">{siteConfig.contact.email}</p>
          </a>
          <a
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <MapPin className="h-8 w-8 text-rose-600" />
            <h3 className="mt-4 font-medium text-stone-800">Adresse</h3>
            <p className="mt-1 text-stone-600">
              {fullAddress}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm text-rose-600">
              Auf Karte anzeigen
              <ExternalLink className="h-4 w-4" />
            </span>
          </a>
          <div className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm">
            <Clock className="h-8 w-8 text-rose-600" />
            <h3 className="mt-4 font-medium text-stone-800">Öffnungszeiten</h3>
            <div className="mt-2 space-y-1 text-sm text-stone-600">
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
          className="mt-12"
        >
          {/* Replace with Google Maps embed from: Google Maps → Beauty Center im Rank → Teilen → Karte einbetten */}
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
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
          <p className="mt-3 text-center text-sm text-stone-500">
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-rose-600 hover:underline"
            >
              Route planen in Google Maps →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
