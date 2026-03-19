"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

export function PageHero({ image, imageAlt, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-950/60" />
      </div>
      <div className="relative flex min-h-[50vh] items-center px-8 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-300 sm:text-xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
