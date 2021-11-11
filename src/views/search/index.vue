<template>
  <div>
    <Search v-model:searchValue="searchValue" placeholder="请输入" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Search from "@/components/Search.vue";

@Options({
  components: {
    Search,
  },
})
export default class SearchPage extends Vue {
  searchValue = "";
}
</script>

<style lang="less" scoped>
</style>
