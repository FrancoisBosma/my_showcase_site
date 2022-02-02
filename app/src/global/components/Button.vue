<template>
  <button class="btn">
    <span><slot /></span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </button>
</template>
<style scoped lang="postcss">
  .btn {
    @apply flex items-center relative m-6 pr-8 text-2xl;
    transition: all 0.2s ease;
    span {
      @apply relative left-3.5 flex items-center gap-x-1 relative font-extrabold tracking-[0.2em] uppercase;
    }
    svg {
      @apply relative left-3.5 ml-1 fill-none stroke-[var(--foreground)] stroke-width-2
        transition-all duration-300 ease-in-out;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    &:before {
      @apply absolute rounded-4xl w-14 h-14 bg-[var(--foreground-contrast)]
        transition-all duration-250 ease-in-out;
      content: '';
    }
    &:hover {
      &:before {
        @apply w-full bg-[var(--emphasis)];
      }
      svg {
        @apply transform translate-x-1;
      }
    }
    &:active {
      @apply transform scale-96;
    }
  }
</style>
