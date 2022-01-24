<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Menu, Playground, Skills } from '../components'
</script>

<template>
  <Menu />
  <div class="xl:pl-52 children:(p-12)">
    <Introduction />
    <Skills />
    <Playground />
    <Contact />
  </div>
</template>
