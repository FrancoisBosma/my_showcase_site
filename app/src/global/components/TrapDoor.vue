<template>
  <div class="trapdoor">
    <mdi-email class="door top" />
    <slot />
    <mdi-email class="door bottom" />
  </div>
</template>
<style scoped lang="postcss">
  .trapdoor {
    @apply relative w-auto h-auto p-4 text-[var(--foreground)];
    .door {
      @apply absolute top-0 left-0 w-full h-full overflow-hidden
        bg-[var(--background)] text-[var(--cta)] text-2xl
        transition-all duration-300 ease-in-out z-2;
    }
    .top {
      /* @apply transform translate-y-1/2; */
    }
    .bottom {
      /* @apply transform -translate-y-1/2; */
    }
  }
</style>
