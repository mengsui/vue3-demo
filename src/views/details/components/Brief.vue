<template>
  <div class="brief_component">
    <VanImage class="brief_image" />
    <div class="brief_title">测试数据</div>
    <div class="brief_content">发啦科技发达flakes弗朗加利发酵的肌肤里卡多</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Image as VanImage } from "vant";

@Options({
  components: {
    VanImage,
  },
})
export default class Brief extends Vue {
  value = "";
}
</script>

<style lang="less" scoped>
.brief_component {
  padding: 30px 30px 0;

  .brief_image {
    width: 100%;
    height: 400px;
  }

  .brief_title {
    font-size: 50px;
    height: 75px;
    color: @title-main-color;
    line-height: 75px;
    text-align: center;
    font-weight: bold;
    .text-overflow(1);
  }

  .brief_content {
    padding-top: 10px;
    font-size: 30px;
    line-height: 1.4;
    color: @title-content-color;
  }
}
</style>
