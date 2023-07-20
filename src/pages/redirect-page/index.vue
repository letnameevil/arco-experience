<script setup name="redirect-page">
import { useRoute } from 'vue-router'
const Route = useRoute()
console.log('Route', Route)
</script>

<template>
  <div class="box">跳转页面</div>
</template>
