<script setup lang="ts">
  const bActive = ref(false)
  const fnToggleSelector = () => (bActive.value = !bActive.value)
</script>

<template>
  <div>
    <Popper placement="auto-start" arrow @open:popper="fnToggleSelector()" @close:popper="fnToggleSelector()">
      <IconButton :is-active="bActive">
        <clarity-language-solid />
      </IconButton>
      <template #content>
        <div> Hello there </div>
      </template>
    </Popper>
  </div>
</template>
