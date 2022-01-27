<script setup lang="ts">
  const bActive = ref(false)
  const fnToggleSelector = () => (bActive.value = !bActive.value)
</script>

<template>
  <div>
    <Popper placement="auto-start" arrow @open:popper="fnToggleSelector()" @close:popper="fnToggleSelector()">
      <button class="language-selector-btn" :is-active="bActive">
        <clarity-language-solid />
      </button>
      <template #content>
        <div> Hello there </div>
      </template>
    </Popper>
  </div>
  <!-- <button class="language-selector-btn">
    <clarity-language-solid />
  </button> -->
</template>
<style scoped lang="postcss">
  .language-selector-btn {
    @apply relative flex justify-center items-center w-13 h-13
      bg-[var(--background)] text-[var(--foreground)] rounded-1/2
      duration-500 ease-out;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    & > svg {
      @apply relative top-0.5 text-3xl transition-transform duration-250 ease-in;
    }
    &::before {
      @apply absolute top-0 left-0 w-full h-full z-behind rounded-1/2
        transform scale-90 duration-500 ease-out bg-[var(--emphasis)];
      content: '';
    }

    &:hover,
    &[is-active='true'] {
      @apply text-[var(--emphasis)];
      box-shadow: 0 0 15px rgba(0, 0, 0, 0);
      &::before {
        @apply transform scale-110 ease-out;
        box-shadow: 0 0 15px var(--emphasis);
      }
    }

    &[is-active='true'] {
      & > svg {
        @apply transform rotate-y-180 duration-250 ease-out;
      }
    }
  }
</style>
