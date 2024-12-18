<template>
    <section >
        <div>
      <div class="w-36 h-48 rounded-2xl border">
        <div
          class="flex flex-col items-center justify-between p-5 h-full w-full"
            :style="{ backgroundColor: product.color }"
        >
          <img :src="image" alt="Popular Product Img" class="w-full h-auto" />
          <div>{{ product.name }}</div>
          <div>{{ product.productCount }} items</div>
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