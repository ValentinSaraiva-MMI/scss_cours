<template>
  <a v-if="href" :href="href" :class="className"><slot></slot></a>

  <button v-else :class="className"><slot></slot></button>
</template>

<style lang="scss" scoped>
.buttonRect {
  padding: 33px 67px;
  border: none;
  border-radius: 15px;
  background: linear-gradient(lighten($color-main, 10%), $color-main);
  font-family: $font;
  font-size: $font_size-litle;
  font-weight: 600;
  color: $color-white;

  display: inline-block;

  &.-rounded {
    border-radius: 37px;
    background: $color-main;
    font-family: $font;
    font-size: $font_size-litle;
    font-weight: 500;
  }

  &.-small {
    font-weight: 400;

    font-size: $font_size-litle;
  }
}
</style>

<script>
export default {
  props: {
    content: String,
    href: String,
    variant: String,
    size: String
  },

  data() {
    return {
      className: `buttonRect ${this.variant === 'rounded' ? '-rounded' : ''} ${
        this.size === 'small' ? '-small' : ''
      }`
    }
  }
}
</script>
