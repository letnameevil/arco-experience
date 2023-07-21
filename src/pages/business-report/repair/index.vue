<script setup name="repair-page">
import VTypical from 'vue-typical'
</script>

<template>
  <div class="repair-page">
    <!-- <particles-bg type="fountain" :bg="true" /> -->
    <v-typical class="blink" :steps="['H', 500, 'He', 500, 'Hel', 500, 'Hell', 500, 'Hello', 500]" :loop="Infinity" :wrapper="'h2'"></v-typical>
  </div>
</template>

<style scoped></style>
