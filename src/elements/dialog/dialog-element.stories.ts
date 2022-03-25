import { html } from 'lit';

import '../../../dist/elements/dialog/dialog-element.js';
import { Story } from '../../stories';

export default {
  title: 'Component/Dialog',
  component: 'dialog-element'
};

interface ArgTypes {
  dialogTitle: boolean;
  scrim: boolean;
}

const Template: Story<ArgTypes> = ({ dialogTitle, scrim }: ArgTypes) => {
  return html`
    <aotw-dialog .dialogTitle=${dialogTitle} .scrim=${scrim}></aotw-dialog>
  `;
};

export const DialogDefault = Template.bind({});
DialogDefault.args = {
  dialogTitle: 'Dialog',
  scrim: true
};

export const Dialog = Template.bind({});
Dialog.args = {
  dialogTitle: 'Dialog',
  scrim: true
};

export const DialogWithoutScrim = Template.bind({});
DialogWithoutScrim.args = {
  dialogTitle: 'Dialog',
  scrim: false
};

export const DialogWithLongTitle = () => {
  return html`
    <aotw-dialog dialogTitle="Dialog With An Extremely Long Title That Will Not Fit On One Line">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Sequi possimus quisquam explicabo consequuntur, magnam ipsa incidunt ratione nemo a expedita.
      <span slot="visual"><img src="https://picsum.photos/150/100"></span>
    </aotw-dialog>
  `;
}

export const DialogWithVisual = () => {
  return html`
    <aotw-dialog dialogTitle="Dialog">
      <span slot="visual"><img src="https://picsum.photos/150/100"></span>
    </aotw-dialog>
  `;
}

export const DialogWithContent = () => {
  return html`
    <aotw-dialog dialogTitle="Dialog">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Sequi possimus quisquam explicabo consequuntur, magnam ipsa incidunt ratione nemo a expedita.
    </aotw-dialog>
  `;
}

export const DialogWithVisualAndContent = () => {
  return html`
    <aotw-dialog dialogTitle="Dialog">
      <span slot="visual"><img src="https://picsum.photos/150/100"></span>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Sequi possimus quisquam explicabo consequuntur, magnam ipsa incidunt ratione nemo a expedita.
    </aotw-dialog>
  `;
}
