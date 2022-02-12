<script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <section id="skills" class="skills">
    <h3>{{ t('Skills') }}</h3>
    <ul>
      <ul>
        <li class="info-fall">
          <figure>
            <div><fa-diamond /></div>
            <figcaption>{{ t('World-Class Apps') }}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div><ant-design-format-painter-outlined /></div>
            <figcaption>{{ t('Tailored To Your Needs') }}</figcaption>
          </figure>
        </li>
      </ul>
      <ul>
        <li>
          <figure>
            <div><clarity-ruler-pencil-line /></div>
            <figcaption>{{ t('Pixel-Perfect Code') }}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div><gg-heart /></div>
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
      li > figure {
        @apply w-88 h-68 overflow-hidden bg-[var(--foreground-contrast)] text-[var(--foreground)];
        --figcaption-height: 6rem;
        & > *:nth-child(1) {
          @apply flex justify-center items-center p-8 w-full h-full text-8xl transition-all duration-300 ease-in-out;
        }
        & > *:nth-child(2) {
          @apply flex flex-col justify-center h-[var(--figcaption-height)]
            bg-[var(--info)] text-[var(--background-stronger)] text-2xl font-bold
            transition-all duration-300 ease-in-out;
        }
        &:hover,
        &:active {
          & > *:nth-child(1) {
            height: calc(100% - var(--figcaption-height));
          }
        }
      }
      .info-fall {
        @apply perspect-5xl;
        & > figure {
          @apply relative overflow-visible preserve-3d;
          & > *:nth-child(1) {
            @apply ease-in;
          }
          & > *:nth-child(2) {
            @apply absolute top-0 w-full transform origin-top rotate-x-90 backface-hidden ease-in;
          }
          &:hover,
          &:active {
            & > *:nth-child(1) {
              @apply transform translate-y-[var(--figcaption-height)];
            }
            & > *:nth-child(2) {
              @apply rotate-x-0;
            }
          }
        }
      }
    }
  }
</style>
