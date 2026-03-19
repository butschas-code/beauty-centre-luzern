"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Send } from "lucide-react";
import { useBooking } from "@/lib/BookingContext";
import { siteConfig, services } from "@/data/site";

export function FloatingBookingForm() {
  const { isOpen, openBooking, closeBooking } = useBooking();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          preferredDate: formData.date,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Fehler beim Senden");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        type="button"
        onClick={openBooking}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-sm bg-rose-600 px-5 py-3 font-display text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-stone-950/50 transition-all hover:bg-rose-500 sm:bottom-8 sm:right-8"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Online Buchen"
      >
        <Calendar className="h-5 w-5" />
        <span className="font-medium">Online Buchen</span>
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm"
              onClick={closeBooking}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 bottom-4 top-auto z-50 max-h-[90vh] overflow-y-auto rounded-sm border-2 border-stone-200 bg-white shadow-2xl sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[85vh] sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-100 bg-white px-6 py-4">
                <h3 className="font-display text-lg font-semibold text-stone-800">Termin buchen</h3>
                <button
                  type="button"
                  onClick={closeBooking}
                  className="rounded-lg p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
                  aria-label="Schliessen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6" onClick={(e) => e.stopPropagation()}>
                {status === "success" ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Send className="h-7 w-7" />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-stone-800">Vielen Dank!</h4>
                    <p className="mt-2 text-stone-600">
                      Ihre Buchungsanfrage wurde gesendet. Wir melden uns in Kürze bei Ihnen.
                    </p>
                    <button
                      type="button"
                      onClick={closeBooking}
                      className="mt-6 rounded-sm bg-rose-600 px-6 py-2 font-display text-sm font-semibold uppercase tracking-widest text-white hover:bg-rose-500"
                    >
                      Schliessen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="booking-service" className="mb-2 block text-sm font-medium text-stone-700">
                        Behandlung *
                      </label>
                      <select
                        id="booking-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                      >
                        <option value="">Wählen Sie eine Behandlung</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="booking-name" className="mb-2 block text-sm font-medium text-stone-700">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="booking-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ihr Name"
                          className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-email" className="mb-2 block text-sm font-medium text-stone-700">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="booking-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ihre@email.ch"
                          className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="booking-phone" className="mb-2 block text-sm font-medium text-stone-700">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="booking-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="041 123 45 67"
                          className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-date" className="mb-2 block text-sm font-medium text-stone-700">
                          Gewünschtes Datum / Zeit
                        </label>
                        <input
                          type="text"
                          id="booking-date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          placeholder="z.B. Mo 25.03. Nachmittag"
                          className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="booking-message" className="mb-2 block text-sm font-medium text-stone-700">
                        Nachricht
                      </label>
                      <textarea
                        id="booking-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Weitere Wünsche oder Anmerkungen..."
                        className="w-full resize-none rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                      />
                    </div>

                    {status === "error" && (
                      <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
                        Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an:{" "}
                        <a href={siteConfig.contact.phoneHref} className="font-medium underline">
                          {siteConfig.contact.phone}
                        </a>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-sm bg-rose-600 py-3 font-display text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-rose-500 disabled:opacity-70"
                    >
                      {status === "sending" ? "Wird gesendet..." : "Anfrage senden"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
