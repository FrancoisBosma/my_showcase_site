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
  <button class="bg-fractals-toggle-button">
    <!-- Credit: logo found on vecteezy.com -->
    <svg
      id="eKgfo5k6qWH1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1400 1400"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="eKgfo5k6qWH2-fill"
          x1="447.6563"
          y1="739.0269"
          x2="447.6563"
          y2="1117.2598"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eKgfo5k6qWH2-fill-0" offset="0%" stop-color="#00fd86" />
          <stop id="eKgfo5k6qWH2-fill-1" offset="22.57%" stop-color="#00fa89" />
          <stop id="eKgfo5k6qWH2-fill-2" offset="41.61%" stop-color="#00f294" />
          <stop id="eKgfo5k6qWH2-fill-3" offset="59.39%" stop-color="#00e5a5" />
          <stop id="eKgfo5k6qWH2-fill-4" offset="76.39%" stop-color="#00d2be" />
          <stop id="eKgfo5k6qWH2-fill-5" offset="92.69%" stop-color="#00badd" />
          <stop id="eKgfo5k6qWH2-fill-6" offset="100%" stop-color="#00adee" />
        </linearGradient>
      </defs>
      <path
        d="M447.7,725.6c-54,0-104.8,21-143,59.2s-59.2,89-59.2,143c0,92.1,62.2,172.5,151.2,195.7c1,.3,1.9.4,2.9.4c7.1,0,9.6-6.1,12.7-11.4c4.9-8,8.8-16.7,12.6-25.3c7.2-16.5,12.9-33.7,16.2-51.5c2.6-13.8,3.6-27.9,2.6-41.9c1.3.5,2.6.7,4,.7s2.8-.3,4-.7c-.8.3-.4,10.1-.4,11.2c0,4,.2,8,.5,12c.6,8.3,1.9,16.6,3.7,24.7c3.9,18.2,10.4,35.7,18.2,52.6c3.1,6.7,5.7,14,10.5,19.7c4.2,5.1,8.7,11,16.2,9c88-23.7,149.4-104,149.4-195.2c0-54-21-104.8-59.2-143s-88.9-59.2-142.9-59.2Zm53.9,373.2c-23.7-44.9-32-85-24.7-119.5.5-.2,1-.5,1.5-.9c12.2-8.2,25.6-12.2,38.6-13.8c12.2,14.8,17,38.8,17,39c1.1,5.5,5.9,9.3,11.2,9.3.7,0,1.4-.1,2.2-.2c6.2-1.2,10.3-7.2,9.1-13.4-.2-1-3.6-18.2-12.5-35c20.5,1.9,35.7,7.6,36.1,7.7c5.9,2.3,12.5-.6,14.8-6.5s-.6-12.5-6.5-14.8c-2.4-.9-52.3-19.9-99.7-2.9c26.7-47.3,81.5-65.2,82.1-65.4c6-1.9,9.4-8.3,7.5-14.4-1.9-6-8.3-9.4-14.4-7.5-1.2.4-12.2,4-27,11.9-3.7-21.1-17.1-38.3-17.8-39.2-3.9-5-11.1-5.8-16.1-1.9s-5.9,11.1-2,16.1c.1.2,14.5,18.8,13.8,36.7c0,.7,0,1.3.1,2-20.1,14.4-41.4,35.7-53.6,65.9-.8,1.9-1.5,3.9-2.2,5.9v-151.5c0-6.3-5.1-11.5-11.5-11.5s-11.5,5.1-11.5,11.5v151.3c-.7-2-1.4-3.9-2.2-5.9-12.2-30.1-33.6-51.4-53.6-65.9.1-.6.1-1.3.1-2-.6-17.8,13.5-36.3,13.8-36.7c3.9-5,3-12.2-1.9-16.1-5-3.9-12.2-3-16.1,1.9-.7.9-14,18.1-17.8,39.2-14.8-7.9-25.9-11.5-27-11.9-6-1.9-12.5,1.4-14.4,7.5-1.9,6,1.4,12.5,7.5,14.4.6.2,55.4,18.1,82.1,65.4-47.4-17-97.3,2-99.7,2.9-5.9,2.3-8.8,8.9-6.5,14.8s8.9,8.8,14.8,6.5c.3-.1,15.5-5.9,36.1-7.8-8.9,16.8-12.3,34.1-12.5,35-1.2,6.2,2.9,12.2,9.1,13.4.7.1,1.5.2,2.2.2c5.4,0,10.2-3.8,11.2-9.3c0-.2,4.8-24.2,17.1-39.1c13,1.6,26.4,5.7,38.6,13.9.5.3,1,.6,1.5.9c7.3,34.5-1,74.6-24.7,119.5-74.3-23.3-125.4-92.4-125.4-171c0-98.8,80.4-179.3,179.3-179.3c98.8,0,179.3,80.4,179.3,179.3-.1,78.7-51.3,148-125.4,171.3Z"
        transform="matrix(3.476722 0 0 3.514938-856.354702-2550.438915)"
        fill="url(#eKgfo5k6qWH2-fill)"
      />
    </svg>
  </button>
  <canvas ref="fractalsTreeElement" class="bg-fractals"></canvas>
</template>
<style scoped lang="postcss">
  .bg-fractals-toggle-button {
    @apply absolute bottom-1/8 right-1/8 w-18 h-18;
  }
  .bg-fractals {
    @apply absolute top-0 left-0 pointer-events-none z-behind;
  }
</style>
