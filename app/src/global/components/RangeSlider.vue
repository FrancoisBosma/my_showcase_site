<script setup lang="ts">
  const props = withDefaults(
    defineProps<{ value?: number; valueMin?: number; valueMax?: number; onSet?: Function }>(),
    {
      value: 0,
      valueMin: 0,
      valueMax: 1000,
      onSet: () => undefined,
    }
  )
  const { onSet, valueMin, valueMax } = toRefs(props)
  const sliderValue = useVModel(props, 'value')
  watchEffect(() => {
    if (sliderValue.value < valueMin.value) sliderValue.value = valueMin.value
    if (sliderValue.value > valueMax.value) sliderValue.value = valueMax.value
  })
</script>

<template>
  <div class="slider">
    <input
      v-model="sliderValue"
      class="range"
      type="range"
      :min="valueMin"
      :max="valueMax"
      @change="onSet(sliderValue)"
    />
  </div>
</template>
<style scoped lang="postcss">
  .slider {
    @apply relative flex flex-col items-center;
    width: min(100%, 24rem);
    --bar-color: var(--info);
    .range {
      @apply w-full h-4 bg-[var(--cta)] overflow-hidden rounded-2xl transition-all duration-250 ease-out;
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      box-shadow: inset 0 0 3px var(--background-stronger);
      &::-webkit-slider-thumb {
        @apply w-4 h-4 rounded-1/2 bg-[var(--bar-color)] cursor-pointer transition-all duration-300 ease-in;
        -webkit-appearance: none;
        border: 5px solid var(--foreground-contrast);
        box-shadow: -407px 0 0 400px var(--bar-color);
      }
      &::-moz-range-thumb {
        @apply w-6px h-6px rounded-1/2 bg-[var(--bar-color)] cursor-pointer transition-all duration-300 ease-in;
        appearance: none;
        border: 5px solid var(--foreground-contrast);
        box-shadow: -407px 0 0 400px var(--bar-color);
      }

      &:hover {
        --bar-color: var(--emphasis);
      }

      &:active {
        @apply h-8;
        &::-webkit-slider-thumb {
          @apply w-8 h-8;
          box-shadow: -415px 0 0 400px var(--bar-color);
        }
        &::-moz-range-thumb {
          @apply w-22px h-22px;
          box-shadow: -415px 0 0 400px var(--bar-color);
        }
      }
    }
  }
</style>
