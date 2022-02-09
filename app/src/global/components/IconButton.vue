<script setup lang="ts">
  withDefaults(defineProps<{ bActive?: boolean }>(), { bActive: false })
</script>

<template>
  <button class="icon-button" :is-active="bActive">
    <slot name="default" />
  </button>
</template>
<style scoped lang="postcss">
  .icon-button {
    @apply relative flex justify-center items-center w-13 h-13 text-[var(--foreground)] rounded-1/2
      duration-250 ease-out z-1;
    & > :slotted(svg) {
      @apply relative top-0.5 text-3xl transition-transform duration-250 ease-out;
    }
    &::before {
      @apply absolute top-0 left-0 w-full h-full rounded-1/2 bg-[var(--foreground-contrast)];
      content: '';
    }
    &::after {
      @apply absolute top-0 left-0 w-full h-full z-behind rounded-1/2
        transform scale-90 duration-500 ease-out bg-[var(--emphasis)];
      content: '';
    }

    &:hover,
    &[is-active='true'] {
      @apply text-[var(--emphasis)];
      &::after {
        @apply transform scale-110 ease-out;
        box-shadow: 0 0 15px var(--emphasis);
      }
    }

    &[is-active='true'] {
      & > :slotted(svg) {
        @apply transform rotate-y-180 duration-250 ease-out;
      }
    }
  }
</style>
