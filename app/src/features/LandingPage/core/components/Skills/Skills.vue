<template>
  <section id="skills" w:p="0" class="relative min-h-screen flex flex-col justify-center" w:border="1 solid light-50">
    <h2>Skills</h2>
    <ul class="checker-board grid grid-flow-col grid-cols-4 grid-rows-2">
      <li><fa-diamond /></li>
      <li>World-Class Apps</li>
      <li>Tailored To Your Needs</li>
      <li><ant-design-format-painter-outlined /></li>
      <li><clarity-ruler-pencil-line /></li>
      <li>Pixel-Perfect Code</li>
      <li>Made With Passion</li>
      <li><gg-heart /></li>
    </ul>
  </section>
</template>
<style scoped lang="postcss">
  .checker-board {
    li {
      @apply p-8 flex justify-center items-center aspect-square text-[var(--foreground)] text-4xl;
    }
    li:nth-child(4n),
    li:nth-child(4n + 1) {
      @apply bg-[var(--info)] text-[var(--background)] text-6xl;
    }
  }
</style>
