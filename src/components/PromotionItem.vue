<template>
    <section>
     <div class="h-52 w-96 rounded-xl flex items-center justify-evenly  gap-5" :style="{backgroundColor: promotion.color}">
        <!-- Text and button box -->
         <div class="col-6">
            <div >
                <div class="text-xl font-medium">{{ promotion.title }}</div>
                <button-component @click="shopNow()"/>
            </div>
          
         </div> 

         <!-- Img box -->
          <div class=" col-6 flex items-end">
            <div style="width: 100px; height: 100px;">
                <img :src="image" class="w-full h-full object-contain" alt="Promotion Img" />
            </div>
           
          </div>
     </div>

    </section>

</template>

<style>




</style>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default{
  components: { ButtonComponent },
  props: {
    promotion: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      try {
        const images = JSON.parse(this.promotion.image);
        if (Array.isArray(images) && images.length > 0) {
          return "http://localhost:3000/" + images[0];
        }
      } catch (e) {
        return "http://localhost:3000/" + this.promotion.image;
      }
      return "";
    },
  },
    methods:{
        shopNow(){
            alert("Let's shop: "+ this.title )
        }
    }
}

</script>

