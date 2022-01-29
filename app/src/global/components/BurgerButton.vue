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
    @apply bg-[var(--background-darker-seethrough)];
    padding: 15px 10px;
    border-radius: 10%;
    text-align: initial;
    .hamburger__container {
      width: 36px;
      height: 24px;
      position: relative;
    }
    .hamburger__inner {
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
      position: absolute;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.4s;
      top: 50%;
      transform: translate(5px, -50%);
      opacity: 1;
      &::before,
      &::after {
        width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        transition-property: transform, opacity;
        transition-timing-function: ease;
        transition-duration: 0.4s;
        content: '';
        opacity: 1;
        transform: translate(-5px, 0);
      }
      &::before {
        top: -13px;
      }
      &::after {
        top: 13px;
      }
    }
    .hamburger__hidden {
      opacity: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
      position: absolute;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.4s;
      background-color: var(--emphasis);
      top: 50%;
      transform: translate(51px, -50%);
      &::before,
      &::after {
        width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        transition-property: transform, opacity;
        transition-timing-function: ease;
        transition-duration: 0.4s;
        background-color: var(--emphasis);
        content: '';
        transform: translate(102px, 0);
      }
      &::before {
        top: -13px;
      }
      &::after {
        top: 13px;
      }
    }

    &:hover,
    &[is-active='true'] {
      .hamburger__inner {
        transform: translate(-51px, 50%);
        opacity: 0;
        &::before,
        &::after {
          transform: translate(102px, 0);
          opacity: 0;
        }
      }
      .hamburger__hidden {
        opacity: 1;
        transform: translate(0, -50%);
        &::before,
        &::after {
          opacity: 1;
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
          opacity: 0;
          transform-origin: center;
          transform: translate(0, -13px) rotate(0);
        }
      }
    }
  }
</style>
