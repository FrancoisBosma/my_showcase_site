<script setup lang="ts">
  import Location from './Location'
  const { t } = useI18n()
</script>
<template>
  <section id="contact">
    <h3> {{ t('Contact') }} </h3>
    <Location />
  </section>
</template>
