<template>
  <CanvasPlaat :t="data" />
</template>

<script setup>
import data from '~/content/attack-tree.en'

useHead({ title: data.title, meta: [{ name: 'robots', content: 'noindex' }] })
</script>
