<template>
    <nav class="bg-gray-200 w-56 p-4">
      <ul>
        <li>
          <router-link :to="{ path: `/${route.params.page}/section/1` }" class="block hover:underline">
            Section 1
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: `/${route.params.page}/section/2` }" class="block hover:underline">
            Section 2
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: `/${route.params.page}/section/3` }" class="block hover:underline">
            Section 3
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: `/${route.params.page}/section/4` }" class="block hover:underline">
            Section 4
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  </script>
  