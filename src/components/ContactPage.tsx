"use client";

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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-2xl p-8 sm:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
