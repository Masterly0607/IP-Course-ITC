<template>
  <div class="flex justify-center items-center min-h-screen flex-col">
    <h1 class="text-2xl font-bold">Welcome to {{ pageTitle }}</h1>
    <p>Message: {{ message }}</p>
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const pageTitle = computed(() => route.params.page); // Gets the dynamic part of the URL defined in your route as :page. Ex: If the URL is /page-one, route.params.page gives "page-one"
const message = computed(() => route.query.message); // Gets query parameter
</script>
