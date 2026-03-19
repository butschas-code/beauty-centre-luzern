"use client";

/**
 * Contact form – structured for later connection to:
 * - Formspree / Netlify Forms / similar form handlers
 * - Email API (Resend, SendGrid)
 * - CRM integrations
 * Add action and method when connecting to backend.
 */
export function ContactForm() {
  return (
    <form
      action="#"
      method="POST"
      className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
      encType="application/x-www-form-urlencoded"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-700">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
            placeholder="ihre@email.ch"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-stone-700">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
          placeholder="041 123 45 67"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-700">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-stone-200 px-4 py-3 text-stone-800 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
          placeholder="Ihre Nachricht..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-rose-600 py-3 font-medium text-white transition-colors hover:bg-rose-700 sm:w-auto sm:px-8"
      >
        Nachricht senden
      </button>
    </form>
  );
}
