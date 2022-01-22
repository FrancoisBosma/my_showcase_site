<script setup lang="ts">
  const slots = useSlots()
  const slotNb = Object.keys(slots).length
</script>

<template>
  <div w:display="inline" w:m="3 t-8">
    <span v-for="index in slotNb" :key="index" :class="`table-cell w-1/${slotNb} p-4 children:(flex w-full)`">
      <slot :name="index"></slot>
    </span>
  </div>
</template>
