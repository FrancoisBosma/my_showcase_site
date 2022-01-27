<template>
  <button class="language-selector-btn">
    <clarity-language-solid />
  </button>
</template>
<style scoped lang="postcss">
  .language-selector-btn {
    @apply relative flex justify-center items-center w-13 h-13
      bg-[var(--foreground)] text-[var(--background)] rounded-[20%]
      duration-350 ease-in;

    & > svg {
      @apply relative top-0.5 duration-700 ease-out;
    }
  }

  .language-selector-btn:hover {
    @apply bg-[var(--background)] text-[var(--cta)];
    box-shadow: 0 0 5px var(--cta);
    text-shadow: 0 0 5px var(--cta);

    & > svg {
      @apply transform rotate-y-360 transition duration-700 ease-out;
    }
  }

  .language-selector-btn::before {
    @apply absolute top-0 left-0 w-full h-full z-behind rounded-[20%]
      bg-[var(--cta)]
      transform scale-90 duration-350 ease-in;
    content: '';
  }

  .language-selector-btn:hover::before {
    @apply transform scale-110 duration-700 ease-out;
    box-shadow: 0 0 15px var(--cta);
  }
</style>
