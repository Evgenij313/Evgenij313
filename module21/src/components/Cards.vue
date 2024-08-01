<script setup>
import { ref } from "vue";

import Card from "./Card.vue";
const isLoading = ref(false);
const isError = ref(false);
const products = ref([]);

const getData = async () => {
  try {
    isLoading.value = true;
    const req = await fetch("https://fakestoreapi.com/products?limit=3");
    const data = await req.json();
    products.value = data;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    isError.value = true;
    console.log(isError);
    throw new Error("Ошибка->", error);
  }
};

getData();
console.log(isError);
</script>

<template>
  <div v-if="isLoading">
    <h1>...loading</h1>
  </div>
  <div v-if="isError">
    <h1>Всё очень плохо !</h1>
  </div>
  <div class="card_ntainecor">
    <Card v-for="item in products" :item="item" :key="item.id" />
  </div>
</template>

<style>
.card_ntainecor {
  display: grid;
  width: 10vh;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
