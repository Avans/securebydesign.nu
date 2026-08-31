<template>
  <BreachWriteup :t="data" />
</template>

<script setup>
import data from '~/content/breach-writeup.en'

useHead({ title: data.title, meta: [{ name: 'robots', content: 'noindex' }] })
</script>
