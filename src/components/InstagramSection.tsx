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
    <section className="border-t border-stone-200 bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-3xl font-light text-stone-800 sm:text-4xl">
            Folgen Sie uns auf Instagram
          </h2>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-rose-600 hover:text-rose-700"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">@beautycenterimrank</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-4"
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
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.url}
                alt={img.caption ?? "Beauty Center im Rank Instagram"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                unoptimized={img.url.startsWith("http")}
              />
              <div className="absolute inset-0 bg-stone-900/0 transition-colors group-hover:bg-stone-900/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-stone-500"
        >
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-rose-600 hover:underline"
          >
            Mehr auf Instagram entdecken →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
