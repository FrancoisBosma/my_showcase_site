<route lang="yaml">
meta:
  public: true # cf. auth/navigationGuards.ts
  layout: HomeLayout
</route>

<script setup lang="ts">
  import { Contact, Introduction, Playground, Skills } from '../components'

  const bMenuToggle = ref(false)
  const bScreenXl = useMediaQuery('(min-width: 1280px)')
</script>

<template>
  <menu v-show="bScreenXl || bMenuToggle" class="fixed left-0 h-screen m-0 w-full xl:w-52" w:border="1 solid red-800">
    {{ bScreenXl }}
  </menu>
  <div class="xl:pl-52">
    <BurgerButton class="fixed top-10px right-10px xl:hidden" :action="() => (bMenuToggle = !bMenuToggle)" />
    <Introduction />
    <Skills />
    <Playground />
    <Contact />
  </div>
</template>
