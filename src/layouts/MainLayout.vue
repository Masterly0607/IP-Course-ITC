<template>
    <section>
        <header-component></header-component>
        <RouterView></RouterView>
        <footer-component></footer-component>
    </section>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>