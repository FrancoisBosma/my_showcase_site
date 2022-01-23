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
    <ul class="flex justify-center gap-x-4">
      <li>
        <a
          href="https://github.com/FrancoisBosma"
          target="_blank"
          rel="noopener noreferrer"
          w:display="inline-block"
          w:animate="bounce-left"
        >
          <zmdi-github-alt class="icon-btn" />
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/francois-bosma-1051849b/"
          target="_blank"
          rel="noopener noreferrer"
          w:display="inline-block"
          w:animate="bounce-right"
        >
          <fontisto-linkedin class="icon-btn" />
        </a>
      </li>
    </ul>
  </menu>
</template>
