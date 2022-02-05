<script setup lang="ts">
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { contentXMargin, contentTransform } = toRefs(useLPStore())
  const contentWidth = computed(() =>
    contentTransform.value === 1 ? 'auto' : `calc(${100 / contentTransform.value}%)`
  )
  const strokeColor = '#808080'
</script>
<template>
  <svg
    id="eC9awfLpthS1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    class="fixed w-full h-full z-behind"
  >
    <defs>
      <pattern id="checker-bg" width="32" height="32" patternUnits="userSpaceOnUse">
        <rect width="16" height="16" rx="0" ry="0" :fill="strokeColor" stroke-width="0" />
        <rect width="16" height="16" rx="0" ry="0" transform="translate(16 16)" :fill="strokeColor" stroke-width="0" />
      </pattern>
    </defs>
    <rect fill="url(#checker-bg)" class="relative w-full h-full" />
  </svg>
  <main>
    <router-view />
  </main>
</template>
<style lang="postcss">
  main {
    @apply relative;
    margin: 0 v-bind('contentXMargin');
    transform: scale(v-bind('contentTransform'));
    transform-origin: top left;
    width: v-bind('contentWidth');
    &::before {
      @apply absolute top-0 left-0 w-full h-full z-behind bg-[var(--background)];
      content: '';
    }
  }
</style>
