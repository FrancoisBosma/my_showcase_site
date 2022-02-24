<script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <section id="skills" class="skills">
    <h2> <AnimatedTypedText :text="t('What I offer in a nutshell')" /> </h2>
    <div class="background-title">{{ t('Skills') }}</div>
    <ul>
      <ul>
        <li class="info-fall">
          <figure>
            <div><fa-diamond /></div>
            <figcaption>{{ t('Great Quality Apps') }}</figcaption>
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
        <li class="info-overlay">
          <figure>
            <div><clarity-ruler-pencil-line /></div>
            <figcaption>{{ t('Meticulous Code') }}</figcaption>
          </figure>
        </li>
        <li class="info-around">
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
          @apply flex justify-center items-center p-5 w-full h-full text-8xl transition-all duration-300 ease-in-out;
        }
        & > *:nth-child(2) {
          @apply flex flex-col p-5 justify-center h-[var(--figcaption-height)]
            bg-[var(--info)] text-[var(--background-stronger)] text-2xl font-bold backface-hidden
            transition-all duration-300 ease-in-out;
        }
        &:hover,
        &:active {
          & > *:nth-child(1) {
            height: calc(100% - var(--figcaption-height));
          }
        }
      }
      li.info-fall {
        @apply perspect-5xl;
        & > figure {
          @apply relative overflow-visible preserve-3d;
          & > *:nth-child(1) {
            @apply ease-in;
          }
          & > *:nth-child(2) {
            @apply absolute top-0 w-full transform origin-top rotate-x-90 ease-in;
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
      li.info-overlay > figure {
        @apply relative overflow-visible;
        & > *:nth-child(2) {
          @apply absolute top-0 w-full h-full opacity-0 ease-in;
        }
        &:hover,
        &:active {
          & > *:nth-child(1) {
            @apply h-full;
          }
          & > *:nth-child(2) {
            @apply transform translate-x-5 translate-y-5 opacity-100 ease-out;
          }
        }
      }
      li.info-around > figure {
        @apply relative overflow-visible;
        & > *:nth-child(2) {
          @apply absolute top-0 w-full h-full opacity-0 z-behind transform;
        }
        &:hover,
        &:active {
          & > *:nth-child(1) {
            @apply h-full;
          }
          & > *:nth-child(2) {
            @apply opacity-100 -translate-x-5 -translate-y-5 justify-end;
            width: calc(100% + 2.5rem);
            height: calc(100% + var(--figcaption-height));
          }
        }
      }
    }
  }
</style>
