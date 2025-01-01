<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <HeaderComponent />

      <div class="flex flex-1">
        <!-- Sidebar Menu -->
          <menu-component></menu-component>
  
        <!-- Main Content -->
        <div class="flex-1 p-4">
          <router-view />
        </div>
      </div>
  
      <!-- Footer -->
      <FooterComponent />
    </div>
  </template>
  
  <script setup>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import MenuComponent from '@/components/MenuComponent.vue';
  </script>

  