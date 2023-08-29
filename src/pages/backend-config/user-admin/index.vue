<script setup name="user-admin-page"></script>

<template>
  <div class="user-admin-page">
    <div class="change-plane">
      <span>&lt;</span>
      <span class="title">编辑小号名称</span>
      <div class="ipt-container">
        <img
          width="30"
          height="30"
          style="border-radius: 50%; margin-right: 14px"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          alt=""
        />
        <input class="ipt" type="text" />
      </div>
      <div class="tip">小号名称支持2-10位字符</div>
      <button class="btn">确 定</button>
    </div>
  </div>
</template>

<style scoped>
.change-plane {
  padding: 20px;
  width: 280px;
  height: 200px;
  background-color: #e2e6fc;
  box-sizing: border-box;
  border-radius: 10px;
}

.ipt-container {
  display: flex;
  align-items: center;
  padding-top: 20px;
}

.ipt {
  outline: none;
  border-radius: 20px;
  border: none;
  padding: 10px;
}

.tip {
  padding: 10px 0 20px 50px;
  font-size: 12px;
  color: #ccc;
}

.btn {
  width: 100%;
  height: 40px;
  background: #456fff;
  border-radius: 20px;
  color: #fff;
  outline: none;
  border: none;
}
</style>
