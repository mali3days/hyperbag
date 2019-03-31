<template>
  <el-form
    ref="form"
    v-bind="$props"
    @submit.native.prevent="$emit('submit', $event)"
  >
    <slot />
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseForm extends Vue {
  @Prop() private model!: any;
}
</script>
