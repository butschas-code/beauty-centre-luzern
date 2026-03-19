import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung des Beauty Center im Rank.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-serif text-3xl font-light text-stone-800">Datenschutz</h1>
      <p className="mt-6 text-stone-600">
        {/* PLACEHOLDER: Replace with actual Datenschutzerklärung from existing site or legal counsel */}
        Die Datenschutzerklärung finden Sie auf der bestehenden Website:{" "}
        <a
          href="https://www.beauty-center-luzern.ch/Datenschutz.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-600 hover:underline"
        >
          beauty-center-luzern.ch
        </a>
        .
      </p>
      <p className="mt-4 text-sm text-stone-500">
        Bitte ersetzen Sie diesen Inhalt durch die vollständige, für diese Website gültige
        Datenschutzerklärung.
      </p>
    </div>
  );
}
