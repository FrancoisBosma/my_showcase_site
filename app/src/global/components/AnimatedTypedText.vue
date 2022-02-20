<script setup lang="ts">
  const props = withDefaults(defineProps<{ text: string }>(), { text: '' })
  const text = toRef(props, 'text')
  const dynamicText = ref(' ')
  const bShowCursor = ref(true)
  const cursorClink = useIntervalFn(() => (bShowCursor.value = !bShowCursor.value), 750, { immediate: false })
  const textTypingDirection = ref(1)
  const textColors = ['--typed-text', '--info']
  const textColorSelector = ref(0)
  const textColor = computed(() => textColors[textColorSelector.value])
  const textType = useIntervalFn(() => {
    dynamicText.value = text.value.substring(0, dynamicText.value.length + textTypingDirection.value)
    if (dynamicText.value.length === text.value.length || dynamicText.value.length === 0)
      textTypingDirection.value *= -1
    if (dynamicText.value.length === 0) {
      textColorSelector.value += 1
      if (textColorSelector.value >= textColors.length) textColorSelector.value = 0
    }
    if (dynamicText.value.length === text.value.length) {
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
  <span :class="`relative text-[var(${textColor})]`">
    {{ '$ ' + dynamicText }}<span v-show="bShowCursor" :class="`cursor bg-[var(${textColor})]`">&#95;</span>
  </span>
</template>
<style scoped lang="postcss">
  .cursor {
    @apply absolute bottom-1 text-transparent;
  }
</style>
