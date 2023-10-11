<template>
  <p>Hello World</p>

  <div class="p-recipe-view">
    <RouterLink to="/">Retour à l'accueil</RouterLink>
    <p>{{ recipe.recipe_name }}</p>
    <p>{{ recipe.recipe_description }}</p>
  </div>
</template>

<style></style>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { client } from '@/utils/axios'

const route = useRoute()

const recipe = ref({})

const getRecipes = async () => {
  const response = await client.get(`/recipes/${route.params.id}`)
  return response.data
}

onMounted(async () => {
  recipe.value = await getRecipes()
})
</script>
