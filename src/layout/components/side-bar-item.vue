<script setup name="side-bar-item">
import { IconCalendar } from '@arco-design/web-vue/es/icon'

defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="side-bar-item">
    <template v-for="menuItem in menuList" :key="menuItem.link">
      <a-menu-item :key="menuItem.link" v-if="!menuItem.children || menuItem.children.length === 0">
        <template v-if="menuItem.svgName">
          <SvgIcon :name="menuItem.svgName" width="14px" height="14px" style="margin-right: 14px" />
        </template>
        {{ menuItem.title }}
      </a-menu-item>

      <a-sub-menu :key="menuItem.link" v-if="menuItem.children && menuItem.children.length > 0">
        <template #title>
          <span>
            <template v-if="menuItem.svgName">
              <SvgIcon :name="menuItem.svgName" width="14px" height="14px" style="margin-right: 14px" />
            </template>
            {{ menuItem.title }}
          </span>
        </template>
        <side-bar-item :menuList="menuItem.children" />
      </a-sub-menu>
    </template>
  </div>
</template>
