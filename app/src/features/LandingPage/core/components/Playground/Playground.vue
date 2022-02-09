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
      @apply relative p-6 mb-4;
      box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
      &:before {
        @apply absolute top-0 left-0 w-full h-full z-behind bg-[var(--background)];
        content: '';
      }
    }
    & > div:nth-child(2n + 1) {
      @apply break-words lg:(text-right);
    }
    & > div:nth-child(2n) {
      @apply flex flex-col gap-8 justify-center items-center overflow-y-visible overflow-x-hidden
        border-[var(--info)] border-l-0 border-t-3 lg:(border-l-3 border-t-0);
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
