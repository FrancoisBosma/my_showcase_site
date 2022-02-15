<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Menu, Playground, Skills } from '../components'
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { screenSizeLevels, bScreenXl } = toRefs(useLPStore())
  const responsiveContentPadding = computed(() => (bScreenXl.value ? 'calc(13rem)' : '0'))
</script>

<template>
  <Menu />
  <div class="main-content" :screen-size-levels="screenSizeLevels">
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
      @apply relative px-12 py-56 h-max overflow-y-visible;
      overflow-x: clip;
    }
  }
</style>
<style lang="postcss">
  /* html .main-content[screen-size-levels*='lowest'] {
    @apply text-xs;
    h1 {
      @apply text-5xl;
    }
  }
  html .main-content[screen-size-levels*='3xs'] {
    @apply text-sm;
  }
  html .main-content[screen-size-levels*='2xs'] {
    @apply text-base;
  }
  html .main-content[screen-size-levels*='sm'] {
    h1 {
      @apply text-6xl;
    }
  }
  html .main-content[screen-size-levels*='md'] {
    h1 {
      @apply text-7xl;
    }
  }
  html .main-content[screen-size-levels*='lg'] {
    h1 {
      @apply text-8xl;
    }
  } */
  /* html .main-content {
    &[screen-size-levels*='lowest'] {
      @apply text-xs;
    }
    &[screen-size-levels*='3xs'] {
      @apply text-sm;
    }
    &[screen-size-levels*='2xs'] {
      @apply text-base;
    }
  } */
  /* h1 {
    &[screen-size-levels*='lowest'] {
      @apply text-5xl;
    }
    &[screen-size-levels*='sm'] {
      @apply text-6xl;
    }
    &[screen-size-levels*='md'] {
      @apply text-7xl;
    }
    &[screen-size-levels*='lg'] {
      @apply text-8xl;
    }
  }
  h2 {
    &[screen-size-levels*='lowest'] {
      @apply text-3xl;
    }
    &[screen-size-levels*='sm'] {
      @apply text-4xl;
    }
    &[screen-size-levels*='md'] {
      @apply text-5xl;
    }
    &[screen-size-levels*='lg'] {
      @apply text-6xl;
    }
  }
  h3 {
    &[screen-size-levels*='lowest'] {
      @apply text-xl;
    }
    &[screen-size-levels*='sm'] {
      @apply text-2xl;
    }
    &[screen-size-levels*='md'] {
      @apply text-3xl;
    }
    &[screen-size-levels*='lg'] {
      @apply text-4xl;
    }
  }
  .background-title {
    &[screen-size-levels*='lowest'] {
      @apply text-15xl;
    }
    &[screen-size-levels*='sm'] {
      @apply text-20xl;
    }
    &[screen-size-levels*='md'] {
      @apply text-25xl;
    }
    &[screen-size-levels*='lg'] {
      @apply text-30xl;
    }
  }
  p {
    &[screen-size-levels*='lowest'] {
      @apply text-xs tracking-1px;
    }
    &[screen-size-levels*='sm'] {
      @apply text-sm tracking-2px;
    }
    &[screen-size-levels*='md'] {
      @apply text-base tracking-4px;
    }
    &[screen-size-levels*='lg'] {
      @apply text-lg;
    }
  } */
</style>
