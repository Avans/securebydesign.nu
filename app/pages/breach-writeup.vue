<template>
  <BreachWriteup :t="data" />
</template>

<script setup>
import data from '~/content/breach-writeup.nl'

useHead({ title: data.title, meta: [{ name: 'robots', content: 'noindex' }] })
</script>
