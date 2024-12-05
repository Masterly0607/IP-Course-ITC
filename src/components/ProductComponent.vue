<template>
    <div
        class="product-card"
        style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; width: 150px; text-align: center;"
      >
        <img :src="image" alt="Popular Product Image" style="width: 100%; height: auto;" />
        <h4>{{ product.name }}</h4>
        <p>Sold: {{ product.countSold }}</p>
      </div>
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