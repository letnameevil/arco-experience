<script setup>
const handleSelect = v1 => {
  console.log('v1', v1)
}
</script>

<template>
  <div class="tool-bar-container">
    <a-dropdown @select="handleSelect" :popup-max-height="false">
      <a-button>Admin <icon-down /></a-button>
      <template #content>
        <a-doption>退出登录</a-doption>
        <a-doption>修改密码</a-doption>
        <a-doption>设置</a-doption>
      </template>
    </a-dropdown>
  </div>
</template>
