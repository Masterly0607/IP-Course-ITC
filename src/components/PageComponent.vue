<template>
  <div class="flex justify-center items-center min-h-screen flex-col">
    <h1 class="text-2xl font-bold">Welcome to {{ pageTitle }}</h1>

    <router-view /> <!-- Dynamically renders SectionComponent -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageTitle = computed(() => {
  switch (route.params.page) {
    case 'page-one':
      return 'Page 1';
    case 'page-two':
      return 'Page 2';
    case 'page-three':
      return 'Page 3';
    default:
      return 'Unknown Page';
  }
});
</script>
