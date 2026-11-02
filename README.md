# Adithya Nidhi — Fluid Portfolio

A premium, interactive personal portfolio for international marketing, brand management and strategy.

## Stack

- React
- Vite
- Canvas-based fluid/particle animation
- Lucide React icons
- Responsive CSS

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

## Add your personal files

Place these in `/public`:

```text
/public/headshot.png
/public/Adithya-Nidhi-CV.pdf
```

The site includes:
- Interactive fluid background reacting to mouse movement
- Animated portfolio hero
- Headshot placeholder integrated into the visual system
- CV button
- LinkedIn button
- Email/contact buttons
- Experience timeline
- Impact metrics
- Interactive project case-study modal
- Capabilities
- Education
- Responsive mobile navigation
- Mobile-friendly layout

## Deploy to GitHub Pages

If your repository is named `adithya-portfolio`, update `vite.config.js` with:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/adithya-portfolio/"
});
```

Then build the project and deploy the `dist` folder using GitHub Pages.

## Content source

Portfolio content is based on the supplied Adithya Nidhi portfolio document. Replace/add content in `src/App.jsx` as your experience evolves.
