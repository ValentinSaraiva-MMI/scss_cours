<template>
  <buttonRect size="small" variant="rounded" href="/about"> test btn </buttonRect>
  <Mynavbar />
  <MyCards />

  <!-- {{ recipesNames }}
  {{ SpaguettiRecipes }}
  {{ HasGoalID1 }} -->

  <ul>
    <li v-for="(item, index) in recipesNames" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import buttonRect from '@/components/myButton/buttonRectComp.vue'
import Mynavbar from '@/components/elements/MyNavbar.vue'
import { computed, onMounted, ref } from 'vue'
import MyCards from '@/components/MyCards.vue'

import { client } from '@/utils/axios'

/* console.log('avant la requete ')

fetch('http://localhost:3000/recipes', {
  method: 'GET'
})
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log('liste des recettes', data)
  })
console.log('apres la requete ')

*/

const recipes = ref([])

const getRecipesThen = () => {
  fetch(import.meta.env.VITE_API_URL + '/recipes') //place la donné local host via une variable du fichier .env
    .then((response) => response.json())
    .then((recipes) => {
      fetch('http://localhost:3000/recipes/cuisine/1')
        .then((response) => response.json())
        .then((cuisineRecipies) => console.log({ recipes, cuisineRecipies }))
    })
}

const recipesNames = computed(() => {
  return recipes.value.map((item) => {
    return item.recipe_name
  })
})

const SpaguettiRecipes = computed(() => {
  return recipes.value.filter((item) => item.recipe_name.toLowerCase().includes('spaghetti'))
})

const HasGoalID1 = computed(() => {
  return recipes.value.some((item) => item.goal_id === 1)
})

/*
const getRecipes = async () => {
  const response = await client.get('/recipes')
  const cuisineRecipies = await client.get('/recipes/cuisine/1')

  return { recipes: response, cuisineRecipies: cuisineRecipies }
}
*/

const getRecipes = async () => {
  const response = await client.get('recipes')
  return response.data
}

onMounted(async () => {
  recipes.value = await getRecipes()
})
</script>
