<script setup lang="ts">
  import { initCanvas, polar2cart, r15, r180, r90 } from './utils'

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

  // BG FRACTALS
  const sectionElement = ref<HTMLCanvasElement | null>(null)
  const bgFractalsElement = ref<HTMLCanvasElement | null>(null)
  const { random } = Math
  const f = {
    start: () => {},
  }
  const init = ref(5)
  const len = ref(5)
  watch([init, len], () => f.start())
  onMounted(async () => {
    // @ts-expect-error
    const { clientWidth: sectionWidth, clientHeight: sectionHeight } = sectionElement.value
    const canvas = bgFractalsElement.value!
    const { ctx } = initCanvas(canvas, sectionWidth, sectionHeight)
    const { width: canvasWidth, height: canvasHeight } = canvas
    let steps: Function[] = []
    let prevSteps: Function[] = []
    let iterations = 0
    const addStep = (x: number, y: number, rad: number) => {
      const length = random() * len.value
      const [newX, newY] = polar2cart(x, y, length, rad)
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(newX, newY)
      ctx.stroke()
      const rad1 = rad + random() * r15
      const rad2 = rad - random() * r15
      if (newX < -100 || newX > canvasWidth + 100 || newY < -100 || newY > canvasHeight + 100) return
      if (iterations <= init.value || random() > 0.5) steps.push(() => addStep(newX, newY, rad1))
      if (iterations <= init.value || random() > 0.5) steps.push(() => addStep(newX, newY, rad2))
    }
    const controls = useRafFn(
      () => {
        iterations += 1
        prevSteps = steps
        steps = []
        if (!prevSteps.length) {
          controls.pause()
        }
        prevSteps.forEach((i) => i())
      },
      { immediate: false }
    )
    f.start = () => {
      controls.pause()
      iterations = 0
      console.log(canvasWidth)
      console.log(canvasHeight)
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.lineWidth = 1
      ctx.strokeStyle = '#00000040'
      prevSteps = []
      steps =
        random() < 0.5
          ? // starts = left + right
            [() => addStep(0, random() * canvasHeight, 0), () => addStep(canvasWidth, random() * canvasHeight, r180)]
          : // starts = top + bottom
            [() => addStep(random() * canvasWidth, 0, r90), () => addStep(random() * canvasWidth, canvasHeight, -r90)]
      controls.resume()
    }
    f.start()
  })
</script>
<template>
  <section id="introduction" ref="sectionElement" class="!h-screen flex flex-col justify-center items-start text-left">
    <canvas ref="bgFractalsElement" class="bg-fractals"></canvas>
    <h1>{{ t('Hi') }},<br />{{ t("I'm Francois") }},<br />{{ t('web developer') }}</h1>
    <p class="py-4">
      {{ '$ ' + setSubTitle(`Vue.js | Full-stack | ${tinkeringsTranslation}`)
      }}<span v-show="bShowCursor" class="bg-[var(--typed-text)]">&#95;</span>
    </p>
    <a href="#contact">
      <Button> {{ t('Contact') }} </Button>
    </a>
  </section>
</template>
<style scoped lang="postcss">
  .bg-fractals {
    @apply absolute top-0 left-0 pointer-events-none z-behind;
  }
</style>
