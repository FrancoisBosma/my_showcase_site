<script setup lang="ts">
  const { t } = useI18n()
  const toto = ref(42)
  const tata = () => console.log('rrrr')
</script>
<template>
  <section id="playground" w:border="1 solid light-50" class="!block">
    <h3>{{ t('Playground') }}</h3>
    <h2> {{ t('Go ahead click around') }} <whh-commentsmiley class="absolute top-20 text-[80%]" /> </h2>
    <ul class="playground-tile">
      <li>
        <div>
          I18n
          <div class="text-xs italic discreet">{{ t('Internationalization') }}</div>
        </div>
        <div> <LanguageSelector /> </div>
      </li>
      <li>
        <div>{{ t('Dark Mode') }}</div>
        <div> <DarkModeSwitcher /> </div>
      </li>
      <li>
        <div>{{ t('Responsive Design') }}</div>
        <div>
          <RangeSlider v-model:value.number="toto" /> <br />
          parent: {{ toto }}
        </div>
      </li>
      <li class="incoming">
        <div>{{ t('Navigation Guards') }}</div>
        <div>
          <span class="flex gap-x-2"> {{ t('Still brewing') }} <icon-park-outline-teapot /> </span>
        </div>
      </li>
      <li>
        <div>
          PWA
          <div class="text-xs italic discreet">{{ t('Progressive Web App') }} </div>
        </div>
        <div>AAA <br />aaa<br />aaa<br />aaa<br />aaa<br />aaa<br />aaa<br />aaa<br />aaa<br />aaa</div>
      </li>
      <li class="incoming">
        <div>{{ t('Secret') }}</div>
        <div>
          <span class="flex gap-x-2">{{ t('Still cooking') }} <icon-park-outline-hot-pot /></span>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="postcss">
  .playground-tile {
    @apply text-4xl;
    li {
      @apply grid grid-cols-[1fr,2fr] grid-rows-1;

      & > div {
        @apply p-4;
      }
      & > div:nth-child(1) {
        @apply text-right border-r border-[var(--foreground)] hover-emphasis;
      }
      & > div:nth-child(2) {
        @apply pl-12 text-left flex flex-col justify-center;
      }
      &.incoming {
        @apply discreet italic;
        & > div:nth-child(1) {
          @apply hover:(text-[var(--foreground)] border-[var(--foreground)]);
        }
      }
    }
  }
</style>
