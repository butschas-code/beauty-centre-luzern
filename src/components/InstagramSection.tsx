"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";

interface InstagramImage {
  url: string;
  permalink?: string;
  caption?: string;
}

export function InstagramSection() {
  const [images, setImages] = useState<InstagramImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || images.length === 0) return null;

  return (
    <section className="border-t border-stone-200 bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col gap-10 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-12"
        >
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-400/80">
              Social
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Folgen Sie uns
            </h2>
          </div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-rose-400 transition-colors hover:text-rose-300"
          >
            @beautycenterimrank
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
        >
          {images.slice(0, 8).map((img, i) => (
            <motion.a
              key={img.url + i}
              href={img.permalink ?? siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={img.url}
                alt={img.caption ?? "Beauty Center im Rank Instagram"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                unoptimized={img.url.startsWith("http")}
              />
              <div className="absolute inset-0 bg-stone-950/0 transition-colors group-hover:bg-stone-950/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-10 w-10 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 text-center sm:p-12"
        >
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs font-semibold uppercase tracking-widest text-stone-400 transition-colors hover:text-rose-400"
          >
            Mehr auf Instagram →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
