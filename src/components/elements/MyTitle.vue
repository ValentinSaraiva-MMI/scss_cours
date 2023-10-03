<template>
  <h3 class="titre" :class="className"><slot></slot></h3>
</template>

<style lang="scss" scoped>
.titre {
  font-family: $primary-font-familly;

  &.-h1 {
    font-size: $giant-font-size;
    font-weight: 700;
  }
  &.-h2 {
    font-size: $bigger-font-size;
    font-weight: 700;
  }
  &.-h3 {
    font-size: $big-font-size;
    font-weight: 700;
  }
  &.-h4 {
    font-size: $medium-font-size;
    font-weight: 700;
  }
  &.-h5 {
    font-size: $regular-font-size;
    font-weight: 600;
  }
}
</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: String
})

const className = computed(() => ({
  '-h1': props.variant === 'h1',
  '-h2': props.variant === 'h2',
  '-h3': props.variant === 'h3',
  '-h4': props.variant === 'h4'
}))
</script>
