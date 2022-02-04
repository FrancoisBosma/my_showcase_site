import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLPStore = defineStore('landing-page', () => {
  const { width: windowWidth } = useWindowSize()
  const maxWidth = computed(() => windowWidth.value * 2)
  const contentWidthModifier = ref(0)
  const contentXMargin = computed(() => {
    if (contentWidthModifier.value >= 0) return '0px'
    return `${(-1 * contentWidthModifier.value) / 2}px`
  })
  const contentWidth = computed(() => windowWidth.value + contentWidthModifier.value)
  const updateCWM = (newContentWidth: string) =>
    (contentWidthModifier.value = Number(newContentWidth) - windowWidth.value)
  const resetCWM = () => (contentWidthModifier.value = 0)

  return {
    windowWidth,
    maxWidth,
    contentWidthModifier,
    contentXMargin,
    contentWidth,
    updateCWM,
    resetCWM,
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useLPStore, import.meta.hot))
