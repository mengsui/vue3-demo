<template>
  <div class="grade_component">
    <div class="grade_same">
      <VanImage class="grade_same_image" />
      <div class="grade_same_title">测试</div>
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
export default class Home extends Vue {
  list: any[] = [];
}
</script>

<style lang="less" scoped>
.grade_component {
  padding: 40px 30px 20px;
  display: flex;
  justify-content: center;

  .grade_same {
    flex: 1;

    &_image {
      display: block;
      margin: 0 auto;
      width: 60px;
      height: 60px;
    }

    &_title {
      padding-top: 10px;
      font-size: 30px;
      line-height: 1.4;
      text-align: center;
      color: @title-main-color;
    }
  }
}
</style>
