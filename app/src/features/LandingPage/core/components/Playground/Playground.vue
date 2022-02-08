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
    <ul class="playground-tile">
      <li>
        <div>
          {{ t('Internationalization') }}
          <div class="sub-text">I18n</div>
        </div>
        <div>
          <p>{{ t('Choose a language') }}</p>
          <LanguageSelector />
        </div>
      </li>
      <li>
        <div>{{ t('Light/Dark Mode') }}</div>
        <div>
          <p>{{ t('Choose between a dark and a light theme mode') }}</p>
          <DarkModeSwitcher />
        </div>
      </li>
      <li>
        <div>
          <div>
            {{ t('Screen Size') }}
            <div class="sub-text">{{ t('Responsive Design') }}</div>
          </div>
        </div>
        <div>
          <p>{{ t('The site design adapts to your screen size') }}</p>
          <p>{{ t('Try modifying it') }}</p>
          <PageWidthModifier />
        </div>
      </li>
      <li>
        <div>
          {{ t('Cross-Platform App') }}
          <div class="sub-text">PWA</div>
        </div>
        <div> <PwaExplanations /> </div>
      </li>
      <li class="incoming">
        <div>{{ t('Navigation Guards') }}</div>
        <div>
          <span class="flex gap-x-2"> {{ t('Still brewing') }} <icon-park-outline-teapot /> </span>
        </div>
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
        @apply px-16 flex flex-col justify-center items-center overflow-x-hidden;
      }
      &.incoming {
        @apply discreet italic;
        & > div:nth-child(1) {
          @apply hover:(text-[var(--foreground)] border-[var(--foreground)]);
        }
        & > div:nth-child(2) {
          @apply items-start;
        }
      }
      .sub-text {
        @apply pt-2 text-sm italic discreet;
      }
    }
  }
</style>
