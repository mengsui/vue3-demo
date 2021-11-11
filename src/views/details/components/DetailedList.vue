<template>
  <div class="detailed_list_component">
    <div class="detailed_list_title">食材清单</div>
    <div class="content">
      <div class="detailed_list_same">
        <div class="detailed_list_same_title">裙带菜</div>
        <div class="detailed_list_same_unit">10g</div>
      </div>

      <div class="detailed_list_same">
        <div class="detailed_list_same_title">裙带菜</div>
        <div class="detailed_list_same_unit">10g</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.detailed_list_component {
  padding: 40px 30px 0;

  .detailed_list_title {
    font-size: 40px;
    text-align: center;
    color: @title-main-color;
  }

  .content {
    padding-top: 20px;

    .detailed_list_same {
      position: relative;
      display: flex;
      justify-content: space-between;
      line-height: 46px;
      padding: 10px;
      .bottom-border();

      &_title {
        font-size: 30px;
        color: @title-main-color;
      }

      &_unit {
        font-size: 28px;
        color: @title-content-color;
      }
    }
  }
}
</style>
