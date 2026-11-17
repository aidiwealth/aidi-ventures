<!--
  legal.vue — terms of use, privacy and important information for aidiventures.com. Adapted from The Aidi Group's legal page.
-->
<script setup lang="ts">
const title = 'Legal — Aidi Ventures'
const description = 'Terms of use, privacy and important information for aidiventures.com.'
useHead({ title, link: [{ rel: 'canonical', href: 'https://aidiventures.com/legal' }], meta: [{ name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }] })
const email = useRuntimeConfig().public.contactEmail as string
</script>

<template>
  <div>
    <AppNav />
    <main class="av-page">
      <header class="av-phero"><div class="av-narrow"><span class="eyebrow">Legal</span><h1>Terms, privacy and <em>disclosures</em></h1></div></header>
      <article class="av-prose">
        <h2>Terms of use</h2>
        <p>Thank you for your interest in aidiventures.com (the "Website"). Your use of this Website, including its content and materials (the "Materials"), is governed by these terms. By using the Website you agree to them.</p>
        <h2>Who we are</h2>
        <p>Aidi Ventures LLC ("Aidi Ventures") is the venture investment arm of The Aidi Group, a group of separate companies that also includes Aidi Wealth LLC, Aidi Haven LLC, Aidi Technology Limited and the Telroi companies. Each company is a separate legal entity with its own management, and one is not responsible for the obligations of another.</p>
        <h2>Materials</h2>
        <p>The Materials are provided "as is" for general information. We make no promise that they are accurate, complete or current, and they may include information from third parties that we have not verified. We may be bound by confidentiality obligations to investors, companies and partners, which can limit what we share.</p>
        <h2>No offer, solicitation or advice</h2>
        <p>Nothing on this Website is an offer to sell, or a solicitation of an offer to buy, any security, fund interest or investment advisory service. Any investment is made only through separately structured legal entities and their own offering documents, and only to eligible investors. Nothing here is investment, legal, tax or accounting advice, or a basis for any investment decision. Past performance is not a guide to future results.</p>
        <h2>Our portfolio and founders</h2>
        <p>Companies named on this Website are independent businesses run by their own management teams. References to them, their results, investors, customers and awards are based on public information or information they have shared, are for illustration only, and are not a complete list of our investments. Other firms named as investors in our portfolio companies are not affiliated with Aidi Ventures and do not endorse us.</p>
        <h2>Third-party sites</h2>
        <p>Links to other websites are for convenience. We are not responsible for their content, and your use of them is at your own risk.</p>
        <h2>Use of the Website and trademarks</h2>
        <p>You may view and download Materials for your own personal use. You may not copy, alter or reuse the design or content of the Website without our written permission. "Aidi", "Aidi Ventures", "The Aidi Group" and our logos are our trademarks. Other names and marks belong to their owners.</p>
        <h2>Submitting a pitch or other information</h2>
        <p>We review many business plans, and many are similar. Unless we agree in writing, we cannot accept an obligation to keep the plans or materials you send us confidential, and we may already be looking at, or invested in, similar companies. Please consider this before sending anything you regard as confidential.</p>
        <h2>Privacy</h2>
        <p>We collect the information you send us through our pitch form, meeting bookings, chat or email, such as your name, email address, company details and message, and use it to reply to you, review your request and keep a record of it. We do not sell it. Bookings are handled by Cal.com and chat by Intercom, under their own privacy terms. You can choose which optional cookies we use in the cookie notice. Depending on where you live, including under US state law, the Nigeria Data Protection Act and UK data protection law, you may ask to see, correct or delete your information by emailing <a :href="'mailto:' + email">{{ email }}</a>.</p>
        <h2>Limitation of liability</h2>
        <p>To the fullest extent permitted by law, neither Aidi Ventures nor any company or person in The Aidi Group is liable for any loss arising from your use of, or reliance on, this Website or the Materials.</p>
        <h2>Changes to these terms</h2>
        <p>We may update these terms at any time. Continuing to use the Website after a change means you accept the updated terms.</p>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the State of California. Any dispute relating to them will be resolved in the state or federal courts in Santa Clara County, California. If any part of these terms is found unenforceable, the rest remains in effect.</p>
        <h2>Fraud warning</h2>
        <p>People sometimes pretend to represent well-known firms. Aidi Ventures and its people will never promote investments to the public through social media or messaging apps, and will never ask founders for fees to review a pitch, or ask anyone for money, bank details or personal information by phone, text or direct message. If you think someone is impersonating us, email <a :href="'mailto:' + email">{{ email }}</a>.</p>
        <h2>Anti-money laundering</h2>
        <p>Read our <NuxtLink to="/aml-policy">Anti-Money Laundering Policy</NuxtLink>.</p>
        <p class="av-eff">Effective date: November 2026</p>
      </article>
    </main>
    <AppFooter />
  </div>
</template>
