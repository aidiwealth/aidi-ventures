<!--
  StorySection.vue — who we are, told plainly, then a strip of photos from our founder and investor gatherings.
-->
<template>
  <section class="av-story">
    <div class="av-story-text">
      <span class="eyebrow">Our story</span>
      <p class="av-drop">Aidi Ventures started with operators. Before we backed anyone, we built and ran companies ourselves, in the United States and across Africa. Today we invest from seed to Series B in founders building AI, infrastructure and financial services for the world.</p>
      <p>Our support does not end when the money lands. We work with founders on hiring, banking, sales and the next raise, and we stay with them for the life of the company.</p>
    </div>
    <div class="av-strip" aria-label="Aidi founder and investor gatherings">
      <figure v-for="n in 5" :key="n"><img :src="media('events/event-' + n + '.jpg')" :alt="'Aidi founder and investor gathering, photo ' + n" loading="lazy" decoding="async"></figure>
    </div>
  </section>
</template>
