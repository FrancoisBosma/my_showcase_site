<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <carbon-warning class="inline-block text-4xl" />
    <router-view />
    <div w:display="inline" w:m="3 t-8" w:children="table-cell w-1/2 p-4 children:(flex w-full)">
      <span>
        <button class="btn" @click="router.push('/')">
          <mdi-home style="font-size: 25px" />
        </button>
      </span>
      <span>
        <button class="btn" @click="router.back()">
          <mdi-arrow-left-thick style="font-size: 25px" />
        </button>
      </span>
    </div>
  </main>
</template>
