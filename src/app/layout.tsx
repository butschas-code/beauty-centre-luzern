import type { Metadata } from "next";
import { Geist, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingProvider } from "@/lib/BookingContext";
import { FloatingBookingForm } from "@/components/FloatingBookingForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Beauty Center im Rank | Kosmetik Ebikon Luzern",
    template: "%s | Beauty Center im Rank",
  },
  description:
    "Beauty Center im Rank – Ihr Kosmetikstudio in Ebikon bei Luzern. Gesichtsbehandlungen, Byonik, Lash- & Browstyling, Haarentfernung. Seit über 39 Jahren Ihre Beauty-Experten.",
  keywords: ["Kosmetik", "Ebikon", "Luzern", "Beauty", "Gesichtsbehandlung", "Byonik", "Lash", "Haarentfernung"],
  openGraph: {
    locale: "de_CH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${playfair.variable} ${syne.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <BookingProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingBookingForm />
        </BookingProvider>
      </body>
    </html>
  );
}
