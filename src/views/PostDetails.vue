<script setup>

import {defineProps,reactive,ref,onMounted} from 'vue'
import router from "../router/index.js";




// eslint-disable-next-line no-unused-vars
const props = defineProps({
 id: {
   type: String,
   required: true
 }
})

let queryPost = reactive({})

let isLoading =ref(true)


onMounted(async ()=>{
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${parseInt(props.id)}`)

    if(data.status === 404) {
      await router.push({name: 'NotFound'})
    }
    queryPost = await data.json()
    console.log(queryPost)
    isLoading.value = false
    console.log(data.status)
  } catch (error){

    console.error(error)

    isLoading.value = false
  }
})


</script>

<template>

  <h1 v-if="isLoading">loading.....</h1>
<h1 v-else>{{ queryPost.body }}</h1>
</template>

<style scoped>

</style>