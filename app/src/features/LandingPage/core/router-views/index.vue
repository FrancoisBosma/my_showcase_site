<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Menu, Playground, Skills } from '../components'
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { contentXMargin, bScreenXl } = toRefs(useLPStore())
  const responsiveContentPadding = computed(() => (bScreenXl.value ? `calc(13rem + ${contentXMargin.value})` : '0'))
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
    padding-left: v-bind('responsiveContentPadding');
    & > * {
      @apply relative px-12 py-28 h-max overflow-y-visible flex flex-col justify-center;
      overflow-x: clip;
    }
  }
</style>
