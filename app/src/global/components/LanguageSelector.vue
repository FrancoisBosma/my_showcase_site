<template>
  <button class="toto">
    <clarity-language-solid />
  </button>
</template>
<style scoped lang="postcss">
  .tata {
    @apply relative flex justify-center items-center w-13 h-13;
    background-color: var(--background);
    border-radius: 50%;
    font-size: 30px;
    color: var(--foreground);
    transition: 0.5s;
  }

  .tata:hover {
    color: var(--cta);
    box-shadow: 0 0 5px var(--cta);
    text-shadow: 0 0 5px var(--cta);
  }

  .tata::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--cta);
    transform: scale(0.9);
    transition: 0.5s;
    z-index: -1;
  }

  .tata:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px var(--cta);
  }

  .toto {
    @apply relative flex justify-center items-center w-13 h-13 duration-300 ease-in;
    background-color: var(--foreground);
    border-radius: 20%;
    font-size: 30px;
    color: var(--background);
  }

  .toto:hover {
    @apply children:(transform rotate-y-360 transition duration-700 ease-out);
    background-color: var(--background);
    color: var(--cta);
    box-shadow: 0 0 5px var(--cta);
    text-shadow: 0 0 5px var(--cta);
  }

  .toto::before {
    @apply absolute top-0 left-0 w-full h-full duration-300 ease-in;
    content: '';
    border-radius: 20%;
    background: var(--cta);
    transform: scale(0.9);
    z-index: -1;
  }

  .toto:hover::before {
    @apply transform scale-110 duration-700 ease-out;
    box-shadow: 0 0 15px var(--cta);
  }
</style>
