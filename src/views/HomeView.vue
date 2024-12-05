<template>
    <section>
      <!-- Categories -->
      <div v-if="categories.length" style="display: flex; gap: 10px; margin-bottom: 20px;">
        <CategoryItem
     
          
        />
      </div>
  
      <!-- Promotions  -->
      <div v-if="promotionItems.length" style="display: flex; gap: 15px; margin-bottom: 20px;">
        <PromotionItem
          v-for="(item, i) in promotionItems"
          :key="i"
          :title="item.title"
          :img="item.image"
          :color="item.color"
        />
      </div>
  
  
      <!-- Popular Products Section -->
      <div v-if="popularProducts.length" style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
        <ProductComponent v-for="(product, index) in popularProducts" :product="product" :key="index"/>
      </div>
    </section>
  </template>
  
  <script>
  import { useProductStore } from './stores/product';
  import CategoryItem from './components/CategoryItem.vue';
  import PromotionItem from './components/PromotionItem.vue';
  import ProductComponent from './components/ProductComponent.vue';
  
  export default {
    components: {
      CategoryItem,
      PromotionItem,
      ProductComponent
    },
    data() {
      return {
        currentGroupName: 'Milks & Diaries', // Example default group name
        currentCategoryId: 1, // Example default category ID
      };
    },
    async mounted() {
      const store = useProductStore();
      await store.fetchCategories();
      await store.fetchPromotions();
      await store.fetchProducts();
      await store.fetchGroups();
  
      console.log('Categories:', store.categories);
      console.log('Promotions:', store.promotions);
      console.log('Products:', store.products);
      console.log('Groups:', store.groups);
    },
    computed: {
      // Fetch promotions
      promotionItems() {
        const store = useProductStore();
        return store.promotions;
      },
      // Fetch categories by group
      categories() {
        const store = useProductStore();
        return store.getCategoriesByGroup(this.currentGroupName);
      },
      // Fetch products by category
      productsByCategory() {
        const store = useProductStore();
        return store.getProductsByCategory(this.currentCategoryId);
      },
      // Fetch popular products
      popularProducts() {
        const store = useProductStore();
        return store.getPopularProducts;
      },
    },
  };
  </script>
  
  
  