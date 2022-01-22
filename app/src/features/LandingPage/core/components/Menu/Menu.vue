<script setup lang="ts">
  import { bScreenXl } from '@GLOBAL/functions/reactified'

  const { t } = useI18n()
  const bMenuToggle = ref(false)
</script>

<template>
  <BurgerButton
    v-show="!bScreenXl"
    class="fixed top-10px right-10px z-fixed"
    :action="() => (bMenuToggle = !bMenuToggle)"
  />
  <menu
    v-show="bScreenXl || bMenuToggle"
    class="fixed left-0 h-screen m-0 w-full bg-[var(--background-darker)] xl:w-52"
    w:flex="~ col"
    w:justify="between"
    w:border="1 solid red-800"
  >
    <p>FB</p>
    <nav>
      <a href="#skills" rel="Skills">{{ t('Skills') }}</a>
      <a href="#playground" rel="Playground">{{ t('Playground') }}</a>
      <a href="#contact" rel="Contact">{{ t('Contact') }}</a>
    </nav>
    <ul></ul>
  </menu>
</template>
