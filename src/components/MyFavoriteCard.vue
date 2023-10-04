<template>
  <div class="card">
    <div class="card__column">
      <div class="card__icone">
        <img :src="imagesrc" :alt="imagealt" />
      </div>

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

      <div class="card__prix">
        <span>$</span>

        <MyTitle class="span" h5="h5" variant="p1">
          {{ prix }}
        </MyTitle>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 485px;
  height: 485px;
  border-radius: 35px;
  border: 1px solid $gray;
}

.span {
  display: inline-block;
}
</style>

<script setup>
import MyTitle from './elements/MyTitle.vue'

const props = defineProps({
  title: String,
  description: String,
  prix: String,
  monnaie: String,
  imagesrc: String,
  imagealt: String
})
</script>
