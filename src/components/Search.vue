<template>
  <Sticky>
    <div class="shadow" @click="$emit('onClick')">
      <Search
        v-model="searchValue"
        :disabled="disabled"
        :placeholder="placeholder"
      />
    </div>
  </Sticky>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";

import { Sticky, Search } from "vant";

export default defineComponent({
  props: {
    searchValue: String,
    disabled: Boolean,
    placeholder: String,
  },
  components: {
    Sticky,
    Search,
  },
  setup(props, { emit }) {
    const searchValue = ref(props.searchValue);
    const disabled = ref(props.disabled);
    const placeholder = ref(props.placeholder);

    watch(
      () => searchValue.value,
      () => {
        emit("update:searchValue", searchValue.value);
      }
    );

    return {
      disabled,
      searchValue,
      placeholder,
    };
  },
});
</script>

<style lang="less" scoped>
.shadow {
  box-shadow: 0px 10PX 10PX rgba(0, 0, 0, .05);
}
</style>
