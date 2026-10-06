<!--
  pitch.vue — founder pitch form. Posts to Aidi OS, where every pitch is screened and read by a partner.
-->
<template>
  <div>
    <AppNav />
    <main class="pitch">
      <div class="pitch-inner">
        <NuxtLink to="/" class="back">← Back to Aidi Ventures</NuxtLink>
        <p class="eyebrow-l">Aidi Ventures</p>
        <h1 class="pitch-title">Pitch <em>us</em></h1>
        <p class="pitch-lede">We back exceptional African and diaspora technical founders building AI, infrastructure and financial services for the world, from pre-seed to Series A. Open to founders of every background. A partner reads every pitch.</p>

        <div v-if="sent" class="done" role="status">
          <h2>Thank you.</h2>
          <p>We have received your pitch and sent a confirmation to {{ form.email }}. We will be in touch if there is a fit.</p>
          <NuxtLink to="/" class="home">Return to homepage →</NuxtLink>
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
            <label>Country of operation<select v-model="form.country" required><option value="" disabled>Choose a country</option><option v-for="c in COUNTRIES" :key="c" :value="c">{{ c }}</option></select></label>
      <div v-if="form.country" class="ftype">
        <p class="ftq">What are you raising?</p>
        <div class="fcards" role="radiogroup" aria-label="What are you raising?">
          <button type="button" role="radio" :aria-checked="form.funding_type === 'equity'" :class="{ on: form.funding_type === 'equity' }" @click="form.funding_type = 'equity'"><i /><b>Equity investment</b><span>Pre-seed to Series A, in exchange for a stake in your company.</span></button>
          <button type="button" role="radio" :aria-checked="form.funding_type === 'loan'" :class="{ on: form.funding_type === 'loan' }" @click="form.funding_type = 'loan'"><i /><b>Venture debt / loan</b><span>Working capital or growth financing, repaid over an agreed term.</span></button>
        </div>
      </div>
      <div v-if="form.funding_type === 'loan'" class="loanbox">
        <p class="lhead">Loan details</p>
        <p class="lnote">Loans are assessed by our credit team. We check the business and the founders' credit history, with your consent, through licensed credit bureaus.</p>
        <div class="lgrid">
          <label class="field">Loan amount<input v-model="form.loan_amount" type="number" min="1" required></label>
          <label class="field">Currency<select v-model="form.loan_currency"><option>NGN</option><option>USD</option></select></label>
          <label class="field">Tenor (months)<input v-model="form.loan_tenor_months" type="number" min="1" max="120" placeholder="e.g. 12"></label>
          <label class="field">Average monthly revenue<input v-model="form.monthly_revenue" type="number" min="0"></label>
          <label class="field">Phone<input v-model="form.phone" type="tel" maxlength="30"></label>
          <label class="field wide">What the loan is for<textarea v-model="form.loan_purpose" rows="3" maxlength="2000" /></label>
        </div>
        <template v-if="form.country && /nigeria/i.test(form.country)">
          <p class="lhead sub">Credit check (Nigeria)</p>
          <div class="lgrid">
            <label class="field">Business RC number<input v-model="form.rc_number" maxlength="20" placeholder="e.g. RC123456"></label>
            <label class="field">Founder BVN<input v-model="form.bvn" inputmode="numeric" pattern="\d{11}" maxlength="11" required placeholder="11 digits"></label>
            <label class="field">Founder NIN<input v-model="form.nin" inputmode="numeric" pattern="\d{11}" maxlength="11" placeholder="11 digits"></label>
            <label class="field">Founder date of birth<input v-model="form.dob" type="date"></label>
          </div>
          <p class="lnote">By sending, you consent to Aidi Ventures checking your business and personal credit history for this loan request. Your BVN and NIN are stored encrypted and used only for this purpose.</p>
        </template>
      </div>
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
          <div v-if="siteKey" class="human">
            <div ref="captchaEl" />
            <p class="human-status" :data-state="captchaState" aria-live="polite">
              <span class="dot" aria-hidden="true" />{{ captchaState === 'ok' ? 'Verified as human · protected by Cloudflare Turnstile' : captchaState === 'error' ? 'We could not run the human check' + (captchaCode ? ' (code ' + captchaCode + ')' : '') + '. Refresh the page and try again.' : 'Checking you are human…' }}
            </p>
          </div>
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
const COUNTRIES = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Rwanda", "Senegal", "Côte d'Ivoire", "Morocco", "Ethiopia", "Uganda", "Tanzania", "Cameroon", "Zambia", "Zimbabwe", "Botswana", "Namibia", "Tunisia", "Algeria", "Benin", "Togo", "Sierra Leone", "Liberia", "Gambia", "Mali", "Burkina Faso", "Niger", "Mozambique", "Malawi", "Angola", "Democratic Republic of the Congo", "Mauritius", "United States", "United Kingdom", "Canada", "France", "Germany", "Netherlands", "Ireland", "United Arab Emirates", "India", "Singapore", "Other"]
useHead({
  title: 'Pitch us — Aidi Ventures',
  meta: [{ name: 'description', content: 'Pitch Aidi Ventures. A partner reads every submission.' }],
  link: [{ rel: 'canonical', href: 'https://aidiventures.com/pitch' }]
})
const config = useRuntimeConfig()
const siteKey = config.public.turnstileSiteKey as string
const endpoint = config.public.pitchEndpoint as string
if (siteKey) useHead({ script: [{ src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit', async: true, defer: true }] })

// Turnstile, rendered after hydration so Vue never removes it. Invisible unless Cloudflare needs an interaction.
interface Turnstile {
  render: (el: HTMLElement, o: Record<string, unknown>) => string
  reset: (id?: string) => void
  remove: (id?: string) => void
}
const captchaState = ref<'checking' | 'ok' | 'error'>('checking')
const captchaToken = ref('')
const captchaCode = ref('')
let widgetId: string | undefined
onMounted(() => {
  if (!siteKey) return
  let tries = 0
  const timer = setInterval(() => {
    const ts = (window as unknown as { turnstile?: Turnstile }).turnstile
    if (ts && captchaEl.value) {
      clearInterval(timer)
      widgetId = ts.render(captchaEl.value, {
        sitekey: siteKey,
        theme: 'light',
        appearance: 'interaction-only',
        'refresh-expired': 'auto',
        callback: (token: string) => { captchaToken.value = token; captchaState.value = 'ok' },
        'expired-callback': () => { captchaToken.value = ''; captchaState.value = 'checking' },
        'error-callback': (code: string) => { captchaToken.value = ''; captchaCode.value = String(code ?? ''); captchaState.value = 'error'; console.warn('[turnstile] error', code); return true }
      })
    } else if (++tries > 100) { clearInterval(timer); captchaState.value = 'error' }
  }, 100)
})
onBeforeUnmount(() => { const ts = (window as unknown as { turnstile?: Turnstile }).turnstile; if (ts && widgetId) ts.remove(widgetId) })
function resetCaptcha() {
  const ts = (window as unknown as { turnstile?: Turnstile }).turnstile
  captchaToken.value = ''; captchaState.value = 'checking'
  if (ts && widgetId) ts.reset(widgetId)
}

const form = reactive({ funding_type: 'equity', loan_amount: '', loan_currency: 'NGN', loan_tenor_months: '', loan_purpose: '', monthly_revenue: '', rc_number: '', bvn: '', nin: '', dob: '', phone: '',
  founder_name: '', email: '', company: '', website: '', one_liner: '', stage: '', sector: '', country: '',
  raising_usd: '', deck_url: '', description: '', traction: '', team: '', female_founder: false, website_url_confirm: ''
})
const busy = ref(false)
const sent = ref(false)
const error = ref('')
const captchaEl = ref<HTMLElement | null>(null)

// The check usually finishes before the founder is done typing; if not, wait up to 8 seconds for it.
async function turnstileToken(): Promise<string> {
  for (let i = 0; i < 40 && !captchaToken.value && captchaState.value !== 'error'; i++) await new Promise((r) => setTimeout(r, 200))
  return captchaToken.value
}

async function submit() {
  error.value = ''
  if (!form.founder_name || !form.email || !form.company || !form.one_liner || !form.stage || form.description.length < 20) {
    error.value = 'Please fill in your name, email, company, one-liner, stage and a description of at least 20 characters.'
    return
  }
  const raising = form.raising_usd.replace(/[^0-9]/g, '')
  busy.value = true
  const token = siteKey ? await turnstileToken() : ''
  if (siteKey && !token) { busy.value = false; error.value = 'We could not confirm you are human. Please wait a moment and try again.'; return }
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
    captchaToken.value = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'We could not send your pitch. Please try again.'
    if (siteKey) resetCaptcha() // each token works once
  } finally {
    busy.value = false
  }
}
</script>

<style scoped>
.pitch { padding: 140px var(--gutter) 96px; background: #fff; }
.pitch-inner { max-width: 760px; margin: 0 auto; }
.back { display: inline-block; font-size: 13px; color: var(--ink-muted); text-decoration: none; margin-bottom: 28px; }
.back:hover { color: var(--ink); }
.home { display: inline-block; margin-top: 18px; color: var(--blue); font-weight: 500; text-decoration: none; }
.human { display: flex; flex-direction: column; gap: 8px; }
.human-status { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--ink-muted); margin: 0; }
.human-status .dot { width: 8px; height: 8px; background: #b9c3cc; flex: none; }
.human-status[data-state='checking'] .dot { background: var(--gold); animation: pulse 1.2s ease-in-out infinite; }
.human-status[data-state='ok'] { color: #1f7a4d; } .human-status[data-state='ok'] .dot { background: #1f7a4d; }
.human-status[data-state='error'] { color: #b42318; } .human-status[data-state='error'] .dot { background: #b42318; }
@keyframes pulse { 50% { opacity: .35; } }
@media (prefers-reduced-motion: reduce) { .human-status .dot { animation: none !important; } }
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
.ftype, .loanbox { grid-column: 1 / -1; flex-basis: 100%; width: 100%; }
.ftq { font-size: 13px; letter-spacing: .12em; text-transform: uppercase; color: #6b7280; margin: 6px 0 10px; }
.fcards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.fcards button { position: relative; text-align: left; background: #fff; border: 1px solid #d6d9de; padding: 18px 18px 18px 50px; cursor: pointer; font: inherit; color: inherit; display: flex; flex-direction: column; gap: 4px; transition: border-color .15s, box-shadow .15s; }
.fcards button:hover { border-color: #1c4f9c; }
.fcards button.on { border-color: #1c4f9c; box-shadow: 0 0 0 1px #1c4f9c; background: #f5f8fd; }
.fcards button i { position: absolute; left: 18px; top: 20px; width: 18px; height: 18px; border: 1.5px solid #9aa3ad; border-radius: 50%; }
.fcards button.on i { border-color: #1c4f9c; } .fcards button.on i::after { content: ''; position: absolute; inset: 3px; border-radius: 50%; background: #1c4f9c; }
.fcards b { font-size: 16px; font-weight: 600; color: #0c1a2e; } .fcards span { font-size: 14px; color: #6b7280; line-height: 1.45; }
.loanbox { border: 1px solid #e3e6ea; background: #fafbfc; padding: 20px 22px; display: flex; flex-direction: column; gap: 12px; }
.lhead { font-size: 16px; font-weight: 600; color: #0c1a2e; margin: 0; } .lhead.sub { font-size: 14px; margin-top: 6px; }
.lnote { font-size: 13.5px; color: #6b7280; margin: 0; line-height: 1.5; }
.lgrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 20px; } .lgrid .wide { grid-column: 1 / -1; }
@media (max-width: 760px) { .fcards, .lgrid { grid-template-columns: 1fr; } }
</style>
