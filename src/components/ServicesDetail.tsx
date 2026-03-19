"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services, siteConfig } from "@/data/site";
import { PageHero } from "./PageHero";
import { useBooking } from "@/lib/BookingContext";

export function ServicesDetail() {
  const { openBooking } = useBooking();
  return (
    <div>
      <PageHero
        image="/images/heroes/angebot.png"
        imageAlt="Professionelle Gesichtsbehandlung im Beauty Center"
        title="Unser Angebot"
        subtitle="Professionelle Kosmetikbehandlungen für strahlende Haut und Wohlbefinden."
      />

      {/* Each service */}
      <div className="divide-y divide-stone-100">
        {services.map((service, idx) => (
          <section
            key={service.id}
            id={service.slug}
            className={`py-16 sm:py-24 ${idx % 2 === 1 ? "bg-stone-50" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={idx % 2 === 1 ? "lg:order-2" : ""}
                >
                  {service.id === "byonik" && "videoUrl" in service && service.videoUrl ? (
                    /* Byonik: video primary, images secondary */
                    <div className="space-y-4">
                      <div className="overflow-hidden rounded-2xl shadow-lg">
                        <div className="relative aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${getYouTubeId(service.videoUrl)}`}
                            title="Byonik Vorstellung"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                          <Image
                            src={service.imageSecondary}
                            alt={`${service.title} Detail`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Other services: images primary, video if any */
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl sm:col-span-1">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-2xl">
                          <Image
                            src={service.imageSecondary}
                            alt={`${service.title} Detail`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                        </div>
                      </div>
                      {"videoUrl" in service && service.videoUrl && (
                        <div className="mt-6 overflow-hidden rounded-2xl">
                          <div className="relative aspect-video">
                            <iframe
                              src={`https://www.youtube.com/embed/${getYouTubeId(service.videoUrl)}`}
                              title="Byonik Vorstellung"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 h-full w-full"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={idx % 2 === 1 ? "lg:order-1" : ""}
                >
                  <h2 className="font-serif text-2xl font-light text-stone-800 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-stone-600">{service.description}</p>
                  <button
                    type="button"
                    onClick={openBooking}
                    className="mt-8 inline-flex rounded-full bg-rose-600 px-6 py-3 font-medium text-white transition-colors hover:bg-rose-700"
                  >
                    Online Buchen
                  </button>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\s]+)/);
  return match ? match[1] : "";
}
