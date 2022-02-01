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
  const { value: sliderValue, onSet } = useVModels(props)
  const { valueMin, valueMax } = toRefs(props) // regular props; don't want to emit updates to those
</script>

<template>
  <div class="slider">
    <span class="slider-value"> {{ sliderValue }}px </span>
    <input v-model="sliderValue" class="range" type="range" :min="valueMin" :max="valueMax" @change="onSet()" />
  </div>
</template>
<style scoped lang="postcss">
  .slider {
    @apply flex flex-col items-center w-min relative;
    --bar-color: var(--info);
    .range {
      @apply mt-6 w-100 h-4 bg-[var(--cta)] overflow-hidden rounded-2xl transition-all duration-250 ease-out;
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      box-shadow: inset 0 0 3px var(--background-darker);
      &::-webkit-slider-thumb {
        @apply w-4 h-4 rounded-1/2 bg-[var(--bar-color)] cursor-pointer transition-all duration-300 ease-in;
        -webkit-appearance: none;
        border: 5px solid var(--foreground-light-contrast);
        box-shadow: -407px 0 0 400px var(--bar-color);
      }
      &::-moz-range-thumb {
        @apply w-6px h-6px rounded-1/2 bg-[var(--bar-color)] cursor-pointer transition-all duration-300 ease-in;
        appearance: none;
        border: 5px solid var(--foreground-light-contrast);
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
          @apply w-12px h-12px;
          box-shadow: -415px 0 0 400px var(--bar-color);
        }
      }
    }
  }
</style>
