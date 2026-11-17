<!--
  aml-policy.vue — Aidi Ventures' anti-money laundering policy. Adapted from The Aidi Group's policy for the venture firm.
-->
<script setup lang="ts">
const title = 'Anti-Money Laundering Policy — Aidi Ventures'
const description = 'How Aidi Ventures prevents, detects and reports money laundering and terrorist financing.'
useHead({ title, link: [{ rel: 'canonical', href: 'https://aidiventures.com/aml-policy' }], meta: [{ name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }] })
const email = useRuntimeConfig().public.contactEmail as string
</script>

<template>
  <div>
    <AppNav />
    <main class="av-page">
      <header class="av-phero"><div class="av-narrow"><span class="eyebrow">Legal</span><h1>Anti-Money Laundering <em>Policy</em></h1></div></header>
      <article class="av-prose">
        <h2>Overview</h2>
        <p>Aidi Ventures is committed to the highest standards of integrity and compliance. This Anti-Money Laundering (AML) policy sets out how we prevent, detect and report money laundering and terrorist financing in our investment activities. It follows applicable laws and regulations, including those of the United States and the other countries where we invest, and the policies of The Aidi Group.</p>
        <h2>Scope</h2>
        <p>This policy applies to Aidi Ventures, its partners, employees, contractors and agents, and to the funds and vehicles it manages or advises. It covers our dealings with investors and limited partners, the companies we invest in, co-investors, and service providers.</p>
        <h2>What is money laundering?</h2>
        <p>Money laundering is the act of disguising the origins of illicit funds to make them appear legitimate. It involves three key stages:</p>
        <ol>
          <li><strong>Placement:</strong> introducing illegal funds into the financial system.</li>
          <li><strong>Layering:</strong> concealing their origin through complex transactions.</li>
          <li><strong>Integration:</strong> returning the funds to the economy as legitimate assets.</li>
        </ol>
        <h2>Key AML measures</h2>
        <ol>
          <li><strong>Investor due diligence:</strong> we verify the identity of every investor and limited partner, and the source of their funds, before accepting capital. We apply enhanced due diligence to higher-risk investors, including politically exposed persons (PEPs).</li>
          <li><strong>Company due diligence:</strong> before investing, we confirm who owns and controls each company, screen its founders and beneficial owners against sanctions and watch lists, and review how it handles AML in its own business.</li>
          <li><strong>Sanctions screening:</strong> we do not invest in, or accept money from, people or entities subject to US (OFAC), UN, UK or EU sanctions.</li>
          <li><strong>Monitoring:</strong> we watch capital calls, distributions and other transactions for unusual patterns, including amounts or routes that do not fit what we know of the investor or company.</li>
          <li><strong>Reporting:</strong> we report suspicious activity to the relevant financial crimes authorities, and do not tell the person concerned that a report has been made.</li>
          <li><strong>Record-keeping:</strong> we keep due diligence records, transaction records and reports for at least five years.</li>
        </ol>
        <h2>Training and awareness</h2>
        <p>Everyone at Aidi Ventures completes AML training, so they understand money laundering risks, can spot suspicious activity and know how to report it.</p>
        <h2>Non-compliance</h2>
        <p>Breaching this policy may lead to disciplinary action, termination of employment or engagement, and reporting to the relevant authorities.</p>
        <h2>Whistleblower protection</h2>
        <p>We encourage anyone to report a possible breach of this policy. People who report in good faith are protected from retaliation and may report anonymously.</p>
        <h2>Policy review</h2>
        <p>We review this policy every year and update it as laws and industry standards change. For more information, or to report a concern, email <a :href="'mailto:' + email">{{ email }}</a>.</p>
        <p class="av-eff">Effective date: November 2026</p>
      </article>
    </main>
    <AppFooter />
  </div>
</template>
