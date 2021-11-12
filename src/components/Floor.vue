<template>
  <div class="floor_component" @click="onClick">
    <van-image
      width="100%"
      height="100%"
      src="data:image/png;base64,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"
    />
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
export default class FloorComponent extends Vue {
  onClick() {
    this.$router.push("/updata");
  }
}
</script>

<style lang="less" scoped>
.floor_component {
  position: fixed;
  right: 5%;
  bottom: 8%;
  z-index: 900;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
}
</style>
