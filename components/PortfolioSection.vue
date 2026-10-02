<!--
  PortfolioSection.vue — portfolio header, grid of company cards, and the
  slide-in detail modal.

  Modal state lives in the `usePortfolio()` composable so it's shared between
  the cards and the modal without prop-drilling. The original site used
  imperative DOM manipulation; this is the Vue-idiomatic equivalent —
  same UX, reactive plumbing.
-->
<template>
  <!-- ── Section header + grid ── -->
  <section class="section portfolio-section" id="portfolio">
    <div class="wrap">
      <div class="section-header reveal" :class="{ in: revealed }">
        <span class="eyebrow">Active Portfolio</span>
        <h2 class="t-display">
          Companies we've<br>backed <em>globally.</em>
        </h2>
        <p class="t-subhead" style="max-width: 560px; margin-top: 16px">
          We have backed and accelerated over 100 ventures globally — spanning AI, fintech, telecom,
          SaaS, and digital commerce.
        </p>
      </div>

      <div class="pf-grid reveal reveal-d1" :class="{ in: revealed }">
        <div
          v-for="company in companies"
          :key="company.id"
          class="pf-card"
          @click="open(company.id)"
        >
          <div
            class="pf-card-img"
            :style="{ backgroundImage: `url('${company.image}')` }"
          >
            <span v-if="company.status" class="pf-card-status">{{ company.status }}</span>
          </div>
          <div class="pf-card-body">
            <div class="pf-card-name">{{ company.name }}</div>
            <div class="pf-card-tag">{{ company.tag }}</div>
          </div>
          <div class="pf-card-arrow">&#8594;</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Slide-in modal ── -->
  <Teleport to="body">
    <div
      class="pf-backdrop"
      :class="{ open: !!activeCompany }"
      @click="close"
    />
    <div class="pf-modal" :class="{ open: !!activeCompany }">
      <button class="pfm-close" aria-label="Close" @click="close">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div ref="scrollEl" class="pfm-scroll">
        <!-- Single active item — renders only when something is open. -->
        <div v-if="activeCompany" class="pf-modal-item active">
          <div
            class="pfm-img"
            :style="{ backgroundImage: `url('${activeCompany.image}')` }"
          />
          <div class="pfm-tag">{{ activeCompany.tag }}</div>
          <h2 class="pfm-name">{{ activeCompany.name }}</h2>
          <p class="pfm-desc">{{ activeCompany.desc }}</p>
          <div class="pfm-meta">
            <div class="pfm-meta-item">
              <span class="pfm-meta-label">Stage</span>
              <span class="pfm-meta-val">{{ activeCompany.stage }}</span>
            </div>
            <div class="pfm-meta-item">
              <span class="pfm-meta-label">HQ</span>
              <span class="pfm-meta-val">{{ activeCompany.hq }}</span>
            </div>
          </div>
          <a
            :href="activeCompany.url"
            target="_blank"
            rel="noopener"
            class="pfm-link"
          >Visit {{ activeCompany.name }} &#8599;</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { companies, activeCompany, open, close } = usePortfolio()

// Reset scroll position when opening a new company. The pfm-scroll element
// is reused across modal opens, so its scrollTop persists otherwise.
const scrollEl = ref<HTMLElement | null>(null)
watch(activeCompany, (current) => {
  if (current && scrollEl.value) scrollEl.value.scrollTop = 0
})

// Esc key closes the modal — registered only on the client.
onMounted(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }
  document.addEventListener('keydown', handler)
  onBeforeUnmount(() => document.removeEventListener('keydown', handler))
})

// Reveal-on-scroll animation for the section header + grid.
const revealed = ref(false)
const sectionEl = ref<HTMLElement | null>(null)
onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    revealed.value = true
    return
  }
  const obs = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          revealed.value = true
          obs.disconnect()
        }
      }
    },
    { threshold: 0.12 },
  )
  // Observe the portfolio section root if available.
  const root = document.querySelector('.portfolio-section')
  if (root) obs.observe(root)
})
</script>
