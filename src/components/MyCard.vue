<template>
  <div class="card">
    <div class="card__image">
      <img :src="imagesrc" :alt="imagealt" />
    </div>

    <div class="card__title">
      <h2>{{ title }}</h2>
    </div>
    <div class="card__description">
      <p>
        {{ Description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: rem(200);
  height: 200px;
  border-radius: rem(20);
  border: red 2px solid;
  background-color: black;

  &__image {
    width: 100px;
    height: 100px;
  }

  &__countent {
    margin-bottom: rem(20);
  }
}
</style>

<script setup>
const props = defineProps({
  imagealt: String,
  title: String,
  Description: String,
  imagesrc: String
})
</script>
