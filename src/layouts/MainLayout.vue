<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <HeaderComponent />
  
      <!-- Content Area -->
      <div class="flex flex-1">
        <!-- Sidebar Menu -->

  
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

  </script>
  
  <style scoped>
  /* Custom styles for layout */
  </style>
  