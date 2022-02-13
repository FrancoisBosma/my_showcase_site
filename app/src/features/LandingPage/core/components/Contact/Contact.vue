<script setup lang="ts">
  import Location from './Location'
  const { t } = useI18n()
</script>
<template>
  <section id="contact">
    <h3> {{ t('Contact') }} </h3>
    <h2> {{ t('To contact me') }} </h2>
    <div class="flex flex-wrap">
      <div></div>
      <div>
        <p> {{ t('I live in Paris') }} </p>
        <p> CET+0 // UTC+1 </p>
        <Location />
      </div>
    </div>
  </section>
</template>
