<template>
  <el-button
    v-bind="$props"
    @click="onClick"
  >
    <slot />
  </el-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseButton extends Vue {
  @Prop() private type!: string;

  @Prop() private icon!: string;

  @Prop() private plain!: boolean;

  @Prop() private round!: boolean;

  @Prop() private disabled!: boolean;

  onClick() {
    this.$emit('click');
  }
}
</script>
