<script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <footer>
    <p>
      {{ t('This site is') }}
      <a
        href="https://github.com/FrancoisBosma/my_showcase_site"
        target="_blank"
        rel="noopener noreferrer"
        class="ext-link font-semibold"
      >
        &#60;open source&#62;
      </a>
      {{ t('under the') }}
      <a
        href="https://opensource.org/licenses/MIT"
        target="_blank"
        rel="noopener noreferrer"
        class="ext-link font-semibold"
      >
        {{ t('MIT License') }}
      </a>
    </p>
    <p>Copyright © 2020-present Francois Bosma</p>
  </footer>
</template>
<style scoped lang="postcss">
  footer {
    @apply !py-8 !px-4 bg-[var(--background-extreme)];
  }
</style>
