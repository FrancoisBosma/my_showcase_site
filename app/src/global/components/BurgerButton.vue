<script setup lang="ts">
  const props = withDefaults(defineProps<{ action?: Function; isActive?: boolean }>(), {
    action: () => () => undefined,
    isActive: false,
  })

  const isActive = toRef(props, 'isActive')
  const clickAction = () => {
    isActive.value = !isActive.value
    props.action()
  }
</script>
<template>
  <button class="hamburger" :is-active="isActive" @click="clickAction()">
    <div class="hamburger__container">
      <div class="hamburger__inner"></div>
      <div class="hamburger__hidden"></div>
    </div>
  </button>
</template>
<style scoped lang="postcss">
  .hamburger {
    @apply bg-[var(--background-stronger-seethrough)] overflow-hidden px-10px py-15px rounded-1/10;
    text-align: initial;
    .hamburger__container {
      @apply relative w-9 h-6;
    }
    .hamburger__inner {
      @apply absolute top-1/2 w-full h-2px bg-[var(--foreground)] rounded-4px opacity-100;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.4s;
      transform: translate(5px, -50%);
      &::before,
      &::after {
        @apply absolute w-full h-2px bg-[var(--foreground)] rounded-4px opacity-100;
        content: '';
        transition-property: transform, opacity;
        transition-timing-function: ease;
        transition-duration: 0.4s;
        transform: translate(-5px, 0);
      }
      &::before {
        @apply -top-13px;
      }
      &::after {
        @apply top-13px;
      }
    }
    .hamburger__hidden {
      @apply absolute top-1/2 w-full h-2px bg-[var(--emphasis)] rounded-4px opacity-0;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.4s;
      transform: translate(51px, -50%);
      &::before,
      &::after {
        @apply absolute w-full h-2px bg-[var(--emphasis)] rounded-4px;
        content: '';
        transition-property: transform, opacity;
        transition-timing-function: ease;
        transition-duration: 0.4s;
        transform: translate(102px, 0);
      }
      &::before {
        @apply -top-13px;
      }
      &::after {
        @apply top-13px;
      }
    }

    &:hover,
    &[is-active='true'] {
      .hamburger__inner {
        @apply opacity-0;
        transform: translate(-51px, 50%);
        &::before,
        &::after {
          @apply opacity-0;
          transform: translate(102px, 0);
        }
      }
      .hamburger__hidden {
        @apply opacity-100;
        transform: translate(0, -50%);
        &::before,
        &::after {
          @apply opacity-100;
          transform: translate(0, 0);
        }
      }
    }

    &[is-active='true'] {
      .hamburger__hidden {
        transform: rotate(45deg);
        &::before {
          transform-origin: center;
          transform: translate(0, 13px) rotate(90deg);
        }
        &::after {
          @apply opacity-0;
          transform-origin: center;
          transform: translate(0, -13px) rotate(0);
        }
      }
    }
  }
</style>
