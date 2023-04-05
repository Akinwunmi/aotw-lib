import { Meta } from '@storybook/web-components';

import { tagArgs, TagControls, TagTemplate } from './tag';

export default {
  title: 'Core/Tag',
  argTypes: TagControls
} as Meta;

export const Default = TagTemplate.bind({});
Default.args = tagArgs;

export const WithPrefix = TagTemplate.bind({});
WithPrefix.args = {
  ...tagArgs,
  prefix: true
};

export const WithSuffix = TagTemplate.bind({});
WithSuffix.args = {
  ...tagArgs,
  suffix: true
};

export const WithoutLabel = TagTemplate.bind({});
WithoutLabel.args = {
  ...tagArgs,
  label: '',
  prefix: true,
  suffix: true
};

export const IconOnly = TagTemplate.bind({});
IconOnly.args = {
  ...tagArgs,
  label: '',
  prefix: true
};

export const CustomColors = TagTemplate.bind({});
CustomColors.args = {
  ...tagArgs,
  prefix: true,
  suffix: true,
  '--aotw-tag-background-color': 'var(--aotw-color-black)',
  '--aotw-tag-color': 'var(--aotw-color-white)'
};
