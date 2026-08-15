# ALGORITHEC

Official website for **ALGORITHEC** — The AI Decision Engine.

## Stack

- **Next.js 15** — App Router, React Server Components
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first styling with custom design tokens
- **Framer Motion** — Premium animations and micro-interactions
- **Space Grotesk + Inter** — Editorial typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
├── app/                  # Pages (App Router)
│   ├── page.tsx          # Homepage
│   ├── company/          # Company page
│   ├── developers/       # Developers page
│   ├── research/         # Research page
│   ├── careers/          # Careers page
│   ├── blog/             # Blog page
│   └── contact/          # Contact page
├── components/
│   ├── home/             # Homepage sections
│   ├── ui/               # Shared UI primitives
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── Logo.tsx
└── lib/
    └── utils.ts          # Site config & utilities
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#FFFFFF` / `#F7F7F5` |
| Text | `#111111` / `#4B5563` |
| Accent | `#2563EB` |
| Success | `#10B981` |

## License

© ALGORITHEC. All rights reserved.
