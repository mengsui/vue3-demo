<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<script>
import routes from "@/router/routes";

export default {
  watch: {
    $route(newData) {
      this.handleRouter(newData);
    },
  },
  created() {
    this.handleRouter(this.$route);
  },
  methods: {
    handleRouter(newData) {
      let curRouter = {};
      routes.forEach((item) => {
        if (item.path == newData.path) {
          curRouter = item;
        }
      });
      document.title = curRouter.title || "";
    },
  },
};
</script>

<style lang="less">
// 根节点样式
@import '~@/assets/less/theme.less';
@import '~@/assets/less/utils.less';
@import '~@/assets/less/reset.less';
</style>
