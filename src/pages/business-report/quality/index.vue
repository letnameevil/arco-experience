<script setup name="quality-page"></script>

<template>
  <div class="quality-page">
    <a-button
      type="primary"
      @click="
        $router.push({
          name: 'add-page',
        })
      "
      >到修改页面</a-button
    >
  </div>
</template>
