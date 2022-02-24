<script setup lang="ts">
  import FractalsTree from './FractalsTree'

  const { t } = useI18n()
  const subTitle = t('Mainly looking for Vue.js missions / Open to anything')
  const problematicText = t("I'm Francois")

  const sectionElement = ref<HTMLElement | null>(null)
</script>
<template>
  <section id="introduction" ref="sectionElement" class="!h-screen flex flex-col justify-center items-start text-left">
    <FractalsTree ref="fractalsElement" :container-element="sectionElement" />
    <Title :text="t('Hello') + ','" />
    <Title :text="t(problematicText) + ','" />
    <Title :text="t('web developer')" />
    <p class="typed py-4">
      <AnimatedTypedText :text="t(subTitle)" />
    </p>
    <a href="#contact">
      <Button> {{ t('Contact') }} </Button>
    </a>
  </section>
</template>
