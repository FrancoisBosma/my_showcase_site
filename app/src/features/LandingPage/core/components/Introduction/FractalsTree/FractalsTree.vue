<script setup lang="ts">
  import { polar2cart, r15, r180, r90, setCanvas } from './utils'
  import { isDark } from '@GLOBAL/functions/reactified'
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'
  const { contentWidth } = toRefs(useLPStore())

  const props = withDefaults(defineProps<{ containerElement: HTMLElement | null }>(), { containerElement: null })
  const containerElement = toRef(props, 'containerElement')

  const fractalsTreeElement = ref<HTMLCanvasElement | null>(null)
  const { random } = Math
  const f = {
    start: () => {},
    // update: () => {

    // },
  }
  const init = ref(5)
  const len = ref(10)

  throttledWatch([init, len, contentWidth], () => f.start(), { throttle: 250 })
  onMounted(async () => {
    await nextTick()
    // Now prop 'containerElement' has been passed
    // Let's proceed to canvas init
    const { clientWidth: sectionWidth, clientHeight: sectionHeight } = containerElement.value!
    const { ctx, width: canvasWidth, height: canvasHeight } = setCanvas(fractalsTreeElement.value!, sectionWidth)
    let steps: Function[] = []
    let parentSteps: Function[] = []
    let iterations = 0
    let ticks = 0
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
      if (iterations < init.value || random() >= 0.5) steps.push(() => addStep(newX, newY, rad1))
      if (iterations < init.value || random() >= 0.5) steps.push(() => addStep(newX, newY, rad2))
    }
    const controls = useRafFn(
      () => {
        if (ticks % 6 === 0) {
          parentSteps = steps
          steps = []
          if (!parentSteps.length) {
            controls.pause()
          }
          parentSteps.forEach((i) => i())
          iterations += 1
        }
        ticks += 1
      },
      { immediate: false }
    )
    f.start = () => {
      controls.pause()
      iterations = 0
      ticks = 0
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.lineWidth = 1
      ctx.strokeStyle = isDark.value ? '#00000040' : '#ffffffc0'
      parentSteps = []
      steps = [
        () => addStep(0, 0.5 * sectionHeight, 0), // starts from the middle of LEFT
        () => addStep(0.5 * canvasWidth, 0, r90), // starts from the middle of TOP
        () => addStep(canvasWidth, 0.5 * sectionHeight, r180), // starts from the middle of RIGHT
      ]
      controls.resume()
    }
    f.start()
  })
</script>
<template>
  <canvas ref="fractalsTreeElement" class="bg-fractals"></canvas>
</template>
<style scoped lang="postcss">
  .bg-fractals {
    @apply absolute top-0 left-0 pointer-events-none z-behind;
  }
</style>
