<template>
  <div class="card">
    <div class="card__image">
      <img :src="imagesrc" :alt="imagealt" />
    </div>

    <div class="card__texte">
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

      <div>
        <MyTitle class="card__span--couleur" h5="h5" variant="h5"> {{ monnaie }} </MyTitle>
        <MyTitle class="card__span" h5="h5" variant="h5"> {{ prix }} </MyTitle>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 258px;
  height: 275px;
  border-radius: 35px;
  margin-top: 20px;
  border: 1px solid $gray;

  &__span {
    display: inline-block;

    &--couleur {
      color: $red;
      display: inline-block;
    }
  }

  &__image {
    max-width: 238px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: -60px;
  }

  &__texte {
    display: grid;
    margin-top: -70px;
    text-align: center;
    gap: 11px 0px;
  }
}
</style>

<script setup>
import MyTitle from './elements/MyTitle.vue'

defineProps({
  title: String,
  description: String,
  prix: String,
  imagesrc: String,
  imagealt: String,
  monnaie: String
})
</script>
