/**
 * Beauty Center im Rank - Business configuration
 * Centralized data for easy editing and reuse across the site
 */

export const siteConfig = {
  name: "Beauty Center im Rank",
  tagline: "Ihr Beauty-Experte in der Region Luzern",
  description: "Beauty Center im Rank – Ihr Kosmetikstudio in Ebikon bei Luzern. Gesichtsbehandlungen, Byonik, Lash- & Browstyling, Haarentfernung. Seit über 39 Jahren Ihre Beauty-Experten.",
  city: "Ebikon",
  region: "Luzern",
  serviceArea: ["Ebikon", "Luzern", "Root", "Gisikon", "Adligenswil", "Meggen"],
  founded: 1985, // ~39 years ago
  contact: {
    phone: "041 440 30 10",
    phoneHref: "tel:+41414403010",
    email: "info@beauty-center-luzern.ch",
    address: "Oberdierikonerstrasse 4",
    zip: "6030",
    city: "Ebikon",
    mapsUrl: "https://maps.google.com/?q=Oberdierikonerstrasse+4+6030+Ebikon",
  },
  hours: {
    weekdays: "9.00 bis 18.30",
    saturday: "9.00 bis 16.00",
    days: [
      { day: "Mo", hours: "9.00 bis 18.30" },
      { day: "Di", hours: "9.00 bis 18.30" },
      { day: "Mi", hours: "9.00 bis 18.30" },
      { day: "Do", hours: "9.00 bis 18.30" },
      { day: "Fr", hours: "9.00 bis 18.30" },
      { day: "Sa", hours: "9.00 bis 16.00" },
    ],
  },
  bookingUrl: "https://booking.localsearch.ch/bookings/beauty-center-im-rank/services?locale=de&origin=standalone",
  social: {
    instagram: "https://www.instagram.com/beautycenterimrank/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/angebot", label: "Angebot" },
  { href: "/preise", label: "Preise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const services = [
  {
    id: "gesichtsbehandlungen",
    title: "Gesichtsbehandlungen",
    slug: "gesichtsbehandlungen",
    shortDescription: "Professionelle Gesichtspflege für strahlende Haut",
    description: "Das Beauty-Center im Rank bietet Ihnen verschiedene Gesichtsbehandlungen an: Behandlung der Problemhaut mit Jugend- oder Alters-Akne, Collagen-Fliess, Alginat-Masken, Aromaöl, Lymphdrainage im Gesicht, Kopf, Nacken und Dekolleté. Maria Galland Spezialbehandlungen und mehr.",
    image: "/images/gesichtesbehandlung.jpg",
    imageSecondary: "/images/gesichtesbehandlung2.jpg",
  },
  {
    id: "byonik",
    title: "Byonik",
    slug: "byonik",
    shortDescription: "Bio-Lifting mit Pulse-Triggered-Laser & Hyaluron",
    description: "Das erste Bio-Lifting, das sich an Ihrem Herzschlag orientiert. Für sichtbar jüngere, straffere Haut und strahlenden Teint. Völlig schmerzfrei!",
    image: "/images/byonik.jpg",
    imageSecondary: "/images/byonik2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6MP1xEV9o6Q",
  },
  {
    id: "lash-browstyling",
    title: "Lash- & Browstyling by Refectocil",
    slug: "lash-browstyling",
    shortDescription: "Die Spezialisten für Wimpern und Augenbrauen",
    description: "Spezialisten für Augenbrauenkorrektur und -formen. Wimpernfärben und Brauenfärben. Spezielle Produkte zur Wachstumsförderung und Verlängerung der Wimpern und Augenbrauen.",
    image: "/images/lash.jpg",
    imageSecondary: "/images/lash2.jpg",
  },
  {
    id: "haarentfernung",
    title: "Haarentfernung",
    slug: "haarentfernung",
    shortDescription: "Sanftes Waxing und Body Sugaring",
    description: "Die sanfte Haarentfernung mit Waxing oder Body Sugaring für Frauen und Männer. Eine schonende und natürliche Methode der Enthaarung.",
    image: "/images/haarentfernung.jpg",
    imageSecondary: "/images/haarentfernung2.jpg",
  },
  {
    id: "diverses",
    title: "Diverses",
    slug: "diverses",
    shortDescription: "Manicure, Pedicure und mehr",
    description: "Lassen Sie es sich gut gehen. Wir verwöhnen gerne Ihre Hände und Füsse bei uns im Beauty-Center im Rank. Manicure, Pedicure, Shellac und Aromatherapie.",
    image: "/images/diverses.jpg",
    imageSecondary: "/images/diverses2.jpg",
  },
] as const;

export const modeApero = {
  title: "Mode Apéro",
  description: "Wir führen eine vielfältige Auswahl an Kleidern, Taschen und ausgewählten Accessoires.",
  eventNote: "Der Mode-Apéro Event im Frühling und im Herbst mit den neusten Trends von Mode und Accessoires.",
  spring2026: {
    dates: ["Mittwoch 29. April 11 – 18:30 Uhr", "Donnerstag 30. April 09 – 13:00 Uhr", "Freitag 01. Mai 09 – 13:00 Uhr"],
  },
} as const;

export const team = [
  {
    name: "Janin Amstutz",
    role: "Geschäftsführerin",
    image: "/images/janin.jpg",
  },
  {
    name: "Cristhina Ballesteros",
    role: "Kosmetikerin",
    image: "/images/Cristhina.jpg",
  },
  {
    name: "Mirjam Burri",
    role: "Kosmetikerin",
    image: "/images/Mirjam.jpg",
  },
] as const;

export const pricing = {
  facial: [
    { name: "Standard Gesichtsbehandlung", price: "170.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Massage, Maske & Abschlusspflege" },
    { name: "Gesichtsbehandlung mit Alginat-Maske", price: "200.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Massage, Alginat-Maske & Abschlusspflege" },
    { name: "Spezial Gesichtsbehandlung mit Collagen-Fliess", price: "190.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Massage, Collagen-Fliess-Maske & Abschlusspflege" },
    { name: "Spezial Gesichtsbehandlung mit Aroma-Ölen", price: "185.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Massage mit Aroma-Ölen, Maske & Abschlusspflege" },
    { name: "Spezial Gesichtsbehandlung mit Fruchtsäurepeeling", price: "198.-" },
    { name: "Wellness Behandlung mit Alginat-Maske", price: "145.-", includes: "Brauen zupfen, Peeling, Serum, Massage, Maske & Abschlusspflege" },
    { name: "Jeunesse Gesichtsbehandlung (Tiefenreinigung gegen Akne)", price: "190.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Maske & Abschlusspflege" },
    { name: "Cocon Behandlung Maria Galland", price: "195.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Massage, Cocon-Maske, Abschlusspflege" },
    { name: "Thalasso Gesichtsbehandlung Maria Galland", price: "190.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Spezial Maske, Abschlusspflege" },
    { name: "Gesichtsbehandlung mit Lymphdrainage nach Dr. Vodder", price: "190.-" },
    { name: "Ayurveda Gesichts Dekolletté Behandlung", price: "140.-" },
    { name: "Micro-Derm-Abrasion Abrahydrid mit Skin Jet", price: "195.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Maske & Abschlusspflege" },
    { name: "Micro-Derm-Abrasion mit Skin Jet und VPL Massage", price: "250.- / 190.-", includes: "Brauen zupfen, Peeling, Unreinheiten ausreinigen, Serum, Maske & Abschlusspflege" },
  ],
  byonik: [
    { name: "Inzion", price: "270.- / 250.- im Abo" },
    { name: "Byonik Blau", price: "270.- / 250.- im Abo" },
    { name: "Byonik Orange", price: "250.- / 230.- im Abo" },
    { name: "Byonik Rot / Akne Behandlung", price: "195.- / 140.-" },
  ],
  lashes: [
    { name: "Brauen zupfen", price: "35.-" },
    { name: "Brauen färben", price: "30.-" },
    { name: "Wimpern färben", price: "35.-" },
    { name: "Browlifting mit formen und färben", price: "102.-" },
    { name: "Wimperlifting", price: "85.-" },
    { name: "Wimpernlifting mit färben", price: "102.-" },
  ],
  hairRemoval: {
    sugar: [
      { name: "Achseln", price: "45.-" },
      { name: "Oberlippe / Kinn", price: "je 35.-" },
      { name: "Oberlippe & Kinn", price: "40.-" },
      { name: "Ganzes Gesicht", price: "52.-" },
      { name: "Arme", price: "62.-" },
      { name: "Halbe Beine", price: "72.-" },
      { name: "Ganze Beine", price: "94.-" },
      { name: "Bikini Rand", price: "48.-" },
      { name: "Bikini Brazil / mit Po", price: "68.- / 78.- je nach Aufwand" },
      { name: "Brust", price: "78.-" },
      { name: "Rücken", price: "78.-" },
    ],
    wax: [
      { name: "Achseln", price: "35.-" },
      { name: "Oberlippe / Kinn", price: "30.- / 25.-" },
      { name: "Oberlippe & Kinn", price: "35.-" },
      { name: "Ganzes Gesicht", price: "45.-" },
      { name: "Arme", price: "55.-" },
      { name: "Halbe Beine", price: "62.-" },
      { name: "Ganze Beine", price: "88.-" },
      { name: "Bikini Rand", price: "38.-" },
      { name: "Bikini Brazil / mit Po", price: "60.- / 70.- je nach Aufwand" },
      { name: "Brust", price: "75.-" },
      { name: "Rücken", price: "75.-" },
    ],
  },
  diverse: [
    { name: "Manicure ohne Lack / mit Lack", price: "82.- / 100.-" },
    { name: "Manicure mit Shellac + entfernen", price: "94.- / 96.-" },
    { name: "Cocon Handmaske", price: "30.-" },
    { name: "Pedicure ohne Lack / mit Lack", price: "102.- / 120.-" },
    { name: "Pedicure mit Shellac / mit entfernen", price: "94.- / 96.-" },
    { name: "Nur entfernen von Shellac", price: "30.-" },
    { name: "Aromatherapie Füsse", price: "50.-" },
    { name: "Pedicure mit Aromatherapie", price: "125.-" },
    { name: "Veröden von Couperose mit Appilus", price: "pro Minute 2.-" },
    { name: "Entfernen von Altersflecken", price: "pro Fleck 30.-" },
  ],
  paymentMethods: ["Twint", "Postkarte", "Kredit- und Debitkarten", "Bar"],
} as const;

// Placeholder: Replace with verified Google review count when available
export const reviewCount = null as number | null;

/** Google Maps place URL for Beauty Center im Rank */
export const googleMapsReviewsUrl =
  "https://www.google.com/maps/place/Beauty+Center+im+Rank,+Oberdierikonerstrasse+4,+6030+Ebikon,+Switzerland";
