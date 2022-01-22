<script setup lang="ts">
  withDefaults(defineProps<{ action?: Function }>(), { action: () => () => undefined })
</script>

<template>
  <div @click="action()">BB</div>
</template>
