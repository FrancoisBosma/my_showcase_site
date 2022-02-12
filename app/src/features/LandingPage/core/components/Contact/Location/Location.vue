<script setup lang="ts">
  import createGlobe from 'cobe'
  import { translateColorHex2Dec } from '@GLOBAL/functions/colors'

  const canvasElement = ref()
  const phi = ref(4.5)

  const rawMarkerColor = ref('#d41413')
  const rawBaseColor = ref('#f8f8f8')
  const markerColor = computed(() => {
    const tColor = translateColorHex2Dec(rawMarkerColor.value)
    return [tColor.r / 255, tColor.g / 255, tColor.b / 255]
  })
  const baseColor = computed(() => {
    const tColor = translateColorHex2Dec(rawBaseColor.value)
    return [tColor.r / 255, tColor.g / 255, tColor.b / 255]
  })

  onMounted(() => {
    createGlobe(canvasElement.value, {
      devicePixelRatio: 2,
      width: 300 * 2,
      height: 300 * 2,
      phi: 0,
      theta: 0.2,
      dark: 0.7,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 100,
      baseColor: baseColor.value,
      markerColor: markerColor.value,
      glowColor: [1, 1, 1],
      markers: [
        // latitude longitude
        { location: [48.85341, 2.3488], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi.value
        phi.value += 0.01
      },
    })
  })
</script>
<template>
  <canvas ref="canvasElement" :style="{ width: '300px', height: '300px' }"></canvas>
</template>
