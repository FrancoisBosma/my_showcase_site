<script setup lang="ts">
  import Popper from 'vue3-popper'
</script>

<template>
  <Popper placement="top" arrow>
    <slot />
    <template #content="{ close, isOpen }">
      <slot name="content" :close="close" :isOpen="isOpen" />
    </template>
  </Popper>
</template>
<style lang="postcss">
  :root {
    --popper-theme-background-color: var(--emphasis);
    --popper-theme-background-color-hover: var(--emphasis);
    --popper-theme-text-color: var(--background);
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-color: #eeeeee;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 0rem;
    --popper-theme-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
  }
</style>
<style scoped lang="postcss">
  :deep(.popper #arrow) {
    @apply z-behind;
  }
</style>
