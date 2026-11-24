<!--
  ethos.vue — what Aidi Ventures believes, where we want to see AI change the work, and how we work with founders.
-->
<script setup lang="ts">
const title = 'Our ethos — Aidi Ventures'
const description = 'What we believe, and the founders we back: technical founders building AI, enterprise software, SaaS and fintech, from Seed to Series B.'
useHead({ title, link: [{ rel: 'canonical', href: 'https://aidiventures.com/ethos' }], meta: [{ name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }] })
const PRINCIPLES = [
  { title: 'We start as operators.', body: 'Before we backed anyone, we built companies ourselves, and we still do. We know what it takes to ship, sell and hire when no one is watching.' },
  { title: 'We back people, not decks.', body: 'We look for founders who have shipped, sold and hired, and who keep going when it is hard. The plan will change. The people should not.' },
  { title: 'We bridge markets.', body: 'Talent, capital and customers should move freely between the United States and emerging markets, in both directions. We help our founders do that.' },
  { title: 'We are direct.', body: 'We say what we think, early, and we expect the same in return. A clear no is kinder than a slow maybe.' },
  { title: 'We stay.', body: 'We support founders for the life of the company: hiring, banking, customers and the next round. We measure ourselves by what our founders build.' }
]
// Where we want to see AI change the work.
// Where we want to see AI change the work.
const WHERE = [
  { title: 'How money moves', body: 'Payments, lending and treasury that are faster and safer across borders, including credit for the businesses banks cannot score.', p: 'Grey · Rank · Mercury' },
  { title: 'How businesses communicate', body: 'AI that talks to customers on every channel, in their own language, and resolves the issue instead of just routing it.', p: 'Termii · Sotel' },
  { title: 'How data is secured', body: 'AI that verifies who people are, stops fraud before it happens and keeps personal data private.', p: 'Termii Fraud Guard · CreditChek' },
  { title: 'How businesses run', body: 'AI agents for finance, compliance, IT and operations, so a 10-person company can work like a 100-person one.', p: 'Rayda · Formal' },
  { title: 'How commerce works', body: 'Enterprise-grade tools that help the smallest merchants sell, price, restock and get paid.', p: 'Bumpa' },
  { title: 'How intelligence reaches people', body: 'Small, efficient models that work on everyday devices, offline and in local languages, for the next billion users.', p: 'Telroi' }
]
// How we work with founders, from the founder's side.
const STEPS = [
  { title: 'Pitch us', body: 'Send your company through our pitch form. Every pitch is read, and both partners see the ones that fit.' },
  { title: 'Hear back', body: 'We reply either way, and quickly. A clear no is kinder than a slow maybe.' },
  { title: 'Decide together', body: 'If it is a fit, we meet the team, dig into the product and talk to customers. Both partners make the call.' },
  { title: 'We stay', body: 'Hiring, banking, customers and the next round, plus Finvry, our founder software, for reporting and fundraising.' }
]
</script>

<template>
  <div>
    <AppNav />
    <main class="av-page">
      <header class="av-phero"><div class="av-center">
        <h1>Our <em>ethos</em></h1>
        <p class="av-plead">The builders. The operators. The ones who fix it themselves. We back technical founders building AI, enterprise software, SaaS and fintech, from Seed to Series B, primarily in the US, Canada, the UK and Europe, with selective investments in Africa.</p>
      </div></header>
      <section class="av-principles"><div class="av-wrap">
        <h2 class="av-title">What we <em>believe.</em></h2>
        <ol class="av-list">
          <li v-for="(p, i) in PRINCIPLES" :key="p.title" class="av-item"><span class="av-num">{{ String(i + 1).padStart(2, '0') }}</span><h2>{{ p.title }}</h2><p>{{ p.body }}</p></li>
        </ol>
      </div></section>
      <section id="where" class="av-thesis">
        <div class="av-wrap">
          <div class="av-thesis-head"><h2 class="av-title">Where we want to see <em>AI</em> change the work.</h2></div>
          <ol class="av-areas">
            <li v-for="(a, i) in WHERE" :key="a.title"><span class="av-anum">{{ String(i + 1).padStart(2, '0') }}</span><h3>{{ a.title }}</h3><p>{{ a.body }}</p><span class="av-apf">{{ a.p }}</span></li>
          </ol>
        </div>
      </section>
      <section class="av-how"><div class="av-wrap">
        <h2 class="av-title">How we work with <em>founders.</em></h2>
        <ol class="av-steps av-steps4"><li v-for="(st, i) in STEPS" :key="st.title"><span class="av-num">{{ String(i + 1).padStart(2, '0') }}</span><h3>{{ st.title }}</h3><p>{{ st.body }}</p></li></ol>
      </div></section>
      <section class="av-close"><div class="av-center">
        <p class="av-close-text">We are called venture investors. We think of ourselves as the first call a founder makes when it gets hard.</p>
        <p class="av-motto">Built by operators. Backed with conviction.</p>
        <NuxtLink to="/pitch" class="av-close-cta">Pitch us <span aria-hidden="true">→</span></NuxtLink>
      </div></section>
    </main>
    <AppFooter />
  </div>
</template>
