<script setup lang="ts">
  import { bScreenXl } from '@GLOBAL/functions/reactified'

  const { t } = useI18n()
  const bMenuActive = ref(false)
  const fnToggleMenu = () => (bMenuActive.value = !bMenuActive.value)
</script>

<template>
  <BurgerButton v-show="!bScreenXl" class="menu-button" :action="fnToggleMenu" :is-active="bMenuActive" />
  <menu
    v-show="bScreenXl || bMenuActive"
    class="fixed left-0 h-screen m-0 p-0 w-full z-fixed bg-[var(--background-darker)] grid grid-rows-[1fr,auto,1fr]"
    w:xl="w-52"
    w:border="1 solid red-800"
  >
    <p class="p-4 text-6xl">FB</p>
    <nav
      w:flex="~ col"
      w:border="[var(--background)] t-1"
      w:children="border-[var(--background)] border-b-1 leading-20"
    >
      <a class="hover-emphasis" href="#playground" rel="" @click="fnToggleMenu()">{{ t('Playground') }}</a>
      <a class="hover-emphasis" href="#skills" rel="" @click="fnToggleMenu()">{{ t('Skills') }}</a>
      <a class="hover-emphasis" href="#contact" rel="" @click="fnToggleMenu()">{{ t('Contact') }}</a>
    </nav>
    <div w:flex="~ col" class="justify-center">
      <ul class="flex justify-center gap-x-2 py-4 children:children:cursor-default">
        <li>
          <a href="https://github.com/FrancoisBosma" target="_blank" rel="noopener noreferrer">
            <zmdi-github-alt class="icon-link animate-bounce-left" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/francois-bosma-1051849b/" target="_blank" rel="noopener noreferrer">
            <fontisto-linkedin class="icon-link animate-bounce-right" />
          </a>
        </li>
      </ul>
    </div>
  </menu>
</template>
<style scoped>
  .menu-button {
    @apply fixed top-30px right-30px;
    z-index: calc(theme('zIndex.fixed') + 1);
  }
</style>
