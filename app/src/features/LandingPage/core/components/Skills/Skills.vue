<!-- <script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <section id="skills">
    <h3>{{ t('Skills') }}</h3>
    <ul class="checker-board grid grid-flow-col grid-cols-4 grid-rows-2">
      <li><fa-diamond /></li>
      <li>{{ t('World-Class Apps') }}</li>
      <li>{{ t('Tailored To Your Needs') }}</li>
      <li><ant-design-format-painter-outlined /></li>
      <li><clarity-ruler-pencil-line /></li>
      <li>{{ t('Pixel-Perfect Code') }}</li>
      <li>{{ t('Made With Passion') }}</li>
      <li><gg-heart /></li>
    </ul>
  </section>
</template>
<style scoped lang="postcss">
  #skills {
    @apply px-0;
  }
  .checker-board {
    li {
      @apply p-8 flex justify-center items-center aspect-square text-[var(--foreground)] text-4xl;
    }
    li:nth-child(4n),
    li:nth-child(4n + 1) {
      @apply bg-[var(--info)] text-[var(--background)] text-6xl;
    }
  }
</style> -->
<script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <section id="skills" class="skills">
    <h3>{{ t('Skills') }}</h3>
    <ul>
      <ul>
        <li>
          <figure>
            <fa-diamond />
            <figcaption>{{ t('World-Class Apps') }}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <ant-design-format-painter-outlined />
            <figcaption>{{ t('Tailored To Your Needs') }}</figcaption>
          </figure>
        </li>
      </ul>
      <ul>
        <li>
          <figure>
            <clarity-ruler-pencil-line />
            <figcaption>{{ t('Pixel-Perfect Code') }}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <gg-heart />
            <figcaption>{{ t('Made With Passion') }}</figcaption>
          </figure>
        </li>
      </ul>
    </ul>
  </section>
</template>
<style scoped lang="postcss">
  .skills {
    ul {
      @apply flex flex-wrap justify-center gap-10;
      li figure {
        @apply bg-[var(--info)] w-88 h-88 text-[var(--background)];
        & > *:nth-child(1) {
          @apply w-full h-full;
        }
        & > *:nth-child(2) {
          @apply bg-[var(--foreground-contrast)];
        }
      }
    }
  }
</style>
