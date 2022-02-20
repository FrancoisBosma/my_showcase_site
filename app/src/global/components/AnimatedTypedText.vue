<script setup lang="ts">
  withDefaults(defineProps<{ text: string }>(), { text: '' })
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
</script>
<template>
  {{ '$ ' + setSubTitle(text) }}<span v-show="bShowCursor" class="bg-[var(--typed-text)]">&#95;</span>
</template>
