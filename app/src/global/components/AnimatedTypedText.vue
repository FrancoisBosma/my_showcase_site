<script setup lang="ts">
  const props = withDefaults(defineProps<{ text: string }>(), { text: '' })
  const text = toRef(props, 'text')
  const dynamicText = ref(' ')
  const bShowCursor = ref(true)
  const cursorClink = useIntervalFn(() => (bShowCursor.value = !bShowCursor.value), 750, { immediate: false })
  const textTypingDirection = ref(1)
  const textType = useIntervalFn(() => {
    dynamicText.value = text.value.substring(0, dynamicText.value.length + textTypingDirection.value)
    if (dynamicText.value.length === text.value.length || dynamicText.value.length === 0)
      textTypingDirection.value *= -1
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
<template> {{ '$ ' + dynamicText }}<span v-show="bShowCursor" class="bg-[var(--typed-text)]">&#95;</span> </template>
