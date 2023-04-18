import { Meta } from '@storybook/web-components';
import { iconsStub } from '../icon/icon.mock';

import { props, Template } from './card';

export default {
  title: 'Components/Card',
  argTypes: {
    '[header-prefix]': {
      control: 'select',
      defaultValue: 'icon',
      options: [undefined, ...iconsStub.map(icon => icon.name)]
    }
  }
} as Meta;

export const Default = Template.bind({});
Default.args = props;

export const NoImage = Template.bind({});
NoImage.args = {
  ...props,
  '[header-image]': false,
};

export const NoFooter = Template.bind({});
NoFooter.args = {
  ...props,
  footer: false,
};

export const TitleAndContent = Template.bind({});
TitleAndContent.args = {
  ...props,
  footer: false,
  '[header-image]': false,
  '[header-suffix]': false,
  '[header-prefix]': undefined,
};

export const ImageWithCaption = Template.bind({});
ImageWithCaption.args = {
  ...props,
  content: 'Friesland',
  footer: false,
  '[elevated]': false,
  '[header-prefix]': false,
  '[header-suffix]': false,
  '[header-title]': '',
};
