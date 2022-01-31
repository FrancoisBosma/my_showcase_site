<script setup lang="ts">
  const screenWidth = ref(0)
  const toto = () => console.log('DELETE ME') // DELETEMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE !!!!!!!!!!!
</script>

<template>
  <div class="slider">
    <span class="slider-value"> {{ screenWidth }}px </span>
    <input v-model="screenWidth" class="range" type="range" min="0" max="1000" @change="toto()" />
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
