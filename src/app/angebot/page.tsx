import type { Metadata } from "next";
import { ServicesDetail } from "@/components/ServicesDetail";

export const metadata: Metadata = {
  title: "Angebot",
  description: "Gesichtsbehandlungen, Byonik, Lash- & Browstyling, Haarentfernung – unser vollständiges Beauty-Angebot im Rank.",
};

export default function AngebotPage() {
  return <ServicesDetail />;
}
