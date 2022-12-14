import '@aotw/components/src/dialog';
import { html, TemplateResult } from 'lit';

import { Story } from '../../../types/story.model';

interface DialogArgTypes {
  content: TemplateResult | string;
  title: TemplateResult;
  visual?: TemplateResult;
}

export const dialogArgs: DialogArgTypes = {
  content: 'Content',
  title: html`<span slot="title">Title</span>`
};

export const DialogTemplate: Story<DialogArgTypes> = ({ content, title, visual }) => {
  function closeDialog(e) {
    document.querySelector('#root-inner')?.removeChild(e.detail);
  }

  return html`
    <aotw-dialog @closeDialog=${closeDialog}>${title}${visual}${content}</aotw-dialog>
  `;
};