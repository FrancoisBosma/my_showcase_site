<script setup lang="ts">
  import { polar2cart, r15, r180, r90, setCanvas } from './utils'
  import { isDark } from '@GLOBAL/functions/reactified'
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'
  import nProgress from 'nprogress'

  const { t } = useI18n()
  const { random } = Math
  const { pageHeight, contentWidth, windowWidth } = toRefs(useLPStore())
  const props = withDefaults(defineProps<{ containerElement: HTMLElement | null }>(), { containerElement: null })
  const containerElement = toRef(props, 'containerElement')

  const fractalsTreeElement = ref<HTMLCanvasElement | null>(null)
  const init = ref(5)
  const len = ref(10)
  const containerWidth = ref(0)
  const containerHeight = ref(0)
  const canvasWidth = ref(0)
  const canvasHeight = ref(0)
  const iconColor = ref('')
  watchEffect(
    () =>
      (iconColor.value = isDark.value
        ? useCssVar('--background-stronger', fractalsTreeElement).value.replace(/\s/g, '')
        : '#fdfdff'),
    { flush: 'post' }
  )

  const isMounted = ref(false)
  const isActive = ref(true)
  const isDrawing = ref(isActive.value)
  const treeButtonPulseAnimation = computed(() => (isDrawing.value ? 'lightPulse 2s infinite' : 'none'))
  const toggleFractalTrees = () => {
    nProgress.start()
    isActive.value = !isActive.value
    nProgress.done()
  }

  const drawing = {
    clear: () => {},
    set: () => {
      containerWidth.value = containerElement.value!.clientWidth
      containerHeight.value = containerElement.value!.clientHeight
      const { ctx, width, height } = setCanvas(fractalsTreeElement.value!, containerWidth.value, pageHeight.value)
      canvasWidth.value = width
      canvasHeight.value = height
      return ctx
    },
    start: () => {},
    stop: () => {},
    updatedRestart: () => {
      if (isActive.value) {
        drawing.set()
        drawing.start()
      }
    },
  }
  watch(isActive, (isActive) => {
    if (!isActive) {
      drawing.stop()
      drawing.clear()
    } else {
      drawing.updatedRestart()
    }
  })
  throttledWatch([init, len, windowWidth, pageHeight, isDark], () => drawing.updatedRestart(), { throttle: 250 })
  debouncedWatch(contentWidth, () => drawing.updatedRestart(), {
    // must be more than the artificial window resize animation time
    // so that the reference element has finished resizing
    debounce: 350,
  })
  onMounted(async () => {
    isMounted.value = true
    await nextTick()
    // Now prop 'containerElement' has been passed
    // Let's proceed to initialization
    const ctx = drawing.set()
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
      if (newX < -100 || newX > canvasWidth.value + 100 || newY < -100 || newY > canvasHeight.value + 100) return
      if (iterations < init.value || random() >= 0.5) steps.push(() => addStep(newX, newY, rad1))
      if (iterations < init.value || random() >= 0.5) steps.push(() => addStep(newX, newY, rad2))
    }
    const controls = useRafFn(
      () => {
        if (ticks % 6 === 0) {
          parentSteps = steps
          steps = []
          if (!parentSteps.length) {
            drawing.stop()
          }
          parentSteps.forEach((i) => i())
          iterations += 1
        }
        ticks += 1
      },
      { immediate: false }
    )
    drawing.clear = () => ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
    drawing.start = () => {
      isDrawing.value = true
      drawing.clear()
      iterations = 0
      ticks = 0
      ctx.lineWidth = 1
      ctx.strokeStyle = isDark.value ? '#00000040' : '#ffffffc0'
      parentSteps = []
      steps = [
        () => addStep(0, 0.5 * containerHeight.value, 0), // starts from the middle of LEFT
        () => addStep(0.5 * canvasWidth.value, 0, r90), // starts from the middle of TOP
        () => addStep(canvasWidth.value, 0.5 * containerHeight.value, r180), // starts from the middle of RIGHT
      ]
      controls.resume()
    }
    drawing.stop = () => {
      isDrawing.value = false
      controls.pause()
    }
    if (isActive.value) drawing.start()
  })
</script>
<template>
  <div class="fractals-tree">
    <p class="mb-2">{{ t('Fractal Trees') }}</p>
    <div class="bg-fractals-toggle-buttons" :is-active="isActive" @click="toggleFractalTrees()">
      <div class="toggle-button">
        <icon-park-outline-add-one class="icon add" />
        <p :class="`${isActive ? 'text-[#01AEED]' : 'text-[' + iconColor + ']'}`">ON</p>
      </div>
      <div class="tree-icon">
        <!-- 
          Credit:
          Logo found on vecteezy.com
          Created by pumashoeme: https://www.vecteezy.com/members/pumashoeme
         -->
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
      </div>
      <div class="toggle-button">
        <icon-park-outline-forbid class="icon remove" />
        <p :class="`${!isActive ? 'text-[var(--important)]' : 'text-[' + iconColor + ']'}`">OFF</p>
      </div>
    </div>
  </div>
  <canvas ref="fractalsTreeElement" class="bg-fractals"></canvas>
</template>
<style scoped lang="postcss">
  .fractals-tree {
    @apply absolute bottom-20 right-0 mr-16 w-72 h-36 flex flex-col justify-center items-center;
    .bg-fractals-toggle-buttons {
      @apply relative flex;
      .toggle-button {
        @apply flex flex-col items-center;
        & > p {
          @apply transform -translate-y-2 transition-all duration-300 ease-in-out font-bold;
        }
      }
      .tree-icon {
        @apply absolute left-1 w-18 h-18 cursor-pointer transition-all duration-300 ease-in-out;
        &:before {
          @apply content-[''] absolute w-full h-full rounded-full top-0 left-0 transition-all duration-300 ease-in-out;
          animation: v-bind('treeButtonPulseAnimation');
        }
      }
      .icon {
        @apply relative w-[calc(18rem*1.13/4)] h-[calc(18rem*1.13/4)] -top-1 cursor-pointer
          transform transition-all duration-900 ease-in-out;
        color: v-bind('iconColor');
      }
      .add {
        @apply opacity-0;
      }
      .remove {
        @apply z-1;
        & {
          -webkit-transition-duration: v-bind('`${isMounted ? 300 : 0}ms`');
          -o-transition-duration: v-bind('`${isMounted ? 300 : 0}ms`');
          transition-duration: v-bind('`${isMounted ? 300 : 0}ms`');
        }
        & :deep(path:nth-child(2)) {
          @apply transform origin-center -rotate-45 scale-80 transition-all ease-in-out;
          -webkit-transition-duration: v-bind('`${isMounted ? 900 : 0}ms`');
          -o-transition-duration: v-bind('`${isMounted ? 900 : 0}ms`');
          transition-duration: v-bind('`${isMounted ? 900 : 0}ms`');
        }
      }
      &[is-active='false'] {
        &:before {
          @apply opacity-0 transform translate-x-full;
        }
        .tree-icon {
          @apply transform translate-x-114/100 rotate-90;
          opacity: v-bind('`${isDark ? 0.25 : 0.5}`');
        }
        .add {
          @apply opacity-100;
        }
        .remove {
          @apply text-[var(--important)];
          & :deep(path:nth-child(2)) {
            @apply text-[var(--important)] -rotate-90 scale-100 duration-450 delay-50;
          }
        }
      }
    }
  }
  .bg-fractals {
    @apply absolute top-0 left-0 pointer-events-none z-behind;
  }
</style>
