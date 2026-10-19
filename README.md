# Swetasmita — Portfolio

Single-page portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** (dark theme only).

## Sections

- Hero, about, skills, projects, contact
- Resume PDF and Calendly links

Removed from the previous version: blog filler content, gallery, reels/video player, light/dark theme toggle, Bootstrap, Material UI, and extra route pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (EmailJS)

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Assets

Place project screenshots and `profile_photo.png` under `public/images/`, and your resume under `public/docs/`. Paths are defined in `lib/data.ts`.
