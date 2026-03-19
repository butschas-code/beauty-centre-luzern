"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/site";
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

      <div className="divide-y divide-stone-200">
        {services.map((service, idx) => (
          <section
            key={service.id}
            id={service.slug}
            className={`py-24 sm:py-32 ${idx % 2 === 1 ? "bg-stone-100" : "bg-white"}`}
          >
            <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
              <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={idx % 2 === 1 ? "lg:order-2" : ""}
                >
                  {service.id === "byonik" && "videoUrl" in service && service.videoUrl ? (
                    <div className="space-y-6">
                      <div className="overflow-hidden">
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
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden">
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
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative col-span-2 aspect-[16/10] overflow-hidden sm:col-span-1">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                        <div className="relative aspect-square overflow-hidden">
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
                        <div className="mt-8 overflow-hidden">
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
                  className={`p-8 sm:p-12 lg:p-0 ${idx % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}
                >
                  <h2 className="font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
                    {service.description}
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
        ))}
      </div>
    </div>
  );
}

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\s]+)/);
  return match ? match[1] : "";
}
