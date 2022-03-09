import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLPStore = defineStore('landing-page', () => {
  const pageHeight = ref(0)
  const setPageHeight = (h: number) => (pageHeight.value = h)
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const maxWidth = computed(() => Math.max(windowWidth.value * 2, 1920))
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
  const bScreen3Xs = computed(() => contentWidth.value >= 400)
  const bScreen2Xs = computed(() => contentWidth.value >= 450)
  const bScreenXs = computed(() => contentWidth.value >= 520)
  const bScreenSm = computed(() => contentWidth.value >= 640)
  const bScreenMd = computed(() => contentWidth.value >= 768)
  const bScreenLg = computed(() => contentWidth.value >= 1024)
  const bScreenXl = computed(() => contentWidth.value >= 1280)
  const bScreen2Xl = computed(() => contentWidth.value >= 1536)

  const screenSizeLevel = computed(() => {
    if (bScreen2Xl.value) return '2xl'
    if (bScreenXl.value) return 'xl'
    if (bScreenLg.value) return 'lg'
    if (bScreenMd.value) return 'md'
    if (bScreenSm.value) return 'sm'
    if (bScreenXs.value) return 'xs'
    if (bScreen2Xs.value) return '2xs'
    if (bScreen3Xs.value) return '3xs'
    return 'lowest'
  })
  const screenSizeLevels = computed(() => {
    let output = 'lowest'
    if (bScreen3Xs.value) output += '-3xs'
    if (bScreen2Xs.value) output += '-2xs'
    if (bScreenXs.value) output += '-xs'
    if (bScreenSm.value) output += '-sm'
    if (bScreenMd.value) output += '-md'
    if (bScreenLg.value) output += '-lg'
    if (bScreenXl.value) output += '-xl'
    if (bScreen2Xl.value) output += '-2xl'
    return output
  })

  return {
    pageHeight,
    setPageHeight,
    windowWidth,
    windowHeight,
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
    bScreenSm,
    bScreenMd,
    bScreenLg,
    bScreenXl,
    bScreen2Xl,
    screenSizeLevel,
    screenSizeLevels,
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useLPStore, import.meta.hot))
