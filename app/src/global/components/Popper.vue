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
<style lang="postcss">
  :root {
    --popper-theme-background-color: var(--info);
    --popper-theme-background-color-hover: var(--emphasis);
    --popper-theme-text-color: var(--foreground);
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-color: #eeeeee;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 32px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
  }
</style>
