<template>
    <section>
     <div class="cart-container row q-pl-md" :style="{backgroundColor: color}">
        <!-- Text and button box -->
         <div class="col-6">
            <div style=" height: 100px;">
                <div class="text-h7">{{ title }}</div>
                <button-component @click="shopNow()"/>
            </div>
          
         </div>

         <!-- Img box -->
          <div class="img-box col-6">
            <div style="width: 100px; height: 100px;">
                 <img :src="img" alt="">
            </div>
           
          </div>
     </div>

    </section>

</template>

<style>
.cart-container{
    width: 350px;
    height: 200px;
    display: flex;
   align-items: center; 
   margin-top:40px ;
   position: relative;
   border: 1px solid #ccc;
   border-radius: 10px;
}
.text-box{

    height: 50%;
    padding-left: 30px ;
    
}
.img-box{

    height: 50% ;
    position: absolute;
    right: 0;
    bottom: 0;
    
}

.img-box img{
    width: 150%;
    height: 110%;
    transform: translate(-5%, 0); 
    /* - */
    
}



</style>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default{
  components: { ButtonComponent },
    props:{
        title: String,
      img: String,
      color: String,
    },
    methods:{
        shopNow(){
            alert("Let's shop: "+ this.title )
        }
    }
}

</script>

