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
  @Prop() readonly value!: string;

  @Prop() readonly placeholder!: string;

  @Prop() readonly disabled!: boolean;

  @Prop({ default: true }) readonly clearable!: boolean;
}
</script>
