# Ollie — Birthday Editorial

A cinematic birthday microsite built with React, Vite, Tailwind, GSAP, and Lenis.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Use the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

`vercel.json` is included for SPA routing. Optimized images live in `public/photos/`.

## Regenerate images

Place source JPGs in `assets/`, then run:

```bash
npm run optimize-images
```

## Personalize

Edit `src/data/birthday.ts` for names, captions, and the birthday message.
