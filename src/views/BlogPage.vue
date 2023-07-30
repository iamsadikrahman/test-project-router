<script setup>


import {onMounted, reactive, ref} from "vue";

import axios from "axios";
import PostCard from "@/components/PostCard.vue";

let blogPosts = reactive([])

let isLoading = ref(true)

onMounted(async ()=>{
  try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts', )

    blogPosts = data
    console.log(blogPosts)
    isLoading.value = false
  } catch (e) {
    console.error(e)
    isLoading.value = false

  }
})


</script>

<template>
<h1>Blog Page</h1>

<section>
  <h1 v-if="isLoading">Loading</h1>
  <div v-else class="text-center space-y-2 ">

      <PostCard class="my-10 border"  v-for="(blogPost) in blogPosts" :key="blogPost.id" :blogs="blogPost">{{blogPost.title}}</PostCard>


  </div>

</section>

</template>

<style scoped>

</style>