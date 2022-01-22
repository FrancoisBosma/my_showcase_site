<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Playground, Skills } from '../components'

  const isMenuVisible = ref(false)
</script>

<template>
  <menu class="fixed left-0 h-screen m-0 w-52" w:border="1 solid red-800">{{ isMenuVisible }}</menu>
  <div class="pl-52">
    <Introduction />
    <Skills />
    <Playground />
    <Contact />
  </div>
</template>
