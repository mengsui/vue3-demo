<template>
  <div>
    <Cell v-for="(item, index) in modelValue" :key="index">
      <div>食物材料{{ index + 1 }}</div>
      <Row>
        <Col span="4" class="same_title">食材</Col>
        <Col span="20"><Field placeholder="请输入食材名称" /></Col>
      </Row>
      <Row>
        <Col span="4" class="same_title">数量</Col>
        <Col span="20"><Field placeholder="请输入食材数量" /></Col>
      </Row>
    </Cell>

    <VantButton icon="plus" size="small" @click="onClick" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Button as VantButton, Field, Cell, Col, Row } from "vant";

@Options({
  props: ["modelValue"],
  components: {
    VantButton,
    Field,
    Col,
    Row,
    Cell,
  },
})
export default class IngredientsComponent extends Vue {
  modelValue!: any[];

  onClick() {
    let modelValue = [...this.modelValue];
    modelValue.push({
      title: "",
      unit: "",
    });

    this.$emit("update:modelValue", modelValue);
  }
}
</script>

<style lang="less" scoped>
.same_title {
  display: flex;
  align-items: center;
  color: @title-content-color;
}
</style>
