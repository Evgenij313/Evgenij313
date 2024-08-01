<script setup>
const { item } = defineProps(["item"]);
</script>

<template>
  <div class="card_container">
    <img :src="item.image" alt="" />
    <h2>{{ item.title }}</h2>
    <h5>{{ item.category }}</h5>
    <p>
      {{ item.description }}
    </p>
    <p class="price">{{ item.price }}$</p>
  </div>
</template>

<style scoped>
.card_container {
  box-shadow: 0 0 10px grey;
  padding: 30px 20px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card_container img {
  width: 50%;
  object-fit: contain;
}
.price {
  font-size: 24px;
  color: red;
}
</style>
