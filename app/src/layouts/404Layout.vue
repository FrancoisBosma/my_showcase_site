<script setup lang="ts">
  const router = useRouter()
  const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10">
    <carbon-warning class="inline-block text-4xl" />
    <router-view />
    <!-- <SameSizeSiblings>
      <template #1>
      </template>
      <template #2>
      </template>
    </SameSizeSiblings> -->
    <Button @click="router.push('/')"> {{ t('Home') }} </Button>
    <Button @click="router.push('/')"> {{ t('Back') }} </Button>
  </main>
</template>
