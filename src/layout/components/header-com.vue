<script setup name="header-com"></script>

<template>
  <div class="header-com-container">
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>List</a-breadcrumb-item>
      <a-breadcrumb-item>App</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.header-com-container {
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 10px;
  background-color: #b5b7b9;
}
</style>
