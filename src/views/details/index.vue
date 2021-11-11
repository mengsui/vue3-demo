<template>
  <div>
    <Brief />
    <Grade />
    <DetailedList />
    <Step />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Brief from "./components/Brief.vue";
import Grade from "./components/Grade.vue";
import DetailedList from "./components/DetailedList.vue";
import Step from "./components/Step.vue";

@Options({
  components: {
    Brief,
    Grade,
    DetailedList,
    Step,
  },
})
export default class HomePage extends Vue {}
</script>

<style lang="less" scoped>
</style>
