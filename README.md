# Global Printers

Portfolio website for **[Global Printers](https://globalprinters.in)** — my dad's offset printing business in Bhilwara, Rajasthan.

Built to give a 30+ year old print shop a real web presence: portfolio of work, contactable hours, and the local SEO needed to actually show up on Google's Map Pack.

## Stack

- **Next.js (App Router)** + TypeScript
- **Tailwind CSS**
- **JSON-LD `LocalBusiness` schema** for local SEO
- Deployed on Vercel

## What's interesting here

- **Local SEO** — `LocalBusiness` schema, NAP consistency, Bhilwara keyword coverage in titles/headings
- **Image-heavy portfolio** — Next/Image with optimized sizing for slow mobile networks
- **Contact-first design** — phone number reachable in two taps from any page

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

Pushes to `main` deploy automatically via Vercel.
