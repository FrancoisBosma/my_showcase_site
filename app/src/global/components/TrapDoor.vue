<!-- <template>
  <div class="trapdoor">
    <div class="door top">
      <slot name="upperContent" />
    </div>
    <slot />
    <div class="door bottom">
      <slot name="upperContent" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
  .trapdoor {
    @apply relative w-auto h-auto p-4 text-[var(--foreground)] transition-all duration-350 ease-in;
    box-shadow: inset -7px 0px 12px -8px rgba(0, 0, 0, 0.3), inset 7px 0px 12px -8px rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.3);
    .door {
      @apply absolute left-0 w-full h-1/2 overflow-hidden
        bg-[var(--background)] text-[var(--cta)]
        transition-all duration-300 ease-in z-2
        children:(absolute left-1/2 transform -translate-x-1/2 text-4xl);
    }
    .top {
      @apply top-0 children:(bottom-0 translate-y-1/2);
    }
    .bottom {
      @apply bottom-0 children:(top-0 -translate-y-1/2);
    }

    &:hover,
    &:active {
      @apply bg-[var(--background)];
      .door {
        @apply transform scale-110;
        box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.4);
      }
      .top {
        @apply -translate-y-1/1;
      }
      .bottom {
        @apply translate-y-1/1;
      }
    }
  }
</style> -->
<template>
  <div class="trapdoor">
    <div class="door top">
      <slot name="upperContent" />
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="door bottom">
      <slot name="upperContent" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
  .trapdoor {
    @apply relative w-auto h-auto text-[var(--foreground)] transition-all duration-350 ease-in;
    .content {
      @apply w-full h-full p-4 opacity-0 transition duration-300 ease-in;
      box-shadow: inset -7px 0px 12px -8px rgba(0, 0, 0, 0.3), inset 7px 0px 12px -8px rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.3);
    }
    .door {
      @apply absolute left-0 w-full h-1/2 overflow-hidden
        bg-[var(--background)] text-[var(--cta)]
        transition-all duration-300 ease-in z-2
        children:(absolute left-1/2 transform -translate-x-1/2 text-4xl);
    }
    .top {
      @apply top-0 children:(bottom-0 translate-y-1/2);
    }
    .bottom {
      @apply bottom-0 children:(top-0 -translate-y-1/2);
    }

    &:hover,
    &:active {
      .content {
        @apply opacity-100 bg-[var(--background)] ease-out;
      }
      .door {
        @apply transform scale-110;
        box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.4);
      }
      .top {
        @apply -translate-y-1/1;
      }
      .bottom {
        @apply translate-y-1/1;
      }
    }
  }
</style>
