<template>
  <!-- Category Item -->
   <section>
     <div style="display: flex; gap: 10px;">
<CategoryItem
v-for="(item,i) in categoryItems" :key="i"
:title="item.title "
:img="item.img"
:color="item.color"
:num="item.num"

/>
</div>
  



<!-- Promation Component -->
<div style="display: flex; gap: 15px;">
 <PromotionItem v-for="(item,i) in promotionItems" :key="i"
 :title="item.title"
:img="item.img"
:color="item.color"

 
 
 />
</div>
   </section>
   



<router-view></router-view>
</template>

<script>
import CategoryItem from './components/CategoryItem.vue';
import PromotionItem from './components/PromotionItem.vue';
export default {
components:{
  CategoryItem,
  PromotionItem,
},
data(){
  return {
    categoryItems:[
        {
          title: "Apple",
          img: "src/assets/img/apple.png",
          color:"#FFB38E",
          num: 1,
        },
        {
          title: "Banana",
          img: "src/assets/img/banana.png",
          color:"#B1D690",
          num: 2,
        },
      ],
      promotionItems:[
      {
        title: 'Everyday Fresh & Clean with Our Products',
        img:  '/src/assets/img/banana.png',
        color: 'skyblue',
    },
    {
        title: 'Make your Breakfast Healthy and Easy',
        img:  '/src/assets/img/apple.png',
        color: 'pink'
    }

      ],
  }
      
},
mounted() {
    axios
      .get('https://api.example.com/data') // Replace with your API endpoint
      .then(response => {
        this.data = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.error('There was an error fetching data:', error);
        this.loading = false;
      });
  },
}
</script>