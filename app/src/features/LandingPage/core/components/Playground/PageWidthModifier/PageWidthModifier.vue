<script setup lang="ts">
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'
  const { maxWidth, windowWidth, contentWidth, updateCWM, resetCWM } = toRefs(useLPStore())
  const sliderValue = ref(contentWidth.value)
  const resetSlider = () => {
    resetCWM.value()
    sliderValue.value = contentWidth.value
  }
  watch(windowWidth, () => resetSlider())
  const { t } = useI18n()
</script>
<template>
  <span> {{ `${t("Window's width:")} ${sliderValue}` }}px </span>
  <RangeSlider
    :value="sliderValue"
    :value-min="400"
    :value-max="maxWidth"
    :on-set="(v: number) => updateCWM(v)"
    @update:value="sliderValue = Number($event)"
  />
  <div class="p-4">
    <Button @click="resetSlider()"> {{ t('Reset') }} </Button>
  </div>
</template>
