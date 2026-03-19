import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Das Beauty-Center im Rank – seit über 39 Jahren Ihr Beauty-Experte in Ebikon bei Luzern.",
};

export default function UeberUnsPage() {
  return <AboutPage />;
}
