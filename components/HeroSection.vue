<!--
  HeroSection.vue — hero block with title, tagline, Cal.com booking CTA,
  stats row, and the autoplay video card on the right.

  The "Talk to us" button uses Cal.com's data-attribute API. The Cal embed
  script (loaded by plugins/cal.client.ts) auto-scans for these attributes
  and wires up the booking modal.
-->
<template>
  <section class="hero">
    <div class="hero-text">
      <h1 class="hero-title">
        Backing, <em>resilient</em><br>
        operators.
      </h1>

      <p class="hero-tag">
        Providing capital, and operational support to businesses across the U.S.
        and emerging markets.
      </p>

      <div class="hero-actions">
        <button
          class="btn btn-dark"
          :data-cal-link="calLink"
          :data-cal-namespace="calNamespace"
          :data-cal-config="calConfig"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
            />
          </svg>
          Talk to us
        </button>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-num"><em>Seed</em>—B</span>
          <span class="stat-label">Stage</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">Global</span>
          <span class="stat-label">Mandate</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">$1M+</span>
          <span class="stat-label">Invested</span>
        </div>
      </div>
    </div>

    <div class="hero-visual">
      <div class="video-card">
        <video autoplay muted loop playsinline preload="auto">
          <source
            src="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-1702872444.mp4"
            type="video/mp4"
          >
        </video>
        <div class="video-tint" aria-hidden="true" />
        <div class="video-shade" aria-hidden="true" />

        <div class="video-tag">
          <span class="dot" aria-hidden="true" />
          Private&nbsp;Markets
        </div>

        <div class="video-caption">
          <p class="video-caption-text">
            Backing the firms, funds &amp; founders building the next era of
            private wealth.
          </p>
          <a
            class="video-portfolio-link"
            :href="portfolioPrivateUrl"
            target="_blank"
            rel="noopener"
          >
            Portfolio
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
            >
              <line x1="3" y1="13" x2="13" y2="3" />
              <polyline points="6 3 13 3 13 10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const calLink = config.public.calLink as string
const calNamespace = config.public.calNamespace as string
const portfolioPrivateUrl = config.public.portfolioPrivateUrl as string

// Cal.com config — passed as a JSON string to the data-cal-config attribute.
const calConfig = JSON.stringify({
  layout: 'month_view',
  useSlotsViewOnSmallScreen: 'true',
})
</script>
