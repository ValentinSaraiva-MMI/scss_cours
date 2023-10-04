<template>
  <h1>hello oodddpoooo</h1>

  <buttonRect size="small" variant="rounded" href="/about"> test btn </buttonRect>
  <DefaultLayout>
    <template v-slot:header>
      <h2>helloworld</h2>
      <MyCard imagesrc="http://placekitten.com/g/200/300" />

      <nav>
        <ul>
          <li>
            <a href="/about">about</a>
          </li>
          <li><a href="/link">link</a></li>
          <li><a href="/link">link</a></li>
        </ul>
      </nav>
    </template>

    <MyIcon name="documentation" />
    <MyIcon name="facebook" />
    <MyIcon name="play" size="big" />

    <template v-slot:aside>
      <p>aside</p>
    </template>

    <template v-slot:footer>
      <p>footer</p>

      <MyButton href="/about">My link Button</MyButton>
    </template>
  </DefaultLayout>

  <mybackgroundscrollView />

  <!-- 
  <buttonRound/>
  <buttonIcon/>
  <buttonCard/>


  -->
</template>

<script setup>
import buttonRect from '@/components/myButton/buttonRectComp.vue'
import DefaultLayout from '../components/myButton/layout/DefaultLayout.vue'

import MyIcon from '../components/elements/MyIcon.vue'
import MyCard from '../components/MyCard.vue'

/*

import buttonRound from "@/components/myButton/buttonRoundComp.vue"
import buttonIcon from "@/components/myButton/buttonIconComp.vue"



import buttonCard from "@/components/myButton/buttonCardComp.vue"

*/
</script>
