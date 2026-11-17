<!--
  FoundersSection.vue — founders we back: four featured stories with what they have achieved, then more founders and
  the names that back our companies alongside us. Photos live on R2 (utils/media.ts).
-->
<template>
  <section class="av-founders">
    <div class="av-wrap">
      <div class="av-head">
        <span class="eyebrow">Founders</span>
        <h2 class="av-title">The people we <em>back.</em></h2>
        <p class="av-sub">Operators building companies the world runs on.</p>
      </div>

      <div class="av-feature">
        <article v-for="f in FEATURED" :key="f.company" class="av-fcard">
          <div class="av-fimg"><img :src="media('founders/' + f.photo)" :alt="f.person + ', ' + f.role + ' of ' + f.company" loading="lazy" decoding="async" :style="{ objectPosition: f.pos || 'center 25%' }"></div>
          <div class="av-fbody">
            <p class="av-co">{{ f.company }}</p>
            <h3>{{ f.headline }}</h3>
            <p class="av-who">{{ f.person }}, {{ f.role }}</p>
            <div v-if="f.names.length" class="av-names"><span class="av-nl">{{ f.label }}</span><span v-for="n in f.names" :key="n">{{ n }}</span></div>
          </div>
        </article>
      </div>

      <div class="av-more">
        <article v-for="f in MORE" :key="f.company" class="av-mcard">
          <div class="av-mimg"><img :src="media('founders/' + f.photo)" :alt="f.person + ', ' + f.company" loading="lazy" decoding="async" :style="{ objectPosition: f.pos || 'center 25%' }"></div>
          <p class="av-co">{{ f.company }}</p>
          <p class="av-who">{{ f.person }}<br>{{ f.role }}</p>
        </article>
        <a class="av-mcard av-pitch" href="/pitch">
          <span class="eyebrow">Building something?</span>
          <span class="av-pitch-t">Pitch <em>us</em></span>
          <span class="av-pitch-a" aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div class="av-backers">
      <p class="eyebrow">Our founders are also backed by</p>
      <ul><li v-for="b in BACKERS" :key="b">{{ b }}</li></ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature { company: string; person: string; role: string; photo: string; headline: string; label: string; names: string[]; pos?: string }
const FEATURED: Feature[] = [
  { company: 'Mercury', person: 'Immad Akhund', role: 'CEO', photo: 'mercury-immad-akhund.jpg', headline: 'Passed $1B in revenue, and on the path to a US bank charter.', label: '', names: [] },
  { company: 'Formal', person: 'Mokhtar Bacha', role: 'CEO', photo: 'formal-mokhtar.jpg', headline: 'Trusted by Notion, Lovable, Mercury, Asana, Decagon, Cursor and Granola.', label: 'Backed by', names: ['a16z', 'Thrive Capital', 'Y Combinator', 'Abstract Ventures'] },
  { company: 'Termii', person: 'Idowu Atinuke', role: 'COO', photo: 'termii-atinuke-idowu.jpg', headline: "Named one of Africa's fastest-growing companies by the Financial Times in 2025 and 2026.", label: 'Supported by', names: ['Google AI Fund', 'Visa Fintech Accelerator', 'Fintech Collective', 'Y Combinator'] },
  { company: 'Bumpa', person: 'Kelvin Umechukwu', role: 'CEO', photo: 'bumpa-kelvin-umechukwu.jpg', headline: "Top 10 finalist, Africa's Business Heroes 2026, and a Harambeans nominee.", label: 'Backed by', names: ['Base10'] }
]
const MORE = [
  { company: 'Grey', person: 'Idorenyin Obong and Femi Aghedo', role: 'CEO and COO', photo: 'grey-founders.jpg', pos: 'center 30%' },
  { company: 'Rayda', person: 'Francis Osifo', role: 'CEO', photo: 'rayda-francis-osifo.jpg' },
  { company: 'Rank', person: 'Femi Iromini', role: 'CEO', photo: 'rank-femi-iromini.jpg' }
]
const BACKERS = ['a16z', 'Thrive Capital', 'Y Combinator', 'Abstract Ventures', 'Base10', 'Google AI Fund', 'Visa', 'Fintech Collective']
</script>
