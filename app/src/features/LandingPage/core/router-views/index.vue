<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Playground, Skills } from '../components'
</script>

<template>
  <Introduction />
  <Skills />
  <Playground />
  <Contact />
</template>
