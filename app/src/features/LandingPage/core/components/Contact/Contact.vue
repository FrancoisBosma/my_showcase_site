<script setup lang="ts">
  import Location from './Location'
  const { t } = useI18n()
</script>
<template>
  <section id="contact">
    <h3> {{ t('Contact') }} </h3>
    <h2> {{ t('To contact me') }} </h2>
    <div class="flex flex-wrap justify-center gap-32">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col">
          <p> {{ t('The best way to reach me is') }} </p>
          <p> {{ t('via ...') }} </p>
          <TrapDoor>
            <template #upperContent>
              <mdi-email />
            </template>
            fbosma.pro@gmail.com
          </TrapDoor>
          <p> {{ t('or ...') }} </p>
          <a
            href="https://linkedin.com/in/francois-bosma-1051849b/"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4"
          >
            <fontisto-linkedin class="icon-link opacity-100 text-2xl" />
          </a>
        </div>
        <div class="flex flex-col">
          <p> {{ t('You can also check out') }} </p>
          <p> {{ t('more of my work on GitHub') }} </p>
          <a href="https://github.com/FrancoisBosma" target="_blank" rel="noopener noreferrer" class="mt-4">
            <zmdi-github-alt class="icon-link opacity-100 text-2xl" />
          </a>
        </div>
      </div>
      <div>
        <p>
          {{ t('I live in') }} <span class="text-[#d41413] font-semibold"> {{ t('Paris') }} </span>
        </p>
        <p> CET+0 // UTC+1 </p>
        <Location />
      </div>
    </div>
  </section>
</template>
