<script setup lang="ts">
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
    <rect width="100%" height="100%" fill="url(#checker-bg)" />
  </svg>
  <main class="mx-16 bg-[var(--background)]">
    <router-view />
  </main>
</template>
