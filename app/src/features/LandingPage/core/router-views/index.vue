<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Playground, Skills } from '../components'
  import { bScreenXl } from '@GLOBAL/functions/reactified'

  const bMenuToggle = ref(false)
</script>

<template>
  <BurgerButton v-show="!bScreenXl" class="fixed top-10px right-10px" :action="() => (bMenuToggle = !bMenuToggle)" />
  <menu v-show="bScreenXl || bMenuToggle" class="fixed left-0 h-screen m-0 w-full xl:w-52" w:border="1 solid red-800">
    {{ bScreenXl }}
  </menu>
  <div class="xl:pl-52">
    <Introduction />
    <Skills />
    <Playground />
    <Contact />
  </div>
</template>
