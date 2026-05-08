/**
 * Cal.com plugin (client-only).
 *
 * Loads Cal's embed script and initializes the booking namespace so any
 * `<button data-cal-link="…">` on the page gets wired up to open the booking
 * modal on click. The vendor snippet uses `var` and IIFEs — kept verbatim to
 * avoid drift from upstream.
 *
 * Customize via runtimeConfig.public.calNamespace / calBrandColor in
 * nuxt.config.ts.
 */

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      ns?: Record<string, (...args: unknown[]) => void>
      loaded?: boolean
      q?: unknown[]
    }
  }
}

export default defineNuxtPlugin(() => {
  // Skip during SSR — Cal manipulates the DOM.
  if (import.meta.server) return

  const config = useRuntimeConfig()
  const namespace = config.public.calNamespace as string
  const brandColor = config.public.calBrandColor as string

  // Vendor snippet (verbatim from cal.com/docs/install snippet).
  ;(function (C, A, L) {
    const p = function (a: any, ar: unknown) {
      a.q.push(ar)
    }
    const d = C.document
    C.Cal =
      C.Cal ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        const cal = C.Cal as any
        const ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api = function () {
            // eslint-disable-next-line prefer-rest-params
            p(api, arguments)
          } as any
          const ns = ar[1]
          api.q = api.q || []
          if (typeof ns === 'string') {
            cal.ns[ns] = cal.ns[ns] || api
            p(cal.ns[ns], ar)
            p(cal, ['initNamespace', ns])
          } else {
            p(cal, ar)
          }
          return
        }
        p(cal, ar)
      }
  })(window as any, 'https://app.cal.com/embed/embed.js', 'init')

  ;(window.Cal as any)('init', namespace, { origin: 'https://app.cal.com' })
  ;(window.Cal!.ns as any)[namespace]('ui', {
    cssVarsPerTheme: {
      light: { 'cal-brand': brandColor },
      dark: { 'cal-brand': '#f5f2ec' },
    },
    hideEventTypeDetails: false,
    layout: 'month_view',
  })
})
