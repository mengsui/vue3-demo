<template>
  <div class="cookbook_component" ref="cookbookRef">
    <div class="title">菜谱</div>
    <swipe
      v-if="handleSwipeWidth"
      class="my-swipe"
      :loop="false"
      :width="handleSwipeWidth"
      indicator-color="white"
    >
      <swipe-item v-for="item in list" :key="item.id">
        <div class="cookbook_same" @click="$emit('onClick', item)">
          <VanImage class="cookbook_same_image" />
          <div class="cookbook_same_title">测试</div>
        </div>
      </swipe-item>
    </swipe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Swipe, SwipeItem, Image as VanImage } from "vant";

@Options({
  components: {
    Swipe,
    SwipeItem,
    VanImage,
  },
  computed: {
    handleSwipeWidth() {
      if (this.cookbookRef?.clientWidth) {
        return this.cookbookRef?.clientWidth / 2.5;
      }
      return 0;
    },
  },
})
export default class Cookbook extends Vue {
  cookbookRef: any = null;

  list: any[] = [
    {
      id: 1,
      image: "",
      title: "测试",
    },
    {
      id: 2,
      image: "",
      title: "测试",
    },
    {
      id: 3,
      image: "",
      title: "测试",
    },
    {
      id: 4,
      image: "",
      title: "测试",
    },
  ];

  mounted() {}
}
</script>

<style lang="less" scoped>
.cookbook_component {
  width: 100%;
  padding-left: 20px;

  .title {
    padding: 40px 0 20px;
    font-size: 36px;
    line-height: 1.4;
    color: @title-main-color;
  }

  .cookbook_same {
    width: 100%;
    padding-right: 20px;

    &_image {
      width: 100%;
      height: 200px;
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