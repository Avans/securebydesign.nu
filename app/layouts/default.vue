<template>
  <div>
    <div v-if="locale === 'en'" class="dutch-note">
      <span>🇳🇱 <b>This minor is taught in Dutch only.</b> This English version explains the programme for international readers and partners — the course itself runs entirely in Dutch.</span>
    </div>

    <header class="site-header">
      <div class="wrap bar">
        <NuxtLink :to="localePath('/')" class="brand" :aria-label="locale === 'en' ? 'Avans · Secure by Design — home' : 'Avans · Secure by Design — home'">
          <img src="/avans_xl_logo.svg" alt="Avans Hogeschool" />
          <span class="div" aria-hidden="true"></span>
          <span class="name">
            <b>Secure by Design</b>
            <span>{{ locale === 'en' ? 'Minor · Avans' : 'Minor · Avans' }}</span>
          </span>
        </NuxtLink>

        <nav class="site-nav">
          <NuxtLink v-for="item in nav" :key="item.base" :to="localePath(item.base)">
            {{ item.label[locale] }}
          </NuxtLink>
        </nav>

        <NuxtLink :to="switchPath" class="lang" :aria-label="`Switch to ${otherLocale.toUpperCase()}`">
          {{ otherLocale.toUpperCase() }}
        </NuxtLink>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="wrap bar">
        <span>{{ t.footerLeft }}</span>
        <span>
          <NuxtLink :to="localePath('/contact')">{{ t.contact }}</NuxtLink> ·
          <NuxtLink :to="localePath('/partners')">{{ t.partners }}</NuxtLink>
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { locale, localePath, otherLocale, switchPath } = useI18nNav()

const nav = [
  { base: '/', label: { nl: 'Home', en: 'Home' } },
  { base: '/fundament', label: { nl: 'Fundament', en: 'Foundation' } },
  { base: '/professioneel-profiel', label: { nl: 'Professioneel Profiel', en: 'Professional Profile' } },
  { base: '/project', label: { nl: 'Project', en: 'Project' } },
  { base: '/partners', label: { nl: 'Partners', en: 'Partners' } },
  { base: '/contact', label: { nl: 'Contact', en: 'Contact' } }
]

const strings = {
  nl: {
    contact: 'Contact',
    partners: 'Partners',
    footerLeft: 'Minor Secure by Design · Avans Hogeschool — veiligheid als ontwerpkwaliteit.'
  },
  en: {
    contact: 'Contact',
    partners: 'Partners',
    footerLeft: 'Minor Secure by Design · Avans University of Applied Sciences — security as a design quality.'
  }
}
const t = computed(() => strings[locale.value])
</script>
