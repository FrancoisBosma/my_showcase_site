<script setup lang="ts">
  import Location from './Location'
  const { t } = useI18n()
</script>
<template>
  <section id="contact">
    <h3> {{ t('Contact') }} </h3>
    <h2> {{ t('To contact me') }} </h2>
    <div class="flex flex-wrap">
      <div class="flex flex-col gap-8">
        <div>
          <p> {{ t('The best way to reach me is') }} </p>
          <p> {{ t('via ...') }} </p>
          <TrapDoor>fbosma.pro@gmail.com</TrapDoor>
          <p> {{ t('or ...') }} </p>
        </div>
        <div>
          <p> {{ t('You can also check out') }} </p>
          <p> {{ t('more of my work on GitHub') }} </p>
        </div>
      </div>
      <div>
        <p>
          {{ t('I live in') }} <span class="text-[#d41413] font-semibold"> {{ t('Paris') }} </span>
        </p>
        <p> CET+0 // UTC+1 </p>
        <Location />
      </div>
    </div>
  </section>
</template>
