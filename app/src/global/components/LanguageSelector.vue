<script setup lang="ts">
  const bActive = ref(false)
  const fnToggleSelector = () => (bActive.value = !bActive.value)
  const contextColor = computed(() => (bActive.value ? 'var(--emphasis)' : 'var(--cta)'))
  // const toggleSpeed = computed(() => (bActive.value ? '0ms' : '350ms'))
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
      bg-[var(--foreground)] text-[var(--background)] rounded-[20%]
      duration-350 ease-in;
    /* FIXME: DURATION TO BE FLEXIBLE HEREEEEEEEEEEE VVV */
    & > svg {
      @apply relative top-0.5 transition duration-700 ease-out;
    }
    &::before {
      @apply absolute top-0 left-0 w-full h-full z-behind rounded-[20%]
        transform scale-90 duration-350 ease-in;
      content: '';
      background-color: v-bind('contextColor');
    }
  }
  .language-selector-btn:hover,
  [is-active='true'] {
    @apply bg-[var(--background)];
    color: v-bind('contextColor');
    box-shadow: 0 0 5px v-bind('contextColor');
    text-shadow: 0 0 5px v-bind('contextColor');
    & > svg {
      @apply transform rotate-y-360;
    }
    &::before {
      @apply transform scale-110 ease-out;
      box-shadow: 0 0 15px v-bind('contextColor');
    }
  }
</style>
