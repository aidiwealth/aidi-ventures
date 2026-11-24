<!--
  ethos.vue — what Aidi Ventures believes and the founders it backs. Adapted from The Aidi Group's ethos for the venture firm.
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
const WHERE = [
  { title: 'How money moves', body: 'Payments, lending and treasury that are faster and safer across borders: fraud detection, credit for the businesses banks cannot score, and money that settles in seconds, not days.', p: 'Grey · Rank · Mercury' },
  { title: 'How businesses communicate', body: 'AI that talks to customers on every channel (voice, SMS, WhatsApp and email) in the customer\'s own language, and resolves the issue instead of just routing it.', p: 'Termii · Sotel' },
  { title: 'How data is secured', body: 'AI that verifies who people are, stops fraud before it happens and keeps personal data private, including models that run on the device so data never leaves it.', p: 'Termii Fraud Guard · CreditChek' },
  { title: 'How businesses run', body: 'AI agents that take on the back office (finance, compliance, IT and operations), so a 10-person company can operate like a 100-person one.', p: 'Rayda · Formal' },
  { title: 'How commerce works', body: 'AI that helps small merchants sell, price, restock and get paid, putting enterprise-grade tools in the hands of the smallest businesses.', p: 'Bumpa' },
  { title: 'How intelligence reaches people', body: 'Small, efficient models that work on everyday devices, offline and in local languages, built for the next billion users, not just the cloud.', p: 'Telroi' }
]
// How a deal moves, from first contact to exit.
const STEPS = [
  { title: 'Source', body: 'AngelList Meridian, the Y Combinator and Stanford communities, co-investor funds, founder networks and our pitch form.' },
  { title: 'Screen', body: 'Our own AI deal engine checks every opportunity against our focus and scores team, market and traction, so we read every pitch, not just the ones we have time for.' },
  { title: 'Diligence', body: 'A product and technical deep-dive, customer calls and references. We ask hard questions early.' },
  { title: 'Decide', body: 'AI advises; partners decide. Every investment needs both general partners to approve it, with a written record.' },
  { title: 'Support', body: 'Hiring, go-to-market in the US, UK and Africa, banking and the next round.' },
  { title: 'Grow', body: 'We stay with the company from seed to the later rounds, and plan with founders for how and when early investors return capital.' }
]
const BEYOND = [
  { title: 'Finvry', body: 'Our own founder software: monthly reporting and investor updates, a data room for fundraising, US formation and compliance, and company finance, offered to our founders at a discount and never a condition of investment.' },
  { title: 'Space and services', body: 'Workspaces for teams, virtual offices, and financial, tax and legal support from across our group.' },
  { title: 'Connections', body: 'Introductions to customers, co-investors and the next round, from San Jose, London, New York and Lagos.' }
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
        <p class="av-statement-sub av-focus">We back technical founders building AI and machine learning, enterprise software, SaaS and fintech, from Seed to Series B, primarily in the US, Canada, the UK and Europe, with selective investments in Africa.</p>
      </div></section>
      <section id="where" class="av-where"><div class="av-wrap">
        <h2 class="av-title">Where we want to see <em>AI</em> change the work.</h2>
        <ol class="av-list">
          <li v-for="(w, i) in WHERE" :key="w.title" class="av-item"><span class="av-num">{{ String(i + 1).padStart(2, '0') }}</span><h2>{{ w.title }}</h2><div><p>{{ w.body }}</p><span class="av-apf">In our portfolio: {{ w.p }}</span></div></li>
        </ol>
      </div></section>
      <section class="av-principles"><div class="av-wrap"><ol class="av-list">
        <li v-for="(p, i) in PRINCIPLES" :key="p.title" class="av-item"><span class="av-num">{{ String(i + 1).padStart(2, '0') }}</span><h2>{{ p.title }}</h2><p>{{ p.body }}</p></li>
      </ol></div></section>
      <section class="av-how"><div class="av-wrap">
        <h2 class="av-title">How we <em>work</em> with founders.</h2>
        <ol class="av-steps"><li v-for="(st, i) in STEPS" :key="st.title"><span class="av-num">{{ String(i + 1).padStart(2, '0') }}</span><h3>{{ st.title }}</h3><p>{{ st.body }}</p></li></ol>
        <p class="av-note">We use AI in our own work the way we hope our founders use it: to see more and decide faster, with people making the call. Founder names, contact details, race and gender are never sent to the model, and every AI run is logged.</p>
      </div></section>
      <section class="av-beyond"><div class="av-wrap">
        <h2 class="av-title">Beyond <em>capital.</em></h2>
        <div class="av-beyond-grid"><p class="av-statement-sub" style="margin-top:0">Our support does not end when the money lands. The same team and tools that run our own companies are open to the founders we back.</p>
          <ul><li v-for="b in BEYOND" :key="b.title"><b>{{ b.title }}</b><span>{{ b.body }}</span></li></ul></div>
      </div></section>
      <section class="av-close"><div class="av-center">
        <p class="av-close-text">We are called venture investors. We think of ourselves as the first call a founder makes when it gets hard.</p>
        <p class="av-motto">Built by operators. Backed with conviction.</p>
      </div></section>
    </main>
    <AppFooter />
  </div>
</template>
