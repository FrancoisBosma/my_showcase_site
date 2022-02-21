<script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <footer>
    <p>{{ t('This site is') }} &#60;open source&#62;</p>
    <p>
      {{ t('You can find its code') }}
      <a
        href="https://github.com/FrancoisBosma/my_showcase_site"
        target="_blank"
        rel="noopener noreferrer"
        class="ext-link font-semibold"
      >
        {{ t('there') }}
      </a>
    </p>
  </footer>
</template>
<style scoped lang="postcss">
  footer {
    @apply !py-8 !px-4 bg-[var(--background-extreme)];
  }
</style>
