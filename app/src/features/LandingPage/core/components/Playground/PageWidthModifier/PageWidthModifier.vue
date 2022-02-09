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
  const windowWidthText = t("Window's width")
</script>
<template>
  <div class="flex flex-col items-center">
    <span class="pb-2"> {{ `${t(windowWidthText)}: ${sliderValue}` }}px </span>
    <RangeSlider
      :value="sliderValue"
      :value-min="400"
      :value-max="maxWidth"
      :on-set="(v: number) => updateCWM(v)"
      @update:value="sliderValue = Number($event)"
    />
    <div class="pt-2">
      <Button @click="resetSlider()"> {{ t('Reset') }} </Button>
    </div>
  </div>
</template>
