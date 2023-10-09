<template>
  <buttonRect size="small" variant="rounded" href="/about"> test btn </buttonRect>
  <Mynavbar />
</template>

<script setup>
import buttonRect from '@/components/myButton/buttonRectComp.vue'
import Mynavbar from '@/components/elements/MyNavbar.vue'
import { onMounted } from 'vue'

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

const getRecipesThen = () => {
  fetch('http://localhost:3000/recipes')
    .then((response) => response.json())
    .then((recipes) => {
      fetch('http://localhost:3000/recipes/cuisine/1')
        .then((response) => response.json())
        .then((cuisineRecipies) => console.log({ recipes, cuisineRecipies }))
    })
}

const getRecipes = async () => {
  const response = await fetch('http://localhost:3000/recipes')
  const cuisineRecipies = await fetch('http://localhost:3000/recipes')

  return { recipes: await response.json(), cuisineRecipies: await cuisineRecipies.json() }
}

onMounted(async () => {
  console.log('fetch + await', await getRecipes())

  getRecipesThen()
})
</script>
