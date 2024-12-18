<template>
    <section>
    <div class="flex justify-between ">
         <div class="font-bold text-xl">
    {{    title }}
         </div>
         <div>
            <ul class="flex gap-10 text-gray-500 ">
                <li>
                    <router-link  active-class="text-blue-500 font-bold underline">
  All
</router-link>
                </li>
                <li>
                    <router-link >
  Milks & Dairies
</router-link>
                </li>
                <li>
                    <router-link>
  Coffees & Teas
</router-link>
                </li>
                <li>
                    <router-link >
  Pet Foods
</router-link>
                </li>
                <li>
                    <router-link >
  Meats
</router-link>
                </li>
                <li>
                    <router-link >
  Vegetables
</router-link>
                </li>
                <li>
                    <router-link  >
Fruits
</router-link>
                </li>
            </ul>
         </div>
    </div>
    </section>
</template>

<script setup>
const props = defineProps(
    {
        title: String,

    }
)
</script>

