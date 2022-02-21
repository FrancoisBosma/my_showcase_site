<script setup lang="ts">
  const props = withDefaults(defineProps<{ text: string }>(), { text: '' })
  const text = toRef(props, 'text')
  const placeholderText = ' '
  const dynamicText = ref(placeholderText)
  const bShowCursor = ref(true)
  const textTypingDirection = ref(1)
  const textColors = ['--typed-text', '--info']
  const textColorSelector = ref(0)
  const textColor = computed(() => textColors[textColorSelector.value])
  const cursorBlinking = useIntervalFn(() => (bShowCursor.value = !bShowCursor.value), 750, { immediate: false })
  let endCursorBlinking = {
    start: () => {},
    stop: () => {},
  }
  const textTyping = useIntervalFn(() => {
    dynamicText.value = text.value.substring(0, dynamicText.value.length + textTypingDirection.value)
    if (dynamicText.value.length === text.value.length || dynamicText.value.length === 0)
      textTypingDirection.value *= -1
    if (dynamicText.value.length === 0) {
      textColorSelector.value += 1
      if (textColorSelector.value >= textColors.length) textColorSelector.value = 0
    }
    if (dynamicText.value.length === text.value.length) {
      textTyping.pause()
      cursorBlinking.resume()
      bShowCursor.value = true
      endCursorBlinking.start()
    }
  }, 75)
  const reset = () => {
    textTyping.pause()
    cursorBlinking.pause()
    endCursorBlinking.stop()
    dynamicText.value = placeholderText
    bShowCursor.value = true
    textTyping.resume()
  }
  watch(text, () => {
    reset()
  })

  onMounted(() => {
    endCursorBlinking = useTimeoutFn(
      () => {
        textTyping.resume()
        cursorBlinking.pause()
        bShowCursor.value = true
      },
      3000,
      { immediate: false }
    )
  })
</script>
<template>
  <div :class="`relative text-[var(${textColor})]`">
    {{ '$ ' + dynamicText }}<span v-show="bShowCursor" :class="`cursor bg-[var(${textColor})]`">&#95;</span>
  </div>
</template>
<style scoped lang="postcss">
  .cursor {
    @apply absolute bottom-0 text-transparent h-90/100;
  }
</style>
