import type { Metadata } from "next";
import { PricingPage } from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "Preise",
  description: "Preisübersicht für Gesichtsbehandlungen, Byonik, Lash & Brow, Haarentfernung und mehr.",
};

export default function PreisePage() {
  return <PricingPage />;
}
