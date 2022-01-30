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
    position: relative;
    display: inline-block;
    width: 80px;
    padding: 4px;
    border-radius: 40px;
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    border-radius: 40px;
    z-index: 2;
    opacity: 0;
    &[is-dark='true'] ~ .toggle-switch {
      margin-left: 0;
      border-color: #dee1c5;
      background-color: #fffdf2;
    }

    &[is-dark='true'] ~ .toggle-bg {
      background-color: #484848;
      border-color: #202020;
    }

    &[is-dark='true'] ~ .toggle-switch .toggle-switch-figure {
      margin-left: 40px;
      opacity: 0;
      transform: scale(0.1);
    }

    &[is-dark='true'] ~ .toggle-switch .toggle-switch-figureAlt {
      transform: scale(0.75);
    }
  }

  .toggle-bg {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 100%;
    height: 100%;
    background-color: #c0e6f6;
    border-radius: 40px;
    border: 4px solid #81c0d5;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .toggle-switch {
    position: relative;
    width: 30px;
    height: 30px;
    margin-left: 42px;
    background-color: #f5eb42;
    border: 4px solid #e4c74d;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    .toggle-switch-figure {
      position: absolute;
      bottom: -14px;
      left: -44px;
      display: block;
      width: 70px;
      height: 25px;
      border: 8px solid #d4d4d2;
      border-radius: 20px;
      background-color: #fff;
      transform: scale(0.35);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &:before {
        content: '';
        display: block;
        position: relative;
        top: -25px;
        right: -10px;
        width: 30px;
        height: 30px;
        border: 8px solid #d4d4d2;
        border-radius: 100%;
        border-right-color: transparent;
        border-bottom-color: transparent;
        transform: rotateZ(30deg);
        background-color: #fff;
      }
      &:after {
        content: '';
        display: block;
        position: relative;
        top: -65px;
        right: -37px;
        width: 13px;
        height: 13px;
        border: 8px solid #d4d4d2;
        border-radius: 100%;
        border-right-color: transparent;
        border-bottom-color: transparent;
        transform: rotateZ(80deg);
        background-color: #fff;
      }
    }
    .toggle-switch-figureAlt {
      content: '';
      position: absolute;
      top: 5px;
      left: 2px;
      width: 2px;
      height: 2px;
      background-color: #efeeda;
      border-radius: 100%;
      border: 4px solid #dee1c5;
      box-shadow: 42px -7px 0 -3px #fcfcfc, 75px -10px 0 -3px #fcfcfc, 54px 4px 0 -4px #fcfcfc, 83px 7px 0 -2px #fcfcfc,
        63px 18px 0 -4px #fcfcfc, 44px 28px 0 -2px #fcfcfc, 78px 23px 0 -3px #fcfcfc;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: scale(0);
      &:before {
        content: '';
        position: absolute;
        top: -6px;
        left: 18px;
        width: 7px;
        height: 7px;
        background-color: #efeeda;
        border-radius: 100%;
        border: 4px solid #dee1c5;
      }

      &:after {
        content: '';
        position: absolute;
        top: 19px;
        left: 15px;
        width: 2px;
        height: 2px;
        background-color: #efeeda;
        border-radius: 100%;
        border: 4px solid #dee1c5;
      }
    }
  }
</style>
