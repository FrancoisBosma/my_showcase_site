<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Menu, Playground, Skills } from '../components'
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { screenSizeLevels, bScreenXl } = toRefs(useLPStore())
  watchEffect(() => document.documentElement.setAttribute('screen-size-levels', screenSizeLevels.value))
  const responsiveContentPadding = computed(() => (bScreenXl.value ? 'calc(13rem)' : '0'))
</script>

<template>
  <Menu />
  <div class="main-content">
    <Introduction />
    <Playground />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>
<style scoped lang="postcss">
  .main-content {
    padding-left: v-bind('responsiveContentPadding');
    & > * {
      @apply relative px-12 py-56 h-max overflow-y-visible;
      overflow-x: clip;
    }
  }
</style>
<style lang="postcss">
  html[screen-size-levels*='lowest'] {
    @apply text-0.625rem;
    h1 {
      @apply text-5xl;
    }
    h2 {
      @apply text-3xl tracking-1px;
    }
    h3 {
      @apply text-xl;
    }
    .background-title {
      @apply text-15xl;
    }
    .typed {
      @apply tracking-1px;
    }
  }
  html[screen-size-levels*='3xs'] {
    @apply text-xs;
  }
  html[screen-size-levels*='2xs'] {
    @apply text-sm;
  }
  html[screen-size-levels*=' xs'] {
    @apply text-base;
  }
  html[screen-size-levels*='sm'] {
    h1 {
      @apply text-6xl;
    }
    h2 {
      @apply text-4xl;
    }
    h3 {
      @apply text-2xl;
    }
    .background-title {
      @apply text-20xl;
    }
    p {
      @apply text-sm;
    }
  }
  html[screen-size-levels*='md'] {
    h1 {
      @apply text-7xl;
    }
    h2 {
      @apply text-5xl;
    }
    h3 {
      @apply text-3xl;
    }
    .background-title {
      @apply text-25xl;
    }
    p {
      @apply text-base;
    }
  }
  html[screen-size-levels*='lg'] {
    h1 {
      @apply text-8xl;
    }
    h2 {
      @apply text-6xl;
    }
    h3 {
      @apply text-4xl;
    }
    .background-title {
      @apply text-30xl;
    }
    p {
      @apply text-lg;
    }
  }
</style>
