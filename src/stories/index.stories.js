/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('BaseButton', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories
  .add('default', () => ({
    props: {
      disabled: {
        default: boolean('disabled', false),
      },
      plain: {
        default: boolean('plain', false),
      },
      round: {
        default: boolean('round', false),
      },
    },
    methods: {
      action: action('clicked'),
    },
    render() {
      return (
        <el-row>
          <el-main>
            <BaseButton onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}>Default</BaseButton>
            <BaseButton type="danger" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}>Danger</BaseButton>
            <BaseButton type="primary" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}>Primary</BaseButton>
            <BaseButton type="success" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}>Success</BaseButton>
            <BaseButton type="info" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}>Info</BaseButton>
            <BaseButton type="warning" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}>Warning</BaseButton>
            <BaseButton type="danger" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}>Danger</BaseButton>
          </el-main>
          <el-main>
            <BaseButton icon="el-icon-search" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}></BaseButton>
            <BaseButton type="primary" icon="el-icon-edit" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}></BaseButton>
            <BaseButton type="success" icon="el-icon-check" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}></BaseButton>
            <BaseButton type="info" icon="el-icon-message" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}></BaseButton>
            <BaseButton type="warning" icon="el-icon-star-off" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}></BaseButton>
            <BaseButton type="danger" icon="el-icon-delete" onClick={this.action} disabled={this.disabled} plain={this.plain} round={this.round}></BaseButton>
          </el-main>
        </el-row>
      );
    },
  }));
