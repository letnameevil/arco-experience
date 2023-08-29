<script setup name="login-page">
import { ref, reactive, onUnmounted } from 'vue'
import { Message } from '@arco-design/web-vue'
import { getRandomStr, getRandomColor, getCurrentTime } from '@/utils/random-str.js'

/**
 * api
 **/
import { getText } from '@/api/login'

const loginData = reactive({})
const textContent = ref('')
const currentTime = ref('')
const codeSrc = ref('')
const currentCode = ref('')
const btnLoading = ref(false)

getText().then(res => {
  textContent.value = res.slice(3, -4)
})

let timer = null

/**
 * 实时显示时间
 **/
const showCurrent = () => {
  currentTime.value = getCurrentTime()
  timer = setInterval(() => {
    currentTime.value = getCurrentTime()
  })
}

showCurrent()

onUnmounted(() => {
  clearInterval(timer)
})

const getCanvasCode = () => {
  const canvasEle = document.createElement('canvas')
  canvasEle.width = 90
  canvasEle.height = 26
  const ctx = canvasEle.getContext('2d')
  const randomStr = getRandomStr()
  currentCode.value = randomStr
  ctx.font = 'italic 20px serif'
  for (let i = 0, j = 10; i < randomStr.length; i++) {
    const element = randomStr[i]
    ctx.fillStyle = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
    ctx.fillText(element, j, 20)
    j += 12
  }
  return canvasEle.toDataURL()
}

/**
 * 切换验证码
 **/
const changeCode = () => {
  codeSrc.value = getCanvasCode()
}

/**
 * 表单校验
 **/
const handleSubmit = ({ values, errors }) => {
  if (errors) {
    Message.warning({
      id: '1',
      content: '请完善以下内容~',
    })
  } else {
    // 判断验证码是否正确
    const { verification } = values
    const ret = verification.toLowerCase() === currentCode.value.toLowerCase()
    if (!ret) {
      Message.warning({
        id: '2',
        content: '验证码错误，请重新填写',
      })
      changeCode()
      loginData.verification = ''
    } else {
      /**
       * 发请求拿数据
       **/
      Message.success({
        id: '3',
        content: '登录成功',
      })
    }
  }
}

codeSrc.value = getCanvasCode()
</script>

<template>
  <div class="login-page">
    <div class="text-content">{{ textContent }}</div>
    <div class="current-time">{{ currentTime }}</div>
    <div class="login-plane">
      <a-card>
        <h2 class="login-title">Login</h2>
        <a-form ref="formRef" :model="loginData" @submit="handleSubmit">
          <a-form-item field="name" label="账号" :rules="[{ required: true, message: '请输入账号' }]" :validate-trigger="['change', 'input']">
            <a-input v-model="loginData.name" placeholder="请输入账号" allow-clear />
          </a-form-item>
          <a-form-item field="password" label="密码" :rules="[{ required: true, message: '请输入密码' }]" :validate-trigger="['change', 'input']">
            <a-input v-model="loginData.password" placeholder="请输入密码" allow-clear />
          </a-form-item>
          <a-form-item
            field="verification"
            label="验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
            :validate-trigger="['change', 'input']"
          >
            <a-input v-model="loginData.verification" placeholder="请输入验证码" allow-clear>
              <template #append>
                <div class="verification-code" @click="changeCode">
                  <img :src="codeSrc" title="验证码出错" height="26" />
                </div>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button html-type="submit" type="primary" long :loading="btnLoading">登录</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-title {
  text-align: center;
}

.time-show,
.login-plane {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.time-show {
  color: #e9ebee;
  font-size: 14rem;
  font-weight: 700;
  text-align: center;
}

.login-plane {
  width: 500px;
}

.verification-code {
  background-color: #e9ebee;
}

.verification-code:hover {
  cursor: pointer;
}

.text-content {
  color: rgb(0, 0, 0);
  font-size: 24px;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
}

.current-time {
  padding-right: 10px;
  text-align: right;
  color: rgb(0, 0, 0);
  font-size: 24px;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
}
</style>
