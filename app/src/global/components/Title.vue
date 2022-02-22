<script setup lang="ts">
  import type { Ref } from 'vue'
  import type { Stoppable } from '@vueuse/core'
  import { range } from '@GLOBAL/functions/numbers'

  const props = withDefaults(defineProps<{ text: string }>(), { text: '' })
  const text = toRef(props, 'text')
  const letterElements = ref([])
  const letterAnimations: Ref[] = []
  const letterAnimationResets: Stoppable[] = []
  const triggerAnimation = (index: number) => {
    letterAnimations[index].value = 'animate-animated animate-wobble text-[var(--emphasis)]'
    letterAnimationResets[index].start()
  }
  const addAnimations = (nb: number) => {
    const startIndex = letterAnimations.length
    const endIndex = startIndex + nb - 1
    range(endIndex, startIndex).forEach((i) => {
      const newAnimation = ref('')
      letterAnimations.push(newAnimation)
      const newAnimationReset = useTimeoutFn(() => (letterAnimations[i].value = ''), 1000, { immediate: false })
      letterAnimationResets.push(newAnimationReset)
    })
  }
  addAnimations(text.value.length)
  watch(text, (newText) => {
    const currentAnimationNb = letterAnimations.length
    if (newText.length > currentAnimationNb) addAnimations(newText.length - currentAnimationNb)
  })
</script>
<template>
  <h1 :aria-label="text">
    <span
      v-for="(c, index) in text"
      :key="index"
      ref="letterElements"
      :class="`inline-block ${letterAnimations[index]?.value}`"
      @mouseenter="triggerAnimation(index)"
    >
      {{ c === ' ' ? '&nbsp;' : c }}
    </span>
  </h1>
</template>
