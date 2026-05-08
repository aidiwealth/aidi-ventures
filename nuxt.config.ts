// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Global stylesheet — all design tokens, layout, components live here.
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Aidi Ventures — The Investment Arm of Aidi Ventures Group',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'The venture investment arm of Aidi Ventures Group. Backing the firms, funds, and founders building the next era of private wealth.',
        },
      ],
      link: [
        // AIDI brand glyph favicon (inline SVG data URI, self-contained)
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.svg',
        },
        // Google Fonts — Cormorant Garamond + Instrument Sans
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Instrument+Sans:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  // Public runtime config — overridable via NUXT_PUBLIC_* env vars at runtime.
  runtimeConfig: {
    public: {
      calNamespace: '30min',
      calLink: 'joinaidi/30min',
      calBrandColor: '#0c2057',
      intercomAppId: 'vt8ulx74',
      portfolioBaseUrl: 'https://joinaidi.com',
      parentSiteUrl: 'https://joinaidi.com',
      portfolioPrivateUrl: 'https://joinaidi.com/products/private',
      contactEmail: 'company@aidiventures.com',
      contactPhoneDisplay: '+1 (408) 422-1250',
      contactPhoneTel: '+14084221250',
    },
  },
})
