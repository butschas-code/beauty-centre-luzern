import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Beauty Center im Rank.",
};

export default function ImpressumPage() {
  const fullAddress = `${siteConfig.contact.address}, ${siteConfig.contact.zip} ${siteConfig.contact.city}`;

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <article className="max-w-3xl p-8 sm:p-12">
          <h1 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Impressum
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
            <p className="font-display font-semibold text-stone-900">{siteConfig.name}</p>
            <p>{fullAddress}</p>
            <p>
              Telefon:{" "}
              <a href={siteConfig.contact.phoneHref} className="text-rose-600 hover:underline">
                {siteConfig.contact.phone}
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-rose-600 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="mt-8 text-base text-stone-500">
              Ergänzen Sie bei Bedarf weitere Angaben gemäss schweizerischem Recht (z. B. UID,
              Handelsregistereintrag).
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
