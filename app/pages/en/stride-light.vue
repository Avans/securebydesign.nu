<template>
  <CanvasPlaat :t="data" />
</template>

<script setup>
import data from '~/content/stride-light.en'

useHead({ title: data.title, meta: [{ name: 'robots', content: 'noindex' }] })
</script>
