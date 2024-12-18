<template>
  <section class="flex flex-col gap-16 px-20">
    <!-- Menu Component -->
    <div>
      <menu-component title="Featured Categories"></menu-component>
    </div>

    <!-- Categories -->
  
      <div class="flex gap-5 cursor-pointer" @click="goToCategoryView">
        <CategoryItem
          v-for="(category, index) in categoriesItem"
          :key="index"
          :category="category"
        />
      </div>


    <!-- Promotions -->
    <div class="flex gap-5 cursor-pointer" @click="goToProductView">
      <PromotionItem
        v-for="(promotion, index) in promotionItems"
        :key="index"
        :promotion="promotion"
      />
    </div>

    <div>
      <menu-component title="Popular Product"></menu-component>
    </div>

    <!-- Popular Products Section -->
    <div class="flex gap-5 cursor-pointer" @click="goToProductView">
      <ProductComponent
        v-for="(product, index) in popularProducts"
        :product="product"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import { onMounted, computed } from "vue";
import { useProductStore } from "@/stores/product.js";
import CategoryItem from "@/components/CategoryItem.vue";
import PromotionItem from "@/components/PromotionItem.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";

// State and store
const store = useProductStore();
const currentGroupName = "Milks & Diaries"; // Default group name
const currentCategoryId = 1; // Default category ID

// Lifecycle hook
onMounted(async () => {
  await store.fetchCategories();
  await store.fetchPromotions();
  await store.fetchProducts();
  await store.fetchGroups();

  console.log("Categories:", store.categories);
  console.log("Promotions:", store.promotions);
  console.log("Products:", store.products);
  console.log("Groups:", store.groups);
});

// Computed properties
const promotionItems = computed(() => store.promotions);
const categoriesItem = computed(() => store.categories);
const productsByCategory = computed(() =>
  store.getProductsByCategory(currentCategoryId)
);
const popularProducts = computed(() => store.getPopularProducts);

// Route to Category View
const goToCategoryView = () =>{
route.push('/categories/:categoryId')
}

// Route to Product View
const goToProductView = () =>{
route.push('/products/:productId')
}
</script>
