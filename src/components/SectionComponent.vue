<template>
    <div>
      <h2 class="text-xl">This is Section {{ sectionNumber }} of {{ pageTitle }}</h2>
      <p v-if="message">Message: {{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const pageTitle = computed(() => route.params.page);
  const sectionNumber = computed(() => route.params.section);
  const message = computed(() => route.query.message); // Get query parameter
  </script>
  