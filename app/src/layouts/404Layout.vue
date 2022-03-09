<script setup lang="ts">
  const router = useRouter()
  const { t } = useI18n()
</script>

<template>
  <main class="relative h-screen px-4 py-10">
    <router-view />
    <ul class="absolute top-0 z-2 w-min h-full flex flex-col justify-center ml-1/2 transform -translate-x-1/2">
      <li>
        <Button @click="router.push('/')"> {{ t('Home') }} </Button>
      </li>
      <li>
        <Button @click="router.push('/')"> {{ t('Back') }} </Button>
      </li>
    </ul>
  </main>
</template>
