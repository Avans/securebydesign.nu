// Scroll-reveal: any element with class "reveal" fades/slides in the first time
// it scrolls into view. SSR-safe (the element renders hidden via CSS, the client
// adds ".in" to trigger the keyframe). Honours prefers-reduced-motion.
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  let io: IntersectionObserver | null = null

  const show = (el: Element) => el.classList.add('in')

  function observer() {
    if (reduce || !('IntersectionObserver' in window)) return null
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              show(e.target)
              io!.unobserve(e.target)
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -7% 0px' }
      )
    }
    return io
  }

  function scan() {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const obs = observer()
    if (!obs) {
      els.forEach(show) // reduced motion / no IO → just show everything
      return
    }
    els.forEach((el) => obs.observe(el))
  }

  // run on first mount and after every client-side navigation
  nuxtApp.hook('app:mounted', () => requestAnimationFrame(scan))
  nuxtApp.hook('page:finish', () => requestAnimationFrame(scan))
})
