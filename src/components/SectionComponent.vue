<template>
    <div>
      <h2 class="text-xl">This is Section {{ sectionNumber }} of {{ pageTitle }}</h2>

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
  const sectionNumber = computed(() => route.params.section);

  </script>
  