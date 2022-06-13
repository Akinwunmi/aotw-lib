import { Icon } from '@aotw/components/src/icon';
import { Meta } from '@storybook/web-components';

import './tag.scss';
import { tagArgs, TagControls, TagTemplate } from './tag.model';

export default {
  title: 'Components/Tag',
  argTypes: TagControls
} as Meta;

export const Default = TagTemplate.bind({});
Default.args = tagArgs;

export const WithIcon = TagTemplate.bind({});
WithIcon.args = {
  ...tagArgs,
  icon: Icon.SHINE,
  text: ''
};

export const WithTextAndIcon = TagTemplate.bind({});
WithTextAndIcon.args = {
  ...tagArgs,
  icon: Icon.SHINE
};

export const Deletable = TagTemplate.bind({});
Deletable.args = {
  ...tagArgs,
  deletable: true
};

export const DeletableWithIcon = TagTemplate.bind({});
DeletableWithIcon.args = {
  ...tagArgs,
  deletable: true,
  icon: Icon.SHINE,
  text: ''
};

export const CustomColors = TagTemplate.bind({});
CustomColors.args = {
  ...tagArgs,
  customClass: 'custom-colors'
};
