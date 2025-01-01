<template>
    <header class="bg-blue-600 text-white p-4">
      
      <nav class="flex justify-between">
        <div>
            Header
        </div>
        <ul class="flex space-x-4">
          <li>
            <router-link
              to="/page-one"
              class="hover:underline"
              exact-active-class="font-bold underline"
            >
              Page 1
            </router-link>
          </li>
          <li>
            <router-link
              to="/page-two"
              class="hover:underline"
              exact-active-class="font-bold underline"
            >
              Page 2
            </router-link>
          </li>
          <li>
            <router-link
              to="/page-three"
              class="hover:underline"
              exact-active-class="font-bold underline"
            >
              Page 3
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  