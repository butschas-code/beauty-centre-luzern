"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig, navLinks } from "@/data/site";
import { useBooking } from "@/lib/BookingContext";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-stone-950/95 backdrop-blur-md border-b border-stone-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8 sm:h-20 sm:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0">
            <Image
              src="/images/logo.png"
              alt=""
              fill
              className={`object-contain ${isDark ? "invert" : "invert drop-shadow-md"}`}
              sizes="36px"
              priority
            />
          </div>
          <span
            className={`hidden font-display text-sm font-semibold uppercase tracking-wider sm:block ${
              isDark ? "text-white" : "text-white drop-shadow-lg"
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-rose-400"
                  : isDark
                    ? "text-stone-300 hover:text-white"
                    : "text-white/90 hover:text-white drop-shadow-sm"
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
            className={`hidden transition-colors hover:text-rose-400 sm:flex ${
              isDark ? "text-stone-400" : "text-white/80"
            }`}
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            className={`hidden items-center gap-2 text-sm font-medium transition-colors hover:text-rose-400 sm:flex ${
              isDark ? "text-stone-400" : "text-white/90"
            }`}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <button
            type="button"
            onClick={openBooking}
            className="hidden rounded-sm bg-rose-600 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-rose-500 sm:block"
          >
            Buchen
          </button>
          <button
            type="button"
            className={`rounded-sm p-2 transition-colors md:hidden ${
              isDark ? "text-stone-300 hover:bg-stone-800" : "text-white hover:bg-white/10"
            }`}
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
            className="overflow-hidden border-t border-stone-800 bg-stone-950 md:hidden"
          >
            <nav className="flex flex-col gap-0 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-3 py-3 text-base font-medium text-stone-300 hover:bg-stone-800 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm px-3 py-3 text-base font-medium text-stone-300 hover:bg-stone-800 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 rounded-sm px-3 py-3 text-base font-medium text-stone-300 hover:bg-stone-800 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <button
                type="button"
                onClick={() => {
                  openBooking();
                  setMobileOpen(false);
                }}
                className="mt-2 w-full rounded-sm bg-rose-600 px-4 py-3 text-center font-display text-sm font-semibold uppercase tracking-widest text-white"
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
