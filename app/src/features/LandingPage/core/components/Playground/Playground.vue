<script setup lang="ts">
  import PageWidthModifier from './PageWidthModifier'
  import PwaExplanations from './PwaExplanations'

  const { t } = useI18n()
</script>
<template>
  <section id="playground" class="!block">
    <h3>{{ t('Playground') }}</h3>
    <!-- <h2> {{ t('Go ahead click around') }} <whh-commentsmiley class="absolute top-20 text-[80%]" /> </h2> -->
    <h2> {{ t('Go ahead click around') }} </h2>
    <div class="playground-tiles">
      <div>
        {{ t('Internationalization') }}
        <div class="sub-text">I18n</div>
      </div>
      <div>
        <p>{{ t('Choose a language') }}</p>
        <LanguageSelector />
      </div>
      <div>{{ t('Light/Dark Mode') }}</div>
      <div>
        <p>{{ t('Choose between a dark and a light theme mode') }}</p>
        <DarkModeSwitcher />
      </div>
      <div>
        {{ t('Screen Size') }}
        <div class="sub-text">Responsive Design</div>
      </div>
      <div>
        <p>
          {{ t('The site design adapts to your screen size') }}<br />
          {{ t('Try modifying it') }}
        </p>
        <PageWidthModifier />
      </div>
      <div>
        {{ t('Cross-Platform App') }}
        <div class="sub-text">PWA</div>
      </div>
      <div> <PwaExplanations /> </div>
      <div class="incoming">{{ t('Navigation Guards') }}</div>
      <div>
        <span class="flex gap-x-2"> {{ t('Still brewing') }} <icon-park-outline-teapot /> </span>
      </div>
      <div class="incoming">{{ t('Secret') }}</div>
      <div>
        <span class="flex gap-x-2">{{ t('Still cooking') }} <icon-park-outline-hot-pot /></span>
      </div>
    </div>
  </section>
</template>
<style scoped lang="postcss">
  .playground-tiles {
    @apply text-2xl lg:(grid grid-cols-[auto,1fr]);
    & > div {
      @apply pb-6;
    }
    & > div:nth-child(2n + 1) {
      @apply break-words lg:text-right;
    }
    & > div:nth-child(2n) {
      @apply flex flex-col gap-2 mb-20 justify-center items-center overflow-x-hidden lg:px-16;
    }
    & > div.incoming {
      @apply discreet italic;
    }
    & > div.incoming + div {
      @apply discreet italic lg:items-start;
    }
    .sub-text {
      @apply text-sm italic discreet;
    }
  }
</style>
