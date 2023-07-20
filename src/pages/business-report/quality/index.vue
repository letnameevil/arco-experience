<script setup name="quality-page">
</script>

<template>
  <div class="quality-page">
    <a-button
      @click="
        $router.push({
          name: 'level-one',
        })
      "
      >到修改页面</a-button
    >
  </div>
</template>
