/**
 * Intercom messenger plugin (client-only).
 *
 * Configures `window.intercomSettings` then loads the widget script. The
 * Intercom bubble appears bottom-right and connects visitors to your inbox.
 *
 * App ID is configured via runtimeConfig.public.intercomAppId.
 */

declare global {
  interface Window {
    intercomSettings?: Record<string, unknown>
    Intercom?: any
    attachEvent?: (event: string, handler: () => void) => void
  }
}

export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  const config = useRuntimeConfig()
  const appId = config.public.intercomAppId as string

  window.intercomSettings = {
    api_base: 'https://api-iam.intercom.io',
    app_id: appId,
  }

  // Vendor snippet (verbatim from Intercom install docs).
  ;(function () {
    const w = window as any
    const ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      ic('update', w.intercomSettings)
    } else {
      const d = document
      const i: any = function () {
        // eslint-disable-next-line prefer-rest-params
        i.c(arguments)
      }
      i.q = []
      i.c = function (args: unknown) {
        i.q.push(args)
      }
      w.Intercom = i
      const l = function () {
        const s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = `https://widget.intercom.io/widget/${appId}`
        const x = d.getElementsByTagName('script')[0]
        x.parentNode!.insertBefore(s, x)
      }
      if (document.readyState === 'complete') {
        l()
      } else if ((w as any).attachEvent) {
        ;(w as any).attachEvent('onload', l)
      } else {
        w.addEventListener('load', l, false)
      }
    }
  })()
})
