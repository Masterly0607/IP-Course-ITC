<template>
  <div class="p-4 flex justify-center items-center flex-col min-h-screen">
    <h1 class="text-3xl font-bold mb-4">Welcome to {{ pageTitle }}</h1>
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageTitle = computed(() => route.params.pageId);
// route.params = is an object in Vue Router that stores the values of dynamic segments (placeholders) in the current URL, allowing you to access and use them in your components.
</script>

