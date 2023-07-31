import { Meta } from '@storybook/web-components';

import { stepperArgs, Template } from './stepper.model';

export default {
  title: 'Components/Stepper'
} as Meta;

export const Default = Template.bind({});
Default.args = stepperArgs;

export const FirstStep = Template.bind({});
FirstStep.args = {
  ...stepperArgs,
  activeStep: 0
};

export const Completed = Template.bind({});
Completed.args = {
  ...stepperArgs,
  activeStep: 3
};

export const ActiveLabelOnly = Template.bind({});
ActiveLabelOnly.args = {
  ...stepperArgs,
  steps: ['', 'Main category', '', '']
};

export const DisabledStep = Template.bind({});
DisabledStep.args = {
  ...stepperArgs,
  disabledSteps: [2]
};
