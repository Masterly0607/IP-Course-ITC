import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),
  getters: {
    // Get categories by group name
    getCategoriesByGroup: (state) => {
      return (groupName) =>
        state.categories.filter((category) => category.group === groupName);
    },
    // Get products by group name
    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.filter((product) => product.group === groupName);
    },
    // Get products by category ID
    getProductsByCategory: (state) => {
      return (categoryId) =>
        state.products.filter((product) => product.categoryId === categoryId);
    },
    // Get popular products (countSold > 10)
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    },
  },
  actions: {
    // Fetch categories from the API
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    // Fetch promotions from the API
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    },
    // Fetch products from the API
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    // Fetch groups from the API
    async fetchGroups() {
      try {
        const response = await axios.get('http://localhost:3000/api/groups');
        this.groups = response.data;
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    },
  },
});
