<script setup lang="ts">
  import localeLanguages from '@GLOBAL/constants/locale_languages'

  const bActive = ref(false)
  const fnToggleSelector = () => (bActive.value = !bActive.value)
  const { locale } = useI18n()
  const fnClosePopper = (localeName: string, closeFn: Function = () => undefined) => {
    locale.value = localeName
    closeFn()
  }
</script>

<template>
  <div>
    <Popper placement="auto-start" arrow @open:popper="fnToggleSelector()" @close:popper="fnToggleSelector()">
      <IconButton :is-active="bActive">
        <clarity-language-solid />
      </IconButton>
      <template #content="{ close }">
        <ul class="py-4 max-h-50 overflow-y-auto">
          <li v-for="(language, localeName) in localeLanguages" :key="localeName" class="selector-line">
            <button @click="fnClosePopper(localeName, close)">{{ language }}</button>
          </li>
        </ul>
      </template>
    </Popper>
  </div>
</template>
<style scoped lang="postcss">
  .selector-line {
    @apply children:(px-8 py-2 w-full text-left);
    &:hover {
      background-color: rgba(0, 0, 0, 20%);
    }
  }
</style>
