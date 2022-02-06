<script setup lang="ts">
  import Flicking from '@egjs/vue3-flicking'
  import { Arrow, Fade, Pagination } from '@egjs/flicking-plugins'

  const flickingOptions = {
    align: 'prev',
    bound: true,
    deceleration: 0.01,
    easing: (x: number) => 1 - (1 - x) ** 3,
  }
  const flickingPlugins = [new Arrow({ parentEl: document.body }), new Fade(), new Pagination()]
  const { t } = useI18n()
</script>
<template>
  <div id="pwa-explanations">
    <Flicking :options="flickingOptions" :plugins="flickingPlugins">
      <div class="card-panel">1</div>
      <div class="card-panel">2</div>
      <div class="card-panel">3</div>
      <div class="card-panel">4</div>
      <div class="card-panel">5</div>
      <template #viewport>
        <div class="flicking-pagination"></div>
      </template>
    </Flicking>
    <span class="flicking-arrow-prev is-outside"></span>
    <span class="flicking-arrow-next is-outside"></span>
  </div>
</template>
<style lang="postcss">
  @import '@egjs/vue3-flicking/dist/flicking.css';
  @import '@egjs/flicking-plugins/dist/flicking-plugins.css';

  /* Imported from 'flicking' component's css (cf. index.html link tag)
   * N.B: this class has to be declared before, hence globally here
  */
  .flicking-pagination-bullet {
    @apply bg-[var(--cta)];
  }
  .flicking-pagination-bullet-active {
    @apply bg-[var(--emphasis)];
  }
  /* Custom */
  #pwa-explanations {
    @apply relative left-16;
    width: min(66rem, calc(100% - 5rem));
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
    @apply bg-[var(--foreground-contrast)] w-96 h-48 mr-2 p-4 rounded-md;
  }
</style>
