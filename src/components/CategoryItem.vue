<template>
  <section>
    <div>
      <div class="w-36 h-48 rounded-2xl">
        <div
          class="flex flex-col items-center rounded-2xl justify-between p-5 h-full w-full"
        :style="{ backgroundColor: category.color }"
        >
          <img :src="image" alt="Category Img" class="w-full h-[50%]" />
          <div class="font-bold">{{ category.name }}</div>
          <div class="text-gray-500 text-xs">{{ category.productCount }} items</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      try {
        const images = JSON.parse(this.category.image);
        if (Array.isArray(images) && images.length > 0) {
          return "http://localhost:3000/" + images[0];
        }
      } catch (e) {
        return "http://localhost:3000/" + this.category.image;
      }
      return "";
    },
  },
};
</script>

<style></style>
