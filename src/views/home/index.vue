<template>
  <div class="home_page">
    <Search
      :disabled="true"
      placeholder="请输入搜索关键词"
      @onClick="onSearch"
    />
    <MenuList />
    <Cookbook @onClick="onLink" />
    <Recommend @onClick="onLink" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { inject } from "vue";

import MenuList from "./components/MenuList.vue";
import Cookbook from "./components/Cookbook.vue";
import Recommend from "./components/Recommend.vue";
import Search from "@/components/Search.vue";

@Options({
  components: {
    Search,
    MenuList,
    Cookbook,
    Recommend,
  },
})
export default class HomePage extends Vue {
  globalData = inject("globalData");

  mounted() {
    this.axios.get("/api/get_user2").then((res) => {
      console.log(res);
    });
  }

  onSearch() {
    this.$router.push("/search");
  }

  onLink(item: any) {
    this.$router.push("/details");
  }
}
</script>

<style lang="less" scoped>
</style>