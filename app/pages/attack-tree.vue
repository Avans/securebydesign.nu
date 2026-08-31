<template>
  <CanvasPlaat :t="data" />
</template>

<script setup>
import data from '~/content/attack-tree.nl'

useHead({ title: data.title, meta: [{ name: 'robots', content: 'noindex' }] })
</script>
