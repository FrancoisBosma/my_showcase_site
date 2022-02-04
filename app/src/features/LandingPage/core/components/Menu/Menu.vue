<script setup lang="ts">
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { contentXMargin, bScreenXl } = toRefs(useLPStore())

  const { t } = useI18n()
  const bMenuActive = ref(false)
  const fnToggleMenu = () => (bMenuActive.value = !bMenuActive.value)
</script>

<template>
  <BurgerButton v-show="!bScreenXl" class="menu-button" :action="fnToggleMenu" :is-active="bMenuActive" />
  <menu v-show="bScreenXl || bMenuActive">
    <p class="p-4 text-6xl">FB</p>
    <nav
      w:flex="~ col"
      w:border="[var(--background)] t-1"
      w:children="border-[var(--background)] border-b-1 leading-20 text-[var(--background-stronger-text)] text-xl"
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
<style scoped lang="postcss">
  .menu-button {
    @apply fixed top-30px;
    z-index: calc(theme('zIndex.fixed') + 1);
    right: calc(30px + v-bind('contentXMargin'));
  }
  menu {
    @apply fixed h-screen m-0 p-0 z-fixed bg-[var(--background-stronger)] grid grid-rows-[1fr,auto,1fr];
    width: calc(100% - 2 * v-bind('contentXMargin'));
    @screen xl {
      @apply w-52;
      left: v-bind('contentXMargin');
    }
  }
</style>
