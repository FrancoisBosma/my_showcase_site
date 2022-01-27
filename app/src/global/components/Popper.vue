<script setup lang="ts">
  import Popper from 'vue3-popper'
</script>

<template>
  <Popper placement="top" arrow>
    <slot name="default" />
    <template #content>
      <slot name="content" />
    </template>
  </Popper>
</template>
