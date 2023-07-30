<script setup>
import {defineProps} from 'vue'

// eslint-disable-next-line no-unused-vars
defineProps({
  blogs: Object
});
</script>

<template>
<!--<h1>id no {{props.id}}</h1>-->

  <RouterLink :to="{name:'postDetails',params:{id:blogs.id}}">

    <h1>{{blogs.title}}</h1>
  </RouterLink>
</template>

<style scoped>

</style>