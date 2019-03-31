<template>
  <el-container :gutter="20">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-main>
        <BaseForm
          ref="linkForm"
          :model="linkForm"
          @submit="submitForm('linkForm')"
        >
          <BaseFormItem prop="address">
            <BaseInput
              clearable
              :value.sync="linkForm.address"
            >
              <template v-slot:prepend>
                http://
              </template>
            </BaseInput>
          </BaseFormItem>
        </BaseForm>
        {{ linkForm }}
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { Form as ElForm } from 'element-ui';

const initialLinkFormState = {
  address: '',
};

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  linkForm = initialLinkFormState

  submitForm(formName: string) {
    const form: any = this.$refs[formName];
    form.$refs.form.validate((valid: boolean) => {
      if (valid) {
        console.log('valid!');
        console.log(this.linkForm);
        // TODO: understand how to fix error under the commented line
        // console.log(this[formName]);
        this.resetForm(formName);
      } else {
        console.log('invalid!');
        return false;
      }
      return true;
    });
  }

  resetForm(formName: string) {
    const form: any = this.$refs[formName];
    form.$refs.form.resetFields();
    // this.$refs[formName].$refs.form.resetFields();
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
