<template>
  <el-input
    v-bind="$props"
    @input="$emit('update:value', $event)"
  >
    <slot
      v-for="(_, name) in $slots"
      :name="name"
      :slot="name"
    />
  </el-input>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseInput extends Vue {
  @Prop() private value!: string;

  @Prop() private placeholder!: string;

  @Prop() private clearable!: boolean;

  @Prop() private disabled!: boolean;
}
</script>
