<script setup lang="ts">
  const { t } = useI18n()
  const { counter, pause, resume } = useInterval(200, { controls: true })
</script>
<template>
  <section id="introduction" class="!h-screen flex flex-col justify-center items-start text-left">
    <h1>{{ t('Hi') }},<br />{{ t("I'm Francois") }},<br />{{ t('web developer') }}</h1>
    <p class="py-4"> Vue.js | Full-stack | {{ t('Tinkerings') }} </p>
    <a href="#contact">
      <Button> {{ t('Contact') }} </Button>
    </a>
  </section>
</template>
