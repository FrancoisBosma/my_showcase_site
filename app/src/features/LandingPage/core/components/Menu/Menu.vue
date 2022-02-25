<script setup lang="ts">
  import { useLPStore } from '@FEATURES/LandingPage/stores/landing-page'

  const { bScreenXl } = toRefs(useLPStore())
  const responsiveMenuWidth = computed(() => (bScreenXl.value ? '13rem' : '100%'))

  const { t } = useI18n()
  const bMenuActive = ref(false)
  const fnToggleMenu = () => (bMenuActive.value = !bMenuActive.value)
  const bMenuShowing = computed(() => bScreenXl.value || bMenuActive.value)
  const menuXOffset = computed(() => (bMenuShowing.value ? '0%' : '-100%'))
  const menuOpacity = computed(() => (bMenuShowing.value ? '1' : '0'))
</script>

<template>
  <div class="responsive-fixed">
    <BurgerButton v-show="!bScreenXl" class="menu-button" :action="fnToggleMenu" :is-active="bMenuActive" />
    <menu>
      <a class="flex justify-center items-center" href="#introduction" rel="" @click="fnToggleMenu()">
        <svg
          id="esAzjGhm7Hf1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          class="h-1/2"
        >
          <text
            dx="0"
            dy="0"
            font-family='"esAzjGhm7Hf1:::Spectral"'
            font-size="1.6"
            font-weight="400"
            transform="matrix(29.3319 0 0 26.6539-1.70374 31.9912)"
            stroke-width="0"
          >
            <tspan y="0" font-weight="400" stroke-width="0"><![CDATA[f]]></tspan>
          </text>
          <text
            dx="0"
            dy="0"
            font-family='"esAzjGhm7Hf1:::Spectral"'
            font-size="1.6"
            font-weight="400"
            transform="matrix(27.2113 0 0 21.0408 9.75666 31.681953)"
            stroke-width="0"
          >
            <tspan y="0" font-weight="400" stroke-width="0"><![CDATA[b]]></tspan>
          </text>
        </svg>
      </a>
      <div class="links-nav">
        <nav>
          <a class="label" href="#playground" rel="" @click="fnToggleMenu()">{{ t('Playground') }}</a>
          <a class="label" href="#skills" rel="" @click="fnToggleMenu()">{{ t('Skills') }}</a>
          <a class="label" href="#contact" rel="" @click="fnToggleMenu()">{{ t('Contact') }}</a>
        </nav>
      </div>
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
    @apply relative h-full w-full m-0 p-0 z-fixed bg-[var(--background-stronger)] grid grid-rows-[33%,33%,33%]
      transition-all duration-300 ease-in-out;
    width: v-bind('responsiveMenuWidth');
    transform: translateX(v-bind('menuXOffset'));
    opacity: v-bind('menuOpacity');
    .links-nav {
      @apply flex flex-col justify-center border-[var(--background)];
      nav {
        @apply flex flex-col justify-center border-t-1 border-[var(--background)];
        & > a {
          @apply hover-emphasis border-[var(--background)] border-b-1 leading-20
            text-[var(--foreground-for-stronger-background)] text-xl;
        }
      }
    }
    tspan {
      fill: var(--background);
    }
  }
  .icon-link {
    @apply hover-emphasis inline-block cursor-pointer select-none opacity-75 text-[var(--cta)]
      transition duration-200 ease-in-out
      hover:(opacity-100);
    font-size: 0.9em;
  }
</style>
