// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-17',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'nl' },
      title: 'Secure by Design · Minor',
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
