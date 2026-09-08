<script setup>
import EindeventPlaat from '~/components/EindeventPlaat.vue'
import data from '~/content/eindevent.nl'
useHead({ title: 'Eind Event · Secure by Design' })
</script>

<template>
  <EindeventPlaat :t="data" />
</template>
