<!--
  ethos.vue — what Aidi Ventures believes and the founders it backs. Adapted from The Aidi Group's ethos for the venture firm.
-->
<script setup lang="ts">
const title = 'Our ethos — Aidi Ventures'
const description = 'What we believe, and the founders we back.'
useHead({ title, link: [{ rel: 'canonical', href: 'https://aidiventures.com/ethos' }], meta: [{ name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }] })
const PRINCIPLES = [
  { title: 'We start as operators.', body: 'Before we backed anyone, we built companies ourselves, and we still do. We know what it takes to ship, sell and hire when no one is watching.' },
  { title: 'We back people, not decks.', body: 'We look for founders who have shipped, sold and hired, and who keep going when it is hard. The plan will change. The people should not.' },
  { title: 'We bridge markets.', body: 'Talent, capital and customers should move freely between the United States and emerging markets, in both directions. We help our founders do that.' },
  { title: 'We are direct.', body: 'We say what we think, early, and we expect the same in return. A clear no is kinder than a slow maybe.' },
  { title: 'We stay.', body: 'We support founders for the life of the company: hiring, banking, customers and the next round. We measure ourselves by what our founders build.' }
]
</script>

<template>
  <div>
    <AppNav />
    <main class="av-page">
      <header class="av-phero"><div class="av-center"><span class="eyebrow">Aidi Ventures</span><h1>Our <em>ethos</em></h1></div></header>
      <section class="av-open"><div class="av-center">
        <p class="av-statement">The builders. The operators. The ones who fix it themselves. The founders who build for the world from wherever they start.</p>
        <p class="av-statement-sub">These are the people we back, and the investors we try to be.</p>
      </div></section>
      <section class="av-principles"><div class="av-wrap"><ol class="av-list">
        <li v-for="(p, i) in PRINCIPLES" :key="p.title" class="av-item"><span class="av-num">{{ String(i + 1).padStart(2, '0') }}</span><h2>{{ p.title }}</h2><p>{{ p.body }}</p></li>
      </ol></div></section>
      <section class="av-close"><div class="av-center">
        <p class="av-close-text">We are called venture investors. We think of ourselves as the first call a founder makes when it gets hard.</p>
        <p class="av-motto">Built by operators. Backed with conviction.</p>
      </div></section>
    </main>
    <AppFooter />
  </div>
</template>
