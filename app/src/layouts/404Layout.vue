<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <carbon-warning class="inline-block text-4xl" />
    <router-view />
    <SameSizeSiblings>
      <template #1>
        <button class="btn" @click="router.push('/')">
          <mdi-home style="font-size: 25px" />
        </button>
      </template>
      <template #2>
        <button class="btn" @click="router.back()">
          <mdi-arrow-left-thick style="font-size: 25px" />
        </button>
      </template>
    </SameSizeSiblings>
  </main>
</template>
