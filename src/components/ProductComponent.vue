<template>
    <section >
        <div>
      <div class="w-72 h-96 rounded-2xl border">
        <div
          class="flex flex-col   p-5 h-full w-full"
            :style="{ backgroundColor: product.color }"
        >

          <img :src="image" alt="Popular Product Img" class="w-full h-[50%]" />
          <div class="mt-10"></div>
          <div class="text-gray-500 text-sm">{{ product.group }}</div>
          <div class="font-bold text-xl">{{ product.name }}</div>
          <div class="flex">
            <div class="flex mr-6">
              <img src="/src/assets/img/star.png" alt="">
              <img src="/src/assets/img/star.png" alt="">
              <img src="/src/assets/img/star.png" alt="">
              <img src="/src/assets/img/star.png" alt="">
              <img src="/src/assets/img/star2.png" alt="">

            </div>
            <div>({{ product.rating }}.0)</div>
             
              
          </div>
          <div class="flex justify-between mt-5 items-center">
            <div class="gap-3 flex items-center">
              <span class="text-2xl text-green-500 font-bold">${{ product.price }} </span>
              <span class="line-through">$2.80</span>
            </div>
            <div >
              <button class="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 ">
  <!-- Icon -->
  <span class="">Add</span>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
  </svg>

</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </section>
  
</template>

<script>
export default {
    props: ['product'],
    computed: {
        image() {
            const images = JSON.parse(this.product.image);
            if (images && images.length > 0) {
                return 'http://localhost:3000/'+images[0]
            }
        }
    }
}
</script>