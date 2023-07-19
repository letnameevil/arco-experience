<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    width: {
      type: String,
      default: '1.5em',
    },
    height: {
      type: String,
      default: '1.5em',
    },
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      // required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})
</script>
