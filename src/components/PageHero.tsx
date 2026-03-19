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
        <div className="absolute inset-0 bg-stone-900/55" />
      </div>
      <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <h1 className="font-serif text-3xl font-light tracking-wide text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-200 sm:text-xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
