<script setup name="data-dict-page">
import LeftPlane from './components/left-plane.vue'
import RightPlane from './components/right-plane.vue'
</script>

<template>
  <div class="data-dict">
    <a-row :gutter="10">
      <a-col :span="10">
        <LeftPlane />
      </a-col>
      <a-col :span="14">
        <RightPlane />
      </a-col>
    </a-row>
  </div>
</template>
