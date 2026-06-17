// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-17',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'nl' },
      title: 'Secure by Design · Minor',
      link: [
        // Static spinning-shield SVG (animates in Firefox/Safari); the
        // animated-favicon client plugin drives the spin in all browsers.
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Minor Secure by Design — veiligheid als ontwerpkwaliteit. Fundament, Professioneel Profiel en het Cybersecurity-project.'
        }
      ]
    }
  }
})
