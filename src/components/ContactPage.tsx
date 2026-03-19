"use client";

import { motion } from "framer-motion";
import { ContactSection } from "./ContactSection";
import { ContactForm } from "./ContactForm";
import { PageHero } from "./PageHero";

export function ContactPage() {
  return (
    <div>
      <PageHero
        image="/images/heroes/kontakt.jpg"
        imageAlt="Kontakt Beauty Center im Rank"
        title="Wir freuen uns auf Sie!"
        subtitle="Kontaktieren Sie uns – wir beraten Sie gerne."
      />
      <ContactSection />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
