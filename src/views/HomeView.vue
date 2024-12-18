<template>
  <section class="flex flex-col gap-16 px-20 ">
 
    <!-- Menu Component -->
     <div>
      <menu-component
      title="Featured Categories"
      ></menu-component>
     </div>
    
     
    

  <!-- Categories -->
     <div>
    <div class="flex gap-5 ">
      <CategoryItem
        v-for="(category, index) in categoriesItem"
        :key="index"
        :category="category"
      />
    </div>

     </div>
 
    <!-- Promotions  -->
  
    <div class="flex gap-5">
     
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
    <div class="flex gap-5">
     

      
      <ProductComponent
    
        v-for="(product, index) in popularProducts"
        :product="product"
        :key="index"
      />
    </div>
  </section>
</template>

<script>
import { useProductStore } from "@/stores/product.js";
import CategoryItem from "@/components/CategoryItem.vue";
import PromotionItem from "@/components/PromotionItem.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import MenuComponent from '@/components/MenuComponent.vue';

export default {
  components: {
    CategoryItem,
    PromotionItem,
    ProductComponent,
    MenuComponent,
  },
  data() {
    return {
      currentGroupName: "Milks & Diaries", // Example default group name
      currentCategoryId: 1, // Example default category ID
    };
  },
  async mounted() {
    const store = useProductStore();
    await store.fetchCategories();
    await store.fetchPromotions();
    await store.fetchProducts();
    await store.fetchGroups();

    console.log("Categories:", store.categories);
    console.log("Promotions:", store.promotions);
    console.log("Products:", store.products);
    console.log("Groups:", store.groups);
  },
  computed: {
    // Fetch promotions
    promotionItems() {
      const store = useProductStore();
      return store.promotions;
    },
    // Fetch categories 
    categoriesItem() {
      const store = useProductStore();
      return store.categories;
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
