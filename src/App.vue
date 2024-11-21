<template>
  <section>
    <!-- Categories Section -->
    <div v-if="categories.length" style="display: flex; gap: 10px; margin-bottom: 20px;">
      <CategoryItem
        v-for="(item, i) in categories"
        :key="i"
        :title="item.name"
        :img="item.image"
        :color="item.color"
        :num="item.productCount"
      />
    </div>

    <!-- Promotions Section -->
    <div v-if="promotionItems.length" style="display: flex; gap: 15px; margin-bottom: 20px;">
      <PromotionItem
        v-for="(item, i) in promotionItems"
        :key="i"
        :title="item.title"
        :img="item.image"
        :color="item.color"
      />
    </div>

    <!-- Products Section -->
    <div v-if="productsByCategory.length" style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
      <div
        v-for="(product, index) in productsByCategory"
        :key="index"
        class="product-card"
        style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; width: 150px; text-align: center;"
      >
        <img :src="product.image" alt="Product Image" style="width: 100%; height: auto;" />
        <h4>{{ product.name }}</h4>
        <p>Sold: {{ product.countSold }}</p>
      </div>
    </div>

    <!-- Popular Products Section -->
    <div v-if="popularProducts.length" style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
      <div
        v-for="(product, index) in popularProducts"
        :key="index"
        class="product-card"
        style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; width: 150px; text-align: center;"
      >
        <img :src="product.image" alt="Popular Product Image" style="width: 100%; height: auto;" />
        <h4>{{ product.name }}</h4>
        <p>Sold: {{ product.countSold }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useProductStore } from './stores/product';
import CategoryItem from './components/CategoryItem.vue';
import PromotionItem from './components/PromotionItem.vue';

export default {
  components: {
    CategoryItem,
    PromotionItem,
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


