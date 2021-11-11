<template>
  <div class="recommend_page">
    <div class="title">推荐</div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="recommend_flex">
        <div
          class="recommend_same"
          v-for="item in list"
          :key="item"
          :title="item"
        >
          <VanImage class="recommend_same_image" />
          <div class="recommend_same_title">测试</div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { List as VanList, Image as VanImage } from "vant";

@Options({
  components: {
    VanList,
    VanImage,
  },
})
export default class Home extends Vue {
  loading = false;
  finished = false;
  list: any[] = [];

  onLoad() {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }

      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 100) {
        this.finished = true;
      }
    }, 3000);
  }
}
</script>

<style lang="less" scoped>
.recommend_page {
  width: 100%;
  padding: 0 20px;

  .title {
    padding: 20px 0;
    font-size: 36px;
    line-height: 1.4;
    color: @title-main-color;
  }

  .recommend_flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .recommend_same {
    width: 48%;
    padding-bottom: 20px;

    &_image {
      width: 100%;
      height: 240px;
    }

    &_title {
      margin-top: 10px;
      font-size: 32px;
      line-height: 60px;
      height: 60px;
      text-align: center;
      color: @title-content-color;
      .text-overflow();
    }
  }
}
</style>
