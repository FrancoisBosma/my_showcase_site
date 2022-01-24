<template>
  <section id="skills" w:p="0" class="min-h-screen" w:border="1 solid light-50">
    <h2>Skills</h2>
    <!-- <ul class="grid grid-cols-2 grid-rows-4 text-50px
    children:(border-1 border-solid border-light-50 aspect-square)"> -->
    <ul class="grid grid-flow-col grid-cols-4 grid-rows-2 toto">
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
  .toto {
    li {
      @apply flex justify-center items-center aspect-square bg-[var(--background)] text-[var(--foreground)] text-4xl;
    }
    li:nth-child(4n),
    li:nth-child(4n + 1) {
      @apply bg-[var(--info)] text-[var(--background)] text-6xl;
    }
  }
</style>
