# Beauty Center im Rank – Website

Production-ready website for Beauty Center im Rank, a beauty and cosmetics salon in Ebikon (Luzern region).

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (subtle animations)
- Lucide React (icons)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy (Vercel)

```bash
npm run build
```

Deploy to Vercel: connect the repo or run `vercel` CLI.

## Structure

- `src/data/site.ts` – Business data (edit contact, services, pricing here)
- `src/components/` – Reusable section components
- `src/app/` – Pages and layout

## Placeholders to Verify

1. **Google Maps embed** – Replace the OpenStreetMap iframe in `ContactSection.tsx` with the embed code from Google Maps (Beauty Center im Rank → Share → Embed map).
2. **Contact form** – Connect `ContactForm.tsx` to Formspree, Netlify Forms, or your backend.
3. **Legal pages** – Replace placeholder content in `datenschutz` and `impressum` with actual legal text.

## Images

Images are in `public/images/`. Matched to content by filename (header.jpg, byonik.jpg, etc.).
