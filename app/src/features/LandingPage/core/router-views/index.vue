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
  <div class="xl:pl-52" w:children="relative p-12 min-h-screen overflow-x-hidden flex flex-col justify-center">
    <Introduction />
    <Playground />
    <Skills />
    <Contact />
  </div>
</template>
