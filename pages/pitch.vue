<!--
  pitch.vue — founder pitch form. Posts to Aidi OS, where every pitch is screened and read by a partner.
-->
<template>
  <div>
    <AppNav />
    <main class="pitch">
      <div class="pitch-inner">
        <p class="eyebrow-l">Aidi Ventures</p>
        <h1 class="pitch-title">Pitch <em>us</em></h1>
        <p class="pitch-lede">We back exceptional African and diaspora technical founders building AI, infrastructure and financial services for the world, from pre-seed to Series A. Open to founders of every background. A partner reads every pitch.</p>

        <div v-if="sent" class="done" role="status">
          <h2>Thank you.</h2>
          <p>We have received your pitch and sent a confirmation to {{ form.email }}. We will be in touch if there is a fit.</p>
        </div>

        <form v-else class="form" novalidate @submit.prevent="submit">
          <div class="two">
            <label>Your name<input v-model="form.founder_name" required maxlength="200" autocomplete="name"></label>
            <label>Email<input v-model="form.email" type="email" required maxlength="254" autocomplete="email"></label>
          </div>
          <div class="two">
            <label>Company<input v-model="form.company" required maxlength="200" autocomplete="organization"></label>
            <label>Website<input v-model="form.website" type="url" maxlength="500" placeholder="https://"></label>
          </div>
          <label>One-line description<input v-model="form.one_liner" required maxlength="300" placeholder="What you do, for whom"></label>
          <div class="three">
            <label>Stage
              <select v-model="form.stage" required>
                <option value="" disabled>Choose</option>
                <option value="pre_seed">Pre-seed</option><option value="seed">Seed</option>
                <option value="series_a">Series A</option><option value="series_b">Series B</option><option value="later">Later</option>
              </select>
            </label>
            <label>Sector<input v-model="form.sector" maxlength="100" placeholder="e.g. Fintech, AI"></label>
            <label>Country of operation<input v-model="form.country" maxlength="100"></label>
          </div>
          <div class="two">
            <label>Raising (USD)<input v-model="form.raising_usd" inputmode="numeric" placeholder="e.g. 1500000"></label>
            <label>Deck link<input v-model="form.deck_url" type="url" maxlength="1000" placeholder="DocSend, Google Drive or similar"></label>
          </div>
          <label>What are you building, and why now?<textarea v-model="form.description" required minlength="20" maxlength="5000" rows="5" /></label>
          <label>Traction<textarea v-model="form.traction" maxlength="3000" rows="3" placeholder="Users, revenue, growth, pilots" /></label>
          <label>Team<textarea v-model="form.team" maxlength="3000" rows="3" placeholder="Founders and relevant experience" /></label>
          <label class="check"><input v-model="form.female_founder" type="checkbox"> At least one founder is a woman (optional)</label>
          <div class="hp" aria-hidden="true"><label>Leave this empty<input v-model="form.website_url_confirm" tabindex="-1" autocomplete="off"></label></div>
          <div v-if="siteKey" ref="captchaEl" class="cf-turnstile" :data-sitekey="siteKey" data-theme="light" />
          <p class="small">By submitting, you agree that Aidi Ventures stores these details to review your pitch. See our <a href="https://theaidigroup.com/legal" target="_blank" rel="noopener">privacy notice</a>.</p>
          <button class="btn btn-dark" type="submit" :disabled="busy">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><line x1="3" y1="13" x2="13" y2="3" /><polyline points="6 3 13 3 13 10" /></svg>
            {{ busy ? 'Sending…' : 'Send pitch' }}
          </button>
          <p v-if="error" class="err" role="alert">{{ error }}</p>
        </form>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Pitch us — Aidi Ventures',
  meta: [{ name: 'description', content: 'Pitch Aidi Ventures. A partner reads every submission.' }],
  link: [{ rel: 'canonical', href: 'https://aidiventures.com/pitch' }]
})
const config = useRuntimeConfig()
const siteKey = config.public.turnstileSiteKey as string
const endpoint = config.public.pitchEndpoint as string
if (siteKey) useHead({ script: [{ src: 'https://challenges.cloudflare.com/turnstile/v0/api.js', async: true, defer: true }] })

const form = reactive({
  founder_name: '', email: '', company: '', website: '', one_liner: '', stage: '', sector: '', country: '',
  raising_usd: '', deck_url: '', description: '', traction: '', team: '', female_founder: false, website_url_confirm: ''
})
const busy = ref(false)
const sent = ref(false)
const error = ref('')
const captchaEl = ref<HTMLElement | null>(null)

async function submit() {
  error.value = ''
  if (!form.founder_name || !form.email || !form.company || !form.one_liner || !form.stage || form.description.length < 20) {
    error.value = 'Please fill in your name, email, company, one-liner, stage and a description of at least 20 characters.'
    return
  }
  const raising = form.raising_usd.replace(/[^0-9]/g, '')
  const token = (captchaEl.value?.querySelector('input[name="cf-turnstile-response"]') as HTMLInputElement | null)?.value
  if (siteKey && !token) { error.value = 'Please complete the check above the button.'; return }
  busy.value = true
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ...form,
        raising_usd: raising ? Number(raising) : undefined,
        female_founder: form.female_founder || undefined,
        turnstile_token: token || undefined
      })
    })
    if (!res.ok) {
      const data = await res.json().catch(() => null) as { data?: { error?: { message?: string } } } | null
      throw new Error(data?.data?.error?.message || 'We could not send your pitch. Please try again.')
    }
    sent.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'We could not send your pitch. Please try again.'
  } finally {
    busy.value = false
  }
}
</script>

<style scoped>
.pitch { padding: 140px var(--gutter) 96px; background: #fff; }
.pitch-inner { max-width: 760px; margin: 0 auto; }
.eyebrow-l { font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-muted); margin: 0 0 12px; }
.pitch-title { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: clamp(26px, 3.2vw, 42px); line-height: 1.05; letter-spacing: -0.03em; color: var(--ink); margin: 0 0 16px; }
.pitch-title em { color: var(--blue); font-style: italic; }
.pitch-lede { font-size: 14px; line-height: 1.7; color: var(--ink-soft); margin: 0 0 40px; max-width: 62ch; }
.form { display: flex; flex-direction: column; gap: 18px; }
.two, .three { display: grid; gap: 18px; grid-template-columns: 1fr 1fr; }
.three { grid-template-columns: 1fr 1fr 1fr; }
label { display: flex; flex-direction: column; gap: 6px; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-muted); }
input, select, textarea { font: inherit; font-size: 14px; letter-spacing: normal; text-transform: none; color: var(--ink); background: #fff; border: 1px solid rgba(12,26,46,.2); padding: 11px 12px; }
textarea { resize: vertical; }
input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid var(--gold); outline-offset: 1px; }
.check { flex-direction: row; align-items: center; gap: 10px; text-transform: none; letter-spacing: normal; font-size: 14px; color: var(--ink-soft); }
.check input { width: 16px; height: 16px; }
.hp { position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden; }
.small { font-size: 12px; color: var(--ink-muted); margin: 0; }
.small a { color: var(--blue); }
.btn { align-self: flex-start; }
.err { color: #b42318; margin: 0; }
.done { border: 1px solid rgba(12,26,46,.12); background: #f5f5f3; padding: 28px; }
.done h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 28px; color: var(--ink); margin: 0 0 8px; }
.done p { margin: 0; color: var(--ink-soft); }
@media (max-width: 760px) { .two, .three { grid-template-columns: 1fr; } .pitch { padding-top: 110px; } }
</style>
