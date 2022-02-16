<script setup lang="ts">
  const { t } = useI18n()
  const { counter, pause, resume } = useInterval(200, { controls: true })
</script>
<template>
  <section id="introduction" class="!h-screen !items-start text-left">
    <h1>{{ t('Hi') }},<br />{{ t("I'm Francois") }},<br />{{ t('web developer') }}</h1>
    <p class="py-4">Vue.js enthusiast | full-stack dev | Freelancer</p>
  </section>
</template>
