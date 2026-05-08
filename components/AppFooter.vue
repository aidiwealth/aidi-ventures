<!--
  AppFooter.vue — bottom slab containing the giant AIDI watermark behind a
  six-paragraph legal disclaimer, plus the corporate HQ + copyright line.
  Mirrors joinaidi.com's footer pattern.
-->
<template>
  <footer class="footer">
    <!-- Giant AIDI wordmark behind disclaimer (decorative). -->
    <div class="footer-watermark" aria-hidden="true">
      <AidiWordmark />
    </div>

    <div class="footer-inner">
      <div class="footer-disclaimer">
        <p>
          <strong>Disclaimer:</strong> Aidi Ventures is the venture investment
          and holding arm of the Aidi Ventures Group. Aidi Ventures and its
          affiliates are not broker-dealers, custodians, or RIAs.
        </p>
        <p>
          Aidi Ventures may invest as a principal in startups, funds, and other
          private market opportunities through affiliated entities. In
          addition, Aidi Ventures may provide advisory, strategic, or
          operational support to portfolio companies and partners. Such
          activities may create potential conflicts of interest, including
          situations where Aidi Ventures or its affiliates have a financial
          interest in the investments referenced.
        </p>
        <p>
          Investment opportunities referenced on this platform are not offers
          to sell or solicitations to buy securities. Any participation in
          investment opportunities is conducted through separately structured
          legal entities, including funds or special purpose vehicles, and is
          subject to applicable securities laws and formal offering
          documentation.
        </p>
        <p>
          In the United States, advisory services are provided by Aidi Ventures
          LLC and/or Aidi Wealth LLC in partnership with registered investment
          advisors, where applicable. In Nigeria, services are delivered
          through Aidi Technology Limited, subject to applicable local
          regulations.
        </p>
        <p>
          All investments involve risk, including the potential loss of
          principal. Past performance is not indicative of future results.
          Investments in startups and private markets are illiquid,
          speculative, and subject to substantial risk of loss.
        </p>
        <p>
          Information presented on this site is for informational purposes only
          and should not be construed as investment, legal, or tax advice, or
          as an offer or solicitation in any jurisdiction where such services
          are not authorized. Availability of products and services may vary by
          location and applicable regulations. Certain opportunities may be
          available only to qualified or accredited investors.
        </p>
      </div>

      <div class="footer-bottom">
        <div class="footer-copy">
          Corporate Headquarters: 6203 San Ignacio Ave, Suite 110, San Jose, CA
          95119&nbsp;&nbsp;·&nbsp;&nbsp;© {{ year }} Aidi Ventures LLC. All
          rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Computed once on render — fine for SSR (the year only changes annually,
// and the page is regenerated each request anyway).
const year = new Date().getFullYear()
</script>
