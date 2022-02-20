<script setup lang="ts">
  import FractalsTree from './FractalsTree'

  const { t } = useI18n()
  const tinkeringsTranslation = t('Tinkerings')

  const sectionElement = ref<HTMLElement | null>(null)
</script>
<template>
  <section id="introduction" ref="sectionElement" class="!h-screen flex flex-col justify-center items-start text-left">
    <FractalsTree ref="fractalsElement" :container-element="sectionElement" />
    <h1>{{ t('Hi') }},<br />{{ t("I'm Francois") }},<br />{{ t('web developer') }}</h1>
    <p class="py-4">
      <AnimatedTypedText :text="`Vue.js | Full-stack | ${t(tinkeringsTranslation)}`" />
    </p>
    <a href="#contact">
      <Button> {{ t('Contact') }} </Button>
    </a>
  </section>
</template>
