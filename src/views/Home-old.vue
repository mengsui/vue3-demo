<template>
  <div class="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-icon name="search" />
    <van-rate v-model="value" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    test：{{ count }} <br />
    openid：{{ homeState.openid }} <br />
    search:{{ search.title }} <br />

    list:
    <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    <div @click="increment">increment</div>
    <div @click="decrement">decrement</div>
  </div>
</template>

<script lang="ts">
import { computed, inject } from "vue";
import { useStore } from "vuex";
import { Options, Vue } from "vue-class-component";

import { useRouter, useRoute } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Search, Icon, Rate } from "vant";

@Options({
  components: {
    HelloWorld,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Rate.name]: Rate,
  },

  beforeRouteEnter(to: any, from: any, next: any) {
    setTimeout(() => {
      console.log(22);
      next(true);
    }, 2000);
  },
})
export default class Homeold extends Vue {
  cookies: any = inject("$cookies");

  pageRouter = useRouter();

  query = useRoute().query;

  store = useStore();
  homeState = computed(() => this.store.state.home);

  count = 0;

  search = {
    title: "1234",
  };

  list: any = [];

  value = 4;

  // onBeforeRouteEnter(to: any, from: any, next: () => void) {
  //   console.log(1);
  //   next();
  // }

  created() {
    console.log("useRoute", this.query);

    this.cookies.set("token", "fasfdd");
  }

  // Methods will be component methods
  increment() {
    this.count++;
    this.search.title = "fladjfa";
    this.list.push("12");
    this.store.dispatch("setData", {
      openid: "lala",
    });
  }

  decrement() {
    this.pageRouter.push("/about");
    // this.count--;
    // this.store.dispatch("setData", {
    //   openid: "yuyu",
    // });
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 828px;
}
</style>
