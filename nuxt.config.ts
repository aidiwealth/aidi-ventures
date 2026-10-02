// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  experimental: { appManifest: false },
  devtools: { enabled: true },

  // Global stylesheet — all design tokens, layout, components live here.
  css: ['~/assets/css/main.css', '~/assets/css/aidi-group.css'],

app: {
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'Aidi Ventures — Backing, resilient operators globally.',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      // Standard SEO
      {
        name: 'description',
        content:
          'The venture investment arm of The Aidi Group. Backing resilient firms, funds, and founders globally.'
      },
      {
        name: 'keywords',
        content:
          'Aidi Ventures, The Aidi Group, venture capital, private wealth, emerging markets investing, Silicon Valley venture firm, fintech investing, African startup investors, San Jose venture capital, holding company'
      },
      // Open Graph (Facebook, LinkedIn, iMessage previews, etc.)
      { property: 'og:locale',          content: 'en_US' },
      { property: 'og:type',            content: 'website' },
      { property: 'og:title',           content: 'Aidi Ventures' },
      {
        property: 'og:description',
        content:
          'The venture investment arm of The Aidi Group — backing resilient operators globally.'
      },
      { property: 'og:url',             content: 'https://aidiventures.com/' },
      { property: 'og:site_name',       content: 'Aidi Ventures' },
      { property: 'og:image',           content: 'https://aidiventures.com/og-image.png' },
      { property: 'og:image:width',     content: '1200' },
      { property: 'og:image:height',    content: '630' },
      { property: 'og:image:type',      content: 'image/png' },
      // Twitter / X cards
      { name: 'twitter:card',           content: 'summary_large_image' },
      { name: 'twitter:title',          content: 'Aidi Ventures' },
      {
        name: 'twitter:description',
        content:
          'The venture investment arm of The Aidi Group — backing resilient operators globally.'
      },
      { name: 'twitter:image',          content: 'https://aidiventures.com/og-image.png' }
    ],
    link: [
      { rel: 'icon',             type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/favicon.svg' },
      { rel: 'canonical',        href: 'https://aidiventures.com/' },
      { rel: 'preconnect',       href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect',       href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Instrument+Sans:wght@400;500;600&display=swap'
      }
    ]
  }
},

  // Public runtime config — overridable via NUXT_PUBLIC_* env vars at runtime.
  runtimeConfig: {
    public: {
      calNamespace: '45min',
      calLink: 'joinaidi/45min',
      calBrandColor: '#0c2057',
      intercomAppId: 'vt8ulx74',
      portfolioBaseUrl: 'https://aidiventures.com',
      parentSiteUrl: 'https://theaidigroup.com',
      portfolioPrivateUrl: 'https://aidiventures.com/#portfolio',
      contactEmail: 'company@aidiventures.com',
      contactPhoneDisplay: '+1 (408) 422-1250',
      contactPhoneTel: '+14084221250',
      pitchEndpoint: 'https://app.theaidigroup.com/api/public/pitch',
      turnstileSiteKey: '0x4AAAAAAFMIYP6c8Dm3Kanw',
    },
  },
})
