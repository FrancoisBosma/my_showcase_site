<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <main class="px-4 py-10">
    <carbon-warning class="inline-block text-4xl" />
    <router-view />
    <SameSizeSiblings>
      <template #1>
        <button class="btn" @click="router.push('/')">
          <mdi-home w:text="2xl" />
        </button>
      </template>
      <template #2>
        <button class="btn" @click="router.back()">
          <mdi-arrow-left-thick w:text="2xl" />
        </button>
      </template>
    </SameSizeSiblings>
  </main>
</template>
