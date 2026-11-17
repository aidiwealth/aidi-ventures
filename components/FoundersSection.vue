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
        <article v-for="f in MORE" :key="f.company" class="av-fcard">
          <div class="av-fimg"><img :src="media('founders/' + f.photo)" :alt="f.person + ', ' + f.role + ' of ' + f.company" loading="lazy" decoding="async" :style="{ objectPosition: f.pos || 'center 25%' }"></div>
          <div class="av-fbody">
            <p class="av-co">{{ f.company }}</p>
            <h3>{{ f.headline }}</h3>
            <p class="av-who">{{ f.person }}, {{ f.role }}</p>
          </div>
        </article>
      </div>

      <div class="av-backers">
        <p class="eyebrow">Our founders are backed and recognised by</p>
        <ul><li v-for="b in BACKERS" :key="b"><img :src="media('logos/' + LOGOS[b].file)" :alt="b" :style="{ height: LOGOS[b].h + 'px' }" loading="lazy"></li></ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature { company: string; person: string; role: string; photo: string; headline: string; label: string; names: string[]; pos?: string }
const FEATURED: Feature[] = [
  { company: 'Formal', person: 'Mokhtar Bacha', role: 'CEO', photo: 'formal-mokhtar.jpg', headline: 'Trusted by Notion, Lovable, Mercury, Asana, Decagon, Cursor and Granola.', label: 'Backed by', names: ['a16z', 'Thrive Capital', 'Y Combinator'] },
  { company: 'Termii', person: 'Idowu Atinuke', role: 'COO', photo: 'termii-atinuke-idowu.jpg', headline: "Named one of Africa's fastest-growing companies by the Financial Times in 2025 and 2026.", label: 'Backed by', names: ['Fintech Collective', 'Y Combinator'] },
  { company: 'Bumpa', person: 'Kelvin Umechukwu', role: 'CEO', photo: 'bumpa-kelvin-umechukwu.jpg', headline: "Top 10 finalist, Africa's Business Heroes 2026 (7th edition).", label: 'Backed by', names: ['Base10'] }
]
const MORE = [
  { company: 'Grey', person: 'Idorenyin Obong', role: 'CEO', photo: 'grey-idorenyin-obong.jpg', pos: 'center 20%', headline: 'Cross-border accounts and payments for freelancers and remote workers.' },
  { company: 'Rayda', person: 'Francis Osifo', role: 'CEO', photo: 'rayda-francis-osifo.jpg', pos: 'center 20%', headline: 'Trusted by Furnished Finders, Chainalysis and RedCloud.' },
  { company: 'Rank', person: 'Femi Iromini', role: 'CEO', photo: 'rank-femi-iromini.jpg', pos: 'center 15%', headline: 'Community finance, owned and run by the people who use it.' }
]
// Logos on R2 (aidi-ventures/logos/); h is the display height, set so each logo covers about the same area.
const LOGOS: Record<string, { file: string; h: number }> = {
  'Y Combinator': { file: 'y-combinator.png', h: 22 }, 'Thrive Capital': { file: 'thrive-capital.png', h: 17 }, 'Abstract Ventures': { file: 'abstract-ventures.png', h: 32 },
  'a16z': { file: 'a16z.png', h: 26 }, 'Google AI Fund': { file: 'google.png', h: 27 }, 'Visa Fintech Accelerator': { file: 'visa-accelerator.png', h: 38 }
}
const BACKERS = ['Y Combinator', 'Thrive Capital', 'Abstract Ventures', 'a16z', 'Google AI Fund', 'Visa Fintech Accelerator']
</script>
