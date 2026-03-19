import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Beauty Center im Rank.",
};

export default function ImpressumPage() {
  const fullAddress = `${siteConfig.contact.address}, ${siteConfig.contact.zip} ${siteConfig.contact.city}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-serif text-3xl font-light text-stone-800">Impressum</h1>
      <div className="mt-6 space-y-4 text-stone-600">
        <p className="font-medium text-stone-800">{siteConfig.name}</p>
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
      </div>
      <p className="mt-8 text-sm text-stone-500">
        {/* PLACEHOLDER: Add full legal entity details (UID, Handelsregister, etc.) as required by Swiss law */}
        Ergänzen Sie bei Bedarf weitere Angaben gemäss schweizerischem Recht (z. B. UID,
        Handelsregistereintrag).
      </p>
    </div>
  );
}
