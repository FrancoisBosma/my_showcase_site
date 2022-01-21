<script setup lang="ts">
  const router = useRouter()
  const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <carbon-warning class="inline-block text-4xl" />
    <router-view />
    <div w:m="3 t-8" w:text="sm" w:flex="~" w:gap="x-4" w:justify="center">
      <button class="btn">
        {{ t('Home') }}
      </button>
      <button class="btn" @click="router.back()">
        {{ t('Back') }}
      </button>
    </div>
  </main>
</template>
