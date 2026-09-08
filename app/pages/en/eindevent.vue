<script setup>
import EindeventPlaat from '~/components/EindeventPlaat.vue'
import data from '~/content/eindevent.en'
useHead({ title: 'Final event · Secure by Design' })
</script>

<template>
  <EindeventPlaat :t="data" />
</template>
