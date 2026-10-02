<!--
  AppFooter.vue — footer in The Aidi Group style: brand lockup, statement, contact,
  links, small light disclaimer and the headquarters line.
-->
<template>
  <footer class="gf">
    <div class="gf-video" aria-hidden="true">
      <video ref="videoEl" autoplay loop muted playsinline>
        <source src="https://videos.pexels.com/video-files/856356/856356-hd_1280_720_25fps.mp4" type="video/mp4">
      </video>
    </div>
    <div class="gf-inner">
      <div class="gf-top">
        <a :href="groupUrl" class="gf-brand" target="_blank" rel="noopener" aria-label="Aidi Ventures — part of The Aidi Group">
          <span class="gf-mark" aria-hidden="true"><AidiWordmark /></span>
          <span class="gf-divider" aria-hidden="true" />
          <span class="gf-arm" aria-hidden="true">Ventures</span>
        </a>
        <p class="gf-statement">Backing resilient firms, funds and founders globally.</p>
        <a class="gf-email" :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
        <nav class="gf-links" aria-label="Footer">
          <a href="/#portfolio">Portfolio</a>
          <a href="/pitch">Pitch us</a>
          <a :href="groupUrl" target="_blank" rel="noopener">The Aidi Group</a>
          <a href="https://theaidigroup.com/legal" target="_blank" rel="noopener">Legal</a>
        </nav>
      </div>

      <div class="gf-disclaimer">
        <p><strong>Disclaimer:</strong> Aidi Ventures is the venture investment arm of The Aidi Group. Aidi Ventures and its affiliates are not broker-dealers or custodians. Aidi Ventures may invest as a principal in startups, funds, and other private market opportunities through affiliated entities. In addition, Aidi Ventures may provide advisory, strategic, or operational support to portfolio companies and partners. Such activities may create potential conflicts of interest, including situations where Aidi Ventures or its affiliates have a financial interest in the investments referenced.</p>
        <p>Investment opportunities referenced on this platform are not offers to sell or solicitations to buy securities. Any participation in investment opportunities is conducted through separately structured legal entities, including funds or special purpose vehicles, and is subject to applicable securities laws and formal offering documentation. In the United States, advisory services to Aidi Ventures funds are provided by Aidi Ventures LLC, which is not registered with the SEC as an investment adviser and relies on an available exemption from registration. In Nigeria, services are delivered through Aidi Technology Limited, subject to applicable local regulations.</p>
        <p>All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. Investments in startups and private markets are illiquid, speculative, and subject to substantial risk of loss. Information presented on this site is for informational purposes only and should not be construed as investment, legal, or tax advice, or as an offer or solicitation in any jurisdiction where such services are not authorized. Availability of products and services may vary by location and applicable regulations. Certain opportunities may be available only to qualified or accredited investors.</p>
      </div>

      <div class="gf-bottom">
        Corporate Headquarters: 6472 Camden Ave, Suite 204, San Jose, CA 95120, US&nbsp;&nbsp;·&nbsp;&nbsp;© {{ year }} Aidi Ventures LLC. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const contactEmail = config.public.contactEmail as string
const groupUrl = config.public.parentSiteUrl as string
const year = new Date().getFullYear()
const videoEl = ref<HTMLVideoElement | null>(null)
onMounted(() => {
  const v = videoEl.value
  if (v && window.matchMedia('(prefers-reduced-motion: reduce)').matches) v.pause()
})
</script>

<style scoped>
.gf { position: relative; overflow: hidden; background: #0c1a2e; color: #fff; padding: 96px 0 32px; z-index: 2; }
.gf-video { position: absolute; inset: 0; opacity: .18; }
.gf-video video { width: 100%; height: 100%; object-fit: cover; }
.gf::before { content: ''; position: absolute; inset: 0; z-index: 1; background: radial-gradient(ellipse at center, rgba(12,26,46,.45) 0%, #0c1a2e 78%), linear-gradient(180deg, rgba(12,26,46,.6) 0%, rgba(12,26,46,.88) 100%); }
.gf-inner { position: relative; z-index: 2; max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
.gf-top { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 28px; }
.gf-brand { display: flex; align-items: center; gap: 14px; color: #fff; text-decoration: none; }
.gf-mark { display: flex; width: 72px; height: 29px; }
.gf-mark :deep(svg) { width: 100%; height: 100%; display: block; }
.gf-divider { width: 1px; height: 24px; background: currentColor; opacity: .3; }
.gf-arm { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.35rem; line-height: 1; }
.gf-statement { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: clamp(26px, 3.2vw, 42px); line-height: 1.1; letter-spacing: -.02em; max-width: 22ch; }
.gf-email { color: #fff; font-size: 14px; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.35); padding-bottom: 4px; }
.gf-links { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; font-size: 13px; }
.gf-links a { color: rgba(255,255,255,.75); text-decoration: none; }
.gf-links a:hover { color: #fff; }
.gf-disclaimer { margin-top: 56px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.1); display: flex; flex-direction: column; gap: 10px; }
.gf-disclaimer p { font-family: 'Instrument Sans', sans-serif; font-size: .75rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,.55); margin: 0; }
.gf-disclaimer strong { font-weight: 500; color: rgba(255,255,255,.8); text-transform: uppercase; letter-spacing: .05em; font-size: .72rem; }
.gf-bottom { margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,.06); text-align: center; font-size: .68rem; font-weight: 300; color: rgba(255,255,255,.55); }
a:focus-visible { outline: 2px solid #2da7c3; outline-offset: 3px; }
@media (max-width: 760px) { .gf { padding-top: 72px; } }
</style>
