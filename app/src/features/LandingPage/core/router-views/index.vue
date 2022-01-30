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
  <div class="main-content">
    <Introduction />
    <Playground />
    <Skills />
    <Contact />
  </div>
</template>
<style scoped lang="postcss">
  .main-content {
    @screen xl {
      @apply pl-52;
    }
    & > * {
      @apply relative p-12 h-max overflow-y-visible flex flex-col justify-center;
      overflow-x: clip;
    }
  }
</style>
