<template>
    <header class="bg-blue-600 text-white p-4">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link :to="{ path: `/Page1`, query: { message: 'hello' } }" 
            class="hover:underline">
              Page 1
            </router-link>
          </li>
          <!-- query: { message: 'hello' }  = Sets a new query parameter(message is parameter) and become ?message=hello -->
          <li>
            <router-link :to="{ path: '/Page2', query: { message: 'bye' } }" class="hover:underline">
              Page 2
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/Page3' }" class="hover:underline">
              Page 3
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  