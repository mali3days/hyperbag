<template>
  <el-form-item
    v-bind="$props"
  >
    <slot />
  </el-form-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseFormItem extends Vue {
  @Prop() private label!: string;

  @Prop() private prop!: string;
}
</script>
