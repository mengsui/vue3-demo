<template>
  <div class="step_component">
    <div class="step_title">烹煮步骤</div>
    <div class="step_same">
      <span class="step_same_title">步骤1</span>
      <span class="step_same_contnet rich_text" v-html="richData"></span>
      <VanImage class="step_same_image" />
      <VanImage class="step_same_image" />
      <VanImage class="step_same_image" />
    </div>
    <div class="step_same">
      <span class="step_same_title">步骤1</span>
      <span class="step_same_contnet rich_text" v-html="richData"></span>
      <VanImage class="step_same_image" />
      <VanImage class="step_same_image" />
      <VanImage class="step_same_image" />
    </div>
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
export default class Step extends Vue {
  richData =
    "法兰克福家啊说了法兰克福家啊说了法兰克福家啊说了法兰克福家啊说了法兰克福家啊说了";
}
</script>

<style lang="less" scoped>
.step_component {
  padding: 40px 30px 0;

  .step_title {
    font-size: 40px;
    text-align: center;
    color: @title-main-color;
  }

  .step_same {
    padding-top: 40px;

    &_title {
      padding-right: 15px;
      font-size: 30px;
      line-height: 1.3;
      color: @title-main-color;
    }

    &_contnet {
      font-size: 28px;
      line-height: 1.3;
      color: @title-content-color;
    }

    &_image {
      margin-top: 20px;
      width: 100%;
      min-height: 100px;
    }
  }
}
</style>
