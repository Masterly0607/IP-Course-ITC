<template>
  <!-- Category Item -->
   <section>
     <div style="display: flex; gap: 10px;">
<CategoryItem
v-for="(item,i) in categoryItems" :key="i"
:title="item.name "
:img="item.image"
:color="item.color"
:num="item.productCount"

/>
</div>
  



<!-- Promation Component -->
<div style="display: flex; gap: 15px;">
 <PromotionItem v-for="(item,i) in promotionItems" :key="i"
 :title="item.title"
:img="item.image"
:color="item.color"

 
 
 />
</div>
   </section>
   




</template>

<script>
import CategoryItem from './components/CategoryItem.vue';
import PromotionItem from './components/PromotionItem.vue';
import axios  from 'axios';
export default {
components:{
  CategoryItem,
  PromotionItem,
},
data(){
  return {
      // Variables to store data that fetch from the API.
      categoryItems:[], 
      promotionItems:[],
  }   
},
methods: {
  // Methods to fetch data from the API.
  
  fetchCategories(){
    axios.get('http://localhost:3000/api/categories')
    .then ( response => {
      this.categoryItems = response.data; // Store the API response in categoryItems
    })
    .catch(error => {
      console.error("Error fetching categories:", error);
    })
  },
  fetchPromotions(){
    axios.get('http://localhost:3000/api/promotions')
    .then ( response => {
      this.promotionItems = response.data; // Store the API response in categoryItems
    })
    .catch(error => {
      console.error("Error fetching promotions:", error);
    })
  },

},
mounted(){
     this.fetchCategories();
     this.fetchPromotions();

   
    
}

}
</script>