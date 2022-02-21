<script setup lang="ts">
  import FractalsTree from './FractalsTree'

  const { t } = useI18n()
  const msgTranslation = t('Mainly looking for Vue.js missions | Open to anything')

  const sectionElement = ref<HTMLElement | null>(null)
</script>
<template>
  <section id="introduction" ref="sectionElement" class="!h-screen flex flex-col justify-center items-start text-left">
    <FractalsTree ref="fractalsElement" :container-element="sectionElement" />
    <h1>{{ t('Hi') }},<br />{{ t("I'm Francois") }},<br />{{ t('web developer') }}</h1>
    <p class="typed py-4">
      <AnimatedTypedText :text="`${t(msgTranslation)}`" />
    </p>
    <a href="#contact">
      <Button> {{ t('Contact') }} </Button>
    </a>
  </section>
</template>
