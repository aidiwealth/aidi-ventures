<!--
  ThesisSection.vue — where we want to see AI change the work: six areas, each with the portfolio companies already doing it.
-->
<script setup lang="ts">
const AREAS = [
  { t: 'How money moves', d: 'Payments, lending and treasury that are faster and safer across borders.', p: 'Grey · Rank · Mercury' },
  { t: 'How businesses communicate', d: 'AI that talks to customers on every channel, in their own language, and resolves issues.', p: 'Termii · Sotel' },
  { t: 'How data is secured', d: 'Identity, fraud prevention and privacy, built in from the first line of code.', p: 'Termii Fraud Guard · CreditChek' },
  { t: 'How businesses run', d: 'AI agents for finance, compliance, IT and operations, so small teams work like big ones.', p: 'Rayda · Formal' },
  { t: 'How commerce works', d: 'Enterprise-grade tools for the smallest merchants to sell, restock and get paid.', p: 'Bumpa' },
  { t: 'How intelligence reaches people', d: 'Efficient models that work on everyday devices and in local languages, for the next billion users.', p: 'Telroi' }
]
</script>

<template>
  <section class="av-thesis">
    <div class="av-wrap">
      <div class="av-thesis-head">
        <h2 class="av-title">Where we want to see <em>AI</em> change the work.</h2>
        <p class="av-sub">We back founders rebuilding the systems everyone depends on.</p>
      </div>
      <ol class="av-areas">
        <li v-for="(a, i) in AREAS" :key="a.t"><span class="av-anum">{{ String(i + 1).padStart(2, '0') }}</span><h3>{{ a.t }}</h3><p>{{ a.d }}</p><span class="av-apf">{{ a.p }}</span></li>
      </ol>
      <NuxtLink to="/ethos#where" class="av-thesis-more">How we think about each one <span aria-hidden="true">→</span></NuxtLink>
    </div>
  </section>
</template>
