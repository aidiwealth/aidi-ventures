<!--
  ContactStrip.vue — three-column horizontal strip with the venture's contact
  details and a link to the parent group.
-->
<template>
  <section class="strip">
    <div class="strip-inner">
      <div class="strip-block contact">
        <span class="strip-label">Companies</span>
        <a class="strip-value" :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
      </div>

      <div class="strip-block line">
        <span class="strip-label">Direct Line</span>
        <a class="strip-value" :href="`tel:${contactPhoneTel}`">{{ contactPhoneDisplay }}</a>
      </div>

      <div class="strip-block parent">
        <span class="strip-label">Group</span>
        <a
          class="strip-parent-link"
          :href="parentSiteUrl"
          target="_blank"
          rel="noopener"
        >
          joinaidi.com
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <line x1="3" y1="13" x2="13" y2="3" />
            <polyline points="6 3 13 3 13 10" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const contactEmail = config.public.contactEmail as string
const contactPhoneDisplay = config.public.contactPhoneDisplay as string
const contactPhoneTel = config.public.contactPhoneTel as string
const parentSiteUrl = config.public.parentSiteUrl as string
</script>
