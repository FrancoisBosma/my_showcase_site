<script setup lang="ts">
  // https://github.com/vueuse/head
  // you can use this to manipulate the document head in any components,
  // they will be rendered correctly in the html results with vite-ssg
  useHead({
    title: 'Francois Bosma | Vue.js developer | Freelancer',
    meta: [{ name: 'description', content: 'Showcase site for Vue.js freelance developer Francois BOSMA' }],
  })
</script>

<template>
  <router-view />
</template>
