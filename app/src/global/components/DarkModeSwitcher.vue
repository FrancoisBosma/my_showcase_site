<script setup lang="ts">
  import { isDark, toggleDark } from '@GLOBAL/functions/reactified'
</script>
<template>
  <div class="toggle">
    <button class="toggle-input" :is-dark="isDark" @click="toggleDark()" />
    <div class="toggle-bg"></div>
    <div class="toggle-switch">
      <div class="toggle-switch-figure"></div>
      <div class="toggle-switch-figureAlt"></div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
  *,
  ::before,
  ::after {
    @apply box-content;
  }
  .toggle {
    @apply relative inline-block w-80px p-1 rounded-40px;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    &:before,
    &:after {
      content: '';
      display: table;
    }
    &:after {
      clear: both;
    }
  }

  .toggle-input {
    @apply absolute top-0 left-0 w-full h-full rounded-40px z-2 opacity-0;
    &[is-dark='true'] ~ .toggle-switch {
      @apply ml-0 border-[#dee1c5] bg-[#fffdf2];
    }
    &[is-dark='true'] ~ .toggle-bg {
      @apply bg-[var(--foreground-dark)] border-[#202020];
    }
    &[is-dark='true'] ~ .toggle-switch .toggle-switch-figure {
      @apply ml-40px opacity-0 transform scale-10;
    }
    &[is-dark='true'] ~ .toggle-switch .toggle-switch-figureAlt {
      @apply transform scale-75;
    }
  }

  .toggle-bg {
    @apply absolute -top-2px -left-2px w-full h-full bg-[#c0e6f6] rounded-40px transition-all duration-300 ease-out;
    border: 2px solid #81c0d5;
  }

  .toggle-switch {
    @apply relative w-30px h-30px ml-47px bg-[#f5eb42] rounded-1/2 transition-all duration-300 ease-out;
    border: 2px solid #e4c74d;
    .toggle-switch-figure {
      @apply absolute block -bottom-14px -left-44px w-70px h-25px rounded-20px bg-white transform scale-35
        transition-all duration-300 ease-out;
      border: 8px solid #d4d4d2;
      &:before {
        @apply relative block -top-25px -right-10px w-30px h-30px rounded-full bg-white transform rotate-z-30;
        content: '';
        border: 8px solid #d4d4d2;
        border-right-color: transparent;
        border-bottom-color: transparent;
      }
      &:after {
        @apply relative block -top-65px -right-37px w-13px h-13px rounded-full bg-white transform rotate-z-80;
        content: '';
        border: 8px solid #d4d4d2;
        border-right-color: transparent;
        border-bottom-color: transparent;
      }
    }
    .toggle-switch-figureAlt {
      @apply absolute top-5px left-2px w-2px h-2px bg-[#efeeda] rounded-full transform scale-0
        transition-all duration-300 ease-out;
      content: '';
      border: 4px solid #dee1c5;
      box-shadow: 42px -7px 0 -3px #fcfcfc, 75px -10px 0 -3px #fcfcfc, 54px 4px 0 -4px #fcfcfc, 83px 7px 0 -2px #fcfcfc,
        63px 18px 0 -4px #fcfcfc, 44px 28px 0 -2px #fcfcfc, 78px 23px 0 -3px #fcfcfc;
      &:before {
        @apply absolute -top-6px left-18px w-7px h-7px bg-[#efeeda] rounded-full;
        content: '';
        border: 2px solid #dee1c5;
      }

      &:after {
        @apply absolute top-19px left-15px w-2px h-2px bg-[#efeeda] rounded-full;
        content: '';
        border: 2px solid #dee1c5;
      }
    }
  }
</style>
