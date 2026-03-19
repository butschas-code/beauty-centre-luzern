import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung des Beauty Center im Rank.",
};

export default function DatenschutzPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <article className="max-w-3xl p-8 sm:p-12">
          <h1 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Datenschutz
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
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
            <p className="text-base text-stone-500">
              Bitte ersetzen Sie diesen Inhalt durch die vollständige, für diese Website gültige
              Datenschutzerklärung.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
