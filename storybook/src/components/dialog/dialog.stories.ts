import { Meta } from '@storybook/web-components';
import { html } from 'lit';

import { dialogArgs, DialogTemplate } from './dialog.model';

export default {
  title: 'Components/Dialog'
} as Meta;

export const Default = DialogTemplate.bind({});
Default.args = dialogArgs;

export const WithVisual = DialogTemplate.bind({});
WithVisual.args = {
  ...dialogArgs,
  visual: html`<img src="https://unsplash.it/600/400" style="width: 100%" />`,
};
