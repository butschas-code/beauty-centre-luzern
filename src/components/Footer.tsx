import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  const fullAddress = `${siteConfig.contact.address}, ${siteConfig.contact.zip} ${siteConfig.contact.city}`;

  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-medium text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm">{siteConfig.tagline}</p>
          </div>

          <div>
            <h4 className="font-medium text-white">Navigation</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-white">Kontakt</h4>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                {fullAddress}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white">Folgen Sie uns</h4>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex gap-6 text-sm">
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
