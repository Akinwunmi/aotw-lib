import { Meta } from '@storybook/web-components';

import { props, Template } from './container.model';

export default {
  title: 'Components/Container'
} as Meta;

export const Default = Template.bind({});
Default.args = props;

export const WithElevation = Template.bind({});
WithElevation.args = {
  ...props,
  elevated: true
};
