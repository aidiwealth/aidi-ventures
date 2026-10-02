<!--
  AppNav.vue — fixed-position frosted glass nav bar.
  - Left: AIDI wordmark + "Ventures" italic lockup, links to parent group site.
  - Right: "For Investors" CTA pill, also linking to parent.
-->
<template>
  <nav class="nav" :class="{ scrolled }">
    <div class="nav-inner">
      <a :href="portfolioBaseUrl" class="brand" aria-label="Aidi Group">
        <span class="brand-mark" aria-hidden="true">
          <AidiWordmark />
        </span>
        <span class="brand-divider" aria-hidden="true" />
        <span class="brand-arm">Ventures</span>
      </a>

      <a class="nav-cta" :href="parentSiteUrl" target="_blank" rel="noopener">
        Visit Group
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6">
          <line x1="3" y1="13" x2="13" y2="3" />
          <polyline points="6 3 13 3 13 10" />
        </svg>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const parentSiteUrl = config.public.parentSiteUrl as string
const scrolled = ref(false)
const onScroll = (): void => { scrolled.value = window.scrollY > 10 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
