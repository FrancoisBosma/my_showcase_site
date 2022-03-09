<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: 404Layout
</route>

<script setup lang="ts">
  const { t } = useI18n()
</script>

<template>
  <div class="p-4">
    <div class="text-15xl text-[var(--important)]"> 40<div class="inline-block transform rotate-y-180">4</div> </div>
  </div>
</template>
