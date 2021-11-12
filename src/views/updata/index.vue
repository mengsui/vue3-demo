<template>
  <div>
    <van-form ref="$form">
      <Field
        name="title"
        v-model="formValue.title"
        label="菜名："
        placeholder="请输入"
      />
      <Field
        name="brief"
        v-model="formValue.brief"
        label="简介："
        type="textarea"
        placeholder="请输入"
      />
      <Field name="banner" label="食物图">
        <template #input>
          <Uploader v-model="formValue.banner" max-count="1" />
        </template>
      </Field>
      <Field
        name="times"
        v-model="formValue.times"
        label="时长："
        placeholder="请输入"
        type="number"
      />
      <Field name="difficulty" label="难度：">
        <template #input>
          <Rate v-model="formValue.difficulty" />
        </template>
      </Field>
      <Field
        name="flavor"
        v-model="formValue.flavor"
        label="口味："
        placeholder="请输入"
      />

      <Field name="ingredients" label="食材清单：">
        <template #input>
          <Ingredients v-model="formValue.ingredients" />
        </template>
      </Field>
    </van-form>
    <div class="submit_btn">
      <VantButton type="primary">主要按钮</VantButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import {
  Form as VantForm,
  Field,
  CellGroup,
  Card,
  Rate,
  Uploader,
  Button as VantButton,
} from "vant";
import Ingredients from "./components/Ingredients.vue";

@Options({
  components: {
    VantForm,
    Field,
    CellGroup,
    Card,
    Rate,
    Uploader,
    Ingredients,
    VantButton,
  },
})
export default class UpdataPage extends Vue {
  $form = "";
  formValue = {
    title: "",
    brief: "",
    banner: [],
    times: "",
    difficulty: 0,
    practice: "",
    flavor: "",
    ingredients: [],
  };
}
</script>

<style lang="less" scoped>
.submit_btn {
  padding: 30px 0;
  display: flex;
  justify-content: center;
}
</style>
