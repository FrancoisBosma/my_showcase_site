<script setup lang="ts">
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { bScreenXl } = toRefs(useLPStore())
  const responsiveMenuWidth = computed(() => (bScreenXl.value ? '13rem' : '100%'))

  const { t } = useI18n()
  const bMenuActive = ref(false)
  const fnToggleMenu = () => (bMenuActive.value = !bMenuActive.value)
</script>

<template>
  <div class="responsive-fixed">
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
  </div>
</template>
<style scoped lang="postcss">
  .menu-button {
    @apply absolute top-30px right-30px;
    z-index: calc(theme('zIndex.fixed') + 1);
  }
  menu {
    @apply relative h-full w-full m-0 p-0 z-fixed bg-[var(--background-stronger)] grid grid-rows-[1fr,auto,1fr];
    width: v-bind('responsiveMenuWidth');
  }
</style>
