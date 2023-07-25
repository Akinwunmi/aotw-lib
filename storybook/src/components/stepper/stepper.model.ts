import '@aotw/components/src/stepper';
import { html } from 'lit';

import { Story } from '../../../types/story.model';

interface ArgTypes {
  activeStep?: number;
  steps: string[];
}

export const stepperArgs: ArgTypes = {
  activeStep: 1,
  steps: ['Name', 'Main category', 'Main topics', 'Layout']
};

export const Template: Story<ArgTypes> = (props) => {
  const steps = props.steps && props.steps.map((step, index) => html`
    <aotw-step ?active=${index === props.activeStep}>
      ${step}
    </aotw-step>
  `);

  return html`
    <aotw-stepper>
      ${steps || ''}
    </aotw-stepper>
  `;
};
