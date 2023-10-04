<template>
  <div class="card">
    <img :src="imagesrc" :alt="imagealt" />

    <div class="card__title">
      <MyTitle h4="h4" variant="h4">
        {{ title }}
      </MyTitle>
    </div>

    <div class="card__description">
      <MyTitle h5="h5" variant="p1">
        {{ description }}
      </MyTitle>
    </div>

    <MyTitle class="span" h5="h5" variant="p1"> ${{ prix }} </MyTitle>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 258px;
  height: 275px;
  border-radius: 35px;
  border: 1px solid $gray;
}

.span {
  display: inline-block;
}
</style>

<script setup>
import MyTitle from './elements/MyTitle.vue'

defineProps({
  title: String,
  description: String,
  prix: String,
  imagesrc: String,
  imagealt: String
})
</script>
