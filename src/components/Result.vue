<template>
  <a-result :status="status"
            :title="title"
            :subTitle="subTitle">
    <template #extra>
      <a-button type="primary">返回首页</a-button>
    </template>
  </a-result>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    console.log(route)
    return {}
  }
})
</script>