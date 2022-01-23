<script setup lang="ts">
  const { t } = useI18n()
</script>
<template>
  <section
    id="introduction"
    w:flex="~ col"
    class="p-12 h-screen items-start justify-center text-left"
    w:border="1 solid light-50"
  >
    <h1>{{ t('Hi,') }}<br />{{ t("I'm Francois,") }}<br />{{ t('web developer') }}</h1>
    <p class="py-4">Vue.js enthusiast | full-stack dev | Freelancer</p>
  </section>
</template>
