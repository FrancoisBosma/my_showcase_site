<script setup lang="ts">
  const slots = useSlots()
  const slotNb = Object.keys(slots).length
</script>

<template>
  <div w:display="inline" w:m="3 t-8" w:children="table-cell w-1/2 p-4 children:(flex w-full)">
    <span v-for="index in slotNb" :key="index">
      <slot :name="index"></slot>
    </span>
  </div>
</template>
