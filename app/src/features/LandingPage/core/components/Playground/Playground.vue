<script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <section id="playground" w:border="1 solid light-50">
    <h2>{{ t('Playground') }}</h2>
    <ul class="playground-tile">
      <li>
        <div>
          {{ t('I18n') }}
          <div w:text="xs">{{ t('Internationalization') }}</div>
        </div>
        <div>AAA</div>
      </li>
      <li>
        <div>{{ t('Dark Mode') }}</div>
        <div>AAA</div>
      </li>
      <li>
        <div>{{ t('Responsive Design') }}</div>
        <div>AAA</div>
      </li>
      <li>
        <div>({{ t('NavGuards') }})</div>
        <div>AAA</div>
      </li>
      <li>
        <div>{{ t('PWA') }}</div>
        <div>AAA <br />aaa</div>
      </li>
      <li>
        <div>({{ t('Secret') }})</div>
        <div>AAA</div>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="postcss">
  .playground-tile {
    @apply text-4xl;
    li {
      @apply grid grid-cols-[1fr,2fr] grid-rows-1;
      & > div {
        @apply p-4;
      }
      & > div:nth-child(1) {
        @apply text-right border-r border-[var(--foreground)];
      }
      & > div:nth-child(2) {
        @apply pl-12 text-left flex flex-col justify-center;
      }
    }
  }
</style>
