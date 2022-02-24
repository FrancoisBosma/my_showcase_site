<script setup lang="ts">
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'
  import PageWidthModifier from './PageWidthModifier'
  import PwaExplanations from './PwaExplanations'

  const { bScreenLg } = toRefs(useLPStore())
  const { t } = useI18n()
</script>
<template>
  <section id="playground">
    <h2> {{ t('Have fun playing with this site') }} </h2>
    <h3 class="absolute transform -translate-y-25"> {{ t('Go ahead click around') }} </h3>
    <div class="background-title">{{ t('Playground') }}</div>
    <div :class="`playground-tiles ${bScreenLg ? 'screen-lg' : ''}`">
      <div class="label">
        {{ t('Internationalization') }}
        <div class="sub-text">I18n</div>
      </div>
      <div>
        <p>{{ t('Choose a language') }}</p>
        <LanguageSelector />
      </div>
      <div class="label">{{ t('Light/Dark Mode') }}</div>
      <div>
        <p>{{ t('Choose between a dark and a light theme mode') }}</p>
        <DarkModeSwitcher />
      </div>
      <div class="label">
        {{ t('Screen Size') }}
        <div class="sub-text">Responsive Design</div>
      </div>
      <div>
        <p>
          {{ t('The site design adapts to your screen size') }}<br />
          {{ t('Try modifying it') }}
        </p>
        <PageWidthModifier />
      </div>
      <div class="label">
        {{ t('Cross-Platform App') }}
        <div class="sub-text">PWA</div>
      </div>
      <div> <PwaExplanations /> </div>
      <div class="label incoming">{{ t('Navigation Guards') }}</div>
      <div>
        <span class="flex gap-x-2"> {{ t('Still brewing') }} <icon-park-outline-teapot /> </span>
      </div>
      <div class="label incoming">{{ t('Secret') }}</div>
      <div>
        <span class="flex gap-x-2">{{ t('Still cooking') }} <icon-park-outline-hot-pot /></span>
      </div>
    </div>
  </section>
</template>
<style scoped lang="postcss">
  .playground-tiles {
    @apply text-2xl mx-auto;
    --tile-content-max-width: 66rem;
    & > div {
      @apply relative p-6 mb-2;
      box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
      &:before {
        @apply absolute top-0 left-0 w-full h-full z-behind bg-[var(--background)];
        content: '';
      }
    }
    & > div:nth-child(2n + 1) {
      @apply mb-0 break-words;
    }
    & > div:nth-child(2n) {
      @apply flex flex-col gap-8 justify-center items-center overflow-y-visible
        border-[var(--info)] border-l-0 border-t-3;
    }
    & > div.incoming {
      @apply opacity-20 italic;
    }
    & > div.incoming + div {
      @apply opacity-20 italic lg:items-start;
    }
    .sub-text {
      @apply text-sm italic discreet;
    }

    &.screen-lg {
      @apply grid;
      width: fit-content;
      grid-template-columns: auto minmax(max-content, var(--tile-content-max-width));
      & > div:nth-child(2n + 1) {
        @apply mb-2 text-right;
      }
      & > div:nth-child(2n) {
        @apply border-l-3 border-t-0;
      }
      & > div.incoming + div {
        @apply items-start;
      }
    }
  }
</style>
