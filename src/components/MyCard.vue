<template>
  <div class="card">
    <div class="card__image">
      <img :src="imagesrc" :alt="imagealt" />
    </div>

    <div>
      <MyButton href="https://www.youtube.com/watch" size="small" variant="default"
        >monbouton</MyButton
      >

      content: String, href: String, size: String, variant: String
    </div>
    <div class="card__title">
      <h2>{{ title }}</h2>
    </div>
    <div class="card__prix">
      <p>
        {{ prix }}
      </p>

      <p>
        {{ note }}
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

  &__image {
    width: 60%;
    height: 60%;
    border-radius: 35%;
  }

  &__countent {
    margin-bottom: rem(20);
  }
}
</style>

<script setup>
import MyButton from './elements/MyButton.vue'

const props = defineProps({
  imagealt: String,
  title: String,
  prix: String,
  imagesrc: String,
  note: String
})
</script>
