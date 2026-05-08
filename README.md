# Aidi Ventures

Nuxt 3 site for Aidi Ventures — the venture investment arm of the Aidi
Ventures Group. Single-page, server-rendered, with a Cal.com booking modal,
Intercom messenger, and an interactive portfolio gallery.

## Getting started

```bash
# Install
npm install

# Dev (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview prod build
npm run preview

# Static site (output to .output/public)
npm run generate
```

Requires Node 18+.

## Project structure

```
.
├── app.vue                     # Root layout — just renders <NuxtPage>
├── nuxt.config.ts              # Head meta, fonts, runtime config (Cal/Intercom IDs)
├── assets/
│   └── css/main.css            # Global stylesheet — design tokens + every component's CSS
├── components/
│   ├── AppNav.vue              # Top-fixed frosted glass nav with brand + CTA
│   ├── HeroSection.vue         # Hero: headline, Cal-trigger CTA, stats, video card
│   ├── PortfolioSection.vue    # Portfolio grid + reactive slide-in modal
│   ├── ContactStrip.vue        # 3-column contact row
│   ├── AppFooter.vue           # Watermarked disclaimer slab
│   └── AidiWordmark.vue        # Brand logo (currentColor-aware)
├── composables/
│   └── usePortfolio.ts         # Portfolio company list + modal state
├── pages/
│   └── index.vue               # Single page composing all sections
├── plugins/
│   ├── cal.client.ts           # Cal.com booking embed (client-only)
│   └── intercom.client.ts      # Intercom messenger (client-only)
└── public/
    └── favicon.svg             # AIDI brand glyph
```

Components in `/components` are auto-imported — no need to import them
explicitly. Same for composables in `/composables`.

## Editing content

### Portfolio companies

Open `composables/usePortfolio.ts`. The `portfolioCompanies` array drives both
the grid and the modal. Each entry has:

```ts
{
  id: 21,                        // Stable numeric id
  name: 'Acme',
  tag: 'Fintech · Banking',      // Center dot is U+00B7 (·)
  image: 'https://…/banner.png', // Banner image
  desc: 'Long-form description shown in the modal.',
  stage: 'Seed',                 // Investment stage
  hq: 'Nigeria',                 // Geographic focus
  url: 'https://acme.com',       // External link
}
```

Just add a new object to the array. The grid and modal will pick it up
automatically — no other changes required.

### Hero copy & video

Edit `components/HeroSection.vue`. The video URL is currently hardcoded;
move it to `runtimeConfig.public.heroVideoUrl` if you want it env-driven.

### Disclaimer text

Edit `components/AppFooter.vue`.

## Configuration

Third-party IDs live in `nuxt.config.ts` under `runtimeConfig.public`. Each
can be overridden at runtime via env var (Nuxt's standard mapping):

| Key                   | Env var                          | Default                              |
|-----------------------|----------------------------------|--------------------------------------|
| `calNamespace`        | `NUXT_PUBLIC_CAL_NAMESPACE`      | `30min`                              |
| `calLink`             | `NUXT_PUBLIC_CAL_LINK`           | `joinaidi/30min`                     |
| `calBrandColor`       | `NUXT_PUBLIC_CAL_BRAND_COLOR`    | `#0c2057`                            |
| `intercomAppId`       | `NUXT_PUBLIC_INTERCOM_APP_ID`    | `vt8ulx74`                           |
| `parentSiteUrl`       | `NUXT_PUBLIC_PARENT_SITE_URL`    | `https://joinaidi.com`               |
| `portfolioPrivateUrl` | `NUXT_PUBLIC_PORTFOLIO_PRIVATE_URL` | `https://joinaidi.com/products/private` |
| `contactEmail`        | `NUXT_PUBLIC_CONTACT_EMAIL`      | `company@aidiventures.com`           |
| `contactPhoneDisplay` | `NUXT_PUBLIC_CONTACT_PHONE_DISPLAY` | `+1 (408) 422-1250`               |
| `contactPhoneTel`     | `NUXT_PUBLIC_CONTACT_PHONE_TEL`  | `+14084221250`                       |

Set them in a `.env` file at the project root, e.g.:

```
NUXT_PUBLIC_INTERCOM_APP_ID=your_app_id
NUXT_PUBLIC_CAL_LINK=your-team/booking-type
```

## Notes

- **Cal.com & Intercom** are loaded client-only via `plugins/*.client.ts`.
  They don't run during SSR — the page's first paint contains everything else.
- **Portfolio modal** is teleported to `<body>` so its fixed positioning isn't
  affected by any ancestor transform/filter contexts.
- **The favicon** is a self-contained SVG (no external dependency), located
  at `public/favicon.svg`.
