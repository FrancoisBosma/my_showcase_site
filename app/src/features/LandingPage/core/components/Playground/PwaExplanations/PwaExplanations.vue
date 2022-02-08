<script setup lang="ts">
  import Flicking from '@egjs/vue3-flicking'
  import { Arrow, Fade, Pagination } from '@egjs/flicking-plugins'
  import { UseMousePressed } from '@vueuse/components'

  const { t } = useI18n()
  const flickingOptions = {
    align: 'center',
    deceleration: 0.01,
    easing: (x: number) => 1 - (1 - x) ** 3,
  }
  const flickingPlugins = [new Arrow({ parentEl: document.body }), new Fade(), new Pagination()]
  const slideTexts = [
    t('What is a Progressive Web App ?'),
    t('PWAs run in browsers like websites'),
    t("They're also like native apps customized for your device"),
    t('They can work offline,'),
    t('... be downloaded,'),
    t('... support push notifications,'),
    t('... access hardware features, etc'),
    t('In short PWA = cross-platform'),
    t('Right now, your browser quite likely gives you the ability to download this site as an app'),
  ]
</script>
<template>
  <div id="pwa-explanations">
    <UseMousePressed v-slot="{ pressed }">
      <Flicking
        :options="flickingOptions"
        :plugins="flickingPlugins"
        :style="{ cursor: pressed ? 'grabbing' : 'grab' }"
      >
        <div v-for="(text, index) in slideTexts" :key="index" class="card-panel">
          <div>{{ index + 1 }}</div>
          <div>{{ t(text) }}</div>
        </div>
        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </UseMousePressed>
    <span class="flicking-arrow-prev is-inside"></span>
    <span class="flicking-arrow-next is-inside"></span>
  </div>
</template>
<style lang="postcss">
  @import '@egjs/vue3-flicking/dist/flicking.css';
  @import '@egjs/flicking-plugins/dist/flicking-plugins.css';

  /* Imported from 'flicking' component's css (cf. index.html link tag)
   * N.B: these classes have to be declared before, hence globally here
  */
  .flicking-pagination-bullet {
    @apply bg-[var(--cta)];
  }
  .flicking-pagination-bullet-active {
    @apply bg-[var(--emphasis)];
  }
  /* Custom */
  #pwa-explanations {
    @apply relative px-16;
    width: min(66rem, calc(100%));
  }
</style>
<style scoped lang="postcss">
  /* Imported from 'flicking' component's css */
  .flicking-viewport {
    @apply overflow-hidden pb-12;
  }
  .flicking-pagination {
    @apply -bottom-4;
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
    @apply transform -translate-y-[90%];
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
    @apply bg-[var(--foreground-contrast)] w-96 h-48 mr-2 p-4 rounded-md
      grid grid-rows-[2fr,3fr];
    & > *:nth-child(1) {
      @apply m-auto;
    }
    & > *:nth-child(2) {
      @apply mx-auto text-xl text-center;
    }
  }
</style>
