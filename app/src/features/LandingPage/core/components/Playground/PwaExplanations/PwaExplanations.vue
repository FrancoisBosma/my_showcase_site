<script setup lang="ts">
  import Flicking from '@egjs/vue3-flicking'
  import { Arrow, Fade, Pagination } from '@egjs/flicking-plugins'
  import { UseMousePressed } from '@vueuse/components'
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { bScreen3Xs, bScreen2Xs, bScreenXs, bScreen2Xl } = toRefs(useLPStore())

  const { t } = useI18n()
  const flickingOptions = {
    align: 'center',
    deceleration: 0.01,
    easing: (x: number) => 1 - (1 - x) ** 3,
  }
  const flickingPlugins = [new Arrow({ parentEl: document.body }), new Fade(), new Pagination()]
  const slideTexts = computed(() => [
    t('This site is a Progressive Web App (PWA)'),
    t('"What is that ?" you may wonder'),
    t('PWAs run in browsers like websites'),
    t('They also act as native apps customized for your device'),
    t('They can work offline,'),
    t('... be downloaded,'),
    t('... support push notifications,'),
    t('... access hardware features, etc'),
    t('In short PWA = cross-platform'),
    t('Right now your browser probably allows you to download this site as an app'),
  ])
</script>
<template>
  <div id="pwa-explanations" :class="`pwa-explanations ${bScreen2Xl ? 'screen-2xl' : ''}`">
    <UseMousePressed v-slot="{ pressed }">
      <Flicking
        :options="flickingOptions"
        :plugins="flickingPlugins"
        :style="{ cursor: pressed ? 'grabbing' : 'grab' }"
      >
        <div v-for="(text, index) in slideTexts" :key="index" class="card-panel">
          <div>{{ index + 1 }}</div>
          <div>{{ text }}</div>
        </div>
        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </UseMousePressed>
    <span class="flicking-arrow-prev is-inside"></span>
    <span class="flicking-arrow-next is-inside"></span>
    <!-- <span class="flicking-arrow-prev is-outside"></span>
    <span class="flicking-arrow-next is-outside"></span> -->
  </div>
</template>
<style lang="postcss">
  @import '@egjs/vue3-flicking/dist/flicking.css';
  @import '@egjs/flicking-plugins/dist/flicking-plugins.css';

  /* Imported from 'flicking' component's css (cf. index.html link tag)
   * N.B: these classes have to be declared before, hence globally here
  */
  .flicking-pagination-bullet {
    @apply bg-[var(--cta)] w-2 h-2;
  }
  .flicking-pagination-bullet-active {
    @apply bg-[var(--emphasis)];
  }
  .flicking-camera {
    @apply absolute;
  }
</style>
<style scoped lang="postcss">
  /* N.B: 'flicking-*' classes were imported from external component's css */
  .pwa-explanations {
    @apply relative w-full;
    --card-height: 12rem;
    --pagination-padding: 3rem;
    .flicking-viewport {
      @apply pb-[var(--pagination-padding)] h-[calc(var(--card-height)+var(--pagination-padding))];
    }
    .flicking-pagination {
      @apply -bottom-1;
    }
    .flicking-arrow-prev {
      &:before {
        @apply transform rotate-315 duration-500 ease-out;
      }
      &:after {
        @apply transform -rotate-315 duration-500 ease-out;
      }
    }
    .flicking-arrow-next {
      &:before {
        @apply transform -rotate-315 duration-500 ease-out;
      }
      &:after {
        @apply transform rotate-315 duration-500 ease-out;
      }
    }
    .flicking-arrow-prev,
    .flicking-arrow-next {
      @apply transform transition-transform duration-300 ease-in;
      --tw-translate-y: v-bind('`${bScreenXs ? 4.5 : bScreen2Xs ? 4.25 : bScreen3Xs ? 3.75 : 3.25}rem`');
      &.flicking-arrow-disabled {
        &:before,
        &:after {
          @apply bg-[var(--background-stronger)] opacity-0 transform rotate-0 duration-500 ease-in;
        }
      }
      &:not(.flicking-arrow-disabled) {
        &:before,
        &:after {
          @apply bg-[var(--cta)];
        }
        &:hover:before,
        &:hover:after {
          @apply bg-[var(--emphasis)];
        }
      }
    }
    /* Custom */
    .card-panel {
      @apply bg-[var(--foreground-contrast)] mr-2 p-4 rounded-md grid grid-rows-[2fr,3fr];
      height: var(--card-height);
      width: min(100%, 2 * var(--card-height));
      & > *:nth-child(1) {
        @apply m-auto;
      }
      & > *:nth-child(2) {
        @apply mx-auto text-xl text-center;
      }
    }

    &.screen-2xl {
      @apply px-24;
      .flicking-arrow-prev,
      .flicking-arrow-next {
        @apply -translate-y-[90%];
      }
    }
  }
</style>
