<script setup lang="ts">
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { contentXMargin, contentTransform, windowWidth, windowHeight } = toRefs(useLPStore())
  const contentWidth = computed(
    () => `calc(${100 / contentTransform.value}% - ${contentXMargin.value} - ${contentXMargin.value})`
  )
  const responsiveFixedTagHeight = computed(() => `${100 / contentTransform.value}vh`)
  const mainElement = ref(null)
  const { height: contentHeight } = useElementSize(mainElement)
  const responsiveFixedTagTop = computed(() => {
    const outputRaw = useWindowScroll().y.value / contentTransform.value
    const output = Math.min(outputRaw, contentHeight.value * contentTransform.value)
    return `${output}px`
  })
  const strokeColor = '#808080'
</script>
<template>
  <svg
    id="eC9awfLpthS1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    class="fixed w-screen h-screen z-behind"
  >
    <defs>
      <pattern id="checker-bg" width="32" height="32" patternUnits="userSpaceOnUse">
        <rect width="16" height="16" rx="0" ry="0" :fill="strokeColor" stroke-width="0" />
        <rect width="16" height="16" rx="0" ry="0" transform="translate(16 16)" :fill="strokeColor" stroke-width="0" />
      </pattern>
    </defs>
    <rect fill="url(#checker-bg)" class="responsive-rect" />
  </svg>
  <main ref="mainElement">
    <router-view />
  </main>
</template>
<style lang="postcss">
  main {
    @apply relative transition-all duration-300 ease-in bg-[var(--background)];
    margin: 0 v-bind('contentXMargin');
    transform: scale(v-bind('contentTransform'));
    transform-origin: top left;
    width: v-bind('contentWidth');
  }
  .responsive-fixed {
    @apply absolute top-0 left-0 w-full transition-all duration-300 ease-in-out;
    margin-top: v-bind('responsiveFixedTagTop');
    height: v-bind('responsiveFixedTagHeight');
  }
  .responsive-rect {
    width: v-bind('`${windowWidth}px`');
    height: v-bind('`${windowHeight}px`');
  }
</style>
