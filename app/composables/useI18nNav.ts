// Locale + navigation helpers derived from the route path.
// Dutch is the default locale at "/", English lives under "/en".
export function useI18nNav() {
  const route = useRoute()

  const locale = computed<'nl' | 'en'>(() =>
    route.path === '/en' || route.path.startsWith('/en/') ? 'en' : 'nl'
  )

  // base path = the Dutch route (e.g. "/fundament"); prefixes "/en" when needed.
  function localePath(base: string) {
    if (locale.value === 'en') return base === '/' ? '/en' : '/en' + base
    return base
  }

  const otherLocale = computed<'nl' | 'en'>(() => (locale.value === 'nl' ? 'en' : 'nl'))

  // same page in the other language
  const switchPath = computed(() => {
    let base = route.path
    if (base === '/en') base = '/'
    else if (base.startsWith('/en/')) base = base.slice(3)
    if (otherLocale.value === 'en') return base === '/' ? '/en' : '/en' + base
    return base
  })

  return { locale, localePath, otherLocale, switchPath }
}
