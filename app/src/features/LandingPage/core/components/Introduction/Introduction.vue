<script setup lang="ts">
  import FractalsTree from './FractalsTree'

  const { t } = useI18n()
  const tinkeringsTranslation = t('Tinkerings')
  const bShowCursor = ref(true)
  const cursorClink = useIntervalFn(() => {
    bShowCursor.value = !bShowCursor.value
  }, 750)
  cursorClink.pause()
  const subTitle = ref('')
  const placeholderText = ' '
  const dynamicSubTitle = ref(placeholderText)
  const setSubTitle = (text: string) => {
    subTitle.value = text
    return dynamicSubTitle.value
  }
  const subTitleTypingDirection = ref(1)
  const textType = useIntervalFn(() => {
    dynamicSubTitle.value = subTitle.value.substring(0, dynamicSubTitle.value.length + subTitleTypingDirection.value)
    if (dynamicSubTitle.value.length === subTitle.value.length || dynamicSubTitle.value.length === 0)
      subTitleTypingDirection.value *= -1
    if (dynamicSubTitle.value.length === subTitle.value.length) {
      textType.pause()
      cursorClink.resume()
      bShowCursor.value = true
      useTimeoutFn(() => {
        textType.resume()
        cursorClink.pause()
        bShowCursor.value = true
      }, 3000)
    }
  }, 75)

  const sectionElement = ref<HTMLElement | null>(null)
</script>
<template>
  <section id="introduction" ref="sectionElement" class="!h-screen flex flex-col justify-center items-start text-left">
    <FractalsTree ref="fractalsElement" :container-element="sectionElement" />
    <h1>{{ t('Hi') }},<br />{{ t("I'm Francois") }},<br />{{ t('web developer') }}</h1>
    <p class="py-4">
      {{ '$ ' + setSubTitle(`Vue.js | Full-stack | ${t(tinkeringsTranslation)}`)
      }}<span v-show="bShowCursor" class="bg-[var(--typed-text)]">&#95;</span>
    </p>
    <a href="#contact">
      <Button> {{ t('Contact') }} </Button>
    </a>
  </section>
</template>
