<!--
  Root app layout — single page site, so we just route through to NuxtPage.
  All globally-needed elements (head meta, fonts, favicon) are configured
  via nuxt.config.ts.
-->
<template>
  <div>
    <NuxtPage />
    <CookieConsent site="aidiventures.com" />
  </div>
</template>
