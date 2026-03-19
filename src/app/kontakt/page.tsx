import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie das Beauty Center im Rank in Ebikon – Telefon, E-Mail, Adresse und Öffnungszeiten.",
};

export default function KontaktPage() {
  return <ContactPage />;
}
