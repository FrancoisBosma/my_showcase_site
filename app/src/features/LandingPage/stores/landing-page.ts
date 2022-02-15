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
  const contentTransform = computed(() => {
    if (contentWidthModifier.value <= 0) return 1
    return windowWidth.value / (windowWidth.value + contentWidthModifier.value)
  })
  const updateCWM = (newContentWidth: string | number) =>
    (contentWidthModifier.value = Number(newContentWidth) - windowWidth.value)
  const resetCWM = () => (contentWidthModifier.value = 0)

  // Using default windicss values
  // (cf. https://windicss.org/utilities/general/variants.html#screen-variants)
  // + custom values (cf. windi config file)
  const bScreen3Xs = computed(() => contentWidth.value >= 360)
  const bScreen2Xs = computed(() => contentWidth.value >= 450)
  const bScreenXs = computed(() => contentWidth.value >= 520)
  const bScreenMd = computed(() => contentWidth.value >= 768)
  const bScreenLg = computed(() => contentWidth.value >= 1024)
  const bScreenXl = computed(() => contentWidth.value >= 1280)
  const bScreen2Xl = computed(() => contentWidth.value >= 1536)

  return {
    windowWidth,
    maxWidth,
    contentWidthModifier,
    contentXMargin,
    contentWidth,
    contentTransform,
    updateCWM,
    resetCWM,
    bScreen3Xs,
    bScreen2Xs,
    bScreenXs,
    bScreenMd,
    bScreenLg,
    bScreenXl,
    bScreen2Xl,
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useLPStore, import.meta.hot))
