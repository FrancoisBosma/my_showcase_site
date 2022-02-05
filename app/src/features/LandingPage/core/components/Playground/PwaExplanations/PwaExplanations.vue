<script setup lang="ts">
  import Flicking from '@egjs/vue3-flicking'
  import { Arrow, Fade, Pagination, Parallax } from '@egjs/flicking-plugins'

  const flickingOptions = {
    align: { camera: '25%', panel: '25%' },
    circular: false,
    deceleration: 0.01,
    easing: (x: number) => 1 - (1 - x) ** 3,
    noPanelStyleOverride: true,
    // panelsPerView: 2,
  }
  const flickingPlugins = [new Arrow({ parentEl: document.body }), new Fade(), new Pagination(), new Parallax()]
  const { t } = useI18n()
</script>
<template>
  <Flicking :options="flickingOptions" :plugins="flickingPlugins">
    <div class="card-panel">1</div>
    <div class="card-panel">2</div>
    <div class="card-panel">3</div>
    <div class="card-panel">4</div>
    <div class="card-panel">5</div>
    <template #viewport>
      <span class="flicking-arrow-prev is-outside"></span>
      <span class="flicking-arrow-next is-outside"></span>
      <div class="flicking-pagination"></div>
    </template>
  </Flicking>
</template>
<style lang="postcss">
  @import '@egjs/vue3-flicking/dist/flicking.css';
  @import '@egjs/flicking-plugins/dist/flicking-plugins.css';

  /* Imported from 'flicking' component's css (cf. index.html link tag)
   * N.B: this class has to be declared before, hence globally here
  */
  .flicking-pagination-bullet-active {
    background-color: var(--cta);
  }
</style>
<style scoped lang="postcss">
  /* Imported from 'flicking' component's css */
  .flicking-viewport {
    /* overflow-x: clip;
    overflow-y: visible; */
  }
  .flicking-pagination {
    @apply -bottom-12;
  }
  /* Custom */
  .card-panel {
    @apply bg-[var(--foreground-contrast)] h-48;
  }
</style>
