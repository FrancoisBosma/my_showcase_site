<template>
  <section id="skills" w:p="0" class="min-h-screen" w:border="1 solid light-50">
    <h2>Skills</h2>
    <!-- <ul class="grid grid-cols-2 grid-rows-4 text-50px
    children:(border-1 border-solid border-light-50 aspect-square)"> -->
    <ul class="grid grid-flow-col grid-cols-4 grid-rows-2 text-50px toto">
      <li><mdi-diamond-stone /></li>
      <li>A</li>
      <li>A</li>
      <li><ant-design-format-painter-outlined /></li>
      <li><clarity-ruler-pencil-line /></li>
      <li>A</li>
      <li>A</li>
      <li><gg-heart /></li>
    </ul>
  </section>
</template>
<style scoped lang="postcss">
  .toto {
    li {
      @apply flex justify-center items-center;
    }
    & > * {
      @apply bg-[var(--info)] aspect-square;
    }
    li:nth-child(4n),
    li:nth-child(4n + 1) {
      @apply bg-[var(--background)];
    }
  }
</style>
