import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ mode, command }) => {
  console.log('mode,server', mode, command)
  return {
    plugins: [
      vue(),
      vueJsx(),
      VueSetupExtend(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // server: {
    //   open: true,
    //   proxy: {
    //     '^/api': {
    //       // target: 'http://192.168.137.58:8080',
    //       changeOrigin: true,
    //       // rewrite: path => path.replace(/^\/hats-biz-heboyu/, '')
    //       rewrite: path => path.replace(/^\/hats-biz-heboyu/, '/api/hats-biz'),
    //     },
    //   },
    // },
  }
})
