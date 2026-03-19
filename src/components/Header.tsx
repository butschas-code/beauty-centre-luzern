"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig, navLinks } from "@/data/site";
import { useBooking } from "@/lib/BookingContext";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-100/50 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-rose-50">
            <Image
              src="/images/studio.jpg"
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="hidden font-serif text-lg font-medium text-stone-800 sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-rose-600"
                  : "text-stone-600 hover:text-rose-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-stone-600 transition-colors hover:text-rose-600 sm:flex"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-stone-700 hover:text-rose-600 sm:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <button
            type="button"
            onClick={openBooking}
            className="hidden rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-700 sm:block"
          >
            Online Buchen
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-stone-600 hover:bg-rose-50 hover:text-rose-600 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-rose-100/50 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-0 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-stone-700 hover:bg-rose-50 hover:text-rose-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-stone-700 hover:bg-rose-50 hover:text-rose-600"
                onClick={() => setMobileOpen(false)}
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-stone-700 hover:bg-rose-50 hover:text-rose-600"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <button
                type="button"
                onClick={() => { openBooking(); setMobileOpen(false); }}
                className="mt-2 w-full rounded-full bg-rose-600 px-4 py-3 text-center font-medium text-white"
              >
                Online Buchen
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
