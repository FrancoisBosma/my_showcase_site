<script setup lang="ts">
  import localeLanguages from '@GLOBAL/constants/locale_languages'
  import nProgress from 'nprogress'

  const bActive = ref(false)
  const fnToggleSelector = () => (bActive.value = !bActive.value)
  const { locale } = useI18n()
  const fnChangeLocale = (localeName: string) => {
    nProgress.start()
    locale.value = localeName
    nProgress.done()
  }
  const fnIsSelectedLocale = (localeName: string) => locale.value === localeName
  const handleLocaleChange = (localeName: string, fn: Function) => {
    fnChangeLocale(localeName)
    fn()
  }
</script>

<template>
  <div>
    <StyledPopper placement="auto-start" arrow @open:popper="fnToggleSelector()" @close:popper="fnToggleSelector()">
      <IconButton :is-active="bActive">
        <clarity-language-solid />
      </IconButton>
      <template #content="{ close }">
        <ul class="p-2 max-h-50 overflow-y-auto">
          <li
            v-for="(language, localeName) in localeLanguages"
            :key="localeName"
            :is-selected="fnIsSelectedLocale(localeName)"
            class="selector-line"
          >
            <button @click="!fnIsSelectedLocale(localeName) && handleLocaleChange(localeName, close)">
              <mdi-check v-if="fnIsSelectedLocale(localeName)" />
              {{ language }}
            </button>
          </li>
        </ul>
      </template>
    </StyledPopper>
  </div>
</template>
<style scoped lang="postcss">
  .selector-line {
    button {
      @apply px-8 py-2 w-full text-left flex;
    }
    &[is-selected='true'] {
      @apply bg-[var(--background)] rounded-md text-[var(--emphasis)];
      button {
        cursor: default;
      }
    }
    &:hover[is-selected='false'] {
      @apply bg-[var(--background-seethrough-2)] rounded-md;
    }
  }
</style>
