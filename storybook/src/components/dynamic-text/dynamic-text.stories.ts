import { Meta } from '@storybook/web-components';

import './dynamic-text.scss';
import { dynamicTextArgs, DynamicTextControls, DynamicTextTemplate } from './dynamic-text.model';

export default {
  title: 'Components/Dynamic Text',
  argTypes: DynamicTextControls
} as Meta;

export const Default = DynamicTextTemplate.bind({});
Default.args = dynamicTextArgs;

export const TextFits = DynamicTextTemplate.bind({});
TextFits.args = {
  ...dynamicTextArgs,
  className: 'medium'
};

export const TextDoesNotFit = DynamicTextTemplate.bind({});
TextDoesNotFit.args = {
  ...dynamicTextArgs,
  className: 'medium',
  text: 'This is a longer dynamic text'
};

export const LargeWrapper = DynamicTextTemplate.bind({});
LargeWrapper.args = {
  ...dynamicTextArgs,
  className: 'large',
  text: 'This dynamic text is even longer then the previous one'
};

export const RightAligned = DynamicTextTemplate.bind({});
RightAligned.args = {
  ...dynamicTextArgs,
  alignment: 'right'
};
