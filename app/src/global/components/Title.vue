<script setup lang="ts">
  import type { Ref } from 'vue'
  import type { Stoppable } from '@vueuse/core'

  const props = withDefaults(defineProps<{ text: string }>(), { text: '' })
  const text = toRef(props, 'text')
  const letterElements = ref([])
  const letterAnimations: Ref[] = []
  const letterAnimationResets: Stoppable[] = []
  text.value.split('').forEach((_, index: number) => {
    const newAnimation = ref('')
    letterAnimations.push(newAnimation)
    const newAnimationReset = useTimeoutFn(() => (letterAnimations[index].value = ''), 1000, { immediate: false })
    letterAnimationResets.push(newAnimationReset)
  })
  const triggerAnimation = (index: number) => {
    letterAnimations[index].value = 'animate-animated animate-wobble text-[var(--emphasis)]'
    letterAnimationResets[index].start()
  }
</script>
<template>
  <h1 :aria-label="text">
    <span
      v-for="(c, index) in text"
      :key="index"
      ref="letterElements"
      :class="`inline-block ${letterAnimations[index].value}`"
      @mouseenter="triggerAnimation(index)"
    >
      {{ c === ' ' ? '&nbsp;' : c }}
    </span>
  </h1>
</template>
